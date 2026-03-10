# Table : garaghead

## Description

Table en-tete de garage/atelier. Gestion des ateliers de reparation/maintenance.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ggcode | numeric(5) | Non | Code **(PK)** |
| ggchassis | varchar(17) | Oui |  |
| ggregistre | varchar(17) | Oui |  |
| ggdtreg | timestamp | Oui |  |
| ggcertifconf | char(1) | Oui |  |
| ggctrltech | char(1) | Oui |  |
| ggcarnimmat | char(1) | Oui |  |
| ggIdentif | char(1) | Oui |  |
| ggkm | numeric(6) | Oui |  |
| ggadcode | char(10) | Oui | Code |
| ggmarque | varchar(25) | Oui |  |

## Cles et index

- **PK** : ggcode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
