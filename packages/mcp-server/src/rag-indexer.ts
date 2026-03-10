/**
 * rag-indexer.ts — RAG ingestion pipeline for PMIX documentation and source.
 *
 * Reads markdown documentation and PowerBuilder source files, splits them into
 * searchable chunks, extracts structured metadata from the file path, and
 * persists the results into the RAG SQLite database via RagDB.
 *
 * Two indexing modes are provided:
 *   - indexAll()         — full rebuild: deletes stale entries and recreates all chunks.
 *   - indexIncremental() — incremental: only processes files whose mtime has changed.
 *
 * indexIncremental() is the recommended entry point at server startup.
 */

import { readFileSync, statSync } from 'node:fs';
import { resolve, relative, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import { parseFunctions, parseEvents } from '@pb-toolkit/parser';
import type { RagDB, RagChunk } from './rag-db.js';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Default docs path: two levels above the compiled dist/ file → <repo-root>/docs. */
const DEFAULT_DOCS_PATH = resolve(
  fileURLToPath(import.meta.url),
  '../../..',
  'docs',
);

/** Glob pattern that matches all markdown documentation files. */
const MD_GLOB = '**/*.md';

/**
 * Glob pattern that restricts PB source indexing to customer-specific and
 * override directories only. Matches .srw, .srd, .sru, .srf, .srs, and .srm.
 */
const PB_CUSTOM_GLOB = '{Cust_*,_sysxtra}/**/*.{srw,srd,sru,srf,srs,srm}';

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export interface IndexStats {
  files_processed: number;
  chunks_created: number;
  files_skipped: number;
  duration_ms: number;
}

// ---------------------------------------------------------------------------
// Internal types
// ---------------------------------------------------------------------------

/** A chunk ready for insertion minus the mtime field (added at write time). */
type ChunkWithoutMtime = Omit<RagChunk, 'mtime'>;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Accumulate stats from a sub-result into a running aggregate. */
function addStats(target: IndexStats, source: IndexStats): void {
  target.files_processed += source.files_processed;
  target.chunks_created += source.chunks_created;
  target.files_skipped += source.files_skipped;
  // duration_ms is set only on the outermost call.
}

/**
 * Read a file from disk and return its content plus its last-modified time in
 * milliseconds. Returns null when the file cannot be accessed or read.
 */
function readFileSafe(
  absolutePath: string,
): { content: string; mtimeMs: number } | null {
  try {
    const stat = statSync(absolutePath);
    const content = readFileSync(absolutePath, { encoding: 'utf-8' });
    return { content, mtimeMs: stat.mtimeMs };
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// RagIndexer
// ---------------------------------------------------------------------------

/**
 * Orchestrates reading, chunking, and persistence of documentation and
 * PowerBuilder source files into the RAG SQLite database.
 */
export class RagIndexer {
  private readonly db: RagDB;
  private readonly docsPath: string;
  private readonly projectPath: string | undefined;

  /**
   * @param db           RagDB instance to write chunks into.
   * @param docsPath     Absolute path to the documentation root (default: ../../docs).
   * @param projectPath  Optional absolute path to the PB solution root. When
   *                     provided, Cust_* and _sysxtra directories are indexed.
   */
  constructor(
    db: RagDB,
    docsPath: string = DEFAULT_DOCS_PATH,
    projectPath?: string,
  ) {
    this.db = db;
    this.docsPath = resolve(docsPath);
    this.projectPath =
      projectPath !== undefined ? resolve(projectPath) : undefined;
  }

  // -------------------------------------------------------------------------
  // Public entry points
  // -------------------------------------------------------------------------

  /**
   * Full re-index of standard documentation and (optionally) project source.
   * Deletes all existing chunks for each file before re-inserting.
   */
  async indexAll(): Promise<IndexStats> {
    const start = Date.now();
    console.error('[RAG] Starting full index...');

    const combined: IndexStats = {
      files_processed: 0,
      chunks_created: 0,
      files_skipped: 0,
      duration_ms: 0,
    };

    const stdStats = await this.indexStandard();
    addStats(combined, stdStats);

    if (this.projectPath !== undefined) {
      const projStats = await this.indexProject();
      addStats(combined, projStats);
    }

    combined.duration_ms = Date.now() - start;
    console.error(
      `[RAG] Done: ${combined.chunks_created} chunks from ` +
        `${combined.files_processed} files in ${combined.duration_ms} ms`,
    );
    return combined;
  }

  /**
   * Incremental re-index: only processes files whose mtime on disk is newer
   * than the value stored in the database. This is the primary entry point
   * called at server startup.
   */
  async indexIncremental(): Promise<IndexStats> {
    const start = Date.now();
    console.error('[RAG] Starting incremental index...');

    const combined: IndexStats = {
      files_processed: 0,
      chunks_created: 0,
      files_skipped: 0,
      duration_ms: 0,
    };

    // Collect candidate files from both doc and project roots.
    const mdFiles = await this._globFiles(MD_GLOB, this.docsPath);
    const pbFiles =
      this.projectPath !== undefined
        ? await this._globFiles(PB_CUSTOM_GLOB, this.projectPath)
        : [];

    interface FileEntry {
      absolutePath: string;
      basePath: string;
      isPb: boolean;
    }

    const allEntries: FileEntry[] = [
      ...mdFiles.map(
        (f): FileEntry => ({ absolutePath: f, basePath: this.docsPath, isPb: false }),
      ),
      ...pbFiles.map(
        (f): FileEntry => ({
          absolutePath: f,
          basePath: this.projectPath!,
          isPb: true,
        }),
      ),
    ];

    console.error(`[RAG] Checking ${allEntries.length} files for changes...`);

    for (const { absolutePath, basePath, isPb } of allEntries) {
      const relPath = relative(basePath, absolutePath).replace(/\\/g, '/');

      // Stat the file to get its current mtime.
      let currentMtime: number;
      try {
        currentMtime = statSync(absolutePath).mtimeMs;
      } catch {
        combined.files_skipped++;
        continue;
      }

      // Skip if the stored mtime is equal or newer (file unchanged).
      const storedMtime = this.db.getMtime(relPath);
      if (storedMtime !== null && storedMtime >= currentMtime) {
        combined.files_skipped++;
        continue;
      }

      // Read content and re-index.
      const result = readFileSafe(absolutePath);
      if (result === null) {
        combined.files_skipped++;
        continue;
      }

      const chunks: ChunkWithoutMtime[] = isPb
        ? this.chunkPBSource(result.content, relPath)
        : this.chunkMarkdown(result.content, relPath);

      // Atomic: delete old + insert new in a single transaction.
      this.db.runInTransaction(() => {
        this.db.deleteByPath(relPath);
        for (const chunk of chunks) {
          this.db.insertChunk({ ...chunk, mtime: result.mtimeMs });
        }
      });

      combined.files_processed++;
      combined.chunks_created += chunks.length;
    }

    combined.duration_ms = Date.now() - start;
    console.error(
      `[RAG] Done: ${combined.chunks_created} chunks in ${combined.duration_ms} ms ` +
        `(${combined.files_skipped} unchanged)`,
    );
    return combined;
  }

  /**
   * Index all markdown files found recursively under `docsPath`.
   */
  async indexStandard(): Promise<IndexStats> {
    const stats: IndexStats = {
      files_processed: 0,
      chunks_created: 0,
      files_skipped: 0,
      duration_ms: 0,
    };

    const files = await this._globFiles(MD_GLOB, this.docsPath);
    console.error(`[RAG] Indexing ${files.length} markdown files...`);

    for (const absolutePath of files) {
      const relPath = relative(this.docsPath, absolutePath).replace(/\\/g, '/');
      const result = readFileSafe(absolutePath);

      if (result === null) {
        stats.files_skipped++;
        continue;
      }

      const chunks = this.chunkMarkdown(result.content, relPath);
      this.db.runInTransaction(() => {
        this.db.deleteByPath(relPath);
        for (const chunk of chunks) {
          this.db.insertChunk({ ...chunk, mtime: result.mtimeMs });
        }
      });

      stats.files_processed++;
      stats.chunks_created += chunks.length;
    }

    return stats;
  }

  /**
   * Index PowerBuilder source files inside `Cust_*` and `_sysxtra` directories
   * found under `projectPath`. These are marked as source='custom'.
   */
  async indexProject(): Promise<IndexStats> {
    const stats: IndexStats = {
      files_processed: 0,
      chunks_created: 0,
      files_skipped: 0,
      duration_ms: 0,
    };

    if (this.projectPath === undefined) {
      return stats;
    }

    const files = await this._globFiles(PB_CUSTOM_GLOB, this.projectPath);
    console.error(`[RAG] Indexing ${files.length} custom PB source files...`);

    for (const absolutePath of files) {
      const relPath = relative(this.projectPath, absolutePath).replace(
        /\\/g,
        '/',
      );
      const result = readFileSafe(absolutePath);

      if (result === null) {
        stats.files_skipped++;
        continue;
      }

      const chunks = this.chunkPBSource(result.content, relPath);
      this.db.runInTransaction(() => {
        this.db.deleteByPath(relPath);
        for (const chunk of chunks) {
          this.db.insertChunk({ ...chunk, mtime: result.mtimeMs });
        }
      });

      stats.files_processed++;
      stats.chunks_created += chunks.length;
    }

    return stats;
  }

  // -------------------------------------------------------------------------
  // Chunking
  // -------------------------------------------------------------------------

  /**
   * Split a markdown file into chunks at H2 (##) and H3 (###) boundaries.
   *
   * Strategy:
   *   - Each `## ` or `### ` heading opens a new chunk.
   *   - A chunk's content extends from its heading line up to (but not
   *     including) the next heading of the same or higher level.
   *   - If the file contains no `## ` headings it is treated as a single chunk.
   *   - The heading text is stored as the `section` field; path-derived
   *     metadata is propagated to every chunk from the file.
   */
  chunkMarkdown(
    content: string,
    filePath: string,
  ): ChunkWithoutMtime[] {
    const meta = this.extractMetadata(filePath);
    const lines = content.split(/\r?\n/);

    // Locate all H2 / H3 heading positions.
    interface HeadingEntry {
      level: 2 | 3;
      lineIdx: number;
      title: string;
    }
    const headings: HeadingEntry[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i] ?? '';
      if (/^## /.test(line)) {
        headings.push({ level: 2, lineIdx: i, title: line.slice(3).trim() });
      } else if (/^### /.test(line)) {
        headings.push({ level: 3, lineIdx: i, title: line.slice(4).trim() });
      }
    }

    if (headings.length === 0) {
      // No headings — treat the whole file as a single chunk.
      const text = content.trim();
      if (!text) return [];
      return [
        {
          source: 'standard',
          path: filePath,
          section: this._titleFromPath(filePath),
          content: text,
          domain: meta.domain,
          obj_type: meta.obj_type,
          obj_name: meta.obj_name,
        },
      ];
    }

    const chunks: ChunkWithoutMtime[] = [];

    for (let h = 0; h < headings.length; h++) {
      const heading = headings[h]!;
      // Find the index of the next heading — the chunk extends up to that line.
      const nextHeading = headings[h + 1];
      const endLineIdx =
        nextHeading !== undefined ? nextHeading.lineIdx : lines.length;

      const sectionLines = lines.slice(heading.lineIdx, endLineIdx);
      const text = sectionLines.join('\n').trim();
      if (!text) continue;

      chunks.push({
        source: 'standard',
        path: filePath,
        section: heading.title,
        content: text,
        domain: meta.domain,
        obj_type: meta.obj_type,
        obj_name: meta.obj_name,
      });
    }

    return chunks;
  }

  /**
   * Split a PowerBuilder source file into per-function and per-event chunks.
   *
   * Uses the parser's `parseFunctions` and `parseEvents` helpers to locate
   * block boundaries, then extracts the corresponding source lines for each.
   * Only events with a body (hasScript = true) are included.
   *
   * When the parser yields no blocks (e.g. a DataWindow .srd file), the entire
   * file is returned as a single fallback chunk.
   */
  chunkPBSource(
    content: string,
    filePath: string,
  ): ChunkWithoutMtime[] {
    const meta = this.extractMetadata(filePath);
    const lines = content.split(/\r?\n/);

    interface Block {
      name: string;
      kind: 'function' | 'event';
      lineStart: number;
      lineEnd: number;
    }
    const blocks: Block[] = [];

    try {
      const functions = parseFunctions(content);
      for (const fn of functions) {
        blocks.push({
          name: fn.name,
          kind: 'function',
          lineStart: fn.lineStart,
          lineEnd: fn.lineEnd,
        });
      }

      const events = parseEvents(content);
      for (const ev of events) {
        if (ev.hasScript) {
          blocks.push({
            name: ev.name,
            kind: 'event',
            lineStart: ev.lineStart,
            lineEnd: ev.lineEnd,
          });
        }
      }
    } catch {
      // Parser failure — fall back to single-file chunk below.
    }

    if (blocks.length === 0) {
      const text = content.trim();
      if (!text) return [];
      return [
        {
          source: 'custom' as const,
          path: filePath,
          section: meta.obj_name ?? basename(filePath),
          content: text,
          domain: meta.domain,
          obj_type: 'code',
          obj_name: meta.obj_name,
        },
      ];
    }

    // Sort blocks in source order to produce a stable, predictable sequence.
    blocks.sort((a, b) => a.lineStart - b.lineStart);

    const chunks: ChunkWithoutMtime[] = [];

    for (const block of blocks) {
      // Parser line numbers are 1-based; array indices are 0-based.
      const startIdx = Math.max(0, block.lineStart - 1);
      const endIdx = Math.min(lines.length, block.lineEnd);
      const blockLines = lines.slice(startIdx, endIdx);
      const text = blockLines.join('\n').trim();
      if (!text) continue;

      chunks.push({
        source: 'custom',
        path: filePath,
        section: `${meta.obj_name ?? basename(filePath)}.${block.name} (${block.kind})`,
        content: text,
        domain: meta.domain,
        obj_type: 'code',
        obj_name: meta.obj_name,
      });
    }

    return chunks;
  }

  // -------------------------------------------------------------------------
  // Metadata extraction
  // -------------------------------------------------------------------------

  /**
   * Derive structured metadata from a relative file path.
   *
   * Recognised path patterns (relative to docsPath or projectPath):
   *
   *   database/tables/X.md        → obj_type='table',       obj_name='X'
   *   database/views/X.md         → obj_type='view',        obj_name='X'
   *   database/procedures/X.md    → obj_type='procedure',   obj_name='X'
   *   objects/windows/X.md        → obj_type='window',      obj_name='X'
   *   objects/datawindows/X.md    → obj_type='datawindow',  obj_name='X'
   *   objects/userobjects/X.md    → obj_type='userobject',  obj_name='X'
   *   objects/functions/X.md      → obj_type='function',    obj_name='X'
   *   objects/structures/X.md     → obj_type='structure',   obj_name='X'
   *   objects/menus/X.md          → obj_type='menu',        obj_name='X'
   *   knowledge/XX-domain.md      → obj_type='knowledge',   domain=extracted
   *   flux/X.md                   → obj_type='flux'
   *   modules/X.md                → obj_type='module'
   *   Cust_XXX/...                → obj_type='code',        obj_name from filename
   *   _sysxtra/...               → obj_type='code',        obj_name from filename
   */
  extractMetadata(
    filePath: string,
  ): { domain?: string; obj_type?: string; obj_name?: string } {
    // Normalise path separators to forward slashes for uniform matching.
    const norm = filePath.replace(/\\/g, '/');
    const ext = extname(norm);
    const name = basename(norm, ext);

    // --- Custom PB source directories ---
    if (/^(Cust_[^/]+|_sysxtra)\//i.test(norm)) {
      return { obj_type: 'code', obj_name: name };
    }

    // --- Database objects ---
    const dbMatch =
      /^(?:docs\/)?database\/(tables|views|procedures)\/(.+)\.md$/i.exec(norm);
    if (dbMatch) {
      const [, kind, objName] = dbMatch;
      const typeMap: Record<string, string> = {
        tables: 'table',
        views: 'view',
        procedures: 'procedure',
      };
      return {
        obj_type: typeMap[kind!.toLowerCase()] ?? kind,
        obj_name: objName,
      };
    }

    // --- PowerBuilder object documentation ---
    const objMatch =
      /^(?:docs\/)?objects\/(windows|datawindows|userobjects|functions|structures|menus)\/(.+)\.md$/i.exec(
        norm,
      );
    if (objMatch) {
      const [, kind, objName] = objMatch;
      const typeMap: Record<string, string> = {
        windows: 'window',
        datawindows: 'datawindow',
        userobjects: 'userobject',
        functions: 'function',
        structures: 'structure',
        menus: 'menu',
      };
      return {
        obj_type: typeMap[kind!.toLowerCase()] ?? kind,
        obj_name: objName,
      };
    }

    // --- Knowledge base files ---
    const knowledgeMatch =
      /^(?:docs\/)?knowledge\/([^/]+)\.md$/i.exec(norm);
    if (knowledgeMatch) {
      const [, knowledgeFile] = knowledgeMatch;
      const domain = this.extractDomainFromKnowledgeFile(
        `${knowledgeFile!}.md`,
      );
      return { obj_type: 'knowledge', domain };
    }

    // --- Business process documentation ---
    if (/^(?:docs\/)?flux\/.+\.md$/i.test(norm)) {
      return { obj_type: 'flux' };
    }

    // --- Library/module overviews ---
    if (/^(?:docs\/)?modules\/.+\.md$/i.test(norm)) {
      return { obj_type: 'module' };
    }

    // --- Fallback: no structured metadata derivable ---
    return {};
  }

  /**
   * Extract a human-readable domain identifier from a knowledge file name.
   *
   * The PMIX knowledge files follow the naming convention `NN-slug.md`.
   * This method strips the numeric prefix and returns the slug, with one
   * special case: `NN-routing-table.md` is condensed to `'routing'`.
   *
   * Examples:
   *   '00-routing-table.md'     → 'routing'
   *   '01-core-system.md'       → 'core-system'
   *   '04-masters-suppliers.md' → 'masters-suppliers'
   */
  extractDomainFromKnowledgeFile(filename: string): string {
    const base = basename(filename, extname(filename));

    // Routing-table special case.
    if (/^\d+-routing-table$/i.test(base)) {
      return 'routing';
    }

    // General: strip leading `NN-` digits-and-dash prefix.
    const withoutPrefix = base.replace(/^\d+-/, '');
    return withoutPrefix || base;
  }

  // -------------------------------------------------------------------------
  // Private helpers
  // -------------------------------------------------------------------------

  /**
   * Run a glob pattern rooted at `cwd` and return absolute paths.
   * Returns an empty array on any error (e.g. directory does not exist).
   */
  private async _globFiles(pattern: string, cwd: string): Promise<string[]> {
    try {
      return await glob(pattern, { cwd, absolute: true, nodir: true });
    } catch {
      return [];
    }
  }

  /**
   * Derive a fallback section title from a file path (used when a markdown
   * file has no headings).
   */
  private _titleFromPath(filePath: string): string {
    const norm = filePath.replace(/\\/g, '/');
    return basename(norm, extname(norm));
  }
}
