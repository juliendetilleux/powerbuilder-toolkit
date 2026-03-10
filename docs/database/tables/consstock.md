# Table : consstock

## Description

Table du stock en consignation. Etat du stock depose chez les clients.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| csowner | char(10) | Non |  **(PK)** |
| csloc | char(10) | Non | Emplacement **(PK)** |
| cspack | char(4) | Non |  **(PK)** |
| csqty | numeric(6) | Oui | Quantite |

## Cles et index

- **PK** : csowner, csloc, cspack
- **Index** : ixc_Profile_26 (csowner, cspack) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
