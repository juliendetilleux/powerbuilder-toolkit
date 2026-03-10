# Table : dymeuom

## Description

Table des unites de mesure dynamiques. UOM pour les articles a mesures variables.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ducode | char(20) | Non | Code **(PK)** |
| duversid | char(5) | Non |  **(PK)** |
| duid | numeric(4) | Non |  **(PK)** |
| duactiv | char(1) | Oui | Actif |
| dutyp | char(1) | Oui |  |
| dudesc | char(12) | Oui | Description |
| duuom | char(2) | Oui | Unite de mesure |
| dumin | numeric(9,3) | Oui |  |
| dumax | numeric(9,3) | Oui |  |
| duformula | varchar(80) | Oui |  |

## Cles et index

- **PK** : ducode, duversid, duid

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
