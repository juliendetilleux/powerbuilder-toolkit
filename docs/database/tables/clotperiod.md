# Table : clotperiod

## Description

Table des periodes de cloture. Definition des periodes comptables a cloturer.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| cpid | numeric(4) | Non |  **(PK)** |
| cpdesc | char(20) | Oui | Description |
| cpdatstart | timestamp | Oui |  |
| cpdatend | timestamp | Oui |  |
| cphistseq | numeric(12) | Oui | Sequence |
| cpstock | char(1) | Oui |  |
| cpstockdat | timestamp | Oui |  |
| cpsales | char(1) | Oui |  |
| cpsalesdat | timestamp | Oui |  |
| cppur | char(1) | Oui |  |
| cppurdat | timestamp | Oui |  |
| cpcptper | char(6) | Oui |  |
| cptruck | char(1) | Oui |  |
| cptruckdat | timestamp | Oui |  |
| cplaunchdat | timestamp | Oui |  |

## Cles et index

- **PK** : cpid

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
