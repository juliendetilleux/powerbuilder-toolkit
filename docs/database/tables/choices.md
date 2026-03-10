# Table : choices

## Description

Table des choix effectues. Selections d'options sur les lignes de commande.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| chtype | char(4) | Non | Type condition **(PK)** |
| chcode | char(1) | Non | Code condition **(PK)** |
| chactiv | char(1) | Non | Actif |
| chname | char(25) | Non | Nom |
| chsort | numeric(2) | Oui | Ordre de tri |
| chaxs | char(1) | Oui |  |
| chvali | numeric(3) | Oui |  |
| chvalc | char(1) | Oui |  |

## Cles et index

- **PK** : chtype, chcode
- **Index** : ixc_Profile_29 (chcode, chtype) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
