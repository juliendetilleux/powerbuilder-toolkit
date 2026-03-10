# Table : invoicecpt

## Description

Table comptable des factures. Ecritures comptables generees par les factures.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| iccode | numeric(6) | Non | Code **(PK)** |
| iccptsal | varchar(12) | Non |  **(PK)** |
| ictva | numeric(6,4) | Non |  **(PK)** |
| icbasval | numeric(8,2) | Oui | Valeur |
| iccurbasval | numeric(8,2) | Oui | Valeur |
| ictvaval | numeric(8,2) | Oui | Valeur |
| iccurtvaval | numeric(8,2) | Oui | Valeur |

## Cles et index

- **PK** : iccode, iccptsal, ictva

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
