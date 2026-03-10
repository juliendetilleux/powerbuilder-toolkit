# Table : itemaudit

## Description

Table d'audit des articles. Historique des modifications sur les fiches articles.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| iaitcode | char(20) | Non | Code **(PK)** |
| iadate | timestamp | Non | Date **(PK)** |
| iauser | char(50) | Non | Utilisateur **(PK)** |
| iaaudit | varchar(256) | Oui |  |

## Cles et index

- **PK** : iaitcode, iadate, iauser

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
