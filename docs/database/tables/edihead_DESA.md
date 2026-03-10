# Table : edihead_DESA

## Description

Table edihead_DESA.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ed_id | integer | Non |  |
| ed_filename | varchar(256) | Non | Nom |
| ed_integration_ | timestamp | Non |  |
| ed_status | numeric(1) | Non | Statut |
| ed_GLN_sender | varchar(13) | Non |  |
| ed_GLN_receptio | varchar(13) | Non |  |
| ed_codeext | varchar(64) | Non |  |
| ed_shipdate | timestamp | Oui | Date |
| ed_reqdat1 | timestamp | Oui |  |
| ed_reqdat2 | timestamp | Oui |  |
| ed_ref | varchar(64) | Non | Reference |
| ed_GLN_buyer | varchar(13) | Non |  |
| ed_GLN_vendor | varchar(13) | Non | Vendeur |
| ed_GLN_receiver | varchar(13) | Non |  |

## Cles et index

- **PK** : _(aucune cle primaire definie)_

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : ediline_DESADV_i

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
