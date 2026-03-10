# Table : distgrhead

## Description

Table en-tete des groupes de distribution. Classification pour la distribution.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| dhcode | numeric(4) | Non | Code **(PK)** |
| dhname | varchar(30) | Non | Nom |
| dhdesc | varchar(255) | Oui | Description |
| dhactiv | char(1) | Oui | Actif |

## Cles et index

- **PK** : dhcode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
