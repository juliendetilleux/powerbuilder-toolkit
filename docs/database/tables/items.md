# Table : items

## Description

Table principale des articles. Referentiel produit avec toutes les donnees techniques, commerciales et logistiques.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| itcode | char(20) | Non | Code article **(PK)** |
| itname | char(30) | Non | Designation |
| itactiv | char(1) | Non | Actif |
| itcrit1 | char(2) | Oui | Statistique 1 |
| itcrit2 | char(2) | Oui | Statistique 2 |
| itcrit3 | char(2) | Oui | Statistique 3 |
| itum | char(2) | Oui | Unite de mesure |
| ittyp | char(1) | Oui | Type (F=fabrique, A=achete, P=phantom) |
| itcons | char(1) | Oui | Consignation |
| itsale | char(1) | Oui | Vendable |
| itlot | char(1) | Oui | Gestion par lot |
| itqc | char(1) | Oui | Controle qualite |
| itval | numeric(4) | Oui | Methode valorisation |
| itloc | char(8) | Oui | Emplacement par defaut |
| itpol | char(1) | Oui | Politique reappro. |
| itpsize | numeric(11,3) | Oui | Taille lot planification |
| itpinsize | numeric(11,3) | Oui | Taille lot minimum |
| itpinnb | numeric(2) | Oui | Nombre minimum |
| itpnbdays | numeric(4) | Oui | Nombre jours groupage |
| itsecur | numeric(10,3) | Oui | Stock securite |
| itleadtime | numeric(4) | Oui | Delai approvisionnement (jours) |
| itavailtime | numeric(4) | Oui | Delai disponibilite (jours) |
| itbomlvl | numeric(2) | Oui | Niveau nomenclature |
| itbom | char(1) | Oui | A nomenclature |
| itstdcost | numeric(10,4) | Oui | Cout standard |
| itstdsal | numeric(10,4) | Oui | Prix vente standard |
| itstdpur | numeric(10,4) | Oui | Prix achat standard |
| itstock | numeric(12,3) | Oui | Stock physique |
| italloc | numeric(12,3) | Oui | Stock alloue |
| itwip | numeric(12,3) | Oui | En-cours (WIP) |
| itfrozen | numeric(4) | Oui | Periode gelee |
| itdefaultlot | char(30) | Oui | Lot par defaut |
| itctrl | char(1) | Oui | Controle |
| itsernum | char(1) | Oui | Gestion par numero de serie |
| itlastissue | timestamp | Oui | Derniere sortie |
| itweight | numeric(8,3) | Oui | Poids |
| ittvalvl | char(1) | Oui | Niveau valorisation TVA |
| itintrastat | numeric(4) | Oui | Code Intrastat |
| itcptpur | numeric(4) | Oui | Compte achat |
| itcptsal | numeric(4) | Oui | Compte vente |
| itstat1 | char(2) | Oui |  |
| itstat2 | char(2) | Oui |  |
| itconvusr | numeric(8,2) | Oui |  |
| itumusr | char(10) | Oui |  |
| itplgroup | numeric(2) | Oui | Groupe |
| itean | char(20) | Oui |  |
| itcptanal | numeric(4) | Oui |  |
| itqtypal | numeric(6) | Oui |  |
| itdesc2 | varchar(60) | Oui |  |
| itwistat | numeric(8,3) | Oui |  |
| itsubstpl | char(1) | Oui |  |
| itsubstit | char(20) | Oui |  |
| itorcountry | char(2) | Oui | Pays |
| itmfggroup | numeric(2) | Oui | Groupe |
| itcat | char(1) | Oui | Categorie |
| itowner | char(10) | Oui |  |
| itvol | numeric(8,3) | Oui |  |
| itcreauser | char(50) | Oui | Utilisateur |
| itcreadat | timestamp | Oui |  |
| itmodifuser | char(50) | Oui | Utilisateur |
| itmodifdat | timestamp | Oui |  |
| itbcqty | numeric(9,3) | Oui | Quantite |
| itbcauto | char(1) | Oui |  |
| itetigro | varchar(40) | Oui |  |
| itetipal | varchar(40) | Oui |  |
| itstkavg | numeric(12,3) | Oui |  |
| itstkused | numeric(12,3) | Oui |  |
| itstkrot | numeric(6,2) | Oui |  |
| itean2 | varchar(20) | Oui |  |
| itean2conv | numeric(9,4) | Oui |  |
| itean3 | varchar(20) | Oui |  |
| itean3conv | numeric(9,4) | Oui |  |
| iteanref | char(1) | Oui | Reference |
| itean2ref | char(1) | Oui | Reference |
| itean3ref | char(1) | Oui | Reference |
| itetiitem | varchar(40) | Oui | Article |
| itcptinv | numeric(4) | Oui |  |
| ittransfered | char(1) | Oui |  |
| itif2trf | char(1) | Oui |  |
| itrcnopur | char(1) | Oui |  |
| itbascost | numeric(12,4) | Oui |  |
| itmfgxtrcost | numeric(12,4) | Oui |  |
| itwc | char(8) | Oui |  |
| itpurxtrcost | numeric(12,4) | Oui |  |
| itclotctrl | char(1) | Oui |  |
| itclotref | char(6) | Oui | Reference |
| itfinalprice | numeric(12,4) | Oui | Prix |
| italttyp | char(1) | Oui |  |
| itlblproc | char(8) | Oui |  |
| ittare | numeric(8,3) | Oui |  |
| itsalghost | char(1) | Oui |  |
| itcommission | numeric(5,2) | Oui |  |
| ittddatemodif | timestamp | Oui | Modifie |
| ittdbomlvl | numeric(2) | Oui |  |
| ittechdatarecal | timestamp | Oui |  |
| ittdtorecalc | char(1) | Oui |  |
| ittax01 | numeric(3) | Oui | Code taxe |
| ittax02 | numeric(3) | Oui | Code taxe |
| ittax03 | numeric(3) | Oui | Code taxe |
| ittax04 | numeric(3) | Oui | Code taxe |
| ittax05 | numeric(3) | Oui | Code taxe |
| ittax06 | numeric(3) | Oui | Code taxe |
| ittax07 | numeric(3) | Oui | Code taxe |
| ittax08 | numeric(3) | Oui | Code taxe |
| ittax09 | numeric(3) | Oui | Code taxe |
| ittax10 | numeric(3) | Oui | Code taxe |
| itetiitemof | varchar(40) | Oui |  |
| itetigroof | varchar(40) | Oui |  |
| itetipalof | varchar(40) | Oui |  |
| itetiitemofprnt | numeric(3) | Oui |  |
| itetigroofprnt | numeric(3) | Oui |  |
| itetipalofprnt | numeric(3) | Oui |  |
| itbackflushexp | char(1) | Oui |  |
| itcol2 | numeric(5) | Oui |  |
| itcratesweight | char(1) | Oui | Poids |
| itwebtype | numeric(3) | Oui | Type |
| itwebum | varchar(8) | Oui | Unite de mesure |
| itwebatcom | char(1) | Oui |  |
| itwebvisible | char(1) | Oui |  |
| itumean2 | char(2) | Oui |  |
| itumean3 | char(2) | Oui |  |
| itplu | varchar(6) | Oui |  |
| itdirsaldesc | varchar(20) | Oui | Description |
| itbatchmfg | char(1) | Oui |  |
| itwebtype2 | numeric(3) | Oui |  |
| ititemof | varchar(20) | Oui |  |
| itisfrozen | char(1) | Oui |  |
| itbcdweightsal | char(1) | Oui |  |
| itmfggeneric | char(1) | Oui |  |
| itstkused2 | numeric(12,3) | Oui |  |
| itpurchaseauto | char(1) | Oui |  |
| itshowetiq | char(1) | Oui |  |
| itupdpurcost | numeric(12,4) | Oui |  |
| itdateupdpurcos | timestamp | Oui |  |
| itisumtarif | char(1) | Oui |  |
| itumtarif | char(2) | Oui |  |
| itumtarifconv | numeric(12,8) | Oui |  |
| itumtbascost | numeric(12,4) | Oui |  |
| itumtxtrcost | numeric(12,4) | Oui |  |
| itismonit | char(1) | Oui |  |
| ittoalloc | char(1) | Oui | Emplacement |
| itratemodval | numeric(11,5) | Oui | Valeur |
| itatedaterupd | timestamp | Oui |  |
| itqtydisc | char(1) | Oui | Remise |
| itfreezable | char(1) | Oui |  |
| itnbdayfreeze | numeric(4) | Oui |  |
| itnbdaythaw | numeric(4) | Oui |  |
| itqtyfile | numeric(6) | Oui |  |
| itlocpic | varchar(8) | Oui |  |
| itmccode | varchar(10) | Oui | Code |
| itcont | char(1) | Oui |  |
| itnbdaycont | numeric(4) | Oui |  |
| itacount | char(1) | Oui |  |
| ittrfsupp | numeric(2) | Oui | Fournisseur |
| ituseeaninv | numeric(1) | Oui |  |
| itlblproc2 | varchar(8) | Oui |  |
| it_sortfoodcash | integer | Oui |  |
| it_excl_rec_daa | char(1) | Oui |  |
| itstat3 | char(2) | Oui |  |
| itstat4 | char(2) | Oui |  |
| itoption | char(1) | Oui |  |
| itlength | numeric(8,3) | Oui | Longueur |
| itwidth | numeric(8,3) | Oui | Largeur |
| itheight | numeric(8,3) | Oui | Hauteur |
| itspare | char(1) | Oui |  |
| Itcanrebilling | char(1) | Non |  |
| itusebatch | char(1) | Non |  |
| itqtybybatch | numeric(7,2) | Non |  |
| itptshipnotice | varchar(30) | Oui |  |
| itsquaremeter | numeric(6,3) | Oui |  |
| itcalcalcool | numeric(1) | Non |  |
| itvalesc | numeric(10,4) | Oui |  |
| itpn | varchar(256) | Oui |  |
| it_decompose_td | numeric(1) | Non |  |
| it_wms_rot | integer | Oui |  |
| it_wms_coderot | numeric(3) | Oui |  |
| it_eansendwms | varchar(20) | Oui |  |
| it_id | unsigned in(4) | Oui |  |
| itpoint | char(1) | Oui |  |
| itsumqtyinsal | char(1) | Oui |  |
| itstdsalold | numeric(10,4) | Oui |  |

## Cles et index

- **PK** : itcode
- **Index** : ixc_profile_6 (itsale, itactiv) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : SUBLINE_REP, SUBLINE_SAL, WMS_CSS, bomcoitem, bomhead, bomline, except_rate_itad, forecasts, itempack, link_lbl_logo, linkactivities, linkitad, linkitadtd, linkitloc, lots, matallocs, matreq, mfgcoitem, mfgcoitemsal, mfghead, mfglallocs, purline, rateline, salline, shipline, srvcrqmat, stocks, techlink, transact_with_co, trustbox

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
