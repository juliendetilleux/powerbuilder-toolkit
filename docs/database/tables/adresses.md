# Table : adresses

## Description

Table principale des adresses (tiers). Contient clients, fournisseurs, sous-traitants, prospects avec leurs coordonnees et parametres commerciaux.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| adcode | char(10) | Non | Code adresse **(PK)** |
| adname | char(30) | Non | Nom |
| adcust | char(1) | Oui | Client |
| adsupp | char(1) | Oui | Fournisseur |
| adactiv | char(1) | Oui | Actif |
| adadr1 | char(30) | Oui | Adresse ligne 1 |
| adadr2 | char(30) | Oui | Adresse ligne 2 |
| adzip | char(10) | Oui | Code postal |
| adloc | char(25) | Oui | Localite |
| adcountr | char(20) | Oui | Pays |
| adtva | char(15) | Oui | Numero TVA |
| adreg | char(15) | Oui | Registre de commerce |
| adcustpay | char(1) | Oui | Condition paiement client |
| adsupppay | char(1) | Oui | Condition paiement fournisseur |
| adcustval | numeric(10,2) | Oui | Chiffre affaires client |
| adsuppval | numeric(10,2) | Oui | Chiffre affaires fournisseur |
| adcustord | timestamp | Oui | Derniere commande client |
| adsuppord | timestamp | Oui | Derniere commande fournisseur |
| adinvto | char(10) | Oui | Facturer a (code adresse) |
| adcmnt | char(50) | Oui | Commentaire |
| adcurr | char(3) | Oui | Devise |
| adshipdays | numeric(3) | Oui | Delai livraison (jours) |
| adinvcopy | numeric(2) | Oui | Nombre copies facture |
| adtvalvl | char(1) | Oui | Niveau TVA |
| adtel | char(20) | Oui | Telephone |
| adfax | char(20) | Oui | Fax |
| admail | char(50) | Oui | Email |
| adlang | char(2) | Oui | Langue |
| adbank | char(35) | Oui | Compte bancaire |
| adidcptsupp | char(30) | Oui | Id comptable fournisseur |
| adidcptcust | char(30) | Oui | Id comptable client |
| adsoldesupp | numeric(10,2) | Oui | Solde fournisseur |
| adsoldecust | numeric(10,2) | Oui | Solde client |
| adimputsupp | char(30) | Oui | Imputation fournisseur |
| adimputcust | char(30) | Oui | Imputation client |
| admemo | long varcha(32767) | Oui | Memo |
| adrateid | char(1) | Oui | Code tarif |
| adtvatyp | char(1) | Oui | Type TVA |
| adcountrid | char(2) | Oui | Code pays ISO |
| adgrading | char(1) | Oui | Classification |
| adristcust | numeric(4,2) | Oui | Ristourne client (%) |
| adesctcust | numeric(4,2) | Oui | Escompte client (%) |
| adfcst | char(1) | Oui | Inclure previsions |
| adgrsupp | char(5) | Oui | Groupe fournisseur |
| adgrcust | char(5) | Oui | Groupe client |
| addlvt | char(1) | Oui | Bon livraison |
| adsalesauth | char(1) | Oui | Autorisation vente |
| admodif | char(1) | Oui | Modifie |
| admoddat | timestamp | Oui | Date modification |
| adneval | char(1) | Oui | Nouvelle evaluation |
| adeancode | char(13) | Oui | Code EAN |
| adsalesman | char(8) | Oui | Representant |
| adcreadat | timestamp | Oui | Date creation |
| adcreauser | char(50) | Oui | Utilisateur creation |
| admodifuser | char(50) | Oui | Utilisateur modification |
| adurl | varchar(40) | Oui | URL site web |
| adedil | char(1) | Oui | EDI actif |
| adpaymode | numeric(2) | Oui | Mode paiement |
| adshipcopy | numeric(2) | Oui | Copies bon livraison |
| adordinfo | varchar(180) | Oui | Info commande |
| adetigro | varchar(40) | Oui | Etiquette colis |
| adetipal | varchar(40) | Oui | Etiquette palette |
| adtype | numeric(3) | Oui | Type adresse |
| adcrmuf01 | numeric(3) | Oui | Champ CRM utilisateur 1 |
| adcrmuf02 | numeric(3) | Oui | Champ CRM utilisateur 2 |
| adcrmuf03 | numeric(3) | Oui | Champ CRM utilisateur 3 |
| adcrmuf04 | numeric(3) | Oui | Champ CRM utilisateur 4 |
| adcrmuf05 | numeric(3) | Oui | Champ CRM utilisateur 5 |
| adcrmuf06 | numeric(3) | Oui | Champ CRM utilisateur 6 |
| adcrmuf07 | numeric(3) | Oui | Champ CRM utilisateur 7 |
| adcrmuf08 | numeric(3) | Oui | Champ CRM utilisateur 8 |
| adcrmuf09 | numeric(3) | Oui | Champ CRM utilisateur 9 |
| adcrmuf00 | numeric(3) | Oui | Champ CRM utilisateur 0 |
| adactivite | numeric(3) | Oui | Code activite |
| adsource | numeric(3) | Oui | Source |
| adcreditctrl | char(1) | Oui | Controle credit |
| adcreditval | numeric(10,2) | Oui | Plafond credit |
| adcrmuf10 | numeric(3) | Oui | Champ CRM utilisateur 10 |
| adcrmuf11 | numeric(3) | Oui | Champ CRM utilisateur 11 |
| adcrmuf12 | numeric(3) | Oui | Champ CRM utilisateur 12 |
| adcrmuf13 | numeric(3) | Oui | Champ CRM utilisateur 13 |
| adcrmuf14 | numeric(3) | Oui | Champ CRM utilisateur 14 |
| adcrmuf15 | numeric(3) | Oui | Champ CRM utilisateur 15 |
| adcrmuf16 | numeric(3) | Oui | Champ CRM utilisateur 16 |
| adcrmuf17 | numeric(3) | Oui | Champ CRM utilisateur 17 |
| adcrmuf18 | numeric(3) | Oui | Champ CRM utilisateur 18 |
| adcrmuf19 | numeric(3) | Oui | Champ CRM utilisateur 19 |
| adcrmuf20 | numeric(3) | Oui | Champ CRM utilisateur 20 |
| adcrmuf21 | numeric(3) | Oui | Champ CRM utilisateur 21 |
| adcrmuf22 | numeric(3) | Oui | Champ CRM utilisateur 22 |
| adcrmuf23 | numeric(3) | Oui | Champ CRM utilisateur 23 |
| adcrmuf24 | numeric(3) | Oui | Champ CRM utilisateur 24 |
| adcrmuf25 | numeric(3) | Oui | Champ CRM utilisateur 25 |
| adcrmuf26 | numeric(3) | Oui | Champ CRM utilisateur 26 |
| adcrmuf27 | numeric(3) | Oui | Champ CRM utilisateur 27 |
| adcrmuf28 | numeric(3) | Oui | Champ CRM utilisateur 28 |
| adcrmuf29 | numeric(3) | Oui | Champ CRM utilisateur 29 |
| adescdcust | numeric(3) | Oui | Escompte client delai |
| adetiitem | varchar(40) | Oui | Etiquette article |
| adinvedi | char(1) | Oui | Facture EDI |
| adediseq | numeric(2) | Oui | Sequence EDI |
| adcptsal | numeric(4) | Oui | Compte vente |
| adcptpur | numeric(4) | Oui | Compte achat |
| adinvm | char(1) | Oui | Facture mensuelle |
| adcustzone | numeric(3) | Oui | Zone client |
| adristrate | numeric(4,2) | Oui | Taux ristourne |
| adpurchaser | char(8) | Oui | Acheteur |
| adlegalform | varchar(10) | Oui | Forme juridique |
| adsupordinfo | varchar(180) | Oui | Info commande fournisseur |
| adinvattention | varchar(40) | Oui | A l'attention de (facture) |
| adautoitpack | char(1) | Oui | Conditionnement auto |
| adisbackorder | char(1) | Oui | Reliquat actif |
| adbackorder | numeric(3,1) | Oui | Delai reliquat |
| addefturn | numeric(3) | Oui | Delai rotation par defaut |
| adinvcertif | char(1) | Oui | Certificat sur facture |
| adtel2 | varchar(20) | Oui | Telephone 2 |
| adlblproc | char(8) | Oui | Procedure etiquette |
| adshiptocmnt | varchar(40) | Oui | Commentaire livraison |
| adfactoring | char(1) | Oui | Affacturage |
| adphysical | char(1) | Oui | Personne physique |
| adptinvoice | varchar(30) | Oui | Template facture |
| adptshipnotice | varchar(30) | Oui | Template bon livraison |
| adptpurord | varchar(30) | Oui | Template commande achat |
| adptpurg1ord | varchar(30) | Oui | Template commande achat groupe 1 |
| adptpurg2ord | varchar(30) | Oui | Template commande achat groupe 2 |
| adcommission | numeric(5,2) | Oui | Commission (%) |
| adtax01 | numeric(3) | Oui | Taxe 1 |
| adtax02 | numeric(3) | Oui | Taxe 2 |
| adtax03 | numeric(3) | Oui | Taxe 3 |
| adtax04 | numeric(3) | Oui | Taxe 4 |
| adtax05 | numeric(3) | Oui | Taxe 5 |
| adtax06 | numeric(3) | Oui | Taxe 6 |
| adtax07 | numeric(3) | Oui | Taxe 7 |
| adtax08 | numeric(3) | Oui | Taxe 8 |
| adtax09 | numeric(3) | Oui | Taxe 9 |
| adtax10 | numeric(3) | Oui | Taxe 10 |
| adpkimptyp | char(1) | Oui | Type import picking |
| adhistorcsc | numeric(12) | Oui | Historique RSC |
| adlastclotico | timestamp | Oui | Derniere cloture ICO |
| adctintexp | char(1) | Oui | Contact interlocuteur export |
| adprocescrates | char(1) | Oui | Traitement taux caisses |
| adpcratesregrou | char(1) | Oui | Regroupement taux caisses |
| addesadvedi | char(1) | Oui | DESADV EDI |
| addesadvediseq | numeric(2) | Oui | Sequence DESADV EDI |
| addesc2 | varchar(60) | Oui | Description 2 |
| adbank2 | varchar(60) | Oui | Compte bancaire 2 |
| adinvtyp | numeric(3) | Oui | Type facture |
| adrefbuyerfacto | varchar(20) | Oui | Reference acheteur factoring |
| adfour | varchar(30) | Oui | Fournisseur |
| adinvpdf | char(1) | Oui | Facture PDF |
| adinvpdfmail | varchar(60) | Oui | Email facture PDF |
| adbic1 | varchar(11) | Oui | BIC 1 |
| adbic2 | varchar(11) | Oui | BIC 2 |
| adiban1 | varchar(50) | Oui | IBAN 1 |
| adiban2 | varchar(50) | Oui | IBAN 2 |
| adsupportid | varchar(8) | Oui | Code support |
| adsupporttyp | numeric(3) | Oui | Type support |
| adanalsal | numeric(4) | Oui | Analytique vente |
| addirsalprev | char(1) | Oui | Direction vente prev. |
| admailsale | varchar(200) | Oui | Email vente |
| adbloclink | char(1) | Oui | Bloquer lien |
| adassort | numeric(4) | Oui | Assortiment |
| adinvadid | varchar(10) | Oui | Adresse facturation |
| addlvtsup | char(1) | Oui | Bon livraison fournisseur |
| addlvtsupplace | varchar(15) | Oui | Lieu livraison fournisseur |
| adtrfcptcust | char(1) | Oui | Transfert comptable client |
| adtrfcptsupp | char(1) | Oui | Transfert comptable fournisseur |
| adgrouplink | numeric(4) | Oui | Lien groupe |
| ad_comconsauto | char(1) | Oui | Commission consignation auto |
| aduseadrescomp | char(1) | Oui | Utiliser adresse complementaire |
| adadrescomp1 | varchar(100) | Oui | Adresse complementaire 1 |
| adadrescomp2 | varchar(100) | Oui | Adresse complementaire 2 |
| adadrescomp3 | varchar(100) | Oui | Adresse complementaire 3 |
| adadrescomp4 | varchar(100) | Oui | Adresse complementaire 4 |
| adadrescomp5 | varchar(100) | Oui | Adresse complementaire 5 |
| adadrescomp6 | varchar(100) | Oui | Adresse complementaire 6 |
| ad_ptndc | varchar(30) | Oui | Template note de credit |
| adinvsupp | varchar(10) | Oui | Adresse facturation fournisseur |
| adristtnet1 | numeric(4,2) | Oui | Ristourne nette 1 (%) |
| adristtnet2 | numeric(4,2) | Oui | Ristourne nette 2 (%) |
| adristtnet3 | numeric(4,2) | Oui | Ristourne nette 3 (%) |
| adristtnet1typ | numeric(3) | Oui | Type ristourne nette 1 |
| adristtnet2typ | numeric(3) | Oui | Type ristourne nette 2 |
| adristtnet3typ | numeric(3) | Oui | Type ristourne nette 3 |
| adpaletlabel | char(30) | Oui | Etiquette palette |
| adpreploorgcode | char(1) | Oui | Code org. preemploi |
| addesadvauto | numeric(1) | Oui | DESADV automatique |
| addirectsal | char(1) | Oui | Vente directe |
| adnetyp | numeric(3) | Non | Type net |
| adlineesc | char(1) | Oui | Escompte par ligne |
| adpuredi | char(1) | Oui | Achat EDI |
| adpurediseq | numeric(2) | Oui | Sequence achat EDI |
| admust_lkremval | numeric(1) | Non | Liaison remise obligatoire |
| ad_id | unsigned in(4) | Oui | Identifiant unique |
| ad_isalloauto_l | numeric(1) | Oui | Allocation auto emplacement |
| ad_alloauto_loc | varchar(8) | Oui | Emplacement allocation auto |
| adgrcust2 | char(5) | Oui | Groupe client 2 |
| adgrcust3 | char(5) | Oui | Groupe client 3 |
| adgrcust4 | char(5) | Oui | Groupe client 4 |
| admultipoint | char(1) | Oui | Multi-point |
| adkm | numeric(4) | Oui | Kilometres |
| admgnl | numeric(1) | Oui | General |
| adaccnum | varchar(30) | Oui | Numero compte |
| adacctypdest | numeric(3) | Oui | Type destination comptable |
| adautone | char(1) | Oui | Autonome |
| adapbcode | char(20) | Oui | Code APB |

## Cles et index

- **PK** : adcode
- **FK** : adinvsupp -> adresses(adcode)
- **FK** : ad_alloauto_loc -> locations(lccode)
- **Index** : ixc_DBA_index_consultant_1 (adname, adcode) [non-unique]
- **Index** : ixc_DBA_index_consultant_5 (adcust) [non-unique]

## Relations

- **Parents (FK sortantes)** : adresses, locations
- **Enfants (FK entrantes)** : ad_crm_rem, adresrate, adresses, adrsactions, bomhead, clotfinitad, except_rate_itad, filehead, forecasts, invoicehead, linkadch, linkitadtd, linkmcad2, mfghead, mfgwcreqs, profohead, projhead, purcnthead, purghead, purhead, purinvhead, qcctrlhead, qcspechead, qcspecline, routline, salhead, shiphead

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
