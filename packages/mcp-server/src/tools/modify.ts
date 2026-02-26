import { readFile, writeFile, copyFile } from 'node:fs/promises';
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

// ---------------------------------------------------------------------------
// PB source file templates
// ---------------------------------------------------------------------------

function makeWindowTemplate(name: string, ancestor: string): string {
  const timestamp = new Date().toISOString();
  return [
    `$PBExportHeader$${name}.srw`,
    `$PBExportComments$Created by PB MCP server on ${timestamp}`,
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
  ].join('\n');
}

function makeUserObjectTemplate(name: string, ancestor: string): string {
  const timestamp = new Date().toISOString();
  return [
    `$PBExportHeader$${name}.sru`,
    `$PBExportComments$Created by PB MCP server on ${timestamp}`,
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
  ].join('\n');
}

function makeMenuTemplate(name: string, ancestor: string): string {
  const timestamp = new Date().toISOString();
  return [
    `$PBExportHeader$${name}.srm`,
    `$PBExportComments$Created by PB MCP server on ${timestamp}`,
    `forward`,
    `global type ${name} from ${ancestor}`,
    `end type`,
    `end forward`,
    ``,
    `global type ${name} from ${ancestor}`,
    `end type`,
    ``,
  ].join('\n');
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

      // Verify old_text appears exactly once.
      const occurrences = content.split(old_text).length - 1;
      if (occurrences === 0) {
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify({
                error: 'old_text not found in file',
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
      const newContent = content.replace(old_text, new_text);
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
      let templateContent: string;
      if (type === 'window') {
        templateContent = makeWindowTemplate(name, ancestor);
      } else if (type === 'userobject') {
        templateContent = makeUserObjectTemplate(name, ancestor);
      } else {
        templateContent = makeMenuTemplate(name, ancestor);
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
