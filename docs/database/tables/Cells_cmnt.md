# Table : Cells_cmnt

## Description

Table des commentaires sur les cellules de production/stockage.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| cc_id | integer | Non |  **(PK)** |
| cc_datecrea | timestamp | Non |  |
| cc_cell | integer | Non |  |
| cc_cmnt | varchar(1024) | Non | Commentaire |
| cc_see | numeric(1) | Non |  |
| cc_user_see | char(50) | Oui |  |
| cc_datesee | timestamp | Oui |  |
| ccuser | char(50) | Oui | Utilisateur |

## Cles et index

- **PK** : cc_id
- **FK** : cc_cell -> CELLS(clid)
- **FK** : ccuser -> users(uscode)

## Relations

- **Parents (FK sortantes)** : CELLS, users
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
