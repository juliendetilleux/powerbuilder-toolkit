# Table : distgrline

## Description

Table des lignes de groupes de distribution. Detail des elements de distribution.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| dlcode | numeric(4) | Non | Code **(PK)** |
| dlline | numeric(4) | Non | Numero de ligne **(PK)** |
| dladcode | varchar(10) | Oui | Code |
| dlctcode | numeric(4) | Oui | Code |
| dluscode | varchar(8) | Oui | Code |

## Cles et index

- **PK** : dlcode, dlline

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
