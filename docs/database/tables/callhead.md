# Table : callhead

## Description

Table en-tete des appels de livraison. Gestion des appels de livraison clients (livraisons planifiees).

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| chid | numeric(8) | Non |  **(PK)** |
| chadid | char(10) | Oui |  |
| chctid | numeric(4) | Oui |  |
| chdesc | varchar(60) | Oui | Description |
| chadcmnt | varchar(9000) | Oui | Commentaire |
| chcmnt | long varcha(32767) | Oui | Commentaire |
| chorigin | numeric(3) | Oui |  |
| chstatus | numeric(3) | Oui | Statut |
| chfixend | char(1) | Oui |  |
| chfixenddat | timestamp | Oui | Date fin |
| chcontracttyp | numeric(3) | Oui |  |
| chwebvisible | char(1) | Oui |  |
| chpriority | numeric(3) | Oui |  |
| chfilehead | numeric(6) | Oui |  |
| chfileline | numeric(4) | Oui | Numero de ligne |
| chcreadat | timestamp | Oui |  |
| chcreausr | varchar(8) | Oui |  |
| chmanageddat | timestamp | Oui |  |
| chmanagedusr | varchar(8) | Oui |  |
| chhandldat | timestamp | Oui |  |
| chhandlusr | varchar(8) | Oui |  |
| chpreclotdat | timestamp | Oui |  |
| chclotdat | timestamp | Oui |  |
| chcateg | numeric(3) | Oui |  |
| chpreclotusr | varchar(8) | Oui |  |
| chclotusr | varchar(8) | Oui |  |
| chtimeused | numeric(8) | Oui |  |
| chitem | varchar(20) | Oui | Article |
| chlot | char(30) | Oui | Lot |
| chmccode | varchar(10) | Oui | Code |
| chqt | numeric(12,3) | Oui |  |
| chne | integer | Oui |  |
| chline | integer | Oui | Numero de ligne |
| chreturn | numeric(1) | Oui |  |
| chrecepdat | timestamp | Oui |  |
| chreturnprice | numeric(12,3) | Oui | Prix |
| chihmcdoseq | numeric(20) | Oui | Sequence |

## Cles et index

- **PK** : chid
- **Index** : ind_hc01 (chadid) [non-unique]
- **Index** : ind_hc02 (chpriority) [non-unique]
- **Index** : ind_hc03 (chcreadat) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
