# Table : forecasts

## Description

Table des previsions consolidees. Donnees de prevision de vente agregees.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| foitem | char(20) | Non | Article **(PK)** |
| focust | char(10) | Non | Client **(PK)** |
| fodate | timestamp | Non | Date **(PK)** |
| foqty | numeric(8) | Non | Quantite |

## Cles et index

- **PK** : foitem, focust, fodate
- **FK** : focust -> adresses(adcode)
- **FK** : foitem -> items(itcode)

## Relations

- **Parents (FK sortantes)** : adresses, items
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
