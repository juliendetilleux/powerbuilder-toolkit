import { describe, it, expect } from 'vitest';
import {
  parseParams,
  parseFunctions,
  parseEvents,
  parseInstanceVariables,
  parseAncestor,
  parseMenuItems,
} from '../powerscript.js';

// ---------------------------------------------------------------------------
// parseParams
// ---------------------------------------------------------------------------
describe('parseParams', () => {
  it('returns empty array for empty string', () => {
    expect(parseParams('')).toEqual([]);
  });

  it('returns empty array for whitespace-only string', () => {
    expect(parseParams('   ')).toEqual([]);
  });

  it('parses a single value parameter', () => {
    expect(parseParams('string as_name')).toEqual([
      { name: 'as_name', type: 'string', passBy: 'value' },
    ]);
  });

  it('parses multiple value parameters', () => {
    const result = parseParams('string as_name, integer ai_age, boolean ab_active');
    expect(result).toHaveLength(3);
    expect(result[0]).toEqual({ name: 'as_name', type: 'string', passBy: 'value' });
    expect(result[1]).toEqual({ name: 'ai_age', type: 'integer', passBy: 'value' });
    expect(result[2]).toEqual({ name: 'ab_active', type: 'boolean', passBy: 'value' });
  });

  it('parses a ref parameter', () => {
    const result = parseParams('ref string as_result');
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({ name: 'as_result', type: 'string', passBy: 'reference' });
  });

  it('parses a readonly parameter', () => {
    const result = parseParams('readonly integer ai_code');
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({ name: 'ai_code', type: 'integer', passBy: 'readonly' });
  });

  it('parses mixed pass-by modifiers', () => {
    const result = parseParams('string as_input, ref string as_output, readonly integer ai_flags');
    expect(result).toHaveLength(3);
    expect(result[0]?.passBy).toBe('value');
    expect(result[1]?.passBy).toBe('reference');
    expect(result[2]?.passBy).toBe('readonly');
  });

  it('parses reference keyword (long form)', () => {
    const result = parseParams('reference string as_val');
    expect(result[0]?.passBy).toBe('reference');
  });

  it('handles extra whitespace between tokens', () => {
    const result = parseParams('  string   as_name  ,  integer   ai_count  ');
    expect(result).toHaveLength(2);
    expect(result[0]?.name).toBe('as_name');
    expect(result[1]?.name).toBe('ai_count');
  });

  it('parses object type parameters', () => {
    const result = parseParams('datastore ads_data, transaction atrans_db');
    expect(result[0]).toEqual({ name: 'ads_data', type: 'datastore', passBy: 'value' });
    expect(result[1]).toEqual({ name: 'atrans_db', type: 'transaction', passBy: 'value' });
  });
});

// ---------------------------------------------------------------------------
// parseFunctions
// ---------------------------------------------------------------------------
describe('parseFunctions', () => {
  it('returns empty array for empty source', () => {
    expect(parseFunctions('')).toEqual([]);
  });

  it('parses a simple public function', () => {
    const source = `
public function string of_get_name ()
  return is_name
end function
`;
    const result = parseFunctions(source);
    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      name: 'of_get_name',
      returnType: 'string',
      access: 'public',
      params: [],
      isEvent: false,
    });
    expect(result[0]?.lineStart).toBeGreaterThan(0);
    expect(result[0]?.lineEnd).toBeGreaterThan(result[0]?.lineStart ?? 0);
  });

  it('parses a private function with parameters', () => {
    const source = `
private function integer of_calc_total (integer ai_qty, decimal ad_price)
  return ai_qty * ad_price
end function
`;
    const result = parseFunctions(source);
    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      name: 'of_calc_total',
      returnType: 'integer',
      access: 'private',
    });
    expect(result[0]?.params).toHaveLength(2);
    expect(result[0]?.params[0]).toEqual({ name: 'ai_qty', type: 'integer', passBy: 'value' });
    expect(result[0]?.params[1]).toEqual({ name: 'ad_price', type: 'decimal', passBy: 'value' });
  });

  it('parses a protected subroutine (void return type)', () => {
    const source = `
protected subroutine of_reset ()
  is_name = ""
end subroutine
`;
    const result = parseFunctions(source);
    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      name: 'of_reset',
      returnType: 'void',
      access: 'protected',
      params: [],
    });
  });

  it('parses a function with no access modifier (defaults to public)', () => {
    const source = `
function boolean of_validate (string as_val)
  return len(as_val) > 0
end function
`;
    const result = parseFunctions(source);
    expect(result).toHaveLength(1);
    expect(result[0]?.access).toBe('public');
  });

  it('parses multiple functions', () => {
    const source = `
public function string of_get_name ()
  return is_name
end function

public function integer of_get_age ()
  return ii_age
end function

private subroutine of_clear ()
  is_name = ""
end subroutine
`;
    const result = parseFunctions(source);
    expect(result).toHaveLength(3);
    expect(result[0]?.name).toBe('of_get_name');
    expect(result[1]?.name).toBe('of_get_age');
    expect(result[2]?.name).toBe('of_clear');
  });

  it('parses function with ref parameter', () => {
    const source = `
public function boolean of_load (ref string as_data)
  as_data = is_buffer
  return true
end function
`;
    const result = parseFunctions(source);
    expect(result[0]?.params[0]).toEqual({
      name: 'as_data',
      type: 'string',
      passBy: 'reference',
    });
  });

  it('tracks correct line numbers', () => {
    const source = `line1
line2
public function string of_test ()
  return ""
end function
line6`;
    const result = parseFunctions(source);
    expect(result[0]?.lineStart).toBe(3);
    expect(result[0]?.lineEnd).toBe(5);
  });

  it('parses function returning boolean with complex body', () => {
    const source = `
public function boolean of_open_sheet (string as_sheet_name, integer ai_position, boolean ab_arrange)
  w_frame lw_frame
  lw_frame = this.parentwindow
  if isnull(lw_frame) then return false
  open(w_main, lw_frame)
  return true
end function
`;
    const result = parseFunctions(source);
    expect(result).toHaveLength(1);
    expect(result[0]?.params).toHaveLength(3);
    expect(result[0]?.returnType).toBe('boolean');
  });

  it('sets isEvent to false for functions', () => {
    const source = `public function string of_test ()
  return ""
end function`;
    const result = parseFunctions(source);
    expect(result[0]?.isEvent).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// parseEvents
// ---------------------------------------------------------------------------
describe('parseEvents', () => {
  it('returns empty array for empty source', () => {
    expect(parseEvents('')).toEqual([]);
  });

  it('parses a stub event (semicolon form)', () => {
    const source = `event ue_custom;`;
    const result = parseEvents(source);
    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      name: 'ue_custom',
      hasScript: false,
      params: [],
    });
  });

  it('parses a typed event declaration', () => {
    const source = `
event type integer ue_calculate (integer ai_x, integer ai_y)
  return ai_x + ai_y
end event
`;
    const result = parseEvents(source);
    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      name: 'ue_calculate',
      hasScript: true,
    });
    expect(result[0]?.params).toHaveLength(2);
    expect(result[0]?.params[0]).toEqual({ name: 'ai_x', type: 'integer', passBy: 'value' });
  });

  it('parses a plain event with parameters', () => {
    const source = `
event ue_validate(string as_value, ref boolean ab_valid)
  ab_valid = len(as_value) > 0
end event
`;
    const result = parseEvents(source);
    expect(result).toHaveLength(1);
    expect(result[0]?.name).toBe('ue_validate');
    expect(result[0]?.params).toHaveLength(2);
    expect(result[0]?.params[1]?.passBy).toBe('reference');
  });

  it('detects hasScript = true when event body has code', () => {
    const source = `
event clicked()
  MessageBox("Hello", "World")
end event
`;
    const result = parseEvents(source);
    expect(result[0]?.hasScript).toBe(true);
  });

  it('detects hasScript = false when event body is empty', () => {
    const source = `
event clicked()
end event
`;
    const result = parseEvents(source);
    expect(result[0]?.hasScript).toBe(false);
  });

  it('parses multiple events including stub and body events', () => {
    const source = `
event ue_init;
event ue_destroy;

event constructor()
  this.of_init()
end event

event destructor()
  this.of_destroy()
end event
`;
    const result = parseEvents(source);
    expect(result).toHaveLength(4);
    expect(result[0]?.name).toBe('ue_init');
    expect(result[0]?.hasScript).toBe(false);
    expect(result[1]?.name).toBe('ue_destroy');
    expect(result[2]?.name).toBe('constructor');
    expect(result[2]?.hasScript).toBe(true);
    expect(result[3]?.name).toBe('destructor');
  });

  it('tracks correct line numbers for events', () => {
    const source = `line1
line2
event clicked()
  do_something()
end event`;
    const result = parseEvents(source);
    expect(result[0]?.lineStart).toBe(3);
    expect(result[0]?.lineEnd).toBe(5);
  });

  it('parses standard PB events like clicked, doubleclicked', () => {
    const source = `
event clicked()
end event

event doubleclicked()
  of_handle_double()
end event
`;
    const result = parseEvents(source);
    expect(result).toHaveLength(2);
    expect(result[0]?.name).toBe('clicked');
    expect(result[1]?.name).toBe('doubleclicked');
  });
});

// ---------------------------------------------------------------------------
// parseInstanceVariables
// ---------------------------------------------------------------------------
describe('parseInstanceVariables', () => {
  it('returns empty array for source with no type variables section', () => {
    expect(parseInstanceVariables('')).toEqual([]);
    expect(parseInstanceVariables('public function string of_test()\nend function')).toEqual([]);
  });

  it('parses public instance variables', () => {
    const source = `
type variables
public string is_name
public integer ii_count
end variables
`;
    const result = parseInstanceVariables(source);
    expect(result).toHaveLength(2);
    expect(result[0]).toMatchObject({ name: 'is_name', type: 'string', access: 'public' });
    expect(result[1]).toMatchObject({ name: 'ii_count', type: 'integer', access: 'public' });
  });

  it('parses private instance variables', () => {
    const source = `
type variables
private string is_internal
private boolean ib_ready
end variables
`;
    const result = parseInstanceVariables(source);
    expect(result).toHaveLength(2);
    expect(result[0]?.access).toBe('private');
    expect(result[1]?.access).toBe('private');
  });

  it('parses protected instance variables', () => {
    const source = `
type variables
protected datastore ids_data
end variables
`;
    const result = parseInstanceVariables(source);
    expect(result).toHaveLength(1);
    expect(result[0]?.access).toBe('protected');
  });

  it('parses variables with default values', () => {
    const source = `
type variables
public string is_mode = "edit"
public integer ii_max = 100
public boolean ib_active = true
end variables
`;
    const result = parseInstanceVariables(source);
    expect(result).toHaveLength(3);
    expect(result[0]?.defaultValue).toBe('"edit"');
    expect(result[1]?.defaultValue).toBe('100');
    expect(result[2]?.defaultValue).toBe('true');
  });

  it('parses mixed access modifiers', () => {
    const source = `
type variables
public string is_title
private integer ii_ref_count
protected boolean ib_initialised
end variables
`;
    const result = parseInstanceVariables(source);
    expect(result).toHaveLength(3);
    expect(result[0]?.access).toBe('public');
    expect(result[1]?.access).toBe('private');
    expect(result[2]?.access).toBe('protected');
  });

  it('defaults to public when no access modifier is present', () => {
    const source = `
type variables
string is_name
end variables
`;
    const result = parseInstanceVariables(source);
    expect(result).toHaveLength(1);
    expect(result[0]?.access).toBe('public');
  });

  it('skips blank lines and comment lines inside variables block', () => {
    const source = `
type variables
// This is a comment
public string is_name

public integer ii_count
end variables
`;
    const result = parseInstanceVariables(source);
    expect(result).toHaveLength(2);
  });

  it('tracks correct line numbers', () => {
    const source = `line1
type variables
public string is_name
end variables`;
    const result = parseInstanceVariables(source);
    expect(result[0]?.lineNumber).toBe(3);
  });

  it('handles object-type variables', () => {
    const source = `
type variables
public datastore ids_main
private transaction itrans_db
protected w_sheet iw_current
end variables
`;
    const result = parseInstanceVariables(source);
    expect(result).toHaveLength(3);
    expect(result[0]).toMatchObject({ name: 'ids_main', type: 'datastore' });
    expect(result[1]).toMatchObject({ name: 'itrans_db', type: 'transaction' });
    expect(result[2]).toMatchObject({ name: 'iw_current', type: 'w_sheet' });
  });
});

// ---------------------------------------------------------------------------
// parseAncestor
// ---------------------------------------------------------------------------
describe('parseAncestor', () => {
  it('returns null for source with no ancestor declaration', () => {
    expect(parseAncestor('')).toBeNull();
    expect(parseAncestor('public function string of_test()\nend function')).toBeNull();
  });

  it('parses a basic ancestor declaration', () => {
    const source = `
forward
global type w_main from w_master
end type
end forward
`;
    const result = parseAncestor(source);
    expect(result).not.toBeNull();
    expect(result?.name).toBe('w_main');
    expect(result?.ancestor).toBe('w_master');
    expect(result?.ancestorLibrary).toBeUndefined();
  });

  it('parses ancestor with within clause', () => {
    const source = `
forward
global type w_invoice from w_base within _ancestor
end type
end forward
`;
    const result = parseAncestor(source);
    expect(result?.name).toBe('w_invoice');
    expect(result?.ancestor).toBe('w_base');
    expect(result?.ancestorLibrary).toBe('_ancestor');
  });

  it('parses non-visual object ancestor', () => {
    const source = `
global type nvo_service from nonvisualobject
end type
`;
    const result = parseAncestor(source);
    expect(result?.name).toBe('nvo_service');
    expect(result?.ancestor).toBe('nonvisualobject');
  });

  it('parses userobject ancestor', () => {
    const source = `
forward
global type uo_grid from uo_base_grid within _ancestor
end type
end forward
`;
    const result = parseAncestor(source);
    expect(result?.name).toBe('uo_grid');
    expect(result?.ancestor).toBe('uo_base_grid');
    expect(result?.ancestorLibrary).toBe('_ancestor');
  });

  it('handles window inheriting from w_sheet', () => {
    const source = `
forward
global type w_report from w_sheet within _ancestor
end type
end forward
`;
    const result = parseAncestor(source);
    expect(result?.name).toBe('w_report');
    expect(result?.ancestor).toBe('w_sheet');
    expect(result?.ancestorLibrary).toBe('_ancestor');
  });

  it('returns first match when multiple global type lines exist', () => {
    const source = `
global type w_main from w_base
global type w_child from w_main
`;
    const result = parseAncestor(source);
    expect(result?.name).toBe('w_main');
    expect(result?.ancestor).toBe('w_base');
  });
});

// ---------------------------------------------------------------------------
// parseFunctions — global functions (.srf)
// ---------------------------------------------------------------------------
describe('parseFunctions — global functions (.srf)', () => {
  it('parses global function declaration', () => {
    const source = [
      '$PBExportHeader$gf_round.srf',
      'global type gf_round from function_object',
      'end type',
      '',
      'forward prototypes',
      'global function string gf_round (string as_input)',
      'end prototypes',
      '',
      'global function string gf_round (string as_input);',
      'decimal ld_result',
      'ld_result = round(dec(as_input), 2)',
      'return string(ld_result)',
      'end function',
    ].join('\n');

    const functions = parseFunctions(source);
    expect(functions.length).toBeGreaterThanOrEqual(1);

    const fn = functions.find((f) => f.name === 'gf_round');
    expect(fn).toBeDefined();
    expect(fn!.returnType).toBe('string');
    expect(fn!.params.length).toBe(1);
    expect(fn!.params[0]!.name).toBe('as_input');
  });

  it('parses global subroutine declaration', () => {
    const source = [
      'forward prototypes',
      'global subroutine gf_log (string as_msg)',
      'end prototypes',
      '',
      'global subroutine gf_log (string as_msg);',
      '// log it',
      'end subroutine',
    ].join('\n');

    const functions = parseFunctions(source);
    const fn = functions.find((f) => f.name === 'gf_log');
    expect(fn).toBeDefined();
    expect(fn!.returnType).toBe('void');
  });
});

// ---------------------------------------------------------------------------
// parseMenuItems — .srm menu parsing
// ---------------------------------------------------------------------------
describe('parseMenuItems — .srm menu parsing', () => {
  it('extracts menu items from forward block', () => {
    const source = [
      '$PBExportHeader$m_main.srm',
      'forward',
      'global type m_main from menu',
      'end type',
      'type m_file from menu within m_main',
      'end type',
      'type m_edit from menu within m_main',
      'end type',
      'type m_help from menu within m_main',
      'end type',
      'end forward',
    ].join('\n');

    const items = parseMenuItems(source);
    expect(items.length).toBe(3);
    expect(items[0]!.name).toBe('m_file');
    expect(items[0]!.parent).toBe('m_main');
    expect(items[1]!.name).toBe('m_edit');
    expect(items[2]!.name).toBe('m_help');
  });

  it('handles nested menu items', () => {
    const source = [
      'forward',
      'global type m_main from menu',
      'end type',
      'type m_file from menu within m_main',
      'end type',
      'type m_file_new from menu within m_file',
      'end type',
      'type m_file_open from menu within m_file',
      'end type',
      'end forward',
    ].join('\n');

    const items = parseMenuItems(source);
    expect(items.length).toBe(3);
    // m_file_new and m_file_open have parent m_file.
    const subItems = items.filter((i) => i.parent === 'm_file');
    expect(subItems.length).toBe(2);
  });

  it('returns empty for non-menu files', () => {
    const source = [
      'forward',
      'global type w_main from window',
      'end type',
      'end forward',
    ].join('\n');

    const items = parseMenuItems(source);
    expect(items.length).toBe(0);
  });
});
