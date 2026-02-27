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
// Layout extraction (visual positions for automation)
// ---------------------------------------------------------------------------

/** A visual column in the detail band of a DataWindow. */
export interface DwLayoutColumn {
  name: string;
  id: number;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  tabsequence: number;
  visible: boolean;
  tag: string;
  editLimit: number;
  editCase: string;
  dddwName: string;
}

/** A text label in the detail band. */
export interface DwLayoutLabel {
  name: string;
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

/** Complete visual layout of a DataWindow's detail band. */
export interface DwLayout {
  detailHeight: number;
  columns: DwLayoutColumn[];
  labels: DwLayoutLabel[];
}

/**
 * Extract an integer attribute value from a block string.
 * Returns the default if not found.
 */
function extractIntAttr(block: string, key: string, defaultVal = 0): number {
  const re = new RegExp(`\\b${key}="?(\\d+)"?`, 'i');
  const m = re.exec(block);
  return m ? parseInt(m[1]!, 10) : defaultVal;
}

/**
 * Parse the visual layout of a DataWindow's detail band.
 *
 * Extracts column positions (PBU coordinates), text labels, and detail
 * band dimensions from the .srd source. These are the visual objects
 * placed in the detail band — NOT the table column definitions.
 *
 * PB .srd format for visual objects:
 *   column(band=detail id=1 ... x="841" y="44" height="64" width="855" ... name=itcode ...)
 *   text(band=detail ... text="Code" ... x="686" y="44" ... name=itcode_t ...)
 */
/**
 * Extract all paren-balanced blocks matching `prefix(band=detail ...)` from
 * the source. PB attributes may contain nested parentheses (e.g.
 * `color="0~tif(itactiv='N', rgb(128,128,128),rgb(0,0,0))"`) so a simple
 * `[^)]*` regex is not sufficient — we need balanced-paren extraction.
 */
function extractDetailBlocks(source: string, prefix: string): string[] {
  const blocks: string[] = [];
  const re = new RegExp(`\\b${prefix}\\s*\\(band=detail\\b`, 'gi');
  let m: RegExpExecArray | null;

  while ((m = re.exec(source)) !== null) {
    // Position of the opening paren.
    const parenStart = source.indexOf('(', m.index);
    if (parenStart === -1) continue;

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

    // Inner content without the outer parens.
    blocks.push(source.slice(parenStart + 1, end));
  }

  return blocks;
}

export function parseDwLayout(source: string): DwLayout {
  // Extract detail band height.
  const detailMatch = /\bdetail\s*\(\s*height=(\d+)/i.exec(source);
  const detailHeight = detailMatch ? parseInt(detailMatch[1]!, 10) : 0;

  const columns: DwLayoutColumn[] = [];
  const labels: DwLayoutLabel[] = [];

  // Extract visual column(...) blocks in the detail band using balanced parens.
  // These appear AFTER the table(...) block and contain x=, y=, name= etc.
  for (const block of extractDetailBlocks(source, 'column')) {
    const name = extractAttrUnquoted(block, 'name');
    if (!name) continue;

    columns.push({
      name,
      id: extractIntAttr(block, 'id'),
      type: '', // type comes from table block, not visual block
      x: extractIntAttr(block, 'x'),
      y: extractIntAttr(block, 'y'),
      width: extractIntAttr(block, 'width'),
      height: extractIntAttr(block, 'height'),
      tabsequence: extractIntAttr(block, 'tabsequence', 32766),
      visible: extractAttrQuoted(block, 'visible') !== '0',
      tag: unescapePBString(extractAttrQuoted(block, 'tag') ?? ''),
      editLimit: extractIntAttr(block, 'edit.limit'),
      editCase: extractAttrUnquoted(block, 'edit.case') ?? 'any',
      dddwName: extractAttrUnquoted(block, 'dddw.name') ?? '',
    });
  }

  // Enrich columns with type from table block.
  const tableBlock = extractTableBlock(source);
  if (tableBlock) {
    const colBlocks = extractColumnBlocks(tableBlock);
    const typeMap = new Map<string, string>();
    for (const cb of colBlocks) {
      const cname = extractAttrUnquoted(cb, 'name');
      const ctype = extractAttrUnquoted(cb, 'type');
      if (cname && ctype) typeMap.set(cname, ctype);
    }
    for (const col of columns) {
      col.type = typeMap.get(col.name) ?? '';
    }
  }

  // Extract text(...) blocks in the detail band using balanced parens.
  for (const block of extractDetailBlocks(source, 'text')) {
    const name = extractAttrUnquoted(block, 'name') ?? '';
    const text = unescapePBString(extractAttrQuoted(block, 'text') ?? '');

    labels.push({
      name,
      text,
      x: extractIntAttr(block, 'x'),
      y: extractIntAttr(block, 'y'),
      width: extractIntAttr(block, 'width'),
      height: extractIntAttr(block, 'height'),
    });
  }

  return { detailHeight, columns, labels };
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
