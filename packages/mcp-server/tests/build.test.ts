/**
 * Build tools tests.
 *
 * pb_compile requires the PBAutoBuild250.exe binary which is only available
 * on the development machine — those tests are skipped here.
 *
 * pb_validate_syntax is a pure file-reading / text-analysis function and is
 * fully tested below.
 */

import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import * as nodePath from 'node:path';
import { writeFile, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { validateSyntax } from '../src/tools/build.js';

// ---------------------------------------------------------------------------
// Setup
// ---------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = nodePath.dirname(__filename);
const FIXTURES_DIR = nodePath.join(__dirname, 'fixtures');

// ---------------------------------------------------------------------------
// validateSyntax — direct unit tests
// ---------------------------------------------------------------------------

describe('validateSyntax — well-formed files', () => {
  it('accepts a minimal userobject with no body', () => {
    const content = [
      '$PBExportHeader$nvo_empty.sru',
      'forward',
      'global type nvo_empty from nonvisualobject',
      'end type',
      'end forward',
      '',
      'global type nvo_empty from nonvisualobject',
      'end type',
    ].join('\n');

    const { valid, issues } = validateSyntax(content);
    expect(issues).toEqual([]);
    expect(valid).toBe(true);
  });

  it('accepts matched function / end function', () => {
    const content = [
      '$PBExportHeader$nvo_fn.sru',
      'forward',
      'global type nvo_fn from nonvisualobject',
      'end type',
      'end forward',
      'global type nvo_fn from nonvisualobject',
      'end type',
      'public function string of_hello()',
      'return "hello"',
      'end function',
    ].join('\n');

    const { valid, issues } = validateSyntax(content);
    expect(valid).toBe(true);
    expect(issues).toEqual([]);
  });

  it('accepts matched event / end event', () => {
    const content = [
      '$PBExportHeader$w_x.srw',
      'forward',
      'global type w_x from window',
      'end type',
      'end forward',
      'global type w_x from window',
      'end type',
      'event open;',
      'MessageBox("hi", "there")',
      'end event',
    ].join('\n');

    const { valid } = validateSyntax(content);
    expect(valid).toBe(true);
  });

  it('accepts matched if / end if', () => {
    const content = [
      '$PBExportHeader$nvo_if.sru',
      'global type nvo_if from nonvisualobject',
      'end type',
      'public function integer of_test(integer ai_val)',
      'if ai_val > 0 then',
      '  return 1',
      'end if',
      'return 0',
      'end function',
    ].join('\n');

    const { valid } = validateSyntax(content);
    expect(valid).toBe(true);
  });

  it('accepts matched for / next', () => {
    const content = [
      'global type nvo_loop from nonvisualobject',
      'end type',
      'public function integer of_sum(integer ai_n)',
      'integer li_i, li_total',
      'for li_i = 1 to ai_n',
      '  li_total = li_total + li_i',
      'next',
      'return li_total',
      'end function',
    ].join('\n');

    const { valid } = validateSyntax(content);
    expect(valid).toBe(true);
  });

  it('accepts matched do / loop', () => {
    const content = [
      'global type nvo_do from nonvisualobject',
      'end type',
      'public function integer of_run()',
      'integer li_i',
      'do',
      '  li_i = li_i + 1',
      'loop until li_i > 5',
      'return li_i',
      'end function',
    ].join('\n');

    const { valid } = validateSyntax(content);
    expect(valid).toBe(true);
  });

  it('accepts multiple matched functions in sequence', () => {
    const content = [
      'global type nvo_multi from nonvisualobject',
      'end type',
      'public function string of_a()',
      'return "a"',
      'end function',
      'public function string of_b()',
      'return "b"',
      'end function',
      'public function string of_c()',
      'return "c"',
      'end function',
    ].join('\n');

    const { valid, issues } = validateSyntax(content);
    expect(valid).toBe(true);
    expect(issues).toEqual([]);
  });

  it('accepts nested if inside function', () => {
    const content = [
      'global type nvo_nested from nonvisualobject',
      'end type',
      'public function integer of_clamp(integer ai_val, integer ai_min, integer ai_max)',
      'if ai_val < ai_min then',
      '  return ai_min',
      'end if',
      'if ai_val > ai_max then',
      '  return ai_max',
      'end if',
      'return ai_val',
      'end function',
    ].join('\n');

    const { valid } = validateSyntax(content);
    expect(valid).toBe(true);
  });

  it('handles on / end on blocks', () => {
    const content = [
      'global type w_test from window',
      'end type',
      'on w_test.create',
      'call super::create',
      'end on',
      'on w_test.destroy',
      'call super::destroy',
      'end on',
    ].join('\n');

    const { valid } = validateSyntax(content);
    expect(valid).toBe(true);
  });
});

describe('validateSyntax — malformed files', () => {
  it('detects unclosed function block', () => {
    const content = [
      'global type nvo_bad from nonvisualobject',
      'end type',
      'public function string of_broken()',
      'return "oops"',
      // Missing: end function
    ].join('\n');

    const { valid, issues } = validateSyntax(content);
    expect(valid).toBe(false);
    expect(issues.length).toBeGreaterThan(0);
    expect(issues.some((i) => i.message.includes('function'))).toBe(true);
  });

  it('detects unclosed if block', () => {
    const content = [
      'global type nvo_bad from nonvisualobject',
      'end type',
      'public function integer of_test()',
      'if true then',
      '  return 1',
      // Missing: end if
      'end function',
    ].join('\n');

    const { valid, issues } = validateSyntax(content);
    // Either unclosed if or mismatched close is detected.
    expect(valid).toBe(false);
    expect(issues.length).toBeGreaterThan(0);
  });

  it('detects unclosed for loop', () => {
    const content = [
      'global type nvo_bad from nonvisualobject',
      'end type',
      'public function integer of_loop()',
      'integer li_i',
      'for li_i = 1 to 10',
      '  li_i = li_i',
      // Missing: next
      'end function',
    ].join('\n');

    const { valid, issues } = validateSyntax(content);
    expect(valid).toBe(false);
    expect(issues.length).toBeGreaterThan(0);
  });

  it('detects unclosed do loop', () => {
    const content = [
      'global type nvo_bad from nonvisualobject',
      'end type',
      'public function integer of_loop()',
      'integer li_i',
      'do',
      '  li_i = li_i + 1',
      // Missing: loop
      'end function',
    ].join('\n');

    const { valid, issues } = validateSyntax(content);
    expect(valid).toBe(false);
    expect(issues.length).toBeGreaterThan(0);
  });
});

// ---------------------------------------------------------------------------
// validateSyntax — fixture files
// ---------------------------------------------------------------------------

describe('validateSyntax — existing fixture files', () => {
  it('validates w_main.srw without issues', async () => {
    const { readFile } = await import('node:fs/promises');
    const content = await readFile(
      nodePath.join(FIXTURES_DIR, 'w_main.srw'),
      { encoding: 'utf-8' },
    );
    const { valid, issues } = validateSyntax(content);
    // w_main.srw is a well-formed fixture.
    expect(valid).toBe(true);
    expect(issues).toEqual([]);
  });

  it('validates nvo_utils.sru without issues', async () => {
    const { readFile } = await import('node:fs/promises');
    const content = await readFile(
      nodePath.join(FIXTURES_DIR, 'nvo_utils.sru'),
      { encoding: 'utf-8' },
    );
    const { valid, issues } = validateSyntax(content);
    expect(valid).toBe(true);
    expect(issues).toEqual([]);
  });

  it('validates d_items.srd without issues (datawindow format)', async () => {
    const { readFile } = await import('node:fs/promises');
    const content = await readFile(
      nodePath.join(FIXTURES_DIR, 'd_items.srd'),
      { encoding: 'utf-8' },
    );
    // DataWindow definitions do not have function/event blocks.
    const { valid } = validateSyntax(content);
    expect(valid).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// validateSyntax — edge cases
// ---------------------------------------------------------------------------

describe('validateSyntax — edge cases', () => {
  it('handles empty string gracefully', () => {
    const { valid, issues } = validateSyntax('');
    expect(valid).toBe(true);
    expect(issues).toEqual([]);
  });

  it('handles file with only comments', () => {
    const content = [
      '// This is a comment',
      '// Another comment',
      '/* block comment */',
    ].join('\n');

    const { valid } = validateSyntax(content);
    expect(valid).toBe(true);
  });

  it('does not count "else if" as a new if block', () => {
    const content = [
      'global type nvo_elseif from nonvisualobject',
      'end type',
      'public function string of_check(integer ai_val)',
      'if ai_val = 1 then',
      '  return "one"',
      'else if ai_val = 2 then',
      '  return "two"',
      'else',
      '  return "other"',
      'end if',
      'end function',
    ].join('\n');

    const { valid } = validateSyntax(content);
    expect(valid).toBe(true);
  });

  it('returns issues array (empty) for valid file', () => {
    const content = [
      'global type nvo_trivial from nonvisualobject',
      'end type',
    ].join('\n');

    const result = validateSyntax(content);
    expect(result).toHaveProperty('valid');
    expect(result).toHaveProperty('issues');
    expect(Array.isArray(result.issues)).toBe(true);
  });

  it('reports the correct line number for an unclosed block', () => {
    const content = [
      'line 1',                              // line 1
      'global type nvo_linenum from x',      // line 2
      'end type',                            // line 3
      'public function integer of_test()',   // line 4
      'return 1',                            // line 5
      // Missing end function
    ].join('\n');

    const { issues } = validateSyntax(content);
    // The unclosed 'function' opened at line 4.
    const unclosed = issues.find((i) => i.message.includes('function'));
    expect(unclosed).toBeDefined();
    expect(unclosed!.line).toBe(4);
  });
});

// ---------------------------------------------------------------------------
// pb_compile — skipped (requires PBAutoBuild250.exe binary)
// ---------------------------------------------------------------------------

describe.skip('pb_compile — requires PBAutoBuild250.exe binary', () => {
  it('compiles the PMIX project', () => {
    // This test is intentionally skipped in CI / unit test runs.
    // It requires the PBAutoBuild250.exe binary at:
    // C:/Program Files (x86)/Appeon/PowerBuilder 25.0/pbautobuild250.exe
    // and a valid PB_PROJECT_PATH + PB_OUTPUT_EXE environment.
  });
});
