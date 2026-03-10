# Table : itstat3

## Description

Table des statistiques articles niveau 3. Troisieme classification statistique des articles.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| iscode | char(2) | Non | Code **(PK)** |
| iscode2 | char(2) | Non |  **(PK)** |
| iscode3 | char(2) | Non |  **(PK)** |
| isdesc | char(20) | Oui | Description |
| is_id | unsigned in(4) | Oui |  |

## Cles et index

- **PK** : iscode, iscode2, iscode3

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
