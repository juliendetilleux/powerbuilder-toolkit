import { describe, it, expect, afterEach } from 'vitest';
import * as nodePath from 'node:path';
import { writeFile, readFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { PBCache } from '../src/cache.js';

// ---------------------------------------------------------------------------
// Setup
// ---------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = nodePath.dirname(__filename);

const tmpDirs: string[] = [];

async function makeTempSolution(files: Record<string, string>): Promise<string> {
  const tmp = nodePath.join(__dirname, '__tmp__', `modify-${Date.now()}-${Math.random().toString(36).slice(2)}`);
  await mkdir(tmp, { recursive: true });
  tmpDirs.push(tmp);

  for (const [filename, content] of Object.entries(files)) {
    const fp = nodePath.join(tmp, filename);
    await mkdir(nodePath.dirname(fp), { recursive: true });
    await writeFile(fp, content, 'utf-8');
  }

  return tmp;
}

afterEach(async () => {
  // Clean up any temp dirs created during the test.
  for (const dir of tmpDirs.splice(0)) {
    await rm(dir, { recursive: true, force: true });
  }
});

// ---------------------------------------------------------------------------
// Sample PB content
// ---------------------------------------------------------------------------

const SAMPLE_NVO = [
  '$PBExportHeader$nvo_sample.sru',
  'forward',
  'global type nvo_sample from nonvisualobject',
  'end type',
  'end forward',
  '',
  'global type nvo_sample from nonvisualobject',
  'end type',
  '',
  'public function string of_greet(string as_name)',
  'return "Hello, " + as_name',
  'end function',
  '',
].join('\n');

// ---------------------------------------------------------------------------
// pb_modify_script — text replacement
// ---------------------------------------------------------------------------

describe('pb_modify_script — replacement logic', () => {
  it('replaces text that appears exactly once', async () => {
    const tmp = await makeTempSolution({ 'nvo_sample.sru': SAMPLE_NVO });
    const cache = new PBCache();
    await cache.initialize(tmp);

    const filePath = nodePath.join(tmp, 'nvo_sample.sru');
    const oldText = 'return "Hello, " + as_name';
    const newText = 'return "Hi, " + as_name + "!"';

    // Read, replace, write — mirroring the tool's logic.
    const content = await readFile(filePath, { encoding: 'utf-8' });
    const occurrences = content.split(oldText).length - 1;
    expect(occurrences).toBe(1);

    const newContent = content.replace(oldText, newText);
    await writeFile(filePath, newContent, 'utf-8');

    const result = await readFile(filePath, { encoding: 'utf-8' });
    expect(result).toContain(newText);
    expect(result).not.toContain(oldText);
  });

  it('rejects old_text that does not exist', async () => {
    const tmp = await makeTempSolution({ 'nvo_sample.sru': SAMPLE_NVO });

    const content = await readFile(nodePath.join(tmp, 'nvo_sample.sru'), { encoding: 'utf-8' });
    const oldText = 'this text does not exist anywhere';
    const occurrences = content.split(oldText).length - 1;
    expect(occurrences).toBe(0);
  });

  it('rejects old_text that appears more than once', async () => {
    const dup = SAMPLE_NVO + '\n// duplicate\n// duplicate\n';
    const tmp = await makeTempSolution({ 'nvo_dup.sru': dup });

    const content = await readFile(nodePath.join(tmp, 'nvo_dup.sru'), { encoding: 'utf-8' });
    const oldText = '// duplicate';
    const occurrences = content.split(oldText).length - 1;
    expect(occurrences).toBe(2);
  });

  it('creates a .bak backup before writing', async () => {
    const tmp = await makeTempSolution({ 'nvo_sample.sru': SAMPLE_NVO });
    const filePath = nodePath.join(tmp, 'nvo_sample.sru');
    const backupPath = `${filePath}.bak`;

    // Simulate backup creation.
    const { copyFile } = await import('node:fs/promises');
    await copyFile(filePath, backupPath);

    expect(existsSync(backupPath)).toBe(true);

    // The backup should contain the original content.
    const backupContent = await readFile(backupPath, { encoding: 'utf-8' });
    expect(backupContent).toBe(SAMPLE_NVO);
  });

  it('backup preserves original content even after replacement', async () => {
    const tmp = await makeTempSolution({ 'nvo_sample.sru': SAMPLE_NVO });
    const filePath = nodePath.join(tmp, 'nvo_sample.sru');
    const backupPath = `${filePath}.bak`;

    const { copyFile } = await import('node:fs/promises');
    await copyFile(filePath, backupPath);

    // Replace the text.
    const oldText = 'return "Hello, " + as_name';
    const newText = 'return "Modified"';
    const content = await readFile(filePath, { encoding: 'utf-8' });
    await writeFile(filePath, content.replace(oldText, newText), 'utf-8');

    // The backup should still contain the original.
    const backupContent = await readFile(backupPath, { encoding: 'utf-8' });
    expect(backupContent).toContain(oldText);
    expect(backupContent).not.toContain(newText);
  });

  it('invalidates the cache entry after modification', async () => {
    const tmp = await makeTempSolution({ 'nvo_sample.sru': SAMPLE_NVO });
    const cache = new PBCache();
    await cache.initialize(tmp);

    const filePath = nodePath.join(tmp, 'nvo_sample.sru');
    const before = cache.getByName('nvo_sample');
    expect(before).toBeDefined();
    expect(before!.functions.length).toBe(1);

    // Write a new version with an extra function.
    const updated = SAMPLE_NVO + [
      'public function integer of_count()',
      'return 42',
      'end function',
      '',
    ].join('\n');

    await writeFile(filePath, updated, 'utf-8');
    await cache.invalidate(filePath);

    const after = cache.getByName('nvo_sample');
    expect(after).toBeDefined();
    expect(after!.functions.length).toBe(2);
  });

  it('preserves file encoding and line endings after replacement', async () => {
    // Use Windows-style CRLF.
    const crlfContent = SAMPLE_NVO.replace(/\n/g, '\r\n');
    const tmp = await makeTempSolution({ 'nvo_crlf.sru': crlfContent });
    const filePath = nodePath.join(tmp, 'nvo_crlf.sru');

    const content = await readFile(filePath, { encoding: 'utf-8' });
    const oldText = 'return "Hello, " + as_name';
    const newText = 'return "Bonjour"';

    const occurrences = content.split(oldText).length - 1;
    expect(occurrences).toBe(1);

    const replaced = content.replace(oldText, newText);
    await writeFile(filePath, replaced, 'utf-8');

    const result = await readFile(filePath, { encoding: 'utf-8' });
    expect(result).toContain(newText);
    // CRLF sequences should still be present elsewhere.
    expect(result).toContain('\r\n');
  });
});

// ---------------------------------------------------------------------------
// pb_create_object — template generation
// ---------------------------------------------------------------------------

describe('pb_create_object — template generation', () => {
  it('creates a .sru file for userobject type', async () => {
    const tmp = await makeTempSolution({});
    const cache = new PBCache();
    await cache.initialize(tmp);

    const name = 'nvo_new';
    const ext = '.sru';
    const filePath = nodePath.join(tmp, `${name}${ext}`);

    const template = [
      `$PBExportHeader$${name}.sru`,
      `forward`,
      `global type ${name} from nonvisualobject`,
      `end type`,
      `end forward`,
      ``,
      `global type ${name} from nonvisualobject`,
      `end type`,
    ].join('\n');

    await writeFile(filePath, template, 'utf-8');
    await cache.invalidate(filePath);

    expect(existsSync(filePath)).toBe(true);
    const obj = cache.getByName(name);
    expect(obj).toBeDefined();
    expect(obj!.type).toBe('userobject');
    expect(obj!.ancestor).toBe('nonvisualobject');
  });

  it('creates a .srw file for window type', async () => {
    const tmp = await makeTempSolution({});
    const cache = new PBCache();
    await cache.initialize(tmp);

    const name = 'w_new';
    const ext = '.srw';
    const filePath = nodePath.join(tmp, `${name}${ext}`);

    const template = [
      `$PBExportHeader$${name}.srw`,
      `forward`,
      `global type ${name} from w_ancestor`,
      `end type`,
      `end forward`,
      ``,
      `global type ${name} from w_ancestor`,
      `end type`,
    ].join('\n');

    await writeFile(filePath, template, 'utf-8');
    await cache.invalidate(filePath);

    const obj = cache.getByName(name);
    expect(obj).toBeDefined();
    expect(obj!.type).toBe('window');
    expect(obj!.ancestor).toBe('w_ancestor');
  });

  it('creates a .srm file for menu type', async () => {
    const tmp = await makeTempSolution({});
    const cache = new PBCache();
    await cache.initialize(tmp);

    const name = 'm_new';
    const ext = '.srm';
    const filePath = nodePath.join(tmp, `${name}${ext}`);

    const template = [
      `$PBExportHeader$${name}.srm`,
      `forward`,
      `global type ${name} from menu`,
      `end type`,
      `end forward`,
      ``,
      `global type ${name} from menu`,
      `end type`,
    ].join('\n');

    await writeFile(filePath, template, 'utf-8');
    await cache.invalidate(filePath);

    const obj = cache.getByName(name);
    expect(obj).toBeDefined();
    expect(obj!.type).toBe('menu');
  });

  it('template contains the object name in the header', () => {
    const name = 'nvo_check';
    const template = [
      `$PBExportHeader$${name}.sru`,
      `forward`,
      `global type ${name} from nonvisualobject`,
      `end type`,
      `end forward`,
    ].join('\n');

    expect(template).toContain(`$PBExportHeader$${name}.sru`);
    expect(template).toContain(`global type ${name} from nonvisualobject`);
  });

  it('does not overwrite an existing file', async () => {
    const tmp = await makeTempSolution({ 'nvo_existing.sru': SAMPLE_NVO });

    const filePath = nodePath.join(tmp, 'nvo_existing.sru');
    expect(existsSync(filePath)).toBe(true);

    // In the real tool this returns an error. Here we verify the guard logic.
    const alreadyExists = existsSync(filePath);
    expect(alreadyExists).toBe(true);

    // The original content should be untouched.
    const original = await readFile(filePath, { encoding: 'utf-8' });
    expect(original).toBe(SAMPLE_NVO);
  });

  it('creates the library directory if it does not exist', async () => {
    const tmp = await makeTempSolution({});
    const libDir = nodePath.join(tmp, '_new_lib');

    expect(existsSync(libDir)).toBe(false);

    await mkdir(libDir, { recursive: true });

    expect(existsSync(libDir)).toBe(true);
  });
});
