# Table : Authorities

## Description

Table des autorisations. Gestion des droits d'acces et permissions des utilisateurs par fonctionnalite.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| aucode | char(50) | Non | Code **(PK)** |
| auprog | char(8) | Non |  **(PK)** |
| auread | char(1) | Oui |  |
| aumodif | char(1) | Oui | Modifie |

## Cles et index

- **PK** : aucode, auprog
- **FK** : auprog -> programs(pgcode)

## Relations

- **Parents (FK sortantes)** : programs
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
