# Table : country

## Description

Table des pays. Referentiel des pays avec codes ISO et parametres associes.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| cocode | char(2) | Non | Code **(PK)** |
| coactiv | char(1) | Oui | Actif |
| codesc | varchar(30) | Oui | Description |
| cointrastat | char(1) | Oui |  |
| coiso3 | char(3) | Oui |  |
| cofedexetd | char(1) | Oui |  |

## Cles et index

- **PK** : cocode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : link_country_eco, tvalvl_country

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
