# Table : invoicetva

## Description

Table TVA des factures. Ventilation TVA par taux applicable sur les factures.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| itcode | numeric(6) | Non | Code article **(PK)** |
| ittva | numeric(6,4) | Non |  **(PK)** |
| ittvaval | numeric(8,2) | Oui | Valeur |
| itbasetva | numeric(8,2) | Oui |  |

## Cles et index

- **PK** : itcode, ittva
- **FK** : itcode -> invoicehead(ihcode)

## Relations

- **Parents (FK sortantes)** : invoicehead
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
