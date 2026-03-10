# Table : itstat2web

## Description

Table des statistiques articles niveau 2 pour le web/e-commerce.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| iswcode | numeric(3) | Non | Code **(PK)** |
| iswcode2 | numeric(3) | Non |  **(PK)** |
| iswlang | char(2) | Non | Langue **(PK)** |
| iswdesc | varchar(20) | Oui | Description |
| iswsort | numeric(3) | Oui | Ordre de tri |

## Cles et index

- **PK** : iswcode, iswcode2, iswlang

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
