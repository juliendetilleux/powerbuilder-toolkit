import { readFile, writeFile, copyFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import * as nodePath from 'node:path';
import { mkdir } from 'node:fs/promises';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { PBCache } from '../cache.js';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function toText(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

/** BOM UTF-8 prefix. */
const UTF8_BOM = '\uFEFF';

/**
 * Synchronizes a modified PB source file to its corresponding .pbl/ subfolder.
 *
 * PBAutoBuild /pbc reads from .pbl/ subfolders, not from the library source dirs.
 * The .pbl/ copy has a different format:
 *   - Source dir:  starts with `$PBExportHeader$...` line
 *   - .pbl/ dir:   starts with UTF-8 BOM + `forward` (no $PBExportHeader$)
 *
 * Returns the synced path if successful, or null if no .pbl/ counterpart found.
 */
async function syncToPblSubfolder(absolutePath: string, content: string): Promise<string | null> {
  const fileName = nodePath.basename(absolutePath);
  const parentDir = nodePath.dirname(absolutePath);
  const parentName = nodePath.basename(parentDir);

  // Look for a .pbl subfolder in the parent directory (e.g. lib_name/lib_name.pbl/)
  let pblDir: string | null = null;
  try {
    const entries = await readdir(parentDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory() && entry.name.endsWith('.pbl')) {
        pblDir = nodePath.join(parentDir, entry.name);
        break;
      }
    }
  } catch {
    return null;
  }

  if (!pblDir) return null;

  const pblFilePath = nodePath.join(pblDir, fileName);
  if (!existsSync(pblFilePath)) return null;

  // Convert source format → PBL format:
  // 1. Remove $PBExportHeader$... line
  // 2. Ensure UTF-8 BOM prefix
  let pblContent = content;

  // Strip BOM if present (we'll re-add it)
  if (pblContent.startsWith(UTF8_BOM)) {
    pblContent = pblContent.slice(1);
  }

  // Remove $PBExportHeader$ line (always the first line in source files)
  pblContent = pblContent.replace(/^\$PBExportHeader\$[^\r\n]*\r?\n/, '');

  // Add BOM
  pblContent = UTF8_BOM + pblContent;

  try {
    await writeFile(pblFilePath, pblContent, 'utf-8');
    return pblFilePath;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// PowerBuilder $$HEX$$ encoding helpers
// ---------------------------------------------------------------------------

/**
 * Regex matching PowerBuilder HEX escape sequences.
 * Format: $$HEXn$$<hex-bytes>$$ENDHEX$$
 * where n = number of UTF-16LE code units encoded.
 */
const HEX_PATTERN = /\$\$HEX\d+\$\$([0-9a-fA-F]+)\$\$ENDHEX\$\$/g;

/**
 * Decodes all $$HEXn$$...$$ENDHEX$$ sequences in a string to readable Unicode.
 */
function decodeHex(raw: string): string {
  return raw.replace(HEX_PATTERN, (_match, hexBytes: string) => {
    const buf = Buffer.from(hexBytes, 'hex');
    return buf.toString('utf16le');
  });
}

/**
 * Encodes non-ASCII characters in a string to PB $$HEX$$ format.
 * Groups consecutive non-ASCII chars into a single $$HEXn$$ block.
 */
function encodeToHex(text: string): string {
  let result = '';
  let i = 0;
  while (i < text.length) {
    const code = text.charCodeAt(i);
    if (code > 127) {
      // Collect consecutive non-ASCII chars.
      let run = '';
      const start = i;
      while (i < text.length && text.charCodeAt(i) > 127) {
        run += text[i];
        i++;
      }
      const n = i - start;
      const buf = Buffer.from(run, 'utf16le');
      result += `$$HEX${n}$$${buf.toString('hex')}$$ENDHEX$$`;
    } else {
      result += text[i];
      i++;
    }
  }
  return result;
}

/**
 * Decodes HEX in raw content and builds a character-level offset map.
 * Returns the decoded string and a mapping array where map[decodedIndex]
 * gives the { rawStart, rawEnd } in the original string.
 */
function decodeHexWithMapping(raw: string): {
  decoded: string;
  map: Array<{ rawStart: number; rawEnd: number }>;
} {
  const hexRegex = /\$\$HEX\d+\$\$([0-9a-fA-F]+)\$\$ENDHEX\$\$/g;
  let decoded = '';
  const map: Array<{ rawStart: number; rawEnd: number }> = [];
  let lastEnd = 0;
  let match: RegExpExecArray | null;

  while ((match = hexRegex.exec(raw)) !== null) {
    // Literal text before this HEX block.
    for (let i = lastEnd; i < match.index; i++) {
      decoded += raw[i];
      map.push({ rawStart: i, rawEnd: i + 1 });
    }

    // Decode the HEX block.
    const hexBytes = match[1]!;
    const buf = Buffer.from(hexBytes, 'hex');
    const chars = buf.toString('utf16le');
    for (let i = 0; i < chars.length; i++) {
      decoded += chars[i];
      map.push({ rawStart: match.index, rawEnd: match.index + match[0].length });
    }

    lastEnd = match.index + match[0].length;
  }

  // Remaining literal text.
  for (let i = lastEnd; i < raw.length; i++) {
    decoded += raw[i];
    map.push({ rawStart: i, rawEnd: i + 1 });
  }

  return { decoded, map };
}

// ---------------------------------------------------------------------------
// PB source file templates
// ---------------------------------------------------------------------------

function makeWindowTemplate(name: string, ancestor: string): string {
  return [
    `forward`,
    `global type ${name} from ${ancestor}`,
    `end type`,
    `end forward`,
    ``,
    `global type ${name} from ${ancestor}`,
    `end type`,
    ``,
    `on ${name}.create`,
    `call super::create`,
    `TriggerEvent( this, "constructor" )`,
    `end on`,
    ``,
    `on ${name}.destroy`,
    `TriggerEvent( this, "destructor" )`,
    `call super::destroy`,
    `end on`,
    ``,
  ].join('\r\n');
}

function makeUserObjectTemplate(name: string, ancestor: string): string {
  return [
    `forward`,
    `global type ${name} from ${ancestor}`,
    `end type`,
    `end forward`,
    ``,
    `global type ${name} from ${ancestor}`,
    `end type`,
    ``,
    `on ${name}.create`,
    `call super::create`,
    `TriggerEvent( this, "constructor" )`,
    `end on`,
    ``,
    `on ${name}.destroy`,
    `TriggerEvent( this, "destructor" )`,
    `call super::destroy`,
    `end on`,
    ``,
  ].join('\r\n');
}

function makeMenuTemplate(name: string, ancestor: string): string {
  return [
    `forward`,
    `global type ${name} from ${ancestor}`,
    `end type`,
    `end forward`,
    ``,
    `global type ${name} from ${ancestor}`,
    `end type`,
    ``,
  ].join('\r\n');
}

const EXTENSION_MAP: Record<'window' | 'userobject' | 'menu', string> = {
  window: '.srw',
  userobject: '.sru',
  menu: '.srm',
};

// ---------------------------------------------------------------------------
// Tool registration
// ---------------------------------------------------------------------------

export function registerModifyTools(server: McpServer, cache: PBCache): void {
  // -------------------------------------------------------------------------
  // pb_modify_script
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_modify_script',
    {
      title: 'Modify PowerBuilder Script',
      description:
        'Performs an exact text replacement in a PowerBuilder source file. Creates a .bak backup before modifying, then invalidates the cache entry so the index stays current.',
      inputSchema: {
        file_path: z
          .string()
          .describe('Absolute or relative path to the .sr* source file to modify'),
        old_text: z
          .string()
          .describe('The exact text to find (must appear exactly once in the file)'),
        new_text: z.string().describe('The replacement text'),
      },
      annotations: { readOnlyHint: false },
    },
    async ({ file_path, old_text, new_text }) => {
      // Resolve to absolute path.
      const solutionPath = cache.getSolutionPath();
      const absolutePath = nodePath.isAbsolute(file_path)
        ? file_path
        : nodePath.join(solutionPath, file_path);

      // Read current content.
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

      // Normalize line endings in old_text/new_text to match the file.
      // MCP parameters arrive with LF (\n) but PB source files use CRLF (\r\n).
      const hasCRLF = content.includes('\r\n');
      const normalizedOld = hasCRLF ? old_text.replace(/(?<!\r)\n/g, '\r\n') : old_text;
      const normalizedNew = hasCRLF ? new_text.replace(/(?<!\r)\n/g, '\r\n') : new_text;

      // Verify old_text appears exactly once.
      let occurrences = content.split(normalizedOld).length - 1;
      let hexAwareMatch = false;
      let rawOldSegment = '';
      let hexEncodedNew = '';

      if (occurrences === 0 && HEX_PATTERN.test(content)) {
        // Fallback: HEX-aware matching.
        // Decode HEX in file content and try to match the readable old_text.
        const { decoded, map } = decodeHexWithMapping(content);
        const idx = decoded.indexOf(normalizedOld);
        if (idx !== -1) {
          // Check uniqueness in decoded content.
          const secondIdx = decoded.indexOf(normalizedOld, idx + normalizedOld.length);
          if (secondIdx !== -1) {
            return {
              content: [
                {
                  type: 'text' as const,
                  text: JSON.stringify({
                    error: `old_text appears multiple times (HEX-decoded match) — must be unique. Provide more surrounding context.`,
                    file: absolutePath,
                  }),
                },
              ],
              isError: true,
            };
          }

          // Map decoded indices back to raw content range.
          const rawStart = map[idx]!.rawStart;
          const lastCharIdx = idx + normalizedOld.length - 1;
          const rawEnd = map[lastCharIdx]!.rawEnd;
          rawOldSegment = content.slice(rawStart, rawEnd);

          // Encode non-ASCII chars in new_text to preserve PB HEX format.
          hexEncodedNew = encodeToHex(normalizedNew);
          hexAwareMatch = true;
          occurrences = 1;
        }
      }

      if (occurrences === 0) {
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify({
                error: 'old_text not found in file (also tried HEX-decoded matching)',
                file: absolutePath,
              }),
            },
          ],
          isError: true,
        };
      }
      if (occurrences > 1) {
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify({
                error: `old_text appears ${occurrences} times — must be unique. Provide more surrounding context.`,
                file: absolutePath,
                occurrences,
              }),
            },
          ],
          isError: true,
        };
      }

      // Create backup.
      const backupPath = `${absolutePath}.bak`;
      try {
        await copyFile(absolutePath, backupPath);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify({ error: `Cannot create backup: ${message}` }),
            },
          ],
          isError: true,
        };
      }

      // Apply replacement and write.
      const newContent = hexAwareMatch
        ? content.replace(rawOldSegment, hexEncodedNew)
        : content.replace(normalizedOld, normalizedNew);
      try {
        await writeFile(absolutePath, newContent, 'utf-8');
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify({ error: `Cannot write file: ${message}` }),
            },
          ],
          isError: true,
        };
      }

      // Sync to .pbl/ subfolder so PBAutoBuild /pbc picks up the change.
      const syncedPath = await syncToPblSubfolder(absolutePath, newContent);

      // Invalidate cache entry.
      await cache.invalidate(absolutePath);

      const relativePath = nodePath.isAbsolute(file_path)
        ? nodePath.relative(solutionPath, absolutePath).replace(/\\/g, '/')
        : file_path;

      return {
        content: [
          {
            type: 'text' as const,
            text: toText({
              status: 'ok',
              file: relativePath,
              backup_path: backupPath,
              replaced: true,
              hex_aware: hexAwareMatch,
              ...(syncedPath ? { pbl_synced: syncedPath } : {}),
            }),
          },
        ],
      };
    },
  );

  // -------------------------------------------------------------------------
  // pb_create_object
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_create_object',
    {
      title: 'Create PowerBuilder Object',
      description:
        'Creates a new PowerBuilder object (window, userobject, or menu) from a standard template in the specified library directory.',
      inputSchema: {
        name: z.string().describe('Name of the new object (e.g. w_new_form)'),
        type: z
          .enum(['window', 'userobject', 'menu'])
          .describe('Type of object to create'),
        ancestor: z
          .string()
          .describe('Ancestor class to inherit from (e.g. w_master, nonvisualobject)'),
        library: z
          .string()
          .describe(
            'Library directory name (relative to solution root) where the file will be created',
          ),
      },
      annotations: { readOnlyHint: false },
    },
    async ({ name, type, ancestor, library }) => {
      const solutionPath = cache.getSolutionPath();
      const ext = EXTENSION_MAP[type];
      const fileName = `${name}${ext}`;
      const libDir = nodePath.join(solutionPath, library);

      // Ensure the library directory exists.
      try {
        await mkdir(libDir, { recursive: true });
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify({
                error: `Cannot create directory ${libDir}: ${message}`,
              }),
            },
          ],
          isError: true,
        };
      }

      const filePath = nodePath.join(libDir, fileName);

      // Do not overwrite existing files.
      if (existsSync(filePath)) {
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify({
                error: `File already exists: ${filePath}`,
              }),
            },
          ],
          isError: true,
        };
      }

      // Generate template content.
      // PB source files require a UTF-8 BOM (\uFEFF) at the start.
      let templateContent: string;
      if (type === 'window') {
        templateContent = '\uFEFF' + makeWindowTemplate(name, ancestor);
      } else if (type === 'userobject') {
        templateContent = '\uFEFF' + makeUserObjectTemplate(name, ancestor);
      } else {
        templateContent = '\uFEFF' + makeMenuTemplate(name, ancestor);
      }

      // Write the file.
      try {
        await writeFile(filePath, templateContent, 'utf-8');
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify({ error: `Cannot write file: ${message}` }),
            },
          ],
          isError: true,
        };
      }

      // Add the new object to the cache.
      await cache.invalidate(filePath);

      const relativePath = `${library}/${fileName}`.replace(/\\/g, '/');

      return {
        content: [
          {
            type: 'text' as const,
            text: toText({
              status: 'ok',
              file_path: relativePath,
              type,
              ancestor,
              name,
            }),
          },
        ],
      };
    },
  );
}

// Export for testing.
export { decodeHex, encodeToHex, decodeHexWithMapping };
