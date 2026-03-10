# Table : dbmod

## Description

Table des modifications de base de donnees. Journal des mises a jour de schema (versioning DB).

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| dmcode | timestamp | Non | Code **(PK)** |
| dmmod | numeric(6) | Oui |  |

## Cles et index

- **PK** : dmcode
- **Index** : ixc_Profile_23 (dmmod) [non-unique]
- **Index** : ixc_Profile_24 (dmmod) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
