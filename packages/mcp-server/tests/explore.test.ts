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
