import { readFile } from 'node:fs/promises';
import { copyFile } from 'node:fs/promises';
import * as nodePath from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { glob } from 'glob';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { PBCache } from '../cache.js';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const execFileAsync = promisify(execFile);

function toText(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

// Default build arguments for PBAutoBuild250.
const PB_AUTOBUILD_PATH =
  'C:/Program Files (x86)/Appeon/PowerBuilder 25.0/pbautobuild250.exe';

interface BuildError {
  message: string;
  file?: string;
  line?: number;
}

interface BuildWarning {
  message: string;
}

// ---------------------------------------------------------------------------
// UTF-16LE decoding helper
// ---------------------------------------------------------------------------

/**
 * PBAutoBuild250.exe outputs UTF-16LE encoded text (null bytes between
 * characters). When execFileAsync reads with `encoding: 'binary'`, the raw
 * bytes are preserved but regex matching fails because of the embedded nulls.
 *
 * This function detects UTF-16LE by checking for null bytes and decodes
 * accordingly.
 */
function decodeOutput(raw: string): string {
  if (raw.includes('\x00')) {
    // The string was read in 'binary' encoding — each byte is a char code.
    // Convert to a Buffer and then decode as UTF-16LE.
    return Buffer.from(raw, 'binary').toString('utf16le');
  }
  return raw;
}

// ---------------------------------------------------------------------------
// Build output parser
// ---------------------------------------------------------------------------

function parseBuildOutput(stdout: string, stderr: string): {
  errors: BuildError[];
  warnings: BuildWarning[];
} {
  const errors: BuildError[] = [];
  const warnings: BuildWarning[] = [];
  const combined = `${stdout}\n${stderr}`;
  const lines = combined.split(/\r?\n/);

  for (const line of lines) {
    // Error pattern: "Error: <message>" or "Error C0001: <message> at <file>(<line>)"
    const errorMatch = /\bError\b[:\s]+(.+)/i.exec(line);
    if (errorMatch) {
      const msg = errorMatch[1]?.trim() ?? '';
      const locMatch = /at\s+(.+?)\((\d+)\)/.exec(msg);
      errors.push({
        message: msg,
        file: locMatch?.[1],
        line: locMatch ? parseInt(locMatch[2] ?? '0', 10) : undefined,
      });
      continue;
    }

    // Warning pattern: "Warning: <message>"
    const warnMatch = /\bWarning\b[:\s]+(.+)/i.exec(line);
    if (warnMatch) {
      warnings.push({ message: warnMatch[1]?.trim() ?? '' });
    }
  }

  return { errors, warnings };
}

// ---------------------------------------------------------------------------
// Syntax validation patterns
// ---------------------------------------------------------------------------

interface SyntaxIssue {
  line: number;
  message: string;
}

interface BlockTracker {
  keyword: string;
  line: number;
}

// ---------------------------------------------------------------------------
// Block descriptor: pairs an opener regex with a closer regex and a label.
// ---------------------------------------------------------------------------

interface BlockDescriptor {
  /** Human-readable name for error messages. */
  label: string;
  /** Matches the opening line. */
  opener: RegExp;
  /** Matches the closing line. */
  closer: RegExp;
}

// Order matters: more specific patterns must precede more general ones.
const BLOCK_DESCRIPTORS: BlockDescriptor[] = [
  // ---- PowerBuilder structural / export-format blocks ----

  // "forward ... end forward"
  {
    label: 'forward',
    opener: /^forward\s*$/i,
    closer: /^end\s+forward\s*$/i,
  },

  // "type variables / shared variables / global variables ... end variables"
  // MUST come before the generic 'type' descriptor so "type variables" is not
  // misidentified as a 'type' block opener.
  {
    label: 'type variables',
    opener: /^(type|shared|global)\s+variables\s*$/i,
    closer: /^end\s+variables\s*$/i,
  },

  // "type prototypes ... end prototypes"
  {
    label: 'prototypes',
    opener: /^(forward\s+|type\s+)?prototypes\s*$/i,
    closer: /^end\s+prototypes\s*$/i,
  },

  // "global type X from Y [ within Z ] ... end type"
  // The negative-lookahead ensures we do NOT match "type variables" here.
  {
    label: 'type',
    opener: /^(global\s+|local\s+)?type\s+(?!variables\b)(?!prototypes\b)\w/i,
    closer: /^end\s+type\s*$/i,
  },

  // ---- Script-level blocks ----

  // "public|private|protected function|subroutine name(...) ... end function|subroutine"
  {
    label: 'function',
    opener: /^(public\s+|private\s+|protected\s+|global\s+)?(function|subroutine)\s+\w/i,
    closer: /^end\s+(function|subroutine)\s*$/i,
  },

  // "event name; ... end event"  or  "event name(...) ... end event"
  {
    label: 'event',
    opener: /^event\s+\w+(\s*;|\s*\()/i,
    closer: /^end\s+event\s*$/i,
  },

  // "on objectname.eventname ... end on"
  {
    label: 'on',
    opener: /^on\s+\w+\.\w+/i,
    closer: /^end\s+on\s*$/i,
  },

  // ---- Control-flow blocks ----

  {
    label: 'try',
    opener: /^try\s*$/i,
    closer: /^end\s+try\s*$/i,
  },
  {
    label: 'if',
    // Only multi-line ifs end with "then" alone; one-liners ("if x then y") are not blocks.
    opener: /^if\s+.+\s+then\s*$/i,
    closer: /^end\s+if\s*$/i,
  },
  {
    label: 'choose',
    opener: /^choose\s+case\b/i,
    closer: /^end\s+choose\s*$/i,
  },
  {
    label: 'for',
    opener: /^for\s+\w+\s*=/i,
    closer: /^next\s*$/i,
  },
  {
    label: 'do',
    opener: /^do(\s+(while|until)\s+.+)?\s*$/i,
    closer: /^loop\b/i,
  },
];

function validateSyntax(content: string): { valid: boolean; issues: SyntaxIssue[] } {
  const issues: SyntaxIssue[] = [];
  const rawLines = content.split(/\r?\n/);
  const stack: BlockTracker[] = [];

  // ---------------------------------------------------------------------------
  // Pre-processing step: join continuation lines (lines ending with "&").
  // PowerBuilder uses "&" at end-of-line to indicate the statement continues
  // on the next line.  We merge them into single logical lines, preserving
  // the original line numbers so error messages stay meaningful.
  // ---------------------------------------------------------------------------
  interface LogicalLine {
    text: string;
    lineNum: number; // 1-based line number of the *first* physical line
  }

  const logicalLines: LogicalLine[] = [];
  let pendingText = '';
  let pendingStart = -1;

  for (let i = 0; i < rawLines.length; i++) {
    const raw = rawLines[i] ?? '';
    const trimmed = raw.trim();

    if (pendingStart === -1) {
      // Not in a continuation — start a new logical line.
      if (trimmed.endsWith('&')) {
        pendingText = trimmed.slice(0, -1).trimEnd();
        pendingStart = i + 1; // 1-based
      } else {
        logicalLines.push({ text: trimmed, lineNum: i + 1 });
      }
    } else {
      // Continuing a previous line.
      if (trimmed.endsWith('&')) {
        pendingText += ' ' + trimmed.slice(0, -1).trimEnd();
      } else {
        pendingText += ' ' + trimmed;
        logicalLines.push({ text: pendingText.trim(), lineNum: pendingStart });
        pendingText = '';
        pendingStart = -1;
      }
    }
  }
  // Flush any remaining continuation (shouldn't happen in well-formed files).
  if (pendingStart !== -1) {
    logicalLines.push({ text: pendingText.trim(), lineNum: pendingStart });
  }

  // ---------------------------------------------------------------------------
  // Helper: strip a trailing line comment (// ...) from a line.
  // Respects string literals: does not strip // inside "..." or '...'.
  // ---------------------------------------------------------------------------
  function stripTrailingComment(line: string): string {
    let inSingle = false;
    let inDouble = false;
    for (let j = 0; j < line.length; j++) {
      const ch = line[j];
      if (ch === "'" && !inDouble) {
        inSingle = !inSingle;
      } else if (ch === '"' && !inSingle) {
        inDouble = !inDouble;
      } else if (ch === '/' && line[j + 1] === '/' && !inSingle && !inDouble) {
        return line.slice(0, j).trimEnd();
      }
    }
    return line;
  }

  // ---------------------------------------------------------------------------
  // Helper: process a single logical line against block descriptors.
  // ---------------------------------------------------------------------------
  function processLine(trimmed: string, lineNum: number): void {
    // Skip empty lines and comments.
    if (trimmed === '' || trimmed.startsWith('//') || trimmed.startsWith('/*')) {
      return;
    }

    // Skip "else" / "else if" / "elseif" / "catch" / "finally" — continuations, not openers.
    if (/^else\b/i.test(trimmed) || /^catch\b/i.test(trimmed) || /^finally\b/i.test(trimmed)) {
      return;
    }

    // Strip trailing comments for block matching.
    // We use the stripped version for pattern matching, but keep the original
    // for inline-code extraction (where ";" may appear before a comment).
    const stripped = stripTrailingComment(trimmed).trimEnd();

    // Check closers first (they take priority over openers for lines that could be both).
    let closerMatched = false;
    for (const desc of BLOCK_DESCRIPTORS) {
      if (desc.closer.test(stripped)) {
        closerMatched = true;
        if (stack.length === 0) {
          issues.push({
            line: lineNum,
            message: `Unexpected 'end ${desc.label}' with no matching '${desc.label}' block`,
          });
        } else {
          const top = stack[stack.length - 1];
          if (top && top.keyword !== desc.label) {
            issues.push({
              line: lineNum,
              message: `'end ${desc.label}' found but expected to close '${top.keyword}' opened at line ${top.line}`,
            });
          } else {
            stack.pop();
          }
        }
        break;
      }
    }

    if (closerMatched) return;

    // Determine context from the current stack.
    const insidePrototypesOrForward = stack.some(
      (b) => b.keyword === 'prototypes' || b.keyword === 'forward',
    );
    const insideType = stack.some((b) => b.keyword === 'type');

    // Check openers.
    for (const desc of BLOCK_DESCRIPTORS) {
      if (desc.opener.test(stripped)) {
        // Skip function/subroutine/event openers inside prototypes/forward blocks
        // (these are prototype declarations, not function bodies).
        if (
          insidePrototypesOrForward &&
          (desc.label === 'function' || desc.label === 'event')
        ) {
          break;
        }

        // Skip event declarations inside type blocks.
        // In PB export format, type blocks for child controls list event
        // declarations (e.g., "event create ( )") which are NOT event bodies.
        if (insideType && desc.label === 'event') {
          break;
        }

        stack.push({ keyword: desc.label, line: lineNum });

        // Handle inline code after ";" in function/event/subroutine openers.
        // PB exports: "event name;code" or "public function x();code"
        // The code after ";" is the first line of the body and may itself
        // contain block openers (e.g., "event open;if x then").
        // Multiple statements may be separated by ";":
        //   "event constructor;call super::constructor;if x then"
        if (desc.label === 'function' || desc.label === 'event') {
          const semiIdx = trimmed.indexOf(';');
          if (semiIdx !== -1) {
            const afterSemi = trimmed.slice(semiIdx + 1).trim();
            if (afterSemi !== '' && !afterSemi.startsWith('//')) {
              // Find the last semicolon-separated segment that could be a
              // block opener.  Process each segment; non-matching segments
              // are harmlessly skipped by processLine.
              const segments = afterSemi.split(';');
              for (const seg of segments) {
                const s = seg.trim();
                if (s !== '' && !s.startsWith('//')) {
                  processLine(s, lineNum);
                }
              }
            }
          }
        }

        break; // Only the first matching opener applies.
      }
    }
  }

  // ---------------------------------------------------------------------------
  // Main loop: process each logical line.
  // ---------------------------------------------------------------------------
  for (const ll of logicalLines) {
    processLine(ll.text, ll.lineNum);
  }

  // Any unclosed blocks remaining on the stack are errors.
  for (const block of stack) {
    issues.push({
      line: block.line,
      message: `Unclosed '${block.keyword}' block opened at line ${block.line}`,
    });
  }

  return { valid: issues.length === 0, issues };
}

// ---------------------------------------------------------------------------
// Tool registration
// ---------------------------------------------------------------------------

export function registerBuildTools(server: McpServer, cache: PBCache): void {
  // -------------------------------------------------------------------------
  // pb_compile
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_compile',
    {
      title: 'Compile PowerBuilder Project',
      description:
        'Runs PBAutoBuild250.exe to compile the PowerBuilder project. Optionally copies generated .pbd files to the exe directory afterwards.',
      inputSchema: {
        project_path: z
          .string()
          .optional()
          .describe(
            'Path to the .pbproj file. Defaults to PB_PROJECT_PATH environment variable.',
          ),
        output_exe: z
          .string()
          .optional()
          .describe(
            'Path for the output .exe file. Defaults to PB_OUTPUT_EXE environment variable.',
          ),
        copy_pbds: z
          .boolean()
          .optional()
          .describe(
            'After compilation, copy all generated .pbd files to the exe directory (default: false).',
          ),
        build_args: z
          .array(z.string())
          .optional()
          .describe(
            'Additional raw arguments to pass to PBAutoBuild250.exe (e.g. ["/x", "32", "/rt", "25.0.0.3726", "/pd", "nyyy..."]). These are appended after the default /pbc /d /o flags.',
          ),
        timeout_ms: z
          .number()
          .optional()
          .describe(
            'Timeout in milliseconds for PBAutoBuild process. Defaults to 600000 (10 minutes). Large projects (60+ libraries) may need longer.',
          ),
      },
      annotations: { readOnlyHint: false },
    },
    async ({ project_path, output_exe, copy_pbds = false, build_args, timeout_ms }) => {
      const resolvedProject =
        project_path ?? process.env['PB_PROJECT_PATH'] ?? '';
      const resolvedExe =
        output_exe ?? process.env['PB_OUTPUT_EXE'] ?? '';

      if (!resolvedProject) {
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify({
                error:
                  'No project_path provided and PB_PROJECT_PATH is not set',
              }),
            },
          ],
          isError: true,
        };
      }

      // Build the arguments array.
      // PBAutoBuild syntax: pbautobuild250.exe /pbc /d [/o exename] project.pbproj
      // - The .pbproj file MUST be the last positional argument.
      // - /o expects a plain filename (e.g. "pmix.exe"), NOT a full path.
      // - /o is optional — PBAutoBuild defaults to the PBT name when omitted.
      const args = ['/pbc', '/d'];
      if (resolvedExe) {
        // Extract just the filename — PBAutoBuild rejects full paths for /o.
        args.push('/o', nodePath.basename(resolvedExe));
      }
      if (build_args && build_args.length > 0) {
        args.push(...build_args);
      }
      // .pbproj must be the last argument.
      args.push(resolvedProject);

      const startTime = Date.now();
      let stdout = '';
      let stderr = '';
      let success = true;

      try {
        const result = await execFileAsync(
          PB_AUTOBUILD_PATH,
          args,
          { timeout: timeout_ms ?? 600_000, encoding: 'binary' },
        );
        stdout = decodeOutput(result.stdout ?? '');
        stderr = decodeOutput(result.stderr ?? '');
      } catch (err: unknown) {
        success = false;
        if (err && typeof err === 'object') {
          const execErr = err as { stdout?: string; stderr?: string; message?: string };
          stdout = decodeOutput(execErr.stdout ?? '');
          stderr = decodeOutput(
            execErr.stderr ?? (execErr.message ?? String(err)),
          );
        } else {
          stderr = String(err);
        }
      }

      const duration = Date.now() - startTime;
      const { errors, warnings } = parseBuildOutput(stdout, stderr);

      if (errors.length > 0) success = false;

      // Copy PBDs if requested and compile succeeded.
      if (copy_pbds && success) {
        // Use exe directory if provided, otherwise fall back to project directory.
        const exeDir = resolvedExe
          ? nodePath.dirname(resolvedExe)
          : nodePath.dirname(resolvedProject);
        const projectDir = nodePath.dirname(resolvedProject);

        try {
          const pbdFiles = await glob('**/*.pbd', {
            cwd: projectDir,
            absolute: true,
            nodir: true,
            ignore: ['**/pmix/**', '**/enable/**'],
          });

          for (const pbd of pbdFiles) {
            const baseName = nodePath.basename(pbd);
            const dest = nodePath.join(exeDir, baseName);
            await copyFile(pbd, dest);
          }
        } catch {
          // Non-fatal — compilation itself succeeded.
        }
      }

      return {
        content: [
          {
            type: 'text' as const,
            text: toText({
              success,
              duration_ms: duration,
              errors,
              warnings,
              stdout: stdout.slice(0, 2000),
              stderr: stderr.slice(0, 2000),
            }),
          },
        ],
      };
    },
  );

  // -------------------------------------------------------------------------
  // pb_validate_syntax
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_validate_syntax',
    {
      title: 'Validate PowerBuilder Syntax',
      description:
        'Performs a lightweight structural syntax check on a PowerBuilder source file: verifies matched block pairs (function/end function, if/end if, for/next, etc.) without requiring a full compilation.',
      inputSchema: {
        file_path: z
          .string()
          .describe('Absolute or relative path to the .sr* source file to validate'),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ file_path }) => {
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

      const { valid, issues } = validateSyntax(content);

      return {
        content: [
          {
            type: 'text' as const,
            text: toText({ valid, issues }),
          },
        ],
      };
    },
  );
}

// Export for testing.
export { validateSyntax, parseBuildOutput, decodeOutput };
