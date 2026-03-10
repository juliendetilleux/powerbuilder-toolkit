# Table : filetorecept

## Description

Table filetorecept.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| fl_id | integer | Non |  |
| fl_fk_fm_id | integer | Oui |  |
| fl_fileline | integer | Non | Numero de ligne |
| fl_mfghead_mhco | integer | Oui |  |
| fl_item | varchar(64) | Oui | Article |
| fl_loc | varchar(64) | Oui | Emplacement |
| fl_lot | varchar(64) | Oui | Lot |
| fl_qty_torecept | numeric(15,3) | Oui |  |
| fl_status | numeric(1) | Non | Statut |
| fl_report | varchar(1024) | Non |  |
| fl_type | char(4) | Oui | Type |

## Cles et index

- **PK** : _(aucune cle primaire definie)_

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
