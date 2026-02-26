# @pb-toolkit/mcp-server

Serveur MCP (Model Context Protocol) pour le developpement PowerBuilder 2025.

Expose 14+ outils permettant a Claude Code d'explorer, analyser, modifier, compiler et tester visuellement des applications PowerBuilder.

## Utilisation standalone

### 1. Compiler

```bash
cd packages/mcp-server
npm install
npm run build
```

### 2. Configurer dans `.mcp.json`

```json
{
  "mcpServers": {
    "powerbuilder": {
      "command": "node",
      "args": ["/chemin/vers/packages/mcp-server/dist/server.js"],
      "env": {
        "PB_SOLUTION_PATH": "/chemin/vers/votre/projet-pb",
        "PB_EXE_PATH": "/chemin/vers/votre/app.exe",
        "PYTHON_EXE": "python"
      }
    }
  }
}
```

### Variables d'environnement

| Variable | Description | Obligatoire |
|----------|-------------|-------------|
| `PB_SOLUTION_PATH` | Chemin vers le dossier de la solution PB | Oui |
| `PB_EXE_PATH` | Chemin vers l'executable de l'application | Non (tests visuels) |
| `PYTHON_EXE` | Chemin vers Python (pour pywinauto) | Non (tests visuels) |

### 3. Lancer en mode developpement

```bash
npm run dev
```

## Outils exposes

- **Exploration** : `pb_list_objects`, `pb_read_object`, `pb_search_code`, `pb_get_project_structure`
- **Analyse** : `pb_get_inheritance`, `pb_get_dependencies`, `pb_get_object_summary`, `pb_get_call_graph`
- **Modification** : `pb_modify_script`, `pb_create_object`
- **Compilation** : `pb_compile`, `pb_validate_syntax`
- **Tests visuels** : `pb_launch_app`, `pb_screenshot_window`, `pb_list_controls`, `pb_interact_control`, `pb_save_reference`, `pb_visual_compare`

## Tests

```bash
npm test
```

85 tests unitaires. Les tests visuels (pywinauto) sont skip sur les environnements non-Windows.

## Licence

MIT
