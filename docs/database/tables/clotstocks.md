# Table : clotstocks

## Description

Table de cloture des stocks. Valorisation du stock lors de la cloture de periode.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| CsItem | char(20) | Non | Article **(PK)** |
| CsLot | char(30) | Non | Lot **(PK)** |
| CsLoc | char(8) | Non | Emplacement **(PK)** |
| CsQtyOrig | numeric(12,3) | Oui |  |
| CsQtyCorr | numeric(12,3) | Oui |  |
| csqtyorig_trf | numeric(12,3) | Oui |  |
| csqtycorr_trf | numeric(12,3) | Oui |  |

## Cles et index

- **PK** : CsItem, CsLot, CsLoc

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
