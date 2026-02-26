---
name: pb-create
description: Use when creating new PowerBuilder objects (windows, user objects, DataWindows). Ensures proper inheritance and naming conventions.
tools: Glob, Grep, Read, Write, Bash, TodoWrite
---

# Creating New PowerBuilder Objects

## Before Creating

1. **Identify the correct ancestor** using `pb_get_inheritance`
   - Windows should inherit from `w_ancestor_sheet` or `w_ancestor_response`
   - User objects from `nvo_ancestor` or similar
   - Check existing similar objects for the pattern used

2. **Identify the correct library**
   - Use `pb_get_project_structure` to see available libraries
   - Place the object in the most appropriate module (e.g., `_sales` for sales features)

3. **Follow naming conventions**
   - `w_` for windows
   - `nvo_` for non-visual objects
   - `d_` for datawindows

## Creating the Object

Use `pb_create_object` with:
- `name`: the object name (following conventions)
- `type`: 'window', 'userobject', or 'menu'
- `ancestor`: the appropriate base class
- `library`: the target library name

## After Creating

1. Verify the file was created in the correct location
2. Add any required instance variables
3. Implement necessary events and functions
4. Compile with `pb_compile` to verify
