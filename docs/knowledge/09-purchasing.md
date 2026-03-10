# Domaine : Achats (Purchasing)

## Vue d'ensemble

Le module Achats de PmiGest couvre le cycle complet d'approvisionnement, depuis la demande d'achat jusqu'a la reception des marchandises et la facturation fournisseur. Le code est principalement dans la bibliotheque `_purch` (150 objets : 59 fenetres, 79 DataWindows, 3 user objects, 4 fonctions, 2 structures, 3 menus). Les receptions sont gerees dans `_stock`, et l'export comptable des factures fournisseurs dans `_ifcpt`.

Le systeme distingue deux familles de commandes d'achat :
- **Commandes standards** (`purhead` / `purline`) : commandes d'achat classiques vers un fournisseur.
- **Commandes generales** (`purghead` / `purgline`) : commandes de type general (achats divers, services, sous-traitance), avec un champ `phtype` pour differencier le type.
- **Commandes limitees** (`purheadlimite` / `purlinelimite`) : variante avec gestion de limites budgetaires, structure identique a `purhead`/`purline` avec prefixe `phl`/`pll`.

Les contrats fournisseur (`purcnthead` / `purcntline`) permettent de negocier des conditions cadres (prix, quantites, delais) puis de generer des commandes d'appel.

Les demandes d'achat (`purreqhead` / `purreqline`) permettent aux utilisateurs de formuler des besoins qui sont ensuite approuves puis transformes en commandes.

Les factures fournisseur (`purinvhead` / `purinvline`) sont saisies en rapprochement avec les receptions et commandes.

---

## Tables principales

### purhead -- En-tete commande d'achat standard

| Colonne | Type | Null | Description |
|---------|------|------|-------------|
| `phcode` | numeric(6) | NO | Numero de commande (cle primaire) |
| `phsupp` | char(10) | NO | Code fournisseur (FK → adresses) |
| `phcurr` | char(3) | NO | Devise de la commande |
| `phstatus` | char(1) | YES | Statut de la commande (voir section Statuts) |
| `phdatcrea` | timestamp | YES | Date de creation |
| `phlastline` | numeric(4) | YES | Dernier numero de ligne |
| `phcntid` | numeric(6) | YES | ID contrat fournisseur lie |
| `phcntref` | varchar(30) | YES | Reference du contrat |
| `phcmnt` | varchar(1000) | YES | Commentaire libre |
| `phwithtransp` | char(1) | YES | Avec transport (Y/N) |
| `phtranspid` | char(10) | YES | Code transporteur |
| `phdlvt` | char(1) | YES | Type de livraison |
| `phdlvtplace` | varchar(15) | YES | Lieu de livraison |
| `phtransfered` | char(1) | YES | Transfere (Y/N) |
| `phfileref` | numeric(4) | YES | Reference dossier (FK → filehead) |
| `phfileline` | numeric(4) | YES | Ligne dossier |
| `phdatsupply` | timestamp | YES | Date d'approvisionnement |
| `phpurchaser` | char(8) | YES | Code acheteur |
| `phrcpocmnt` | varchar(240) | YES | Commentaire reception |
| `phsupppay` | char(1) | YES | Condition de paiement fournisseur |
| `phcreauser` | char(50) | YES | Utilisateur createur |
| `phaut` | char(1) | YES | Autorisation/approbation |
| `phautuser` | char(8) | YES | Utilisateur approbateur |
| `phautdate` | timestamp | YES | Date d'approbation |
| `phmccode` | varchar(10) | YES | Code multi-societe |
| `phrefint` | varchar(60) | YES | Reference interne |
| `phnbsendedi` | numeric(3) | NO | Nombre d'envois EDI |
| `phsendwms` | numeric(3) | NO | Nombre d'envois WMS |
| `phchassis` | varchar(17) | YES | Numero de chassis (vehicule) |
| `phregistre` | varchar(20) | YES | Immatriculation |
| `phmarque` | varchar(25) | YES | Marque |
| `phdatereg` | timestamp | YES | Date d'enregistrement |
| `phkm` | numeric(6) | YES | Kilometrage |
| `phmodif` | timestamp | YES | Date derniere modification |
| `phusermodif` | char(20) | YES | Utilisateur derniere modification |
| `phproforma` | char(1) | YES | Proforma (Y/N) |

**FK sortantes** : `adresses` (fournisseur), `filehead` (dossier).
**FK entrantes** : `purline` (lignes de commande).

### purline -- Lignes commande d'achat standard

| Colonne | Type | Null | Description |
|---------|------|------|-------------|
| `plcode` | numeric(6) | NO | Numero de commande (FK → purhead) |
| `plline` | numeric(4) | NO | Numero de ligne |
| `plitem` | char(20) | NO | Code article (FK → items) |
| `plqtyord` | numeric(10,3) | NO | Quantite commandee |
| `plqtyreq` | numeric(10,3) | NO | Quantite requise |
| `pluomord` | char(2) | NO | Unite de mesure commande |
| `pluomconv` | numeric(16,10) | NO | Coefficient de conversion UM |
| `pldatreq` | timestamp | NO | Date requise |
| `pldatsup` | timestamp | NO | Date prevue fournisseur |
| `plstdval` | numeric(10,4) | NO | Prix standard |
| `plpurval` | numeric(8,2) | YES | Prix d'achat |
| `plqtyrec` | numeric(10,3) | YES | Quantite recue |
| `plstatus` | char(1) | YES | Statut de la ligne (voir section Statuts) |
| `pladref` | char(30) | YES | Reference article fournisseur |
| `plshipto` | numeric(4) | YES | Adresse de livraison |
| `plqtyinv` | numeric(10,3) | YES | Quantite facturee |
| `plrapnb` | integer | YES | Nombre de rappels |
| `pllastrap` | timestamp | YES | Date dernier rappel |
| `plsalhead` | numeric(6) | YES | Commande vente liee (generation croisee) |
| `plsalline` | numeric(4) | YES | Ligne commande vente liee |
| `plinvclot` | char(1) | YES | Facturation cloturee (Y/N) |
| `pldatrec` | timestamp | YES | Date de reception |
| `pltransfered` | char(1) | YES | Transfere (Y/N) |
| `plrcio` | char(1) | YES | Reception In/Out |
| `plcmnt` | long varchar | YES | Commentaire ligne |
| `plprorig` | char(1) | YES | Origine processus |
| `plpurreqcode` | numeric(6) | YES | Lien demande d'achat (code) |
| `plpurreqline` | numeric(4) | YES | Lien demande d'achat (ligne) |
| `plqtyrectarif` | numeric(12,3) | YES | Quantite recue (tarif) |
| `plrist` | numeric(5,2) | YES | Remise (%) |
| `plval` | numeric(10,4) | YES | Valeur calculee |
| `plenvoy` | char(1) | YES | Envoye au fournisseur (Y/N) |
| `plcontract` | numeric(6) | YES | Contrat lie |

**FK sortantes** : `items` (article), `purhead` (en-tete).
**FK entrantes** : `toreception` (details reception).

### purghead -- En-tete commande d'achat generale

| Colonne | Type | Null | Description |
|---------|------|------|-------------|
| `phcode` | numeric(6) | NO | Numero de commande |
| `phtype` | char(1) | NO | Type de commande (distingue les commandes generales) |
| `phsupp` | char(10) | NO | Code fournisseur (FK → adresses) |
| `phcurr` | char(3) | NO | Devise |
| `phstatus` | char(1) | YES | Statut |
| `phdatcrea` | timestamp | YES | Date de creation |
| `phlastline` | numeric(4) | YES | Dernier numero de ligne |
| `phprojid` | numeric(6) | YES | ID projet lie |
| `phversn` | numeric(3) | YES | Version |
| `phcmnt` | varchar(1000) | YES | Commentaire |
| `phfileref` | numeric(4) | YES | Reference dossier |
| `phfileline` | numeric(4) | YES | Ligne dossier |
| `phpurchaser` | char(8) | YES | Code acheteur |
| `phdlvt` | char(1) | YES | Type de livraison |
| `phdlvtplace` | varchar(15) | YES | Lieu de livraison |
| `phsupppay` | char(1) | YES | Condition de paiement |
| `phcreauser` | char(50) | YES | Utilisateur createur |
| `phaut` | char(1) | YES | Approbation |
| `phautuser` | char(50) | YES | Utilisateur approbateur |
| `phautdate` | timestamp | YES | Date approbation |
| `phrcpocmnt` | varchar(240) | YES | Commentaire reception |
| `phmccode` | varchar(10) | YES | Code multi-societe |
| `phrefint` | varchar(60) | YES | Reference interne |
| `phsendwms` | numeric(3) | NO | Nombre d'envois WMS |

**FK sortantes** : `adresses` (fournisseur), `filehead` (dossier).

### purgline -- Lignes commande d'achat generale

| Colonne | Type | Null | Description |
|---------|------|------|-------------|
| `plcode` | numeric(6) | NO | Numero de commande |
| `plline` | numeric(4) | NO | Numero de ligne |
| `pldesc` | char(50) | YES | Description libre (pas de lien article) |
| `plqty` | numeric(10,3) | NO | Quantite |
| `pldatreq` | timestamp | NO | Date requise |
| `plpurval` | numeric(8,2) | YES | Prix d'achat |
| `plqtyrec` | numeric(10,3) | YES | Quantite recue |
| `plstatus` | char(1) | YES | Statut |
| `plshipto` | numeric(4) | YES | Adresse de livraison |
| `plrefnum` | numeric(6) | YES | Numero de reference |
| `plcmnt` | long varchar | YES | Commentaire |
| `plqtyinv` | numeric(10,3) | YES | Quantite facturee |
| `plcptpur` | char(12) | YES | Compte achat (comptabilite) |
| `plcptanal` | char(12) | YES | Compte analytique |
| `plstdval` | numeric(10,4) | YES | Valeur standard |
| `plrapnb` | integer | YES | Nombre de rappels |
| `pllastrap` | timestamp | YES | Date dernier rappel |
| `plsalhead` | numeric(6) | YES | Commande vente liee |
| `plsalline` | numeric(4) | YES | Ligne commande vente liee |
| `plinvclot` | char(1) | YES | Facturation cloturee |
| `pldatrec` | timestamp | YES | Date de reception |
| `pluomord` | char(2) | YES | Unite de mesure |
| `plrcio` | char(1) | YES | Reception In/Out |
| `plrefline` | numeric(5) | YES | Ligne de reference |
| `plenvoy` | char(1) | YES | Envoye (Y/N) |

**Difference cle avec `purline`** : `purgline` utilise `pldesc` (description libre) au lieu de `plitem` (code article), et inclut `plcptpur`/`plcptanal` pour l'imputation comptable directe.

### purcnthead -- En-tete contrat fournisseur

| Colonne | Type | Null | Description |
|---------|------|------|-------------|
| `chcode` | numeric(6) | NO | Numero de contrat (cle primaire) |
| `chstatus` | char(1) | YES | Statut du contrat |
| `chadid` | char(10) | YES | Code fournisseur (FK → adresses) |
| `chdesc` | varchar(50) | YES | Description du contrat |
| `Chadref` | varchar(30) | YES | Reference fournisseur |
| `Chcurr` | char(3) | YES | Devise |
| `Chcreadat` | timestamp | YES | Date de creation |
| `Chordid` | numeric(6) | YES | ID commande liee |
| `Chappdat` | timestamp | YES | Date d'approbation |
| `Chexptyp` | char(1) | YES | Type d'expiration (D=date, Q=quantite) |
| `Chexpdat` | timestamp | YES | Date d'expiration |
| `Chexpqty` | numeric(10,3) | YES | Quantite d'expiration |
| `Chuomord` | char(2) | YES | Unite de mesure |
| `Chlastdat` | timestamp | YES | Derniere date d'utilisation |
| `Chusdqty` | numeric(10,3) | YES | Quantite utilisee |
| `Chcmnt` | long varchar | YES | Commentaire |
| `chdlvt` | char(1) | YES | Type de livraison |
| `chdlvtplace` | varchar(15) | YES | Lieu de livraison |
| `chmccode` | varchar(10) | YES | Code multi-societe |

**FK sortantes** : `adresses` (fournisseur).

### purcntline -- Lignes contrat fournisseur

| Colonne | Type | Null | Description |
|---------|------|------|-------------|
| `clcode` | numeric(6) | NO | Numero de contrat |
| `clitemid` | char(20) | NO | Code article |
| `cladref` | char(30) | YES | Reference article fournisseur |
| `clleadtime` | numeric(4) | YES | Delai de livraison (jours) |
| `cluomord` | char(2) | YES | Unite de mesure |
| `Cluomconv` | numeric(12,6) | YES | Coefficient de conversion UM |
| `Cllastdat` | timestamp | YES | Derniere date d'utilisation |
| `Clusdqty` | numeric(10,3) | YES | Quantite utilisee |
| `clstdcost` | numeric(10,4) | YES | Prix negocie |
| `Clnegoqty` | numeric(10,3) | YES | Quantite negociee |
| `Clexpdate` | timestamp | YES | Date d'expiration de la ligne |

### purreqhead -- En-tete demande d'achat

| Colonne | Type | Null | Description |
|---------|------|------|-------------|
| `pqcode` | numeric(6) | NO | Numero de demande (cle primaire) |
| `pqstatus` | numeric(1) | YES | Statut de la demande (voir section Statuts) |
| `pqdatcrea` | timestamp | YES | Date de creation |
| `pqcreauser` | char(50) | YES | Utilisateur createur |
| `pqdatreq` | timestamp | YES | Date requise |
| `pqaut` | char(1) | YES | Approbation |
| `pqautuser` | varchar(8) | YES | Utilisateur approbateur |
| `pqautdate` | timestamp | YES | Date d'approbation |

### purreqline -- Lignes demande d'achat

| Colonne | Type | Null | Description |
|---------|------|------|-------------|
| `plcode` | numeric(6) | NO | Numero de demande |
| `plline` | numeric(4) | NO | Numero de ligne |
| `plitem` | char(20) | YES | Code article |
| `plqty` | numeric(12,3) | YES | Quantite demandee |
| `plvalue` | numeric(10,4) | YES | Valeur estimee |
| `pldatcrea` | timestamp | YES | Date de creation |
| `plcreauser` | char(50) | YES | Utilisateur createur |
| `plstatus` | numeric(1) | YES | Statut de la ligne |
| `pldatreq` | timestamp | YES | Date requise |

### purinvhead -- En-tete facture fournisseur

| Colonne | Type | Null | Description |
|---------|------|------|-------------|
| `picode` | numeric(6) | NO | Numero de facture (cle primaire) |
| `pisup` | char(10) | NO | Code fournisseur (FK → adresses) |
| `pidate` | timestamp | NO | Date de facture |
| `picurr` | char(3) | YES | Devise |
| `pitvaref` | char(15) | YES | Reference TVA |
| `pistatus` | char(1) | YES | Statut de la facture (voir section Statuts) |
| `pisupref` | char(20) | YES | Reference fournisseur |
| `pipurval` | numeric(8,2) | YES | Montant HT |
| `pitvaval` | numeric(8,2) | YES | Montant TVA |
| `pitotval` | numeric(8,2) | YES | Montant TTC |
| `picomment` | varchar(120) | YES | Commentaire |
| `pitypinv` | char(1) | YES | Type de facture (S=standard, N=note de credit) |
| `piexpiry` | timestamp | YES | Date d'echeance |
| `picptper` | char(6) | YES | Periode comptable |
| `pityptva` | char(1) | YES | Type TVA |
| `picurconv` | numeric(10,6) | YES | Taux de conversion devise |
| `picptexer` | char(4) | YES | Exercice comptable |
| `pilastlin` | numeric(3) | YES | Derniere ligne |
| `pirist` | numeric(4,2) | YES | Remise globale (%) |
| `piesct` | numeric(4,2) | YES | Escompte (%) |
| `pifacnot` | numeric(2) | YES | Numero de note |
| `pipaym` | char(1) | YES | Statut de paiement |
| `pipaymdat` | timestamp | YES | Date de paiement |
| `pifileref` | numeric(4) | YES | Reference dossier |
| `pifileline` | numeric(4) | YES | Ligne dossier |
| `picomm` | varchar(20) | YES | Communication structuree |
| `picreadate` | timestamp | YES | Date de creation |
| `picreauser` | char(50) | YES | Utilisateur createur |
| `pimoddate` | timestamp | YES | Date de modification |
| `pimoduser` | char(50) | YES | Utilisateur modificateur |
| `piorderrist` | char(1) | YES | Remise sur commande |
| `piblockedpay` | char(1) | YES | Paiement bloque (Y/N) |
| `pimccode` | varchar(10) | YES | Code multi-societe |
| `picodemc` | numeric(12) | YES | Code communication |
| `picountryid` | char(2) | YES | Code pays |
| `pisupp` | char(10) | YES | Fournisseur alternatif |
| `pipathfilepdf` | varchar(250) | YES | Chemin fichier PDF |

**FK sortantes** : `adresses` (fournisseur), `filehead` (dossier).
**FK entrantes** : `purinvline` (lignes facture).

### purinvline -- Lignes facture fournisseur

| Colonne | Type | Null | Description |
|---------|------|------|-------------|
| `plcode` | numeric(6) | NO | Numero de facture (FK → purinvhead) |
| `plline` | numeric(4) | NO | Numero de ligne |
| `pltype` | char(1) | NO | Type de ligne (S=standard, T=transport, N=note, P=port, L=libre) |
| `plitem` | char(20) | YES | Code article |
| `plordno` | numeric(6) | YES | Numero de commande d'achat liee |
| `plordlin` | numeric(3) | YES | Numero de ligne commande liee |
| `plqty` | numeric(12,3) | YES | Quantite facturee |
| `plpurval` | numeric(8,2) | YES | Prix unitaire |
| `pltva` | numeric(4,2) | YES | Taux TVA (%) |
| `pltvaval` | numeric(8,2) | YES | Montant TVA |
| `pltotval` | numeric(8,2) | YES | Montant total ligne |
| `plcomment` | varchar(120) | YES | Commentaire |
| `plcptpur` | char(12) | YES | Compte achat |
| `plcptanal` | char(12) | YES | Compte analytique |
| `plnetval` | numeric(8,2) | YES | Valeur nette |
| `plbastva` | numeric(8,2) | YES | Base TVA |
| `plrealtva` | numeric(8,2) | YES | TVA reelle |
| `plcptanal2` | char(12) | YES | Compte analytique 2 |
| `plcptanal3` | char(12) | YES | Compte analytique 3 |
| `plmfg` | numeric(6) | YES | Ordre de fabrication lie |
| `plmfgtype` | char(1) | YES | Type fabrication |
| `plmfgcostline` | numeric(4) | YES | Ligne de cout fabrication |

**FK sortantes** : `purinvhead` (en-tete), `mfghead` (ordre de fabrication).

### purinvsplit -- Ventilation facture fournisseur

| Colonne | Type | Null | Description |
|---------|------|------|-------------|
| `pscode` | numeric(6) | NO | Numero de facture |
| `psline` | numeric(3) | NO | Numero de ligne |
| `psitem` | char(20) | NO | Code article |
| `pstruck` | numeric(6) | NO | Numero de camion/lot |
| `pspc` | numeric(4,1) | YES | Pourcentage |
| `psqty` | numeric(12,3) | YES | Quantite |

Table de ventilation permettant de repartir une ligne de facture sur plusieurs lots/camions.

### purinvtransact -- Lien facture fournisseur / historique stock

| Colonne | Type | Null | Description |
|---------|------|------|-------------|
| `pthistoseq` | numeric(12) | NO | Sequence historique stock (FK → histostock) |
| `ptpurinvcode` | numeric(6) | NO | Numero de facture |
| `ptpurinvline` | numeric(3) | NO | Ligne de facture |

**FK sortantes** : `histostock` (historique mouvements stock).
Table de liaison entre les lignes de facture et les mouvements de stock historiques.

### purheadlimite -- En-tete commande d'achat limitee

Structure identique a `purhead` avec prefixe `phl` au lieu de `ph`. Les colonnes principales sont les memes (`phlcode`, `phlsupp`, `phlcurr`, `phlstatus`, etc.). Cette table gere les commandes avec controle de limites budgetaires. Contient les memes champs vehicule (`phlchassis`, `phlregistre`, `phlmarque`, `phldatereg`, `phlkm`).

### purlinelimite -- Lignes commande d'achat limitee

Structure identique a `purline` avec prefixe `pll` au lieu de `pl`. Les colonnes principales sont les memes (`pllcode`, `pllline`, `pllitem`, `pllqtyord`, `pllstatus`, etc.). Pas de champs `plstdval`, `plpurval`, `plqtyrectarif`, `plrist`, `plval`.

### toreception -- Details de reception

| Colonne | Type | Null | Description |
|---------|------|------|-------------|
| `trid` | integer | NO | ID de reception (cle primaire) |
| `trpurhead` | numeric(6) | NO | Numero de commande (FK → purline) |
| `trpurline` | numeric(4) | NO | Numero de ligne (FK → purline) |
| `trqty` | numeric(10,3) | NO | Quantite recue |
| `trloorgcode` | varchar(20) | YES | Code lot/origine |
| `trloexpdat` | timestamp | YES | Date d'expiration lot |

**FK sortantes** : `purline` (ligne de commande).
Table de detail des receptions partielles, permettant de tracer chaque reception avec son lot et sa date d'expiration.

---

## Colonnes cles purhead + purline

### Colonnes cles de purhead

| Colonne | Role fonctionnel |
|---------|-----------------|
| `phcode` | Identifiant unique de la commande, genere automatiquement |
| `phsupp` | Fournisseur (FK → adresses.adcode) |
| `phstatus` | Pilote le cycle de vie : 1=Saisie, 2=Imprimee, 3=Envoyee, 6=Cloturee, 9=Annulee |
| `phcntid` | Lien vers contrat fournisseur (purcnthead.chcode) |
| `phpurchaser` | Acheteur responsable |
| `phaut` | Approbation requise avant confirmation |
| `phsupppay` | Condition de paiement fournisseur |
| `phmccode` | Multi-societe : code de la societe concernee |
| `phproforma` | Facture proforma (Y/N) |

### Colonnes cles de purline

| Colonne | Role fonctionnel |
|---------|-----------------|
| `plcode` + `plline` | Cle composee identifiant chaque ligne |
| `plitem` | Article commande (FK → items.itcode) |
| `plqtyord` | Quantite commandee |
| `plqtyrec` | Quantite recue (mise a jour a chaque reception) |
| `plqtyinv` | Quantite facturee |
| `plstatus` | Statut de la ligne, independant du statut en-tete |
| `pldatreq` / `pldatsup` | Date requise / Date prevue fournisseur |
| `plstdval` / `plpurval` | Prix standard / Prix d'achat |
| `plsalhead` / `plsalline` | Lien vers commande de vente (generation croisee) |
| `plpurreqcode` / `plpurreqline` | Lien vers demande d'achat |
| `plcontract` | Lien vers contrat fournisseur |
| `plenvoy` | Indicateur d'envoi au fournisseur |
| `plrist` | Remise (%) |

---

## Objets PowerBuilder cles

### Fenetres principales

| Fenetre | Ancetre | Module | Description |
|---------|---------|--------|-------------|
| `w_response_purch` | `w_response` | `_purch` | Ancetre commun des fenetres achat (variables `isel_purord`, `isel_purlin`, `iSel_ordr_Curr`, `iSel_line_Status`) |
| `w_purchase` | `w_response_purch` | `_purch` | Gestion commandes d'achat standards |
| `w_purchase_unif` | `w_response_purch` | `_purch` | Gestion commandes unifiee (standards + generales) |
| `w_purchaselimite` | `w_response_purch` | `_purch` | Gestion commandes limitees |
| `w_gpurchase` | `w_response_purch` | `_purch` | Gestion commandes generales |
| `w_purchase_mrp` | `w_response` | `_purch` | Generation commandes depuis MRP/planification |
| `w_purchase_sales` | `w_response` | `_purch` | Generation croisee vente → achat |
| `w_purchase_receipt` | `w_response` | `_purch` | Selection commandes pour reception |
| `w_purchase_return` | `w_response` | `_purch` | Retours fournisseur |
| `w_purchase_fup` | `w_response` | `_purch` | Suivi/relance commandes (follow-up) |
| `w_purchase_histo` | `w_popup` | `_purch` | Historique commandes standards |
| `w_gpurchase_histo` | `w_response` | `_purch` | Historique commandes generales |
| `w_purchaselimite_histo` | `w_popup` | `_purch` | Historique commandes limitees |
| `w_list_purchase` | `w_response` | `_purch` | Liste / recherche commandes |
| `w_purline_update` | `w_response` | `_purch` | Mise a jour d'une ligne de commande |
| `w_purline_quickreceipt` | `w_response` | `_purch` | Reception rapide multi-lignes |
| `w_purlinelimite_update` | `w_response` | `_purch` | Mise a jour ligne commande limitee |

### Fenetres contrat fournisseur

| Fenetre | Ancetre | Module | Description |
|---------|---------|--------|-------------|
| `w_purcontract` | `w_response` | `_purch` | Gestion contrats fournisseur |
| `w_purcontract_update` | `w_response` | `_purch` | Mise a jour contrat |
| `w_purcontract_histo` | `w_response` | `_purch` | Historique contrats |
| `w_call_contract` | `w_response` | `_purch` | Appel de contrat (generation commande depuis contrat) |
| `w_call_contract_launch` | `w_response` | `_purch` | Lancement appel de contrat |

### Fenetres demande d'achat

| Fenetre | Ancetre | Module | Description |
|---------|---------|--------|-------------|
| `w_purrequest` | `w_response` | `_purch` | Liste des demandes d'achat |
| `w_purrequest_update` | `w_response` | `_purch` | Mise a jour demande d'achat |
| `w_deposit` | `w_response` | `_purch` | Depot / bon de consigne |
| `w_deposit_update` | `w_response` | `_purch` | Mise a jour depot |

### Fenetres facture fournisseur

| Fenetre | Ancetre | Module | Description |
|---------|---------|--------|-------------|
| `w_purinvoices` | `w_response` | `_purch` | Gestion factures fournisseur |
| `w_purinvhead_update` | `w_response` | `_purch` | Mise a jour en-tete facture |
| `w_purinvlins_update` | `w_response` | `_purch` | Mise a jour ligne facture (standard) |
| `w_purinvlins_create` | `w_response` | `_purch` | Creation ligne facture |
| `w_purinvlint_update` | `w_response` | `_purch` | Mise a jour ligne facture (transport) |
| `w_purinvlinn_update` | `w_response` | `_purch` | Mise a jour ligne facture (note credit) |
| `w_purinvlinp_update` | `w_response` | `_purch` | Mise a jour ligne facture (port) |
| `w_purinvlinl_update` | `w_response` | `_purch` | Mise a jour ligne facture (libre) |
| `w_purinvsplit_update` | `w_response` | `_purch` | Ventilation facture |
| `w_purinvsplit_rcpo_update` | `w_response` | `_purch` | Ventilation facture (reception) |
| `w_purinvsplit_truck_update` | `w_response` | `_purch` | Ventilation facture (camion) |
| `w_purinv_select` | `w_response` | `_purch` | Selection facture |
| `w_purinv_clean` | `w_response` | `_purch` | Nettoyage factures |
| `w_purinvoices_paym` | `w_response` | `_purch` | Paiement factures fournisseur |
| `w_purinvoices_qry` | `w_response` | `_purch` | Interrogation factures |

### Fenetres reception (module _stock)

| Fenetre | Module | Description |
|---------|--------|-------------|
| `w_transact_rcpo` | `_stock` | Reception commande d'achat (base) |
| `w_transact_rcpo1` | `_stock` | Reception variante 1 |
| `w_transact_rcpo2` | `_stock` | Reception variante 2 |
| `w_transact_rcpo_inout` | `_stock` | Reception entree/sortie (gestion lots, QC) |
| `w_transact_rcpo2_inout` | `_stock` | Reception entree/sortie variante 2 |
| `w_transact_rcpo3` | `_stock` | Reception avec creation commande a la volee |
| `w_transact_rcpo_dlxo` | `_stock` | Reception avec delai |
| `w_transact_rcsc` | `_stock` | Reception sous-traitance |
| `w_transact_rtpo` | `_stock` | Retour fournisseur |
| `w_transact_rtpo1` | `_stock` | Retour fournisseur variante 1 |
| `w_transact_rtpo2` | `_stock` | Retour fournisseur variante 2 |
| `w_transact_rtsc` | `_stock` | Retour sous-traitance |

### Fenetres export comptable (module _ifcpt)

| Fenetre | Module | Description |
|---------|--------|-------------|
| `w_cpt_purinvexp` | `_ifcpt` | Export factures achat vers comptabilite |
| `w_wings_purinvexp` | `_ifcpt` | Export vers WinGS |
| `w_wb5_purinvexp` | `_ifcpt` | Export vers WinBooks 5 |
| `w_wb2_purinvexp` | `_ifcpt` | Export vers WinBooks 2 |
| `w_vero_purinvexp` | `_ifcpt` | Export vers Vero |

### DataWindows principaux

| DataWindow | Module | Description |
|------------|--------|-------------|
| `d_purhead_update` | `_purch` | Mise a jour en-tete commande |
| `d_purhead_sel` | `_purch` | Selection/liste commandes |
| `d_purhead_list` | `_purch` | Liste commandes |
| `d_purhead_sqlsearch` | `_purch` | Recherche SQL commandes |
| `d_pur_and_purg_head_sel` | `_purch` | Selection commandes standards + generales |
| `d_purghead_update` | `_purch` | Mise a jour en-tete commande generale |
| `d_purgline_update` | `_purch` | Mise a jour lignes commande generale |
| `d_purghead_sel` | `_purch` | Selection commandes generales |
| `d_purghead_print` | `_prints_std` | Impression commande d'achat |
| `d_pur_rcpt_sel` | `_stock` | Selection receptions |
| `d_trans_rcpo_print` | `_prints_std` | Impression bon de reception |

### Menus

| Menu | Module | Description |
|------|--------|-------------|
| `m_purch` | `_purch` | Menu principal Achats |
| `m_popordr` | `_system` | Menu contextuel commandes (confirm, envoy, close, cancel) |
| `m_xtra_popordr` | `_sysxtra` | Surcharge client du menu commandes |

### Fonctions et NVO

| Objet | Type | Module | Description |
|-------|------|--------|-------------|
| `gf_purinv_calc` | Fonction globale | `_purch` | Calcul facture fournisseur (totaux, TVA) |
| `nvo_purchase_contract` | NVO | `_purch` | Logique metier contrat fournisseur |
| `nvo_imputcpt` | NVO | `_purch` | Imputation comptable |
| `nvo_purrcpt` | NVO | `_stkbarcod` | Reception achat via code-barres |

---

## Flux : Cycle d'achat complet

Le cycle d'achat suit un processus en 8 etapes :

```
1. Besoin       2. Commande      3. Impression     4. Reception
   d'achat         d'achat          / Envoi           marchandises
   (MRP/vente)     (saisie)         (impression)      (stock)
      |               |                |                  |
      v               v                v                  v
  [purreqhead]    [purhead]       [impression]       [stockmvt]
  [purreqline]    [purline]       phstatus=2→3       plqtyrec+=
                  phstatus=1                         [toreception]
      |               |                |                  |
      +-------→-------+                |                  |
                                       v                  v
                               5. Reception          6. Facturation
                                  partielle/             fournisseur
                                  complete               (rapprochement)
                                  (QC optionnel)            |
                                       |                    v
                                       v               [purinvhead]
                                  [qlctrl]             [purinvline]
                                                       pistatus=3
                                                            |
                                                            v
                                                    7. Export comptable
                                                       (interface)
                                                            |
                                                            v
                                                       [cptexport]
                                                       pistatus=7→8
```

### Etape 1 : Identification du besoin
- **Manuelle** : Saisie directe d'une commande
- **MRP** : Besoins generes depuis la planification (`w_mfg_prep_byfiles`)
- **Vente** : Generation croisee depuis commandes client (`w_purchase_sales`, menu `m_salhead.m_generatesalespurch`)
- **Demande d'achat** : Processus formel via `w_purrequest`

### Etape 2 : Creation commande d'achat
- Fenetre : `w_purchase` / `w_purchase_unif` / `w_gpurchase`
- Tables : `purhead` (status='1') + `purline` (status='2')
- Selection du fournisseur, ajout des lignes, calcul des prix
- Verification des contrats (`nvo_purchase_contract`)

### Etape 3 : Impression / Envoi
- Fenetre : `w_print`, DataWindow : `d_purghead_print`
- Passage au statut imprime (`phstatus='2'`)
- Envoi au fournisseur (`plenvoy='Y'`, `phstatus='3'`)
- Envoi EDI possible (`wf_create_edi_purchase`)
- Envoi WMS possible (`wf_send_wms`)

### Etape 4 : Reception des marchandises
- Fenetre : `w_purchase_receipt` (selection), puis `w_transact_rcpo_inout` / `w_transact_rcpo3`
- Mise a jour `purline.plqtyrec` (cumul des quantites recues)
- Creation mouvement stock (`stockmvt`)
- Creation detail reception (`toreception`)
- Gestion des lots (`wf_verif_lot`, `wf_verif_unicite_lot`)
- Reception rapide multi-lignes possible (`w_purline_quickreceipt`)

### Etape 5 : Reception partielle / Controle qualite
- Receptions partielles : suivi du solde restant (`plqtyord - plqtyrec`)
- Controle qualite optionnel a la reception (`QCParaLaunch`, table `qlctrl`)
- Fonctions : `initqc()`, `save_qc()`, `WithQC`, `QC_wait`

### Etape 6 : Retour fournisseur
- Fenetre : `w_purchase_return`, `w_transact_rtpo` / `w_transact_rtpo1` / `w_transact_rtpo2`
- Mouvement stock inverse
- Mise a jour des quantites recues

### Etape 7 : Facturation fournisseur
- Fenetre : `w_purinvoices`, `w_purinvhead_update`, `w_purinvlins_create`
- Tables : `purinvhead` + `purinvline`
- Rapprochement avec commandes/receptions (`plordno`, `plordlin`)
- Calcul TVA et totaux (`gf_purinv_calc`)
- Types de lignes : S=standard, T=transport, N=note credit, P=port, L=libre
- Ventilation possible (`purinvsplit`)

### Etape 8 : Export comptable
- Fenetre : `w_cpt_purinvexp` (et variantes par logiciel comptable)
- Export vers : WinGS, WinBooks, Vero, Exact, BOB, Pratic, ASC, Popsy
- Table : `cptexport`
- Passage `pistatus` de '7' a '8' apres export reussi

---

## Flux : Demande d'achat

```
1. Creation          2. Approbation        3. Transformation
   demande              (optionnelle)         en commande
      |                     |                     |
      v                     v                     v
  [purreqhead]          pqaut='Y'            [purhead]
  [purreqline]          pqstatus=6           [purline]
  pqstatus=0                                 plpurreqcode/line
```

### Etapes detaillees

1. **Creation** : `w_purrequest` → `w_purrequest_update`
   - `pqstatus=0` : demande creee
   - Import de fichier possible (`wf_file_import`)

2. **Traitement des lignes** : `w_purrequest_update`
   - `wf_acceptline()` : accepter une ligne
   - `wf_reject_line()` : rejeter une ligne
   - `wf_discard_ligne()` : ecarter une ligne

3. **Transformation en commande** : `w_purchase_mrp`
   - `pqstatus=6` : demande transformee en commande
   - `pqstatus=8` : demande cloturee (`w_deposit`)
   - Lien trace via `purline.plpurreqcode` et `purline.plpurreqline`

---

## Flux : Contrat fournisseur

```
1. Creation          2. Approbation        3. Appel de contrat    4. Cloture/Annulation
   contrat              / Activation          (commandes)
      |                     |                     |                     |
      v                     v                     v                     v
  [purcnthead]          chstatus='A'          [purhead]            chstatus='8' ou '9'
  [purcntline]          (actif)               phcntid=chcode
  chstatus='2'                                plcontract=chcode
```

### Etapes detaillees

1. **Creation** : `w_purcontract` → `w_purcontract_update`
   - Saisie fournisseur, articles, prix negocies, delais
   - `chstatus='2'` : contrat en saisie

2. **Activation** : `w_purcontract_histo`
   - `chstatus='A'` : contrat actif, pret a etre appele

3. **Appel de contrat** : `w_call_contract` / `w_call_contract_launch`
   - `wf_setnewstate()` : changement de statut
   - `wf_contract_close()` : cloture du contrat
   - Verification validite : `wf_contract_valid()` (prix, delais, quantites)
   - `chstatus='B'` : contrat bloque (attente)

4. **Cloture / Annulation**
   - `chstatus='8'` : contrat cloture (commandes avec reception partielle)
   - `chstatus='9'` : contrat annule (commandes sans reception)
   - Fonctions : `wf_contract_close()`, `wf_contract_null()`

### Verification du contrat lors de la commande
- `w_purline_update.wf_check_tarif()` : verifie le prix par rapport au contrat
- `w_purchase_mrp.wf_check_contract()` : valide le contrat avant ajout ligne
- `nvo_purchase_contract` : objet metier encapsulant la logique contrat

---

## Flux : Reception

```
Selection commande    →    Saisie reception    →    Mise a jour stock
 w_purchase_receipt         w_transact_rcpo*         stockmvt + purline
                            w_purline_quickreceipt   toreception
```

### Variantes de reception

| Fenetre | Usage |
|---------|-------|
| `w_transact_rcpo` | Reception de base |
| `w_transact_rcpo1` | Variante simplifiee |
| `w_transact_rcpo2` | Variante avec options supplementaires |
| `w_transact_rcpo_inout` | Reception avec gestion lots et QC |
| `w_transact_rcpo2_inout` | Reception In/Out variante 2 |
| `w_transact_rcpo3` | Reception avec creation commande a la volee (`wf_createpur()`) |
| `w_transact_rcpo_dlxo` | Reception avec gestion des delais |
| `w_transact_rcsc` | Reception sous-traitance |
| `w_purline_quickreceipt` | Reception rapide multi-lignes |

### Processus de reception detaille

1. **Selection** : `w_purchase_receipt` affiche les commandes en cours avec filtres (fournisseur, article, type, date)
2. **Saisie quantite** : L'operateur saisit la quantite recue, le lot, l'emplacement
3. **Validations** :
   - `check_tr()` : validation de la transaction
   - `wf_verif_lot()` : verification du lot
   - `wf_verif_unicite_lot()` : unicite du lot
   - `wf_verif_nv()` : verification des valeurs numeriques
   - `wf_check_realdatclot()` : verification de la date de peremption
4. **Sauvegarde** : `save_tr()` met a jour `purline.plqtyrec`, cree le `stockmvt`, insere dans `toreception`
5. **Controle qualite** : Si parametre active (`QCParaLaunch`), declenchement automatique du QC (`initqc()`, `save_qc()`)
6. **Reception code-barres** : Via `nvo_purrcpt` dans le module `_stkbarcod`

---

## Flux : Facture fournisseur

```
Creation facture    →    Ajout lignes     →    Validation    →    Export
 w_purinvhead_update     w_purinvlins_*        gf_purinv_calc     w_cpt_purinvexp
 [purinvhead]            [purinvline]           pistatus='3'       pistatus='7'→'8'
```

### Processus detaille

1. **Creation en-tete** : `w_purinvoices` → `w_purinvhead_update`
   - Saisie fournisseur, date, devise, reference fournisseur
   - `wf_check_dateperiod()` : verification de la periode comptable
   - `wf_getnextpicodemc()` : generation code communication

2. **Ajout lignes** : `w_purinvlins_create`
   - `loadorder()` : charge les commandes du fournisseur
   - `checkline()` : validation de chaque ligne
   - `saveline()` : sauvegarde
   - Types de lignes : S (standard), T (transport), N (note credit), P (port), L (libre)

3. **Modification ligne** : `w_purinvlins_update`
   - `changeitem()` : modification article
   - `changeorder()` : modification quantite/prix
   - Imputation comptable via `nvo_imputcpt`

4. **Ventilation** : `w_purinvsplit_update`
   - Repartition d'une ligne sur plusieurs lots/camions
   - Table `purinvsplit`

5. **Calcul et validation** : `gf_purinv_calc`
   - Calcul automatique des totaux, TVA, remises
   - `pistatus='3'` : facture validee

6. **Paiement** : `w_purinvoices_paym`
   - Suivi des paiements
   - `pipaym` : statut de paiement
   - `piblockedpay` : blocage de paiement
   - `pistatus='5'` : paiement en cours

7. **Export comptable** : `w_cpt_purinvexp`
   - Selection des factures a exporter (`pistatus='7'`)
   - `wf_invexp()` : export principal
   - `wf_invexp_ctrl()` : controle avant export
   - Apres export reussi : `pistatus='8'`
   - Gestion PDF : `pipathfilepdf`

---

## Statuts et transitions

### Statut commande d'achat (purhead.phstatus / purghead.phstatus)

| Valeur | Signification | Transitions possibles |
|--------|---------------|-----------------------|
| `1` | Saisie (en cours) | → 2 (impression) |
| `2` | Imprimee / Confirmee | → 1 (retour saisie si ajout ligne), → 3 (envoyee) |
| `3` | Envoyee au fournisseur | → 2 (annuler envoi) |
| `4` | Reouverture (reopen depuis historique) | → 6 (cloture) |
| `5` | En cours de reception | → 6 (cloture) |
| `6` | Cloturee | → 4 (reouverture) |
| `9` | Annulee | (terminal) |

**Fonctions associees** :
- `wf_confirm_purhead()` : passage a status confirme/imprime
- `wf_unconfirm_purhead()` : retour en saisie
- `wf_envoy_purhead()` : passage a envoye
- `wf_unenvoy_purhead()` : retour de envoye
- `wf_close_purhead()` / `wf_purhead_close()` : cloture
- `wf_cancel_purhead()` : annulation
- `wf_toapprob()` : soumission a approbation

### Statut ligne commande (purline.plstatus / purgline.plstatus)

| Valeur | Signification | Transitions possibles |
|--------|---------------|-----------------------|
| `2` | En cours / Active | → 3 (confirmee) |
| `3` | Confirmee / Envoyee | → 2 (annuler confirmation) |
| `6` | Cloturee (reception complete) | (terminal) |
| `9` | Annulee | (terminal) |

**Fonctions associees** :
- `wf_confirm_purline()` : confirmation de la ligne
- `wf_unconfirm_purline()` : annulation confirmation
- `wf_envoy_purline()` : envoi de la ligne
- `wf_unenvoy_purline()` : annulation envoi
- `purline_close()` : cloture de la ligne

### Statut contrat fournisseur (purcnthead.chstatus)

| Valeur | Signification | Transitions possibles |
|--------|---------------|-----------------------|
| `2` | En saisie / Brouillon | → A (activation) |
| `A` | Actif | → B (bloque), → 8 (cloture), → 9 (annulation) |
| `B` | Bloque | → A (reactivation) |
| `8` | Cloture | (terminal) |
| `9` | Annule | (terminal) |

**Fonctions associees** :
- `wf_setnewstate()` : changement de statut generique
- `wf_contract_close()` : cloture
- `wf_contract_null()` : annulation

### Statut demande d'achat (purreqhead.pqstatus)

| Valeur | Signification | Transitions possibles |
|--------|---------------|-----------------------|
| `0` | Creee (brouillon) | → 6 (transformee en commande) |
| `6` | Transformee en commande | → 8 (cloturee) |
| `8` | Cloturee | (terminal) |

### Statut facture fournisseur (purinvhead.pistatus)

| Valeur | Signification | Transitions possibles |
|--------|---------------|-----------------------|
| `3` | Validee / Saisie terminee | → 5 (paiement), → 7 (prete pour export) |
| `5` | Paiement en cours | → 7 (prete pour export) |
| `7` | Prete pour export comptable | → 8 (exportee) |
| `8` | Exportee en comptabilite | (terminal) |

---

## Points d'attention

### Generation croisee vente → achat
- La generation croisee est declenchee depuis le module ventes (menu `m_salhead.m_generatesalespurch`)
- Fenetre `w_purchase_sales` : creation automatique de commandes fournisseur a partir de commandes client
- Lien trace via `purline.plsalhead` et `purline.plsalline`
- `wf_fill_dw_purch()` : alimentation du DataWindow commande depuis la vente

### Multi-societe
- Champ `phmccode` (commandes) et `pimccode` (factures) pour la gestion multi-societe
- Variables `is_MULTICO`, `is_MULCOCNTR` dans les fenetres
- Filtre par societe configurable (`is_usdefaultmcdo`, `is_mcfilter`)

### Approbation des commandes
- Parametre `APPROBIVY` controle si l'approbation est requise
- Champs `phaut`, `phautuser`, `phautdate` pour tracer l'approbation
- Fonction `wf_toapprob()` pour soumettre a approbation
- Visible dans les DataWindows via le champ `approbivy`

### WMS (Warehouse Management System)
- Integration possible avec un WMS externe
- Champ `phsendwms` : nombre d'envois WMS
- Fonction `wf_send_wms()` : envoi de la commande au WMS
- Import retour WMS via `nvo_import_wms`

### EDI (Echange de Donnees Informatise)
- Fonction `wf_create_edi_purchase()` : generation du fichier EDI
- Champ `phnbsendedi` : nombre d'envois EDI

### Facturation proforma
- Champ `phproforma` : commande proforma (Y/N)
- Fonctions `wf_proforma_recu_purhead()` et `wf_proforma_paye_purhead()`

### Consignation
- `w_purline_quickreceipt.wf_consignement()` : gestion des articles en consignation
- Variable `is_consignement`

### Reception et controle qualite
- Parametre `QCParaLaunch` determine si le QC est lance automatiquement a la reception
- `QC_wait` : code d'attente qualite
- Table `qlctrl` : enregistrement du controle qualite
- `WithQC` : indicateur de reception avec QC

### Gestion des lots a la reception
- `wf_verif_lot()` : verification du lot
- `wf_verif_unicite_lot()` : unicite du lot
- Parametres `is_CheckParamLotFss`, `iboo_LotFss2Int`, `is_FssLot`
- `is_RCPOLOT` : parametre lot a la reception

### Sous-traitance
- Tables : `purghead` (type specifique) / `purgline`
- Fenetres reception : `w_transact_rcsc` (reception) / `w_transact_rtsc` (retour)

### Cloture automatique
- Quand `plqtyrec >= plqtyord` : la ligne peut etre cloturee (`plstatus='6'`)
- Quand toutes les lignes sont cloturees/annulees : l'en-tete est cloture (`phstatus='6'`)
- `wf_purclose()` dans `w_purchase_fup` pour cloture manuelle

### Surcharges client
- Module `_sysxtra` : le menu `m_xtra_popordr` surcharge `m_popordr` pour personnaliser les actions contextuelles sur les commandes

---

## Recherche rapide

### Par fonctionnalite

| Besoin | Objet(s) a consulter |
|--------|---------------------|
| Creer une commande d'achat | `w_purchase`, `w_purchase_unif`, `w_purline_update` |
| Commande depuis MRP | `w_purchase_mrp` |
| Commande depuis vente | `w_purchase_sales` |
| Commande limitee | `w_purchaselimite`, `w_purlinelimite_update` |
| Commande generale | `w_gpurchase` |
| Gerer un contrat fournisseur | `w_purcontract`, `w_purcontract_update`, `nvo_purchase_contract` |
| Appeler un contrat | `w_call_contract`, `w_call_contract_launch` |
| Demande d'achat | `w_purrequest`, `w_purrequest_update` |
| Receptionner | `w_purchase_receipt`, `w_transact_rcpo_inout`, `w_transact_rcpo3` |
| Reception rapide | `w_purline_quickreceipt` |
| Reception code-barres | `nvo_purrcpt` (module `_stkbarcod`) |
| Retour fournisseur | `w_purchase_return`, `w_transact_rtpo` |
| Facture fournisseur | `w_purinvoices`, `w_purinvhead_update`, `w_purinvlins_create` |
| Paiement factures | `w_purinvoices_paym` |
| Export comptable factures | `w_cpt_purinvexp` |
| Suivi / relance | `w_purchase_fup` |
| Historique commandes | `w_purchase_histo`, `w_gpurchase_histo` |
| Liste commandes | `w_list_purchase`, `w_cmdpur_sqlsearch` |

### Par table

| Table | Fenetres principales |
|-------|---------------------|
| `purhead` / `purline` | `w_purchase`, `w_purchase_unif`, `w_purline_update` |
| `purghead` / `purgline` | `w_gpurchase`, `w_purchase_unif` |
| `purheadlimite` / `purlinelimite` | `w_purchaselimite`, `w_purlinelimite_update` |
| `purcnthead` / `purcntline` | `w_purcontract`, `w_purcontract_update`, `w_call_contract` |
| `purreqhead` / `purreqline` | `w_purrequest`, `w_purrequest_update`, `w_deposit` |
| `purinvhead` / `purinvline` | `w_purinvoices`, `w_purinvhead_update`, `w_purinvlins_create` |
| `purinvsplit` | `w_purinvsplit_update` |
| `purinvtransact` | Lien interne facture/stock |
| `toreception` | `w_transact_rcpo*`, `w_purline_quickreceipt` |
| `stockmvt` | `w_transact_rcpo*`, `w_transact_rtpo*` |

### Par prefixe de colonne

| Prefixe | Table | Exemple |
|---------|-------|---------|
| `ph` | `purhead` | `phcode`, `phsupp`, `phstatus` |
| `pl` | `purline` | `plcode`, `plline`, `plitem`, `plqtyord` |
| `ph` | `purghead` | `phcode`, `phtype`, `phstatus` |
| `pl` | `purgline` | `plcode`, `plline`, `pldesc` |
| `phl` | `purheadlimite` | `phlcode`, `phlsupp`, `phlstatus` |
| `pll` | `purlinelimite` | `pllcode`, `pllline`, `pllitem` |
| `ch` | `purcnthead` | `chcode`, `chstatus`, `chadid` |
| `cl` | `purcntline` | `clcode`, `clitemid`, `clstdcost` |
| `pq` | `purreqhead` | `pqcode`, `pqstatus` |
| `pl` | `purreqline` | `plcode`, `plline`, `plitem` |
| `pi` | `purinvhead` | `picode`, `pisup`, `pistatus` |
| `pl` | `purinvline` | `plcode`, `plline`, `pltype` |
| `ps` | `purinvsplit` | `pscode`, `psline`, `psitem` |
| `pt` | `purinvtransact` | `pthistoseq`, `ptpurinvcode` |
| `tr` | `toreception` | `trid`, `trpurhead`, `trqty` |
