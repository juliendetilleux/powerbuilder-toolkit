# Table : histocons

## Description

Table historique de consignation. Archive des mouvements de consignation.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| hcseq | numeric(12) | Non | Sequence **(PK)** |
| hccode | char(4) | Non | Code |
| hcreasn | char(1) | Non |  |
| hcordtyp | char(1) | Oui |  |
| hcordno | numeric(8) | Oui |  |
| hcordlin | numeric(3) | Oui |  |
| hchistseq | numeric(12) | Oui | Sequence |
| hcpack | char(4) | Oui |  |
| hcowner | char(10) | Oui |  |
| hcloc | char(10) | Oui | Emplacement |
| hcqty | numeric(6) | Oui | Quantite |
| hcuser | char(50) | Oui | Utilisateur |
| hcdatim | timestamp | Oui |  |
| hccomment | varchar(30) | Oui | Commentaire |
| hcinv | char(1) | Oui |  |
| hcordlin2 | numeric(3) | Oui |  |
| hcinvcode | numeric(6) | Oui | Code |
| hcinvcline | numeric(4) | Oui | Numero de ligne |

## Cles et index

- **PK** : hcseq
- **Index** : ixc_Profile_28 (hcloc) [non-unique]
- **Index** : ordno (hcordno) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
