# Table : edisalline

## Description

Table des lignes de commandes EDI. Detail des lignes de commandes recues par EDI.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| esenvsend | char(13) | Non |  **(PK)** |
| esheadref | char(35) | Non | Reference **(PK)** |
| esline | numeric(6) | Non | Numero de ligne **(PK)** |
| esitemean | char(14) | Oui |  |
| escuitemean | char(14) | Oui |  |
| esitemid | char(20) | Oui |  |
| escustdesc | char(35) | Oui | Description |
| esqty | numeric(10,3) | Oui | Quantite |
| esreqdate | timestamp | Oui | Date |
| esshiptoean | char(13) | Oui |  |
| esshiptoseq | numeric(3) | Oui | Sequence |
| escmnt | varchar(240) | Oui | Commentaire |
| esqtyorig | numeric(10,3) | Oui |  |
| esuomord | varchar(7) | Oui |  |
| esenvrec | varchar(13) | Non |  **(PK)** |
| essuppcode | varchar(64) | Oui | Code |

## Cles et index

- **PK** : esenvsend, esheadref, esline, esenvrec

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
