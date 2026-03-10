# Table : adrsactions

## Description

Table des actions CRM. Historique des actions commerciales, appels, visites, relances liees aux tiers.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| aacode | numeric(6) | Non | Code **(PK)** |
| aaadrid | char(10) | Oui |  |
| aacontactid | numeric(4) | Oui |  |
| aaaction | numeric(2) | Oui |  |
| aacreator | char(50) | Oui |  |
| aarespons | char(50) | Oui | Responsable |
| aaactiondate | timestamp | Oui | Date |
| aalimitdate | timestamp | Oui | Date |
| aatiming | numeric(4) | Oui |  |
| aaparcode | numeric(6) | Oui | Code |
| aastatus | char(1) | Oui | Statut |
| aacomment | long varcha(32767) | Oui | Commentaire |
| aadesc | varchar(50) | Oui | Description |
| aacreadate | timestamp | Oui | Date creation |
| aaprojet | numeric(6) | Oui |  |
| aaread | char(1) | Oui |  |
| aareaddate | timestamp | Oui | Date |
| aastsdat | timestamp | Oui |  |
| aamoddat | timestamp | Oui | Date modification |
| aamoduser | char(50) | Oui | Utilisateur |
| aafileref | numeric(4) | Oui | Reference |
| aawccost | numeric(8,4) | Oui |  |
| aauscost | numeric(8,4) | Oui |  |
| aarealcost | numeric(8,4) | Oui |  |
| aainvstatus | char(1) | Oui | Statut |
| aafileline | numeric(4) | Oui | Numero de ligne |
| aarealtiming | numeric(4) | Oui |  |
| aaextratiming | numeric(4) | Oui |  |
| aasalorder | numeric(6) | Oui |  |
| aasalline | numeric(4) | Oui | Numero de ligne |
| aainvoicehead | numeric(6) | Oui |  |
| aainvoiceline | numeric(3) | Oui | Numero de ligne |
| aawfhead | numeric(6) | Oui |  |
| aawfline | numeric(3) | Oui | Numero de ligne |
| aawfsuccess | char(1) | Oui |  |
| aawffinish | char(1) | Oui |  |
| aagroup | numeric(6) | Oui | Groupe |
| aaquoteval | numeric(9,2) | Oui | Valeur |
| aafarunid | numeric(6) | Oui |  |
| aaitem | char(20) | Oui | Article |
| aapriority | numeric(3) | Oui |  |
| aapersuccess | numeric(5,2) | Oui |  |
| aauserddlb | numeric(3) | Oui |  |
| aafrcstdate | timestamp | Oui | Date |
| aadocref | numeric(7) | Oui | Reference |
| aaqty | numeric(12,3) | Oui | Quantite |
| aagrouptyp | char(1) | Oui |  |
| aaifoutlook | char(1) | Oui |  |
| aacoeff | numeric(16,10) | Oui | Coefficient |
| aatoinv | char(1) | Oui |  |
| aacallid | numeric(8) | Oui |  |
| aakm | numeric(4) | Oui |  |
| aamccdo | char(10) | Oui |  |
| aacomment_int | long varcha(32767) | Oui |  |
| aasaid | integer | Oui |  |
| aaslid | integer | Oui |  |
| aasltiming | numeric(4) | Oui |  |
| aamailsend | timestamp | Oui |  |
| aaconfirmstatus | integer | Oui | Statut |
| aaconfirmdate | timestamp | Oui | Date |
| aaconfirmtext | long varcha(32767) | Oui |  |
| aaconfirmemail | varchar(255) | Oui | Email |

## Cles et index

- **PK** : aacode
- **FK** : aaaction -> activities(accode)
- **FK** : aaadrid -> adresses(adcode)
- **FK** : aafileref -> filehead(fhcode)
- **Index** : aa1_adrsactions (aarespons, aaactiondate) [non-unique]
- **Index** : aa_idx_group (aagroup) [non-unique]
- **Index** : id_adrsactions_farunid (aafarunid) [non-unique]
- **Index** : in_nu_adrsactions (aaadrid, aastatus) [non-unique]
- **Index** : ind_aa01 (aacallid) [non-unique]
- **Index** : index_docref (aadocref) [non-unique]
- **Index** : index_filinadrsaction (aafileref, aafileline) [non-unique]

## Relations

- **Parents (FK sortantes)** : activities, adresses, filehead
- **Enfants (FK entrantes)** : expenses

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
