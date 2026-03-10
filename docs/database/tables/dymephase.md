# Table : dymephase

## Description

Table des phases de mesures dynamiques. Etapes de fabrication avec mesures.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| dpcode | char(20) | Non | Code **(PK)** |
| dpversid | char(5) | Non |  **(PK)** |
| dpphasid | numeric(2) | Non |  **(PK)** |
| dpphasdesc | varchar(50) | Oui | Description |
| dpordre | numeric(2) | Oui |  |

## Cles et index

- **PK** : dpcode, dpversid, dpphasid

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
