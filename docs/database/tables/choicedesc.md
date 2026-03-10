# Table : choicedesc

## Description

Table des descriptions de choix. Descriptions multilingues des options de choix.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| cdtype | char(4) | Non | Type **(PK)** |
| cdcode | numeric(3) | Non | Code **(PK)** |
| cddesc | varchar(50) | Non | Description |

## Cles et index

- **PK** : cdtype, cdcode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
