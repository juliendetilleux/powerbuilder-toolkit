import type { PBAccess, PBEvent, PBFunction, PBParam, PBVariable } from './types.js';

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

/**
 * Split source text into trimmed lines while preserving 1-based line numbers.
 * Returns an array of [lineNumber, lineText] tuples.
 */
function toLines(source: string): Array<[number, string]> {
  return source.split(/\r?\n/).map((text, idx) => [idx + 1, text.trimEnd()]);
}

/**
 * Normalise a raw access-modifier token to PBAccess.
 * Defaults to 'public' when unrecognised or absent.
 */
function toAccess(raw: string | undefined): PBAccess {
  switch (raw?.toLowerCase()) {
    case 'private':
      return 'private';
    case 'protected':
      return 'protected';
    default:
      return 'public';
  }
}

// ---------------------------------------------------------------------------
// Param parsing
// ---------------------------------------------------------------------------

/**
 * Parse a PowerScript parameter list string into PBParam[].
 *
 * Grammar (per parameter):
 *   [ref | readonly] <type> <name>
 *
 * Parameters are separated by commas.  Array types include "[]" as part of
 * the type token (e.g. "string[]").
 */
export function parseParams(raw: string): PBParam[] {
  const trimmed = raw.trim();
  if (!trimmed) return [];

  // Split on commas that are NOT inside parentheses (PB doesn't use parens in
  // param lists, but be defensive).
  const parts = trimmed.split(',');
  const params: PBParam[] = [];

  for (const part of parts) {
    const tokens = part.trim().split(/\s+/).filter(Boolean);
    if (tokens.length === 0) continue;

    let passBy: PBParam['passBy'] = 'value';
    let idx = 0;

    const first = tokens[0]?.toLowerCase();
    if (first === 'ref' || first === 'reference') {
      passBy = 'reference';
      idx = 1;
    } else if (first === 'readonly') {
      passBy = 'readonly';
      idx = 1;
    }

    // After optional pass-by modifier: <type> <name>
    const type = tokens[idx];
    const name = tokens[idx + 1];

    if (type && name) {
      params.push({ name, type, passBy });
    } else if (type && !name) {
      // Bare type with no name — use type as name (malformed, best-effort)
      params.push({ name: type, type, passBy });
    }
  }

  return params;
}

// ---------------------------------------------------------------------------
// Function / subroutine parsing
// ---------------------------------------------------------------------------

/**
 * Regular expression that matches the opening line of a PB function or
 * subroutine declaration.
 *
 * Groups:
 *   1 — optional access modifier  (public | private | protected)
 *   2 — keyword                   (function | subroutine)
 *   3 — return type               (absent for subroutines)
 *   4 — function name
 *   5 — parameter list            (may be empty)
 */
const FUNC_OPEN_RE =
  /^(?:(public|private|protected|global)\s+)?(function|subroutine)\s+(?:(\S+)\s+)?(\w+)\s*\(([^)]*)\)/i;

const FUNC_END_RE = /^end\s+(function|subroutine)\b/i;

/**
 * Parse all function and subroutine declarations from PowerScript source.
 * Returns PBFunction[] (isEvent is always false for these).
 */
export function parseFunctions(source: string): PBFunction[] {
  const lines = toLines(source);
  const functions: PBFunction[] = [];

  let inFunc = false;
  let current: PBFunction | null = null;

  for (const [lineNum, line] of lines) {
    const stripped = line.trimStart();

    if (!inFunc) {
      const match = FUNC_OPEN_RE.exec(stripped);
      if (match) {
        const [, accessRaw, keyword, returnTypeRaw, name, paramsRaw] = match;
        const isSubroutine = keyword?.toLowerCase() === 'subroutine';
        const returnType = isSubroutine
          ? 'void'
          : (returnTypeRaw ?? 'void');

        current = {
          name: name ?? '',
          returnType,
          access: toAccess(accessRaw),
          params: parseParams(paramsRaw ?? ''),
          lineStart: lineNum,
          lineEnd: lineNum,
          isEvent: false,
        };
        inFunc = true;
      }
    } else {
      if (FUNC_END_RE.test(stripped)) {
        if (current) {
          current.lineEnd = lineNum;
          functions.push(current);
          current = null;
        }
        inFunc = false;
      }
    }
  }

  return functions;
}

// ---------------------------------------------------------------------------
// Event parsing
// ---------------------------------------------------------------------------

/**
 * Matches:
 *   event <name>;                                     — simple event stub
 *   event type <returnType> <name>(<params>)          — typed event definition
 *   event <name>(<params>)                            — event with params, no type
 */
const EVENT_STUB_RE = /^event\s+(\w+)\s*;/i;
const EVENT_TYPED_RE =
  /^event\s+type\s+(\S+)\s+(\w+)\s*\(([^)]*)\)/i;
const EVENT_PLAIN_RE = /^event\s+(\w+)\s*\(([^)]*)\)/i;
const EVENT_END_RE = /^end\s+event\b/i;

/**
 * Parse all event declarations from PowerScript source.
 */
export function parseEvents(source: string): PBEvent[] {
  const lines = toLines(source);
  const events: PBEvent[] = [];

  let inEvent = false;
  let current: PBEvent | null = null;

  for (const [lineNum, line] of lines) {
    const stripped = line.trimStart();

    if (!inEvent) {
      // Typed event:  event type <returnType> <name>(<params>)
      const typedMatch = EVENT_TYPED_RE.exec(stripped);
      if (typedMatch) {
        const [, , name, paramsRaw] = typedMatch;
        current = {
          name: name ?? '',
          lineStart: lineNum,
          lineEnd: lineNum,
          hasScript: false,
          params: parseParams(paramsRaw ?? ''),
        };
        inEvent = true;
        continue;
      }

      // Plain event with params:  event <name>(<params>)
      const plainMatch = EVENT_PLAIN_RE.exec(stripped);
      if (plainMatch) {
        const [, name, paramsRaw] = plainMatch;
        current = {
          name: name ?? '',
          lineStart: lineNum,
          lineEnd: lineNum,
          hasScript: false,
          params: parseParams(paramsRaw ?? ''),
        };
        inEvent = true;
        continue;
      }

      // Stub event:  event <name>;
      const stubMatch = EVENT_STUB_RE.exec(stripped);
      if (stubMatch) {
        const [, name] = stubMatch;
        // Stub events are self-contained on a single line.
        events.push({
          name: name ?? '',
          lineStart: lineNum,
          lineEnd: lineNum,
          hasScript: false,
          params: [],
        });
        continue;
      }
    } else {
      if (stripped && !EVENT_END_RE.test(stripped)) {
        // Non-empty, non-end line inside the event body.
        if (current) current.hasScript = true;
      }

      if (EVENT_END_RE.test(stripped)) {
        if (current) {
          current.lineEnd = lineNum;
          events.push(current);
          current = null;
        }
        inEvent = false;
      }
    }
  }

  return events;
}

// ---------------------------------------------------------------------------
// Instance variable parsing
// ---------------------------------------------------------------------------

const TYPE_VARS_OPEN_RE = /^type\s+variables\b/i;
const TYPE_VARS_END_RE = /^end\s+variables\b/i;

/**
 * Matches a variable declaration line inside a "type variables" block:
 *   [public|private|protected] <type> <name> [= <default>]
 *
 * Groups:
 *   1 — optional access modifier
 *   2 — type (may include [])
 *   3 — variable name
 *   4 — optional default value (everything after "=")
 */
const VAR_DECL_RE =
  /^(?:(public|private|protected)\s+)?(\S+)\s+(\w+)(?:\s*=\s*(.+))?$/i;

/**
 * Parse instance variable declarations from the "type variables … end variables"
 * section of a PowerScript source file.
 */
export function parseInstanceVariables(source: string): PBVariable[] {
  const lines = toLines(source);
  const variables: PBVariable[] = [];

  let inVarsSection = false;

  for (const [lineNum, line] of lines) {
    const stripped = line.trimStart();

    if (!inVarsSection) {
      if (TYPE_VARS_OPEN_RE.test(stripped)) {
        inVarsSection = true;
      }
      continue;
    }

    if (TYPE_VARS_END_RE.test(stripped)) {
      inVarsSection = false;
      continue;
    }

    // Skip blank lines and comments.
    if (!stripped || stripped.startsWith('//') || stripped.startsWith('/*')) {
      continue;
    }

    const match = VAR_DECL_RE.exec(stripped);
    if (match) {
      const [, accessRaw, type, name, defaultValue] = match;
      variables.push({
        name: name ?? '',
        type: type ?? '',
        access: toAccess(accessRaw),
        defaultValue: defaultValue?.trim(),
        lineNumber: lineNum,
      });
    }
  }

  return variables;
}

// ---------------------------------------------------------------------------
// Ancestor parsing
// ---------------------------------------------------------------------------

/**
 * Matches:
 *   global type <name> from <ancestor>[ within <ancestorLibrary>]
 *
 * Groups:
 *   1 — object name
 *   2 — ancestor name
 *   3 — ancestor library (optional)
 */
const ANCESTOR_RE =
  /^global\s+type\s+(\w+)\s+from\s+(\S+)(?:\s+within\s+(\S+))?/i;

export interface ParsedAncestor {
  name: string;
  ancestor: string;
  ancestorLibrary?: string;
}

/**
 * Extract the object name, ancestor, and optional ancestorLibrary from the
 * "forward" / global type declaration section.
 *
 * Returns null when no ancestor declaration is found.
 */
export function parseAncestor(source: string): ParsedAncestor | null {
  const lines = toLines(source);

  for (const [, line] of lines) {
    const stripped = line.trimStart();
    const match = ANCESTOR_RE.exec(stripped);
    if (match) {
      const [, name, ancestor, ancestorLibrary] = match;
      return {
        name: name ?? '',
        ancestor: ancestor ?? '',
        ancestorLibrary,
      };
    }
  }

  return null;
}

// ---------------------------------------------------------------------------
// Menu item parsing
// ---------------------------------------------------------------------------

export interface PBMenuItem {
  name: string;
  parent: string;
  lineNumber: number;
}

const MENU_ITEM_RE = /^type\s+(\w+)\s+from\s+menu\s+within\s+(\w+)/i;

/**
 * Parse menu item declarations from `.srm` source.
 * Matches lines like: `type m_file from menu within m_main`
 */
export function parseMenuItems(source: string): PBMenuItem[] {
  const lines = toLines(source);
  const items: PBMenuItem[] = [];

  for (const [lineNum, line] of lines) {
    const stripped = line.trimStart();
    const match = MENU_ITEM_RE.exec(stripped);
    if (match) {
      const [, name, parent] = match;
      items.push({
        name: name ?? '',
        parent: parent ?? '',
        lineNumber: lineNum,
      });
    }
  }

  return items;
}
