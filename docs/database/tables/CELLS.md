# Table : CELLS

## Description

Table des cellules. Definition des cellules de production ou de stockage.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| clid | integer | Non |  **(PK)** |
| clname | varchar(50) | Non | Nom |
| clactiv | char(1) | Non | Actif |

## Cles et index

- **PK** : clid

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : Cells_cmnt, machine, workers

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
