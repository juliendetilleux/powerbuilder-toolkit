# Table : colisage

## Description

Table des colisages. Gestion des colis et conditionnements pour les expeditions.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| clcode | numeric(9) | Non | Numero reclamation **(PK)** |
| clsalhead | numeric(6) | Oui |  |
| clsalline | numeric(4) | Oui | Numero de ligne |
| clallocseq | numeric(4) | Oui | Sequence |
| clpallet | varchar(30) | Oui |  |
| clcraft | varchar(50) | Oui |  |
| clqty | numeric(8,3) | Oui | Quantite |
| cllot | char(30) | Oui | Lot |

## Cles et index

- **PK** : clcode
- **FK** : clsalhead -> salline(slcode)
- **FK** : clsalline -> salline(slline)

## Relations

- **Parents (FK sortantes)** : salline
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
