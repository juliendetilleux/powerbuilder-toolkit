import { describe, it, expect } from 'vitest';
import {
  getObjectTypeFromExtension,
  resolveLibraryFromPath,
  PB_FILE_EXTENSIONS,
  PB_GLOB_PATTERNS,
} from '../project.js';

describe('getObjectTypeFromExtension', () => {
  it('maps .srw to window', () => {
    expect(getObjectTypeFromExtension('.srw')).toBe('window');
  });

  it('maps .srd to datawindow', () => {
    expect(getObjectTypeFromExtension('.srd')).toBe('datawindow');
  });

  it('maps .sru to userobject', () => {
    expect(getObjectTypeFromExtension('.sru')).toBe('userobject');
  });

  it('maps .srm to menu', () => {
    expect(getObjectTypeFromExtension('.srm')).toBe('menu');
  });

  it('maps .srf to function', () => {
    expect(getObjectTypeFromExtension('.srf')).toBe('function');
  });

  it('maps .srs to structure', () => {
    expect(getObjectTypeFromExtension('.srs')).toBe('structure');
  });

  it('maps .sra to application', () => {
    expect(getObjectTypeFromExtension('.sra')).toBe('application');
  });

  it('maps .srj to project', () => {
    expect(getObjectTypeFromExtension('.srj')).toBe('project');
  });

  it('maps .srp to pipeline', () => {
    expect(getObjectTypeFromExtension('.srp')).toBe('pipeline');
  });

  it('maps .srq to query', () => {
    expect(getObjectTypeFromExtension('.srq')).toBe('query');
  });

  it('returns unknown for unrecognised extension', () => {
    expect(getObjectTypeFromExtension('.txt')).toBe('unknown');
  });

  it('returns unknown for empty string', () => {
    expect(getObjectTypeFromExtension('')).toBe('unknown');
  });

  it('is case-insensitive', () => {
    expect(getObjectTypeFromExtension('.SRW')).toBe('window');
    expect(getObjectTypeFromExtension('.SRD')).toBe('datawindow');
    expect(getObjectTypeFromExtension('.SRU')).toBe('userobject');
  });
});

describe('resolveLibraryFromPath', () => {
  it('extracts library name from standard PB path structure', () => {
    expect(resolveLibraryFromPath('_ancestor/_ancestor.pbl/w_main.srw')).toBe('_ancestor');
  });

  it('handles _sales library', () => {
    expect(resolveLibraryFromPath('_sales/_sales.pbl/w_invoice.srw')).toBe('_sales');
  });

  it('handles _prints_std library', () => {
    expect(resolveLibraryFromPath('_prints_std/_prints_std.pbl/d_invoice.srd')).toBe('_prints_std');
  });

  it('returns empty string when path has no directory segments', () => {
    expect(resolveLibraryFromPath('w_orphan.srw')).toBe('');
  });

  it('returns empty string for empty path', () => {
    expect(resolveLibraryFromPath('')).toBe('');
  });

  it('handles backslash separators', () => {
    expect(resolveLibraryFromPath('_ancestor\\_ancestor.pbl\\w_main.srw')).toBe('_ancestor');
  });

  it('handles paths with only two segments (no .pbl middle)', () => {
    expect(resolveLibraryFromPath('_masters/w_master.srw')).toBe('_masters');
  });

  it('handles _stkbarcod library', () => {
    expect(resolveLibraryFromPath('_stkbarcod/_stkbarcod.pbl/nvo_barcode.sru')).toBe('_stkbarcod');
  });
});

describe('PB_FILE_EXTENSIONS', () => {
  it('contains all ten PB extensions', () => {
    expect(PB_FILE_EXTENSIONS).toHaveLength(10);
    expect(PB_FILE_EXTENSIONS).toContain('.srw');
    expect(PB_FILE_EXTENSIONS).toContain('.srd');
    expect(PB_FILE_EXTENSIONS).toContain('.sru');
    expect(PB_FILE_EXTENSIONS).toContain('.srm');
    expect(PB_FILE_EXTENSIONS).toContain('.srf');
    expect(PB_FILE_EXTENSIONS).toContain('.srs');
    expect(PB_FILE_EXTENSIONS).toContain('.sra');
    expect(PB_FILE_EXTENSIONS).toContain('.srj');
    expect(PB_FILE_EXTENSIONS).toContain('.srp');
    expect(PB_FILE_EXTENSIONS).toContain('.srq');
  });
});

describe('PB_GLOB_PATTERNS', () => {
  it('contains glob patterns for all ten extensions', () => {
    expect(PB_GLOB_PATTERNS).toHaveLength(10);
    expect(PB_GLOB_PATTERNS).toContain('**/*.srw');
    expect(PB_GLOB_PATTERNS).toContain('**/*.srd');
    expect(PB_GLOB_PATTERNS).toContain('**/*.sru');
  });
});
