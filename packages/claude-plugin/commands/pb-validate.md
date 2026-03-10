---
description: Run a full validation of the PowerBuilder project — compile, check conventions, detect dangerous patterns.
---

# PowerBuilder Project Validation

Run a comprehensive validation pass on the entire PowerBuilder project. This command checks compilation, naming conventions, and common dangerous patterns.

## Step 1: Compile the project

1. Run `pb_compile` for a full project build
2. Collect all errors and warnings
3. If compilation fails with errors, display them and stop — no point checking patterns in code that doesn't compile

## Step 2: Check naming conventions

Use `pb_list_objects` to scan all objects, then verify:

**Windows** : must start with `w_`
**DataWindows** : must start with `d_`
**User Objects** : must start with `uo_`, `nvo_`, or `nv_`
**Menus** : must start with `m_`
**Global Functions** : must start with `gf_`

For each violation, note the object name and suggest the correct prefix.

Skip objects in `_ancestor` library (they follow framework conventions).

## Step 3: Detect dangerous patterns

Use `pb_search_code` to scan for common issues:

### SQL sans verification SQLCA
Search for SQL statements (SELECT, INSERT, UPDATE, DELETE) not followed by `IF SQLCA.SQLCode` within 3 lines.
```
pb_search_code(pattern="(?i)(SELECT|INSERT|UPDATE|DELETE).*FROM")
```
Cross-reference results with SQLCA checks nearby.

### Update() sans AcceptText()
Search for `dw.Update()` calls and check if `AcceptText()` is called before.
```
pb_search_code(pattern="\\.Update\\s*\\(")
```

### Destroy manquants
Search for `CREATE` statements and verify matching `DESTROY` exists in the same object.
```
pb_search_code(pattern="CREATE\\s+")
```

### IsNull/IsValid manquants
Search for object access patterns without null checks.

### ResetUpdate() avant Update()
Search for `ResetUpdate()` calls — this clears dirty flags and is almost always a bug when called before `Update()`.
```
pb_search_code(pattern="ResetUpdate\\s*\\(")
```

## Step 4: Generate report

Display the validation report:

```
=== Validation du projet PowerBuilder ===

## Compilation
Resultat : OK / ERREUR
Erreurs  : [count]
Warnings : [count]

[If errors, list each one with file and line]

## Conventions de nommage
Violations : [count]
| Objet | Prefixe actuel | Prefixe attendu |
|-------|---------------|-----------------|

## Patterns dangereux
| Pattern | Occurrences | Severite | Objets concernes |
|---------|-------------|----------|-----------------|
| SQL sans SQLCA check | [nb] | CRITIQUE | [list] |
| Update sans AcceptText | [nb] | CRITIQUE | [list] |
| CREATE sans DESTROY | [nb] | ATTENTION | [list] |
| ResetUpdate avant Update | [nb] | ATTENTION | [list] |

## Verdict
- CRITIQUE : [count] problemes bloquants
- ATTENTION : [count] problemes a surveiller
- OK : [count] verifications passees

[Si CRITIQUE > 0] : Corriger les problemes critiques avant de deployer.
[Si CRITIQUE = 0] : Projet valide, pret pour deploiement.
```

## Notes

- This command can take several minutes on large projects (900+ objects)
- Focus on the CRITIQUE issues first — they represent real risks of data corruption or crashes
- ATTENTION issues should be reviewed but may be intentional in certain contexts
- Convention violations are informational — legacy code may not follow all conventions
