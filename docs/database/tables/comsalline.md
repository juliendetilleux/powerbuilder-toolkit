# Table : comsalline

## Description

Table des lignes de commissions de vente. Detail des commissions par ligne de vente.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| cslcomidhead | numeric(9) | Non |  |
| cslsalesman | varchar(8) | Non |  **(PK)** |
| cslcomidline | numeric(9) | Non | Numero de ligne |
| cslstatus | varchar(1) | Oui | Statut |
| cslcode | numeric(6) | Oui | Code |
| cslline | numeric(4) | Oui | Numero de ligne |
| cslitem | varchar(20) | Oui | Article |
| cslqtyord | numeric(10,3) | Oui |  |
| cslcustref | varchar(40) | Oui | Reference |
| csldatreq | timestamp | Oui |  |
| cslstdval | numeric(10,4) | Oui | Valeur |
| csldatcrea | timestamp | Oui |  |
| cslshipto | numeric(4) | Oui |  |
| cslorval | numeric(10,4) | Oui | Valeur |
| cslorigin | varchar(1) | Oui |  |
| cslqtyreq | numeric(10,3) | Oui |  |
| csluomord | varchar(5) | Oui |  |
| csluomconv | numeric(12,6) | Oui |  |
| cslsalval | numeric(8,2) | Oui | Valeur |
| cslrist | numeric(4,2) | Oui |  |
| cslsample | varchar(1) | Oui |  |
| cslcomment | long varcha(32767) | Oui | Commentaire |
| cslpricetype | varchar(1) | Oui | Type |
| cslunitprice | numeric(10,4) | Oui | Prix |
| cslbaseprice | numeric(10,4) | Oui | Prix |
| cslfinalprice | numeric(12,4) | Oui | Prix |

## Cles et index

- **PK** : cslcomidhea, cslsalesman, cslcomidlin

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
