# Table : callreturn

## Description

Table des retours d'appels de livraison. Suivi des retours de marchandises sur appels.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| crchid | numeric(10) | Non |  **(PK)** |
| crline | numeric(3) | Non | Numero de ligne **(PK)** |
| critem | char(20) | Oui | Article |
| crlot | char(30) | Oui | Lot |
| crqt | decimal(3) | Oui |  |
| crslcode | numeric(20) | Oui | Code |
| crslline | numeric(3) | Oui | Numero de ligne |

## Cles et index

- **PK** : crchid, crline

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
