# Table : condhead

## Description

Table en-tete des conditions commerciales. Definition des grilles de conditions (remises, majorations).

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| chcode | numeric(6) | Non | Code condition **(PK)** |
| chlevel | char(1) | Oui |  |
| chdesc | char(30) | Oui | Description |
| chvalid | char(1) | Oui |  |
| chactiv | char(1) | Oui | Actif |
| chfileref | numeric(6) | Oui | Reference |
| chfileline | numeric(4) | Oui | Numero de ligne |
| chparent | numeric(6) | Oui |  |
| chsalcode | numeric(6) | Oui | Code |
| chsalline | numeric(4) | Oui | Numero de ligne |
| chstock | char(1) | Oui |  |

## Cles et index

- **PK** : chcode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
