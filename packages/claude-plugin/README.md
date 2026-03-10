# powerbuilder-dev — Claude Code Plugin

Plugin Claude Code pour le developpement PowerBuilder 2025, avec support PMIX ERP (PmiGest).

## Quick Start

```bash
# 1. Ajouter le marketplace
/marketplace add juliendetilleux/claude-plugins

# 2. Installer le plugin
/plugin install powerbuilder-dev

# 3. Redemarrer Claude Code, puis dans votre projet PB :
/pb-setup
```

## Agents vs Skills — quand utiliser quoi ?

Les **agents** sont des sous-agents autonomes lances en contexte isole pour des analyses lourdes.
Les **skills** sont des workflows integres dans la conversation pour guider l'action courante.

| Besoin | Utiliser | Type |
|--------|----------|------|
| Analyse approfondie d'un objet | `pb-analyst` | Agent |
| Comprendre un objet rapidement | `pb-analyze` | Skill |
| Revue de code formelle | `pb-code-reviewer` | Agent |
| Modifier du code PB | `pb-modify` | Skill |
| Impact analysis complete | `pb-impact-checker` | Agent |
| Impact rapide d'une petite modif | `pmix-impact` | Skill |
| Recherche PMIX approfondie | `pmix-researcher` | Agent |
| Question PMIX simple | `pmix-navigate` | Skill |

**Regle simple** : pour une action rapide → skill. Pour un rapport detaille → agent.

## Composants

### Agents (4)

| Agent | Description |
|-------|-------------|
| **pb-analyst** | Analyse approfondie d'objets PB — heritage, dependances, call graph |
| **pb-code-reviewer** | Revue de code — bugs, mauvaises pratiques, conventions PMIX |
| **pb-impact-checker** | Analyse d'impact avant modification — trace toutes les dependances |
| **pmix-researcher** | Recherche PMIX — processus metier, tables, flux via RAG |

### Skills (8)

| Skill | Trigger | Description |
|-------|---------|-------------|
| **pb-modify** | Toute modification de code PB | Workflow obligatoire en 5 etapes (read → heritage → deps → modify → validate) |
| **pb-analyze** | Comprendre un objet existant | Vue d'ensemble, heritage, dependances, patterns |
| **pb-debug** | Bug ou comportement inattendu | Diagnostic systematique avec format de sortie structure |
| **pb-create** | Creer un nouvel objet PB | Identification ancetre, library, creation, compilation |
| **pmix-navigate** | Question sur PMIX | Reponse via RAG (recherche hybride FTS5 + semantique) |
| **pmix-flux** | Processus metier PMIX | Documentation des 12 macro-flux (vente, achat, stock...) |
| **pmix-impact** | Impact d'une modification | Analyse rapide croisant RAG + dependances PB |
| **pmix-onboard** | Nouveau projet PMIX | Scan custom, identification client, indexation RAG |

### Commandes (1)

| Commande | Description |
|----------|-------------|
| `/pb-setup [path]` | Setup complet : installe le toolkit, analyse le projet, genere CLAUDE.md et .mcp.json |

### Hooks (1)

| Hook | Trigger | Action |
|------|---------|--------|
| PostToolUse | Edit/Write sur `.sr*` | Rappel de compilation |

## MCP Tools (21)

Tous les outils proviennent de `@pb-toolkit/mcp-server` :

**Analyse** : pb_list_objects, pb_read_object, pb_search_code, pb_get_project_structure, pb_get_inheritance, pb_get_dependencies, pb_get_object_summary, pb_get_call_graph, pb_get_datawindow_sql, pb_dw_get_columns

**Modification** : pb_modify_script, pb_create_object, pb_validate_syntax, pb_compile, pb_refresh_cache

**Test visuel** : pb_launch_app, pb_screenshot_window, pb_list_controls, pb_interact_control, pb_save_reference, pb_visual_compare

**PMIX** : pmix_search, pmix_lookup, pmix_sql, pmix_tables, pmix_describe

## Pre-requis

- Claude Code avec support plugins
- `@pb-toolkit/mcp-server` connecte (fournit les outils pb_* et pmix_*)
- PowerBuilder 2025 installe
- Variables d'environnement : `PB_SOLUTION_PATH`, `PB_EXE_PATH`

## Installation pour un collegue

```bash
/marketplace add juliendetilleux/claude-plugins
/plugin install powerbuilder-dev
# Redemarrer Claude Code
# Dans le projet PB : /pb-setup
```
