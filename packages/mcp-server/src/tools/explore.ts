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
  parseDataWindowSQL,
  parseDataWindowColumns,
  parseDataWindowArguments,
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
          .describe(
            'Path to the .sr* source file (relative or absolute), OR a simple object name (e.g. "w_response") which will be resolved via the cache.',
          ),
        metadata_only: z
          .boolean()
          .optional()
          .describe('When true, return only metadata without source code (default: false)'),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ file_path, metadata_only = false }) => {
      const solutionPath = cache.getSolutionPath();
      let absolutePath: string;

      // If the input looks like a bare object name (no path separators, no .sr extension),
      // attempt to resolve it via the cache.
      const looksLikeName = !file_path.includes('/') && !file_path.includes('\\') && !/\.sr[wdumafsjpq]$/i.test(file_path);
      if (looksLikeName) {
        const obj = cache.getByName(file_path);
        if (obj) {
          absolutePath = obj.filePath;
        } else {
          return {
            content: [{
              type: 'text' as const,
              text: JSON.stringify({
                error: `Object '${file_path}' not found in cache. Use the full relative path or check the object name.`,
              }),
            }],
            isError: true,
          };
        }
      } else {
        absolutePath = nodePath.isAbsolute(file_path)
          ? file_path
          : nodePath.join(solutionPath, file_path);
      }

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

        const content = cache.getContent(obj.relativePath)
          ?? await readFile(obj.filePath, { encoding: 'utf-8' }).catch(() => null);
        if (!content) continue;

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

  // -------------------------------------------------------------------------
  // pb_get_datawindow_sql
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_get_datawindow_sql',
    {
      title: 'Get DataWindow SQL',
      description:
        'Extracts the SQL SELECT statement, update properties, arguments, column definitions, and computed fields from a DataWindow source file.',
      inputSchema: {
        dataobject: z
          .string()
          .describe('DataWindow object name (e.g. "d_items")'),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ dataobject }) => {
      const obj = cache.getByName(dataobject);
      if (!obj || obj.type !== 'datawindow') {
        return {
          content: [{
            type: 'text' as const,
            text: JSON.stringify({
              error: `DataWindow '${dataobject}' not found in cache.`,
            }),
          }],
          isError: true,
        };
      }

      let source: string;
      try {
        source = await readFile(obj.filePath, { encoding: 'utf-8' });
      } catch {
        return {
          content: [{
            type: 'text' as const,
            text: JSON.stringify({ error: `Cannot read file: ${obj.filePath}` }),
          }],
          isError: true,
        };
      }

      const sql = parseDataWindowSQL(source);
      const args = parseDataWindowArguments(source);
      const columns = parseDataWindowColumns(source);

      // Extract processing type: processing=N in datawindow(...) block.
      const PROCESSING_TYPES: Record<number, string> = {
        0: 'freeform', 1: 'tabular', 2: 'grid', 3: 'label',
        4: 'nup', 5: 'crosstab', 6: 'group', 7: 'composite',
        8: 'richtext', 9: 'ole2', 10: 'treeview',
      };
      const procMatch = /\bdatawindow\b[^)]*\bprocessing=(\d+)/i.exec(source);
      const processingNum = procMatch ? parseInt(procMatch[1]!, 10) : 0;
      const processing = PROCESSING_TYPES[processingNum] ?? `unknown(${processingNum})`;

      // Extract update properties from table(...) block.
      const updateMatch = /\bupdate="([^"]+)"/i.exec(source);
      const updateTable = updateMatch?.[1] ?? null;

      const UPDATE_WHERE: Record<number, string> = {
        0: 'key_columns', 1: 'key_and_updatable', 2: 'key_and_modified',
      };
      const uwMatch = /\bupdatewhere=(\d+)/i.exec(source);
      const updateWhere = uwMatch
        ? UPDATE_WHERE[parseInt(uwMatch[1]!, 10)] ?? 'unknown'
        : null;

      // Extract key columns from table(...) column=(...) blocks.
      // Uses balanced-paren extraction to handle types like char(20).
      const keyColNames: string[] = [];
      const colDefRegex = /\bcolumn\s*=\s*\(/gi;
      let km: RegExpExecArray | null;
      while ((km = colDefRegex.exec(source)) !== null) {
        const parenStart = source.indexOf('(', km.index);
        if (parenStart === -1) continue;
        let depth = 0;
        let end = parenStart;
        for (let i = parenStart; i < source.length; i++) {
          if (source[i] === '(') depth++;
          else if (source[i] === ')') {
            depth--;
            if (depth === 0) { end = i; break; }
          }
        }
        const block = source.slice(parenStart + 1, end);
        if (/\bkey=yes\b/i.test(block)) {
          const nameMatch = /\bname=(\w+)/i.exec(block);
          if (nameMatch?.[1]) keyColNames.push(nameMatch[1]);
        }
      }

      // Extract computed fields: compute(band=X ... expression="..." ... name=Y ...)
      const computedFields: Array<{ name: string; expression: string; band: string }> = [];
      const compRegex = /\bcompute\s*\(\s*band=(\w+)\b/gi;
      let cm: RegExpExecArray | null;
      while ((cm = compRegex.exec(source)) !== null) {
        const band = cm[1] ?? '';
        // Extract balanced-paren block for this compute.
        const parenStart = source.indexOf('(', cm.index);
        if (parenStart === -1) continue;
        let depth = 0;
        let end = parenStart;
        for (let i = parenStart; i < source.length; i++) {
          if (source[i] === '(') depth++;
          else if (source[i] === ')') {
            depth--;
            if (depth === 0) { end = i; break; }
          }
        }
        const block = source.slice(parenStart + 1, end);
        const exprMatch = /\bexpression="((?:[^"~]|~.)*)"/i.exec(block);
        const nameMatch = /\bname=(\w+)/i.exec(block);
        if (nameMatch?.[1]) {
          computedFields.push({
            name: nameMatch[1],
            expression: exprMatch?.[1]?.replace(/~"/g, '"') ?? '',
            band,
          });
        }
      }

      const result = {
        dataobject,
        file: obj.relativePath,
        processing,
        sql: sql ?? null,
        update_table: updateTable,
        update_where: updateWhere,
        key_columns: keyColNames,
        arguments: args.map(a => ({ name: a.name, type: a.type })),
        columns: columns.map(c => ({
          name: c.name,
          dbName: c.dbName,
          type: c.type,
          band: c.band,
          key: keyColNames.includes(c.name),
        })),
        computed_fields: computedFields,
      };

      return { content: [{ type: 'text' as const, text: toText(result) }] };
    },
  );
}
