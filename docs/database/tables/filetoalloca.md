# Table : filetoalloca

## Description

Table filetoalloca.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| fa_id | integer | Non |  |
| fa_filename | varchar(128) | Non | Nom |
| fa_date | timestamp | Non | Date |
| fa_user | varchar(50) | Non | Utilisateur |
| fl_id | integer | Non |  |
| fl_fk_fa_id | integer | Oui |  |
| fl_fileline | integer | Non | Numero de ligne |
| fl_salhead_shco | integer | Oui |  |
| fl_loc | varchar(64) | Oui | Emplacement |
| fl_lot | varchar(64) | Oui | Lot |
| fl_qty_toalloc | numeric(15,3) | Oui | Emplacement |
| fl_status | numeric(1) | Non | Statut |
| fl_report | varchar(1024) | Non |  |
| fl_salline_slli | numeric(4) | Oui |  |

## Cles et index

- **PK** : _(aucune cle primaire definie)_

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : filetoallocate_l

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
