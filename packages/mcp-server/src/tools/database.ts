/**
 * database.ts — MCP tools for SQL Anywhere database introspection.
 *
 * Provides read-only access to the PMIX database via dbisql CLI.
 * All tools are SELECT-only — no INSERT/UPDATE/DELETE allowed.
 *
 * Tools:
 *   pmix_sql      — Execute a read-only SQL query
 *   pmix_tables   — List tables/views with row counts
 *   pmix_describe — Describe a table's columns, keys, and foreign keys
 */

import { execFile } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import * as nodePath from 'node:path';
import { promisify } from 'node:util';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

const execFileAsync = promisify(execFile);

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Default DSN for SQL Anywhere connection. */
const DEFAULT_DSN = 'Pmix';

/** Maximum rows returned by pmix_sql to prevent accidental huge result sets. */
const MAX_ROWS = 500;

/** Timeout for dbisql commands (ms). */
const DBISQL_TIMEOUT = 30_000;

/** SQL keywords that indicate a write operation — rejected by pmix_sql. */
const WRITE_KEYWORDS =
  /\b(INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|TRUNCATE|GRANT|REVOKE|EXEC|EXECUTE|CALL)\b/i;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function toText(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

function toolError(toolName: string, err: unknown) {
  const msg = err instanceof Error ? err.message : String(err);
  return {
    content: [{ type: 'text' as const, text: `${toolName} error: ${msg}` }],
    isError: true as const,
  };
}

/**
 * Find the dbisql executable path.
 * Checks the DBISQL_PATH env var first, then common install locations.
 */
function getDbisqlPath(): string {
  if (process.env['DBISQL_PATH']) return process.env['DBISQL_PATH'];

  // On non-Windows, just try 'dbisql' in PATH
  if (process.platform !== 'win32') return 'dbisql';

  // Common locations on Windows — prefer 32-bit (matches PMIX 32-bit ODBC DSN)
  const candidates = [
    'C:\\Program Files\\SQL Anywhere 17\\Bin32\\dbisql.exe',
    'C:\\Program Files (x86)\\SQL Anywhere 17\\Bin32\\dbisql.exe',
    'C:\\Program Files\\SQL Anywhere 17\\Bin64\\dbisql.exe',
    'C:\\Program Files\\SQL Anywhere 16\\Bin32\\dbisql.exe',
  ];

  for (const p of candidates) {
    if (existsSync(p)) return p;
  }

  return 'dbisql'; // fallback to PATH
}

/**
 * Execute a SQL query via dbisql CLI and return the raw output.
 * Uses -nogui mode for non-interactive execution.
 */
async function execSql(
  query: string,
  dsn: string = DEFAULT_DSN,
): Promise<string> {
  const dbisql = getDbisqlPath();

  const { stdout, stderr } = await execFileAsync(
    dbisql,
    ['-c', `DSN=${dsn}`, '-nogui', query],
    { timeout: DBISQL_TIMEOUT },
  );

  // dbisql writes errors to stdout, not stderr
  const output = stdout.trim();

  // Check for SQL errors in output
  if (output.includes('SQLCODE=-') || output.includes("Impossible d'ex")) {
    throw new Error(output.split('\n').slice(0, 3).join(' '));
  }

  return output;
}

/**
 * Read the DSN from the pmix.ini file.
 * Parses DbParm="Connectstring='DSN=xxx'" to extract the DSN name.
 * Returns null if file not found or DSN not parseable.
 */
function readDsnFromPmixIni(): string | null {
  const solutionPath = process.env['PB_SOLUTION_PATH'];
  if (!solutionPath) return null;

  // pmix.ini is typically at <solution>/pmix/pmix.ini
  const iniPath = nodePath.join(solutionPath, 'pmix', 'pmix.ini');
  if (!existsSync(iniPath)) return null;

  try {
    const content = readFileSync(iniPath, 'utf-8');
    // Match DbParm="Connectstring='DSN=Meyers'" or DbParm="ConnectString='DSN=Meyers;...'"
    const match = content.match(/DbParm\s*=\s*"[^"]*DSN=([^'";,\s]+)/i);
    if (match?.[1]) {
      return match[1];
    }
  } catch {
    // File read error — ignore
  }
  return null;
}

/**
 * Resolve DSN with priority: PMIX_DSN env > pmix.ini > DEFAULT_DSN fallback.
 */
function resolveDsn(): string {
  // 1. Environment variable (highest priority)
  if (process.env['PMIX_DSN']) return process.env['PMIX_DSN'];

  // 2. Read from pmix.ini
  const iniDsn = readDsnFromPmixIni();
  if (iniDsn) return iniDsn;

  // 3. Fallback
  return DEFAULT_DSN;
}

/**
 * Parse dbisql tabular output into an array of objects.
 *
 * dbisql outputs:
 *   Line 0: column headers (fixed-width, space-padded)
 *   Line 1: separator (continuous dashes)
 *   Lines 2+: data rows (same column widths as header)
 *   Footer: empty line + "(N lignes)"
 *
 * Column boundaries are detected from the HEADER line by finding gaps of
 * 2+ spaces between words. The separator line may be a single unbroken
 * dash block (no spaces between columns), so we cannot rely on it.
 */
function parseDbisqlOutput(output: string): Record<string, string>[] {
  const lines = output.split('\n').map((l) => l.replace(/\r$/, ''));

  if (lines.length < 3) return [];

  const headerLine = lines[0]!;

  // Detect column start positions from the header line.
  // Columns are separated by 2+ spaces. Each column starts where a
  // non-space character appears after a gap.
  const colStarts: number[] = [0];
  let inGap = false;

  for (let i = 0; i < headerLine.length; i++) {
    if (headerLine[i] === ' ') {
      inGap = true;
    } else if (inGap) {
      // Check if the gap was 2+ spaces (single space could be within a name).
      const gapStart = headerLine.lastIndexOf(' ', i - 1);
      let gapLen = 0;
      for (let j = i - 1; j >= 0 && headerLine[j] === ' '; j--) gapLen++;
      if (gapLen >= 2) {
        colStarts.push(i);
      }
      inGap = false;
    }
  }

  // Build boundaries: each column runs from its start to the next column's start.
  const boundaries: Array<{ start: number; end: number }> = [];
  for (let c = 0; c < colStarts.length; c++) {
    const start = colStarts[c]!;
    const end = c + 1 < colStarts.length ? colStarts[c + 1]! : headerLine.length + 20;
    boundaries.push({ start, end });
  }

  // Extract column names.
  const columns = boundaries.map((b) =>
    headerLine.substring(b.start, Math.min(b.end, headerLine.length)).trim(),
  );

  // Parse data rows — stop at empty lines or the "(N lignes)" footer.
  const rows: Record<string, string>[] = [];
  for (let i = 2; i < lines.length; i++) {
    const line = lines[i]!;
    const trimmed = line.trim();
    if (!trimmed || /^\(\d+/.test(trimmed)) break;

    const row: Record<string, string> = {};
    for (let c = 0; c < columns.length; c++) {
      const b = boundaries[c]!;
      const value = line.substring(b.start, Math.min(b.end, line.length)).trim();
      row[columns[c]!] = value;
    }
    rows.push(row);
  }

  return rows;
}

// ---------------------------------------------------------------------------
// Tool registration
// ---------------------------------------------------------------------------

export function registerDatabaseTools(server: McpServer): void {
  const dsn = resolveDsn();
  console.error(`[DB] DSN resolved: ${dsn}`);

  // -----------------------------------------------------------------------
  // pmix_sql
  // -----------------------------------------------------------------------
  server.registerTool(
    'pmix_sql',
    {
      title: 'Execute PMIX SQL Query',
      description:
        'Executes a read-only SQL SELECT query against the PMIX SQL Anywhere database. ' +
        'Returns results as JSON. Only SELECT statements are allowed — ' +
        'INSERT, UPDATE, DELETE and DDL are rejected. ' +
        'Use for verifying data, checking values, and exploring the live database.',
      inputSchema: {
        query: z
          .string()
          .min(1)
          .describe(
            'SQL SELECT query to execute (e.g. "SELECT DISTINCT lktyp FROM linkitad")',
          ),
        limit: z
          .number()
          .int()
          .min(1)
          .max(MAX_ROWS)
          .optional()
          .describe(`Maximum rows to return (default: 50, max: ${MAX_ROWS})`),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ query, limit = 50 }) => {
      try {
        // Security: reject write operations
        if (WRITE_KEYWORDS.test(query)) {
          return {
            content: [
              {
                type: 'text' as const,
                text: 'Error: Only SELECT queries are allowed. INSERT, UPDATE, DELETE and DDL are rejected.',
              },
            ],
            isError: true,
          };
        }

        // Add TOP clause if not already present.
        // SQL Anywhere syntax: SELECT [DISTINCT] TOP n ...
        let sql = query.trim();
        if (!/\bTOP\b/i.test(sql)) {
          // Insert TOP after SELECT [DISTINCT/ALL] to preserve valid syntax.
          sql = sql.replace(
            /^SELECT(\s+(?:DISTINCT|ALL))?\b/i,
            (match, modifier) =>
              modifier
                ? `SELECT${modifier} TOP ${limit}`
                : `SELECT TOP ${limit}`,
          );
        }

        const output = await execSql(sql, dsn);
        const rows = parseDbisqlOutput(output);

        return {
          content: [
            {
              type: 'text' as const,
              text: toText({
                query: sql,
                row_count: rows.length,
                rows,
              }),
            },
          ],
        };
      } catch (err) {
        return toolError('pmix_sql', err);
      }
    },
  );

  // -----------------------------------------------------------------------
  // pmix_tables
  // -----------------------------------------------------------------------
  server.registerTool(
    'pmix_tables',
    {
      title: 'List PMIX Database Tables',
      description:
        'Lists tables and views in the PMIX database with their type and row count. ' +
        'Use filter to search by name pattern.',
      inputSchema: {
        filter: z
          .string()
          .optional()
          .describe(
            'Optional name filter (SQL LIKE pattern, e.g. "pur%" for purchase tables)',
          ),
        include_views: z
          .boolean()
          .optional()
          .describe('Include views in results (default: false)'),
        limit: z
          .number()
          .int()
          .min(1)
          .max(1000)
          .optional()
          .describe('Maximum tables to return (default: 100)'),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ filter, include_views = false, limit = 100 }) => {
      try {
        let where = "t.creator = 1"; // DBA-owned objects only
        if (!include_views) {
          where += " AND t.table_type = 'BASE'";
        }
        if (filter) {
          // Sanitize filter for SQL injection
          const safe = filter.replace(/'/g, "''");
          where += ` AND t.table_name LIKE '${safe}'`;
        }

        // Use concatenation to produce clean pipe-delimited output,
        // avoiding column-alignment parsing issues with dbisql.
        const sql =
          `SELECT TOP ${limit} ` +
          `t.table_name || '|' || t.table_type || '|' || CAST(t.count AS VARCHAR(20)) AS tbl_row ` +
          `FROM sys.systable t ` +
          `WHERE ${where} ` +
          `ORDER BY t.table_name`;

        const output = await execSql(sql, dsn);
        // Parse pipe-delimited rows manually.
        const rawRows = parseDbisqlOutput(output);
        const tables = rawRows.map((r) => {
          const val = r['tbl_row'] ?? Object.values(r)[0] ?? '';
          const [name, type, count] = val.split('|').map((s) => s.trim());
          return { table_name: name ?? '', table_type: type ?? '', row_count: count ?? '0' };
        });

        return {
          content: [
            {
              type: 'text' as const,
              text: toText({
                total: tables.length,
                filter: filter ?? null,
                tables,
              }),
            },
          ],
        };
      } catch (err) {
        return toolError('pmix_tables', err);
      }
    },
  );

  // -----------------------------------------------------------------------
  // pmix_describe
  // -----------------------------------------------------------------------
  server.registerTool(
    'pmix_describe',
    {
      title: 'Describe PMIX Table Structure',
      description:
        'Describes a table structure: columns with types, primary key, foreign keys, ' +
        'and indexes. Essential for understanding the database schema.',
      inputSchema: {
        table: z
          .string()
          .min(1)
          .describe('Table name to describe (e.g. "linkitad", "purhead")'),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ table }) => {
      try {
        const safeTable = table.replace(/'/g, "''").toLowerCase();

        // 1. Columns — pipe-delimited for reliable parsing
        const colSql =
          `SELECT c.column_name || '|' || d.domain_name || '|' || ` +
          `CAST(c.width AS VARCHAR(10)) || '|' || ` +
          `CAST(c.scale AS VARCHAR(10)) || '|' || c.nulls AS col_row ` +
          `FROM sys.syscolumn c ` +
          `JOIN sys.systable t ON c.table_id = t.table_id ` +
          `JOIN sys.sysdomain d ON c.domain_id = d.domain_id ` +
          `WHERE t.table_name = '${safeTable}' AND t.creator = 1 ` +
          `ORDER BY c.column_id`;

        const colOutput = await execSql(colSql, dsn);
        const colRaw = parseDbisqlOutput(colOutput);
        const columns = colRaw.map((r) => {
          const val = r['col_row'] ?? Object.values(r)[0] ?? '';
          const [name, type, width, scale, nulls] = val.split('|').map((s) => s.trim());
          return { column_name: name ?? '', type: type ?? '', width: width ?? '', scale: scale ?? '0', nulls: nulls ?? 'Y' };
        });

        if (columns.length === 0) {
          return {
            content: [
              {
                type: 'text' as const,
                text: `Table '${table}' not found in the database.`,
              },
            ],
            isError: true,
          };
        }

        // 2. Primary key columns
        const pkSql =
          `SELECT c.column_name ` +
          `FROM sys.sysidxcol ic ` +
          `JOIN sys.sysidx i ON ic.table_id = i.table_id AND ic.index_id = i.index_id ` +
          `JOIN sys.systable t ON i.table_id = t.table_id ` +
          `JOIN sys.syscolumn c ON ic.table_id = c.table_id AND ic.column_id = c.column_id ` +
          `WHERE t.table_name = '${safeTable}' AND t.creator = 1 ` +
          `AND i.index_category = 1 ` +
          `ORDER BY ic.sequence`;

        let pkColumns: string[] = [];
        try {
          const pkOutput = await execSql(pkSql, dsn);
          pkColumns = parseDbisqlOutput(pkOutput).map((r) => r['column_name'] ?? '');
        } catch {
          // No PK or query failed
        }

        // 3. Foreign keys (outgoing) — pipe-delimited
        const fkSql =
          `SELECT fk.role || '|' || fc.column_name || '|' || pt.table_name || '|' || pc.column_name AS fk_row ` +
          `FROM sys.sysforeignkey fk ` +
          `JOIN sys.systable ft ON fk.foreign_table_id = ft.table_id ` +
          `JOIN sys.systable pt ON fk.primary_table_id = pt.table_id ` +
          `JOIN sys.sysfkcol fkc ON fk.foreign_table_id = fkc.foreign_table_id AND fk.foreign_key_id = fkc.foreign_key_id ` +
          `JOIN sys.syscolumn fc ON fkc.foreign_table_id = fc.table_id AND fkc.foreign_column_id = fc.column_id ` +
          `JOIN sys.syscolumn pc ON fkc.primary_table_id = pc.table_id AND fkc.primary_column_id = pc.column_id ` +
          `WHERE ft.table_name = '${safeTable}' AND ft.creator = 1`;

        let foreignKeys: Array<{ name: string; column: string; references: string }> = [];
        try {
          const fkOutput = await execSql(fkSql, dsn);
          const fkRaw = parseDbisqlOutput(fkOutput);
          foreignKeys = fkRaw.map((r) => {
            const val = r['fk_row'] ?? Object.values(r)[0] ?? '';
            const [name, col, toTable, toCol] = val.split('|').map((s) => s.trim());
            return { name: name ?? '', column: col ?? '', references: `${toTable ?? ''}.${toCol ?? ''}` };
          });
        } catch {
          // No FKs or query failed
        }

        // 4. Row count
        let rowCount = '?';
        try {
          const countOutput = await execSql(
            `SELECT COUNT(*) AS cnt FROM "${safeTable}"`,
            dsn,
          );
          const countRows = parseDbisqlOutput(countOutput);
          rowCount = countRows[0]?.['cnt'] ?? '?';
        } catch {
          // Table might not exist or be empty
        }

        // Format columns for display
        const formattedColumns = columns.map((col) => {
          const type = col.type;
          const width = col.width;
          const scale = col.scale;
          const nulls = col.nulls === 'Y' ? 'NULL' : 'NOT NULL';
          const isPk = pkColumns.includes(col.column_name) ? 'PK' : '';

          let typeStr = type;
          if (type === 'numeric' && scale !== '0') {
            typeStr = `numeric(${width},${scale})`;
          } else if (['char', 'varchar'].includes(type)) {
            typeStr = `${type}(${width})`;
          }

          return {
            column: col.column_name,
            type: typeStr,
            nullable: nulls,
            pk: isPk,
          };
        });

        return {
          content: [
            {
              type: 'text' as const,
              text: toText({
                table,
                row_count: rowCount,
                columns: formattedColumns,
                primary_key: pkColumns,
                foreign_keys: foreignKeys,
              }),
            },
          ],
        };
      } catch (err) {
        return toolError('pmix_describe', err);
      }
    },
  );
}
