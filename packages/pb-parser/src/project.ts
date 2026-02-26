import { EXTENSION_MAP, type PBObjectType } from './types.js';

/**
 * All PowerBuilder source file extensions.
 */
export const PB_FILE_EXTENSIONS: readonly string[] = [
  '.srw', // window
  '.srd', // datawindow
  '.sru', // userobject
  '.srm', // menu
  '.srf', // function
  '.srs', // structure
  '.sra', // application
  '.srj', // project
  '.srp', // pipeline
  '.srq', // query
];

/**
 * Glob patterns to find all PowerBuilder source objects.
 */
export const PB_GLOB_PATTERNS: readonly string[] = [
  '**/*.srw',
  '**/*.srd',
  '**/*.sru',
  '**/*.srm',
  '**/*.srf',
  '**/*.srs',
  '**/*.sra',
  '**/*.srj',
  '**/*.srp',
  '**/*.srq',
];

/**
 * Returns the PBObjectType for a given file extension.
 * The extension must include the leading dot (e.g. ".srw").
 * Returns 'unknown' if the extension is not recognised.
 */
export function getObjectTypeFromExtension(ext: string): PBObjectType {
  const normalised = ext.toLowerCase();
  return EXTENSION_MAP[normalised] ?? 'unknown';
}

/**
 * Extracts the library name from a relative PB source path.
 *
 * PB paths follow the pattern:
 *   <library>/<library>.pbl/<object>.<ext>
 *
 * Examples:
 *   "_ancestor/_ancestor.pbl/w_main.srw"  → "_ancestor"
 *   "_sales/_sales.pbl/w_invoice.srw"      → "_sales"
 *   "w_orphan.srw"                          → ""  (no library segment)
 *
 * The function splits on forward slashes (or backslashes) and returns the
 * first path segment when it does not look like a raw file (i.e. the path
 * has more than one segment).  An empty string is returned when no library
 * can be resolved.
 */
export function resolveLibraryFromPath(relativePath: string): string {
  // Normalise separators.
  const normalised = relativePath.replace(/\\/g, '/');
  const parts = normalised.split('/').filter((p) => p.length > 0);

  if (parts.length < 2) {
    // Single filename with no directory — no library.
    return '';
  }

  // The first segment is always the library directory name.
  return parts[0] ?? '';
}
