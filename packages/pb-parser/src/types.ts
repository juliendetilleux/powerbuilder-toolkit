export type PBObjectType =
  | 'window'
  | 'datawindow'
  | 'userobject'
  | 'menu'
  | 'function'
  | 'structure'
  | 'application'
  | 'project'
  | 'pipeline'
  | 'query'
  | 'unknown';

export const EXTENSION_MAP: Record<string, PBObjectType> = {
  '.srw': 'window',
  '.srd': 'datawindow',
  '.sru': 'userobject',
  '.srm': 'menu',
  '.srf': 'function',
  '.srs': 'structure',
  '.sra': 'application',
  '.srj': 'project',
  '.srp': 'pipeline',
  '.srq': 'query',
};

export type PBAccess = 'public' | 'private' | 'protected';

export interface PBParam {
  name: string;
  type: string;
  passBy: 'value' | 'reference' | 'readonly';
}

export interface PBFunction {
  name: string;
  returnType: string;
  access: PBAccess;
  params: PBParam[];
  lineStart: number;
  lineEnd: number;
  isEvent: boolean;
}

export interface PBEvent {
  name: string;
  lineStart: number;
  lineEnd: number;
  hasScript: boolean;
  params: PBParam[];
}

export interface PBVariable {
  name: string;
  type: string;
  access: PBAccess;
  defaultValue?: string;
  lineNumber: number;
}

export interface PBObject {
  name: string;
  type: PBObjectType;
  filePath: string;
  relativePath: string;
  ancestor?: string;
  ancestorLibrary?: string;
  library: string;
  functions: PBFunction[];
  events: PBEvent[];
  instanceVariables: PBVariable[];
  lineCount: number;
  sizeBytes: number;
}

export interface PBDataWindowColumn {
  name: string;
  dbName: string;
  type: string;
  band: string;
}

export interface PBDataWindow extends PBObject {
  sql?: string;
  columns: PBDataWindowColumn[];
  arguments: PBParam[];
  dataSource: 'sql' | 'stored_procedure' | 'external' | 'unknown';
}

export interface PBLibrary {
  name: string;
  path: string;
  objectCounts: Partial<Record<PBObjectType, number>>;
  totalObjects: number;
}

export interface PBProjectStructure {
  solutionPath: string;
  solutionFiles: string[];
  projectFiles: string[];
  libraries: PBLibrary[];
  summary: {
    totalObjects: number;
    totalLibraries: number;
    objectsByType: Record<string, number>;
  };
}
