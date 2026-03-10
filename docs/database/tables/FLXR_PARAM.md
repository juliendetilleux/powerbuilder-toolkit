# Table : FLXR_PARAM

## Description

Table des parametres FlexReport. Configuration du moteur de rapports FlexReport.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| id | unsigned in(4) | Non |  **(PK)** |
| name | varchar(50) | Non |  |
| value | varchar(500) | Non |  |

## Cles et index

- **PK** : id
- **Index** : FLXR_PARAM UNIQUE (name) (name) [unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
