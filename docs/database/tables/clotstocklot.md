# Table : clotstocklot

## Description

Table de cloture des lots de stock. Valorisation des lots lors de la cloture.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| clid | integer | Non |  **(PK)** |
| clperiod | char(6) | Oui |  |
| clitem | varchar(20) | Oui | Code article |
| cllot | char(30) | Oui | Lot |
| clqty | numeric(10,3) | Oui | Quantite |

## Cles et index

- **PK** : clid
- **Index** : idx_clostolo_refc (clitem) [non-unique]
- **Index** : idx_clostolo_refn (cllot) [non-unique]
- **Index** : idx_clostolo_typ (clperiod) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
