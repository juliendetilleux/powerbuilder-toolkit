# Table : claims

## Description

Table des reclamations. Gestion des reclamations clients/fournisseurs et non-conformites.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| clid | numeric(9) | Non |  **(PK)** |
| clname | char(50) | Oui | Nom |
| clorder | numeric(3) | Oui |  |

## Cles et index

- **PK** : clid

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : lkitcl

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
