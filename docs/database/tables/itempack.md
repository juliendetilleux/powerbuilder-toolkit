# Table : itempack

## Description

Table des conditionnements d'articles. Definition des unites de conditionnement (palette, carton, etc.).

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ipitem | char(20) | Non | Article **(PK)** |
| ippack | char(4) | Non |  **(PK)** |
| ipconv | numeric(16,10) | Oui |  |

## Cles et index

- **PK** : ipitem, ippack
- **FK** : ipitem -> items(itcode)
- **FK** : ippack -> packings(pkcode)

## Relations

- **Parents (FK sortantes)** : items, packings
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
