---
name: pb-analyze
description: Use when you need to understand existing PowerBuilder code — explore architecture, inheritance, dependencies, and data flow. For deep analysis with a full report, use the pb-analyst agent instead.
---

# PowerBuilder Code Analysis

> **Skill integre** — Guide l'analyse dans la conversation courante.
> Pour une analyse approfondie avec rapport complet, lancer l'agent `pb-analyst`.

## Trigger

Demande de comprendre un objet PB existant : "c'est quoi w_xxx ?", "montre-moi l'architecture de uo_xxx", "qui utilise d_xxx ?".

## Workflow

### Etape 1 : Vue d'ensemble

Utiliser `pb_get_object_summary` pour obtenir rapidement :
- Type, ancetre, library
- Nombre de fonctions et events
- Variables d'instance

### Etape 2 : Heritage

Utiliser `pb_get_inheritance` :
- Ancetres : de quoi herite cet objet ? Quels comportements sont herites ?
- Descendants : qui herite de cet objet ? (impact en cas de modification)

### Etape 3 : Dependances

Utiliser `pb_get_dependencies` :
- Qui appelle cet objet ? (dependances entrantes)
- Quels objets cet objet utilise-t-il ? (dependances sortantes)

### Etape 4 : Lecture du code source

Utiliser `pb_read_object` pour lire le code complet.
Identifier :
- Fonctions publiques (`of_*`) et privees (`wf_*`)
- Events personnalises (`ue_*`)
- Variables d'instance (`is_`, `il_`, `ib_`, `id_`)
- DataWindows utilises et leur SQL (`pb_get_datawindow_sql`)

### Etape 5 : Patterns architecturaux

Determiner le role de l'objet :
- **Fenetre sheet** : fenetre principale avec toolbar et menu
- **Fenetre response** : dialogue modal (saisie/confirmation)
- **NVO metier** : logique business sans UI (nvo_*, nv_*)
- **NVO utilitaire** : services transversaux (log, mail, config)
- **DataWindow** : presentation de donnees (grid, freeform, composite)
- **Menu** : barre de menu et items (m_*)

### Etape 6 : Structure du projet

Si necessaire, utiliser `pb_get_project_structure` pour comprendre :
- Organisation des 69+ libraries
- Repartition par module metier
- Conventions de nommage des libraries

## Format de sortie

### Analyse : [nom_objet]

#### Identite
- Type : [type] | Ancetre : [ancetre] | Library : [library]
- Fonctions : [nb] | Events : [nb] | Variables : [nb]

#### Heritage
- Chaine : [objet] → [parent] → [grand-parent] → ...
- Descendants : [nb] objets heritent de [objet]

#### Dependances
- [nb] objets utilisent [objet]
- [objet] utilise [nb] objets

#### Role architectural
[Description du role dans l'application]

#### Fonctions cles
| Fonction | Visibilite | Role |
|----------|------------|------|

#### Donnees
| DataWindow | SQL resume | Tables |
|------------|-----------|--------|
