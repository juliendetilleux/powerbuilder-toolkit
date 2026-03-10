# Table : histoallocs

## Description

Table historique des allocations de stock. Archive des affectations de stock.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| hapk | numeric(15) | Non |  **(PK)** |
| hatyp | char(1) | Oui |  |
| hacode | numeric(6) | Oui | Code |
| haitemseq | numeric(5) | Oui | Sequence |
| haallocseq | numeric(4) | Oui | Sequence |
| haitem | char(12) | Oui | Article |
| halot | char(30) | Oui | Lot |
| haloc | char(8) | Oui | Emplacement |
| haallocqty | numeric(12,3) | Oui | Quantite |
| haissuedqty | numeric(12,3) | Oui | Quantite |
| ha2issueqty | numeric(12,3) | Oui | Quantite |
| hasscc | varchar(18) | Oui |  |
| hacustalloc | numeric(12,3) | Oui | Emplacement |
| halotorgcode | varchar(20) | Oui | Code |
| halotdlc | timestamp | Oui |  |
| hauser | char(50) | Oui | Utilisateur |
| haallocdat | timestamp | Oui |  |
| haaction | char(6) | Oui |  |
| haactiondate | timestamp | Oui | Date |

## Cles et index

- **PK** : hapk

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
