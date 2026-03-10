/**
 * rag.test.ts — Unit tests for RagDB, RagIndexer, and FTS5 query building.
 *
 * All RagDB tests use ':memory:' so there is no filesystem I/O.
 * RagIndexer chunking / metadata tests pass synthetic strings directly, so
 * they also need no real filesystem access.
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { RagDB } from '../src/rag-db.js';
import { RagIndexer } from '../src/rag-indexer.js';
import type { RagChunk } from '../src/rag-db.js';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Build a minimal RagChunk with sensible defaults. */
function makeChunk(overrides: Partial<RagChunk> = {}): RagChunk {
  return {
    source: 'standard',
    path: 'test/chunk.md',
    content: 'Some content about linkitad table.',
    mtime: 1_700_000_000,
    ...overrides,
  };
}

/** Create an indexer that won't touch the real filesystem for pure unit tests. */
function makeIndexer(db: RagDB): RagIndexer {
  // Pass a dummy path — the constructor only resolves it, it does not stat it.
  return new RagIndexer(db, '/nonexistent/docs', undefined);
}

// ===========================================================================
// 1. RagDB — Basic operations
// ===========================================================================

describe('RagDB — basic operations', () => {
  let db: RagDB;

  beforeEach(() => {
    db = new RagDB(':memory:');
  });

  afterEach(() => {
    db.close();
  });

  it('insertChunk returns a positive id', () => {
    const id = db.insertChunk(makeChunk());
    expect(typeof id).toBe('number');
    expect(id).toBeGreaterThan(0);
  });

  it('insertChunk stores correct data (verify via searchFTS)', () => {
    db.insertChunk(
      makeChunk({
        path: 'database/tables/linkitad.md',
        obj_type: 'table',
        obj_name: 'linkitad',
        content: 'linkitad stores article-supplier links.',
      }),
    );

    const results = db.searchFTS('linkitad', 5);
    expect(results.length).toBeGreaterThanOrEqual(1);
    expect(results[0]!.obj_name).toBe('linkitad');
    expect(results[0]!.content).toContain('linkitad');
  });

  it('deleteByPath removes all chunks for a path', () => {
    const path = 'objects/windows/w_order.md';
    db.insertChunk(makeChunk({ path, content: 'Order window alpha.' }));
    db.insertChunk(makeChunk({ path, content: 'Order window beta.' }));

    db.deleteByPath(path);

    // Neither chunk should appear in search.
    const results = db.searchFTS('Order window', 10);
    expect(results.filter((r) => r.path === path)).toHaveLength(0);
  });

  it('getMtime returns null for unknown path', () => {
    expect(db.getMtime('no/such/file.md')).toBeNull();
  });

  it('getMtime returns correct mtime after insert', () => {
    const mtime = 1_710_000_123.456;
    db.insertChunk(makeChunk({ path: 'knowledge/01-core.md', mtime }));
    const stored = db.getMtime('knowledge/01-core.md');
    expect(stored).toBeCloseTo(mtime, 2);
  });

  it('getStats returns correct counts — standard', () => {
    db.insertChunk(makeChunk({ source: 'standard', obj_type: 'table' }));
    db.insertChunk(makeChunk({ source: 'standard', obj_type: 'window' }));

    const stats = db.getStats();
    expect(stats.standard_chunks).toBe(2);
    expect(stats.total_chunks).toBe(2);
    expect(stats.custom_chunks).toBe(0);
    expect(stats.learned_chunks).toBe(0);
  });

  it('getStats returns correct counts — custom vs learned', () => {
    db.insertChunk(makeChunk({ source: 'custom', obj_type: 'code' }));
    db.insertLearned('best practice', 'Always check SQLCA.SQLCode after queries.', ['sqlca', 'database']);

    const stats = db.getStats();
    // custom_chunks excludes learned (obj_type = 'learned')
    expect(stats.custom_chunks).toBe(1);
    expect(stats.learned_chunks).toBe(1);
    expect(stats.total_chunks).toBe(2);
  });

  it('insertLearned creates a chunk with obj_type = "learned"', () => {
    const id = db.insertLearned(
      'resize pattern',
      'Call n_cst_resize inside w_window.open.',
      ['resize', 'ancestor'],
    );
    expect(id).toBeGreaterThan(0);

    const stats = db.getStats();
    expect(stats.learned_chunks).toBe(1);
  });

  it('insertFeedback stores feedback', () => {
    const chunkId = db.insertChunk(makeChunk());
    db.insertFeedback('linkitad query', chunkId);

    const stats = db.getStats();
    expect(stats.total_feedback).toBe(1);
  });

  it('insertSynonym stores synonym', () => {
    db.insertSynonym('reception', 'réception');

    const stats = db.getStats();
    expect(stats.total_synonyms).toBe(1);
  });

  it('insertCorrection stores correction log', () => {
    db.insertCorrection(
      'database/tables/cmd.md',
      'old description',
      'corrected description',
      'typo in column name',
    );

    const stats = db.getStats();
    expect(stats.total_corrections).toBe(1);
  });

  it('runInTransaction commits on success', () => {
    db.runInTransaction(() => {
      db.insertChunk(makeChunk({ path: 'tx/success.md' }));
      db.insertChunk(makeChunk({ path: 'tx/success.md', content: 'Second.' }));
    });

    const results = db.searchFTS('content', 10);
    // Both chunks committed.
    expect(db.getStats().total_chunks).toBe(2);
  });

  it('runInTransaction rolls back on error', () => {
    expect(() => {
      db.runInTransaction(() => {
        db.insertChunk(makeChunk({ path: 'tx/fail.md' }));
        throw new Error('forced rollback');
      });
    }).toThrow('forced rollback');

    // No chunk should remain.
    expect(db.getStats().total_chunks).toBe(0);
  });
});

// ===========================================================================
// 2. RagDB — FTS5 search
// ===========================================================================

describe('RagDB — FTS5 search', () => {
  let db: RagDB;

  beforeEach(() => {
    db = new RagDB(':memory:');

    // Seed with several distinct chunks.
    db.insertChunk(
      makeChunk({
        path: 'database/tables/linkitad.md',
        obj_name: 'linkitad',
        content: 'linkitad stores article-supplier links and pricing.',
      }),
    );
    db.insertChunk(
      makeChunk({
        path: 'objects/windows/w_order_detail.md',
        obj_name: 'w_order_detail',
        content: 'Sales order detail window with line items.',
      }),
    );
    db.insertChunk(
      makeChunk({
        path: 'objects/datawindows/d_customer_list.md',
        obj_name: 'd_customer_list',
        content: 'List of customers with address and contact.',
      }),
    );
    db.insertChunk(
      makeChunk({
        path: 'knowledge/05-sales-orders.md',
        obj_type: 'knowledge',
        domain: 'sales-orders',
        content: 'réception des commandes clients et livraison.',
      }),
    );
  });

  afterEach(() => {
    db.close();
  });

  it('searchFTS with empty query returns empty array', () => {
    expect(db.searchFTS('')).toHaveLength(0);
    expect(db.searchFTS('   ')).toHaveLength(0);
  });

  it('searchFTS finds chunk by obj_name', () => {
    const results = db.searchFTS('linkitad');
    expect(results.length).toBeGreaterThanOrEqual(1);
    expect(results[0]!.obj_name).toBe('linkitad');
  });

  it('searchFTS finds chunk by content keyword', () => {
    const results = db.searchFTS('customers');
    expect(results.length).toBeGreaterThanOrEqual(1);
    expect(results[0]!.path).toContain('d_customer_list');
  });

  it('searchFTS returns normalised scores between 0 and 1', () => {
    const results = db.searchFTS('linkitad');
    for (const r of results) {
      expect(r.score).toBeGreaterThanOrEqual(0);
      expect(r.score).toBeLessThanOrEqual(1);
    }
  });

  it('searchFTS respects limit parameter', () => {
    // Insert extra chunks so we have more than limit = 2.
    db.insertChunk(makeChunk({ content: 'extra alpha result' }));
    db.insertChunk(makeChunk({ content: 'extra beta result' }));

    const results = db.searchFTS('extra', 2);
    expect(results.length).toBeLessThanOrEqual(2);
  });

  it('searchFTS with French accented text matches via diacritic removal', () => {
    // 'réception' is in chunk content; search for 'reception' (no accent).
    const results = db.searchFTS('reception');
    // FTS5 tokenizer is configured with remove_diacritics=2, so it should match.
    expect(results.length).toBeGreaterThanOrEqual(1);
    expect(results[0]!.content).toContain('réception');
  });
});

// ===========================================================================
// 3. RagDB — Hybrid search
// ===========================================================================

describe('RagDB — hybrid search', () => {
  let db: RagDB;

  beforeEach(() => {
    db = new RagDB(':memory:');

    db.insertChunk(
      makeChunk({
        path: 'a.md',
        obj_name: 'w_purchase_order',
        content: 'Purchase order window for suppliers.',
      }),
    );
    db.insertChunk(
      makeChunk({
        path: 'b.md',
        obj_name: 'w_sales_order',
        content: 'Sales order window for customers.',
      }),
    );
  });

  afterEach(() => {
    db.close();
  });

  it('searchHybrid without embedding falls back to FTS only', () => {
    const results = db.searchHybrid('purchase order', null, 5);
    expect(results.length).toBeGreaterThanOrEqual(1);
    // Score must be normalised [0, 1].
    for (const r of results) {
      expect(r.score).toBeGreaterThanOrEqual(0);
      expect(r.score).toBeLessThanOrEqual(1);
    }
  });

  it('searchHybrid with embedding boosts vector-similar results', () => {
    // Insert a known embedding for the purchase-order chunk.
    const chunkId = db.insertChunk(
      makeChunk({
        path: 'c.md',
        obj_name: 'n_cst_resize',
        content: 'Resize service for w_window descendants.',
      }),
    );

    // Create a synthetic 4-dim embedding and store it.
    const storedVec = new Float32Array([0.1, 0.9, 0.1, 0.1]);
    db.insertEmbedding(chunkId, storedVec);

    // Query embedding that is cosine-similar to storedVec.
    const queryVec = new Float32Array([0.1, 0.85, 0.15, 0.05]);

    const results = db.searchHybrid('resize service', queryVec, 5);
    // The chunk with an embedding should be present and have a boosted score.
    const resizeResult = results.find((r) => r.obj_name === 'n_cst_resize');
    expect(resizeResult).toBeDefined();
    expect(resizeResult!.score).toBeGreaterThan(0);
  });

  it('searchHybrid applies feedback boost', () => {
    const chunkId = db.insertChunk(
      makeChunk({
        path: 'feedback.md',
        obj_name: 'w_supplier_list',
        content: 'Supplier management window.',
      }),
    );

    // Record multiple positive feedback hits for this chunk.
    db.insertFeedback('supplier window', chunkId);
    db.insertFeedback('supplier window', chunkId);
    db.insertFeedback('supplier window', chunkId);

    const results = db.searchHybrid('supplier', null, 10);
    const boosted = results.find((r) => r.obj_name === 'w_supplier_list');
    expect(boosted).toBeDefined();
    // Score should be capped at 1 but always > 0 given FTS + feedback.
    expect(boosted!.score).toBeGreaterThan(0);
    expect(boosted!.score).toBeLessThanOrEqual(1);
  });
});

// ===========================================================================
// 4. RagIndexer — Metadata extraction
// ===========================================================================

describe('RagIndexer — metadata extraction', () => {
  let db: RagDB;
  let indexer: RagIndexer;

  beforeEach(() => {
    db = new RagDB(':memory:');
    indexer = makeIndexer(db);
  });

  afterEach(() => {
    db.close();
  });

  it("'database/tables/linkitad.md' → obj_type='table', obj_name='linkitad'", () => {
    const meta = indexer.extractMetadata('database/tables/linkitad.md');
    expect(meta).toMatchObject({ obj_type: 'table', obj_name: 'linkitad' });
  });

  it("'objects/windows/w_item_update.md' → obj_type='window', obj_name='w_item_update'", () => {
    const meta = indexer.extractMetadata('objects/windows/w_item_update.md');
    expect(meta).toMatchObject({ obj_type: 'window', obj_name: 'w_item_update' });
  });

  it("'objects/datawindows/d_purline_update.md' → obj_type='datawindow'", () => {
    const meta = indexer.extractMetadata('objects/datawindows/d_purline_update.md');
    expect(meta).toMatchObject({ obj_type: 'datawindow', obj_name: 'd_purline_update' });
  });

  it("'objects/userobjects/uo_datawindow.md' → obj_type='userobject'", () => {
    const meta = indexer.extractMetadata('objects/userobjects/uo_datawindow.md');
    expect(meta).toMatchObject({ obj_type: 'userobject', obj_name: 'uo_datawindow' });
  });

  it("'objects/functions/gf_round.md' → obj_type='function'", () => {
    const meta = indexer.extractMetadata('objects/functions/gf_round.md');
    expect(meta).toMatchObject({ obj_type: 'function', obj_name: 'gf_round' });
  });

  it("'database/views/v_stock.md' → obj_type='view'", () => {
    const meta = indexer.extractMetadata('database/views/v_stock.md');
    expect(meta).toMatchObject({ obj_type: 'view', obj_name: 'v_stock' });
  });

  it("'database/procedures/sp_close_order.md' → obj_type='procedure'", () => {
    const meta = indexer.extractMetadata('database/procedures/sp_close_order.md');
    expect(meta).toMatchObject({ obj_type: 'procedure', obj_name: 'sp_close_order' });
  });

  it("'knowledge/04-masters-suppliers.md' → obj_type='knowledge', domain='masters-suppliers'", () => {
    const meta = indexer.extractMetadata('knowledge/04-masters-suppliers.md');
    expect(meta).toMatchObject({ obj_type: 'knowledge', domain: 'masters-suppliers' });
  });

  it("'flux/purchasing.md' → obj_type='flux'", () => {
    const meta = indexer.extractMetadata('flux/purchasing.md');
    expect(meta).toMatchObject({ obj_type: 'flux' });
  });

  it("'modules/_ancestor.md' → obj_type='module'", () => {
    const meta = indexer.extractMetadata('modules/_ancestor.md');
    expect(meta).toMatchObject({ obj_type: 'module' });
  });

  it("'Cust_chasal/somefile.srw' → obj_type='code', obj_name='somefile'", () => {
    const meta = indexer.extractMetadata('Cust_chasal/somefile.srw');
    expect(meta).toMatchObject({ obj_type: 'code', obj_name: 'somefile' });
  });

  it("'_sysxtra/override.sru' → obj_type='code', obj_name='override'", () => {
    const meta = indexer.extractMetadata('_sysxtra/override.sru');
    expect(meta).toMatchObject({ obj_type: 'code', obj_name: 'override' });
  });

  it("'unknown/path.txt' → returns empty object {}", () => {
    const meta = indexer.extractMetadata('unknown/path.txt');
    expect(meta).toEqual({});
  });
});

// ===========================================================================
// 5. RagIndexer — Markdown chunking
// ===========================================================================

describe('RagIndexer — markdown chunking', () => {
  let db: RagDB;
  let indexer: RagIndexer;

  beforeEach(() => {
    db = new RagDB(':memory:');
    indexer = makeIndexer(db);
  });

  afterEach(() => {
    db.close();
  });

  it('file with no headings → single chunk', () => {
    const md = 'This is a flat document with no headings at all.';
    const chunks = indexer.chunkMarkdown(md, 'docs/flat.md');
    expect(chunks).toHaveLength(1);
    expect(chunks[0]!.content).toContain('flat document');
  });

  it('file with ## headings → one chunk per section', () => {
    const md = [
      '# Title',
      '',
      '## Section One',
      'Content of section one.',
      '',
      '## Section Two',
      'Content of section two.',
    ].join('\n');

    const chunks = indexer.chunkMarkdown(md, 'docs/multi.md');
    expect(chunks).toHaveLength(2);
    expect(chunks[0]!.section).toBe('Section One');
    expect(chunks[1]!.section).toBe('Section Two');
  });

  it('file with mixed ## and ### → correct splitting', () => {
    const md = [
      '## Overview',
      'General overview text.',
      '### Sub-section A',
      'Detail for A.',
      '### Sub-section B',
      'Detail for B.',
      '## Another Section',
      'More top-level content.',
    ].join('\n');

    const chunks = indexer.chunkMarkdown(md, 'docs/mixed.md');
    // Should produce 4 chunks: Overview, Sub-section A, Sub-section B, Another Section.
    expect(chunks).toHaveLength(4);
    expect(chunks[0]!.section).toBe('Overview');
    expect(chunks[1]!.section).toBe('Sub-section A');
    expect(chunks[2]!.section).toBe('Sub-section B');
    expect(chunks[3]!.section).toBe('Another Section');
  });

  it('empty file → empty array', () => {
    const chunks = indexer.chunkMarkdown('', 'docs/empty.md');
    expect(chunks).toHaveLength(0);
  });

  it('whitespace-only file → empty array', () => {
    const chunks = indexer.chunkMarkdown('   \n\n   ', 'docs/blank.md');
    expect(chunks).toHaveLength(0);
  });

  it('metadata is propagated to all chunks', () => {
    const md = [
      '## Alpha',
      'Alpha content.',
      '## Beta',
      'Beta content.',
    ].join('\n');

    const chunks = indexer.chunkMarkdown(md, 'objects/windows/w_vendor.md');
    expect(chunks).toHaveLength(2);
    for (const chunk of chunks) {
      expect(chunk.obj_type).toBe('window');
      expect(chunk.obj_name).toBe('w_vendor');
      expect(chunk.path).toBe('objects/windows/w_vendor.md');
      expect(chunk.source).toBe('standard');
    }
  });

  it('single-chunk file carries correct source and path', () => {
    const md = 'No heading here, just plain text.';
    const chunks = indexer.chunkMarkdown(md, 'flux/receiving.md');
    expect(chunks).toHaveLength(1);
    expect(chunks[0]!.source).toBe('standard');
    expect(chunks[0]!.path).toBe('flux/receiving.md');
    expect(chunks[0]!.obj_type).toBe('flux');
  });
});

// ===========================================================================
// 6. RagIndexer — PB source chunking
// ===========================================================================

describe('RagIndexer — PB source chunking', () => {
  let db: RagDB;
  let indexer: RagIndexer;

  beforeEach(() => {
    db = new RagDB(':memory:');
    indexer = makeIndexer(db);
  });

  afterEach(() => {
    db.close();
  });

  it('file with functions → one chunk per function', () => {
    // Minimal valid PowerScript with two public functions.
    const src = [
      '$PBExportHeader$w_order.srw',
      'forward',
      'global type w_order from w_response',
      'end type',
      'end forward',
      '',
      'global type w_order from w_response',
      'end type',
      '',
      'public function string of_get_number()',
      'return "ORD-001"',
      'end function',
      '',
      'public function boolean of_validate()',
      'return true',
      'end function',
    ].join('\n');

    const chunks = indexer.chunkPBSource(src, 'Cust_chasal/w_order.srw');

    // Parser should produce at least 2 chunks (one per function).
    expect(chunks.length).toBeGreaterThanOrEqual(2);

    const names = chunks.map((c) => c.section ?? '');
    expect(names.some((n) => n.includes('of_get_number'))).toBe(true);
    expect(names.some((n) => n.includes('of_validate'))).toBe(true);
  });

  it('file with no functions (e.g. .srd) → single fallback chunk', () => {
    // A DataWindow source has no PowerScript functions.
    const srd = [
      '$PBExportHeader$d_items.srd',
      'release 25;',
      'datawindow()',
      'table(column=(name=item_id~ttype=long~t',
      ')',
    ].join('\n');

    const chunks = indexer.chunkPBSource(srd, 'Cust_chasal/d_items.srd');
    expect(chunks).toHaveLength(1);
    expect(chunks[0]!.content).toContain('datawindow');
  });

  it('all chunks have source="custom" and obj_type="code"', () => {
    const src = [
      '$PBExportHeader$w_test.srw',
      'forward',
      'global type w_test from w_response',
      'end type',
      'end forward',
      'global type w_test from w_response',
      'end type',
      'public function string of_hello()',
      'return "hello"',
      'end function',
    ].join('\n');

    const chunks = indexer.chunkPBSource(src, '_sysxtra/w_test.srw');
    expect(chunks.length).toBeGreaterThanOrEqual(1);
    for (const chunk of chunks) {
      expect(chunk.source).toBe('custom');
      expect(chunk.obj_type).toBe('code');
    }
  });

  it('empty file → empty array', () => {
    const chunks = indexer.chunkPBSource('', '_sysxtra/empty.sru');
    expect(chunks).toHaveLength(0);
  });

  it('obj_name is derived from the file basename', () => {
    const src = [
      '$PBExportHeader$w_special.srw',
      'release 25;',
      'datawindow()',
    ].join('\n');

    const chunks = indexer.chunkPBSource(src, 'Cust_chasal/w_special.srw');
    expect(chunks.length).toBeGreaterThanOrEqual(1);
    expect(chunks[0]!.obj_name).toBe('w_special');
  });
});

// ===========================================================================
// 7. RagIndexer — Domain extraction
// ===========================================================================

describe('RagIndexer — domain extraction', () => {
  let db: RagDB;
  let indexer: RagIndexer;

  beforeEach(() => {
    db = new RagDB(':memory:');
    indexer = makeIndexer(db);
  });

  afterEach(() => {
    db.close();
  });

  it("'00-routing-table.md' → 'routing'", () => {
    expect(indexer.extractDomainFromKnowledgeFile('00-routing-table.md')).toBe('routing');
  });

  it("'01-core-system.md' → 'core-system'", () => {
    expect(indexer.extractDomainFromKnowledgeFile('01-core-system.md')).toBe('core-system');
  });

  it("'04-masters-suppliers.md' → 'masters-suppliers'", () => {
    expect(indexer.extractDomainFromKnowledgeFile('04-masters-suppliers.md')).toBe('masters-suppliers');
  });

  it("'08-sales-crm.md' → 'sales-crm'", () => {
    expect(indexer.extractDomainFromKnowledgeFile('08-sales-crm.md')).toBe('sales-crm');
  });

  it("'12-manufacturing.md' → 'manufacturing'", () => {
    expect(indexer.extractDomainFromKnowledgeFile('12-manufacturing.md')).toBe('manufacturing');
  });

  it("'20-tools-admin.md' → 'tools-admin'", () => {
    expect(indexer.extractDomainFromKnowledgeFile('20-tools-admin.md')).toBe('tools-admin');
  });

  it('file with no numeric prefix is returned as-is', () => {
    expect(indexer.extractDomainFromKnowledgeFile('general-notes.md')).toBe('general-notes');
  });
});
