# Table : FLXR_GROUP

## Description

Table des groupes FlexReport. Groupes de classification des rapports.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| id | unsigned in(4) | Non |  **(PK)** |
| name | varchar(50) | Non |  |

## Cles et index

- **PK** : id
- **Index** : FLXR_GROUP UNIQUE (name) (name) [unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : FLXR_AFF_GROUP, FLXR_USER

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
