# Table : biccode

## Description

Table des codes BIC bancaires. Referentiel des codes d'identification bancaire (SWIFT/BIC).

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| bccountrid | char(2) | Non |  **(PK)** |
| bccodefrom | varchar(10) | Non |  **(PK)** |
| bccodeto | varchar(10) | Oui |  |
| bccodebic | varchar(15) | Oui |  |
| bcbankdesc | varchar(60) | Oui | Description |

## Cles et index

- **PK** : bccountrid, bccodefrom

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
