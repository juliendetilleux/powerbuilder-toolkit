#!/usr/bin/env node
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdirSync } from 'node:fs';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { PBCache } from './cache.js';
import { registerExploreTools } from './tools/explore.js';
import { registerAnalyzeTools } from './tools/analyze.js';
import { registerModifyTools } from './tools/modify.js';
import { registerBuildTools } from './tools/build.js';
import { registerVisualTools } from './tools/visual.js';
import { registerRagTools } from './tools/rag.js';
import { registerDatabaseTools } from './tools/database.js';
import { RagDB } from './rag-db.js';
import { RagIndexer } from './rag-indexer.js';
import { RagEmbeddings } from './rag-embeddings.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PB_SOLUTION_PATH = process.env['PB_SOLUTION_PATH'] ?? '';

const server = new McpServer(
  {
    name: 'powerbuilder',
    version: '0.2.0',
  },
  {
    capabilities: { logging: {} },
  },
);

const cache = new PBCache();

// ---------------------------------------------------------------------------
// RAG system setup (objects only — no async init yet)
// ---------------------------------------------------------------------------
const docsPath = process.env['RAG_DOCS_PATH']
  ?? resolve(__dirname, '..', '..', '..', 'docs');
const dataDir = resolve(__dirname, '..', '..', '..', 'data');
mkdirSync(dataDir, { recursive: true });
const standardDbPath = resolve(dataDir, 'pmix-standard.db');

console.error(`[RAG] Docs path: ${docsPath}`);
console.error(`[RAG] DB path: ${standardDbPath}`);

const ragDb = new RagDB(standardDbPath);
const ragEmbeddings = new RagEmbeddings();
const ragIndexer = new RagIndexer(
  ragDb,
  docsPath,
  PB_SOLUTION_PATH || undefined,
);

// Register all tools (cache/RAG not yet populated, but tool handlers use them by ref).
registerExploreTools(server, cache);
registerAnalyzeTools(server, cache);
registerModifyTools(server, cache);
registerBuildTools(server, cache);
registerVisualTools(server, cache);
registerDatabaseTools(server);
registerRagTools(server, ragDb, ragIndexer, ragEmbeddings, docsPath);

// ---------------------------------------------------------------------------
// Connect to stdio transport FIRST so Claude Code doesn't timeout.
// Cache and RAG index are populated AFTER the MCP handshake completes.
// ---------------------------------------------------------------------------
const transport = new StdioServerTransport();
await server.connect(transport);
console.error('[PB MCP] Server connected — initializing cache and RAG in background...');

// Initialize cache (populates object index for PB tools).
if (PB_SOLUTION_PATH) {
  console.error(`[PB MCP] Initializing cache from ${PB_SOLUTION_PATH}...`);
  await cache.initialize(PB_SOLUTION_PATH);
  console.error(`[PB MCP] Cache ready: ${cache.getObjectCount()} objects indexed`);
} else {
  console.error('[PB MCP] No PB_SOLUTION_PATH set — cache not initialized');
}

// Run incremental RAG indexation.
try {
  const stats = await ragIndexer.indexIncremental();
  const dbStats = ragDb.getStats();
  console.error(
    `[RAG] Index ready: ${dbStats.total_chunks} chunks ` +
      `(${dbStats.standard_chunks} std, ${dbStats.custom_chunks} custom, ${dbStats.learned_chunks} learned) ` +
      `— ${stats.files_processed} files processed in ${stats.duration_ms}ms`,
  );
} catch (err) {
  console.error(`[RAG] Indexation error: ${err}`);
}

console.error('[PB MCP] Fully initialized (21 PB tools + 5 RAG tools + 3 DB tools)');
