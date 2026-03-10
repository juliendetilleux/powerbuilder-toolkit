/**
 * rag-db.ts — SQLite wrapper for the PMIX RAG system.
 *
 * Uses better-sqlite3 (synchronous) with an FTS5 virtual table for BM25
 * full-text search and a BLOB-based embedding store for optional cosine-
 * similarity ranking.  All operations are synchronous — no async/await.
 */

import Database from 'better-sqlite3';

// ---------------------------------------------------------------------------
// Scoring constants
// ---------------------------------------------------------------------------

/** BM25 column weights: obj_name x 10, section x 5, content x 1. */
const FTS_WEIGHT_OBJ_NAME = 10.0;
const FTS_WEIGHT_SECTION = 5.0;
const FTS_WEIGHT_CONTENT = 1.0;

/** Blend ratio when vectors are available: 40% FTS + 60% vector. */
const BLEND_FTS = 0.4;
const BLEND_VEC = 0.6;

/** Maximum feedback boost added to the blended score. */
const FEEDBACK_BOOST_MAX = 0.2;

/** Candidate multiplier: retrieve more FTS results for vector re-ranking. */
const HYBRID_CANDIDATE_MULTIPLIER = 5;
const HYBRID_CANDIDATE_CAP = 200;

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export interface RagChunk {
  source: 'standard' | 'custom';
  path: string;
  domain?: string;
  obj_type?: string; // 'table' | 'window' | 'datawindow' | 'function' | 'flux' | 'knowledge' | 'code' | 'learned'
  obj_name?: string;
  section?: string;
  content: string;
  mtime: number;
}

export interface RagResult {
  id: number;
  score: number;
  source: string;
  path: string;
  domain: string | null;
  obj_type: string | null;
  obj_name: string | null;
  section: string | null;
  content: string;
}

export interface RagStats {
  total_chunks: number;
  standard_chunks: number;
  custom_chunks: number;
  learned_chunks: number;
  total_feedback: number;
  total_synonyms: number;
  total_corrections: number;
}

// ---------------------------------------------------------------------------
// Internal row shapes returned by better-sqlite3
// ---------------------------------------------------------------------------

interface ChunkRow {
  id: number;
  source: string;
  path: string;
  domain: string | null;
  obj_type: string | null;
  obj_name: string | null;
  section: string | null;
  content: string;
  mtime: number;
}

interface FtsRow extends ChunkRow {
  fts_score: number;
}

interface EmbeddingRow {
  chunk_id: number;
  vector: Buffer;
}

interface FeedbackRow {
  chunk_id: number;
  hits: number;
}

interface SynonymRow {
  target: string;
}

interface MtimeRow {
  mtime: number;
}

interface CountRow {
  n: number;
}

// ---------------------------------------------------------------------------
// DDL
// ---------------------------------------------------------------------------

const DDL = `
PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS chunks (
  id      INTEGER PRIMARY KEY AUTOINCREMENT,
  source  TEXT    NOT NULL,
  path    TEXT    NOT NULL,
  domain  TEXT,
  obj_type TEXT,
  obj_name TEXT,
  section TEXT,
  content TEXT    NOT NULL,
  mtime   REAL    NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_chunks_path ON chunks(path);

CREATE VIRTUAL TABLE IF NOT EXISTS chunks_fts USING fts5(
  obj_name, section, content,
  content=chunks, content_rowid=id,
  tokenize='unicode61 remove_diacritics 2'
);

CREATE TRIGGER IF NOT EXISTS chunks_ai AFTER INSERT ON chunks BEGIN
  INSERT INTO chunks_fts(rowid, obj_name, section, content)
  VALUES (new.id, new.obj_name, new.section, new.content);
END;

CREATE TRIGGER IF NOT EXISTS chunks_ad AFTER DELETE ON chunks BEGIN
  INSERT INTO chunks_fts(chunks_fts, rowid, obj_name, section, content)
  VALUES ('delete', old.id, old.obj_name, old.section, old.content);
END;

CREATE TABLE IF NOT EXISTS embeddings (
  chunk_id INTEGER PRIMARY KEY REFERENCES chunks(id) ON DELETE CASCADE,
  vector   BLOB    NOT NULL
);

CREATE TABLE IF NOT EXISTS learned_synonyms (
  id      INTEGER PRIMARY KEY AUTOINCREMENT,
  term    TEXT    NOT NULL,
  target  TEXT    NOT NULL,
  hits    INTEGER DEFAULT 1,
  created TEXT    NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_synonyms_term ON learned_synonyms(term);

CREATE TABLE IF NOT EXISTS search_feedback (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  query    TEXT    NOT NULL,
  chunk_id INTEGER NOT NULL,
  useful   INTEGER DEFAULT 1,
  created  TEXT    NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_feedback_chunk ON search_feedback(chunk_id);

CREATE TABLE IF NOT EXISTS corrections_log (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  path     TEXT    NOT NULL,
  old_text TEXT    NOT NULL,
  new_text TEXT    NOT NULL,
  reason   TEXT    NOT NULL,
  created  TEXT    NOT NULL DEFAULT (datetime('now'))
);
`;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Deserialise a 32-bit IEEE 754 float BLOB stored by insertEmbedding back into
 * a Float32Array without copying the underlying buffer memory.
 */
function blobToFloat32Array(buf: Buffer): Float32Array {
  return new Float32Array(buf.buffer, buf.byteOffset, buf.byteLength / 4);
}

/**
 * Compute cosine similarity between two equal-length Float32Arrays.
 * Returns a value in [-1, 1].  Returns 0 when either vector has zero norm.
 */
function cosineSimilarity(a: Float32Array, b: Float32Array): number {
  if (a.length !== b.length || a.length === 0) return 0;

  let dot = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  const denom = Math.sqrt(normA) * Math.sqrt(normB);
  return denom === 0 ? 0 : dot / denom;
}

/**
 * Normalize an array of raw scores to the [0, 1] range using min-max scaling.
 * When all scores are identical the function returns 0.5 for every entry so
 * that the subsequent blend does not collapse to zero.
 */
function minMaxNormalize(scores: number[]): number[] {
  if (scores.length === 0) return [];

  const min = Math.min(...scores);
  const max = Math.max(...scores);
  const range = max - min;

  if (range === 0) return scores.map(() => 0.5);
  return scores.map((s) => (s - min) / range);
}

/**
 * Expand a user query by appending synonym targets found in the DB.
 * Only adds terms that are not already present in the query string (case-
 * insensitive) to avoid duplicate tokens confusing the BM25 scorer.
 */
function expandQueryWithSynonyms(
  query: string,
  synonymRows: readonly SynonymRow[],
): string {
  if (synonymRows.length === 0) return query;

  const lower = query.toLowerCase();
  const extras: string[] = [];

  for (const row of synonymRows) {
    if (!lower.includes(row.target.toLowerCase())) {
      extras.push(row.target);
    }
  }

  return extras.length > 0 ? `${query} ${extras.join(' ')}` : query;
}

// ---------------------------------------------------------------------------
// RagDB
// ---------------------------------------------------------------------------

export class RagDB {
  private readonly db: Database.Database;

  // Prepared statements are created once and reused for performance.
  private readonly stmtInsertChunk: Database.Statement;
  private readonly stmtInsertEmbedding: Database.Statement;
  private readonly stmtFts: Database.Statement;
  private readonly stmtAllEmbeddings: Database.Statement;
  private readonly stmtFeedbackCounts: Database.Statement;
  private readonly stmtInsertFeedback: Database.Statement;
  private readonly stmtInsertSynonym: Database.Statement;
  private readonly stmtInsertCorrection: Database.Statement;
  private readonly stmtDeleteByPath: Database.Statement;
  private readonly stmtMtime: Database.Statement;
  private readonly stmtSynonyms: Database.Statement;

  constructor(dbPath: string) {
    this.db = new Database(dbPath);

    // Apply DDL (idempotent — uses IF NOT EXISTS everywhere).
    this.db.exec(DDL);

    // Prepare all statements up-front.  better-sqlite3 re-uses the compiled
    // query plan, which gives a significant throughput boost during indexing.

    this.stmtInsertChunk = this.db.prepare(`
      INSERT INTO chunks (source, path, domain, obj_type, obj_name, section, content, mtime)
      VALUES (@source, @path, @domain, @obj_type, @obj_name, @section, @content, @mtime)
    `);

    this.stmtInsertEmbedding = this.db.prepare(`
      INSERT OR REPLACE INTO embeddings (chunk_id, vector) VALUES (?, ?)
    `);

    // bm25() returns negative values — more negative means a better match.
    this.stmtFts = this.db.prepare(`
      SELECT c.id, c.source, c.path, c.domain, c.obj_type, c.obj_name,
             c.section, c.content, c.mtime,
             bm25(chunks_fts, ${FTS_WEIGHT_OBJ_NAME}, ${FTS_WEIGHT_SECTION}, ${FTS_WEIGHT_CONTENT}) AS fts_score
      FROM   chunks_fts f
      JOIN   chunks c ON c.id = f.rowid
      WHERE  chunks_fts MATCH ?
      ORDER  BY fts_score
      LIMIT  ?
    `);

    this.stmtAllEmbeddings = this.db.prepare(`
      SELECT chunk_id, vector FROM embeddings
    `);

    this.stmtFeedbackCounts = this.db.prepare(`
      SELECT chunk_id, COUNT(*) AS hits
      FROM   search_feedback
      GROUP  BY chunk_id
    `);

    this.stmtInsertFeedback = this.db.prepare(`
      INSERT INTO search_feedback (query, chunk_id) VALUES (?, ?)
    `);

    this.stmtInsertSynonym = this.db.prepare(`
      INSERT INTO learned_synonyms (term, target) VALUES (?, ?)
    `);

    this.stmtInsertCorrection = this.db.prepare(`
      INSERT INTO corrections_log (path, old_text, new_text, reason)
      VALUES (?, ?, ?, ?)
    `);

    this.stmtDeleteByPath = this.db.prepare(`
      DELETE FROM chunks WHERE path = ?
    `);

    this.stmtMtime = this.db.prepare(`
      SELECT MAX(mtime) AS mtime FROM chunks WHERE path = ?
    `);

    this.stmtSynonyms = this.db.prepare(`
      SELECT target
      FROM   learned_synonyms
      WHERE  lower(?) LIKE '%' || lower(term) || '%'
    `);
  }

  // -------------------------------------------------------------------------
  // Ingestion
  // -------------------------------------------------------------------------

  /**
   * Insert a chunk into the chunks table (and, via trigger, into chunks_fts).
   * Returns the auto-incremented row id.
   */
  insertChunk(chunk: RagChunk): number {
    const result = this.stmtInsertChunk.run({
      source: chunk.source,
      path: chunk.path,
      domain: chunk.domain ?? null,
      obj_type: chunk.obj_type ?? null,
      obj_name: chunk.obj_name ?? null,
      section: chunk.section ?? null,
      content: chunk.content,
      mtime: chunk.mtime,
    });

    return result.lastInsertRowid as number;
  }

  /**
   * Store a Float32Array embedding as a raw BLOB next to its chunk.
   * Uses INSERT OR REPLACE so re-indexing a chunk cleanly overwrites the old
   * vector without leaving orphans.
   */
  insertEmbedding(chunkId: number, embedding: Float32Array): void {
    // Copy the typed array's memory into a Node.js Buffer.  Buffer.from() on
    // an ArrayBuffer slice is zero-copy when the offset and length align to
    // the underlying ArrayBuffer, which they do for freshly created arrays.
    const blob = Buffer.from(
      embedding.buffer,
      embedding.byteOffset,
      embedding.byteLength,
    );

    this.stmtInsertEmbedding.run(chunkId, blob);
  }

  /**
   * Insert a learned knowledge chunk (source = 'custom', obj_type = 'learned').
   * Returns the new chunk id.
   */
  insertLearned(topic: string, content: string, tags: string[]): number {
    const tagSection = tags.length > 0 ? tags.join(', ') : null;

    return this.insertChunk({
      source: 'custom',
      path: `learned/${topic.replace(/\s+/g, '_').toLowerCase()}`,
      obj_type: 'learned',
      obj_name: topic,
      section: tagSection ?? undefined,
      content,
      mtime: Date.now() / 1000,
    });
  }

  // -------------------------------------------------------------------------
  // Deletion / housekeeping
  // -------------------------------------------------------------------------

  /** Remove all chunks (and their embeddings via CASCADE) for a given path. */
  deleteByPath(path: string): void {
    this.stmtDeleteByPath.run(path);
  }

  /** Return the maximum mtime stored for a given path, or null if unknown. */
  getMtime(path: string): number | null {
    const row = this.stmtMtime.get(path) as MtimeRow | undefined;
    return row?.mtime ?? null;
  }

  // -------------------------------------------------------------------------
  // Feedback & synonyms
  // -------------------------------------------------------------------------

  /** Record that a user found a particular chunk useful for a query. */
  insertFeedback(query: string, chunkId: number): void {
    this.stmtInsertFeedback.run(query, chunkId);
  }

  /** Add a synonym mapping so that searches for `term` also expand to `target`. */
  insertSynonym(term: string, target: string): void {
    this.stmtInsertSynonym.run(term, target);
  }

  /** Log a manual correction to a chunk's textual content. */
  insertCorrection(
    path: string,
    oldText: string,
    newText: string,
    reason: string,
  ): void {
    this.stmtInsertCorrection.run(path, oldText, newText, reason);
  }

  // -------------------------------------------------------------------------
  // Search
  // -------------------------------------------------------------------------

  /**
   * Full-text BM25 search using FTS5.
   *
   * bm25() yields negative scores (closer to 0 = worse).  We invert and
   * normalise them to [0, 1] so that downstream callers get a consistent
   * "higher is better" score regardless of corpus size.
   *
   * @param query  Raw user query string (may contain FTS5 operators).
   * @param limit  Maximum number of results (default 10).
   */
  searchFTS(query: string, limit = 10): RagResult[] {
    // Guard: empty query would cause FTS5 syntax error.
    if (!query.trim()) return [];

    // 1. Expand the query with any learned synonyms.
    const synonymRows = this.stmtSynonyms.all(query) as SynonymRow[];
    const expandedQuery = expandQueryWithSynonyms(query, synonymRows);

    // 2. Escape the query for FTS5 (wrap in double-quotes if it contains no
    //    FTS5 operators, so plain strings always work as phrase searches).
    const ftsQuery = this.buildFtsQuery(expandedQuery);

    let rows: FtsRow[];
    try {
      rows = this.stmtFts.all(ftsQuery, limit) as FtsRow[];
    } catch {
      // FTS5 query syntax errors (e.g. unbalanced quotes) — fall back to a
      // plain quoted phrase search on the original query.
      try {
        const safeQuery = `"${query.replace(/"/g, '')}"`;
        rows = this.stmtFts.all(safeQuery, limit) as FtsRow[];
      } catch {
        return [];
      }
    }

    if (rows.length === 0) return [];

    // 3. bm25 scores are negative; negate them so higher = better, then
    //    normalise to [0, 1].
    const rawScores = rows.map((r) => -r.fts_score);
    const normScores = minMaxNormalize(rawScores);

    return rows.map((row, i) => ({
      id: row.id,
      score: normScores[i],
      source: row.source,
      path: row.path,
      domain: row.domain,
      obj_type: row.obj_type,
      obj_name: row.obj_name,
      section: row.section,
      content: row.content,
    }));
  }

  /**
   * Hybrid search: combines FTS5 BM25 ranking with optional cosine-similarity
   * vector ranking, then boosts results that have prior positive feedback.
   *
   * Scoring formula:
   *   - Vector available:  score = 0.4 * fts_norm + 0.6 * vec_norm
   *   - FTS only:          score = fts_norm
   *   - Feedback boost:    score += 0.2 * (chunk_feedback / max_feedback)
   *
   * @param query      User query string.
   * @param embedding  Query embedding (Float32Array) or null to skip vector search.
   * @param limit      Maximum number of results to return (default 10).
   */
  searchHybrid(
    query: string,
    embedding: Float32Array | null,
    limit = 10,
  ): RagResult[] {
    // Retrieve a larger candidate set from FTS so that re-ranking by vector
    // similarity can surface items that scored modestly on BM25 alone.
    const ftsLimit = embedding !== null
      ? Math.min(limit * HYBRID_CANDIDATE_MULTIPLIER, HYBRID_CANDIDATE_CAP)
      : limit;
    const ftsCandidates = this.searchFTS(query, ftsLimit);

    if (ftsCandidates.length === 0) return [];

    // Build a map of chunk_id → normalised fts score for quick lookup.
    const ftsMap = new Map<number, number>(
      ftsCandidates.map((r) => [r.id, r.score]),
    );

    // ---- Vector phase -------------------------------------------------------
    let vecMap = new Map<number, number>();

    if (embedding !== null) {
      const allEmbeddings = this.stmtAllEmbeddings.all() as EmbeddingRow[];

      // Only score chunks that are already in our FTS candidate set.
      const candidateIds = new Set(ftsCandidates.map((r) => r.id));

      const rawVecScores: Array<{ id: number; sim: number }> = [];

      for (const row of allEmbeddings) {
        if (!candidateIds.has(row.chunk_id)) continue;

        const stored = blobToFloat32Array(row.vector);
        const sim = cosineSimilarity(embedding, stored);
        rawVecScores.push({ id: row.chunk_id, sim });
      }

      if (rawVecScores.length > 0) {
        const normSims = minMaxNormalize(rawVecScores.map((r) => r.sim));
        rawVecScores.forEach((r, i) => {
          vecMap.set(r.id, normSims[i]);
        });
      }
    }

    const hasVectors = vecMap.size > 0;

    // ---- Feedback phase -----------------------------------------------------
    const feedbackRows = this.stmtFeedbackCounts.all() as FeedbackRow[];
    const feedbackMap = new Map<number, number>(
      feedbackRows.map((r) => [r.chunk_id, r.hits]),
    );

    const maxFeedback =
      feedbackRows.length > 0
        ? Math.max(...feedbackRows.map((r) => r.hits))
        : 1;

    // ---- Blend & sort -------------------------------------------------------
    const scored = ftsCandidates.map((r) => {
      const ftsNorm = ftsMap.get(r.id) ?? 0;
      const vecNorm = vecMap.get(r.id) ?? 0;
      const feedbackHits = feedbackMap.get(r.id) ?? 0;

      let blended: number;

      if (hasVectors && vecMap.has(r.id)) {
        blended = BLEND_FTS * ftsNorm + BLEND_VEC * vecNorm;
      } else {
        blended = ftsNorm;
      }

      const boost = feedbackHits > 0
        ? FEEDBACK_BOOST_MAX * (feedbackHits / maxFeedback)
        : 0;

      return { ...r, score: Math.min(1, blended + boost) };
    });

    scored.sort((a, b) => b.score - a.score);

    return scored.slice(0, limit);
  }

  // -------------------------------------------------------------------------
  // Statistics
  // -------------------------------------------------------------------------

  getStats(): RagStats {
    const count = (sql: string, ...params: unknown[]): number => {
      const row = this.db.prepare(sql).get(...params) as CountRow | undefined;
      return row?.n ?? 0;
    };

    return {
      total_chunks: count(`SELECT COUNT(*) AS n FROM chunks`),
      standard_chunks: count(
        `SELECT COUNT(*) AS n FROM chunks WHERE source = 'standard'`,
      ),
      custom_chunks: count(
        `SELECT COUNT(*) AS n FROM chunks WHERE source = 'custom' AND (obj_type IS NULL OR obj_type != 'learned')`,
      ),
      learned_chunks: count(
        `SELECT COUNT(*) AS n FROM chunks WHERE obj_type = 'learned'`,
      ),
      total_feedback: count(`SELECT COUNT(*) AS n FROM search_feedback`),
      total_synonyms: count(`SELECT COUNT(*) AS n FROM learned_synonyms`),
      total_corrections: count(`SELECT COUNT(*) AS n FROM corrections_log`),
    };
  }

  // -------------------------------------------------------------------------
  // Lifecycle
  // -------------------------------------------------------------------------

  /**
   * Execute `fn` inside an explicit SQLite transaction.
   * If `fn` throws, the transaction is rolled back automatically.
   */
  runInTransaction<T>(fn: () => T): T {
    return this.db.transaction(fn)();
  }

  /** Close the underlying SQLite connection. */
  close(): void {
    this.db.close();
  }

  // -------------------------------------------------------------------------
  // Private helpers
  // -------------------------------------------------------------------------

  /**
   * Build an FTS5-safe query string.
   *
   * If the query already contains FTS5 operators (AND, OR, NOT, parentheses,
   * quotes, or prefix wildcards) we pass it through unchanged.  Otherwise we
   * wrap the whole string in double-quotes to treat it as an implicit phrase,
   * which prevents FTS5 from interpreting tokens as separate unordered terms.
   */
  private buildFtsQuery(query: string): string {
    const hasFtsOperators = /["()*]|\bAND\b|\bOR\b|\bNOT\b/.test(query);
    if (hasFtsOperators) return query;

    // French stop words to filter out for better FTS5 matching.
    const stopWords = new Set([
      'le', 'la', 'les', 'un', 'une', 'des', 'de', 'du', 'au', 'aux',
      'ce', 'cette', 'ces', 'mon', 'ma', 'mes', 'ton', 'ta', 'tes',
      'son', 'sa', 'ses', 'et', 'ou', 'en', 'a', 'dans', 'par', 'pour',
      'sur', 'avec', 'est', 'sont', 'que', 'qui', 'ne', 'pas', 'se',
      'il', 'elle', 'on', 'je', 'tu', 'nous', 'vous', 'ils', 'elles',
      'comment', 'quel', 'quelle', 'quels', 'quelles',
    ]);

    // Split into words, remove stop words, keep meaningful terms.
    const tokens = query
      .toLowerCase()
      .replace(/['']/g, ' ')
      .split(/\s+/)
      .filter((t) => t.length > 1 && !stopWords.has(t));

    if (tokens.length === 0) {
      // Fallback: wrap entire query as phrase.
      return `"${query.replace(/"/g, '""')}"`;
    }

    // Join tokens with OR for broad matching (BM25 ranks by relevance).
    return tokens.map((t) => `"${t}"`).join(' OR ');
  }
}
