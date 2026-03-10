# Table : fedex_pdf

## Description

Table des PDF FedEx. Stockage des etiquettes et documents generes par FedEx.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| id_pdf | integer | Non |  |
| mastertrackingi | varchar(255) | Non |  |
| trackingnumber | varchar(255) | Non |  |
| stringbarcodes | varchar(255) | Non |  |
| label | long binary | Oui |  |

## Cles et index

- **PK** : mastertrack, trackingnum

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
