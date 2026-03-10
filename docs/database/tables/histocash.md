# Table : histocash

## Description

Table historique de caisse. Journal des operations de caisse.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| hhseq | numeric(12) | Non | Sequence **(PK)** |
| hhcode | char(4) | Oui | Code |
| hhpaytyp | numeric(3) | Oui |  |
| hhcash | char(2) | Oui |  |
| hhordtyp | char(1) | Oui |  |
| hhordno | numeric(12) | Oui |  |
| hhdate | timestamp | Oui | Date |
| hhval | numeric(8,2) | Oui | Valeur |
| hhuser | varchar(8) | Oui | Utilisateur |
| hhcmnt | varchar(30) | Oui | Commentaire |
| hhcmntprg | varchar(30) | Oui |  |

## Cles et index

- **PK** : hhseq
- **Index** : ixc_Profile_7 (hhordno, hhcash, hhordtyp, hhpaytyp) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
