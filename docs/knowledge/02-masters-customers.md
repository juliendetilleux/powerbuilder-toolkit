# Domaine : Clients (Masters)

## Vue d'ensemble

La gestion des clients constitue un pilier central de PmiGest ERP (PMIX). Elle repose sur la table `adresses`, qui joue un **double role** : elle stocke a la fois les clients (`adcust = 'Y'`) et les fournisseurs (`adsupp = 'Y'`). Un meme tiers peut etre simultanement client et fournisseur.

Le module `_masters` (714 objets : 168 fenetres, 499 DataWindows, 11 user objects, 23 fonctions, 8 structures, 5 menus) est la bibliotheque principale pour la gestion des donnees de base, incluant clients, fournisseurs, articles et adresses.

La table `adresses` est la **table la plus referencee** de toute la base de donnees PMIX, avec 31 cles etrangeres entrantes provenant de modules aussi divers que les ventes (`salhead`), les achats (`purhead`), la fabrication (`mfghead`), la facturation (`invoicehead`), les projets (`projhead`), le controle qualite (`qcctrlhead`), etc. Toute modification d'un client a donc un impact potentiel etendu sur l'ensemble du systeme.

Les codes speciaux `##########`, `#########C`, `#########R`, `#########S` sont des adresses systeme reservees, systematiquement exclues des listes et recherches.

---

## Tables principales

| Table | Role | Cle primaire | Colonnes cles | FK vers |
|-------|------|-------------|---------------|---------|
| `adresses` | Table centrale des tiers (clients + fournisseurs) | `adcode` char(10) | adname, adcust, adsupp, adactiv, adcurr, adgrcust, adsalesman, adpaymode, adcreditval | Self-ref (adinvto, adinvsupp), locations |
| `contacts` | Personnes de contact liees a un tiers | `ctadcode` + `ctline` | ctname, ctfunction, cttel, ctmail, ctgsm, ctactiv, ctmain | Implicite vers adresses (ctadcode) |
| `shipto` | Adresses de livraison alternatives | `stcode` + `stseq` | stdesc, stadr1, stzip, stloc, stcountr, stshipdays, stmain | Self-ref (stshipadcode, stshipseq) |
| `adresgroup` | Groupe client/fournisseur niveau 1 | `agcode` char(5) | agactiv, agdesc | -- |
| `adresgroup2` | Groupe client/fournisseur niveau 2 | `ag2code` + `ag2uppergrp` | ag2activ, ag2desc | -- |
| `adresgroup3` | Groupe client/fournisseur niveau 3 | `ag3code` + `ag3uppergrp` | ag3activ, ag3desc | -- |
| `adresgroup4` | Groupe client/fournisseur niveau 4 | `ag4code` + `ag4uppergrp` | ag4activ, ag4desc | -- |
| `adresrate` | Tarifs specifiques par adresse (periodes) | `arcode` + `arstartdat` | arstopdat, arrateid | adresses (arcode), ratehead (arrateid) |
| `adextracosts` | Couts supplementaires par adresse | `axadcode` + `axadline` | axdesc, axsign, axseuil, axvaltyp, axlnval, axstartdat, axstopdat | Implicite vers adresses (axadcode) |
| `linkitad` | Liaison article-adresse (prix, ref. client/fournisseur) | `lktyp` + `lkitem` + `lkadcode` + `lkcode` + `lkcurr` | lkactiv, lkum, lkadref, lkleadtime, lkmain, lkfinalprice | items, currencies |
| `linkmcad` | Liaison adresse-societe (mono-site) | `lkadcode` + `lkmccode` | -- | adresses |
| `linkmcad2` | Liaison adresse-societe (multi-site) | `lkadcode` + `lkmccode` | lkactiv, lkidcptcust, lktrfcptcust | adresses |
| `linkadch` | Liaison adresse-choix (classifications) | `lac_id` | lac_adcode, lac_chcode, lac_clline, lac_isornot | adresses, choicehead |
| `salesman` | Representants commerciaux | `smcode` char(8) | smname, smactiv, smcommission, sm_mail | Ref. par linksaus, users |
| `paymode` | Modes de paiement | `pmcode` numeric(2) | pmdescint, pmdescext, pmdetail | -- |
| `ad_crm_rem` | Remarques CRM liees a un tiers | `reid` | readcode, recmnt, redate | adresses (readcode) |

---

## Colonnes cles de la table adresses (focus client)

La table `adresses` contient plus de 200 colonnes. Voici les plus importantes pour la gestion client, regroupees par domaine fonctionnel.

### Identification

| Colonne | Type | Description |
|---------|------|-------------|
| `adcode` | char(10) | **Code adresse (PK)** - Identifiant unique du tiers |
| `adname` | char(30) | Nom du tiers |
| `addesc2` | varchar(60) | Description complementaire |
| `adcust` | char(1) | Flag client ('Y'/'N') |
| `adsupp` | char(1) | Flag fournisseur ('Y'/'N') |
| `adactiv` | char(1) | Actif ('Y'/'N') |
| `adphysical` | char(1) | Personne physique ('Y'/'N') |
| `adlegalform` | varchar(10) | Forme juridique |
| `adeancode` | char(13) | Code EAN |
| `ad_id` | unsigned int(4) | Identifiant unique numerique auto |

### Coordonnees

| Colonne | Type | Description |
|---------|------|-------------|
| `adadr1` | char(30) | Adresse ligne 1 |
| `adadr2` | char(30) | Adresse ligne 2 |
| `adzip` | char(10) | Code postal |
| `adloc` | char(25) | Localite |
| `adcountr` | char(20) | Pays (libelle) |
| `adcountrid` | char(2) | Code pays ISO |
| `adtel` | char(20) | Telephone principal |
| `adtel2` | varchar(20) | Telephone secondaire |
| `adfax` | char(20) | Fax |
| `admail` | char(50) | Email principal |
| `admailsale` | varchar(200) | Email vente |
| `adurl` | varchar(40) | URL site web |
| `adlang` | char(2) | Langue |

### Adresse complementaire

| Colonne | Type | Description |
|---------|------|-------------|
| `aduseadrescomp` | char(1) | Utiliser adresse complementaire |
| `adadrescomp1` a `adadrescomp6` | varchar(100) | Lignes d'adresse complementaire (1 a 6) |

### Parametres commerciaux client

| Colonne | Type | Description |
|---------|------|-------------|
| `adcurr` | char(3) | Devise |
| `adcustpay` | char(1) | Condition de paiement client |
| `adpaymode` | numeric(2) | Mode de paiement (FK vers paymode) |
| `adsalesman` | char(8) | Representant (FK implicite vers salesman) |
| `adgrcust` | char(5) | Groupe client niveau 1 (FK implicite vers adresgroup) |
| `adgrcust2` | char(5) | Groupe client niveau 2 |
| `adgrcust3` | char(5) | Groupe client niveau 3 |
| `adgrcust4` | char(5) | Groupe client niveau 4 |
| `adrateid` | char(1) | Code tarif |
| `adgrading` | char(1) | Classification/cotation client |
| `adsalesauth` | char(1) | Autorisation de vente |
| `adcustzone` | numeric(3) | Zone geographique client |
| `adassort` | numeric(4) | Assortiment |
| `addirectsal` | char(1) | Vente directe |

### Credit et finances client

| Colonne | Type | Description |
|---------|------|-------------|
| `adcreditctrl` | char(1) | Controle de credit actif |
| `adcreditval` | numeric(10,2) | Plafond de credit |
| `adcustval` | numeric(10,2) | Chiffre d'affaires client |
| `adsoldecust` | numeric(10,2) | Solde client |
| `adcustord` | timestamp | Date derniere commande client |
| `adfactoring` | char(1) | Affacturage actif |
| `adrefbuyerfacto` | varchar(20) | Reference acheteur factoring |

### Remises et ristournes client

| Colonne | Type | Description |
|---------|------|-------------|
| `adristcust` | numeric(4,2) | Ristourne client (%) |
| `adristrate` | numeric(4,2) | Taux ristourne |
| `adesctcust` | numeric(4,2) | Escompte client (%) |
| `adescdcust` | numeric(3) | Delai escompte client |
| `adlineesc` | char(1) | Escompte par ligne |
| `adcommission` | numeric(5,2) | Commission (%) |
| `adristtnet1` / `adristtnet2` / `adristtnet3` | numeric(4,2) | Ristournes nettes 1-3 (%) |
| `adristtnet1typ` / `adristtnet2typ` / `adristtnet3typ` | numeric(3) | Types ristournes nettes 1-3 |
| `adnetyp` | numeric(3) | Type net |

### Facturation

| Colonne | Type | Description |
|---------|------|-------------|
| `adinvto` | char(10) | Facturer a (code adresse alternatif) |
| `adinvadid` | varchar(10) | Adresse de facturation |
| `adinvcopy` | numeric(2) | Nombre de copies facture |
| `adinvm` | char(1) | Facturation mensuelle |
| `adinvtyp` | numeric(3) | Type de facture |
| `adinvpdf` | char(1) | Facture PDF |
| `adinvpdfmail` | varchar(60) | Email pour facture PDF |
| `adinvattention` | varchar(40) | A l'attention de (sur facture) |
| `adinvcertif` | char(1) | Certificat sur facture |
| `adptinvoice` | varchar(30) | Template d'impression facture |
| `ad_ptndc` | varchar(30) | Template note de credit |

### Livraison

| Colonne | Type | Description |
|---------|------|-------------|
| `adshipdays` | numeric(3) | Delai de livraison (jours) |
| `adshipcopy` | numeric(2) | Nombre copies bon de livraison |
| `addlvt` | char(1) | Bon de livraison |
| `adshiptocmnt` | varchar(40) | Commentaire livraison |
| `adptshipnotice` | varchar(30) | Template bon de livraison |
| `adisbackorder` | char(1) | Reliquat actif |
| `adbackorder` | numeric(3,1) | Delai reliquat |
| `addefturn` | numeric(3) | Delai de rotation par defaut |
| `adautoitpack` | char(1) | Conditionnement automatique |
| `admultipoint` | char(1) | Multi-point de livraison |
| `adkm` | numeric(4) | Kilometres |

### EDI

| Colonne | Type | Description |
|---------|------|-------------|
| `adedil` | char(1) | EDI actif |
| `adinvedi` | char(1) | Facture EDI |
| `adediseq` | numeric(2) | Sequence EDI |
| `addesadvedi` | char(1) | DESADV EDI |
| `addesadvediseq` | numeric(2) | Sequence DESADV EDI |
| `addesadvauto` | numeric(1) | DESADV automatique |

### TVA et fiscalite

| Colonne | Type | Description |
|---------|------|-------------|
| `adtva` | char(15) | Numero de TVA |
| `adtvalvl` | char(1) | Niveau TVA |
| `adtvatyp` | char(1) | Type TVA |
| `adtax01` a `adtax10` | numeric(3) | Taxes supplementaires (1 a 10) |

### Comptabilite

| Colonne | Type | Description |
|---------|------|-------------|
| `adidcptcust` | char(30) | Identifiant comptable client |
| `adimputcust` | char(30) | Imputation comptable client |
| `adcptsal` | numeric(4) | Compte de vente |
| `adanalsal` | numeric(4) | Analytique vente |
| `adtrfcptcust` | char(1) | Transfert comptable client |
| `adaccnum` | varchar(30) | Numero de compte |
| `adacctypdest` | numeric(3) | Type destination comptable |

### Banque

| Colonne | Type | Description |
|---------|------|-------------|
| `adbank` | char(35) | Compte bancaire principal |
| `adbank2` | varchar(60) | Compte bancaire secondaire |
| `adiban1` | varchar(50) | IBAN 1 |
| `adiban2` | varchar(50) | IBAN 2 |
| `adbic1` | varchar(11) | BIC 1 |
| `adbic2` | varchar(11) | BIC 2 |

### Etiquettes et impressions

| Colonne | Type | Description |
|---------|------|-------------|
| `adetigro` | varchar(40) | Etiquette colis |
| `adetipal` | varchar(40) | Etiquette palette |
| `adetiitem` | varchar(40) | Etiquette article |
| `adpaletlabel` | char(30) | Label palette |
| `adlblproc` | char(8) | Procedure d'etiquettes |
| `adptpurord` | varchar(30) | Template commande achat |

### Champs CRM utilisateur

| Colonne | Type | Description |
|---------|------|-------------|
| `adcrmuf00` a `adcrmuf29` | numeric(3) | 30 champs utilisateur CRM configurables |
| `adactivite` | numeric(3) | Code d'activite |
| `adsource` | numeric(3) | Source du contact |
| `adtype` | numeric(3) | Type d'adresse |

### Audit et tracabilite

| Colonne | Type | Description |
|---------|------|-------------|
| `adcreadat` | timestamp | Date de creation |
| `adcreauser` | char(50) | Utilisateur creation |
| `admoddat` | timestamp | Date de derniere modification |
| `admodifuser` | char(50) | Utilisateur derniere modification |
| `admodif` | char(1) | Flag modifie |
| `adneval` | char(1) | Nouvelle evaluation |
| `admemo` | long varchar(32767) | Memo / notes libres |
| `adcmnt` | char(50) | Commentaire court |
| `adordinfo` | varchar(180) | Information commande |

### Index de la table adresses

| Index | Colonnes | Unique |
|-------|----------|--------|
| PK | adcode | Oui |
| ixc_DBA_index_consultant_1 | adname, adcode | Non |
| ixc_DBA_index_consultant_5 | adcust | Non |

---

## Objets PB cles

### Fenetres

| Fenetre | Ancetre | Module | Role |
|---------|---------|--------|------|
| `w_adresses` | w_response | _masters | Liste principale des adresses (clients + fournisseurs). Fonctions : filteritem(), refresh(), set_filter1() |
| `w_adresse_update` | w_response | _masters | **Fiche de mise a jour** d'une adresse (78 variables d'instance, 35+ fonctions). Fenetre la plus complexe du domaine |
| `w_adresse_search` | w_response | _masters | Recherche d'adresses avec filtres |
| `w_adresse_sqlsearch` | w_response | _masters | Recherche SQL avancee d'adresses avec filtres dynamiques, support multi-societe |
| `w_adresse_sqlsearch_multi` | w_response | Shared_peppol | Recherche SQL multi-selection (pour Peppol) |
| `w_adresse_sqlselect` | w_response | _masters | Selection SQL d'une adresse (avec menu alternatif, filtres) |
| `w_adresses_selection` | w_response | _masters | Selection rapide d'adresses (retourne client/fournisseur) |
| `w_adresse_mass_update` | w_response | _masters | Mise a jour en masse des adresses (mode grille) |
| `w_adresse_customize` | w_response | _masters | Personnalisation de la fiche adresse (couleurs, champs obligatoires) |
| `w_contact_update` | w_response | _masters | Mise a jour d'un contact (creation/modification) |
| `w_contacts_select` | w_response | _masters | Selection d'un contact dans la liste |
| `w_contacts_multi_view` | w_response | _masters | Visualisation multi-contacts |
| `w_contact_copy` | w_response | _masters | Copie d'un contact vers une autre adresse |
| `w_contact_sqlselect` | w_response | _masters | Selection SQL d'un contact |
| `w_createcust_contact` | w_response | _masters | Creation d'un contact lors de la creation d'un client |
| `w_shipto_update` | w_response | _masters | Mise a jour d'une adresse de livraison (shipto) |
| `w_shipto_sqlselect` | w_response | _masters | Selection SQL d'un shipto |
| `w_shiptoturn` | w_response | _masters | Gestion des tournees de livraison |
| `w_shipto_turnbyday` | w_response | _masters | Tournees de livraison par jour de la semaine |
| `w_adresgroup_update` | w_response | _masters | Mise a jour d'un groupe d'adresses |
| `w_adresgroup_select` | w_window | _masters | Selection de groupes (niveaux 1 a 4 simultanes) |
| `w_salesman_update` | w_response | _masters | Mise a jour d'un representant |
| `w_salesman_replace` | w_response | _masters | Remplacement d'un representant par un autre |
| `w_paymode_update` | w_response | _masters | Mise a jour d'un mode de paiement |
| `w_qry_adresses` | w_response | _query | Requetes/consultation sur les adresses (avec email, filtres) |
| `w_mailadress_sel` | -- | _masters | Selection d'une adresse email |
| `w_crm_mailadress_sel` | -- | _sales_crm | Selection email CRM |
| `w_crm_contact_mass_update` | -- | _sales_crm | Mise a jour en masse des contacts CRM |

### DataWindows

#### DataWindows de liste

| DW | Style | Module | Table source | Role |
|----|-------|--------|-------------|------|
| `d_adresses` | Freeform | _masters | adresses | Liste principale des adresses (clients et fournisseurs actifs). Inclut jointure multi-societe (linkmcad/linkmcad2) |
| `d_adresses_cust` | Freeform | _masters | adresses | Liste des clients actifs uniquement, filtree par devise. Inclut comptage des couts supplementaires |
| `d_adresses_sqlsearch` | Freeform | _masters | adresses + linkmcad | Recherche SQL avec representant (jointure salesman), groupes, multi-societe |
| `d_adresses_sqlsearch_multi` | Freeform | _masters | adresses | Recherche SQL multi-selection |
| `d_adresses_sqlselect` | Freeform | _masters | adresses | Selection SQL d'une adresse |
| `d_adresses_sel` | Freeform | _masters | adresses | Selection simple |
| `d_adresses_search` | Freeform | _sales_crm | adresses | Recherche CRM (toutes colonnes) |
| `dd_customers` | Freeform | _masters | adresses | Dropdown client (adcode, adname, adgrading) |
| `dd_customers_2` | Freeform | _masters | adresses | Dropdown client simplifie (adcode, adname) |
| `dd_customersfrcst` | Freeform | _masters | adresses | Dropdown clients pour previsions (actifs uniquement) |

#### DataWindows de mise a jour (fiche adresse multi-onglets)

La fiche adresse (`w_adresse_update`) utilise **12 DataWindows de mise a jour** representant differents onglets ou aspects de la fiche :

| DW | Module | Role / Onglet |
|----|--------|---------------|
| `d_adresse_update1` | _masters | Onglet principal : identification, coordonnees, parametres commerciaux (~275 colonnes) |
| `d_adresse_update2` | _masters | Onglet complementaire (memes colonnes, variante d'affichage) |
| `d_adresse_update3` | _masters | Parametres CRM, champs utilisateur (adcrmuf00-29) |
| `d_adresse_update4` | _masters | Parametres CRM variante (champs utilisateur) |
| `d_adresse_update5` | _masters | Parametres supplementaires |
| `d_adresse_update6` | _masters | Parametres EDI et electronique |
| `d_adresse_update7` | _masters | Parametres bancaires et comptables |
| `d_adresse_update8` | _masters | Parametres de livraison et logistique |
| `d_adresse_update9` | _masters | Parametres fiscaux (taxes) |
| `d_adresse_update10` | _masters | Adresses complementaires |
| `d_adresse_update11` | _masters | Parametres d'impression (templates) |
| `d_adresse_update12` | _masters | Parametres supplementaires |
| `d_adresse2_update8` | _masters | Variante mise a jour livraison |
| `d_adresse_update8_withoutheader` | _masters | Mise a jour livraison (sans en-tete) |

#### DataWindows de groupes et tarifs

| DW | Style | Module | Role |
|----|-------|--------|------|
| `d_adresgroup` | Freeform | _masters | Liste des groupes niveau 1 (agcode, agactiv, agdesc) |
| `d_adresgroup_update` | Freeform | _masters | Mise a jour d'un groupe niveau 1 |
| `d_adresgroup2` | Freeform | _masters | Liste des groupes niveau 2 |
| `d_adresgroup2_update` | Freeform | _masters | Mise a jour d'un groupe niveau 2 |
| `d_adresgroup3` / `d_adresgroup3_update` | Freeform | _masters | Groupes niveau 3 |
| `d_adresgroup4` / `d_adresgroup4_update` | Freeform | _masters | Groupes niveau 4 |
| `d_adresrate` | Freeform | _masters | Tarifs par adresse (jointure ratehead + choices) |
| `d_adresrate_update` | Freeform | _masters | Mise a jour d'un tarif (arcode, arstartdat, arstopdat, arrateid) |
| `d_adresrategroup_update` | Freeform | _masters | Mise a jour tarif par groupe |
| `d_adresse_group` | Freeform | _sales_crm | Fiche adresse avec donnees CRM completes |

#### DataWindows d'impression

| DW | Style | Module | Role |
|----|-------|--------|------|
| `d_adresses_print` | Freeform | _prints_std | Impression liste adresses avec shipto |
| `d_adresse_cust_print` | Freeform | _prints_std | Impression catalogue articles d'un client (linkitad) |
| `d_adresse_detail_print` | Freeform | _prints_std | Impression fiche detaillee d'une adresse |
| `d_adresses_barcode_print` | Freeform | _prints_std | Impression codes-barres adresses |
| `d_adresses_bcd_print` | Freeform | _prints_std | Impression barcode adresses (variante) |
| `d_adressmemo_print` | Freeform | _prints_std | Impression memos adresses |
| `d_adressdisc_subprint` | Freeform | _prints_std | Sous-impression remises adresses |

#### Autres DataWindows client

| DW | Module | Role |
|----|--------|------|
| `d_adresses_commission` | _masters | Liste des commissions par client (adcommission, adgrcust) |
| `d_adresses_gdrp` | _masters | Donnees GDPR des adresses |
| `d_adresse_remarks` | _masters | Remarques CRM (table ad_crm_rem) |
| `d_adresse_mass_update` | _masters | Grille de mise a jour en masse |
| `d_adcustalloc_cmnt` | _masters | Commentaires allocation client |
| `d_adcustcmnt_update` | _masters | Mise a jour commentaires client |
| `d_adrespoint_list` | _masters | Liste des points de livraison |
| `d_adrespoint_update` | _masters | Mise a jour point de livraison |
| `d_adrespoint_detail` | _masters | Detail point de livraison |
| `d_adrespoint_dispo` | _masters | Disponibilite point de livraison |
| `d_adressrate_list` | _masters | Liste complete des tarifs d'une adresse |
| `d_adcode_exceptions` | _masters | Exceptions par code adresse |
| `d_adrcons` | _masters | Consultation rapide d'une adresse |
| `d_adresses_shipto_sqlsearch` | _masters | Recherche SQL avec shipto |
| `d_add_point` | _masters | Ajout d'un point de livraison |

---

## Flux : Creation d'un client

### Etape 1 : Ouverture de la fenetre

1. Depuis le menu principal (`m_erp_mdi`), naviguer vers les donnees de base > Adresses
2. La fenetre `w_adresses` s'ouvre et charge `d_adresses` avec la liste des tiers existants
3. Cliquer sur "Ajouter" pour ouvrir `w_adresse_update` en mode creation

### Etape 2 : Saisie des donnees

La fenetre `w_adresse_update` presente une fiche multi-onglets alimentee par les DataWindows `d_adresse_update1` a `d_adresse_update12` :

- **Onglet General** : code (adcode), nom (adname), adresse postale, telephone, email, site web
- **Onglet Commercial** : devise (adcurr), conditions de paiement (adcustpay), representant (adsalesman), groupe (adgrcust), tarif (adrateid), classification (adgrading)
- **Onglet Facturation** : facturer a (adinvto), copies, mode paiement, templates
- **Onglet Livraison** : delais (adshipdays), bon livraison (addlvt), reliquat (adisbackorder)
- **Onglet Finances** : credit (adcreditctrl/adcreditval), escompte, ristourne
- **Onglet Bancaire** : comptes, IBAN, BIC
- **Onglet Comptable** : codes comptables (adidcptcust, adimputcust)
- **Onglet TVA/Taxes** : numero TVA, type, taxes supplementaires
- **Onglet EDI** : parametres d'echange electronique
- **Onglet CRM** : champs utilisateur (adcrmuf00-29), source, activite

### Etape 3 : Validation

1. La fonction `adresseinputok()` verifie la coherence des donnees saisies
2. Verification du numero de TVA via `wf_check_vat()` (appel SOAP si configure)
3. Verification IBAN/BIC via `wf_bebank_ctrl()`
4. Les flags `adcust` et/ou `adsupp` doivent etre coches

### Etape 4 : Enregistrement

1. Le DataWindow effectue un `Update()` qui genere automatiquement l'INSERT SQL
2. Les champs d'audit sont remplis : `adcreadat`, `adcreauser`
3. Si le parametre GDPR est actif, un audit est trace via `wf_auditgdrp()`
4. La fenetre parente `w_adresses` est rafraichie

### Etape 5 : Ajout des sous-elements (optionnel)

- Ajout de **contacts** via `w_contact_update` ou `w_createcust_contact`
- Ajout d'**adresses de livraison** (shipto) via `w_shipto_update`
- Affectation de **tarifs** via les DataWindows `d_adresrate_update`
- Ajout de **couts supplementaires** via la section extracosts

---

## Flux : Modification d'un client

### Recherche

1. Ouvrir `w_adresses` pour la liste complete
2. Ou utiliser `w_adresse_sqlsearch` pour une recherche avancee (par nom, code, groupe, representant, pays, etc.)
3. La fonction `filteradresse()` permet le filtrage en temps reel
4. La fonction `arrange()` gere le tri et la reorganisation des colonnes

### Modification

1. Double-cliquer sur un tiers dans la liste pour ouvrir `w_adresse_update`
2. La variable `Action = "Modify"` indique le mode modification
3. Modifier les champs souhaites dans les differents onglets
4. Fonction `adapttab()` adapte dynamiquement les onglets visibles selon le type de tiers

### Impacts

- La colonne `admoddat` est mise a jour automatiquement
- La colonne `admodifuser` enregistre l'utilisateur
- Le flag `admodif = 'Y'` signale la modification
- **Attention** : modifier un client impacte potentiellement les 31 tables liees (commandes, factures, etc.)

### Mise a jour en masse

- La fenetre `w_adresse_mass_update` permet de modifier plusieurs adresses simultanement en mode grille
- Le DataWindow `d_adresse_mass_update` (style Grid) presente toutes les colonnes editables
- La fonction `wf_checkrow()` valide chaque ligne modifiee
- `wf_filter_adresses()` permet de filtrer les adresses a modifier

---

## Flux : Gestion des contacts

### Structure de la table contacts

Les contacts sont lies a une adresse par la cle composite `ctadcode` (code adresse) + `ctline` (numero de ligne). Un tiers peut avoir un nombre illimite de contacts.

### Ajout d'un contact

1. Depuis la fiche adresse (`w_adresse_update`), acceder a l'onglet contacts
2. Cliquer "Ajouter" pour ouvrir `w_contact_update` en mode creation
3. Saisir : nom (`ctname`), prenom (`ctfirstname`), fonction (`ctfunction`), telephone (`cttel`), email (`ctmail`), GSM (`ctgsm`)
4. La fonction `input_ok()` verifie les champs obligatoires
5. Marquer comme contact principal (`ctmain = 'Y'`) si applicable
6. Definir la langue (`ctlangue`) et le service (`ctservice`)

### Modification d'un contact

1. Double-cliquer sur le contact dans la liste
2. Modifier les informations dans `w_contact_update`
3. La fonction `wf_check_mailtocpt()` verifie la coherence des emails

### Copie d'un contact

- `w_contact_copy` permet de copier un contact d'un tiers vers un autre
- Utile lors de la creation de societes filiales ou pour des contacts multi-sites

### Vue multi-contacts

- `w_contacts_multi_view` affiche tous les contacts d'un tiers dans une vue synthetique
- Permet la navigation rapide entre contacts

### Selection d'un contact

- `w_contacts_select` : selection dans une liste
- `w_contact_sqlselect` : selection SQL avancee

### Champs CRM contacts

Les contacts disposent de 15 champs utilisateur CRM (`ctcrmuf01` a `ctcrmuf15`), configurables par le client.

---

## Flux : Adresses de livraison (shipto)

### Structure

La table `shipto` stocke les adresses de livraison alternatives. Chaque adresse de livraison est identifiee par `stcode` (code adresse parent) + `stseq` (numero de sequence). Une adresse peut avoir plusieurs shipto.

### Colonnes principales

| Colonne | Description |
|---------|-------------|
| `stcode` | Code adresse parent (PK) |
| `stseq` | Numero de sequence (PK) |
| `stdesc` | Description/nom |
| `stactiv` | Actif ('Y'/'N') |
| `stmain` | Adresse principale ('Y'/'N') |
| `stadr1`, `stadr2` | Adresse |
| `stzip`, `stloc`, `stcountr`, `stcountrid` | Code postal, localite, pays |
| `stshipdays` | Delai de livraison (jours) |
| `sttel`, `stfax`, `stmail` | Coordonnees |
| `stcontact` | Personne de contact |
| `stcmnt` | Commentaire |
| `steancode` | Code EAN |
| `stdefturn` | Delai rotation par defaut |
| `stshipcmnt` | Commentaire expedition |
| `stref` | Reference |

### Gestion des tournees (shipto)

Les shipto supportent la gestion des **tournees de livraison par jour** :

| Colonne | Description |
|---------|-------------|
| `stturnbyday` | Tournee par jour activee |
| `stturnmonday` a `stturnsunday` | Tournee pour chaque jour de la semaine |

La fenetre `w_shipto_turnbyday` permet de definir les tournees par jour. La fenetre `w_shiptoturn` gere les tournees globales avec la fonction `wf_turnfilter()`.

### Self-reference shipto

Un shipto peut pointer vers un autre shipto via `stshipadcode` + `stshipseq`, permettant des chaines de livraison.

### Adresse complementaire shipto

Comme pour la table `adresses`, les shipto peuvent avoir des adresses complementaires (`stuseadrescomp`, `stadrescomp1` a `stadrescomp6`).

### Ajout d'un shipto

1. Depuis `w_adresse_update`, acceder a l'onglet Livraison
2. Cliquer "Ajouter" pour ouvrir `w_shipto_update`
3. Saisir les informations d'adresse de livraison
4. La fonction `shiptoinputok()` verifie les champs obligatoires
5. Definir comme adresse principale si necessaire (`stmain = 'Y'`)

---

## Flux : Tarifs specifiques client

### Structure

La table `adresrate` lie un client a une grille tarifaire (`ratehead`) avec une periode de validite :

| Colonne | Type | Description |
|---------|------|-------------|
| `arcode` | char(10) | Code adresse (FK vers adresses) |
| `arstartdat` | timestamp | Date de debut de validite |
| `arstopdat` | timestamp | Date de fin de validite |
| `arrateid` | numeric(5) | Code tarif (FK vers ratehead) |

### Affichage des tarifs

Le DataWindow `d_adresrate` affiche les tarifs d'un client en joignant :
- `adresrate` : periodes et codes
- `ratehead` : description du tarif (filtree par `rhtyp = 'T'`)
- `choices` : libelle du type de tarif (type `RATP`)

### Mise a jour

- `d_adresrate_update` : modification directe des periodes et codes tarifs
- `d_adresrategroup_update` : affectation de tarifs par groupe
- `d_adressrate_list` : liste complete des tarifs d'une adresse

### Tarif par defaut

La colonne `adrateid` de la table `adresses` definit le code tarif par defaut du client. Les tarifs specifiques dans `adresrate` prennent priorite lorsque la date du document tombe dans la periode de validite.

### Liaison article-client (linkitad)

La table `linkitad` permet de definir des prix et references specifiques par article et par client :
- `lktyp` : type de liaison ('P' = purchase/achat, etc.)
- `lkitem` : code article
- `lkadcode` : code adresse (client ou fournisseur)
- `lkadref` : reference client pour cet article
- `lkfinalprice` : prix final specifique
- `lkleadtime` : delai de livraison specifique

Le DataWindow `d_adresse_cust_print` imprime le catalogue articles d'un client en joignant `items` et `linkitad`.

---

## Groupes de clients

### Architecture a 4 niveaux

PMIX propose une classification hierarchique des clients sur 4 niveaux, chaque niveau etant stocke dans une table separee :

| Niveau | Table | PK | Colonne adresses | Description |
|--------|-------|-----|-----------------|-------------|
| 1 | `adresgroup` | agcode | adgrcust | Groupe principal (ex: secteur d'activite) |
| 2 | `adresgroup2` | ag2code + ag2uppergrp | adgrcust2 | Sous-groupe (ex: categorie) |
| 3 | `adresgroup3` | ag3code + ag3uppergrp | adgrcust3 | Sous-sous-groupe |
| 4 | `adresgroup4` | ag4code + ag4uppergrp | adgrcust4 | Classification la plus fine |

### Hierarchie

Les niveaux 2, 3 et 4 ont une colonne `ag*uppergrp` qui reference le groupe parent, creant une hierarchie :
- Groupe 1 est autonome
- Groupe 2 depend d'un groupe 1 (`ag2uppergrp`)
- Groupe 3 depend d'un groupe 2 (`ag3uppergrp`)
- Groupe 4 depend d'un groupe 3 (`ag4uppergrp`)

### Gestion dans l'interface

- `w_adresgroup_select` : fenetre de selection simultanee des 4 niveaux de groupes. Les variables `is_adgrp`, `is_adgrp2`, `is_adgrp3`, `is_adgrp4` stockent les selections
- `w_adresgroup_update` : mise a jour d'un groupe (creation, modification). La variable `istr_adrsgrp` (structure `str_adrsgrp`) encapsule les donnees du groupe
- Les DataWindowChild (`idwc_gr2`, `idwc_gr3`, `idwc_gr4`) gerent les listes deroulantes dependantes

### Groupes fournisseur

Le meme systeme existe cote fournisseur avec la colonne `adgrsupp` pour le groupe fournisseur niveau 1. Les colonnes pour les niveaux 2-4 fournisseur ne sont pas presentes dans la table adresses (uniquement cote client).

### Utilisation des groupes

Les groupes sont utilises pour :
- Filtrer les listes de clients dans les ecrans de recherche
- Generer des statistiques de ventes par groupe
- Appliquer des tarifs par groupe
- Generer des impressions segmentees

---

## Multi-site (linkmcad / linkmcad2)

### Principe

PMIX supporte la gestion multi-societes. Un meme client peut etre rattache a une ou plusieurs societes (sites). Le parametre systeme `MULTICO` (table `progparam`, code `MULTICO`) determine le mode de fonctionnement :

- **Mono-site** (`MULTICO != '1'`) : la table `linkmcad` lie chaque adresse a une seule societe (lkadcode -> lkmccode)
- **Multi-site** (`MULTICO = '1'`) : la table `linkmcad2` lie chaque adresse a plusieurs societes, avec des parametres comptables par site

### Table linkmcad (mono-site)

| Colonne | Type | Description |
|---------|------|-------------|
| `lkadcode` | varchar(10) | Code adresse |
| `lkmccode` | varchar(10) | Code societe |

### Table linkmcad2 (multi-site)

| Colonne | Type | Description |
|---------|------|-------------|
| `lkadcode` | char(10) | Code adresse |
| `lkmccode` | char(10) | Code societe |
| `lkidcptcust` | varchar(30) | Identifiant comptable client par site |
| `lktrfcptcust` | char(1) | Transfert comptable client par site |
| `lkidcptsupp` | varchar(30) | Identifiant comptable fournisseur par site |
| `lktrfcptsupp` | char(1) | Transfert comptable fournisseur par site |
| `lkactiv` | char(1) | Actif par site |
| `lkadmodif` | char(1) | Flag modification |

### Impact sur les DataWindows

Les DataWindows de liste (comme `d_adresses`, `d_adresses_cust`, `d_adresses_sqlsearch`) incluent des sous-requetes conditionnelles pour afficher le(s) code(s) societe selon le mode :

```sql
-- Mode multi-site
IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'),'') = '1' THEN
    isnull((select list(linkmcad2.lkmccode)
           from linkmcad2
           where linkmcad2.lkadcode = adresses.adcode
           And linkmcad2.lkactiv = 'Y'), '##########')
-- Mode mono-site
ELSE
    isnull((select linkmcad.lkmccode
           from linkmcad
           where linkmcad.lkadcode = adresses.adcode), '##########')
ENDIF as mccode_code
```

### Menu linksitcust

Un menu `m_linksitcust` est defini dans `m_erp_mdi` (sous le sous-menu `m_links`) pour acceder a la gestion de la liaison site-client.

---

## Points d'attention

### Table adresses : la plus referencee du systeme

La table `adresses` possede **31 cles etrangeres entrantes** depuis les tables suivantes :

| Table | Domaine |
|-------|---------|
| `salhead` | En-tetes de commandes de vente |
| `shiphead` | En-tetes d'expeditions |
| `invoicehead` | En-tetes de factures |
| `profohead` | En-tetes de proformas |
| `purhead` | En-tetes de commandes d'achat |
| `purinvhead` | En-tetes de factures fournisseur |
| `purghead` | En-tetes de commandes d'achat groupees |
| `purcnthead` | En-tetes de contrats d'achat |
| `mfghead` | En-tetes d'ordres de fabrication |
| `mfgwcreqs` | Besoins postes de charge |
| `bomhead` | En-tetes de nomenclatures |
| `routline` | Lignes de gammes |
| `projhead` | En-tetes de projets |
| `filehead` | En-tetes de dossiers |
| `forecasts` | Previsions |
| `qcctrlhead` | En-tetes de controles qualite |
| `qcspechead` / `qcspecline` | Specifications qualite |
| `adresrate` | Tarifs par adresse |
| `adrsactions` | Actions CRM |
| `ad_crm_rem` | Remarques CRM |
| `except_rate_itad` | Exceptions tarifaires |
| `linkitadtd` | Liaison article-adresse-delai |
| `linkadch` | Liaison adresse-choix |
| `linkmcad2` | Liaison multi-societe |
| `clotfinitad` | Clotures par adresse |

**Consequence** : toute modification structurelle de la table `adresses` ou d'un code client (`adcode`) a un impact systemique considerable.

### Double role client/fournisseur

- Un meme enregistrement `adresses` peut avoir `adcust = 'Y'` ET `adsupp = 'Y'`
- Les colonnes sont dupliquees pour chaque role : `adcustpay`/`adsupppay`, `adcustval`/`adsuppval`, `adidcptcust`/`adidcptsupp`, `adsoldecust`/`adsoldesupp`, `adimputcust`/`adimputsupp`, `adgrcust`/`adgrsupp`
- Le champ `adinvto` permet de facturer a une adresse differente (ex: maison mere)
- Le champ `adinvsupp` permet une adresse de facturation fournisseur separee

### Codes systeme reserves

Les codes `##########`, `#########C`, `#########R`, `#########S` sont des enregistrements systeme qui doivent etre exclus de toutes les listes et selections. Tous les DataWindows de recherche incluent le filtre :
```sql
WHERE adresses.adcode not in ('#########C','#########R','#########S')
```

### Complexite de la fenetre de mise a jour

`w_adresse_update` est l'une des fenetres les plus complexes de PMIX :
- **78 variables d'instance** (incluant references a d'autres fenetres, DataWindowChild, etc.)
- **35+ fonctions publiques** couvrant la validation, le rafraichissement, la gestion des onglets, la verification TVA, la gestion des remises, les couts supplementaires, etc.
- **8 evenements surcharges** incluant open, closequery, close, clicked, rbuttondown, losefocus, doubleclicked, constructor

### Controle de credit

Le systeme de controle de credit utilise deux colonnes :
- `adcreditctrl` : active/desactive le controle
- `adcreditval` : plafond de credit autorise
- `adsoldecust` : solde courant

Lorsque `adcreditctrl = 'Y'`, le systeme verifie que `adsoldecust` ne depasse pas `adcreditval` avant de valider une commande.

### Champs utilisateur CRM

Les 30 champs `adcrmuf00` a `adcrmuf29` sont des champs numeriques (numeric(3)) dont la signification est configurable par le client PMIX. Ils permettent de classer les tiers selon des criteres personnalises sans modifier la structure de la base.

Les contacts disposent egalement de 15 champs CRM (`ctcrmuf01` a `ctcrmuf15`).

---

## Recherche rapide

### Trouver des objets client avec les outils MCP

```
# Lister tous les objets lies aux adresses
pb_search_code pattern="w_adress"

# Lister les DataWindows client
pb_search_code pattern="d_adresse" file_type="datawindow"

# Trouver les references a la table adresses
pb_get_dependencies object_name="adresses"

# Voir l'heritage de la fenetre de mise a jour
pb_get_inheritance object_name="w_adresse_update"

# Lire la fiche client
pb_read_object file_path="w_adresse_update"

# SQL du DataWindow liste clients
pb_get_datawindow_sql dataobject="d_adresses"

# Rechercher dans le code client
pb_search_code pattern="adcreditctrl"

# Voir la structure du module _masters
pb_list_objects object_type="window" (filtrer sur _masters)
```

### Requetes SQL utiles (via dbisql)

```sql
-- Nombre de clients actifs
SELECT count(*) FROM adresses WHERE adcust = 'Y' AND adactiv = 'Y';

-- Clients avec controle de credit
SELECT adcode, adname, adcreditval, adsoldecust
FROM adresses
WHERE adcust = 'Y' AND adcreditctrl = 'Y'
ORDER BY adsoldecust DESC;

-- Contacts d'un client
SELECT ctname, ctfirstname, ctfunction, cttel, ctmail
FROM contacts
WHERE ctadcode = '<code_client>' AND ctactiv = 'Y'
ORDER BY ctmain DESC, ctsort;

-- Adresses de livraison d'un client
SELECT stseq, stdesc, stadr1, stzip, stloc, stcountr
FROM shipto
WHERE stcode = '<code_client>' AND stactiv = 'Y'
ORDER BY stmain DESC, stseq;

-- Tarifs d'un client
SELECT ar.arstartdat, ar.arstopdat, rh.rhdesc
FROM adresrate ar
JOIN ratehead rh ON rh.rhcode = ar.arrateid
WHERE ar.arcode = '<code_client>'
ORDER BY ar.arstartdat DESC;

-- Groupes client
SELECT ag.agcode, ag.agdesc, a.adcode, a.adname
FROM adresses a
JOIN adresgroup ag ON ag.agcode = a.adgrcust
WHERE a.adcust = 'Y' AND a.adactiv = 'Y'
ORDER BY ag.agcode, a.adname;

-- Multi-site : clients par societe
SELECT lk.lkmccode, a.adcode, a.adname
FROM linkmcad2 lk
JOIN adresses a ON a.adcode = lk.lkadcode
WHERE lk.lkactiv = 'Y' AND a.adcust = 'Y'
ORDER BY lk.lkmccode, a.adname;
```
