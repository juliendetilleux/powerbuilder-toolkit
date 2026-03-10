# Table : adresrate

## Description

Table des tarifs par adresse. Definit les grilles tarifaires et conditions de prix specifiques a chaque tiers.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| arcode | char(10) | Non | Code **(PK)** |
| arstartdat | timestamp | Non | Date debut **(PK)** |
| arstopdat | timestamp | Non |  |
| arrateid | numeric(5) | Non |  |

## Cles et index

- **PK** : arcode, arstartdat
- **FK** : arcode -> adresses(adcode)
- **FK** : arrateid -> ratehead(rhcode)
- **Index** : index_adresrate_arcode (arcode) [non-unique]

## Relations

- **Parents (FK sortantes)** : adresses, ratehead
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
