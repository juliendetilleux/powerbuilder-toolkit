# Table : adresgroup3

## Description

Table des groupes d'adresses de niveau 3. Classification detaillee des tiers.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ag3code | char(5) | Non | Code **(PK)** |
| ag3activ | char(1) | Oui | Actif |
| ag3desc | varchar(30) | Oui | Description |
| ag3uppergrp | char(5) | Non |  **(PK)** |

## Cles et index

- **PK** : ag3code, ag3uppergrp

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
