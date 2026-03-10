# Table : dymevar

## Description

Table des variables de mesures dynamiques. Variables de calcul pour dimensions.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| dvcode | char(20) | Non | Code **(PK)** |
| dvversid | char(5) | Non |  **(PK)** |
| dvlineid | numeric(4) | Non |  **(PK)** |
| dvvarid | numeric(2) | Non |  **(PK)** |
| dvitem | char(20) | Oui | Article |
| dvcoeff | numeric(4,2) | Oui | Coefficient |
| dvpos | numeric(2) | Oui |  |
| dvseuil | numeric(10,4) | Oui |  |

## Cles et index

- **PK** : dvcode, dvversid, dvlineid, dvvarid

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
