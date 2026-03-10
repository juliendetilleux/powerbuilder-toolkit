# Table : clotwip

## Description

Table de cloture des encours (WIP). Valorisation des travaux en cours lors de la cloture.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| cwtyp | char(1) | Non |  **(PK)** |
| cwmhcode | numeric(6) | Non | Code **(PK)** |
| cwitem | char(20) | Non | Article **(PK)** |
| cwqtyorig | numeric(12,3) | Oui |  |
| cwqtycorr | numeric(12,3) | Oui |  |

## Cles et index

- **PK** : cwtyp, cwmhcode, cwitem

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
