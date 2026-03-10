# Table : choicehead

## Description

Table en-tete des choix. Definition des groupes de choix/options pour les articles.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| chcode | char(4) | Non | Code condition **(PK)** |
| chname | varchar(20) | Oui | Nom |
| chactiv | char(1) | Oui | Actif |
| chtype | char(1) | Oui | Type condition |
| chaxs | char(1) | Oui |  |
| chsort | numeric(3) | Oui | Ordre de tri |
| chaltopen | char(1) | Oui |  |
| chaltopenreport | varchar(250) | Oui |  |

## Cles et index

- **PK** : chcode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : linkadch

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
