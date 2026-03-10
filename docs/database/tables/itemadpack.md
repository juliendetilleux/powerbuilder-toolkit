# Table : itemadpack

## Description

Table des conditionnements par article et adresse. Emballages specifiques par combinaison article/tiers.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| aptyp | char(1) | Non |  **(PK)** |
| apitem | char(20) | Non | Article **(PK)** |
| apadcode | char(10) | Non | Code **(PK)** |
| appack | char(4) | Non |  **(PK)** |
| apconv | numeric(16,10) | Oui |  |

## Cles et index

- **PK** : aptyp, apitem, apadcode, appack

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
