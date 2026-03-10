# Table : contacts

## Description

Table des contacts. Personnes de contact associees aux adresses (tiers).

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ctadcode | char(10) | Non | Code adresse **(PK)** |
| ctline | numeric(4) | Non | Numero de ligne **(PK)** |
| ctname | char(30) | Oui | Nom |
| ctfunction | char(35) | Oui | Fonction |
| cttel | char(20) | Oui |  |
| ctfax | char(20) | Oui | Fax |
| ctcomm | char(30) | Oui |  |
| ctmail | varchar(100) | Oui | Email |
| ctgsm | varchar(20) | Oui |  |
| ctciv1 | char(1) | Oui |  |
| ctservice | varchar(30) | Oui |  |
| ctlangue | char(2) | Oui |  |
| ctinteret | varchar(20) | Oui |  |
| ctcmnt | varchar(50) | Oui | Commentaire |
| ctactiv | char(1) | Oui | Actif |
| ctmain | char(1) | Oui |  |
| ctsort | numeric(4) | Oui | Ordre de tri |
| ctlogin | varchar(50) | Oui |  |
| ctpassword | varchar(50) | Oui |  |
| ctfirstname | varchar(30) | Oui | Nom |
| ctcrmuf01 | numeric(3) | Oui | Champ utilisateur CRM |
| ctcrmuf02 | numeric(3) | Oui | Champ utilisateur CRM |
| ctcrmuf03 | numeric(3) | Oui | Champ utilisateur CRM |
| ctcrmuf04 | numeric(3) | Oui | Champ utilisateur CRM |
| ctcrmuf05 | numeric(3) | Oui | Champ utilisateur CRM |
| ctcrmuf06 | numeric(3) | Oui | Champ utilisateur CRM |
| ctcrmuf07 | numeric(3) | Oui | Champ utilisateur CRM |
| ctcrmuf08 | numeric(3) | Oui | Champ utilisateur CRM |
| ctcrmuf09 | numeric(3) | Oui | Champ utilisateur CRM |
| ctcrmuf10 | numeric(3) | Oui | Champ utilisateur CRM |
| ctcrmuf11 | numeric(3) | Oui | Champ utilisateur CRM |
| ctcrmuf12 | numeric(3) | Oui | Champ utilisateur CRM |
| ctcrmuf13 | numeric(3) | Oui | Champ utilisateur CRM |
| ctcrmuf14 | numeric(3) | Oui | Champ utilisateur CRM |
| ctcrmuf15 | numeric(3) | Oui | Champ utilisateur CRM |
| ctfunc | numeric(3) | Oui |  |
| ctmadcode | char(10) | Oui | Code |
| ctmline | numeric(4) | Oui | Numero de ligne |
| ctmulti | char(1) | Oui |  |
| ctmailtocpt | char(1) | Oui |  |
| ctwebcallview | char(1) | Oui |  |
| ct_tel2 | char(20) | Oui |  |
| ctpoint | numeric(1) | Oui |  |
| ctid | numeric(10) | Non |  |
| ctidsmartsales | varchar(20) | Oui |  |

## Cles et index

- **PK** : ctadcode, ctline

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
