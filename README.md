# PowerBuilder Toolkit

Ecosysteme complet pour le developpement PowerBuilder 2025 assiste par Claude Code.

## Packages

### @pb-toolkit/parser
Parsers TypeScript pour le code PowerScript — fonctions, events, variables, heritage, DataWindows, structure de projet.

### @pb-toolkit/mcp-server
Serveur MCP (Model Context Protocol) avec 21 outils pour l'exploration, l'analyse, la modification, la compilation et les tests visuels d'applications PowerBuilder.

### claude-plugin (powerbuilder-dev)
Plugin Claude Code avec 4 skills (pb-modify, pb-debug, pb-analyze, pb-create), 1 commande (/pb-setup), et des hooks de validation.

## Installation rapide

### 1. Installer les dependances
```bash
cd powerbuilder-toolkit
npm install
```

### 2. Compiler
```bash
npm run build
```

### 3. Configurer pour un projet PB

Creer un `.mcp.json` a la racine de votre projet PowerBuilder :

```json
{
  "mcpServers": {
    "powerbuilder": {
      "command": "node",
      "args": ["/chemin/vers/powerbuilder-toolkit/packages/mcp-server/dist/server.js"],
      "env": {
        "PB_SOLUTION_PATH": "/chemin/vers/votre/projet-pb",
        "PB_EXE_PATH": "/chemin/vers/votre/app.exe",
        "PYTHON_EXE": "python"
      }
    }
  }
}
```

### 4. Installer le plugin Claude Code

Copier ou lier `packages/claude-plugin/` dans votre configuration de plugins Claude Code.

## Outils MCP disponibles

### Exploration (6 outils)
| Outil | Description |
|-------|-------------|
| `pb_list_objects` | Lister tous les objets PB (cache, pagination) |
| `pb_read_object` | Lire le source + metadata parsee (accepte un nom d'objet) |
| `pb_search_code` | Recherche regex dans tout le code (cache memoire) |
| `pb_get_project_structure` | Structure complete de la solution |
| `pb_refresh_cache` | Re-scanner le dossier solution |
| `pb_get_datawindow_sql` | Extraire SQL, colonnes, update props, computed fields |

### Analyse (4 outils)
| Outil | Description |
|-------|-------------|
| `pb_get_inheritance` | Arbre d'heritage (ancestors + descendants, pagination) |
| `pb_get_dependencies` | References croisees (cache memoire) |
| `pb_get_object_summary` | Resume intelligent d'un objet |
| `pb_get_call_graph` | Trace des appels de fonctions |

### Modification (2 outils)
| Outil | Description |
|-------|-------------|
| `pb_modify_script` | Find & replace securise avec backup (CRLF-aware) |
| `pb_create_object` | Creer un nouvel objet PB (BOM UTF-8, format source) |

### Compilation (2 outils)
| Outil | Description |
|-------|-------------|
| `pb_compile` | Compiler avec PBAutoBuild250 |
| `pb_validate_syntax` | Validation syntaxe legere |

### Tests visuels (7 outils)
| Outil | Description |
|-------|-------------|
| `pb_launch_app` | Lancer l'application PB |
| `pb_screenshot_window` | Capturer un screenshot (retourne image inline) |
| `pb_list_controls` | Lister les controles Win32 (avec handles hex) |
| `pb_dw_get_columns` | Layout DW : positions PBU + pixel (freeform/tabular) |
| `pb_interact_control` | Cliquer, remplir, lire, actions DW |
| `pb_save_reference` | Sauvegarder une reference visuelle |
| `pb_visual_compare` | Comparaison pixel par pixel |

## Tests

```bash
npm test
```

255 tests (106 parser + 149 MCP server), 7 skips pour tests visuels Windows-only.

## Licence

MIT
