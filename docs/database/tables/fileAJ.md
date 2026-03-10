# Table : fileAJ

## Description

Table des ajustements de dossier projet. Corrections et ajustements sur dossiers.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| fa_id | integer | Non |  **(PK)** |
| fa_filename | varchar(128) | Non | Nom |
| fa_date | timestamp | Non | Date |
| fa_user | varchar(50) | Non | Utilisateur |

## Cles et index

- **PK** : fa_id
- **FK** : fa_user -> users(uscode)

## Relations

- **Parents (FK sortantes)** : users
- **Enfants (FK entrantes)** : filetoAJ_line

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
