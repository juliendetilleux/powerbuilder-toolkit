# Table : calline

## Description

Table des lignes de calendrier. Detail des jours et horaires pour chaque calendrier.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| clcode | char(6) | Non | Numero reclamation **(PK)** |
| cldate | timestamp | Non | Date reclamation **(PK)** |
| clwork | char(1) | Non |  |

## Cles et index

- **PK** : clcode, cldate

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
