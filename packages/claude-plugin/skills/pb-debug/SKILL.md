---
name: pb-debug
description: Use when diagnosing bugs, errors, or unexpected behavior in PowerBuilder code. Provides a systematic debugging approach.
tools: Glob, Grep, Read, Bash, TodoWrite
---

# PowerBuilder Debugging Workflow

## Systematic Diagnosis

### Step 1: Gather Information
- What is the error message or symptom?
- When does it occur? (startup, specific action, data-dependent?)
- Is it reproducible?

### Step 2: Locate the Code
1. Use `pb_search_code` to find the error message text in source
2. Use `pb_get_call_graph` to trace function calls
3. Use `pb_read_object` to read the full source of suspected objects

### Step 3: Analyze the Context
1. Check `pb_get_inheritance` — is the issue in an ancestor?
2. Check `pb_get_dependencies` — is the issue caused by a caller?
3. Review the DataWindow SQL if the issue involves data (`pb_get_datawindow_sql`)

### Step 4: Common PB Error Patterns

**Null object reference:**
- Check if object is created/instantiated before use
- Check if `destroy` was called prematurely
- Check `IsValid()` before accessing object properties

**SQL errors:**
- Check `SQLCA.SQLCode` after database operations (-1 = error)
- Check `SQLCA.SQLErrText` for the error message
- Verify DataWindow SQL syntax via `pb_get_datawindow_sql`

**Runtime errors:**
- Check event firing order (open vs. constructor vs. activate)
- Check for division by zero
- Check array bounds

### Step 5: Propose and Apply Fix
1. Explain the root cause clearly
2. Use the pb-modify skill workflow to apply the fix
3. Compile and verify
