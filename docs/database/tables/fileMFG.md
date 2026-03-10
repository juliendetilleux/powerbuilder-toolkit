# Table : fileMFG

## Description

Table de fabrication des dossiers. Ordres de fabrication lies aux projets.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| fm_id | integer | Non |  **(PK)** |
| fm_filename | varchar(128) | Non | Nom |
| fm_date | timestamp | Non | Date |
| fm_user | varchar(50) | Non | Utilisateur |
| fm_type | char(4) | Oui | Type |

## Cles et index

- **PK** : fm_id
- **FK** : fm_user -> users(uscode)

## Relations

- **Parents (FK sortantes)** : users
- **Enfants (FK entrantes)** : filetoreceptMFG_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
