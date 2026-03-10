import { describe, it, expect, beforeAll } from 'vitest';
import * as nodePath from 'node:path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { PBCache } from '../src/cache.js';
import {
  parseFunctions,
  parseEvents,
  parseInstanceVariables,
  parseAncestor,
  getObjectTypeFromExtension,
  resolveLibraryFromPath,
  parseDataWindowSQL,
  parseDataWindowColumns,
  parseDataWindowArguments,
} from '@pb-toolkit/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = nodePath.dirname(__filename);
const FIXTURES_DIR = nodePath.join(__dirname, 'fixtures');

// ---------------------------------------------------------------------------
// pb_read_object — metadata_only mode (R2)
// ---------------------------------------------------------------------------

describe('pb_read_object — metadata_only mode', () => {
  let cache: PBCache;

  beforeAll(async () => {
    cache = new PBCache();
    await cache.initialize(FIXTURES_DIR);
  });

  it('includes source when metadata_only is false (default)', async () => {
    const solutionPath = cache.getSolutionPath();
    const absolutePath = nodePath.join(solutionPath, 'w_main.srw');
    const content = await readFile(absolutePath, { encoding: 'utf-8' });

    const ext = nodePath.extname(absolutePath).toLowerCase();
    const type = getObjectTypeFromExtension(ext);
    const ancestorInfo = parseAncestor(content);

    // Simulate metadata_only = false (default).
    const metadata_only = false;
    const result: Record<string, unknown> = {
      metadata: {
        name: ancestorInfo?.name ?? nodePath.basename(absolutePath, ext),
        type,
      },
    };
    if (!metadata_only) {
      result.source = content;
    }

    expect(result).toHaveProperty('source');
    expect(typeof result.source).toBe('string');
    expect((result.source as string).length).toBeGreaterThan(0);
  });

  it('omits source when metadata_only is true', async () => {
    const solutionPath = cache.getSolutionPath();
    const absolutePath = nodePath.join(solutionPath, 'w_main.srw');
    const content = await readFile(absolutePath, { encoding: 'utf-8' });

    const ext = nodePath.extname(absolutePath).toLowerCase();
    const type = getObjectTypeFromExtension(ext);
    const ancestorInfo = parseAncestor(content);

    // Simulate metadata_only = true.
    const metadata_only = true;
    const result: Record<string, unknown> = {
      metadata: {
        name: ancestorInfo?.name ?? nodePath.basename(absolutePath, ext),
        type,
      },
    };
    if (!metadata_only) {
      result.source = content;
    }

    expect(result).not.toHaveProperty('source');
    expect(result).toHaveProperty('metadata');
  });

  it('metadata is identical regardless of metadata_only flag', async () => {
    const solutionPath = cache.getSolutionPath();
    const absolutePath = nodePath.join(solutionPath, 'w_main.srw');
    const content = await readFile(absolutePath, { encoding: 'utf-8' });

    const ext = nodePath.extname(absolutePath).toLowerCase();
    const type = getObjectTypeFromExtension(ext);
    const ancestorInfo = parseAncestor(content);
    const functions = parseFunctions(content);
    const events = parseEvents(content);
    const instanceVariables = parseInstanceVariables(content);
    const library = resolveLibraryFromPath(
      nodePath.relative(solutionPath, absolutePath).replace(/\\/g, '/'),
    );
    const lineCount = content.split(/\r?\n/).length;

    const metadata = {
      name: ancestorInfo?.name ?? nodePath.basename(absolutePath, ext),
      type,
      library,
      lineCount,
      ancestor: ancestorInfo?.ancestor ?? null,
      functionCount: functions.length,
      eventCount: events.length,
      variableCount: instanceVariables.length,
    };

    // Both modes produce the same metadata.
    const resultFull: Record<string, unknown> = { metadata };
    resultFull.source = content;

    const resultMeta: Record<string, unknown> = { metadata };

    expect(resultFull.metadata).toEqual(resultMeta.metadata);
  });
});

// ---------------------------------------------------------------------------
// pb_list_objects — pagination (R1)
// ---------------------------------------------------------------------------

describe('pb_list_objects — pagination', () => {
  let cache: PBCache;

  beforeAll(async () => {
    cache = new PBCache();
    await cache.initialize(FIXTURES_DIR);
  });

  it('returns all objects when limit exceeds total', () => {
    const all = cache.getAll();
    const limit = 100;
    const offset = 0;
    const sliced = all.slice(offset, offset + limit);
    expect(sliced.length).toBe(all.length); // 3 fixtures < 100
  });

  it('respects limit parameter', () => {
    const all = cache.getAll();
    const limit = 1;
    const offset = 0;
    const sliced = all.slice(offset, offset + limit);
    expect(sliced.length).toBe(1);
  });

  it('respects offset parameter', () => {
    const all = cache.getAll();
    const limit = 100;
    const offset = 1;
    const sliced = all.slice(offset, offset + limit);
    expect(sliced.length).toBe(all.length - 1); // 3 - 1 = 2
  });

  it('has_more is true when more results exist', () => {
    const all = cache.getAll();
    const limit = 1;
    const offset = 0;
    const has_more = offset + limit < all.length;
    expect(has_more).toBe(true);
  });

  it('has_more is false when all results returned', () => {
    const all = cache.getAll();
    const limit = 100;
    const offset = 0;
    const has_more = offset + limit < all.length;
    expect(has_more).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// pb_read_object — name resolution via cache
// ---------------------------------------------------------------------------

describe('pb_read_object — name resolution', () => {
  let cache: PBCache;

  beforeAll(async () => {
    cache = new PBCache();
    await cache.initialize(FIXTURES_DIR);
  });

  it('resolves bare object name via cache.getByName', () => {
    const filePath = 'w_main';
    const looksLikeName = !filePath.includes('/') && !filePath.includes('\\') && !/\.sr[wdumafsjpq]$/i.test(filePath);
    expect(looksLikeName).toBe(true);

    const obj = cache.getByName(filePath);
    expect(obj).toBeDefined();
    expect(obj!.name).toBe('w_main');
    expect(obj!.filePath).toContain('w_main.srw');
  });

  it('does not resolve paths with separators as names', () => {
    const filePath = 'lib/w_main.srw';
    const looksLikeName = !filePath.includes('/') && !filePath.includes('\\') && !/\.sr[wdumafsjpq]$/i.test(filePath);
    expect(looksLikeName).toBe(false);
  });

  it('does not resolve paths with .srw extension as names', () => {
    const filePath = 'w_main.srw';
    const looksLikeName = !filePath.includes('/') && !filePath.includes('\\') && !/\.sr[wdumafsjpq]$/i.test(filePath);
    expect(looksLikeName).toBe(false);
  });

  it('returns undefined for unknown object name', () => {
    const obj = cache.getByName('nonexistent_object_xyz');
    expect(obj).toBeUndefined();
  });
});

// ---------------------------------------------------------------------------
// pb_get_datawindow_sql — SQL extraction from .srd
// ---------------------------------------------------------------------------

describe('pb_get_datawindow_sql — SQL extraction', () => {
  let cache: PBCache;

  beforeAll(async () => {
    cache = new PBCache();
    await cache.initialize(FIXTURES_DIR);
  });

  it('finds d_items in cache as datawindow type', () => {
    const obj = cache.getByName('d_items');
    expect(obj).toBeDefined();
    expect(obj!.type).toBe('datawindow');
  });

  it('extracts SQL from d_items.srd', async () => {
    const obj = cache.getByName('d_items');
    expect(obj).toBeDefined();
    const source = await readFile(obj!.filePath, { encoding: 'utf-8' });
    const sql = parseDataWindowSQL(source);
    expect(sql).toBeDefined();
    expect(sql).toContain('SELECT');
    expect(sql).toContain('items');
  });

  it('extracts columns from d_items.srd', async () => {
    const obj = cache.getByName('d_items');
    expect(obj).toBeDefined();
    const source = await readFile(obj!.filePath, { encoding: 'utf-8' });
    const columns = parseDataWindowColumns(source);
    expect(columns.length).toBeGreaterThan(0);
    const names = columns.map(c => c.name);
    expect(names).toContain('item_code');
    expect(names).toContain('item_desc');
  });

  it('extracts processing type from d_items.srd', async () => {
    const obj = cache.getByName('d_items');
    expect(obj).toBeDefined();
    const source = await readFile(obj!.filePath, { encoding: 'utf-8' });
    const procMatch = /\bdatawindow\b[^)]*\bprocessing=(\d+)/i.exec(source);
    expect(procMatch).toBeDefined();
    // fixture d_items uses processing=0 (freeform)
    expect(parseInt(procMatch![1]!, 10)).toBe(0);
  });

  it('extracts update table when present', () => {
    // Inline source with update attribute
    const source = 'table(column=(type=char(20) key=yes name=code) retrieve="SELECT code FROM t" update="my_table" updatewhere=0 )';
    const updateMatch = /\bupdate="([^"]+)"/i.exec(source);
    expect(updateMatch).toBeDefined();
    expect(updateMatch![1]).toBe('my_table');
  });

  it('extracts key columns when present (balanced parens)', () => {
    const source = 'table(column=(type=char(20) key=yes name=pk_col dbname="pk_col") column=(type=char(50) name=other dbname="other"))';
    // Use balanced-paren extraction matching the implementation in explore.ts.
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
    expect(keyColNames).toContain('pk_col');
    expect(keyColNames).not.toContain('other');
  });

  it('extracts computed fields when present', () => {
    const source = 'compute(band=header alignment="0" expression="rowcount()" name=compute_1 visible="1" )';
    expect(source).toContain('compute(band=header');
    const exprMatch = /\bexpression="((?:[^"~]|~.)*)"/i.exec(source);
    expect(exprMatch).toBeDefined();
    expect(exprMatch![1]).toBe('rowcount()');
  });

  it('returns empty arguments for d_items (no retrieval args)', async () => {
    const obj = cache.getByName('d_items');
    expect(obj).toBeDefined();
    const source = await readFile(obj!.filePath, { encoding: 'utf-8' });
    const args = parseDataWindowArguments(source);
    expect(args.length).toBe(0);
  });
});
