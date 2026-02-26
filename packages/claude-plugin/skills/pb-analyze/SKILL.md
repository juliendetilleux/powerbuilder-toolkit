---
name: pb-analyze
description: Use when you need to understand existing PowerBuilder code — explore architecture, inheritance, dependencies, and data flow.
tools: Glob, Grep, Read, TodoWrite
---

# PowerBuilder Code Analysis

## Understanding an Object

### Quick Overview
Use `pb_get_object_summary` for a fast summary of any object:
- Public functions, scripted events, key variables
- Ancestor and library information

### Deep Analysis
1. **Read the full source** with `pb_read_object`
2. **Trace the inheritance** with `pb_get_inheritance`
   - What does this object inherit?
   - What overrides the ancestor's behavior?
3. **Check dependencies** with `pb_get_dependencies`
   - Who calls this object?
   - What objects does it reference?
4. **Trace function calls** with `pb_get_call_graph`
   - What does function X call?
   - Who calls function X?

### Understanding the Project Structure
Use `pb_get_project_structure` to see:
- All 69 libraries and their sizes
- Object count distribution by type
- Module organization

### Key architectural patterns in this codebase
- `_ancestor` library contains base classes (w_ancestor*, nvo_ancestor*)
- Most windows inherit from an ancestor sheet or response window
- DataWindows (.srd) contain embedded SQL — use `pb_get_datawindow_sql` to extract
- Non-visual objects (nvo_*) implement business logic
- Windows (w_*) implement UI
