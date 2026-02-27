import { describe, it, expect, beforeAll, afterEach } from 'vitest';
import * as nodePath from 'node:path';
import { writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { PBCache } from '../src/cache.js';

// ---------------------------------------------------------------------------
// Fixture paths
// ---------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = nodePath.dirname(__filename);
const FIXTURES_DIR = nodePath.join(__dirname, 'fixtures');

// ---------------------------------------------------------------------------
// Helper: create a temp directory with PB files
// ---------------------------------------------------------------------------

async function makeTempSolution(
  files: Record<string, string>,
): Promise<string> {
  const tmp = nodePath.join(__dirname, '__tmp__', `test-${Date.now()}`);
  await mkdir(tmp, { recursive: true });

  for (const [filename, content] of Object.entries(files)) {
    const filePath = nodePath.join(tmp, filename);
    await mkdir(nodePath.dirname(filePath), { recursive: true });
    await writeFile(filePath, content, 'utf-8');
  }

  return tmp;
}

// ---------------------------------------------------------------------------
// Initialisation tests
// ---------------------------------------------------------------------------

describe('PBCache.initialize()', () => {
  it('starts un-initialized', () => {
    const cache = new PBCache();
    expect(cache.isInitialized()).toBe(false);
    expect(cache.getObjectCount()).toBe(0);
  });

  it('indexes fixture files', async () => {
    const cache = new PBCache();
    await cache.initialize(FIXTURES_DIR);

    expect(cache.isInitialized()).toBe(true);
    // 3 fixtures: w_main.srw, nvo_utils.sru, d_items.srd
    expect(cache.getObjectCount()).toBe(3);
  });

  it('sets solutionPath after initialization', async () => {
    const cache = new PBCache();
    await cache.initialize(FIXTURES_DIR);
    expect(cache.getSolutionPath()).toBeTruthy();
    expect(nodePath.isAbsolute(cache.getSolutionPath())).toBe(true);
  });

  it('handles re-initialization (clears previous data)', async () => {
    const cache = new PBCache();
    await cache.initialize(FIXTURES_DIR);
    const countBefore = cache.getObjectCount();

    // Re-initialize with a fresh temp dir containing just 1 file.
    const tmp = await makeTempSolution({
      'single.sru': '$PBExportHeader$single.sru\nforward\nglobal type single from nonvisualobject\nend type\nend forward\nglobal type single from nonvisualobject\nend type\n',
    });

    try {
      await cache.initialize(tmp);
      expect(cache.getObjectCount()).toBe(1);
      expect(cache.getObjectCount()).toBeLessThan(countBefore);
    } finally {
      await rm(tmp, { recursive: true, force: true });
    }
  });
});

// ---------------------------------------------------------------------------
// getByType tests
// ---------------------------------------------------------------------------

describe('PBCache.getByType()', () => {
  let cache: PBCache;

  beforeAll(async () => {
    cache = new PBCache();
    await cache.initialize(FIXTURES_DIR);
  });

  it('returns windows', () => {
    const windows = cache.getByType('window');
    expect(windows.length).toBeGreaterThanOrEqual(1);
    expect(windows.every((o) => o.type === 'window')).toBe(true);
  });

  it('returns userobjects', () => {
    const uos = cache.getByType('userobject');
    expect(uos.length).toBeGreaterThanOrEqual(1);
    expect(uos.every((o) => o.type === 'userobject')).toBe(true);
  });

  it('returns datawindows', () => {
    const dws = cache.getByType('datawindow');
    expect(dws.length).toBeGreaterThanOrEqual(1);
    expect(dws.every((o) => o.type === 'datawindow')).toBe(true);
  });

  it('returns empty array for unused type', () => {
    expect(cache.getByType('pipeline')).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// getByName tests
// ---------------------------------------------------------------------------

describe('PBCache.getByName()', () => {
  let cache: PBCache;

  beforeAll(async () => {
    cache = new PBCache();
    await cache.initialize(FIXTURES_DIR);
  });

  it('finds object by exact name (case-insensitive)', () => {
    const obj = cache.getByName('w_main');
    expect(obj).toBeDefined();
    expect(obj!.name).toBe('w_main');
    expect(obj!.type).toBe('window');
  });

  it('finds by uppercase name', () => {
    const obj = cache.getByName('W_MAIN');
    expect(obj).toBeDefined();
  });

  it('finds nvo_utils', () => {
    const obj = cache.getByName('nvo_utils');
    expect(obj).toBeDefined();
    expect(obj!.type).toBe('userobject');
  });

  it('returns undefined for unknown name', () => {
    expect(cache.getByName('nonexistent_object')).toBeUndefined();
  });

  it('parsed functions are attached', () => {
    const obj = cache.getByName('w_main');
    expect(obj).toBeDefined();
    expect(obj!.functions.length).toBeGreaterThanOrEqual(2);
  });

  it('parsed events are attached', () => {
    const obj = cache.getByName('w_main');
    expect(obj).toBeDefined();
    expect(obj!.events.length).toBeGreaterThanOrEqual(1);
  });

  it('ancestor is parsed', () => {
    const obj = cache.getByName('w_main');
    expect(obj).toBeDefined();
    expect(obj!.ancestor).toBe('w_master');
  });
});

// ---------------------------------------------------------------------------
// getByPath tests
// ---------------------------------------------------------------------------

describe('PBCache.getByPath()', () => {
  let cache: PBCache;

  beforeAll(async () => {
    cache = new PBCache();
    await cache.initialize(FIXTURES_DIR);
  });

  it('finds object by relative path', () => {
    const obj = cache.getByPath('w_main.srw');
    expect(obj).toBeDefined();
    expect(obj!.name).toBe('w_main');
  });

  it('returns undefined for unknown path', () => {
    expect(cache.getByPath('bogus/path.srw')).toBeUndefined();
  });
});

// ---------------------------------------------------------------------------
// getAll tests
// ---------------------------------------------------------------------------

describe('PBCache.getAll()', () => {
  it('returns all indexed objects', async () => {
    const cache = new PBCache();
    await cache.initialize(FIXTURES_DIR);
    const all = cache.getAll();
    expect(all.length).toBe(cache.getObjectCount());
    expect(all.length).toBe(3);
  });
});

// ---------------------------------------------------------------------------
// invalidate tests
// ---------------------------------------------------------------------------

describe('PBCache.invalidate()', () => {
  it('re-indexes a modified file', async () => {
    const tmp = await makeTempSolution({
      'nvo_test.sru':
        '$PBExportHeader$nvo_test.sru\nforward\nglobal type nvo_test from nonvisualobject\nend type\nend forward\nglobal type nvo_test from nonvisualobject\nend type\n',
    });

    try {
      const cache = new PBCache();
      await cache.initialize(tmp);
      expect(cache.getObjectCount()).toBe(1);

      const original = cache.getByName('nvo_test');
      expect(original).toBeDefined();
      expect(original!.functions.length).toBe(0);

      // Update file to add a function.
      const updatedContent =
        '$PBExportHeader$nvo_test.sru\n' +
        'forward\nglobal type nvo_test from nonvisualobject\nend type\nend forward\n' +
        'global type nvo_test from nonvisualobject\nend type\n' +
        'public function string of_hello()\nreturn "hello"\nend function\n';

      await writeFile(nodePath.join(tmp, 'nvo_test.sru'), updatedContent, 'utf-8');
      await cache.invalidate(nodePath.join(tmp, 'nvo_test.sru'));

      const updated = cache.getByName('nvo_test');
      expect(updated).toBeDefined();
      expect(updated!.functions.length).toBe(1);
      expect(updated!.functions[0]?.name).toBe('of_hello');

      // Object count should remain the same.
      expect(cache.getObjectCount()).toBe(1);
    } finally {
      await rm(tmp, { recursive: true, force: true });
    }
  });

  it('removes entry when file is deleted', async () => {
    const tmp = await makeTempSolution({
      'nvo_gone.sru':
        '$PBExportHeader$nvo_gone.sru\nforward\nglobal type nvo_gone from nonvisualobject\nend type\nend forward\nglobal type nvo_gone from nonvisualobject\nend type\n',
    });

    try {
      const cache = new PBCache();
      await cache.initialize(tmp);
      expect(cache.getObjectCount()).toBe(1);

      // Delete the file then invalidate.
      await rm(nodePath.join(tmp, 'nvo_gone.sru'));
      await cache.invalidate(nodePath.join(tmp, 'nvo_gone.sru'));

      expect(cache.getObjectCount()).toBe(0);
      expect(cache.getByName('nvo_gone')).toBeUndefined();
    } finally {
      await rm(tmp, { recursive: true, force: true });
    }
  });

  it('silently ignores invalidation of non-indexed file', async () => {
    const cache = new PBCache();
    await cache.initialize(FIXTURES_DIR);
    const countBefore = cache.getObjectCount();

    // This file does not exist in the index.
    await cache.invalidate('/nonexistent/path/nvo_fake.sru');
    expect(cache.getObjectCount()).toBe(countBefore);
  });
});

// ---------------------------------------------------------------------------
// refresh (re-initialize) tests
// ---------------------------------------------------------------------------

describe('PBCache — refresh (re-initialize)', () => {
  it('re-indexes after external file addition', async () => {
    const tmp = await makeTempSolution({
      'nvo_initial.sru':
        '$PBExportHeader$nvo_initial.sru\nforward\nglobal type nvo_initial from nonvisualobject\nend type\nend forward\nglobal type nvo_initial from nonvisualobject\nend type\n',
    });

    try {
      const cache = new PBCache();
      await cache.initialize(tmp);
      expect(cache.getObjectCount()).toBe(1);

      // Simulate external addition.
      await writeFile(
        nodePath.join(tmp, 'nvo_added.sru'),
        '$PBExportHeader$nvo_added.sru\nforward\nglobal type nvo_added from nonvisualobject\nend type\nend forward\nglobal type nvo_added from nonvisualobject\nend type\n',
        'utf-8',
      );

      // Cache still shows 1 (stale).
      expect(cache.getObjectCount()).toBe(1);

      // Re-initialize (what pb_refresh_cache calls).
      await cache.initialize(tmp);

      // Now shows 2.
      expect(cache.getObjectCount()).toBe(2);
      expect(cache.getByName('nvo_added')).toBeDefined();
    } finally {
      await rm(tmp, { recursive: true, force: true });
    }
  });

  it('re-indexes after external file deletion', async () => {
    const tmp = await makeTempSolution({
      'nvo_a.sru':
        '$PBExportHeader$nvo_a.sru\nforward\nglobal type nvo_a from nonvisualobject\nend type\nend forward\nglobal type nvo_a from nonvisualobject\nend type\n',
      'nvo_b.sru':
        '$PBExportHeader$nvo_b.sru\nforward\nglobal type nvo_b from nonvisualobject\nend type\nend forward\nglobal type nvo_b from nonvisualobject\nend type\n',
    });

    try {
      const cache = new PBCache();
      await cache.initialize(tmp);
      expect(cache.getObjectCount()).toBe(2);

      // Delete a file externally.
      await rm(nodePath.join(tmp, 'nvo_b.sru'));

      // Cache still shows 2 (stale).
      expect(cache.getObjectCount()).toBe(2);

      // Re-initialize.
      await cache.initialize(tmp);

      // Now shows 1.
      expect(cache.getObjectCount()).toBe(1);
      expect(cache.getByName('nvo_b')).toBeUndefined();
    } finally {
      await rm(tmp, { recursive: true, force: true });
    }
  });
});
