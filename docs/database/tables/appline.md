# Table : appline

## Description

Table des lignes de rendez-vous. Details et participants des rendez-vous.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| alid | numeric(6) | Non |  **(PK)** |
| alahid | numeric(6) | Oui |  |
| alname | char(20) | Non | Nom |
| alsort | numeric(2) | Oui | Ordre de tri |
| alnumact | numeric(3) | Oui |  |
| aldefval | char(1) | Oui | Valeur |
| alCAminval | numeric(12) | Oui | Valeur |
| alCAmaxval | numeric(12) | Oui | Valeur |

## Cles et index

- **PK** : alid
- **FK** : alahid -> apphead(ahid)

## Relations

- **Parents (FK sortantes)** : apphead
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
