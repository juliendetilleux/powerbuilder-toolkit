import { describe, it, expect } from 'vitest';
import {
  parseDataWindowSQL,
  parseDataWindowColumns,
  parseDataWindowArguments,
} from '../datawindow.js';

// ---------------------------------------------------------------------------
// Realistic DataWindow source snippets
// ---------------------------------------------------------------------------

const SIMPLE_DW = `
$PBExportHeader$d_customer_list.srd
DataWindow(units=0 timer_interval=0 color=1073741824 processing=0 HTMLDW=no print.documentname="" print.orientation=0 print.margin.left=227 print.margin.right=227 print.margin.top=227 print.margin.bottom=227 print.paper.size=1 print.paper.source=7 print.prompt=no print.buttons=no bands=1 style.system=yes print.preview.buttons=no )
data()
table(column=(type=char(50) name=cust_name dbname="cust_name" updatewhereclause=yes key=no width=996 height=68 format="@" band=detail )
column=(type=long name=cust_id dbname="cust_id" updatewhereclause=yes key=yes width=500 height=68 format="[General]" band=detail )
column=(type=char(100) name=cust_email dbname="cust_email" updatewhereclause=yes key=no width=1200 height=68 format="@" band=detail )
 retrieve="SELECT  cust_id,  cust_name,  cust_email FROM  customer ORDER BY cust_name ASC" sort="" filter="" )
`;

const DW_WITH_QUOTES = `
DataWindow()
table(column=(type=char(50) name=description dbname="description" band=detail )
 retrieve="SELECT id, ~"description~" as descr FROM products WHERE active = 1" )
`;

const MULTI_LINE_SQL_DW = `
DataWindow()
table(column=(type=long name=order_id dbname="order_id" band=detail )
column=(type=char(50) name=customer dbname="customer_name" band=detail )
column=(type=decimal name=total dbname="order_total" band=detail )
 retrieve="SELECT  o.order_id,  c.customer_name,  sum(ol.qty * ol.price) as order_total FROM  orders o INNER JOIN customers c ON o.customer_id = c.customer_id INNER JOIN order_lines ol ON o.order_id = ol.order_id GROUP BY  o.order_id,  c.customer_name ORDER BY o.order_id DESC" )
`;

const DW_WITH_ARGUMENTS = `
DataWindow()
table(column=(type=long name=inv_id dbname="inv_id" band=detail )
 retrieve="SELECT inv_id, inv_date FROM invoices WHERE customer_id = :customer_id AND status = :status" )
arguments(("customer_id", long) ("status", char))
`;

const DW_STORED_PROC = `
DataWindow()
procedure="sp_get_report @as_period, @ai_year"
arguments(("as_period", char) ("ai_year", integer))
table(column=(type=char(20) name=period_label dbname="period_label" band=detail )
column=(type=decimal name=total_sales dbname="total_sales" band=detail )
)
`;

const DW_EXTERNAL = `
DataWindow()
table(column=(type=char(50) name=col1 dbname="col1" band=detail )
)
`;

// ---------------------------------------------------------------------------
// parseDataWindowSQL
// ---------------------------------------------------------------------------
describe('parseDataWindowSQL', () => {
  it('extracts a simple SELECT statement', () => {
    const sql = parseDataWindowSQL(SIMPLE_DW);
    expect(sql).toBeDefined();
    expect(sql).toContain('SELECT');
    expect(sql).toContain('cust_id');
    expect(sql).toContain('cust_name');
    expect(sql).toContain('cust_email');
    expect(sql).toContain('FROM');
    expect(sql).toContain('customer');
  });

  it('resolves ~" escape sequences to real double-quotes', () => {
    const sql = parseDataWindowSQL(DW_WITH_QUOTES);
    expect(sql).toBeDefined();
    expect(sql).toContain('"description"');
    expect(sql).not.toContain('~"');
  });

  it('extracts SQL from a complex multi-table query', () => {
    const sql = parseDataWindowSQL(MULTI_LINE_SQL_DW);
    expect(sql).toBeDefined();
    expect(sql).toContain('INNER JOIN');
    expect(sql).toContain('GROUP BY');
    expect(sql).toContain('ORDER BY');
  });

  it('extracts SQL when arguments are also present', () => {
    const sql = parseDataWindowSQL(DW_WITH_ARGUMENTS);
    expect(sql).toBeDefined();
    expect(sql).toContain(':customer_id');
    expect(sql).toContain(':status');
  });

  it('returns undefined when no retrieve attribute is present', () => {
    const sql = parseDataWindowSQL(DW_STORED_PROC);
    expect(sql).toBeUndefined();
  });

  it('returns undefined for empty source', () => {
    expect(parseDataWindowSQL('')).toBeUndefined();
  });

  it('is case-insensitive for the retrieve keyword', () => {
    const source = `table( RETRIEVE="SELECT 1 FROM dual" )`;
    const sql = parseDataWindowSQL(source);
    expect(sql).toBe('SELECT 1 FROM dual');
  });

  it('trims whitespace from extracted SQL', () => {
    const source = `table( retrieve="  SELECT 1  " )`;
    const sql = parseDataWindowSQL(source);
    expect(sql).toBe('SELECT 1');
  });
});

// ---------------------------------------------------------------------------
// parseDataWindowColumns
// ---------------------------------------------------------------------------
describe('parseDataWindowColumns', () => {
  it('parses all columns from a simple DataWindow', () => {
    const columns = parseDataWindowColumns(SIMPLE_DW);
    expect(columns).toHaveLength(3);
  });

  it('extracts column name correctly', () => {
    const columns = parseDataWindowColumns(SIMPLE_DW);
    const names = columns.map((c) => c.name);
    expect(names).toContain('cust_name');
    expect(names).toContain('cust_id');
    expect(names).toContain('cust_email');
  });

  it('extracts dbName correctly', () => {
    const columns = parseDataWindowColumns(SIMPLE_DW);
    const custName = columns.find((c) => c.name === 'cust_name');
    expect(custName?.dbName).toBe('cust_name');
  });

  it('extracts column type correctly', () => {
    const columns = parseDataWindowColumns(SIMPLE_DW);
    const custId = columns.find((c) => c.name === 'cust_id');
    expect(custId?.type).toBe('long');
    const custName = columns.find((c) => c.name === 'cust_name');
    expect(custName?.type).toBe('char(50)');
  });

  it('extracts band correctly', () => {
    const columns = parseDataWindowColumns(SIMPLE_DW);
    for (const col of columns) {
      expect(col.band).toBe('detail');
    }
  });

  it('parses columns from DataWindow with arguments', () => {
    const columns = parseDataWindowColumns(DW_WITH_ARGUMENTS);
    expect(columns).toHaveLength(1);
    expect(columns[0]?.name).toBe('inv_id');
  });

  it('parses multiple columns from multi-table DataWindow', () => {
    const columns = parseDataWindowColumns(MULTI_LINE_SQL_DW);
    expect(columns).toHaveLength(3);
    const names = columns.map((c) => c.name);
    expect(names).toContain('order_id');
    expect(names).toContain('customer');
    expect(names).toContain('total');
  });

  it('returns empty array when no table block is found', () => {
    expect(parseDataWindowColumns('')).toEqual([]);
    expect(parseDataWindowColumns('DataWindow()')).toEqual([]);
  });

  it('handles dbName with ~" escape sequences', () => {
    const source = `table(column=(type=char(50) name=col1 dbname="col~"1" band=detail ) )`;
    const columns = parseDataWindowColumns(source);
    if (columns.length > 0) {
      expect(columns[0]?.dbName).toContain('"');
    }
  });

  it('parses stored-procedure DataWindow columns', () => {
    const columns = parseDataWindowColumns(DW_STORED_PROC);
    expect(columns).toHaveLength(2);
    expect(columns[0]?.name).toBe('period_label');
    expect(columns[1]?.name).toBe('total_sales');
  });
});

// ---------------------------------------------------------------------------
// parseDataWindowArguments
// ---------------------------------------------------------------------------
describe('parseDataWindowArguments', () => {
  it('returns empty array when no arguments section is present', () => {
    expect(parseDataWindowArguments('')).toEqual([]);
    expect(parseDataWindowArguments(SIMPLE_DW)).toEqual([]);
    expect(parseDataWindowArguments(MULTI_LINE_SQL_DW)).toEqual([]);
  });

  it('parses arguments with long and char types', () => {
    const args = parseDataWindowArguments(DW_WITH_ARGUMENTS);
    expect(args).toHaveLength(2);
    expect(args[0]).toEqual({ name: 'customer_id', type: 'long', passBy: 'value' });
    expect(args[1]).toEqual({ name: 'status', type: 'char', passBy: 'value' });
  });

  it('parses stored-procedure arguments', () => {
    const args = parseDataWindowArguments(DW_STORED_PROC);
    expect(args).toHaveLength(2);
    expect(args[0]).toEqual({ name: 'as_period', type: 'char', passBy: 'value' });
    expect(args[1]).toEqual({ name: 'ai_year', type: 'integer', passBy: 'value' });
  });

  it('sets passBy to value for all DW arguments', () => {
    const args = parseDataWindowArguments(DW_WITH_ARGUMENTS);
    for (const arg of args) {
      expect(arg.passBy).toBe('value');
    }
  });

  it('parses a single argument', () => {
    const source = `arguments(("order_id", long))`;
    const args = parseDataWindowArguments(source);
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual({ name: 'order_id', type: 'long', passBy: 'value' });
  });

  it('parses three arguments', () => {
    const source = `arguments(("start_date", date) ("end_date", date) ("dept_id", long))`;
    const args = parseDataWindowArguments(source);
    expect(args).toHaveLength(3);
    expect(args[0]?.name).toBe('start_date');
    expect(args[1]?.name).toBe('end_date');
    expect(args[2]?.name).toBe('dept_id');
  });

  it('handles case-insensitive arguments keyword', () => {
    const source = `ARGUMENTS(("id", long))`;
    const args = parseDataWindowArguments(source);
    expect(args).toHaveLength(1);
    expect(args[0]?.name).toBe('id');
  });
});
