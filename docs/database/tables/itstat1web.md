# Table : itstat1web

## Description

Table des statistiques articles niveau 1 pour le web/e-commerce.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| iwcode | numeric(3) | Non | Code **(PK)** |
| iwlang | char(2) | Non | Langue **(PK)** |
| iwdesc | varchar(20) | Oui | Description |
| iwsort | numeric(3) | Oui | Ordre de tri |

## Cles et index

- **PK** : iwcode, iwlang
- **Index** : ixc_DBA_index_consultant_6 (iwcode) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
