import type { PBDataWindowColumn, PBParam } from './types.js';

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

/**
 * PowerBuilder DataWindow files use ~" as an escape sequence for a literal
 * double-quote inside string values.  This function restores those back to
 * real double-quotes so extracted SQL is usable directly.
 */
function unescapePBString(value: string): string {
  return value.replace(/~"/g, '"');
}

// ---------------------------------------------------------------------------
// SQL extraction
// ---------------------------------------------------------------------------

/**
 * Regex that matches the retrieve attribute in a DataWindow source file.
 *
 * The retrieve attribute appears as:
 *   retrieve="SELECT ... FROM ..."
 *
 * The value may span multiple tokens but is always contained within the
 * enclosing double-quotes.  PB uses ~" to embed literal quotes.
 *
 * We use a non-greedy match and stop at the first unescaped closing quote.
 */
const RETRIEVE_RE = /\bretrieve="((?:[^"~]|~.)*)"/i;

/**
 * Extract the SQL SELECT statement from a DataWindow source string.
 *
 * Returns the SQL string with ~" escapes resolved to real double-quotes,
 * or undefined when no retrieve attribute is present (e.g. external or
 * stored-procedure DataWindows).
 */
export function parseDataWindowSQL(source: string): string | undefined {
  const match = RETRIEVE_RE.exec(source);
  if (!match) return undefined;

  const raw = match[1] ?? '';
  return unescapePBString(raw).trim();
}

// ---------------------------------------------------------------------------
// Column extraction
// ---------------------------------------------------------------------------

/**
 * Extracts the raw text of the `table(...)` block from a DataWindow source.
 * Returns null when not found.
 */
function extractTableBlock(source: string): string | null {
  // Find the start of the table(...) definition.
  const start = source.search(/\btable\s*\(/i);
  if (start === -1) return null;

  // Walk forward to find the matching closing parenthesis.
  let depth = 0;
  let i = source.indexOf('(', start);
  if (i === -1) return null;

  for (; i < source.length; i++) {
    if (source[i] === '(') depth++;
    else if (source[i] === ')') {
      depth--;
      if (depth === 0) return source.slice(start, i + 1);
    }
  }

  return null;
}

/**
 * Extract all `column=(...)` blocks from the table block text.
 * Returns an array of raw block strings including the outer parens.
 *
 * The challenge is that PB column types can include parens (e.g. char(50)),
 * so we cannot use a simple regex — we need paren-balanced extraction.
 */
function extractColumnBlocks(tableBlock: string): string[] {
  const blocks: string[] = [];
  // Find each occurrence of "column=(" and extract the balanced paren content.
  const PREFIX = /\bcolumn\s*=\s*\(/gi;
  let m: RegExpExecArray | null;

  while ((m = PREFIX.exec(tableBlock)) !== null) {
    // Position of the opening paren.
    const parenStart = m.index + m[0].length - 1; // last char of match is '('
    let depth = 0;
    let end = parenStart;

    for (let i = parenStart; i < tableBlock.length; i++) {
      if (tableBlock[i] === '(') depth++;
      else if (tableBlock[i] === ')') {
        depth--;
        if (depth === 0) {
          end = i;
          break;
        }
      }
    }

    blocks.push(tableBlock.slice(parenStart + 1, end));
  }

  return blocks;
}

// Attribute extraction helpers — match  key=value  or  key="value"
function extractAttrUnquoted(block: string, key: string): string | undefined {
  const re = new RegExp(`\\b${key}=(\\S+)`, 'i');
  return re.exec(block)?.[1];
}

function extractAttrQuoted(block: string, key: string): string | undefined {
  const re = new RegExp(`\\b${key}="((?:[^"~]|~.)*)"`, 'i');
  return re.exec(block)?.[1];
}

/**
 * Parse column definitions from a DataWindow source string.
 *
 * PB column format inside table(...):
 *   column=(type=char(50) name=cust_name dbname="cust_name" band=detail ...)
 *
 * The type attribute may contain parens (char(50), decimal(16,2)), so we use
 * balanced-paren extraction rather than a simple regex.
 */
export function parseDataWindowColumns(source: string): PBDataWindowColumn[] {
  const tableBlock = extractTableBlock(source);
  if (!tableBlock) return [];

  const columnBlocks = extractColumnBlocks(tableBlock);
  const columns: PBDataWindowColumn[] = [];

  for (const block of columnBlocks) {
    const type = extractAttrUnquoted(block, 'type');
    const name = extractAttrUnquoted(block, 'name');
    const dbNameRaw = extractAttrQuoted(block, 'dbname');
    const band = extractAttrUnquoted(block, 'band');

    if (name && type) {
      columns.push({
        name,
        dbName: unescapePBString(dbNameRaw ?? name),
        type,
        band: band ?? 'detail',
      });
    }
  }

  return columns;
}

// ---------------------------------------------------------------------------
// Argument extraction
// ---------------------------------------------------------------------------

/**
 * Matches the arguments(...) block in a DataWindow source.
 * Arguments appear as:
 *   arguments(("name1", type1) ("name2", type2) ...)
 *
 * Each entry is a tuple of (name, type) inside parentheses, separated by
 * optional whitespace.
 */
const ARGUMENTS_BLOCK_RE = /\barguments\s*\(([^)]*(?:\([^)]*\)[^)]*)*)\)/i;
const SINGLE_ARG_RE = /\(\s*"([^"]+)"\s*,\s*(\w+)\s*\)/g;

/**
 * Parse retrieve arguments from a DataWindow source string.
 *
 * Maps the (name, type) tuples to PBParam with passBy = 'value'.
 */
export function parseDataWindowArguments(source: string): PBParam[] {
  const blockMatch = ARGUMENTS_BLOCK_RE.exec(source);
  if (!blockMatch) return [];

  // The inner content including nested parens needs to be matched
  // from the original source rather than the captured group, because
  // ARGUMENTS_BLOCK_RE's capture stops at the outer closing paren.
  // Instead we find the start of `arguments(` and scan forward.
  const argStart = source.search(/\barguments\s*\(/i);
  if (argStart === -1) return [];

  const parenStart = source.indexOf('(', argStart);
  if (parenStart === -1) return [];

  // Walk to matching close paren.
  let depth = 0;
  let end = parenStart;
  for (let i = parenStart; i < source.length; i++) {
    if (source[i] === '(') depth++;
    else if (source[i] === ')') {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }

  const inner = source.slice(parenStart + 1, end);

  const params: PBParam[] = [];
  let match: RegExpExecArray | null;
  SINGLE_ARG_RE.lastIndex = 0;

  while ((match = SINGLE_ARG_RE.exec(inner)) !== null) {
    const [, name, type] = match;
    params.push({
      name: name ?? '',
      type: type ?? '',
      passBy: 'value',
    });
  }

  return params;
}
