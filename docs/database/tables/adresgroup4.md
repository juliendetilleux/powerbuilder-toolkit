# Table : adresgroup4

## Description

Table des groupes d'adresses de niveau 4. Classification la plus fine des tiers.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ag4code | char(5) | Non | Code **(PK)** |
| ag4activ | char(1) | Oui | Actif |
| ag4desc | varchar(30) | Oui | Description |
| ag4uppergrp | char(5) | Non |  **(PK)** |

## Cles et index

- **PK** : ag4code, ag4uppergrp

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
