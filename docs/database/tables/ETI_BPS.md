# Table : ETI_BPS

## Description

Table des etiquettes BPS. Parametrage des etiquettes BPS.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| EB_id | integer | Non |  **(PK)** |
| EB_date | timestamp | Non | Date |
| EB_BPS_SEQ | integer | Non | Sequence |
| EB_removal | numeric(1) | Non | Valeur |
| EB_nb_colis | numeric(5) | Non |  |
| EB_code_palette | numeric(1) | Non |  |
| EB_COD | numeric(12,2) | Non |  |
| EB_salhead_fk_s | numeric(6) | Non |  |
| EB_comments | varchar(1024) | Non |  |
| EB_mailled | numeric(1) | Non |  |
| EB_datetime_mai | timestamp | Oui |  |
| EB_users_fk_usc | varchar(50) | Non |  |

## Cles et index

- **PK** : EB_id
- **FK** : EB_salhead_fk_shcode -> salhead(shcode)
- **FK** : EB_users_fk_uscode -> users(uscode)

## Relations

- **Parents (FK sortantes)** : salhead, users
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
