# Table : ediline_DESA

## Description

Table ediline_DESA.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| el_id | integer | Non |  |
| el_fk_ed_id | integer | Non |  |
| el_status | numeric(1) | Non | Statut |
| el_GTIN_item | varchar(14) | Non | Article |
| el_item_desc | varchar(128) | Non | Description |
| el_qtypc | numeric(10,3) | Non |  |
| el_um | varchar(10) | Oui | Unite de mesure |
| el_stdval | numeric(10,4) | Oui | Valeur |
| el_GLN_receiver | varchar(13) | Non |  |
| el_field8 | varchar(128) | Non |  |
| el_field9 | varchar(128) | Non |  |
| el_field10 | varchar(128) | Non |  |
| el_qtyKG | numeric(12,3) | Non |  |

## Cles et index

- **PK** : _(aucune cle primaire definie)_

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
