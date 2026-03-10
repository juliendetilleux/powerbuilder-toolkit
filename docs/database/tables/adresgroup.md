# Table : adresgroup

## Description

Table des groupes d'adresses de niveau 1. Classification principale des tiers (clients, fournisseurs, etc.).

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| agcode | char(5) | Non | Code **(PK)** |
| agactiv | char(1) | Oui | Actif |
| agdesc | varchar(30) | Oui | Description |

## Cles et index

- **PK** : agcode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
