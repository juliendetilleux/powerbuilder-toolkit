# Table : fcstnew

## Description

Table des nouvelles previsions. Previsions en cours d'elaboration.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| fnid | numeric(5) | Non |  **(PK)** |
| fnitem | char(20) | Non | Article **(PK)** |
| fndate | timestamp | Non | Date **(PK)** |
| fnqtyref | numeric(8) | Oui | Reference |
| fnqtycalc | numeric(8) | Oui |  |
| fnqtyconf | numeric(8) | Oui |  |

## Cles et index

- **PK** : fnid, fnitem, fndate

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
