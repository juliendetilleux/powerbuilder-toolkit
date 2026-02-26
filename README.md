# PowerBuilder Toolkit

Ecosysteme complet pour le developpement PowerBuilder 2025 assiste par Claude Code.

## Packages

### @pb-toolkit/parser
Parsers TypeScript pour le code PowerScript — fonctions, events, variables, heritage, DataWindows, structure de projet.

### @pb-toolkit/mcp-server
Serveur MCP (Model Context Protocol) avec 14 outils pour l'exploration, l'analyse, la modification, la compilation et les tests visuels d'applications PowerBuilder.

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

### Exploration
| Outil | Description |
|-------|-------------|
| `pb_list_objects` | Lister tous les objets PB (cache) |
| `pb_read_object` | Lire le source + metadata parsee |
| `pb_search_code` | Recherche regex dans tout le code |
| `pb_get_project_structure` | Structure complete de la solution |

### Analyse
| Outil | Description |
|-------|-------------|
| `pb_get_inheritance` | Arbre d'heritage (ancestors + descendants) |
| `pb_get_dependencies` | References croisees |
| `pb_get_object_summary` | Resume intelligent d'un objet |
| `pb_get_call_graph` | Trace des appels de fonctions |

### Modification
| Outil | Description |
|-------|-------------|
| `pb_modify_script` | Find & replace securise avec backup |
| `pb_create_object` | Creer un nouvel objet PB |

### Compilation
| Outil | Description |
|-------|-------------|
| `pb_compile` | Compiler avec PBAutoBuild250 |
| `pb_validate_syntax` | Validation syntaxe legere |

### Tests visuels
| Outil | Description |
|-------|-------------|
| `pb_launch_app` | Lancer l'application PB |
| `pb_screenshot_window` | Capturer un screenshot |
| `pb_list_controls` | Lister les controles Win32 |
| `pb_interact_control` | Cliquer, remplir, lire |
| `pb_save_reference` | Sauvegarder une reference visuelle |
| `pb_visual_compare` | Comparaison pixel par pixel |

## Tests

```bash
npm test
```

179 tests (94 parser + 85 MCP server), 7 skips pour tests visuels Windows.

## Licence

MIT
