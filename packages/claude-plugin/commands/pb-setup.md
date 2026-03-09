---
description: Full PowerBuilder project setup — installs toolkit, generates CLAUDE.md and .mcp.json. Zero manual steps.
argument-hint: "[solution-path]"
---

# PowerBuilder Project Setup — Fully Automated

This command sets up everything needed to develop a PowerBuilder project with Claude Code.
It handles toolkit installation, project analysis, CLAUDE.md generation, and MCP configuration.

## Step 1: Install PB-Toolkit (if needed)

Check if PB-Toolkit is already installed:

1. Read `~/.claude/pb-toolkit-path.txt` — if it exists and points to a valid `server.js`, skip to Step 2
2. Check common locations:
   - `C:/Program Files/PB-Toolkit/packages/mcp-server/dist/server.js`
   - `C:/Program Files (x86)/PB-Toolkit/packages/mcp-server/dist/server.js`
   - `~/Claude/Code/powerbuilder-toolkit/packages/mcp-server/dist/server.js`
3. If not found anywhere, **install it automatically**:

```bash
# Clone the toolkit
git clone https://github.com/juliendetilleux/powerbuilder-toolkit.git "$HOME/Claude/Code/powerbuilder-toolkit"
cd "$HOME/Claude/Code/powerbuilder-toolkit"

# Install dependencies and build
npm install
npm run build
```

4. After install or discovery, save the path:

```bash
echo "C:/Users/$USER/Claude/Code/powerbuilder-toolkit/packages/mcp-server/dist/server.js" > ~/.claude/pb-toolkit-path.txt
```

**IMPORTANT**: Verify the `server.js` file actually exists at the saved path before proceeding.

## Step 2: Analyze the project

Use MCP tools to analyze the PowerBuilder project:

1. `pb_get_project_structure` — get libraries, object counts, build config
2. `pb_get_inheritance` on key ancestor objects (w_response, w_main, etc.)
3. Sample object names across the project to detect naming conventions
4. Read the `.pbproj` file for build configuration

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

Detect PMIX by checking for libraries: `_sysxtra`, `Cust_Empty`, `_sales`, `_masters`.
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

## Step 5: Final instructions

After generating everything, tell the user:

1. **Restart Claude Code** to activate the MCP server
2. After restart, all `pb_*` and `pmix_*` tools will be available
3. If PMIX project: run `/pmix-onboard` after restart to initialize the RAG for this specific client

## Summary of what pb-setup creates:
- `~/.claude/pb-toolkit-path.txt` — toolkit location (shared across all projects)
- `CLAUDE.md` — project documentation for Claude
- `.mcp.json` — MCP server configuration
- PB-Toolkit installed at `~/Claude/Code/powerbuilder-toolkit/` (if not already present)
