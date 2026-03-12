---
name: pb-test
description: Use after modifying PowerBuilder code to plan and execute tests. Generates test plans, launches the application, captures screenshots, and compares against visual references.
---

# PowerBuilder Testing

> **Skill integre** — Guide la validation et le test dans la conversation.
> Utiliser apres chaque modification significative pour verifier le resultat.

## Trigger

- Apres une modification de code PB (explicite ou via le skill `pb-modify`)
- Demande explicite de test : "teste ca", "verifie que ca marche", "plan de test"
- Avant un deploiement ou un commit important

## Workflow

### Etape 1 : Identifier les objets modifies

Lister les objets modifies dans la session courante ou demander a l'utilisateur.
Pour chaque objet, noter :
- Type (fenetre, DW, NVO, menu)
- Nature de la modification (SQL, logique metier, UI, correction de bug)

### Etape 2 : Generer le plan de test

Pour chaque modification, definir :

**Cas nominaux** (le flux normal fonctionne) :
- Ouvrir la fenetre concernee
- Effectuer l'action modifiee
- Verifier le resultat attendu

**Cas limites** :
- Valeurs nulles ou vides
- Valeurs maximales (longueur de chaine, nombre max)
- Caracteres speciaux (accents, guillemets, &)
- Donnees inexistantes (retrieve sans resultat)

**Regressions** :
- Fonctionnalites adjacentes non modifiees
- Fenetres appelantes ou appelees
- Autres modules qui utilisent les memes tables

### Etape 3 : Compiler et lancer

1. Compiler le projet : `pb_compile` (avec `copy_pbds: true` pour copier les PBD vers le repertoire de l'exe)
2. Verifier qu'il n'y a aucune erreur
3. Lancer l'application : `pb_launch_app` (copie automatiquement les PBD manquants avant le lancement)

> **Note :** `pb_launch_app` copie automatiquement les PBD disperses vers le repertoire de l'exe (via `copy_pbds: true` par defaut). Cela evite l'erreur R0007 quand les PBD sont dans des sous-dossiers differents. Desactiver avec `copy_pbds: false` si les PBD sont deja en place.

### Etape 4 : Executer les tests

Pour chaque cas de test :

**Navigation UI :**
```
pb_list_controls(window_name="w_xxx")        — lister les controles
pb_interact_control(control="cb_ok", action="click")  — cliquer un bouton
pb_screenshot_window(window_name="w_xxx")    — capturer l'ecran
```

**Verification visuelle :**
- Comparer avec une reference si elle existe :
```
pb_visual_compare(window_name="w_xxx")
```
- Si pas de reference, en creer une pour les prochaines fois :
```
pb_save_reference(window_name="w_xxx")
```

### Etape 5 : Produire le rapport

## Format de sortie

### Rapport de test : [description de la modification]

#### Compilation
- Resultat : OK / ERREUR
- Warnings : [nb]

#### Plan de test
| # | Type | Description | Resultat | Notes |
|---|------|-------------|----------|-------|
| 1 | Nominal | [description] | OK / KO / Manuel | [detail] |
| 2 | Limite | [description] | OK / KO / Manuel | [detail] |
| 3 | Regression | [description] | OK / KO / Manuel | [detail] |

#### Captures d'ecran
- [Liste des captures effectuees avec references]

#### Verdict
- **OK** : tous les tests passent, pret pour commit
- **KO** : [nb] tests echouent, corrections necessaires
- **A VERIFIER** : [nb] tests necessitent une verification manuelle

#### Actions requises
1. [Action si KO ou a verifier]

## Regles

1. **TOUJOURS compiler** avant de tester — ne pas lancer une app avec du code non compile
2. Les tests visuels (`pb_screenshot_window`, `pb_visual_compare`) ne sont possibles que si l'app est lancee
3. Si l'app ne peut pas etre lancee (pas de base de donnees, pas d'exe), proposer un **plan de test manuel** a la place
4. **Ne pas modifier** le code pendant les tests — tester d'abord, corriger ensuite
5. Les references visuelles (`pb_save_reference`) servent de baseline pour les tests de regression futurs
