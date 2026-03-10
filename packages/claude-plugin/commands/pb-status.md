---
description: Show current PowerBuilder project status — toolkit, MCP connection, project structure, PMIX info, and git status.
---

# PowerBuilder Project Status

Display a comprehensive status report of the current PowerBuilder project environment.

## Step 1: Check Toolkit

1. Read `~/.claude/pb-toolkit-path.txt` to find the toolkit path
2. Verify the `server.js` file exists at that path
3. Report: path, exists (yes/no)

## Step 2: Check MCP Connection

1. Try calling `pb_get_project_structure` — if it works, MCP is connected
2. If it fails, report "MCP non connecte" and suggest running `/pb-setup`
3. If connected, count available tools

## Step 3: Project Information

If MCP is connected:
1. Use `pb_get_project_structure` to get:
   - Project name and path
   - Number of libraries
   - Object counts by type (windows, DataWindows, user objects, menus)
   - Build configuration

## Step 4: PMIX Information (if applicable)

1. Check if `.pmix-client.json` exists at the project root
2. If yes, read it and display:
   - Client ID
   - Build number
   - Custom libraries and object counts
   - RAG status (indexed or not)
3. If no, check if this is a PMIX project (look for `_sysxtra`, `Cust_Empty` libraries)
   - If PMIX: suggest running `/pmix-onboard`
   - If not PMIX: skip this section

## Step 5: Git Status

1. Run `git status` for the current branch and modified files count
2. Run `git log --oneline -3` for recent commits

## Output Format

Display the report in this format:

```
=== Projet PowerBuilder ===
Nom       : [project name]
Chemin    : [path]
Libraries : [count]
Objets    : [windows] fenetres | [dw] DataWindows | [nvo] NVO | [menus] menus

=== Toolkit ===
Chemin : [path to server.js]
Statut : Installe / Non trouve

=== MCP ===
Serveur : powerbuilder
Statut  : Connecte / Non connecte
Outils  : [count] disponibles

=== PMIX ===
Client       : [cust_id] (ou "Non initialise — lancer /pmix-onboard")
Build        : [cust_builtno]
Libs custom  : [count] ([names])
RAG          : [chunks] chunks indexes

=== Git ===
Branche          : [branch]
Fichiers modifies : [count]
Derniers commits :
  [hash] [message]
  [hash] [message]
  [hash] [message]
```

If a section cannot be displayed (e.g., MCP not connected), show the section header with a clear error message and suggestion.
