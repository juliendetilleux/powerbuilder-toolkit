# Table : conssale

## Description

Table des ventes en consignation. Suivi des ventes de stock en depot/consignation.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ccpkcode | char(4) | Non | Code |
| ccslcode | numeric(6) | Non | Code |
| ccslline | numeric(4) | Non | Numero de ligne |
| ccqty | numeric(5) | Non | Quantite |
| ccweight | numeric(8,3) | Oui | Poids |
| cpcode | integer | Non | Code **(PK)** |

## Cles et index

- **PK** : cpcode
- **FK** : ccpkcode -> packings(pkcode)
- **FK** : ccslcode -> salline(slcode)
- **FK** : ccslline -> salline(slline)

## Relations

- **Parents (FK sortantes)** : packings, salline
- **Enfants (FK entrantes)** : salegroup

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
