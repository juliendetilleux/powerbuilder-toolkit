---
description: Generate CLAUDE.md for a PowerBuilder project. Analyzes the solution and creates comprehensive project documentation for Claude.
argument-hint: "[solution-path]"
---

# PowerBuilder Project Setup — CLAUDE.md Generator

Generate a comprehensive CLAUDE.md file for a PowerBuilder project.

## Process

1. **Analyze the project** using `pb_get_project_structure`
2. **Discover the inheritance tree** by running `pb_get_inheritance` on key ancestor objects
3. **Identify conventions** by sampling object names across the project
4. **Read the project file** (.pbproj) for build configuration

## Generate CLAUDE.md with these sections:

### Project Overview
- Application name, version
- Number of libraries, objects by type
- Database type and connection info

### Architecture
- Key libraries and their roles
- Inheritance hierarchy (from _ancestor)
- Module organization

### Naming Conventions
- Detected naming patterns (prefixes for windows, objects, datawindows, variables, functions)

### Build & Deploy
- PBAutoBuild250 command with all flags
- PBD copy step
- Launch instructions

### Development Workflow
- How to modify code (reference pb-modify skill)
- How to debug (reference pb-debug skill)
- How to create new objects (reference pb-create skill)

### Key Objects
- List of ancestor objects and their purpose
- Most frequently referenced objects

Write the generated CLAUDE.md to the project root.
