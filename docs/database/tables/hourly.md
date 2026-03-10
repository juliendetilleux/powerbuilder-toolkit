# Table : hourly

## Description

Table des tarifs horaires. Grille des taux horaires par activite ou ressource.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| hyid | integer | Non |  **(PK)** |
| hyname | varchar(30) | Non | Nom |
| hyactif | char(1) | Non |  |

## Cles et index

- **PK** : hyid

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : hourly_day, machine

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
