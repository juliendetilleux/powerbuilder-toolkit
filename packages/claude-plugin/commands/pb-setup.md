---
description: Full PowerBuilder project setup — installs toolkit, generates CLAUDE.md and .mcp.json. Zero manual steps.
argument-hint: "[solution-path]"
---

# PowerBuilder Project Setup — Fully Automated

This command sets up everything needed to develop a PowerBuilder project with Claude Code.
It handles toolkit installation, project analysis, CLAUDE.md generation, and MCP configuration.

## Step 1: Install PB-Toolkit (if needed)

The toolkit is in the same GitHub repo as this plugin (`juliendetilleux/powerbuilder-toolkit`).

### 1a. Locate the toolkit

Check these locations in order:
1. Read `~/.claude/pb-toolkit-path.txt` — if it exists and points to a valid `server.js`, skip to Step 1c
2. Check: `~/Claude/Code/powerbuilder-toolkit/packages/mcp-server/dist/server.js`

### 1b. Install if not found

```bash
git clone https://github.com/juliendetilleux/powerbuilder-toolkit.git "$HOME/Claude/Code/powerbuilder-toolkit"
cd "$HOME/Claude/Code/powerbuilder-toolkit"

# Install dependencies
npm install

# Build in the correct order (parser must be built BEFORE mcp-server)
cd packages/pb-parser && npm run build
cd ../mcp-server && npm run build
```

Verify the build succeeded: `test -f packages/mcp-server/dist/server.js`

### 1c. Update if already installed (check for RAG tools)

If the toolkit is found but `packages/mcp-server/src/tools/rag.ts` does NOT exist, the toolkit is outdated:

```bash
cd "$HOME/Claude/Code/powerbuilder-toolkit"
git pull
npm install
cd packages/pb-parser && npm run build
cd ../mcp-server && npm run build
```

### 1d. Save the toolkit path

```bash
echo "<toolkit-dir>/packages/mcp-server/dist/server.js" > ~/.claude/pb-toolkit-path.txt
```

**IMPORTANT**: Verify the `server.js` file actually exists at the saved path before proceeding.

## Step 2: Analyze the project

Use MCP tools to analyze the PowerBuilder project:

1. `pb_get_project_structure` — get libraries, object counts, build config
2. `pb_get_inheritance` on key ancestor objects (w_response, w_main, etc.)
3. Sample object names across the project to detect naming conventions
4. Read the `.pbproj` file for build configuration
5. Detect the PowerBuilder version from the `.pbproj` file — look for `MajorVersion` and `MinorVersion` elements or the `pbVersion` attribute. Common versions: 2019R3 (19.2), 2022 (22.0), 2025 (25.0).

If MCP tools are not yet available (first run before .mcp.json exists), read the `.pbproj` file directly and scan for `.pbl` directories to gather basic info.

## Step 3: Generate CLAUDE.md

Write a comprehensive CLAUDE.md at the project root with these sections:

### Required sections (all projects):
- **Project Overview**: app name, version, library count, object counts by type, database info
- **Architecture**: key libraries and roles, inheritance hierarchy, module organization
- **Naming Conventions**: detected naming patterns
- **Build & Deploy**: PBAutoBuild250 command, PBD copy step, launch instructions
- **Development Workflow**: reference pb-modify, pb-debug, pb-create skills
- **Key Objects**: ancestor objects and most referenced objects
- **MCP Tools Available**: list all pb_* tools with descriptions
- **Important Rules**: language=French, never edit forward/on create/on destroy, check inheritance, compile after mods

### PMIX-specific sections (if PMIX project):

Detect PMIX by checking for libraries. A project is PMIX if it contains at least 2 of these libraries: `_sysxtra`, `Cust_Empty`, `_sales`, `_masters`, `_stock`, `_manufacturing`.
If PMIX, add these additional sections:

```markdown
## Auto-detection nouveau projet
Si `.pmix-client.json` n'existe pas a la racine, invoquer le skill pmix-onboard
avant toute autre action. Ce skill scanne les libraries custom, identifie le client,
indexe le code specifique dans le RAG, et genere un resume du projet.

## RAG — Base de connaissances PMIX

### Base standard (incluse)
La base RAG standard (`pmix-standard.db`) contient ~17200 chunks couvrant :
- Architecture PMIX, modules, fenetres, DataWindows
- 428 tables, 175 vues, 82 procedures stockees
- 12 flux metier detailles (vente, achat, stock, fabrication, etc.)
- Patterns UI, regles universelles, DDDWs

### Base custom (a initialiser)
La partie custom du RAG indexe le code specifique au client (`Cust_*`, `_sysxtra`).
Elle est initialisee automatiquement par le skill `pmix-onboard` ou manuellement via `pmix_reindex`.

### Outils RAG
- `pmix_search` — recherche hybride FTS5 + semantique
- `pmix_lookup` — lookup direct par nom d'objet/table
- `pmix_correct` — corriger une doc erronee
- `pmix_learn` — ajouter une connaissance apprise
- `pmix_reindex` — re-indexer les docs

### REGLE ABSOLUE : TOUJOURS consulter le RAG AVANT d'agir
Avant toute action sur PMIX (modification, creation, navigation GUI, debug) :
1. Utiliser `pmix_search` ou `pmix_lookup` pour comprendre le contexte
2. Verifier les tables, fenetres, et flux concernes
3. Puis seulement agir en connaissance de cause
Ne JAMAIS deviner ou improviser sans avoir consulte le RAG d'abord.
Ne JAMAIS utiliser Grep/Read sur le dossier `docs/` — utiliser le RAG a la place.

## Skills disponibles

### Skills PowerBuilder (generiques)
- **pb-analyze** — Explorer l'architecture, heritage, dependances, flux de donnees
- **pb-modify** — Modifier du code PB (workflow obligatoire en 5 etapes)
- **pb-debug** — Diagnostiquer bugs et comportements inattendus
- **pb-create** — Creer de nouveaux objets PB

### Skills PMIX (specifiques)
- **pmix-navigate** — Repondre a toute question PMIX via le RAG
- **pmix-flux** — Documenter et expliquer les processus metier
- **pmix-impact** — Analyser l'impact d'une modification sur les flux
- **pmix-onboard** — Initialiser un nouveau projet PMIX (scan custom, indexation RAG)
```

## Step 4: Generate .mcp.json

Create or fix `.mcp.json` at the project root. Read the toolkit path from `~/.claude/pb-toolkit-path.txt`.

**IMPORTANT**: If `.mcp.json` already exists but contains placeholders like `<SERVER_JS_PATH>`, fix them.

Detect the project layout:
- Find the `.pbproj` file location
- Find the compiled `.exe` (usually in same dir as .pbproj, or in a `pmix/` subdir)
- Use the toolkit directory (parent of `packages/`) for `PB_REFERENCES_DIR`

```json
{
  "mcpServers": {
    "powerbuilder": {
      "command": "node",
      "args": ["<SERVER_JS_PATH>"],
      "env": {
        "PB_SOLUTION_PATH": "<PROJECT_ROOT>",
        "PB_EXE_PATH": "<PROJECT_ROOT>/<exe_relative_path>",
        "PB_REFERENCES_DIR": "<TOOLKIT_DIR>/references",
        "PYTHON_EXE": "py"
      }
    }
  }
}
```

All paths must use **forward slashes**. Replace all placeholders with actual absolute paths.

## Step 4b: Verify MCP connection (PB tools + RAG tools)

After generating `.mcp.json`, verify that **both** PB tools and RAG tools are operational.

### Test 1: PB tools
Call `pb_get_project_structure` to verify the PB cache works.

- **If it succeeds**: Log "PB tools OK" and continue to Test 2.
- **If it fails**: Run diagnostics (see below) and stop.

### Test 2: RAG tools (critical for PMIX projects)
Call `pmix_search` with query `"architecture PMIX"` (or any simple query).

- **If it succeeds and returns results**: Log "RAG OK — N chunks indexed" and continue to Step 5.
- **If it succeeds but returns 0 results**: The RAG database is empty. Run `pmix_reindex` to force a full re-indexation, then retry `pmix_search`.
- **If `pmix_search` is not available as a tool**: The MCP server may not have loaded correctly. See diagnostics below.

### Test 3: Database tools (optional — requires SQL Anywhere)
Call `pmix_tables` with filter `"purcontract"` (or any known table).

- **If it succeeds**: Log "DB tools OK".
- **If it fails**: Log "DB tools unavailable (SQL Anywhere non connecte)" — this is normal if no database is running.

### Diagnostics (if any test fails)

1. Check that `node` is installed and accessible (`node --version`).
2. Verify that the `server.js` path stored in `~/.claude/pb-toolkit-path.txt` actually exists on disk.
3. Check whether the MCP server process started correctly (look for startup errors in the MCP log).
4. Ensure all paths in `.mcp.json` use forward slashes and contain no remaining placeholders.
5. **If only RAG tools fail**: check that `better-sqlite3` native module compiled correctly:
   ```bash
   cd <toolkit-dir> && node -e "require('better-sqlite3'); console.log('OK')"
   ```
   If this fails, reinstall with: `cd packages/mcp-server && npm rebuild better-sqlite3`
6. **If tools are registered but RAG returns 0 results**: verify the `docs/` directory exists in the toolkit:
   ```bash
   ls <toolkit-dir>/docs/
   ```
   Then force reindex: call `pmix_reindex`.

## Step 5: Final instructions

After generating everything, present a **status summary** to the user:

```
=== PB-SETUP COMPLETE ===
Toolkit:    ✅ installed at <path>
CLAUDE.md:  ✅ generated
.mcp.json:  ✅ generated
PB tools:   ✅ / ❌ (pb_get_project_structure)
RAG tools:  ✅ / ❌ (pmix_search — N chunks)
DB tools:   ✅ / ❌ / ⏭️ skipped
```

Then tell the user:

1. **If all tests passed**: Everything is ready. If PMIX project: run `/pmix-onboard` to initialize the RAG for this specific client.
2. **If tests failed because .mcp.json was just created**: **Restart Claude Code** to activate the MCP server, then re-run `/pb-setup` to verify.
3. **If RAG tools failed after restart**: Follow the diagnostics in Step 4b to fix `better-sqlite3` or re-index the docs.

## Summary of what pb-setup creates:
- `~/.claude/pb-toolkit-path.txt` — toolkit location (shared across all projects)
- `CLAUDE.md` — project documentation for Claude
- `.mcp.json` — MCP server configuration
- Toolkit installed at `~/Claude/Code/powerbuilder-toolkit/` (cloned from same repo as plugin)
