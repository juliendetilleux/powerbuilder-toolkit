# Table : ETI_BPOST

## Description

Table des etiquettes bpost. Configuration de l'impression d'etiquettes pour le transporteur bpost.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| EP_id | integer | Non |  **(PK)** |
| EP_sgid | integer | Non |  |
| EP_date | timestamp | Non | Date |
| EP_COD | numeric(12,2) | Non |  |
| EP_salhead_fk_s | numeric(6) | Non |  |
| EP_comments | long varcha(32767) | Non |  |
| EP_users_fk_usc | varchar(50) | Non |  |
| EP_exported | numeric(3) | Non |  |

## Cles et index

- **PK** : EP_id
- **FK** : EP_salhead_fk_shcode -> salhead(shcode)
- **FK** : EP_users_fk_uscode -> users(uscode)

## Relations

- **Parents (FK sortantes)** : salhead, users
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
