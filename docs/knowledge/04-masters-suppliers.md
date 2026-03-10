# Domaine : Fournisseurs (Masters / Achats)

## Vue d'ensemble

Les fournisseurs dans PmiGest ERP (PMIX) partagent la **meme table `adresses`** que les clients, prospects et sous-traitants. Un tiers est identifie comme fournisseur lorsque la colonne `adsupp = 'Y'`. Un meme enregistrement peut etre simultanement client (`adcust = 'Y'`) et fournisseur (`adsupp = 'Y'`).

Le domaine fournisseur couvre :
- **Donnees de base** (module `_masters`) : fiche adresse, groupes fournisseur, liaisons article-fournisseur
- **Achats** (module `_purch`) : commandes d'achat, receptions, factures fournisseur, contrats d'achat
- **Sous-traitance** (module `_manufg`) : postes de charge sous-traites lies a un fournisseur
- **Requetes** (module `_query`) : tableau de bord fournisseur (`w_qry_cmpny_pur`)

La table `adresses` contient 216+ colonnes. Beaucoup de colonnes existent en doublon client/fournisseur (ex: `adcustpay` / `adsupppay`, `adcustval` / `adsuppval`, `adidcptcust` / `adidcptsupp`).

---

## Tables principales

| Table | Role | Colonnes cles | FK vers |
|-------|------|---------------|---------|
| **adresses** | Table unifiee des tiers (clients, fournisseurs, prospects) | `adcode` (PK), `adsupp`, `adname`, `adcurr`, `adsupppay`, `adgrsupp` | auto-reference (`adinvsupp`), `locations` |
| **linkitad** | Liaison article-fournisseur (prix, ref, delai) | `lktyp`, `lkitem`, `lkadcode`, `lkcode` (PK composite) | `items`, `currencies` |
| **linkitadtd** | Donnees techniques article-fournisseur (ingredients, nutrition, allergenes) | `ldadcode`, `lditem` (PK composite) | `adresses`, `items` |
| **adresgroup** | Groupes d'adresses niveau 1 | `agcode` (PK), `agdesc`, `agactiv` | _(aucune)_ |
| **adresgroup2** | Groupes d'adresses niveau 2 | _(idem)_ | _(aucune)_ |
| **purhead** | En-tete de commande d'achat | `phcode` (PK), `phsupp`, `phcurr`, `phstatus` | `adresses` (x2), `filehead` |
| **purline** | Lignes de commande d'achat | `plcode`, `plline` (PK composite), `plitem`, `plqtyord` | `items`, `purhead` |
| **purlinelimite** | Lignes de commande d'achat (commandes limites/cadrees) | `pllcode`, `pllline` (PK composite) | _(similaire a purline)_ |
| **purghead** | En-tete commande d'achat groupee (par projet) | `phcode` (PK), `phsupp`, `phtype`, `phprojid` | `adresses`, `filehead` |
| **purcnthead** | En-tete de contrat d'achat | `chcode` (PK), `chadid`, `chstatus`, `chexptyp` | `adresses` |
| **purcntline** | Lignes de contrat d'achat | `clcode`, `clitemid` (PK composite), `clstdcost` | _(aucune documentee)_ |
| **purinvhead** | En-tete de facture fournisseur | `picode` (PK), `pisup`, `picurr`, `pistatus` | `adresses`, `filehead` |
| **purinvline** | Lignes de facture fournisseur | _(enfant de purinvhead)_ | `purinvhead` |
| **toreception** | Lignes de reception planifiees | `trid` (PK), `trpurhead`, `trpurline`, `trqty` | `purline` |

---

## Colonnes cles de la table adresses (focus fournisseur)

### Identification et statut

| Colonne | Type | Description |
|---------|------|-------------|
| `adcode` | char(10) | **Code adresse (PK)** — identifiant unique du tiers |
| `adname` | char(30) | Nom du tiers |
| `addesc2` | varchar(60) | Description complementaire |
| `adsupp` | char(1) | **Flag fournisseur** (`Y`/`N`) |
| `adcust` | char(1) | Flag client (`Y`/`N`) — un tiers peut etre les deux |
| `adactiv` | char(1) | Actif (`Y`/`N`) |
| `adgrading` | char(1) | Classification/notation fournisseur |
| `adphysical` | char(1) | Personne physique (`Y`/`N`) |
| `adlegalform` | varchar(10) | Forme juridique |
| `ad_id` | unsigned int(4) | Identifiant unique numerique (auto-increment) |

### Coordonnees

| Colonne | Type | Description |
|---------|------|-------------|
| `adadr1`, `adadr2` | char(30) | Lignes adresse 1 et 2 |
| `adzip` | char(10) | Code postal |
| `adloc` | char(25) | Localite |
| `adcountr` | char(20) | Pays (libelle) |
| `adcountrid` | char(2) | Code pays ISO |
| `adtel`, `adtel2` | char/varchar(20) | Telephones |
| `adfax` | char(20) | Fax |
| `admail` | char(50) | Email principal |
| `adurl` | varchar(40) | Site web |
| `adlang` | char(2) | Langue de correspondance |
| `aduseadrescomp` | char(1) | Utiliser adresse complementaire |
| `adadrescomp1..6` | varchar(100) | Lignes d'adresse complementaire (6 lignes) |

### Parametres financiers fournisseur

| Colonne | Type | Description |
|---------|------|-------------|
| `adcurr` | char(3) | **Devise** du fournisseur |
| `adsupppay` | char(1) | **Condition de paiement** fournisseur |
| `adpaymode` | numeric(2) | Mode de paiement |
| `adsuppval` | numeric(10,2) | Chiffre d'affaires fournisseur (cumul) |
| `adsuppord` | timestamp | Date de derniere commande fournisseur |
| `adsoldesupp` | numeric(10,2) | Solde comptable fournisseur |
| `adidcptsupp` | char(30) | Identifiant comptable fournisseur |
| `adimputsupp` | char(30) | Code imputation fournisseur |
| `adcptpur` | numeric(4) | Compte d'achat |
| `adtrfcptsupp` | char(1) | Transfert comptable fournisseur actif |
| `adinvsupp` | varchar(10) | Adresse de facturation fournisseur (FK -> adresses) |

### Parametres logistiques fournisseur

| Colonne | Type | Description |
|---------|------|-------------|
| `adshipdays` | numeric(3) | **Delai de livraison** (jours) |
| `addlvtsup` | char(1) | Bon de livraison fournisseur actif |
| `addlvtsupplace` | varchar(15) | Lieu de livraison fournisseur |
| `adpurchaser` | char(8) | **Acheteur** responsable |
| `adsupordinfo` | varchar(180) | Information commande fournisseur (texte libre) |

### Parametres achats specifiques

| Colonne | Type | Description |
|---------|------|-------------|
| `adgrsupp` | char(5) | **Groupe fournisseur** (FK vers adresgroup) |
| `adptpurord` | varchar(30) | Template impression commande d'achat |
| `adptpurg1ord` | varchar(30) | Template impression commande achat groupe 1 |
| `adptpurg2ord` | varchar(30) | Template impression commande achat groupe 2 |
| `adpuredi` | char(1) | Achat EDI actif |
| `adpurediseq` | numeric(2) | Sequence EDI achat |
| `admust_lkremval` | numeric(1) | Liaison remise obligatoire |

### Identification fiscale et bancaire

| Colonne | Type | Description |
|---------|------|-------------|
| `adtva` | char(15) | Numero de TVA |
| `adtvatyp` | char(1) | Type TVA |
| `adtvalvl` | char(1) | Niveau TVA |
| `adreg` | char(15) | Registre de commerce |
| `adbank` | char(35) | Compte bancaire 1 |
| `adbank2` | varchar(60) | Compte bancaire 2 |
| `adiban1`, `adiban2` | varchar(50) | IBAN 1 et 2 |
| `adbic1`, `adbic2` | varchar(11) | BIC/SWIFT 1 et 2 |
| `adtax01..10` | numeric(3) | Codes taxe (10 positions) |

---

## Table linkitad : liaison article-fournisseur

La table `linkitad` est **centrale** dans la gestion fournisseur. Elle lie un article a un fournisseur avec ses conditions d'achat.

### Colonnes cles

| Colonne | Type | Description |
|---------|------|-------------|
| `lktyp` | char(1) | **Type de liaison** (P = Purchase/fournisseur, S = Sales/client) |
| `lkitem` | char(20) | **Code article** (FK -> items) |
| `lkadcode` | char(10) | **Code fournisseur** (FK -> adresses) |
| `lkcode` | numeric(8) | **Code liaison** (identifiant unique dans le type) |
| `lkcurr` | char(3) | Devise d'achat (FK -> currencies) |
| `lkactiv` | char(1) | Liaison active (`Y`/`N`) |
| `lkum` | char(2) | Unite de mesure d'achat |
| `lkumconv` | numeric(16,10) | Facteur de conversion UM achat -> UM stock |
| `lkadref` | char(30) | **Reference fournisseur** (code article chez le fournisseur) |
| `lkadref2` | varchar(60) | Reference fournisseur complementaire |
| `lkleadtime` | numeric(4) | **Delai d'approvisionnement** (jours) |
| `lkmain` | char(1) | **Fournisseur principal** pour cet article (`Y`/`N`) |
| `lkremval` | numeric(4) | Valeur de remise |
| `lkcmnt` | varchar(50) | Commentaire |
| `lkfinalprice` | numeric(12,4) | Prix final negocie |
| `lkean` | varchar(20) | Code EAN principal |
| `lkean1..3` | varchar(20) | Codes EAN supplementaires |
| `lkwithcertif` | char(1) | Certificat requis |
| `lkdatecertif` | timestamp | Date du certificat |
| `lknbdaycertif` | numeric(3) | Validite du certificat (jours) |
| `lkcalcdluo` | char(1) | Calcul DLUO |
| `lkctrqtymin` | numeric(10,3) | Quantite minimum de commande |
| `lkcreadate` | timestamp | Date de creation |
| `lkmoddate` | timestamp | Date de modification |

### Filtrage par type

- `lktyp = 'P'` : liaisons **fournisseur** (Purchase) — utilisees dans les achats, receptions, contrats
- `lktyp = 'S'` : liaisons **client** (Sales) — utilisees dans les ventes, allocations, expeditions

---

## Objets PowerBuilder cles

### Fenetres principales — Donnees de base fournisseur (module `_masters`)

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_adresses` | w_response | **Liste des adresses** (clients + fournisseurs) — filtrage par type |
| `w_adresse_update` | w_response | **Fiche adresse** — edition complete d'un tiers (client/fournisseur) |
| `w_adresse_customize` | w_response | Fiche adresse personnalisable (colorisation des champs, masquage) |
| `w_adresse_search` | w_response | Recherche d'adresse avec filtres |
| `w_adresse_sqlsearch` | w_response | Recherche SQL avancee sur les adresses |
| `w_adresse_sqlsearch_multi` | w_response | Recherche SQL multi-criteres |
| `w_adresse_sqlselect` | w_response | Selection d'adresse par requete SQL |
| `w_adresses_selection` | w_response | Selection d'adresse (filtrable par `iad_sel_supp`) |
| `w_adresse_mass_update` | w_response | Mise a jour massive d'adresses |
| `w_adresgroup_update` | w_response | Gestion des groupes d'adresses |
| `w_adresgroup_select` | w_response | Selection d'un groupe d'adresses |

### Fenetres — Liaison article-fournisseur (module `_masters`)

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_linkitadpur_update` | w_response | **Edition d'une liaison article-fournisseur** — prix, ref, delai, UM |
| `w_linkitadpur_mass_update` | w_response | **Mise a jour massive** des liaisons fournisseur — prix, offres |
| `w_linkitadpur_import` | w_response | **Import** de tarifs fournisseur depuis fichier (CSV) |
| `w_linkitadsal_update` | w_response | Edition liaison article-client (equivalent cote vente) |

### Fenetres — Commandes d'achat (module `_purch`)

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_purchase` | w_response_purch | **Gestion des commandes d'achat** — en-tete + lignes |
| `w_purchase_unif` | w_response_purch | Commandes d'achat unifiees (production + general) |
| `w_purchaselimite` | w_response_purch | Commandes d'achat limites/cadrees |
| `w_quickpurchase` | w_response | **Saisie rapide** de commande d'achat |
| `w_quickpurchaselimite` | w_response | Saisie rapide commande cadree |
| `w_purhead_update` | w_popup | Edition de l'en-tete commande (fournisseur, devise, date) |
| `w_purheadlimite_update` | _(popup)_ | Edition en-tete commande limite |
| `w_purchase_mrp` | w_response | **MRP achats** — propositions d'achat avec contrats et tarifs |
| `w_purchase_receipt` | w_response | **Reception** de commandes fournisseur |
| `w_purchase_return` | w_response | **Retours** fournisseur |
| `w_purchase_histo` | w_popup | Historique des commandes d'achat |
| `w_purchase_fup` | w_response | Suivi des commandes d'achat (follow-up) |
| `w_purchase_sales` | w_response | Passage commande achat depuis une vente (achat/vente lie) |
| `w_purhead_quickreceipt` | _(popup)_ | Reception rapide commande |
| `w_purhead_receipt_sup` | _(popup)_ | Reception supplementaire |

### Fenetres — Contrats d'achat (module `_purch`)

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_purcontract` | w_response | **Liste des contrats d'achat** — en-tete + lignes |
| `w_purcontract_update` | w_response | Creation/edition d'un contrat |
| `w_purcontline_update` | w_response | Edition d'une ligne de contrat |
| `w_purcontract_histo` | _(popup)_ | Historique des contrats |

### Fenetres — Factures fournisseur (module `_purch`)

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_purinvoices` | w_response | **Liste des factures fournisseur** — en-tete + lignes |
| `w_purinvhead_update` | _(popup)_ | Edition en-tete facture fournisseur |
| `w_purinvlins_create` | _(popup)_ | Creation de lignes facture |
| `w_purinvlins_update` | _(popup)_ | Edition ligne facture standard |
| `w_purinvlinl_update` | _(popup)_ | Edition ligne facture lot |
| `w_purinvlinn_update` | _(popup)_ | Edition ligne facture NC |
| `w_purinvlinp_update` | _(popup)_ | Edition ligne facture proforma |
| `w_purinvlint_update` | _(popup)_ | Edition ligne facture transport |
| `w_purinvoices_paym` | _(popup)_ | Paiement des factures fournisseur |
| `w_purinvoices_qry` | _(popup)_ | Requete sur les factures fournisseur |
| `w_purinvsplit_rcpo_update` | _(popup)_ | Eclatement facture par reception |
| `w_purinvsplit_truck_update` | _(popup)_ | Eclatement facture par camion |
| `w_purinvsplit_update` | _(popup)_ | Eclatement facture fournisseur |
| `w_purinv_clean` | _(popup)_ | Nettoyage/purge factures |
| `w_purinv_select` | _(popup)_ | Selection de factures |
| `w_quick_purinvoice` | _(popup)_ | Saisie rapide facture fournisseur |

### Fenetres — Requetes fournisseur (module `_query`)

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_qry_cmpny_pur` | w_response | **Tableau de bord fournisseur** — commandes en cours, planning, receptions, historique, factures, contrats, evolution CA |

### DataWindows cles

| DataWindow | Module | Description |
|------------|--------|-------------|
| `dd_suppliers` | _masters | **DropDown fournisseurs** — `adsupp='Y' AND adactiv='Y'` — affiche `fullname = trim(adname) + ', ' + trim(adcode)` |
| `d_adresse_update1` | _masters | Fiche adresse complete (160+ colonnes) — mise a jour sur `adresses` |
| `d_purhead_update` | _purch | En-tete commande d'achat — DDDW `dd_suppliers` pour le champ `phsupp` |
| `d_purcontract_update` | _purch | En-tete contrat — DDDW `dd_suppliers` pour le champ `chadid` |
| `d_purheadlimite_update` | _purch | En-tete commande limite |
| `d_purghead_update` | _purch | En-tete commande groupee |
| `d_purinvhead_update` | _purch | En-tete facture fournisseur — DDDW `dd_suppliers` pour `pisup` |
| `d_quick_purinvhead` | _purch | En-tete facture rapide |
| `d_transact_rcpo3` | _stock | Transaction de reception — DDDW `dd_suppliers` |
| `d_brf_transact_rcpo3` | _stkbarcod | Reception code-barres — DDDW `dd_suppliers` |

### DataWindows d'impression

| DataWindow | Module | Description |
|------------|--------|-------------|
| `d_purord_mod1_print` a `d_purord_mod8_print` | _prints_mod | Templates d'impression commande d'achat (8 variantes) |
| `d_purg1ord_mod1_print`, `d_purg1ord_mod2_print` | _prints_mod | Impression commande groupee type 1 |
| `d_purg2ord_mod1_print`, `d_purg2ord_mod2_print` | _prints_mod | Impression commande groupee type 2 |
| `d_pur_rap_mod1_print` | _prints_mod | Rappel de commande d'achat |
| `d_prf_supp_item_recpt_print` | _prints_qry | Impression reception article par fournisseur |
| `d_plan_subc_print` | _prints_std | Impression planning sous-traitance |
| `zmod_supplier_payterm_subprint` | _prints_mod | Sous-rapport conditions de paiement fournisseur |
| `zmod_adresse_faxtel_subprint` | _prints_mod | Sous-rapport adresse/fax/tel fournisseur |

### Objets non-visuels

| Objet | Module | Description |
|-------|--------|-------------|
| `nvo_purchase_contract` | _purch | **Gestion des contrats d'achat** — verification dates, soldes, prix, quantites |

---

## Flux : Creation d'un fournisseur

### Etape 1 — Ouverture de la fiche adresse

L'utilisateur ouvre `w_adresses` qui affiche la liste de toutes les adresses. Un filtre permet d'isoler les fournisseurs (`adsupp = 'Y'`). Le double-clic ou le bouton "Nouveau" ouvre `w_adresse_update`.

### Etape 2 — Saisie des donnees de base

Dans `w_adresse_update`, le DataWindow `d_adresse_update1` est utilise. Les champs essentiels :

1. **adcode** — Code fournisseur (10 caracteres max, saisi manuellement)
2. **adname** — Nom du fournisseur
3. **adsupp = 'Y'** — Cocher le flag fournisseur
4. **adactiv = 'Y'** — Actif
5. Coordonnees (adresse, tel, fax, email)
6. `adcountrid` — Code pays ISO
7. `adtva` — Numero TVA
8. `adcurr` — Devise d'achat par defaut
9. `adsupppay` — Condition de paiement fournisseur
10. `adpaymode` — Mode de paiement
11. `adshipdays` — Delai de livraison par defaut
12. `adgrsupp` — Groupe fournisseur
13. `adpurchaser` — Acheteur responsable
14. `adlang` — Langue de correspondance

### Etape 3 — Onglets complementaires

La fenetre `w_adresse_update` comporte des onglets (TabPages) pour :
- **Contacts** (table contacts)
- **Liaisons articles** (linkitad avec `lktyp='P'`)
- **Historique commandes** (purhead)
- **Factures** (purinvhead)
- **Donnees comptables** (adidcptsupp, adimputsupp)
- **Donnees bancaires** (IBAN, BIC)
- **Parametres EDI** (adpuredi, adpurediseq)
- **Memo** (admemo)

### Etape 4 — Sauvegarde

La fonction `adresseinputok()` valide les champs obligatoires. La fonction `acceptall()` persiste les donnees. La fenetre met a jour `adcreadat` et `adcreauser` automatiquement.

### Etape 5 — Validation TVA

La fonction `wf_check_vat()` permet de verifier le numero TVA aupres du service web VIES (via SOAP — `checkvatport`).

---

## Flux : Liaison article-fournisseur (linkitad)

### Creation d'une liaison

1. Depuis la fiche article (`w_item_update`) ou depuis la fiche fournisseur (`w_adresse_update`), l'utilisateur accede a l'onglet "Fournisseurs"
2. Clic "Ajouter" ouvre `w_linkitadpur_update`
3. Champs a renseigner :
   - **lkadcode** — Code fournisseur (DDDW `dd_suppliers`)
   - **lkitem** — Code article
   - **lkcurr** — Devise
   - **lkadref** — Reference fournisseur (code de l'article chez le fournisseur)
   - **lkum** — Unite de mesure d'achat (peut differer de l'UM stock)
   - **lkumconv** — Facteur de conversion UM achat -> UM stock
   - **lkleadtime** — Delai d'approvisionnement en jours
   - **lkmain** — Fournisseur principal (`Y`/`N`)
   - **lkfinalprice** — Prix d'achat negocie
   - **lkctrqtymin** — Quantite minimum de commande
   - **lkean** — Code EAN
4. La fonction `linkinputok()` valide les donnees
5. Les codes EAN supplementaires (lkean1, lkean2, lkean3) avec leurs facteurs de conversion

### Mise a jour massive des prix

`w_linkitadpur_mass_update` permet de :
- Selectionner un fournisseur (`wf_init_supplier()`)
- Charger toutes ses liaisons (`wf_get_linkitad()`)
- Modifier les prix en masse (`wf_update_quotes()`, `wf_update_link()`)
- Supprimer des liaisons (`wf_delete_link()`)

### Import de tarifs fournisseur

`w_linkitadpur_import` permet d'importer des tarifs depuis un fichier externe :
- Selection du fournisseur (`is_currentsupplier`)
- Chargement du fichier (`wf_loadfile()`) — parametrage separateur et delimiteur
- Gestion des anomalies (codes EAN inconnus, codes article manquants, prix invalides)
- Creation automatique des liaisons (`is_autolinkitad`)
- Sauvegarde des prix (`wf_savequotes()`)

---

## Flux : Commande d'achat

### Creation rapide (w_quickpurchase)

1. Selectionner le fournisseur (`is_SuppId`) — charge ses parametres par defaut (devise, delai)
2. Selectionner le lieu de livraison (DDLB `load_ddlb_shipto`)
3. Saisir les articles — chaque ligne utilise les donnees de `linkitad` :
   - `wf_insrowdw()` insere une ligne avec prix, ref fournisseur, UM, conversion, delai
4. `wf_createpurhead()` cree l'en-tete dans `purhead`
5. `createpurline()` cree chaque ligne dans `purline`
6. Gestion des contrats via `nvo_purchase_contract`

### Gestion des commandes (w_purchase)

Cycle de vie d'une commande (champ `phstatus`) :
- **Ouvert** — commande en preparation
- **Confirme** — `wf_confirm_purhead()` + `wf_confirm_purline()`
- **Envoye** — `wf_envoy_purhead()` + `wf_envoy_purline()`
- **En approbation** — `wf_toapprob()` (si `APPROBIVY` actif)
- **Cloture** — `wf_close_purhead()` / `wf_purhead_close()`
- **Annule** — `wf_cancel_purhead()`

Actions supplementaires :
- `wf_unconfirm_purhead()` — retour a l'etat ouvert
- `wf_unenvoy_purhead()` — retour avant envoi
- `wf_create_edi_purchase()` — generation EDI
- `wf_send_wms()` — envoi vers WMS
- `wf_proforma_recu_purhead()` — marquer proforma recu
- `wf_proforma_paye_purhead()` — marquer proforma paye

### MRP Achats (w_purchase_mrp)

Le MRP genere des **propositions d'achat** :
- Selection des articles et fournisseurs
- Verification des contrats (`wf_check_contract()`, `wf_contract_valid()`)
- Verification des tarifs (`wf_check_tarif()`)
- Creation des commandes (`createplorder()`)
- Suppression de propositions (`wf_delete_mrp()`)
- Rafraichissement (`refresh_mrp()`)

### Types de commandes

| Type | Fenetre | Table | Description |
|------|---------|-------|-------------|
| Commande standard | `w_purchase` | `purhead` / `purline` | Commande classique |
| Commande cadree/limite | `w_purchaselimite` | `purhead` / `purlinelimite` | Commande avec gestion limite/cadree |
| Commande unifiee | `w_purchase_unif` | `purhead` / `purline` + `purghead` | Vue unifiee production + general |
| Commande groupee | _(via purghead)_ | `purghead` | Groupement par projet |
| Saisie rapide | `w_quickpurchase` | `purhead` / `purline` | Saisie simplifiee |

---

## Flux : Contrats fournisseur

Les contrats d'achat (`purcnthead` / `purcntline`) definissent des **accords-cadres** avec les fournisseurs.

### Structure du contrat

**En-tete** (`purcnthead`) :
- `chcode` — Numero de contrat (PK)
- `chadid` — Code fournisseur (DDDW `dd_suppliers`)
- `chdesc` — Description du contrat
- `chadref` — Reference fournisseur pour le contrat
- `chcurr` — Devise du contrat
- `chstatus` — Statut (ouvert, cloture, annule)
- `chexptyp` — Type d'expiration (`D` = date, `Q` = quantite)
- `chexpdat` — Date d'expiration
- `chexpqty` — Quantite d'expiration
- `chusdqty` — Quantite deja consommee
- `chordid` — Commande d'achat liee (FK -> purhead)
- `chappdat` — Date d'application
- `chlastdat` — Date de derniere utilisation
- `chmccode` — Code multi-societe

**Lignes** (`purcntline`) :
- `clcode` — Numero de contrat (FK -> purcnthead)
- `clitemid` — Code article
- `cladref` — Reference fournisseur
- `clleadtime` — Delai de livraison
- `cluomord` — Unite de commande
- `cluomconv` — Conversion UM
- `clstdcost` — **Prix negocie**
- `clnegoqty` — Quantite negociee
- `clexpdate` — Date d'expiration de la ligne
- `clusdqty` — Quantite consommee sur cette ligne

### Gestion des contrats (w_purcontract)

| Fonction | Description |
|----------|-------------|
| `refresh_contract()` | Rafraichit la liste des contrats |
| `refresh_contline()` | Rafraichit les lignes d'un contrat |
| `wf_setnewstate()` | Change le statut d'un contrat |
| `wf_contract_close()` | Cloture un contrat |
| `wf_contract_null()` | Annule un contrat |
| `wf_filteritem()` | Filtre par article |

### NVO nvo_purchase_contract

L'objet non-visuel `nvo_purchase_contract` (196 lignes, module `_purch`) fournit les services :

| Fonction | Retour | Description |
|----------|--------|-------------|
| `uf_recuptype(al_chcode)` | long | Recupere le type de contrat |
| `uf_checkdate(al_chcode)` | integer | Verifie la validite de date du contrat |
| `uf_checksold(al_chcode, as_item, ad_qtcmd)` | integer | Verifie le solde disponible sur le contrat |
| `uf_getsold(al_chcode, as_item, ad_qtcmd)` | integer | Retourne le solde du contrat |
| `uf_checkqt(al_chcode)` | decimal | Verifie la quantite restante |
| `uf_recupprix(al_chcode, as_item)` | decimal | **Recupere le prix** negocie pour un article |
| `uf_getconvqt(al_chcode, as_item)` | integer | Retourne la conversion de quantite |

---

## Flux : Facture fournisseur

### Structure

**En-tete** (`purinvhead`) :
- `picode` — Numero de facture (PK)
- `pisup` — Code fournisseur
- `pidate` — Date de facture
- `picurr` — Devise
- `pisupref` — Reference fournisseur (numero de facture du fournisseur)
- `pistatus` — Statut
- `pipurval` — Montant HT
- `pitvaval` — Montant TVA
- `pitotval` — Total TTC
- `pirist` — Ristourne (%)
- `piesct` — Escompte (%)
- `pipaym` — Mode de paiement
- `pipaymdat` — Date d'echeance
- `picptper` — Periode comptable
- `piblockedpay` — Blocage paiement
- `pipathfilepdf` — Chemin vers la facture PDF

### Gestion (w_purinvoices)

| Fonction | Description |
|----------|-------------|
| `invhead_refresh()` | Rafraichit la liste des factures |
| `update_total()` | Recalcule les totaux |
| `invoice_histper()` | Historique par periode |
| `invline_delete()` | Suppression d'une ligne |
| `wf_show_pdf_file()` | Affichage du PDF |
| `wf_modify_pdf_file()` | Modification du lien PDF |
| `wf_reset_pdf_file()` | Reinitialisation du PDF |

---

## Flux : Reception d'achat

### Fenetre w_purchase_receipt

La reception est geree depuis `w_purchase_receipt` :
1. Selection du fournisseur (`iSel_supp_Id`)
2. Filtrage des commandes a receptionner (`filteritem()`)
3. Saisie des quantites recues
4. `receptpurchase()` — traitement de la reception
5. Mise a jour de `purline.plqtyrec`, `purline.pldatrec`
6. Creation des lignes dans `toreception` si reception partielle

La table `toreception` trace les receptions :
- `trpurhead` — Numero de commande
- `trpurline` — Numero de ligne
- `trqty` — Quantite recue
- `trloorgcode` — Code d'origine (lot)
- `trloexpdat` — Date d'expiration du lot

---

## Table linkitadtd : donnees techniques article-fournisseur

La table `linkitadtd` stocke des informations techniques pour la liaison article-fournisseur :

| Colonne | Type | Description |
|---------|------|-------------|
| `ldadcode` | char(10) | Code fournisseur (PK partielle) |
| `lditem` | char(20) | Code article (PK partielle) |
| `ldmoddat` | timestamp | Date de modification |
| `lding` | long varchar | **Ingredients** (texte long) |
| `ldnut` | long varchar | **Informations nutritionnelles** (texte long) |
| `ldalg` | long varchar | **Allergenes** (texte long) |

Cette table est utilisee dans l'agroalimentaire pour stocker les fiches techniques fournisseur.

---

## Multi-site et multi-societe

### Parametrage multi-societe

- `phmccode` (purhead) — Code multi-societe de la commande
- `chmccode` (purcnthead) — Code multi-societe du contrat
- `pimccode` (purinvhead) — Code multi-societe de la facture
- Variable `is_MULTICO` presente dans presque toutes les fenetres achats
- Variable `is_MULCOCNTR` pour les contrats multi-societe

### Filtrage des fournisseurs

Le DataWindow `dd_suppliers` filtre :
```sql
WHERE adsupp = 'Y' AND adactiv = 'Y'
  AND adcode NOT IN ('#########C', '#########R', '#########S')
ORDER BY adname, adcode
```
Les codes speciaux `#########C/R/S` sont exclus (adresses systeme).

---

## Points d'attention

### Table adresses partagee client/fournisseur

- Un meme enregistrement `adresses` peut etre **client ET fournisseur** simultanement
- Les colonnes sont doublees : `adcustpay`/`adsupppay`, `adcustval`/`adsuppval`, etc.
- **Attention aux impacts croises** : modifier les coordonnees (adresse, tel) impacte les deux roles
- Les groupes sont separes : `adgrcust` (groupe client) vs `adgrsupp` (groupe fournisseur)
- Les comptes comptables sont separes : `adidcptcust` vs `adidcptsupp`

### DropDown fournisseurs (dd_suppliers)

- Utilise massivement dans tout le module achats et stock
- Affiche `fullname = trim(adname) + ', ' + adcode`
- Filtre par `adsupp='Y' AND adactiv='Y'`
- Modifie sur la table `adresses` — attention au champ cle `adcode`

### Contrats et prix

- Les contrats peuvent expirer par **date** (`chexptyp='D'`) ou par **quantite** (`chexptyp='Q'`)
- Le NVO `nvo_purchase_contract` est instancie dans `w_quickpurchase`, `w_quickpurchaselimite`, et `w_purchase_mrp`
- `uf_recupprix()` recupere le prix du contrat — prioritaire sur le prix `linkitad`

### Commandes limites

- Les commandes "limite" (`purchaselimite`) utilisent la table `purlinelimite` au lieu de `purline`
- Elles permettent de gerer des commandes cadrees avec confirmation partielle
- `wf_confirmlimite()`, `wf_gocommande()`, `wf_archiver()` gerent le cycle specifique

### EDI et WMS

- Les fournisseurs peuvent etre configures pour l'EDI (`adpuredi = 'Y'`)
- La generation EDI se fait via `wf_create_edi_purchase()`
- L'envoi WMS via `wf_send_wms()`
- Le compteur d'envois EDI est dans `purhead.phnbsendedi`

### Tables enfants de adresses (FK entrantes — focus fournisseur)

Les tables suivantes referencent `adresses` via une FK :
- `purhead` — commandes d'achat
- `purghead` — commandes groupees
- `purcnthead` — contrats d'achat
- `purinvhead` — factures fournisseur
- `linkitadtd` — donnees techniques article-fournisseur
- `bomhead` — nomenclatures (sous-traitant)
- `routline` — gammes (sous-traitant dans les postes de charge)
- `mfghead` — ordres de fabrication (sous-traitant)
- `mfgwcreqs` — requisitions poste de charge (sous-traitant)
- `qcctrlhead` — controle qualite
- `qcspechead`, `qcspecline` — specifications qualite
- `forecasts` — previsions
- `shiphead` — expeditions

---

## Recherche rapide

### Par type d'objet

```
# Fenetres fournisseur dans _masters
pb_search_code pattern="w_adresse" file_type="window"

# Fenetres achats
pb_search_code pattern="w_purchase|w_purhead|w_purcontract|w_quickpurchase|w_purinv" file_type="window"

# DataWindows de selection fournisseur
pb_search_code pattern="dd_suppliers" file_type="datawindow"

# Liaison article-fournisseur
pb_search_code pattern="linkitad" file_type="window"
```

### Par table

```
# Toutes les DW sur la table purhead
pb_search_code pattern="FROM.*purhead" file_type="datawindow"

# DW sur purcnthead (contrats)
pb_search_code pattern="FROM.*purcnthead" file_type="datawindow"

# DW sur purinvhead (factures)
pb_search_code pattern="FROM.*purinvhead" file_type="datawindow"

# DW sur linkitad
pb_search_code pattern="FROM.*linkitad" file_type="datawindow"
```

### Par fonctionnalite

```
# Gestion des contrats
pb_get_call_graph function_name="uf_recupprix"
pb_get_call_graph function_name="uf_checksold"

# Validation d'adresse
pb_get_call_graph function_name="adresseinputok"

# Reception
pb_get_call_graph function_name="receptpurchase"

# Import tarifs
pb_get_call_graph function_name="wf_loadfile"
```

### Hierarchie d'heritage

```
# Ancetre des fenetres achats
pb_get_inheritance object_name="w_response_purch"

# NVO contrats
pb_get_inheritance object_name="nvo_purchase_contract"
```
