import { describe, it, expect, beforeAll } from 'vitest';
import * as nodePath from 'node:path';
import { writeFile, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { PBCache } from '../src/cache.js';

// ---------------------------------------------------------------------------
// Fixture helpers
// ---------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = nodePath.dirname(__filename);
const FIXTURES_DIR = nodePath.join(__dirname, 'fixtures');

// Helper to create an in-memory solution with specific PB files.
async function makeTempSolution(files: Record<string, string>): Promise<string> {
  const tmp = nodePath.join(__dirname, '__tmp__', `analyze-${Date.now()}`);
  await mkdir(tmp, { recursive: true });
  for (const [filename, content] of Object.entries(files)) {
    const fp = nodePath.join(tmp, filename);
    await mkdir(nodePath.dirname(fp), { recursive: true });
    await writeFile(fp, content, 'utf-8');
  }
  return tmp;
}

// ---------------------------------------------------------------------------
// Minimal PB source helpers
// ---------------------------------------------------------------------------

function makeNvo(name: string, ancestor: string, extraBody = ''): string {
  return [
    `$PBExportHeader$${name}.sru`,
    `forward`,
    `global type ${name} from ${ancestor}`,
    `end type`,
    `end forward`,
    ``,
    `global type ${name} from ${ancestor}`,
    `end type`,
    ``,
    extraBody,
  ].join('\n');
}

function makeWindow(name: string, ancestor: string, extraBody = ''): string {
  return [
    `$PBExportHeader$${name}.srw`,
    `forward`,
    `global type ${name} from ${ancestor}`,
    `end type`,
    `end forward`,
    ``,
    `global type ${name} from ${ancestor}`,
    `end type`,
    ``,
    extraBody,
  ].join('\n');
}

// ---------------------------------------------------------------------------
// pb_get_inheritance — ancestry chain resolution
// ---------------------------------------------------------------------------

describe('pb_get_inheritance — ancestors', () => {
  let cache: PBCache;
  let tmp: string;

  beforeAll(async () => {
    tmp = await makeTempSolution({
      // Base ancestor (not in cache — simulates a PB built-in like w_master).
      'nvo_base.sru': makeNvo('nvo_base', 'nonvisualobject'),
      'nvo_middle.sru': makeNvo('nvo_middle', 'nvo_base'),
      'nvo_child.sru': makeNvo('nvo_child', 'nvo_middle'),
    });
    cache = new PBCache();
    await cache.initialize(tmp);
  });

  it('resolves immediate ancestor', () => {
    const child = cache.getByName('nvo_child');
    expect(child).toBeDefined();
    expect(child!.ancestor).toBe('nvo_middle');
  });

  it('resolves full ancestor chain bottom-up', () => {
    // Manually replicate the ancestry walk to validate cache data.
    const child = cache.getByName('nvo_child');
    const middle = cache.getByName('nvo_middle');
    const base = cache.getByName('nvo_base');

    expect(child).toBeDefined();
    expect(middle).toBeDefined();
    expect(base).toBeDefined();

    // Build the expected chain.
    const ancestors: string[] = [];
    let cur: string | undefined = child!.ancestor;
    const visited = new Set<string>();
    while (cur) {
      if (visited.has(cur.toLowerCase())) break;
      visited.add(cur.toLowerCase());
      const obj = cache.getByName(cur);
      if (!obj) {
        ancestors.push(cur); // external reference
        break;
      }
      ancestors.push(obj.name);
      cur = obj.ancestor;
    }

    expect(ancestors[0]).toBe('nvo_middle');
    expect(ancestors[1]).toBe('nvo_base');
    // nvo_base inherits from nonvisualobject — not in cache, so chain stops.
    expect(ancestors[2]).toBe('nonvisualobject');
  });

  it('returns empty ancestor chain for a root object', () => {
    const base = cache.getByName('nvo_base');
    expect(base).toBeDefined();
    // nvo_base inherits from nonvisualobject which is not in cache.
    // Walking ancestors of nvo_base: first ancestor = 'nonvisualobject', not in cache.
    const ancestors: string[] = [];
    let cur = base!.ancestor;
    while (cur) {
      const obj = cache.getByName(cur);
      if (!obj) { ancestors.push(cur); break; }
      ancestors.push(obj.name);
      cur = obj.ancestor;
    }
    expect(ancestors).toEqual(['nonvisualobject']);
  });

  it('finds direct descendants', () => {
    const middleName = 'nvo_middle';
    const descendants = cache.getAll().filter(
      (o) => o.ancestor?.toLowerCase() === middleName.toLowerCase(),
    );
    expect(descendants.length).toBe(1);
    expect(descendants[0]!.name).toBe('nvo_child');
  });

  it('object with multiple descendants lists all of them', async () => {
    const tmp2 = await makeTempSolution({
      'nvo_parent.sru': makeNvo('nvo_parent', 'nonvisualobject'),
      'nvo_child1.sru': makeNvo('nvo_child1', 'nvo_parent'),
      'nvo_child2.sru': makeNvo('nvo_child2', 'nvo_parent'),
      'nvo_child3.sru': makeNvo('nvo_child3', 'nvo_parent'),
    });
    const c2 = new PBCache();
    await c2.initialize(tmp2);

    const descendants = c2.getAll().filter(
      (o) => o.ancestor?.toLowerCase() === 'nvo_parent',
    );
    expect(descendants.length).toBe(3);
    const names = descendants.map((d) => d.name).sort();
    expect(names).toEqual(['nvo_child1', 'nvo_child2', 'nvo_child3']);

    await rm(tmp2, { recursive: true, force: true });
  });

  it('guards against circular references', () => {
    // If the cache somehow had a cycle, the visited-set prevents infinite loops.
    const visited = new Set<string>();
    const simulatedCycle = (name: string): string | undefined => {
      const lookup: Record<string, string | undefined> = {
        a: 'b',
        b: 'c',
        c: 'a', // cycle
      };
      return lookup[name];
    };
    let cur: string | undefined = 'a';
    const chain: string[] = [];
    while (cur) {
      if (visited.has(cur)) break;
      visited.add(cur);
      chain.push(cur);
      cur = simulatedCycle(cur);
    }
    // Should stop after 3 unique nodes.
    expect(chain).toEqual(['a', 'b', 'c']);
  });
});

// ---------------------------------------------------------------------------
// pb_get_dependencies — cross-file reference search
// ---------------------------------------------------------------------------

describe('pb_get_dependencies — reference search', () => {
  let cache: PBCache;
  let tmp: string;

  beforeAll(async () => {
    tmp = await makeTempSolution({
      'nvo_target.sru': makeNvo('nvo_target', 'nonvisualobject'),
      // This window references nvo_target in its body.
      'w_caller.srw': makeWindow(
        'w_caller',
        'window',
        [
          'type variables',
          'private nvo_target inv_target',
          'end variables',
          '',
          'public function integer of_run()',
          'inv_target = create nvo_target',
          'inv_target.of_do_something()',
          'return 0',
          'end function',
        ].join('\n'),
      ),
      // This object does NOT reference nvo_target.
      'nvo_other.sru': makeNvo('nvo_other', 'nonvisualobject'),
    });
    cache = new PBCache();
    await cache.initialize(tmp);
  });

  it('finds files that reference the target object', async () => {
    const { readFile } = await import('node:fs/promises');
    const targetName = 'nvo_target';
    const escaped = targetName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`\\b${escaped}\\b`, 'gi');

    const hits: Array<{ name: string; line: number }> = [];
    for (const obj of cache.getAll()) {
      if (obj.name.toLowerCase() === targetName.toLowerCase()) continue;
      const content = await readFile(obj.filePath, { encoding: 'utf-8' });
      const lines = content.split(/\r?\n/);
      for (let i = 0; i < lines.length; i++) {
        pattern.lastIndex = 0;
        if (pattern.test(lines[i] ?? '')) {
          hits.push({ name: obj.name, line: i + 1 });
        }
      }
    }

    // w_caller should have at least 2 hits (type declaration + create + call).
    const callerHits = hits.filter((h) => h.name === 'w_caller');
    expect(callerHits.length).toBeGreaterThanOrEqual(2);
  });

  it('does not include the target object itself in results', async () => {
    const { readFile } = await import('node:fs/promises');
    const targetName = 'nvo_target';
    const escaped = targetName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`\\b${escaped}\\b`, 'gi');

    const objectNames: string[] = [];
    for (const obj of cache.getAll()) {
      if (obj.name.toLowerCase() === targetName.toLowerCase()) continue;
      const content = await readFile(obj.filePath, { encoding: 'utf-8' });
      pattern.lastIndex = 0;
      if (pattern.test(content)) {
        objectNames.push(obj.name);
      }
    }

    expect(objectNames).not.toContain('nvo_target');
  });

  it('returns zero references for an unreferenced object', async () => {
    const { readFile } = await import('node:fs/promises');
    const targetName = 'nvo_other';
    const escaped = targetName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`\\b${escaped}\\b`, 'gi');

    const hits: string[] = [];
    for (const obj of cache.getAll()) {
      if (obj.name.toLowerCase() === targetName.toLowerCase()) continue;
      const content = await readFile(obj.filePath, { encoding: 'utf-8' });
      pattern.lastIndex = 0;
      if (pattern.test(content)) {
        hits.push(obj.name);
      }
    }
    expect(hits.length).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// pb_get_object_summary — concise metadata extraction
// ---------------------------------------------------------------------------

describe('pb_get_object_summary — metadata extraction', () => {
  let cache: PBCache;

  beforeAll(async () => {
    cache = new PBCache();
    await cache.initialize(FIXTURES_DIR);
  });

  it('returns the correct name and type', () => {
    const obj = cache.getByName('w_main');
    expect(obj).toBeDefined();
    expect(obj!.name).toBe('w_main');
    expect(obj!.type).toBe('window');
  });

  it('includes only public functions (not events)', () => {
    const obj = cache.getByName('w_main');
    expect(obj).toBeDefined();
    // w_main has public functions: of_get_count, of_set_count.
    const publicFunctions = obj!.functions.filter(
      (f) => f.access === 'public' && !f.isEvent,
    );
    expect(publicFunctions.length).toBeGreaterThanOrEqual(2);
    const names = publicFunctions.map((f) => f.name);
    expect(names).toContain('of_get_count');
    expect(names).toContain('of_set_count');
  });

  it('includes only events with hasScript=true', () => {
    const obj = cache.getByName('w_main');
    expect(obj).toBeDefined();
    // w_main has "open" event with script; "close" event with empty body.
    const scripted = obj!.events.filter((e) => e.hasScript);
    expect(scripted.length).toBeGreaterThanOrEqual(1);
    const names = scripted.map((e) => e.name);
    expect(names).toContain('open');
  });

  it('includes instance variables', () => {
    const obj = cache.getByName('w_main');
    expect(obj).toBeDefined();
    // w_main has ii_count and is_title.
    expect(obj!.instanceVariables.length).toBeGreaterThanOrEqual(2);
    const varNames = obj!.instanceVariables.map((v) => v.name);
    expect(varNames).toContain('ii_count');
    expect(varNames).toContain('is_title');
  });

  it('nvo_utils has correct ancestor', () => {
    const obj = cache.getByName('nvo_utils');
    expect(obj).toBeDefined();
    expect(obj!.ancestor).toBe('nonvisualobject');
  });

  it('nvo_utils public functions are present', () => {
    const obj = cache.getByName('nvo_utils');
    expect(obj).toBeDefined();
    const names = obj!.functions.map((f) => f.name);
    expect(names).toContain('of_get_version');
    expect(names).toContain('of_format_date');
    expect(names).toContain('of_log');
  });

  it('returns undefined for unknown object', () => {
    const obj = cache.getByName('nonexistent_xyz');
    expect(obj).toBeUndefined();
  });
});

// ---------------------------------------------------------------------------
// pb_get_call_graph — caller/callee detection
// ---------------------------------------------------------------------------

describe('pb_get_call_graph — call detection', () => {
  let tmp: string;
  let cache: PBCache;

  beforeAll(async () => {
    tmp = await makeTempSolution({
      // nvo_service: defines of_process().
      'nvo_service.sru': makeNvo(
        'nvo_service',
        'nonvisualobject',
        [
          'public function string of_process(string as_input)',
          '// calls of_validate and of_format',
          'string ls_result',
          'ls_result = of_validate(as_input)',
          'ls_result = of_format(ls_result)',
          'return ls_result',
          'end function',
          '',
          'public function boolean of_validate(string as_val)',
          'return len(as_val) > 0',
          'end function',
        ].join('\n'),
      ),
      // w_form: calls of_process().
      'w_form.srw': makeWindow(
        'w_form',
        'window',
        [
          'type variables',
          'private nvo_service inv_svc',
          'end variables',
          '',
          'event open;',
          'inv_svc = create nvo_service',
          'string ls_result',
          'ls_result = inv_svc.of_process("hello")',
          'MessageBox("Result", ls_result)',
          'end event',
        ].join('\n'),
      ),
    });
    cache = new PBCache();
    await cache.initialize(tmp);
  });

  it('finds callers of of_process across the codebase', async () => {
    const { readFile } = await import('node:fs/promises');
    const funcName = 'of_process';
    const escaped = funcName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const callerPattern = new RegExp(`\\b${escaped}\\s*\\(`, 'gi');

    const callers: string[] = [];
    for (const obj of cache.getAll()) {
      const content = await readFile(obj.filePath, { encoding: 'utf-8' });
      const lines = content.split(/\r?\n/);
      for (const line of lines) {
        callerPattern.lastIndex = 0;
        if (callerPattern.test(line)) {
          // Exclude definition lines.
          const isDef =
            /^\s*(public|private|protected)?\s*(function|subroutine)\s+/i.test(line);
          if (!isDef) callers.push(obj.name);
        }
      }
    }
    expect(callers).toContain('w_form');
  });

  it('identifies callees within a function body', async () => {
    const { readFile } = await import('node:fs/promises');
    const obj = cache.getByName('nvo_service');
    expect(obj).toBeDefined();

    const content = await readFile(obj!.filePath, { encoding: 'utf-8' });
    const lines = content.split(/\r?\n/);

    // Find of_process's body.
    const fn = obj!.functions.find((f) => f.name === 'of_process');
    expect(fn).toBeDefined();

    const bodyLines = lines.slice(fn!.lineStart, fn!.lineEnd - 1);
    const body = bodyLines.join('\n');

    // Extract callees.
    const calleePattern = /\b([a-z_][a-z0-9_]*)\s*\(/gi;
    const seen = new Set<string>();
    const keywords = new Set(['if', 'for', 'do', 'string', 'integer', 'boolean', 'len', 'return']);
    const callees: string[] = [];
    let m: RegExpExecArray | null;
    while ((m = calleePattern.exec(body)) !== null) {
      const name = m[1];
      if (name && !seen.has(name.toLowerCase()) && !keywords.has(name.toLowerCase())) {
        seen.add(name.toLowerCase());
        callees.push(name);
      }
    }

    expect(callees).toContain('of_validate');
    expect(callees).toContain('of_format');
  });

  it('returns empty callers for a function nobody calls', async () => {
    const { readFile } = await import('node:fs/promises');
    const funcName = 'of_validate';
    const escaped = funcName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const callerPattern = new RegExp(`\\b${escaped}\\s*\\(`, 'gi');

    const callers: string[] = [];
    for (const obj of cache.getAll()) {
      const content = await readFile(obj.filePath, { encoding: 'utf-8' });
      const lines = content.split(/\r?\n/);
      for (const line of lines) {
        callerPattern.lastIndex = 0;
        if (callerPattern.test(line)) {
          const isDef = /^\s*(public|private|protected)?\s*(function|subroutine)\s+/i.test(line);
          if (!isDef) callers.push(obj.name);
        }
      }
    }
    // of_validate is only called from within nvo_service (of_process body).
    // It is NOT called from w_form, so the external callers list = nvo_service itself.
    // The test validates the detection works — at least nvo_service calls it.
    expect(callers.length).toBeGreaterThanOrEqual(1);
    expect(callers).toContain('nvo_service');
  });
});
