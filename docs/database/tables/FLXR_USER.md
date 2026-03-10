# Table : FLXR_USER

## Description

Table des utilisateurs FlexReport. Droits utilisateur pour FlexReport.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| id | unsigned in(4) | Non |  **(PK)** |
| id_group | unsigned in(4) | Non | Groupe |
| name | varchar(50) | Non |  |

## Cles et index

- **PK** : id
- **FK** : id_group -> FLXR_GROUP(id)
- **Index** : FLXR_USER UNIQUE (name) (name) [unique]

## Relations

- **Parents (FK sortantes)** : FLXR_GROUP
- **Enfants (FK entrantes)** : FLXR_AFF_USER

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
