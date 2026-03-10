# Schema Overview — Base de donnees PMIX ERP

## 1. Vue d'ensemble

| Propriete | Valeur |
|-----------|--------|
| **SGBD** | SQL Anywhere 17 (32-bit ODBC) |
| **DSN** | `Pmix` |
| **Tables de base** | 430 |
| **Vues** | 42 |
| **Procedures stockees** | 87 |
| **Relations FK** | 210 |
| **Encodage** | UTF-8 |

La base de donnees PMIX supporte un ERP complet pour PME couvrant : gestion des tiers (clients/fournisseurs), ventes, achats, stocks, fabrication, nomenclatures, expedition, facturation, qualite, projets/affaires, CRM, planification et reporting.

---

## 2. Groupes de tables par domaine fonctionnel

### 2.1 Tiers — Clients / Fournisseurs / Contacts (`ad*`, `contact*`)

Tables de gestion des tiers (clients, fournisseurs, prospects) et contacts associes.

| Table | Description |
|-------|-------------|
| `adresses` | **Table centrale des tiers** — code, nom, adresse, pays, TVA, devise, conditions de paiement, delai livraison, groupes statistiques. Double role client (`adcust`) et fournisseur (`adsupp`). 31 FK entrantes. |
| `ad_crm_rem` | Remarques CRM liees a un tiers (`readcode` -> adresses) |
| `adextracosts` | Frais supplementaires par tiers (seuils, signes, conditions d'application) |
| `adresgroup` | Groupement de tiers niveau 1 (code, description, actif) |
| `adresgroup2` | Groupement de tiers niveau 2 (avec groupe parent) |
| `adresgroup3` | Groupement de tiers niveau 3 (avec groupe parent) |
| `adresgroup4` | Groupement de tiers niveau 4 (avec groupe parent) |
| `adresrate` | Tarifs specifiques par tiers (dates de validite, lien ratehead) |
| `adrformation` | Formations liees aux tiers |
| `adrsactions` | **Actions/taches CRM** — action, createur, responsable, dates, statut, commentaire, projet, cout |
| `adrsactionspoint` | Points/scores des actions CRM |
| `contacts` | **Contacts** — nom, prenom, titre, telephone, email, fonction, tiers associe |
| `shipto` | **Adresses de livraison** — adresse alternative liee a un tiers (auto-reference pour hierarchie) |

### 2.2 Articles / Produits (`item*`, `it*`, `alt*`, `tech*`)

Gestion du catalogue articles, descriptions, conditionnements et donnees techniques.

| Table | Description |
|-------|-------------|
| `items` | **Table centrale des articles** — code, description, unite de mesure, poids, famille, statut, prix standard. 31 FK entrantes. |
| `itemadpack` | Conditionnements article par tiers |
| `itemaudit` | Piste d'audit des modifications articles |
| `itemdesc` | Descriptions complementaires articles |
| `itemlang` | Traductions multilingues des articles |
| `itempack` | Conditionnements/emballages article (lien packings) |
| `items` | Articles (table principale) |
| `itemsdefdata` | Donnees par defaut des articles |
| `itemspoint` | Points/scores articles |
| `itstat1` / `itstat1web` | Statistique article niveau 1 (+ version web) |
| `itstat2` / `itstat2web` | Statistique article niveau 2 (+ version web) |
| `itstat3` | Statistique article niveau 3 |
| `altmeasures` | Unites de mesure alternatives |
| `italtmeas` | Conversions d'unites par article |
| `measures` | **Unites de mesure** de reference |
| `techdata` | Donnees techniques articles |
| `Techdatalang` | Traductions donnees techniques |
| `techlink` | Liaisons entre articles et donnees techniques |
| `car_nut` | Caracteristiques nutritionnelles |
| `groupingnut` | Groupes nutritionnels |
| `colors` | Table des couleurs |
| `assortment` | Assortiments articles |

### 2.3 Ventes / Commandes clients (`sal*`, `sale*`, `cons*`, `smart*`)

Gestion des commandes de vente, lignes, remises et ventes consolidees.

| Table | Description |
|-------|-------------|
| `salhead` | **En-tete commande de vente** — client, date, statut, devise, commercial, conditions. 5 FK entrantes. |
| `salline` | **Ligne commande de vente** — article, quantite, prix, remise, livraison. 6 FK entrantes. |
| `salaudit` | Piste d'audit des modifications commandes vente |
| `salaux` | Donnees auxiliaires commandes vente |
| `salediscount` | Remises de vente (lien linkadristqty) |
| `salegroup` | Groupes de vente (lien conssale) |
| `salesman` | **Commerciaux** — code, nom, commission. 2 FK entrantes. |
| `salplab` | Main d'oeuvre planifiee vente |
| `salpline` | Lignes planifiees vente |
| `salpmat` | Materiaux planifies vente |
| `salpsize` | Tailles planifiees vente |
| `conssale` | Ventes consolidees (lien packings, salline) |
| `consstock` | Stocks consolides |
| `comsalhead` / `comsalline` | Commissions ventes (en-tete et lignes) |
| `smartsales_actio` | Actions ventes intelligentes |
| `smartsales_clien` | Clients ventes intelligentes |
| `smartsales_conta` | Contacts ventes intelligentes |

### 2.4 Devis / Offres (`quotes`, `offer*`, `cond*`)

| Table | Description |
|-------|-------------|
| `quotes` | Devis / offres commerciales |
| `offergrouphead` | En-tete de groupes d'offres |
| `offergroupline` | Lignes de groupes d'offres |
| `condhead` | En-tetes de conditions commerciales |
| `condline` | Lignes de conditions commerciales |
| `condtemplate` | Modeles de conditions (1 FK entrante) |

### 2.5 Achats / Commandes fournisseurs (`pur*`)

| Table | Description |
|-------|-------------|
| `purhead` | **En-tete commande d'achat** — fournisseur, date, statut, devise, affaire |
| `purline` | **Ligne commande d'achat** — article, quantite, prix, date livraison prevue |
| `purcnthead` / `purcntline` | Contrats d'achat (en-tete et lignes) |
| `purghead` / `purgline` | Demandes de regroupement achats (en-tete et lignes) |
| `purheadlimite` / `purlinelimite` | Limites commandes achats |
| `purinvhead` | En-tete facture fournisseur |
| `purinvline` | Ligne facture fournisseur (lien mfghead) |
| `purinvsplit` | Ventilation facture fournisseur |
| `purinvtransact` | Transactions facture fournisseur (lien histostock) |
| `purreqhead` / `purreqline` | Demandes d'achat (en-tete et lignes) |
| `toreception` | Receptions a effectuer (lien purline) |

### 2.6 Facturation (`invoice*`, `profo*`, `SUB*`)

| Table | Description |
|-------|-------------|
| `invoicehead` | **En-tete facture client** — numero, date, tiers, affaire, montant. 3 FK entrantes. |
| `invoiceline` | **Ligne facture client** — article, quantite, prix, commande vente, expedition, OF |
| `invoicetva` | Lignes TVA de facture |
| `invoicecpt` | Interface comptable factures |
| `profohead` | En-tete proforma (lien adresses) |
| `profoline` | Ligne proforma |
| `profotva` | TVA proforma |
| `SUBHEAD` | En-tete sous-traitance / facture complementaire. 2 FK entrantes. |
| `SUBINVOICE` | Factures de sous-traitance (lien invoicehead, SUBHEAD) |
| `SUBLINE_SAL` | Lignes sous-traitance vente (lien salline, items) |
| `SUBLINE_REP` | Lignes sous-traitance reparation (lien items) |
| `SUBACTION` | Actions de sous-traitance |

### 2.7 Nomenclatures / BOM (`bom*`)

| Table | Description |
|-------|-------------|
| `bomhead` | **En-tete nomenclature** — article parent, article, tiers, version. 2 FK entrantes. |
| `bomline` | **Ligne nomenclature** — composant, quantite, unite, perte |
| `bomcoitem` | Co-produits de nomenclature (lien bomhead, items) |
| `bomright` | Droits sur nomenclatures |
| `bomaudit` | Piste d'audit nomenclatures |
| `bomxtra` | Donnees supplementaires nomenclatures |
| `BOMSUBHEAD` | En-tete nomenclature sous-traitance |

### 2.8 Fabrication / Ordres de fabrication (`mfg*`, `rout*`, `mat*`)

| Table | Description |
|-------|-------------|
| `mfghead` | **En-tete OF (ordre de fabrication)** — article, quantite, dates, statut, tiers. 5 FK entrantes. |
| `mfgcoitem` | Co-produits OF |
| `mfgcoitemsal` | Co-produits OF lies aux ventes |
| `mfgcosts` | Couts de fabrication |
| `mfghbatch` | Lots de fabrication (en-tete) |
| `mfglallocs` | Allocations matiere OF |
| `mfglbatch` | Lots de fabrication (detail) |
| `mfgwcreject` | Rejets par poste de charge |
| `mfgwcreqs` | **Operations OF** — poste de charge, temps, tiers. 2 FK entrantes. |
| `mfgwcreqs_advsc` | Ordonnancement avance des operations |
| `mfgwctests` | Tests qualite par operation |
| `mfgxtracost` | Frais supplementaires fabrication |
| `routline` | **Lignes de gamme** — operation, poste, temps, tiers |
| `routline_nomachi` | Gammes sans machine specifique |
| `routjal` | Jalons de gamme |
| `routreject` | Rejets de gamme |
| `routtest` | Tests de gamme |
| `matallocs` | Allocations matiere (lien items, locations) |
| `matplan` / `matplannew` | Planification matiere (MRP) |
| `matreq` | Besoins matiere |
| `matsal` | Materiaux lies aux ventes |

### 2.9 Postes de travail / Machines (`work*`, `machine*`, `cal*`, `CELLS`, `hourly*`)

| Table | Description |
|-------|-------------|
| `workcenters` | **Postes de charge** — code, description, calendrier, capacite. 4 FK entrantes. |
| `machine` | Machines (lien calendrier, horaire, cellule). 4 FK entrantes. |
| `machinehead` | En-tetes machines (lien workcenters) |
| `workers` | Operateurs (lien cellule) |
| `CELLS` | **Cellules de production**. 3 FK entrantes. |
| `Cells_cmnt` | Commentaires cellules |
| `calhead` | **En-tetes de calendrier**. 2 FK entrantes. |
| `calline` | Lignes de calendrier (jours) |
| `hourly` | **Horaires de travail**. 2 FK entrantes. |
| `hourly_day` | Horaires par jour |
| `hourly_day_int` | Intervalles horaires par jour |
| `wccal` | Calendriers postes de charge |
| `wcplan` | Planning postes de charge |
| `wcreq` | Besoins postes de charge |
| `workhead` | En-tetes ordres de travail |
| `workimport` | Import ordres de travail |
| `workline` | Lignes ordres de travail |
| `workoper` | Operations ordres de travail |
| `workroll` | Roulement de travail |
| `worktime` | Temps de travail |
| `worktictrl` | Controle de pointage |

### 2.10 Stock (`stock*`, `lots`, `locations`, `cycnt*`)

| Table | Description |
|-------|-------------|
| `stocks` | **Stocks** — article, emplacement, quantite, lot |
| `stocks_f` | Stocks geles (cloture) |
| `lots` | **Lots** — numero, article, dates, tracabilite |
| `locations` | **Emplacements de stockage**. 7 FK entrantes. |
| `histostock` | **Historique mouvements de stock** — transactions entrees/sorties |
| `cycnthead` / `cycntline` | Inventaire cyclique (en-tete et lignes) |
| `serialnum` | Numeros de serie |
| `transactions` | Transactions de stock |
| `transact_with_co` | Transactions avec confirmation (lien items, locations) |
| `transactcash` | Transactions caisse |
| `transactico` | Transactions inter-societes |
| `transactico_func` | Fonctions transactions inter-societes |
| `transreason` | Motifs de mouvement |

### 2.11 Expedition / Livraison (`ship*`, `truck*`, `colisage`, `ETI_*`, `ean*`)

| Table | Description |
|-------|-------------|
| `shiphead` | **En-tete expedition** — destinataire, date, transporteur. 2 FK entrantes. |
| `shipline` | **Ligne expedition** — article, quantite, commande vente, lot. 2 FK entrantes. |
| `shippack` | Colis d'expedition (lien shipline) |
| `shipcost` | Couts d'expedition |
| `shipgrhead` / `shipgrline` | Regroupement d'expeditions |
| `shipplan` | Planning expedition |
| `colisage` | Colisage (detail des colis par ligne de vente) |
| `ssccline` | Codes SSCC (Serial Shipping Container Code) |
| `truckhead` | En-tetes de camion/transport |
| `truckline` | Lignes de chargement camion |
| `truckref` | References camion |
| `truckturn` | Tournees de camion |
| `turnhead` / `turnline` | Tournees de livraison (en-tete et lignes) |
| `turn_prev` | Tournees precedentes |
| `ETI_BPOST` | Etiquettes BPost |
| `ETI_BPS` | Etiquettes BPost (variante) |
| `ETIQ_TRSP` | Etiquettes transporteur |
| `ean128` | Codes-barres EAN 128 |
| `labelconfig` | Configuration etiquettes |

### 2.12 Tarifs / Remises / Promotions (`rate*`, `disc*`, `promo*`, `link*`)

| Table | Description |
|-------|-------------|
| `ratehead` | **En-tetes de tarifs**. 3 FK entrantes. |
| `rateline` | Lignes de tarif (article, prix) |
| `dischead` | **En-tetes de remises**. 2 FK entrantes. |
| `discline` | Lignes de remise (paliers) |
| `disclogist` | Remises logistiques |
| `promohead` | **En-tetes de promotions**. 2 FK entrantes. |
| `promoline` | Lignes de promotion |
| `extracosts` | Frais supplementaires (lien country) |

### 2.13 Tables de liaison (`link*`)

Tables de jointure M:N entre entites.

| Table | Description |
|-------|-------------|
| `linkactivities` | Liaison activites <-> articles |
| `linkadch` | Liaison tiers <-> choix |
| `linkaddisclogist` | Liaison tiers <-> remises logistiques |
| `linkaddiscount` | Liaison tiers <-> remises |
| `linkadgppoint` | Liaison tiers <-> groupes de points |
| `linkadpromo` | Liaison tiers <-> promotions |
| `linkadristqty` | Liaison tiers <-> remises par quantite |
| `linkappad` | Liaison applications <-> tiers |
| `linkappadtype` | Liaison applications <-> types de tiers |
| `linkappmcdo` | Liaison applications <-> codes McDo |
| `linkdisc` | Liaison remises generiques |
| `linkitad` | **Liaison articles <-> tiers** (prix, reference, delai, devise) |
| `linkitadpack` | Liaison articles <-> tiers <-> conditionnement |
| `linkitadpoint` | Liaison articles <-> tiers <-> points |
| `linkitadtd` | Liaison articles <-> tiers <-> donnees techniques |
| `linkitadumpur` | Liaison articles <-> tiers <-> unite achat |
| `linkitcn` | Liaison articles <-> pays |
| `linkitcountry` | Liaison articles <-> pays (variante) |
| `linkitloc` | Liaison articles <-> emplacements |
| `linklpappoint` | Liaison applications <-> points |
| `linkmaus` | Liaison unites de mesure alternatives |
| `linkmcad` / `linkmcad2` | Liaison codes McDo <-> tiers |
| `linksaus` | Liaison commerciaux <-> utilisateurs |
| `linkusus` | Liaison utilisateur <-> utilisateur |
| `lkitcl` | Liaison articles <-> reclamations |
| `link_country_eco` | Liaison pays <-> frais supplementaires |
| `link_lbl_logo` | Liaison etiquettes <-> logos |
| `link_machine_pdc` | Liaison machines <-> postes de charge |

### 2.14 Affaires / Projets (`file*`, `proj*`)

| Table | Description |
|-------|-------------|
| `filehead` | **En-tete affaire** — reference, client, famille, statut. 9 FK entrantes. |
| `fileline` | Lignes d'affaire (detail) |
| `filefamily` | Familles d'affaires (lien filehead) |
| `fileprogress` | Avancement affaire |
| `filesalhead` / `filesalline` | Ventes liees a l'affaire |
| `fileAJ` | Ajustements affaire (lien users) |
| `fileMFG` | Fabrication liee a l'affaire (lien users) |
| `filetoallocate` / `filetoallocate_l` | Allocations a effectuer |
| `filetoreceptMFG_` | Receptions fabrication a effectuer |
| `Fileactvar` | Variables d'activite affaire |
| `projhead` | **En-tete de projet** — reference, client, dates |
| `projline` | Lignes de projet |
| `projdetail` | Details projet |
| `projaux` | Donnees auxiliaires projet |
| `projinvlin` | Lignes facturees projet |
| `projlab` | Main d'oeuvre projet |
| `projmat` | Materiaux projet |
| `projsize` | Dimensionnement projet |
| `projstep` | Etapes projet |
| `projvrsn` | Versions projet |

### 2.15 Qualite (`qc*`)

| Table | Description |
|-------|-------------|
| `qctest` | **Tests qualite** — code, description. 2 FK entrantes. |
| `qcctrlhead` | En-tete controle qualite (lien tiers) |
| `qcctrlline` | Ligne controle qualite (lien test) |
| `qcspechead` | En-tete specification qualite (lien tiers) |
| `qcspecline` | Ligne specification qualite (lien test) |
| `qcspecetiq` | Etiquettes specifications qualite |
| `qctchoice` | Choix de tests qualite |
| `qcauditctrl` | Audit des controles qualite |
| `claims` | **Reclamations** (lien lkitcl) |

### 2.16 Services / SAV (`srvc*`)

| Table | Description |
|-------|-------------|
| `srvcentity` | Entites de service. 2 FK entrantes. |
| `srvccycle` | Cycles de service (lien entite) |
| `srvcrqhead` | **En-tete demande de service** — entite, cycle. 3 FK entrantes. |
| `srvcrqlab` | Main d'oeuvre demande de service |
| `srvcrqmat` | Materiaux demande de service (lien items) |
| `srvcrqoth` | Autres couts demande de service |

### 2.17 Profils / Securite / Utilisateurs (`pf*`, `users*`, `Authorities`)

| Table | Description |
|-------|-------------|
| `pfhead` | **En-tetes de profils de securite**. 2 FK entrantes. |
| `pfline` | Lignes de profil (droits par objet) |
| `pfobjet` | **Objets securises**. 2 FK entrantes. |
| `pfuseracces` | Acces utilisateur par objet |
| `pfusers` | Affectation utilisateur -> profil |
| `users` | **Utilisateurs** — login, nom, commercial, design. 6 FK entrantes. |
| `users_design` | Preferences design utilisateur |
| `users_favoris` | Favoris utilisateur |
| `users_size` | Tailles de fenetres utilisateur |
| `usersconx` | Historique connexions utilisateurs |
| `Authorities` | Autorisations par programme (lien programs) |
| `pclicence` | Licences postes clients |

### 2.18 CRM (`crm*`, `workflow*`, `sendmail`, `mailaccount`)

| Table | Description |
|-------|-------------|
| `crmerpmenu` | Menu ERP-CRM (correspondance) |
| `Crmfilter` | Filtres CRM. 1 FK entrante. |
| `crmfilterformat` | Formats de filtres CRM |
| `workflowhead` | **En-tetes workflow**. 4 FK entrantes. |
| `workflowline` | Lignes workflow (lien activites) |
| `sendmail` | Envoi de mails |
| `mailaccount` | Comptes mail |
| `smt_category` | Categories SmartSales |
| `smtcode` | Codes SmartSales (lien categorie) |
| `smtlink` | Liaisons SmartSales |

### 2.19 FlexReport (`FLXR_*`)

| Table | Description |
|-------|-------------|
| `FLXR_CUSTOMIZATION` | Personnalisations de rapports. 3 FK entrantes. |
| `FLXR_GROUP` | Groupes FlexReport. 2 FK entrantes. |
| `FLXR_USER` | Utilisateurs FlexReport. 1 FK entrante. |
| `FLXR_AFF_GLOBAL` | Affectations globales (lien customization) |
| `FLXR_AFF_GROUP` | Affectations par groupe (lien customization, group) |
| `FLXR_AFF_USER` | Affectations par utilisateur (lien customization, user) |
| `FLXR_PARAM` | Parametres FlexReport |

### 2.20 Clotures (`clot*`)

| Table | Description |
|-------|-------------|
| `clotperiod` | Periodes de cloture |
| `clotfinhead` | En-tete cloture financiere |
| `clotfinit` | Initialisation cloture financiere |
| `clotfinitad` | Initialisation cloture par tiers (lien adresses) |
| `clotstocklot` | Cloture stock par lot |
| `clotstocks` | Cloture des stocks |
| `clotwip` | Cloture en-cours (WIP) |

### 2.21 Historique (`histo*`)

| Table | Description |
|-------|-------------|
| `histoallocs` | Historique des allocations |
| `histocall` | Historique des appels |
| `histocash` | Historique des caisses |
| `histocons` | Historique des consolidations |
| `histoconx` | Historique des connexions |
| `histogdrp` | Historique GDRP/RGPD |
| `histojob` | Historique des jobs |
| `histostock` | **Historique mouvements de stock** (lien locations). 1 FK entrante. |

### 2.22 Programmes / Configuration (`prog*`, `param*`, `modules`)

| Table | Description |
|-------|-------------|
| `programs` | **Table des programmes** — code, description. 1 FK entrante. |
| `progparam` | Parametres par programme |
| `progparamwindow` | Parametres de fenetre par programme |
| `progparamwindow_` | Parametres de fenetre (variante) |
| `progerrors` | Erreurs programme |
| `parameters` | **Parametres globaux** de l'application |
| `paramini` | Parametres INI |
| `modules` | Modules installes |

### 2.23 EDI / Integration (`edi*`, `fedex*`, `xml*`, `ftp*`, `WMS*`, `wb*`)

| Table | Description |
|-------|-------------|
| `edilink` | Liaisons EDI |
| `edisalhead` / `edisalline` | Commandes EDI (en-tete et lignes) |
| `edihead_DESADV_i` / `ediline_DESADV_i` | Messages DESADV import |
| `fedex_constant` | Constantes FedEx |
| `fedex_parameter` | Parametres FedEx |
| `fedex_payment` | Paiements FedEx |
| `fedex_pdf` | Documents PDF FedEx |
| `xmlerrors` | Erreurs import/export XML |
| `xmlfile` | Fichiers XML |
| `ftphead` | Connexions FTP |
| `import_wms` | Import WMS (Warehouse Management). 2 FK entrantes. |
| `WMS_CSS` | CSS WMS (lien items) |
| `WMS_STO` | Stockage WMS (lien import_wms) |
| `wb5addfields` | Champs additionnels web |
| `wbvatcodes` | Codes TVA web |
| `webcmnt` | Commentaires web |
| `websalhead` / `websalline` | Commandes web (en-tete et lignes) |

### 2.24 Planification / Ordonnancement (`plan*`, `sched*`, `advsched*`, `fcst*`, `monit*`)

| Table | Description |
|-------|-------------|
| `plangroup` | Groupes de planification |
| `planifiedtask` | Taches planifiees |
| `planimport` | Import de planning |
| `schedmat` | Planning matiere |
| `schedwrkcal` | Calendrier poste de charge planifie |
| `schedwrkdet` | Detail planning poste de charge |
| `advsched_lastdel` | Derniere suppression ordonnancement avance (lien mfgwcreqs) |
| `fcsthead` / `fcstline` | Previsions (en-tete et lignes) |
| `fcsthisto` | Historique previsions |
| `fcstnew` | Nouvelles previsions |
| `forecasts` | Previsions de vente (lien items, adresses) |
| `monitplan` / `monitplanline` | Monitoring du planning |
| `monittest` | Tests de monitoring |
| `mrpabnorm` | Anomalies MRP |

### 2.25 Comptabilite / Interface comptable (`ifcpt`, `imputcpt`, `CASHPARAM`, `tvalvl*`)

| Table | Description |
|-------|-------------|
| `ifcpt` | Interface comptable (export ecritures) |
| `imputcpt` | Imputations comptables |
| `invoicecpt` | Comptabilisation factures |
| `purinvcpt` | Comptabilisation factures fournisseurs |
| `CASHPARAM` | Parametres de caisse |
| `tvalvl` | Taux de TVA. 1 FK entrante. |
| `tvalvl_country` | Taux TVA par pays (lien country, tvalvl) |
| `currencies` | **Devises**. 1 FK entrante. |
| `paymode` | Modes de paiement |

### 2.26 Tickets / Caisse (`ticket*`)

| Table | Description |
|-------|-------------|
| `tickethead` | En-tetes de tickets de caisse |
| `ticketline` | Lignes de tickets |
| `ticketline_invoi` | Lignes tickets facturees (lien invoiceline) |

### 2.27 Choix / Configuration dynamique (`choice*`)

| Table | Description |
|-------|-------------|
| `choicehead` | En-tetes de listes de choix. 1 FK entrante. |
| `choiceline` | Lignes de listes de choix |
| `choicedesc` | Descriptions de choix |
| `choices` | Valeurs de choix |

### 2.28 Appels d'offres / Consultations (`call*`, `app*`)

| Table | Description |
|-------|-------------|
| `callhead` | En-tetes d'appels d'offres |
| `callreturn` | Retours d'appels d'offres |
| `apphead` | En-tetes applications/consultations (lien activites) |
| `appline` | Lignes applications/consultations |

### 2.29 Inter-societes / Multi-sites (`interco`, `multico`)

| Table | Description |
|-------|-------------|
| `interco` | Parametres inter-societes |
| `multico` | Configuration multi-societes |

### 2.30 RGPD (`gdrp`)

| Table | Description |
|-------|-------------|
| `gdrp` | Parametres et suivi RGPD |

### 2.31 Intrastat (`intrastat`)

| Table | Description |
|-------|-------------|
| `intrastat` | Declarations Intrastat (echanges intra-communautaires) |

### 2.32 Impression / Rapports (`alt*`, `displayhead`, `printers`, `print*`)

| Table | Description |
|-------|-------------|
| `altreport` / `altreport_sav` | Rapports alternatifs (et sauvegarde) |
| `displayhead` | En-tetes d'affichage |
| `printers` | Configuration imprimantes |
| `printsubst` | Substitutions d'impression |
| `lblproc` / `lblproc2` | Procedures d'etiquetage |

### 2.33 Design / Personnalisation UI (`Skins`, `datawindow*`, `windows_resize`, `view*`)

| Table | Description |
|-------|-------------|
| `Skins` | Themes d'interface |
| `datawindow_chang` | Modifications DataWindow |
| `datawindows_resi` | Redimensionnement DataWindow |
| `windows_resize` | Redimensionnement fenetres |
| `viewnames` | Noms de vues personnalisees. 1 FK entrante. |
| `viewstruct` | Structure des vues personnalisees |
| `userfields` | Champs utilisateur personnalises |
| `userfieldsddlb` | Listes deroulantes champs utilisateur |

### 2.34 Divers / Systeme (`lang*`, `country*`, `dbmod`, `comments*`, `html*`, `dyme*`, `garag*`, `rs_*`, `pbcat*`, `ztmp*`)

| Table | Description |
|-------|-------------|
| `lang` | Langues disponibles |
| `lang_object` / `lang_object_item` | Traductions d'objets |
| `country` | **Pays**. 2 FK entrantes. |
| `country_digicode` | Codes digitaux par pays |
| `biccode` | Codes BIC bancaires |
| `dbmod` | Modifications de base de donnees (versionnage schema) |
| `comments` / `comments_lang` | Commentaires et traductions |
| `docref` | References de documents |
| `isodocref` | References documents ISO |
| `html_select` / `html_source` | Contenu HTML (templates) |
| `template_html` | Modeles HTML |
| `dymeexpression` | Expressions dynamiques |
| `dymegrp1` / `dymegrp2` | Groupes dynamiques niveaux 1 et 2 |
| `dymehead` / `dymeline` | En-tete et lignes mesure dynamique |
| `dymephase` / `dymerout` | Phases et gammes dynamiques |
| `dymeuom` / `dymevar` | UOM et variables dynamiques |
| `garaghead` / `garagline` | Gammes-articles (en-tete et lignes) |
| `jalons` | Jalons (etapes de suivi) |
| `methodeview` | Vues de methode |
| `agendacolor` | Couleurs d'agenda |
| `rs_lastcommit` | Dernier commit SQL Remote |
| `rs_threads` | Threads SQL Remote |
| `pmiconn` | Connexion PMI |
| `dataerrors` | Erreurs de donnees |
| `query` | Requetes sauvegardees |
| `pbcatcol` / `pbcatedt` / `pbcatfmt` / `pbcattbl` / `pbcatvld` | Catalogue PowerBuilder (metadonnees PB) |
| `ztmp_cs1` / `ztmp_cs2` / `ztmp_cs3` / `ztmp_cs4` | Tables temporaires |
| `trustbox` | Boite de confiance (lien items) |
| `wipeval` | Valorisation en-cours |
| `r_ih_ih` / `r_il_il` | Tables de reference croisee |

---

## 3. Relations principales (FK)

### 3.1 Noyau commercial

```
adresses (tiers)
  ├──> salhead (commande vente)
  │      └──> salline (ligne vente)
  │             ├──> shipline (ligne expedition)
  │             ├──> conssale (consolidation)
  │             ├──> colisage
  │             ├──> mfgcoitemsal (co-produits)
  │             ├──> salaudit
  │             └──> SUBLINE_SAL (sous-traitance)
  ├──> invoicehead (facture)
  │      ├──> invoiceline (ligne facture)
  │      │      └──> ticketline_invoice
  │      ├──> invoicetva
  │      └──> SUBINVOICE
  ├──> purhead (commande achat)
  │      └──> purline (ligne achat)
  │             └──> toreception
  ├──> purinvhead (facture fournisseur)
  │      └──> purinvline
  ├──> shiphead (expedition)
  │      └──> shipline
  │             ├──> shippack
  │             └──> ssccline
  └──> profohead (proforma)
         ├──> profoline
         └──> profotva
```

### 3.2 Noyau production

```
items (articles)
  ├──> bomhead (nomenclature)
  │      ├──> bomline (composants)
  │      └──> bomcoitem (co-produits)
  ├──> mfghead (ordre de fabrication)
  │      ├──> mfgcoitem
  │      ├──> mfghbatch
  │      ├──> mfglallocs (allocations)
  │      │      └──> mfglbatch
  │      └──> mfgwcreqs (operations)  <── workcenters
  │             └──> mfgwcreqs_advsc  <── machine
  ├──> stocks (stock)  <── locations
  ├──> lots
  ├──> linkitad (prix par tiers)
  ├──> matallocs (allocations)
  └──> rateline (tarifs)
```

### 3.3 Noyau CRM / Actions

```
workflowhead (workflow)
  └──> workflowline
         └──> activities (activites)
                ├──> adrsactions (actions CRM)
                ├──> apphead (consultations)
                └──> linkactivities
```

### 3.4 Affaires / Projets

```
filehead (affaire)
  ├──> fileline
  ├──> fileprogress
  ├──> salhead (commandes vente)
  ├──> purhead (commandes achat)
  ├──> invoicehead (factures)
  ├──> purinvhead (factures fournisseur)
  ├──> purghead (regroupements achats)
  └──> adrsactions (actions)
```

### 3.5 Securite

```
programs
  └──> Authorities
pfhead (profil)
  ├──> pfline (droits) <── pfobjet
  └──> pfusers (utilisateurs)
pfobjet
  └──> pfuseracces
```

### 3.6 Planification / Ressources

```
calhead (calendrier)
  ├──> workcenters (postes de charge)
  └──> machine
CELLS (cellule)
  ├──> machine
  ├──> Cells_cmnt
  └──> workers
hourly (horaire)
  ├──> machine
  └──> hourly_day
         └──> hourly_day_int
```

---

## 4. Tables centrales (les plus referencees)

Tables apparaissant le plus souvent comme **parent** dans les relations FK. Ces tables constituent le coeur du modele de donnees.

| Table | FK entrantes | Role |
|-------|:---:|------|
| **items** | 31 | Articles / Produits |
| **adresses** | 31 | Tiers (clients, fournisseurs, prospects) |
| **filehead** | 9 | Affaires / Projets |
| **locations** | 7 | Emplacements de stockage |
| **users** | 6 | Utilisateurs |
| **salline** | 6 | Lignes commandes de vente |
| **mfghead** | 5 | Ordres de fabrication |
| **salhead** | 5 | En-tetes commandes de vente |
| **machine** | 4 | Machines |
| **activities** | 4 | Activites (CRM) |
| **workcenters** | 4 | Postes de charge |
| **workflowhead** | 4 | Workflows |
| **CELLS** | 3 | Cellules de production |
| **ratehead** | 3 | En-tetes tarifs |
| **srvcrqhead** | 3 | Demandes de service |
| **invoicehead** | 3 | En-tetes factures |
| **FLXR_CUSTOMIZATION** | 3 | Personnalisation FlexReport |

Les deux tables **items** et **adresses** sont au coeur du modele avec 31 FK entrantes chacune. Elles sont referencees par la quasi-totalite des modules fonctionnels.

---

## 5. Conventions de nommage

### 5.1 Noms de tables

| Convention | Exemples | Signification |
|-----------|----------|---------------|
| `*head` / `*line` | `salhead`/`salline`, `purhead`/`purline`, `invoicehead`/`invoiceline` | En-tete / lignes de document (pattern maitre-detail) |
| Prefixe `ad*` | `adresses`, `adresgroup`, `adrsactions` | Tiers et donnees associees |
| Prefixe `sal*` | `salhead`, `salline`, `salaudit` | Ventes |
| Prefixe `pur*` | `purhead`, `purline`, `purinvhead` | Achats |
| Prefixe `mfg*` | `mfghead`, `mfgcoitem`, `mfgwcreqs` | Fabrication |
| Prefixe `bom*` | `bomhead`, `bomline`, `bomcoitem` | Nomenclatures |
| Prefixe `ship*` | `shiphead`, `shipline`, `shippack` | Expedition |
| Prefixe `qc*` | `qctest`, `qcctrlhead`, `qcspechead` | Qualite |
| Prefixe `link*` | `linkitad`, `linkmcad`, `linkdisc` | Tables de liaison M:N |
| Prefixe `histo*` | `histostock`, `histocall`, `histocons` | Historique |
| Prefixe `clot*` | `clotperiod`, `clotfinhead`, `clotstocks` | Clotures |
| Prefixe `pf*` | `pfhead`, `pfline`, `pfusers` | Profils de securite |
| Prefixe `FLXR_*` | `FLXR_CUSTOMIZATION`, `FLXR_GROUP` | FlexReport (MAJUSCULES) |
| Prefixe `SUB*` | `SUBHEAD`, `SUBLINE_SAL`, `SUBINVOICE` | Sous-traitance (MAJUSCULES) |
| Prefixe `srvc*` | `srvcentity`, `srvccycle`, `srvcrqhead` | Services / SAV |
| Prefixe `ztmp_*` | `ztmp_cs1`, `ztmp_cs2` | Tables temporaires |
| Prefixe `rs_*` | `rs_lastcommit`, `rs_threads` | SQL Remote (replication) |
| Prefixe `pbcat*` | `pbcatcol`, `pbcattbl` | Catalogue systeme PowerBuilder |

### 5.2 Noms de colonnes

Les colonnes utilisent un prefixe de 2 lettres derive du nom de la table :

| Table | Prefixe | Exemples |
|-------|---------|----------|
| `adresses` | `ad` | `adcode`, `adname`, `adcust`, `adsupp` |
| `items` | `it` | `itcode`, `itdesc`, `itum`, `itweight` |
| `salhead` | `sh` | `shcode`, `shcust`, `shdate`, `shstatus` |
| `salline` | `sl` | `slcode`, `slitem`, `slqty`, `slprice` |
| `purhead` | `ph` | `phcode`, `phsupp`, `phdate` |
| `purline` | `pl` | `plcode`, `plitem`, `plqty` |
| `mfghead` | `mh` | `mhcode`, `mhitem`, `mhqty`, `mhstatus` |
| `bomhead` | `bh` | `bhcode`, `bhitem`, `bhparent` |
| `bomline` | `bl` | `blcode`, `blitem`, `blqty` |
| `stocks` | `sk` | `skitem`, `skloc`, `skqty`, `sklot` |
| `lots` | `lt` | `ltcode`, `ltitem`, `ltdate` |
| `locations` | `lc` | `lccode`, `lcdesc` |
| `contacts` | `ct` | `ctcode`, `ctname`, `ctfirstname` |
| `users` | `us` | `uscode`, `usname` |

**Suffixes courants** :
- `*code` : cle primaire ou cle etrangere
- `*desc` : description
- `*date` : date
- `*status` : statut
- `*activ` : indicateur actif (Y/N)
- `*cmnt` : commentaire
- `*qty` : quantite
- `*val` : valeur / montant
- `*um` : unite de mesure
- `*curr` : devise
- `*pay` : mode de paiement
- `*tva` : TVA

---

## 6. Vues (42)

### 6.1 Vues de requete (`yq_*` — 23 vues)

Vues orientees reporting et consultation de donnees consolidees.

| Vue | Description |
|-----|-------------|
| `yq_action` | Actions (vue simple) |
| `yq_actions` | Actions CRM detaillees |
| `yq_CallStat` | Statistiques appels d'offres |
| `yq_cmdsales` | Commandes ventes consolidees |
| `yq_companies` | Entreprises (tiers) |
| `yq_contacts` | Contacts |
| `yq_filehead` | En-tetes affaires |
| `yq_histostock` | Historique mouvements stock |
| `yq_items` | Articles |
| `Yq_licences` | Licences |
| `yq_mes` | MES (Manufacturing Execution System) |
| `yq_mes_rejects` | Rejets MES |
| `yq_MethodCostStructure` | Structure de couts methode |
| `yq_mfgsteps` | Etapes de fabrication |
| `Yq_modules` | Modules |
| `yq_of` | Ordres de fabrication |
| `yq_offer` | Offres commerciales |
| `Yq_paramprog` | Parametres programmes |
| `yq_purchases` | Achats |
| `yq_QualityControl` | Controles qualite |
| `yq_saleclot` | Clotures ventes |
| `yq_sales` | Ventes |
| `yq_suppcust` | Fournisseurs/clients |

### 6.2 Vues metier (`yv_*` — 15 vues)

Vues encapsulant de la logique metier pour simplifier les requetes.

| Vue | Description |
|-----|-------------|
| `yv_confsale` | Confirmation de vente |
| `yv_ean_info` | Informations codes-barres EAN |
| `yv_files_yield` | Rendement des affaires |
| `yv_Item_Cust_TD` | Articles par client avec donnees techniques |
| `yv_linkitad` | Liaison articles-tiers (prix, ref) |
| `yv_linkmcad` | Liaison codes McDo-tiers |
| `yv_proforma` | Proformas |
| `yv_quote` | Devis |
| `yv_sal_prev_2inv_mproj` | Prevision vente -> facture (multi-projet) |
| `yv_sal_prev_2inv_pproj` | Prevision vente -> facture (par projet) |
| `yv_sal_prev_global` | Prevision vente globale |
| `yv_sal_prev_jalons` | Prevision vente par jalons |
| `yv_sal_prev_nojalons` | Prevision vente hors jalons |
| `yv_sal_prev_offer_mproj` | Prevision vente offre (multi-projet) |
| `yv_sal_prev_offer_pproj` | Prevision vente offre (par projet) |
| `yv_shipnotice` | Avis d'expedition |

### 6.3 Vues speciales (`zv_*` — 3 vues)

| Vue | Description |
|-----|-------------|
| `zv_item_comments` | Commentaires articles |
| `zv_mfglabel` | Etiquettes fabrication |
| `zv_users_planning` | Utilisateurs planning |

### 6.4 Vue isolee

| Vue | Description |
|-----|-------------|
| `yq_saleclot` | Cloture des ventes (peut etre classee avec yq_*) |

---

## 7. Procedures stockees (87)

### 7.1 Fonctions scalaires (`f_*` — 22 fonctions)

Fonctions retournant une valeur calculee.

| Procedure | Description |
|-----------|-------------|
| `f_change_base` | Conversion de base numerique |
| `f_CleanComment` | Nettoyage de commentaires |
| `f_dectostring` | Conversion decimal -> chaine |
| `f_get_alloctrf_byitem` | Allocations/transferts par article |
| `f_get_alloctrf_bylot` | Allocations/transferts par lot |
| `f_get_alloctrf_byordno` | Allocations/transferts par numero de commande |
| `f_get_alloctrf_bystock` | Allocations/transferts par stock |
| `f_get_date_from_week_and_day` | Date a partir de semaine + jour |
| `f_get_discrate` | Calcul taux de remise |
| `f_get_html_template` | Recuperation modele HTML |
| `f_get_item_from_GLN` | Article depuis code GLN |
| `f_get_param_number` | Lecture parametre numerique |
| `f_get_param_string` | Lecture parametre chaine |
| `f_get_socity_from_GLN` | Societe depuis code GLN |
| `f_gethours_from_strings` | Calcul heures depuis chaines |
| `f_getsalprice_real` | Prix de vente reel |
| `F_invoiced_qty_for_period_sp_mpi` | Quantite facturee sur une periode |
| `F_invoiced_value_for_period_sp_mpi` | Valeur facturee sur une periode |
| `f_lot_uniqueid` | Identifiant unique de lot |
| `f_nombre_en_lettres` | Montant en lettres (cheques) |
| `F_purchase_value_for_period_sp_mpi` | Valeur achats sur une periode |
| `f_translate` | Traduction |

### 7.2 Procedures de prix et remises (`sp_get_*` — 14 procedures)

| Procedure | Description |
|-----------|-------------|
| `sp_get_alcooluse` | Usage alcool (accises) |
| `sp_get_cqty_mfg` | Quantite cumul fabrication |
| `sp_get_cqtycost_mfg` | Cout quantite cumul fabrication |
| `SP_GET_INSTA_STOCK` | Stock instantane |
| `sp_get_logisticdisc` | Remise logistique |
| `sp_get_promodisc` | Remise promotionnelle |
| `sp_get_realprice_invline` | Prix reel ligne facture |
| `sp_get_saledisc` | Remise de vente |
| `sp_get_salerate` | Tarif de vente |
| `sp_get_salprice` | Prix de vente |
| `SP_GET_SALPRICE_NEW` | Prix de vente (nouvelle version) |
| `sp_get_subheadtobill` | Sous-traitance a facturer |
| `sp_getsalprice_real` | Prix de vente reel (procedure) |
| `sp_lot_q_useof` | Utilisation d'un lot |

### 7.3 Ordonnancement avance (`sp_advsched_*` — 18 procedures)

| Procedure | Description |
|-----------|-------------|
| `sp_advsched_assign_machine` | Affectation machine |
| `sp_advsched_assign_machineday_J` | Affectation machine par jour (J) |
| `sp_advsched_assign_machineday_O` | Affectation machine par jour (O) |
| `sp_advsched_assign_mfgwcreqs_advsc` | Affectation operations OF |
| `sp_advsched_assign_one_wc` | Affectation un poste de charge |
| `sp_advsched_assign_overflow` | Gestion debordement capacite |
| `sp_advsched_assign_wc` | Affectation poste de charge |
| `sp_advsched_del` | Suppression ordonnancement |
| `sp_advsched_enddate_wc` | Date fin poste de charge |
| `sp_advsched_enddate_wc_result` | Resultat date fin poste de charge |
| `sp_advsched_getfreetimemachine` | Temps libre machine |
| `sp_advsched_shift` | Decalage ordonnancement |
| `sp_advsched_shift_one` | Decalage unitaire |
| `sp_advsched_sortwc` | Tri postes de charge |
| `sp_advsched_startdate_wc` | Date debut poste de charge |
| `sp_advsched_startdate_wc_result` | Resultat date debut poste |
| `sp_advsched_wc_assigned` | Poste de charge affecte |

### 7.4 Facturation automatique (`sp_invoice_*` — 2 procedures)

| Procedure | Description |
|-----------|-------------|
| `sp_invoice_prep_aut` | Preparation facture automatique |
| `sp_invoice_prep_ne_aut` | Preparation facture non-automatique |

### 7.5 Statistiques et rapports (`sp_stat*`, `SP_marge*`, `SP_D_*`)

| Procedure | Description |
|-----------|-------------|
| `sp_statpur` | Statistiques achats |
| `SP_marge_per_item_ad` | Marge par article et tiers |
| `SP_marge_period_item` | Marge par periode et article |
| `SP_D_STOCK_PLANIFICATION_REPORT` | Rapport planification stock |

### 7.6 Mailing (`f_send_email*`)

| Procedure | Description |
|-----------|-------------|
| `f_send_email` | Envoi d'email |
| `f_send_email_select` | Envoi email avec selection |

### 7.7 CRM / Actions (`*_action`)

| Procedure | Description |
|-----------|-------------|
| `confirm_action` | Confirmation d'action CRM |
| `validate_action` | Validation d'action CRM |
| `TRAITEMENT_ADRSACTIONS` | Traitement des actions CRM |

### 7.8 SQL Remote / Replication (`rs_*`)

| Procedure | Description |
|-----------|-------------|
| `rs_get_lastcommit` | Lecture dernier commit |
| `rs_initialize_threads` | Initialisation threads |
| `rs_marker` | Marqueur de replication |
| `rs_update_lastcommit` | Mise a jour dernier commit |
| `rs_update_threads` | Mise a jour threads |

### 7.9 Divers

| Procedure | Description |
|-----------|-------------|
| `createnewlot` | Creation d'un nouveau lot |
| `replace_string_with_select` | Remplacement de chaine via SELECT |
| `sp_avgval_purrec` | Valeur moyenne reception achat |
| `sp_change_alloc` | Changement d'allocation |
| `sp_check_lotfill_foraccises` | Verification remplissage lot (accises) |
| `sp_corr_linkitad` | Correction liaison article-tiers |
| `sp_disconnect_check` | Verification deconnexion |
| `sp_importxml_cust` | Import XML clients |
| `sp_nbweekinmonth` | Nombre de semaines dans un mois |
| `sp_retrieve_quicksale` | Recherche vente rapide |
| `sp_returnsalline_fromstring` | Retour ligne vente depuis chaine |
| `SP_SET_NEW_QCTEST` | Creation nouveau test qualite |
| `sp_ticket_check` | Verification ticket |
| `sp_tictrl_add_endday` | Ajout pointage fin de journee |
| `sp_workline_time` | Temps ligne de travail |
| `to_string` | Conversion en chaine |
| `wss_shipto` | Service web adresse de livraison |

---

## 8. Resume

La base de donnees PMIX est organisee autour de deux tables centrales (**items** et **adresses**) qui sont referencees par 31 FK chacune. Le schema suit un pattern classique d'ERP avec des paires en-tete/lignes (`*head`/`*line`) pour les documents transactionnels (commandes, factures, expeditions, OF).

Les 430 tables couvrent l'ensemble des processus d'une PME :
- **Gestion commerciale** : ventes, achats, facturation, tarifs, remises
- **Production** : nomenclatures, gammes, ordres de fabrication, ordonnancement
- **Logistique** : stocks, expeditions, colisage, codes-barres
- **Qualite** : tests, controles, specifications
- **Projets** : affaires, suivi d'avancement
- **CRM** : actions, contacts, workflows
- **Systeme** : securite, profils, parametres, audit

Les 87 procedures stockees se concentrent sur le calcul de prix (`sp_get_*`), l'ordonnancement avance (`sp_advsched_*`) et les fonctions utilitaires (`f_*`). Les 42 vues servent principalement au reporting (`yq_*`) et a l'encapsulation de logique metier (`yv_*`).
