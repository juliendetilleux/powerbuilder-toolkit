# Table : calhead

## Description

Table en-tete des calendriers. Definition des calendriers de travail (jours ouvres, horaires).

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| chcode | char(6) | Non | Code condition **(PK)** |
| chname | char(20) | Non | Nom |
| chactif | char(1) | Non |  |
| chmonday | char(1) | Oui |  |
| chtuesday | char(1) | Oui |  |
| chwednesday | char(1) | Oui |  |
| chthursday | char(1) | Oui |  |
| chfriday | char(1) | Oui |  |
| chsaturday | char(1) | Oui |  |
| chsunday | char(1) | Oui |  |

## Cles et index

- **PK** : chcode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : machine, workcenters

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
