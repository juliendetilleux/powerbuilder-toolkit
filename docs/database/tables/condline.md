# Table : condline

## Description

Table des lignes de conditions commerciales. Detail des paliers et taux de conditions.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| clcode | numeric(6) | Non | Numero reclamation **(PK)** |
| clline | numeric(4) | Non | Numero de ligne **(PK)** |
| clratio | numeric(8,2) | Oui |  |
| cltemplate | numeric(6) | Oui |  |
| clinvclot | char(1) | Oui | Lot |
| clactiv | char(1) | Oui | Actif |
| clbalance | numeric(8,2) | Oui |  |
| cljalon | numeric(6) | Oui |  |
| clsort | numeric(4) | Oui | Ordre de tri |
| clinvhead | numeric(6) | Oui |  |
| clinvline | numeric(4) | Oui | Numero de ligne |
| clproforma | char(1) | Non |  |

## Cles et index

- **PK** : clcode, clline
- **FK** : cltemplate -> condtemplate(ctcode)

## Relations

- **Parents (FK sortantes)** : condtemplate
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
