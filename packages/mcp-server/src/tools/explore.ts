import { readFile } from 'node:fs/promises';
import * as nodePath from 'node:path';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import {
  type PBObjectType,
  getObjectTypeFromExtension,
  resolveLibraryFromPath,
  parseFunctions,
  parseEvents,
  parseInstanceVariables,
  parseAncestor,
} from '@pb-toolkit/parser';
import { PBCache } from '../cache.js';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SearchResult {
  file: string;
  object: string;
  type: string;
  line: number;
  content: string;
  context?: string[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function toText(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

function isValidObjectType(value: string): value is PBObjectType {
  const valid: PBObjectType[] = [
    'window',
    'datawindow',
    'userobject',
    'menu',
    'function',
    'structure',
    'application',
    'project',
    'pipeline',
    'query',
    'unknown',
  ];
  return valid.includes(value as PBObjectType);
}

// ---------------------------------------------------------------------------
// Tool registration
// ---------------------------------------------------------------------------

export function registerExploreTools(server: McpServer, cache: PBCache): void {
  // -------------------------------------------------------------------------
  // pb_list_objects
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_list_objects',
    {
      title: 'List PowerBuilder Objects',
      description:
        'Lists all indexed PowerBuilder objects in the solution. Optionally filter by object type (window, datawindow, userobject, menu, function, structure, application, project, pipeline, query).',
      inputSchema: {
        object_type: z
          .string()
          .optional()
          .describe(
            'Optional filter by type: window | datawindow | userobject | menu | function | structure | application | project | pipeline | query',
          ),
        limit: z
          .number()
          .int()
          .min(1)
          .max(5000)
          .optional()
          .describe('Maximum number of objects to return (default: 100, max: 5000)'),
        offset: z
          .number()
          .int()
          .min(0)
          .optional()
          .describe('Number of objects to skip (default: 0)'),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ object_type, limit = 100, offset = 0 }) => {
      const allObjects =
        object_type && isValidObjectType(object_type)
          ? cache.getByType(object_type)
          : cache.getAll();

      const total = allObjects.length;
      const effectiveLimit = Math.min(limit, 5000);
      const sliced = allObjects.slice(offset, offset + effectiveLimit);

      const result = {
        total,
        limit: effectiveLimit,
        offset,
        has_more: offset + effectiveLimit < total,
        objects: sliced.map((o) => ({
          name: o.name,
          type: o.type,
          library: o.library,
          path: o.relativePath,
          ancestor: o.ancestor ?? null,
          functions: o.functions.length,
          events: o.events.length,
        })),
      };

      return {
        content: [{ type: 'text' as const, text: toText(result) }],
      };
    },
  );

  // -------------------------------------------------------------------------
  // pb_read_object
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_read_object',
    {
      title: 'Read PowerBuilder Object',
      description:
        'Reads a PowerBuilder source file and returns its full source code along with parsed metadata (type, ancestor, functions, events, variables).',
      inputSchema: {
        file_path: z
          .string()
          .describe('Relative or absolute path to the .sr* source file'),
        metadata_only: z
          .boolean()
          .optional()
          .describe('When true, return only metadata without source code (default: false)'),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ file_path, metadata_only = false }) => {
      // Resolve to absolute path.
      const solutionPath = cache.getSolutionPath();
      const absolutePath = nodePath.isAbsolute(file_path)
        ? file_path
        : nodePath.join(solutionPath, file_path);

      let content: string;
      try {
        content = await readFile(absolutePath, { encoding: 'utf-8' });
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify({ error: `Cannot read file: ${message}` }),
            },
          ],
          isError: true,
        };
      }

      const ext = nodePath.extname(absolutePath).toLowerCase();
      const type = getObjectTypeFromExtension(ext);
      const relativePath = nodePath
        .relative(solutionPath, absolutePath)
        .replace(/\\/g, '/');

      const ancestorInfo = parseAncestor(content);
      const functions = parseFunctions(content);
      const events = parseEvents(content);
      const instanceVariables = parseInstanceVariables(content);
      const library = resolveLibraryFromPath(relativePath);
      const lineCount = content.split(/\r?\n/).length;

      const result: Record<string, unknown> = {
        metadata: {
          name: ancestorInfo?.name ?? nodePath.basename(absolutePath, ext),
          type,
          library,
          relativePath,
          lineCount,
          ancestor: ancestorInfo?.ancestor ?? null,
          ancestorLibrary: ancestorInfo?.ancestorLibrary ?? null,
          functionCount: functions.length,
          eventCount: events.length,
          variableCount: instanceVariables.length,
          functions: functions.map((f) => ({
            name: f.name,
            returnType: f.returnType,
            access: f.access,
            params: f.params.length,
            lines: `${f.lineStart}-${f.lineEnd}`,
          })),
          events: events.map((e) => ({
            name: e.name,
            hasScript: e.hasScript,
            params: e.params.length,
            lines: `${e.lineStart}-${e.lineEnd}`,
          })),
          variables: instanceVariables.map((v) => ({
            name: v.name,
            type: v.type,
            access: v.access,
          })),
        },
      };
      if (!metadata_only) {
        result.source = content;
      }

      return {
        content: [{ type: 'text' as const, text: toText(result) }],
      };
    },
  );

  // -------------------------------------------------------------------------
  // pb_search_code
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_search_code',
    {
      title: 'Search PowerBuilder Code',
      description:
        'Searches through all PowerBuilder source files using a regex pattern. Returns matching lines with optional surrounding context.',
      inputSchema: {
        pattern: z.string().describe('Regular expression pattern to search for'),
        case_sensitive: z
          .boolean()
          .optional()
          .describe('Whether the search is case-sensitive (default: false)'),
        max_results: z
          .number()
          .int()
          .min(1)
          .max(500)
          .optional()
          .describe('Maximum number of results to return (default: 50, max: 500)'),
        file_type: z
          .string()
          .optional()
          .describe(
            'Restrict search to a specific object type: window | datawindow | userobject | menu | function | structure | application | project | pipeline | query',
          ),
        context_lines: z
          .number()
          .int()
          .min(0)
          .max(20)
          .optional()
          .describe('Number of lines of context to include around each match (0-20)'),
      },
      annotations: { readOnlyHint: true },
    },
    async ({
      pattern,
      case_sensitive = false,
      max_results = 50,
      file_type,
      context_lines = 0,
    }) => {
      let regex: RegExp;
      try {
        regex = new RegExp(pattern, case_sensitive ? 'g' : 'gi');
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify({ error: `Invalid regex: ${message}` }),
            },
          ],
          isError: true,
        };
      }

      const effectiveMax = Math.min(max_results ?? 50, 500);

      // Determine which files to search.
      const candidates =
        file_type && isValidObjectType(file_type)
          ? cache.getByType(file_type)
          : cache.getAll();

      const results: SearchResult[] = [];

      for (const obj of candidates) {
        if (results.length >= effectiveMax) break;

        let content: string;
        try {
          content = await readFile(obj.filePath, { encoding: 'utf-8' });
        } catch {
          continue;
        }

        const lines = content.split(/\r?\n/);
        // Reset regex lastIndex for each file (important for 'g' flag).
        regex.lastIndex = 0;

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i] ?? '';
          // Reset lastIndex per line for g-flagged regex.
          regex.lastIndex = 0;
          if (!regex.test(line)) continue;

          const match: SearchResult = {
            file: obj.relativePath,
            object: obj.name,
            type: obj.type,
            line: i + 1, // 1-based
            content: line,
          };

          if (context_lines > 0) {
            const start = Math.max(0, i - context_lines);
            const end = Math.min(lines.length - 1, i + context_lines);
            match.context = lines
              .slice(start, end + 1)
              .map((l, offset) => `${start + offset + 1}: ${l}`);
          }

          results.push(match);
          if (results.length >= effectiveMax) break;
        }
      }

      return {
        content: [
          {
            type: 'text' as const,
            text: toText({
              total_matches: results.length,
              truncated: results.length === effectiveMax,
              results,
            }),
          },
        ],
      };
    },
  );

  // -------------------------------------------------------------------------
  // pb_get_project_structure
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_get_project_structure',
    {
      title: 'Get Project Structure',
      description:
        'Returns a high-level overview of the PowerBuilder solution: libraries, object counts by type, and summary statistics.',
      inputSchema: {},
      annotations: { readOnlyHint: true },
    },
    async () => {
      const allObjects = cache.getAll();

      // Group by library.
      const libraryMap = new Map<
        string,
        { objects: typeof allObjects; typeCounts: Partial<Record<PBObjectType, number>> }
      >();

      for (const obj of allObjects) {
        const lib = obj.library || '(root)';
        const entry = libraryMap.get(lib) ?? { objects: [], typeCounts: {} };
        entry.objects.push(obj);
        entry.typeCounts[obj.type] = (entry.typeCounts[obj.type] ?? 0) + 1;
        libraryMap.set(lib, entry);
      }

      // Aggregate type counts across all objects.
      const objectsByType: Partial<Record<PBObjectType, number>> = {};
      for (const obj of allObjects) {
        objectsByType[obj.type] = (objectsByType[obj.type] ?? 0) + 1;
      }

      // Build library list sorted by size (descending).
      const libraries = Array.from(libraryMap.entries())
        .map(([name, { objects, typeCounts }]) => ({
          name,
          objectCount: objects.length,
          typeCounts,
        }))
        .sort((a, b) => b.objectCount - a.objectCount);

      const result = {
        solution_path: cache.getSolutionPath(),
        total_objects: allObjects.length,
        total_libraries: libraries.length,
        objects_by_type: objectsByType,
        libraries,
      };

      return {
        content: [{ type: 'text' as const, text: toText(result) }],
      };
    },
  );

  // -------------------------------------------------------------------------
  // pb_refresh_cache
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_refresh_cache',
    {
      title: 'Refresh Object Cache',
      description:
        'Re-scans the solution directory and rebuilds the in-memory cache. Use after external file changes (add, delete, rename) to ensure the cache is up-to-date.',
      inputSchema: {},
      annotations: { readOnlyHint: true },
    },
    async () => {
      const solutionPath = cache.getSolutionPath();
      if (!solutionPath) {
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify({ error: 'No solution path configured. Set PB_SOLUTION_PATH.' }),
            },
          ],
          isError: true,
        };
      }

      const countBefore = cache.getObjectCount();
      await cache.initialize(solutionPath);
      const countAfter = cache.getObjectCount();

      return {
        content: [
          {
            type: 'text' as const,
            text: toText({
              status: 'ok',
              solution_path: solutionPath,
              objects_before: countBefore,
              objects_after: countAfter,
              delta: countAfter - countBefore,
            }),
          },
        ],
      };
    },
  );
}
