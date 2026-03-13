# PowerBuilder Toolkit — Claude Code Instructions

## Projet

Ecosysteme complet pour le developpement PowerBuilder 2025 assiste par Claude Code.
Monorepo npm workspaces, TypeScript strict, ES2022, Node16 modules.

**Repo unique** : `powerbuilder-toolkit` est la seule source de verite. Le repo `pmix-plugins` est **deprece** — ne JAMAIS y committer.

## Architecture

```
powerbuilder-toolkit/
├── packages/
│   ├── pb-parser/         # Parsers PowerScript, DataWindow, projets
│   ├── mcp-server/        # Serveur MCP — 30 outils (v0.2.0, Full Build par defaut)
│   ├── claude-plugin/     # Plugin Claude Code (powerbuilder-dev)
│   └── data/              # DB RAG embarquee (sqlite)
├── data/                  # DB RAG runtime (~70MB, gitignored)
├── docs/                  # Base de connaissances PMIX (~6800 fichiers markdown)
│   ├── knowledge/         # 20 fichiers knowledge + routing table
│   ├── flux/              # 12 processus metier documentes
│   ├── database/          # Schema, tables, vues, procedures
│   ├── objects/           # Windows, DW, UO, functions, menus, structures
│   └── modules/           # 49 overviews de modules PB
├── references/            # Screenshots de reference (tests visuels)
└── .claude-plugin/        # marketplace.json
```

## Stack technique

- **Runtime** : Node.js, TypeScript 5.7+, ES2022
- **Config** : `tsconfig.base.json` herite par chaque package
- **Tests** : Vitest — `npm test` (255 tests, 7 skips Windows-only)
- **Build** : `npm run build` (tsc pour chaque package)
- **MCP SDK** : `@modelcontextprotocol/sdk` v1.27+
- **Validation** : Zod v3
- **RAG** : better-sqlite3 + FTS5 + @huggingface/transformers (all-MiniLM-L6-v2, 384 dims)
- **Visual bridge** : Python (pywinauto) — `visual-bridge.py` dans mcp-server

## Commandes

```bash
npm install          # installer deps (depuis la racine)
npm run build        # compiler tous les packages
npm test             # lancer les 255 tests vitest
npm run clean        # supprimer dist/
```

## Outils MCP (30 total)

### Exploration (6)
`pb_list_objects`, `pb_read_object`, `pb_search_code`, `pb_get_project_structure`, `pb_refresh_cache`, `pb_get_datawindow_sql`

### Analyse (4)
`pb_get_inheritance`, `pb_get_dependencies`, `pb_get_object_summary`, `pb_get_call_graph`

### Modification (2)
`pb_modify_script`, `pb_create_object`

### Compilation (3)
`pb_compile`, `pb_validate_syntax`, `pb_copy_pbds`

### Tests visuels (7)
`pb_launch_app`, `pb_screenshot_window`, `pb_list_controls`, `pb_dw_get_columns`, `pb_interact_control`, `pb_save_reference`, `pb_visual_compare`

### RAG PMIX (5)
`pmix_search`, `pmix_lookup`, `pmix_correct`, `pmix_learn`, `pmix_reindex`

### Database PMIX (3)
`pmix_sql`, `pmix_tables`, `pmix_describe`

## Plugin Claude Code (powerbuilder-dev v0.7.0)

### Skills (10)
| Skill | Usage |
|-------|-------|
| pb-modify | Workflow obligatoire pour modifier du code PB |
| pb-analyze | Comprendre un objet existant |
| pb-debug | Diagnostic systematique de bugs |
| pb-create | Creer un nouvel objet PB |
| pb-test | Tester apres modification (launch + screenshot) |
| pb-datawindow | Creer/modifier/optimiser des DataWindows |
| pmix-navigate | Question sur PMIX (routage RAG) |
| pmix-flux | Documentation processus metier |
| pmix-impact | Analyse d'impact d'une modification |
| pmix-onboard | Onboarding nouveau projet client PMIX |

### Agents (4)
| Agent | Usage |
|-------|-------|
| pb-analyst | Analyse approfondie (heritage, deps, call graph) |
| pb-code-reviewer | Revue de code PB |
| pb-impact-checker | Impact analysis avant modification |
| pmix-researcher | Recherche PMIX approfondie |

### Commandes (3)
`/pb-setup`, `/pb-status`, `/pb-validate`

### Hooks
- **PostToolUse** (Edit/Write sur `.sr*`) : rappel de compilation
- **PreToolUse** (pb_launch_app) : copie automatique des PBDs vers le dossier exe

## Git

- Branche locale : `master`
- Remote GitHub (`github`) : `main`
- Push : `git push github master:main`
- Commits en anglais, format conventionnel : `feat(scope):`, `fix(scope):`, `chore:`

## Conventions de code

### TypeScript (packages/)
- Strict mode, pas de `any` sauf necessite documentee
- ESM (`import`/`export`), pas de CommonJS
- Fonctions `register*Tools(server, cache, ...)` dans chaque fichier tools/
- `server.registerTool('tool_name', ...)` avec schema Zod

### PowerBuilder (fichiers source .sr*)
- Encodage : UTF-8 BOM (`\uFEFF`) + `forward` header (pas `$PBExportHeader$`)
- Line endings : CRLF (`\r\n`) — les params MCP arrivent en LF, normaliser avant matching
- Nommage : `w_` (windows), `nvo_` (non-visual), `uo_` (user objects), `d_` (datawindows)
- Heritage : tout descend de `_ancestor`

## Pieges connus

- **PBDs disperses** : Les PBDs compiles atterrissent dans des sous-dossiers, pas a cote de l'exe. `pb_launch_app` copie automatiquement les PBDs manquants (param `copy_pbds: true`).
- **CRLF** : Toujours normaliser LF→CRLF avant de modifier un fichier PB source.
- **DPI scaling** : Utiliser `click_input()` (pas `click()`) dans pywinauto.
- **MDI children** : Pas des fenetres separees — acceder via la fenetre MDI principale.
- **MCP schema changes** : Changements de params/enum necessitent restart du serveur MCP.
- **Regex parens PB** : Les attributs `.srd` contiennent `rgb(...)`, `~tif(...)` — utiliser extraction par parens equilibrees, pas `[^)]*`.

## Langue

Communiquer en **francais** avec l'utilisateur.
Code, commits, et noms techniques en **anglais**.
