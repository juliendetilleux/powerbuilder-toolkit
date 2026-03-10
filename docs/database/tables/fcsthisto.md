# Table : fcsthisto

## Description

Table historique des previsions. Archivage des previsions passees pour comparaison.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| fhitem | char(20) | Non | Article **(PK)** |
| fhdate | timestamp | Non | Date **(PK)** |
| fhqty | numeric(8) | Oui | Quantite |

## Cles et index

- **PK** : fhitem, fhdate

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
