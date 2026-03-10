# Table : cycntline

## Description

Table des lignes de comptage cyclique. Detail des articles a compter lors de l'inventaire tournant.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| clnumcc | numeric(12) | Non |  **(PK)** |
| clstitem | char(20) | Non | Article **(PK)** |
| clstlot | char(30) | Non | Lot **(PK)** |
| clstloc | char(8) | Non | Emplacement **(PK)** |
| clstqty | numeric(12,3) | Oui | Quantite |
| clstqtyc | numeric(12,3) | Oui |  |
| clcomment | varchar(30) | Oui | Commentaire |
| clcycntdate | timestamp | Oui | Date |
| cldluo | timestamp | Oui |  |
| clajust | numeric(1) | Oui |  |

## Cles et index

- **PK** : clnumcc, clstitem, clstlot, clstloc
- **FK** : clnumcc -> cycnthead(chnumcc)

## Relations

- **Parents (FK sortantes)** : cycnthead
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
