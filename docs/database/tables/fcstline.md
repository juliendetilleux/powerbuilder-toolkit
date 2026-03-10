# Table : fcstline

## Description

Table des lignes de prevision. Detail des previsions par article et periode.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| flid | numeric(5) | Non |  **(PK)** |
| flitem | char(20) | Non | Article **(PK)** |
| flpcprop | numeric(5,1) | Oui |  |
| flpcconf | numeric(5,1) | Oui |  |
| flsold | char(1) | Oui |  |

## Cles et index

- **PK** : flid, flitem

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
