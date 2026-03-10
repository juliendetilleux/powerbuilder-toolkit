# Table : groupingnut

## Description

Table de regroupement nutritionnel. Groupes pour les donnees nutritionnelles alimentaires.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| gicode | numeric(4) | Non | Code **(PK)** |
| gilgcode | char(2) | Non | Code **(PK)** |
| gidesc | varchar(30) | Oui | Description |

## Cles et index

- **PK** : gicode, gilgcode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
