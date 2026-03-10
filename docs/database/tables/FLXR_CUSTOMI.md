# Table : FLXR_CUSTOMI

## Description

Table FLXR_CUSTOMI.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| id | unsigned in(4) | Non |  |
| dataobject | varchar(50) | Non |  |
| name | varchar(50) | Non |  |
| ref_syntax | long binary | Oui | Taxe |
| cur_syntax | long binary | Oui | Taxe |
| sub_report | integer | Non |  |
| name_sub_report | varchar(50) | Non |  |

## Cles et index

- **PK** : _(aucune cle primaire definie)_

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : FLXR_AFF_GLOBAL, FLXR_AFF_GROUP, FLXR_AFF_USER

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
