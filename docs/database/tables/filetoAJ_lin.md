# Table : filetoAJ_lin

## Description

Table filetoAJ_lin.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| fl_id | integer | Non |  |
| fl_fk_fa_id | integer | Oui |  |
| fl_fileline | integer | Non | Numero de ligne |
| fl_type | varchar(8) | Non | Type |
| fl_loc_start | varchar(64) | Oui |  |
| fl_lot | varchar(64) | Oui | Lot |
| fl_qty | numeric(15,3) | Oui | Quantite |
| fl_loc_dest | varchar(64) | Oui |  |
| fl_status | numeric(1) | Non | Statut |
| fl_report | varchar(1024) | Non |  |

## Cles et index

- **PK** : _(aucune cle primaire definie)_

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
