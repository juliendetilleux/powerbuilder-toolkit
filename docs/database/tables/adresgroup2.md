# Table : adresgroup2

## Description

Table des groupes d'adresses de niveau 2. Sous-classification des tiers.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ag2code | char(5) | Non | Code **(PK)** |
| ag2activ | char(1) | Oui | Actif |
| ag2desc | varchar(30) | Oui | Description |
| ag2uppergrp | char(5) | Non |  **(PK)** |

## Cles et index

- **PK** : ag2code, ag2uppergrp

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
