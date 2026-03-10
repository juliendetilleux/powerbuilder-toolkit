# Table : itstat1

## Description

Table des statistiques articles niveau 1. Premiere classification statistique des articles.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| imcode | char(2) | Non | Code **(PK)** |
| imdesc | char(20) | Oui | Description |
| im_orderby | tinyint | Oui |  |
| imcolor | numeric(10) | Oui | Couleur |
| imptshipnotice | varchar(30) | Oui |  |
| im_id | unsigned in(4) | Oui |  |

## Cles et index

- **PK** : imcode
- **Index** : ixc_DBA_index_consultant_11 (imdesc) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
