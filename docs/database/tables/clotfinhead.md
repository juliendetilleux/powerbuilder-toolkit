# Table : clotfinhead

## Description

Table en-tete de cloture financiere. Parametres de cloture des periodes comptables.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| chperiod | char(6) | Non |  **(PK)** |
| chdatstart | timestamp | Oui |  |
| chdatend | timestamp | Oui |  |
| chsal | numeric(10,2) | Oui |  |
| chpur | numeric(10,2) | Oui |  |
| chStkIni | numeric(10,2) | Oui |  |
| chStkEnd | numeric(10,2) | Oui |  |
| chclotid | numeric(4) | Oui |  |
| chmccode | varchar(10) | Non | Code **(PK)** |

## Cles et index

- **PK** : chperiod, chmccode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
