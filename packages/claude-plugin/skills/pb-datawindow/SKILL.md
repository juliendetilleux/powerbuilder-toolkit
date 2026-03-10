---
name: pb-datawindow
description: Use when creating, modifying, or optimizing DataWindows — the central data presentation component in PowerBuilder. Activates for any request involving DW SQL, columns, layout, or properties.
---

# PowerBuilder DataWindow

> **Skill integre** — Guide la creation et modification de DataWindows dans la conversation.
> Pour une analyse approfondie d'un DW et ses dependances, lancer l'agent `pb-analyst`.

## Trigger

Toute demande impliquant un DataWindow : creer un DW, modifier des colonnes, optimiser le SQL, changer le type de presentation (grid/freeform/composite/crosstab), ajouter des colonnes calculees.

## Workflow

### Etape 1 : Identifier le DataWindow cible

Determiner :
- **Nom** : d_xxx (convention PMIX)
- **Type** : grid, freeform, composite, crosstab, graph
- **Library** : dans quelle .pbl il se trouve
- **Operation** : creation, modification SQL, ajout/suppression colonnes, modification visuelle

Pour un DW existant :
```
pb_get_object_summary(object_name="d_xxx")
```

### Etape 2 : Analyser le SQL et les colonnes

Pour un DW existant, extraire :

**SQL source :**
```
pb_get_datawindow_sql(object_name="d_xxx")
```

**Colonnes et types :**
```
pb_dw_get_columns(object_name="d_xxx")
```

Verifier :
- Les tables jointes sont-elles correctes ?
- Les colonnes affichees correspondent-elles au besoin ?
- Y a-t-il des colonnes inutilisees ?
- Le WHERE est-il optimal (index utilises) ?

### Etape 3 : Analyser le contexte d'utilisation

Chercher les fenetres qui utilisent ce DW :
```
pb_search_code(pattern="d_xxx")
```

Identifier :
- Quelle fenetre l'affiche (controle `dw_xxx`)
- Quel `SetTransObject` est utilise
- Quels arguments de `Retrieve()` sont passes
- Y a-t-il des `Modify()` ou `Describe()` dynamiques

### Etape 4 : Appliquer la modification

**Pour modifier le SQL** :
- Utiliser `pb_modify_script` avec le nouveau SQL
- Respecter les arguments de retrieval existants (`:al_xxx` → colonnes d'arguments)
- Ne PAS casser les colonnes calculees qui referencent des colonnes SQL

**Pour ajouter/supprimer des colonnes** :
- Modifier le SELECT du SQL source
- Verifier que les colonnes ajoutees existent dans la table (`pmix_describe`)
- Verifier que les colonnes supprimees ne sont pas referencees dans le code PB

**Pour creer un nouveau DW** :
- Utiliser `pb_create_object` avec le type datawindow
- Specifier : SQL source, type de presentation, arguments de retrieval
- Convention de nommage : `d_<module>_<entite>_<usage>`

**Pour optimiser le SQL** :
- Verifier les index disponibles via `pmix_describe`
- Eviter SELECT * — lister explicitement les colonnes necessaires
- Utiliser des JOINs plutot que des sous-requetes correlees
- Ajouter des criteres de filtre dans le WHERE (pas en filtre DW)

### Etape 5 : Valider

1. Valider la syntaxe : `pb_validate_syntax(object_name="d_xxx")`
2. Compiler : `pb_compile`
3. Verifier que les fenetres consommatrices compilent toujours

## Regles specifiques DataWindow

1. **Ne JAMAIS modifier** la section `table(` manuellement — utiliser l'outil MCP
2. **Toujours verifier** que les arguments de retrieval (`:al_xxx`) correspondent aux parametres de `Retrieve()`
3. **Colonnes calculees** : elles referencent d'autres colonnes par nom — si une colonne SQL est renommee, les colonnes calculees cassent silencieusement
4. **Update properties** : verifier `table.UpdateTable`, `column.Update` et `column.Key` si le DW est editable
5. **DropDownDataWindow (DDDW)** : si une colonne utilise un DDDW, verifier que le DW enfant existe et est correct

## Format de sortie

### DataWindow : [nom]

#### Identite
- Type : [grid/freeform/composite/crosstab]
- Library : [library]
- Tables : [table1, table2, ...]

#### SQL
```sql
[SQL source complet]
```

#### Colonnes
| Colonne | Type | Source | Editable | Notes |
|---------|------|--------|----------|-------|

#### Fenetres consommatrices
| Fenetre | Controle | Retrieve args |
|---------|----------|---------------|

#### Modifications effectuees
- [Description de chaque modification]

#### Impact
- [Fenetres ou objets potentiellement impactes]
