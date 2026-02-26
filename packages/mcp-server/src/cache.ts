import { readFile } from 'node:fs/promises';
import * as nodePath from 'node:path';
import { glob } from 'glob';
import {
  type PBObject,
  type PBObjectType,
  getObjectTypeFromExtension,
  resolveLibraryFromPath,
  parseFunctions,
  parseEvents,
  parseInstanceVariables,
  parseAncestor,
  PB_GLOB_PATTERNS,
} from '@pb-toolkit/parser';

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function buildObjectFromFile(
  absolutePath: string,
  solutionPath: string,
  content: string,
): PBObject {
  const relativePath = nodePath
    .relative(solutionPath, absolutePath)
    .replace(/\\/g, '/');

  const ext = nodePath.extname(absolutePath).toLowerCase();
  const type = getObjectTypeFromExtension(ext);
  const library = resolveLibraryFromPath(relativePath);

  const ancestorInfo = parseAncestor(content);
  const functions = parseFunctions(content);
  const events = parseEvents(content);
  const instanceVariables = parseInstanceVariables(content);

  const lineCount = content.split(/\r?\n/).length;
  const sizeBytes = Buffer.byteLength(content, 'utf-8');

  const name =
    ancestorInfo?.name ?? nodePath.basename(absolutePath, ext);

  return {
    name,
    type,
    filePath: absolutePath,
    relativePath,
    ancestor: ancestorInfo?.ancestor,
    ancestorLibrary: ancestorInfo?.ancestorLibrary,
    library,
    functions,
    events,
    instanceVariables,
    lineCount,
    sizeBytes,
  };
}

// ---------------------------------------------------------------------------
// PBCache
// ---------------------------------------------------------------------------

export class PBCache {
  private readonly objects: Map<string, PBObject> = new Map();
  private readonly byType: Map<PBObjectType, PBObject[]> = new Map();
  private readonly byName: Map<string, PBObject> = new Map();

  private _initialized = false;
  private _solutionPath = '';

  // ---------------------------------------------------------------------------
  // State queries
  // ---------------------------------------------------------------------------

  isInitialized(): boolean {
    return this._initialized;
  }

  getObjectCount(): number {
    return this.objects.size;
  }

  getSolutionPath(): string {
    return this._solutionPath;
  }

  // ---------------------------------------------------------------------------
  // Initialisation
  // ---------------------------------------------------------------------------

  async initialize(solutionPath: string): Promise<void> {
    this._solutionPath = nodePath.resolve(solutionPath);

    // Clear existing data in case of re-initialisation.
    this.objects.clear();
    this.byType.clear();
    this.byName.clear();

    console.error(`[PBCache] Scanning: ${this._solutionPath}`);

    const files = await glob(PB_GLOB_PATTERNS as string[], {
      cwd: this._solutionPath,
      absolute: true,
      nodir: true,
    });

    console.error(`[PBCache] Found ${files.length} source files`);

    let processed = 0;
    let errors = 0;

    for (const filePath of files) {
      try {
        const content = await readFile(filePath, { encoding: 'utf-8' });

        // Skip binary/empty reads.
        if (!content || content.includes('\x00')) {
          errors++;
          continue;
        }

        const parsedObj = buildObjectFromFile(filePath, this._solutionPath, content);
        this._addToIndexes(parsedObj);
        processed++;
      } catch {
        // Silently skip corrupt / unreadable files.
        errors++;
      }
    }

    this._initialized = true;
    console.error(
      `[PBCache] Indexed ${processed} objects (${errors} skipped)`,
    );
  }

  // ---------------------------------------------------------------------------
  // Index management
  // ---------------------------------------------------------------------------

  private _addToIndexes(obj: PBObject): void {
    this.objects.set(obj.relativePath, obj);
    this.byName.set(obj.name.toLowerCase(), obj);

    const existing = this.byType.get(obj.type);
    if (existing) {
      existing.push(obj);
    } else {
      this.byType.set(obj.type, [obj]);
    }
  }

  private _removeFromIndexes(obj: PBObject): void {
    this.objects.delete(obj.relativePath);
    this.byName.delete(obj.name.toLowerCase());

    const typeList = this.byType.get(obj.type);
    if (typeList) {
      const idx = typeList.indexOf(obj);
      if (idx !== -1) typeList.splice(idx, 1);
    }
  }

  // ---------------------------------------------------------------------------
  // Lookups
  // ---------------------------------------------------------------------------

  getAll(): PBObject[] {
    return Array.from(this.objects.values());
  }

  getByType(type: PBObjectType): PBObject[] {
    return this.byType.get(type) ?? [];
  }

  getByName(name: string): PBObject | undefined {
    return this.byName.get(name.toLowerCase());
  }

  getByPath(relativePath: string): PBObject | undefined {
    // Normalise separators for lookup.
    const normalised = relativePath.replace(/\\/g, '/');
    return this.objects.get(normalised);
  }

  // ---------------------------------------------------------------------------
  // Invalidation (single-file re-index)
  // ---------------------------------------------------------------------------

  async invalidate(filePath: string): Promise<void> {
    const absolutePath = nodePath.resolve(filePath);

    // Remove old entry if it exists.
    const relativePath = nodePath
      .relative(this._solutionPath, absolutePath)
      .replace(/\\/g, '/');

    const existing = this.objects.get(relativePath);
    if (existing) {
      this._removeFromIndexes(existing);
    }

    try {
      const content = await readFile(absolutePath, { encoding: 'utf-8' });
      if (!content || content.includes('\x00')) return;

      const obj = buildObjectFromFile(absolutePath, this._solutionPath, content);
      this._addToIndexes(obj);
    } catch {
      // File deleted or unreadable — removal already handled above.
    }
  }
}
