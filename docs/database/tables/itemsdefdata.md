# Table : itemsdefdata

## Description

Table des donnees par defaut des articles. Valeurs par defaut pour la creation de nouveaux articles.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| itcode | char(20) | Non | Code article **(PK)** |
| itname | char(30) | Oui | Designation |
| itactiv | char(1) | Oui | Actif |
| itcrit1 | char(2) | Oui | Statistique 1 |
| itcrit2 | char(2) | Oui | Statistique 2 |
| itcrit3 | char(2) | Oui | Statistique 3 |
| itum | char(2) | Oui | Unite de mesure |
| ittyp | char(1) | Oui | Type (F=fabrique, A=achete, P=phantom) |
| itcons | char(1) | Oui | Consignation |
| itsale | char(1) | Oui | Vendable |
| itlot | char(1) | Oui | Gestion par lot |
| itqc | char(1) | Oui | Controle qualite |
| itval | decimal(16) | Oui | Methode valorisation |
| itloc | char(8) | Oui | Emplacement par defaut |
| itpol | char(1) | Oui | Politique reappro. |
| itpsize | decimal(16,3) | Oui | Taille lot planification |
| itpinsize | decimal(16,3) | Oui | Taille lot minimum |
| itpinnb | decimal(16) | Oui | Nombre minimum |
| itpnbdays | decimal(16) | Oui | Nombre jours groupage |
| itsecur | decimal(16) | Oui | Stock securite |
| itleadtime | decimal(16) | Oui | Delai approvisionnement (jours) |
| itavailtime | decimal(16) | Oui | Delai disponibilite (jours) |
| itbomlvl | decimal(16) | Oui | Niveau nomenclature |
| itbom | char(1) | Oui | A nomenclature |
| itstdcost | decimal(16,4) | Oui | Cout standard |
| itstdsal | decimal(16,4) | Oui | Prix vente standard |
| itstdpur | decimal(16,4) | Oui | Prix achat standard |
| itstock | decimal(16,3) | Oui | Stock physique |
| italloc | decimal(16,3) | Oui | Stock alloue |
| itwip | decimal(16,3) | Oui | En-cours (WIP) |
| itfrozen | decimal(16) | Oui | Periode gelee |
| itdefaultlot | char(30) | Oui | Lot par defaut |
| itctrl | char(1) | Oui | Controle |
| itsernum | char(1) | Oui | Gestion par numero de serie |
| itlastissue | timestamp | Oui | Derniere sortie |
| itweight | decimal(16,3) | Oui | Poids |
| ittvalvl | char(1) | Oui | Niveau valorisation TVA |
| itintrastat | decimal(16) | Oui | Code Intrastat |
| itcptpur | decimal(16) | Oui | Compte achat |
| itcptsal | decimal(16) | Oui | Compte vente |
| itstat1 | char(2) | Oui |  |
| itstat2 | char(2) | Oui |  |
| itconvusr | decimal(16,4) | Oui |  |
| itumusr | char(10) | Oui |  |
| itplgroup | decimal(16) | Oui | Groupe |
| itean | char(20) | Oui |  |
| itcptanal | decimal(16) | Oui |  |
| itqtypal | decimal(16) | Oui |  |
| itdesc2 | char(60) | Oui |  |
| itwistat | decimal(16,3) | Oui |  |
| itsubstpl | char(1) | Oui |  |
| itsubstit | char(20) | Oui |  |
| itorcountry | char(2) | Oui | Pays |
| itmfggroup | decimal(16) | Oui | Groupe |
| itcat | char(1) | Oui | Categorie |
| itowner | char(10) | Oui |  |
| itvol | decimal(16,3) | Oui |  |
| itcreauser | char(50) | Oui | Utilisateur |
| itcreadat | timestamp | Oui |  |
| itmodifuser | char(50) | Oui | Utilisateur |
| itmodifdat | timestamp | Oui |  |
| itbcqty | decimal(16,3) | Oui | Quantite |
| itbcauto | char(1) | Oui |  |
| itetigro | char(40) | Oui |  |
| itetipal | char(40) | Oui |  |
| itstkavg | decimal(16,3) | Oui |  |
| itstkused | decimal(16,3) | Oui |  |
| itstkrot | decimal(16,2) | Oui |  |
| itean2 | char(20) | Oui |  |
| itean2conv | decimal(16) | Oui |  |
| itean3 | char(20) | Oui |  |
| itean3conv | decimal(16) | Oui |  |
| iteanref | char(1) | Oui | Reference |
| itean2ref | char(1) | Oui | Reference |
| itean3ref | char(1) | Oui | Reference |
| itetiitem | char(40) | Oui | Article |
| itcptinv | decimal(16) | Oui |  |
| ittransfered | char(1) | Oui |  |
| itif2trf | char(1) | Oui |  |
| itrcnopur | char(1) | Oui |  |
| itbascost | decimal(16,4) | Oui |  |
| itmfgxtrcost | decimal(16,4) | Oui |  |
| itwc | char(8) | Oui |  |
| itpurxtrcost | decimal(16,4) | Oui |  |
| itclotctrl | char(1) | Oui |  |
| itclotref | char(6) | Oui | Reference |
| itfinalprice | decimal(16,4) | Oui | Prix |
| italttyp | char(1) | Oui |  |
| itlblproc | char(8) | Oui |  |
| ittare | decimal(16,3) | Oui |  |
| itsalghost | char(1) | Oui |  |
| itcommission | decimal(16,2) | Oui |  |
| ittddatemodif | timestamp | Oui | Modifie |
| ittdbomlvl | decimal(16) | Oui |  |
| ittechdatarecal | timestamp | Oui |  |
| ittdtorecalc | char(1) | Oui |  |
| ittax01 | decimal(16) | Oui | Code taxe |
| ittax02 | decimal(16) | Oui | Code taxe |
| ittax03 | decimal(16) | Oui | Code taxe |
| ittax04 | decimal(16) | Oui | Code taxe |
| ittax05 | decimal(16) | Oui | Code taxe |
| ittax06 | decimal(16) | Oui | Code taxe |
| ittax07 | decimal(16) | Oui | Code taxe |
| ittax08 | decimal(16) | Oui | Code taxe |
| ittax09 | decimal(16) | Oui | Code taxe |
| ittax10 | decimal(16) | Oui | Code taxe |
| itetiitemof | char(40) | Oui |  |
| itetigroof | char(40) | Oui |  |
| itetipalof | char(40) | Oui |  |
| itetiitemofprnt | decimal(16) | Oui |  |
| itetigroofprnt | decimal(16) | Oui |  |
| itetipalofprnt | decimal(16) | Oui |  |
| itbackflushexp | char(1) | Oui |  |
| itcol2 | decimal(16) | Oui |  |
| itcratesweight | char(1) | Oui | Poids |
| itwebtype | decimal(16) | Oui | Type |
| itwebum | char(8) | Oui | Unite de mesure |
| itwebatcom | char(1) | Oui |  |
| itwebvisible | char(1) | Oui |  |
| itumean2 | char(2) | Oui |  |
| itumean3 | char(2) | Oui |  |
| itplu | char(4) | Oui |  |
| itdirsaldesc | char(20) | Oui | Description |
| itbatchmfg | char(1) | Oui |  |
| itwebtype2 | decimal(16) | Oui |  |
| ititemof | char(20) | Oui |  |
| itisfrozen | char(1) | Oui |  |
| itbcdweightsal | char(1) | Oui |  |
| itmfggeneric | char(1) | Oui |  |

## Cles et index

- **PK** : itcode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
