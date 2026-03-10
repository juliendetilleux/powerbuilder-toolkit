# Table : interco

## Description

Table des operations intercompagnie. Gestion des transactions entre societes du groupe.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| iccode | numeric(2) | Non | Code **(PK)** |
| icdbparm | varchar(240) | Oui |  |
| icsocname | varchar(30) | Oui | Nom |
| icifsupp | varchar(12) | Oui | Fournisseur |
| icifcust | varchar(12) | Oui | Client |
| icidintrfsoc | numeric(2) | Oui |  |

## Cles et index

- **PK** : iccode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
