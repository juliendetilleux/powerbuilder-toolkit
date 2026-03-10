# Table : comsalhead

## Description

Table en-tete des commissions de vente. Calcul et suivi des commissions commerciales.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| cshcomid | numeric(9) | Non |  **(PK)** |
| cshsalesman | varchar(8) | Non |  **(PK)** |
| cshcust | varchar(10) | Oui | Client |
| cshstatus | varchar(1) | Oui | Statut |
| cshcode | numeric(6) | Oui | Code |
| cshcustref | varchar(40) | Oui | Reference |
| cshcurr | varchar(3) | Oui | Devise |
| cshdatcrea | timestamp | Oui |  |
| cshdatreq | timestamp | Oui |  |
| cshcmnt | varchar(240) | Oui | Commentaire |
| cshautho | varchar(1) | Oui |  |
| cshcustpay | varchar(1) | Oui |  |
| cshshipcost | varchar(1) | Oui |  |
| cshextracosts | varchar(1) | Oui |  |
| cshcreauser | varchar(8) | Oui | Utilisateur |
| cshorigin | varchar(1) | Oui |  |

## Cles et index

- **PK** : cshcomid, cshsalesman

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
