# Table : import_wms

## Description

Table d'import WMS. Donnees importees depuis le systeme de gestion d'entrepot (WMS).

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| iw_id | integer | Non |  **(PK)** |
| iw_filename | varchar(1024) | Non | Nom |
| iw_fileline | integer | Non | Numero de ligne |
| iw_date | timestamp | Non | Date |
| iw_status | numeric(1) | Non | Statut |
| iw_content | long varcha(32767) | Non |  |
| iw_message | long varcha(32767) | Non |  |

## Cles et index

- **PK** : iw_id

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : WMS_STO

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
