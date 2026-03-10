# Table : edisalhead

## Description

Table en-tete des commandes EDI. Commandes de vente recues par echange electronique.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ehenvsend | char(13) | Non |  **(PK)** |
| ehheadref | char(35) | Non | Reference **(PK)** |
| ehenvid | char(14) | Oui |  |
| ehcustean | char(13) | Oui |  |
| ehcustid | char(10) | Oui |  |
| ehdocdate | timestamp | Oui | Date |
| ehreqdate | timestamp | Oui | Date |
| ehcurr | char(3) | Oui | Devise |
| ehstatus | char(1) | Oui | Statut |
| ehsalorder | numeric(6) | Non |  **(PK)** |
| ehcmnt | varchar(240) | Oui | Commentaire |
| ehpickupdate | timestamp | Oui | Date |
| ehenvrec | varchar(13) | Non |  **(PK)** |
| ehsaledate | timestamp | Oui | Date |
| ehtype | char(1) | Oui | Type |
| ehprinted | char(1) | Oui |  |
| ehmgnl | char(13) | Oui |  |

## Cles et index

- **PK** : ehenvsend, ehheadref, ehenvrec, ehsalorder

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
