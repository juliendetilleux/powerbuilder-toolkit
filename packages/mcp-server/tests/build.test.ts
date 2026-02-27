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
import { validateSyntax, parseBuildOutput, decodeOutput } from '../src/tools/build.js';

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
// decodeOutput — UTF-16LE decoding
// ---------------------------------------------------------------------------

describe('decodeOutput — UTF-16LE decoding', () => {
  it('returns plain ASCII text unchanged', () => {
    const text = 'Hello World\r\nLine 2';
    expect(decodeOutput(text)).toBe(text);
  });

  it('decodes UTF-16LE encoded text (with null bytes)', () => {
    // Simulate UTF-16LE: each ASCII char followed by a null byte.
    const original = 'Error: test failed';
    const utf16le = Buffer.from(original, 'utf16le');
    // Reading with 'binary' encoding produces a string where each byte is a char code.
    const binaryStr = utf16le.toString('binary');
    // binaryStr will contain null bytes between characters.
    expect(binaryStr.includes('\x00')).toBe(true);
    const decoded = decodeOutput(binaryStr);
    expect(decoded).toBe(original);
  });

  it('decodes UTF-16LE multi-line output', () => {
    const original = 'Warning: W0001 something\r\nError: E0002 bad stuff\r\nDone.';
    const utf16le = Buffer.from(original, 'utf16le');
    const binaryStr = utf16le.toString('binary');
    const decoded = decodeOutput(binaryStr);
    expect(decoded).toBe(original);
  });

  it('handles empty string', () => {
    expect(decodeOutput('')).toBe('');
  });
});

// ---------------------------------------------------------------------------
// parseBuildOutput — error/warning extraction
// ---------------------------------------------------------------------------

describe('parseBuildOutput — error and warning extraction', () => {
  it('parses errors from plain text output', () => {
    const stdout = 'Compiling...\r\nError: C0001 Undefined variable at myfile.sru(42)\r\nDone.';
    const { errors, warnings } = parseBuildOutput(stdout, '');
    expect(errors.length).toBe(1);
    expect(errors[0]!.message).toContain('C0001');
    expect(warnings.length).toBe(0);
  });

  it('parses warnings from plain text output', () => {
    const stdout = 'Compiling...\r\nWarning: W0023 Variable not used\r\nDone.';
    const { errors, warnings } = parseBuildOutput(stdout, '');
    expect(errors.length).toBe(0);
    expect(warnings.length).toBe(1);
    expect(warnings[0]!.message).toContain('W0023');
  });

  it('parses mixed errors and warnings', () => {
    const stdout = [
      'Building project...',
      'Warning: W0001 unused variable',
      'Warning: W0002 another warning',
      'Error: E0001 something broke at foo.sru(10)',
      'Done.',
    ].join('\r\n');
    const { errors, warnings } = parseBuildOutput(stdout, '');
    expect(errors.length).toBe(1);
    expect(warnings.length).toBe(2);
  });

  it('extracts file and line from error location', () => {
    const stdout = 'Error: E0001 Undefined variable at mylib/myfile.sru(123)';
    const { errors } = parseBuildOutput(stdout, '');
    expect(errors.length).toBe(1);
    expect(errors[0]!.file).toBe('mylib/myfile.sru');
    expect(errors[0]!.line).toBe(123);
  });

  it('handles errors without file location', () => {
    const stdout = 'Error: General compilation failure';
    const { errors } = parseBuildOutput(stdout, '');
    expect(errors.length).toBe(1);
    expect(errors[0]!.file).toBeUndefined();
    expect(errors[0]!.line).toBeUndefined();
  });

  it('returns empty arrays for clean output', () => {
    const stdout = 'Building...\r\nCompilation successful.\r\nDone.';
    const { errors, warnings } = parseBuildOutput(stdout, '');
    expect(errors).toEqual([]);
    expect(warnings).toEqual([]);
  });

  it('handles stderr in addition to stdout', () => {
    const { errors } = parseBuildOutput('', 'Error: from stderr');
    expect(errors.length).toBe(1);
    expect(errors[0]!.message).toContain('from stderr');
  });

  it('works correctly with decoded UTF-16LE output', () => {
    // Simulate the full pipeline: UTF-16LE -> binary -> decode -> parse
    const original = 'Warning: W0001 test warning\r\nError: E0001 test error at file.sru(5)';
    const utf16le = Buffer.from(original, 'utf16le');
    const binaryStr = utf16le.toString('binary');
    const decoded = decodeOutput(binaryStr);
    const { errors, warnings } = parseBuildOutput(decoded, '');
    expect(errors.length).toBe(1);
    expect(errors[0]!.message).toContain('E0001');
    expect(errors[0]!.file).toBe('file.sru');
    expect(errors[0]!.line).toBe(5);
    expect(warnings.length).toBe(1);
    expect(warnings[0]!.message).toContain('W0001');
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
