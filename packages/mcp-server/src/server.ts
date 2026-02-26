#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { PBCache } from './cache.js';
import { registerExploreTools } from './tools/explore.js';
import { registerAnalyzeTools } from './tools/analyze.js';
import { registerModifyTools } from './tools/modify.js';
import { registerBuildTools } from './tools/build.js';
import { registerVisualTools } from './tools/visual.js';

const PB_SOLUTION_PATH = process.env['PB_SOLUTION_PATH'] ?? '';

const server = new McpServer(
  {
    name: 'powerbuilder',
    version: '0.1.0',
  },
  {
    capabilities: { logging: {} },
  },
);

const cache = new PBCache();

// Initialize cache if solution path is configured.
if (PB_SOLUTION_PATH) {
  console.error(`[PB MCP] Initializing cache from ${PB_SOLUTION_PATH}...`);
  await cache.initialize(PB_SOLUTION_PATH);
  console.error(`[PB MCP] Cache ready: ${cache.getObjectCount()} objects indexed`);
} else {
  console.error('[PB MCP] No PB_SOLUTION_PATH set — cache not initialized');
}

// Register all exploration tools.
registerExploreTools(server, cache);
registerAnalyzeTools(server, cache);
registerModifyTools(server, cache);
registerBuildTools(server, cache);
registerVisualTools(server, cache);

// Connect to stdio transport and start.
const transport = new StdioServerTransport();
await server.connect(transport);
console.error('[PB MCP] Server running on stdio');
