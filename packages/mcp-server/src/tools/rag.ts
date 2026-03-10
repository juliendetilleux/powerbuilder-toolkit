/**
 * rag.ts — MCP tool registration for the PMIX RAG system.
 *
 * Exposes 5 tools:
 *   pmix_search   — hybrid FTS5 + vector search
 *   pmix_lookup   — direct object name lookup (FTS5 only)
 *   pmix_correct  — auto-correct documentation errors
 *   pmix_learn    — capture new knowledge
 *   pmix_reindex  — force full re-indexation
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { RagDB } from '../rag-db.js';
import type { RagIndexer } from '../rag-indexer.js';
import type { RagEmbeddings } from '../rag-embeddings.js';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function toText(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

/** Uniform error response builder for all RAG tools. */
function toolError(toolName: string, err: unknown) {
  const msg = err instanceof Error ? err.message : String(err);
  return {
    content: [{ type: 'text' as const, text: `${toolName} error: ${msg}` }],
    isError: true as const,
  };
}

// ---------------------------------------------------------------------------
// Tool registration
// ---------------------------------------------------------------------------

export function registerRagTools(
  server: McpServer,
  db: RagDB,
  indexer: RagIndexer,
  embeddings: RagEmbeddings,
  docsPath: string,
): void {
  // -----------------------------------------------------------------------
  // pmix_search
  // -----------------------------------------------------------------------
  server.registerTool(
    'pmix_search',
    {
      title: 'Search PMIX Knowledge',
      description:
        'Searches the PMIX knowledge base using hybrid full-text + semantic search. ' +
        'Returns the most relevant documentation chunks and source code extracts. ' +
        'Use this for any question about PMIX ERP: business processes, tables, windows, DataWindows, or code.',
      inputSchema: {
        query: z
          .string()
          .min(1)
          .describe('The search query — natural language question or technical term'),
        limit: z
          .number()
          .int()
          .min(1)
          .max(30)
          .optional()
          .describe('Maximum number of results (default: 8)'),
        source: z
          .enum(['standard', 'custom', 'all'])
          .optional()
          .describe(
            'Filter by source: "standard" (docs only), "custom" (project-specific Cust_* code only), or "all" (default)',
          ),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ query, limit = 8, source }) => {
      try {
        // Generate query embedding (may return null if model not ready).
        const queryEmbedding = await embeddings.embed(query);

        const results = db.searchHybrid(query, queryEmbedding, limit * 3);

        // Filter by source if requested.
        let filtered = results;
        if (source && source !== 'all') {
          filtered = results.filter((r) => r.source === source);
        }

        // Trim to requested limit.
        filtered = filtered.slice(0, limit);

        const stats = db.getStats();

        return {
          content: [
            {
              type: 'text' as const,
              text: toText({
                total_results: filtered.length,
                results: filtered.map((r) => ({
                  score: Math.round(r.score * 100) / 100,
                  source: r.source,
                  path: r.path,
                  domain: r.domain,
                  obj_type: r.obj_type,
                  obj_name: r.obj_name,
                  section: r.section,
                  content:
                    r.content.length > 800
                      ? r.content.substring(0, 800) + '...'
                      : r.content,
                })),
                index_stats: {
                  standard_chunks: stats.standard_chunks,
                  custom_chunks: stats.custom_chunks,
                  learned_chunks: stats.learned_chunks,
                },
              }),
            },
          ],
        };
      } catch (err) {
        return toolError('pmix_search', err);
      }
    },
  );

  // -----------------------------------------------------------------------
  // pmix_lookup
  // -----------------------------------------------------------------------
  server.registerTool(
    'pmix_lookup',
    {
      title: 'Lookup PMIX Object',
      description:
        'Direct lookup of a PMIX object by name (table, window, DataWindow, function). ' +
        'Uses exact keyword matching (FTS5) for maximum precision. ' +
        'Use when you know the exact object name.',
      inputSchema: {
        name: z
          .string()
          .min(1)
          .describe(
            'Name of the object to look up (e.g. "linkitad", "w_item_update", "d_purline_update")',
          ),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ name }) => {
      try {
        // FTS5 search with high weight on obj_name column.
        const results = db.searchFTS(name, 20);

        // Boost exact obj_name matches to the top.
        const sorted = results.sort((a, b) => {
          const aExact =
            a.obj_name?.toLowerCase() === name.toLowerCase() ? 1 : 0;
          const bExact =
            b.obj_name?.toLowerCase() === name.toLowerCase() ? 1 : 0;
          if (aExact !== bExact) return bExact - aExact;
          return b.score - a.score;
        });

        return {
          content: [
            {
              type: 'text' as const,
              text: toText({
                name,
                total_results: sorted.length,
                results: sorted.map((r) => ({
                  score: Math.round(r.score * 100) / 100,
                  source: r.source,
                  path: r.path,
                  domain: r.domain,
                  obj_type: r.obj_type,
                  obj_name: r.obj_name,
                  section: r.section,
                  content:
                    r.content.length > 800
                      ? r.content.substring(0, 800) + '...'
                      : r.content,
                })),
              }),
            },
          ],
        };
      } catch (err) {
        return toolError('pmix_lookup', err);
      }
    },
  );

  // -----------------------------------------------------------------------
  // pmix_correct
  // -----------------------------------------------------------------------
  server.registerTool(
    'pmix_correct',
    {
      title: 'Correct PMIX Documentation',
      description:
        'Corrects an error discovered in the PMIX standard documentation. ' +
        'Only modifies files inside the docs/ directory (never source code). ' +
        'Logs every correction for traceability.',
      inputSchema: {
        path: z
          .string()
          .min(1)
          .describe(
            'Relative path inside docs/ (e.g. "knowledge/04-masters-suppliers.md")',
          ),
        old_text: z
          .string()
          .min(1)
          .describe('Exact text to replace (must appear exactly once)'),
        new_text: z
          .string()
          .min(1)
          .describe('Replacement text'),
        reason: z
          .string()
          .min(1)
          .describe('Reason for the correction (for traceability)'),
      },
      annotations: { readOnlyHint: false },
    },
    async ({ path: relPath, old_text, new_text, reason }) => {
      try {
        // Security: only allow paths inside docs/
        if (relPath.includes('..') || relPath.startsWith('/')) {
          return {
            content: [
              {
                type: 'text' as const,
                text: 'Error: path must be relative and inside docs/',
              },
            ],
            isError: true,
          };
        }

        const fullPath = resolve(docsPath, relPath);

        // Verify file exists and is inside docs/
        if (!fullPath.startsWith(resolve(docsPath))) {
          return {
            content: [
              {
                type: 'text' as const,
                text: 'Error: path escapes docs/ directory',
              },
            ],
            isError: true,
          };
        }

        let content: string;
        try {
          content = readFileSync(fullPath, 'utf-8');
        } catch {
          return {
            content: [
              {
                type: 'text' as const,
                text: `Error: file not found: ${relPath}`,
              },
            ],
            isError: true,
          };
        }

        // Verify old_text exists exactly once.
        const occurrences = content.split(old_text).length - 1;
        if (occurrences === 0) {
          return {
            content: [
              {
                type: 'text' as const,
                text: `Error: old_text not found in ${relPath}`,
              },
            ],
            isError: true,
          };
        }
        if (occurrences > 1) {
          return {
            content: [
              {
                type: 'text' as const,
                text: `Error: old_text found ${occurrences} times in ${relPath} (must be unique)`,
              },
            ],
            isError: true,
          };
        }

        // Apply correction.
        const corrected = content.replace(old_text, new_text);
        writeFileSync(fullPath, corrected, 'utf-8');

        // Log the correction.
        db.insertCorrection(relPath, old_text, new_text, reason);

        // Re-index the modified file atomically.
        const chunks = indexer.chunkMarkdown(corrected, relPath);
        const mtime = Date.now() / 1000;
        db.runInTransaction(() => {
          db.deleteByPath(relPath);
          for (const chunk of chunks) {
            db.insertChunk({ ...chunk, mtime });
          }
        });

        return {
          content: [
            {
              type: 'text' as const,
              text: toText({
                status: 'corrected',
                path: relPath,
                reason,
                chunks_reindexed: chunks.length,
              }),
            },
          ],
        };
      } catch (err) {
        return toolError('pmix_correct', err);
      }
    },
  );

  // -----------------------------------------------------------------------
  // pmix_learn
  // -----------------------------------------------------------------------
  server.registerTool(
    'pmix_learn',
    {
      title: 'Capture PMIX Knowledge',
      description:
        'Captures a new piece of knowledge discovered during work. ' +
        'The knowledge is indexed and will appear in future pmix_search results. ' +
        'Use when you discover patterns, tips, or facts not in the documentation.',
      inputSchema: {
        topic: z
          .string()
          .min(1)
          .describe('Short topic (e.g. "PB tab navigation", "linkitad lktyp values")'),
        content: z
          .string()
          .min(1)
          .describe('The knowledge content (free text)'),
        tags: z
          .array(z.string())
          .optional()
          .describe(
            'Optional tags for easier retrieval (e.g. ["visual", "tab", "PBTabControl"])',
          ),
      },
      annotations: { readOnlyHint: false },
    },
    async ({ topic, content, tags }) => {
      try {
        const chunkId = db.insertLearned(topic, content, tags ?? []);

        // Generate and store embedding.
        const embedding = await embeddings.embed(`${topic} ${content}`);
        if (embedding) {
          db.insertEmbedding(chunkId, embedding);
        }

        const stats = db.getStats();

        return {
          content: [
            {
              type: 'text' as const,
              text: toText({
                status: 'learned',
                chunk_id: chunkId,
                topic,
                tags: tags ?? [],
                total_learned: stats.learned_chunks,
                has_embedding: embedding !== null,
              }),
            },
          ],
        };
      } catch (err) {
        return toolError('pmix_learn', err);
      }
    },
  );

  // -----------------------------------------------------------------------
  // pmix_reindex
  // -----------------------------------------------------------------------
  server.registerTool(
    'pmix_reindex',
    {
      title: 'Reindex PMIX Knowledge Base',
      description:
        'Forces a complete re-indexation of both standard docs and project-specific code. ' +
        'Use after modifying docs or when the index seems out of date.',
      inputSchema: {},
      annotations: { readOnlyHint: false },
    },
    async () => {
      try {
        const stats = await indexer.indexAll();

        return {
          content: [
            {
              type: 'text' as const,
              text: toText({
                status: 'reindexed',
                ...stats,
                db_stats: db.getStats(),
              }),
            },
          ],
        };
      } catch (err) {
        return toolError('pmix_reindex', err);
      }
    },
  );
}
