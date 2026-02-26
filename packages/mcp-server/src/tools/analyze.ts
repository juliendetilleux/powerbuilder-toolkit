import { readFile } from 'node:fs/promises';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { PBCache } from '../cache.js';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface AncestorEntry {
  name: string;
  type: string;
  library: string;
}

interface DependencyResult {
  file: string;
  object: string;
  type: string;
  line: number;
  content: string;
}

interface CallLocation {
  file: string;
  object: string;
  line: number;
  context: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function toText(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

// ---------------------------------------------------------------------------
// Tool registration
// ---------------------------------------------------------------------------

export function registerAnalyzeTools(server: McpServer, cache: PBCache): void {
  // -------------------------------------------------------------------------
  // pb_get_inheritance
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_get_inheritance',
    {
      title: 'Get Inheritance Chain',
      description:
        'Resolves the full inheritance chain for a PowerBuilder object: all ancestors above it and all descendants that inherit from it.',
      inputSchema: {
        object_name: z.string().describe('Name of the PowerBuilder object (e.g. w_main)'),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ object_name }) => {
      const obj = cache.getByName(object_name);
      if (!obj) {
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify({ error: `Object not found: ${object_name}` }),
            },
          ],
          isError: true,
        };
      }

      // Build ancestor chain by walking up the hierarchy.
      const ancestors: AncestorEntry[] = [];
      let currentAncestorName = obj.ancestor;
      const visited = new Set<string>([obj.name.toLowerCase()]);

      while (currentAncestorName) {
        const lowerName = currentAncestorName.toLowerCase();
        if (visited.has(lowerName)) break; // Guard against circular references.
        visited.add(lowerName);

        const ancestorObj = cache.getByName(currentAncestorName);
        if (!ancestorObj) {
          // Ancestor is referenced but not in this solution (e.g. PB built-in).
          ancestors.push({
            name: currentAncestorName,
            type: 'unknown',
            library: '',
          });
          break;
        }

        ancestors.push({
          name: ancestorObj.name,
          type: ancestorObj.type,
          library: ancestorObj.library,
        });

        currentAncestorName = ancestorObj.ancestor;
      }

      // Find all descendants: objects whose ancestor matches (case-insensitive).
      const targetName = obj.name.toLowerCase();
      const descendants: AncestorEntry[] = cache
        .getAll()
        .filter((o) => o.ancestor?.toLowerCase() === targetName)
        .map((o) => ({
          name: o.name,
          type: o.type,
          library: o.library,
        }));

      const result = {
        object: {
          name: obj.name,
          type: obj.type,
          library: obj.library,
          ancestor: obj.ancestor ?? null,
        },
        ancestors,
        descendants,
      };

      return {
        content: [{ type: 'text' as const, text: toText(result) }],
      };
    },
  );

  // -------------------------------------------------------------------------
  // pb_get_dependencies
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_get_dependencies',
    {
      title: 'Get Object Dependencies',
      description:
        'Finds all source files that reference the given object name, showing where it is used across the codebase.',
      inputSchema: {
        object_name: z.string().describe('Name of the PowerBuilder object to search for'),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ object_name }) => {
      // Build a word-boundary regex for the object name.
      // PowerScript is case-insensitive but we do a case-insensitive match.
      const escaped = object_name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pattern = new RegExp(`\\b${escaped}\\b`, 'gi');

      const referencedBy: DependencyResult[] = [];

      for (const obj of cache.getAll()) {
        // Skip the object itself — we want what references it.
        if (obj.name.toLowerCase() === object_name.toLowerCase()) continue;

        let content: string;
        try {
          content = await readFile(obj.filePath, { encoding: 'utf-8' });
        } catch {
          continue;
        }

        const lines = content.split(/\r?\n/);
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i] ?? '';
          pattern.lastIndex = 0;
          if (pattern.test(line)) {
            referencedBy.push({
              file: obj.relativePath,
              object: obj.name,
              type: obj.type,
              line: i + 1,
              content: line.trim(),
            });
          }
        }
      }

      return {
        content: [
          {
            type: 'text' as const,
            text: toText({
              object_name,
              references_count: referencedBy.length,
              referenced_by: referencedBy,
            }),
          },
        ],
      };
    },
  );

  // -------------------------------------------------------------------------
  // pb_get_object_summary
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_get_object_summary',
    {
      title: 'Get Object Summary',
      description:
        'Returns a concise summary of a PowerBuilder object — public functions, overridden events, and key instance variables — ideal for quickly understanding its purpose.',
      inputSchema: {
        object_name: z.string().describe('Name of the PowerBuilder object'),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ object_name }) => {
      const obj = cache.getByName(object_name);
      if (!obj) {
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify({ error: `Object not found: ${object_name}` }),
            },
          ],
          isError: true,
        };
      }

      // Only public functions (not events that are represented as functions).
      const publicFunctions = obj.functions
        .filter((f) => f.access === 'public' && !f.isEvent)
        .map((f) => ({
          name: f.name,
          returnType: f.returnType,
          params: f.params.map((p) => `${p.type} ${p.name}`),
        }));

      // Only events that have script (implemented).
      const overriddenEvents = obj.events
        .filter((e) => e.hasScript)
        .map((e) => ({ name: e.name }));

      // Only instance variables (not global, not shared).
      const keyVariables = obj.instanceVariables.map((v) => ({
        name: v.name,
        type: v.type,
      }));

      const result = {
        name: obj.name,
        type: obj.type,
        library: obj.library,
        ancestor: obj.ancestor ?? null,
        line_count: obj.lineCount,
        description: `${obj.type} inheriting from ${obj.ancestor ?? '(none)'}`,
        public_functions: publicFunctions,
        overridden_events: overriddenEvents,
        key_variables: keyVariables,
      };

      return {
        content: [{ type: 'text' as const, text: toText(result) }],
      };
    },
  );

  // -------------------------------------------------------------------------
  // pb_get_call_graph
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_get_call_graph',
    {
      title: 'Get Call Graph',
      description:
        'Finds all callers of a function across the codebase, and identifies functions called within that function\'s body.',
      inputSchema: {
        function_name: z.string().describe('Name of the function to analyse'),
        max_depth: z
          .number()
          .int()
          .min(1)
          .max(5)
          .optional()
          .describe('Maximum search depth (currently used for callers only, default: 1)'),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ function_name }) => {
      const escaped = function_name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      // Callers: any line that calls the function with parentheses.
      const callerPattern = new RegExp(`\\b${escaped}\\s*\\(`, 'gi');

      const callers: CallLocation[] = [];
      let functionBody = '';
      let functionBodyObject = '';

      for (const obj of cache.getAll()) {
        let content: string;
        try {
          content = await readFile(obj.filePath, { encoding: 'utf-8' });
        } catch {
          continue;
        }

        const lines = content.split(/\r?\n/);

        // Check if this file contains the function definition.
        // If so, capture its body for callee analysis.
        for (const fn of obj.functions) {
          if (fn.name.toLowerCase() === function_name.toLowerCase()) {
            // Extract the function body lines.
            const bodyLines = lines.slice(fn.lineStart, fn.lineEnd - 1);
            functionBody = bodyLines.join('\n');
            functionBodyObject = obj.name;
          }
        }

        // Search for callers of this function.
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i] ?? '';
          callerPattern.lastIndex = 0;
          if (!callerPattern.test(line)) continue;

          // Skip the function definition line itself.
          const isDefinition =
            /^\s*(public|private|protected)?\s*(function|subroutine)\s+/i.test(line) &&
            new RegExp(`\\b${escaped}\\b`, 'i').test(line);

          if (isDefinition) continue;

          callers.push({
            file: obj.relativePath,
            object: obj.name,
            line: i + 1,
            context: line.trim(),
          });
        }
      }

      // Extract callees from the function body.
      // PowerScript function calls follow the pattern: word(
      const callees: string[] = [];
      if (functionBody) {
        // Match word-boundary identifiers followed by (.
        const calleePattern = /\b([a-z_][a-z0-9_]*)\s*\(/gi;
        const seen = new Set<string>();
        // PowerScript keywords that look like calls but aren't.
        const keywords = new Set([
          'if', 'for', 'while', 'do', 'choose', 'try', 'catch', 'not',
          'and', 'or', 'return', 'string', 'integer', 'long', 'date', 'datetime',
          'time', 'boolean', 'double', 'decimal', 'blob', 'any',
        ]);

        let match: RegExpExecArray | null;
        while ((match = calleePattern.exec(functionBody)) !== null) {
          const callee = match[1];
          if (callee && !seen.has(callee.toLowerCase()) && !keywords.has(callee.toLowerCase())) {
            seen.add(callee.toLowerCase());
            callees.push(callee);
          }
        }
      }

      return {
        content: [
          {
            type: 'text' as const,
            text: toText({
              function_name,
              defined_in: functionBodyObject || null,
              callers,
              callees,
            }),
          },
        ],
      };
    },
  );
}
