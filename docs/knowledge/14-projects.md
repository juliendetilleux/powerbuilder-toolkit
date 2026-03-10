# Domaine : PROJETS ET SERVICES (Gestion des Affaires, Projets, Devis, SAV)

## Vue d'ensemble

La gestion des projets et services dans PmiGest ERP (PMIX) couvre trois sous-domaines complementaires :

- **Gestion des affaires/dossiers** (`_projects`, 171 objets) : suivi des affaires clients avec budget, avancement, consolidation des commandes de vente, d'achat, de fabrication et des couts associes. Tables centrales : `filehead` / `fileline`. C'est le niveau macro de suivi de rentabilite.
- **Gestion des devis/projets techniques** (`_devis`, 97 objets) : elaboration de devis multi-versions avec detail des lignes de chiffrage (matieres, main-d'oeuvre, machines), conversion en commandes. Tables centrales : `projhead` / `projline` / `projvrsn`.
- **Gestion des services/SAV** (`_services`, 33 objets) : maintenance preventive et curative sur des entites (equipements/machines), avec cycles de maintenance planifies et demandes d'intervention. Tables centrales : `srvcentity` / `srvccycle` / `srvcrqhead`.

### Statistiques par module

| Module | Fenetres | DataWindows | User Objects | Fonctions | Menus | Total |
|--------|----------|-------------|--------------|-----------|-------|-------|
| `_projects` | 43 | 111 | 5 | 4 | 7 | 171 |
| `_devis` | 37 | 52 | 1 | 4 | 3 | 97 |
| `_services` | 10 | 18 | 4 | 0 | 1 | 33 |
| **Total** | **90** | **181** | **10** | **8** | **11** | **301** |

Les trois sous-domaines sont lies : un dossier/affaire (`filehead`) peut etre associe a un devis technique (`projhead` via `phfilehead`), et les demandes de service (`srvcrqhead`) peuvent concerner des equipements suivis dans le module services.

---

## Tables principales

### Tables du module Affaires/Dossiers (file*)

| Table | Role | Colonnes cles | FK vers |
|-------|------|---------------|---------|
| **filehead** | En-tete dossier/affaire — donnees principales du projet | `fhcode` (PK, numeric(4)), `fhdesc`, `fhstatus`, `fhcreadate`, `fhstartdate`, `fhexpstartdate`, `fhexpenddate`, `fhresp`, `fhprogress`, `fhbudget`, `fhbudgetmat`, `fhbudgetlabour`, `fhbudgetother` | `adresses` (fhadid), `filefamily` (fhstat1) |
| **fileline** | Lignes/taches du dossier — detail des postes de projet | `flcode`, `flline` (PK composite), `fldesc`, `flstatus`, `flbudget`, `flbudgetmat`, `flbudgetlabour`, `flbudgetother`, `flresp`, `flddlbus` | `filehead` (flcode) |
| **filefamily** | Familles de dossiers — classification des projets | `ffcode` (PK, numeric(3)), `ffdesc`, `ffactiv` | _(aucune)_ |
| **fileprogress** | Historique d'avancement — suivi de la progression dans le temps | `fpfilecode`, `fpdate` (PK composite), `fpfileheadstatu`, `fpuser`, `fpvalue` | `filehead` (fpfilecode) |
| **filesalhead** | En-tete des commandes de vente liees au dossier | `fhfilid` (PK, numeric(9)), `fhidcust`, `fhsalesman`, `fhstatus`, `fhsalorder`, `fhtype`, `fhcustref` | _(aucune)_ |
| **filesalline** | Lignes de vente du dossier — detail articles/quantites | `flfilid`, `flfillineid` (PK composite), `fliditem`, `flqtyreq`, `flstdval`, `fldatreq`, `flrist` | `filesalhead` (flfilid) |
| **fileAJ** | Ajustements de stock lies au dossier | `fa_id` (PK), `fa_filename`, `fa_date`, `fa_user` | `users` |
| **filetoAJ_line** | Lignes d'ajustement de stock du dossier | `fl_id`, `fl_fk_fa_id`, `fl_fileline`, `fl_type`, `fl_qty`, `fl_loc_start`, `fl_loc_dest`, `fl_lot`, `fl_status` | `fileAJ` |
| **fileMFG** | Ordres de fabrication lies au dossier | `fm_id` (PK), `fm_filename`, `fm_date`, `fm_user`, `fm_type` | `users` |
| **filetoreceptMFG_line** | Lignes de reception fabrication du dossier | `fl_id`, `fl_fk_fm_id`, `fl_fileline`, `fl_mfghead_mhcode`, `fl_item`, `fl_loc`, `fl_lot`, `fl_qty_torecept`, `fl_status` | `fileMFG` |
| **filetoallocate** | Allocations stock liees au dossier | `fa_id` (PK), `fa_filename`, `fa_date`, `fa_user` | `users` |
| **filetoallocate_line** | Lignes d'allocation stock du dossier | `fl_id`, `fl_fk_fa_id`, `fl_fileline`, `fl_salhead_shcode`, `fl_loc`, `fl_lot`, `fl_qty_toalloc`, `fl_status` | `filetoallocate` |
| **filetorecept** | Receptions liees au dossier | `fl_id`, `fl_fk_fm_id`, `fl_fileline`, `fl_mfghead_mhco`, `fl_item`, `fl_loc`, `fl_lot`, `fl_qty_torecept`, `fl_status`, `fl_type` | _(aucune)_ |

### Tables du module Devis/Projets techniques (proj*)

| Table | Role | Colonnes cles | FK vers |
|-------|------|---------------|---------|
| **projhead** | En-tete devis/projet technique — donnees principales | `phcode` (PK, numeric(6)), `phstatus`, `phactiv`, `phdesc`, `phadid`, `phdatcrea`, `phdatreq`, `phtype`, `phcurr`, `phrate`, `phfilehead`, `phfileline`, `phuplab`, `phupmat`, `phupoth`, `phupglob`, `phsalesman`, `phdirectsal`, `phsuccessper` | `adresses` (phadid) |
| **projvrsn** | Versions du devis — chaque devis peut avoir plusieurs versions | `pvphid`, `pvcode` (PK composite), `pvdesc`, `pvstatus`, `pvdatcrea`, `pvqty`, `pvrampurval`, `pvramsalval`, `pvlabpurval`, `pvlabsalval`, `pvmacpurval`, `pvmacsalval`, `pvpurval`, `pvsalval`, `pvuplab`, `pvupmat`, `pvupoth`, `pvupglob`, `pvoptional`, `pvpricetyp` | _(projhead implicite via pvphid)_ |
| **projline** | Lignes du devis — detail des postes de chiffrage | `plphid`, `plpvid`, `plcode` (PK composite), `pltyp`, `plqty`, `plitem`, `plmethod`, `plwcid`, `plsuppid`, `pldesc`, `plsize`, `plcostlab`, `plcostmat`, `plcostoth`, `plsalcost`, `plinvtyp`, `plum` | _(projhead/projvrsn implicite)_ |
| **projstep** | Etapes/jalons du projet — phases de realisation | `psphid`, `pscode` (PK composite), `psdesc`, `pssort` | _(projhead implicite)_ |
| **projmat** | Matieres du devis — composants et fournitures prevues | `pmphid`, `pmpvid`, `pmplid`, `pmcode` (PK composite), `pmitem`, `pmreqqty`, `pmreqdat`, `pmcost` | _(projhead/projvrsn/projline implicite)_ |
| **projlab** | Main-d'oeuvre du devis — heures prevues par poste de charge | `pbphid`, `pbpvid`, `pbplid`, `pbcode` (PK composite), `pbwc`, `pbreqmac`, `pbreqlab`, `pbcost`, `pbphase` | _(projhead/projvrsn/projline implicite)_ |
| **projsize** | Dimensions/tailles — specifications dimensionnelles des lignes | `psphid`, `pspvid`, `psplid`, `psduid` (PK composite), `psdudesc`, `psduuom`, `psduval` | _(projhead/projvrsn/projline implicite)_ |
| **projaux** | Lignes auxiliaires — postes complementaires (frais divers) | `paphid`, `pacode` (PK composite), `padesc`, `paum`, `pafatype`, `pastatus`, `paqty`, `pastdval`, `pasalval`, `paoptional` | _(projhead implicite)_ |
| **projdetail** | Detail technique — arborescence nomenclature/gamme du devis | `pdprojid`, `pdversid`, `pdline` (PK composite), `pdlevel`, `pdtype`, `pdparentline`, `pditcode`, `pdittype`, `pditqty`, `pdpurval`, `pdwccode`, `pdwclabval`, `pdwcmacval`, `pdtitle`, `pdtextline` | _(projhead/projvrsn implicite)_ |
| **projinvlin** | Lignes de facturation du projet — suivi de la facturation par etape | `plphid`, `plpvid`, `plcode`, `plstepid` (PK composite), `plinvpc`, `plplinvdone`, `plinvoiced` | _(projhead/projvrsn/projline implicite)_ |
| **devgroup** | Groupes de devis — regroupement de lignes par categorie | `dgpvhid`, `dgcode` (PK composite), `dgdesc`, `dgdetail`, `dgpricedetail` | `projhead` (dgpvhid) |

### Tables du module Services/SAV (srvc*)

| Table | Role | Colonnes cles | FK vers |
|-------|------|---------------|---------|
| **srvcentity** | Entites de service — equipements/machines a maintenir | `secode` (PK, char(8)), `seactiv`, `sename`, `seloc`, `secrit1` | _(aucune)_ |
| **srvccycle** | Cycles de maintenance — planification periodique | `scid` (PK, numeric(6)), `scentity`, `scname`, `scdesc`, `sctype`, `sctypfreq`, `scfreq`, `scmethod`, `scmatcost`, `sclabcost`, `scothcost`, `sclastldat`, `sclastrdat`, `scleadt`, `scnextdat`, `scflagsr`, `sclastsrid`, `scsrid`, `scactiv`, `ScFamily`, `sclot` | `srvcentity` (scentity) |
| **srvcrqhead** | Demandes d'intervention — en-tete des taches de service | `srid` (PK, numeric(6)), `srtype`, `srentity`, `srstatus`, `srscid`, `srname`, `srdesc`, `srcreatyp`, `srcreadat`, `srreqdat`, `srrealdat`, `srmatcost`, `srlabcost`, `srothcost`, `srcmnt`, `srenddat`, `srendusr`, `srfamily`, `srlot` | `srvcentity` (srentity), `srvccycle` (srscid) |
| **srvcrqlab** | Main-d'oeuvre des interventions — heures et couts de travail | `slid`, `slline` (PK composite), `sltyp`, `sllabid`, `slqtyorig`, `slqtyreal`, `slcost` | `srvcrqhead` (slid) |
| **srvcrqmat** | Matieres des interventions — pieces et fournitures consommees | `smid`, `smline` (PK composite), `smtypit`, `smitem`, `smqtyorig`, `smqtyreal`, `smcost` | `srvcrqhead` (smid), `items` (smitem) |
| **srvcrqoth** | Autres couts d'intervention — frais divers | `soid`, `soline` (PK composite), `sotyp`, `sodesc`, `socost` | `srvcrqhead` (soid) |

---

## Colonnes cles de la table filehead

### Identification

| Colonne | Type | Description |
|---------|------|-------------|
| `fhcode` | numeric(4) | **Code dossier (PK)** — identifiant unique du dossier/affaire |
| `fhdesc` | char(50) | Description du dossier |
| `fhdesc2` | long varchar | Description longue |
| `fhstatus` | char(1) | **Statut du dossier** |
| `fhadid` | char(10) | Code adresse/client — FK vers `adresses(adcode)` |
| `fhresp` | char(50) | Responsable du dossier |
| `fhstat1` | numeric(3) | Famille de dossier — FK vers `filefamily(ffcode)` |

### Dates

| Colonne | Type | Description |
|---------|------|-------------|
| `fhcreadate` | timestamp | Date de creation |
| `fhcreausr` | char(50) | Utilisateur de creation |
| `fhlastmoddate` | timestamp | Date de derniere modification |
| `fhlastmodusr` | char(50) | Utilisateur de derniere modification |
| `fhstartdate` | timestamp | Date de debut reel |
| `fhexpstartdate` | timestamp | Date de debut previsionnel |
| `fhexpenddate` | timestamp | Date de fin previsionnelle |

### Budget et avancement

| Colonne | Type | Description |
|---------|------|-------------|
| `fhbudget` | numeric(8,2) | **Budget total** |
| `fhbudgetmat` | numeric(8,2) | Budget matieres |
| `fhbudgetlabour` | numeric(8,2) | Budget main-d'oeuvre |
| `fhbudgetother` | numeric(8,2) | Budget autres frais |
| `fhprogress` | numeric(4,2) | **Pourcentage d'avancement** |

### Relations de filehead

- **Parents (FK sortantes)** : `adresses` (client), `filefamily` (famille)
- **Enfants (FK entrantes)** : `fileline`, `fileprogress`, `adrsactions`, `invoicehead`, `invoiceline`, `purghead`, `purhead`, `purinvhead`, `salhead`

---

## Colonnes cles de la table projhead

### Identification

| Colonne | Type | Description |
|---------|------|-------------|
| `phcode` | numeric(6) | **Code devis/projet (PK)** — identifiant unique |
| `phdesc` | varchar(50) | Description du projet |
| `phdesc2` | varchar(1000) | Description longue |
| `phstatus` | char(1) | Statut du projet |
| `phactiv` | char(1) | Actif (O/N) |
| `phtype` | char(1) | Type de projet |
| `phadid` | char(10) | Code client — FK vers `adresses` |
| `phcurr` | char(3) | Devise |
| `phcustref` | varchar(40) | Reference client |
| `phlang` | char(2) | Langue |

### Liens avec autres modules

| Colonne | Type | Description |
|---------|------|-------------|
| `phfilehead` | numeric(6) | **Lien vers le dossier/affaire** — FK vers `filehead(fhcode)` |
| `phfileline` | numeric(4) | Ligne du dossier/affaire |
| `phofferact` | numeric(6) | Action offre associee |
| `phflwofferact` | numeric(6) | Action suivi offre |
| `phsalesman` | varchar(8) | Commercial |
| `phdocid` | numeric(7) | Document associe |

### Majorations et tarification

| Colonne | Type | Description |
|---------|------|-------------|
| `phrate` | numeric(5) | Taux de change |
| `phrist` | numeric(5,2) | Remise/ristourne |
| `phuplab` | numeric(5,2) | Majoration main-d'oeuvre (%) |
| `phupmat` | numeric(5,2) | Majoration matieres (%) |
| `phupoth` | numeric(5,2) | Majoration autres (%) |
| `phupglob` | numeric(5,2) | Majoration globale (%) |
| `phsuccessper` | numeric(3) | Pourcentage de succes (probabilite) |

### Dates

| Colonne | Type | Description |
|---------|------|-------------|
| `phdatcrea` | timestamp | Date de creation |
| `phdatreq` | timestamp | Date requise |
| `phexpdate` | timestamp | Date d'expiration |
| `phfrcstdate` | timestamp | Date previsionnelle |

---

## Colonnes cles de la table srvcrqhead

| Colonne | Type | Description |
|---------|------|-------------|
| `srid` | numeric(6) | **ID demande (PK)** — identifiant unique |
| `srtype` | char(1) | Type de demande |
| `srentity` | char(8) | Entite concernee — FK vers `srvcentity` |
| `srstatus` | char(1) | **Statut** (8 = cloture) |
| `srscid` | numeric(6) | Cycle de maintenance source — FK vers `srvccycle` |
| `srname` | varchar(50) | Nom de l'intervention |
| `srdesc` | varchar(180) | Description detaillee |
| `srcreatyp` | char(1) | Type de creation (manuelle/automatique) |
| `srcreadat` | timestamp | Date de creation |
| `srcreausr` | char(50) | Utilisateur de creation |
| `srreqdat` | timestamp | Date demandee |
| `srrealdat` | timestamp | Date de realisation |
| `srenddat` | timestamp | Date de cloture |
| `srendusr` | char(50) | Utilisateur de cloture |
| `srmatcost` | numeric(8,2) | **Cout matieres** (calcule depuis `srvcrqmat`) |
| `srlabcost` | numeric(8,2) | **Cout main-d'oeuvre** (calcule depuis `srvcrqlab`) |
| `srothcost` | numeric(8,2) | **Cout autres** (calcule depuis `srvcrqoth`) |
| `srcmnt` | long varchar | Commentaire |
| `srfamily` | numeric(3) | Famille |
| `srlot` | char(30) | Lot associe |

---

## Objets PB cles

### Fenetres du module Affaires (_projects)

| Fenetre | Ancetre | Description | Fonctions cles |
|---------|---------|-------------|----------------|
| `w_file_update` | w_response | **Fenetre principale de gestion d'affaire** — creation, modification, budget, jalons, conditions, suivi multi-onglets | `wf_refresh()`, `wf_saved()`, `wf_inputok()`, `wf_retrieve_all()`, `wf_create_fileline()`, `wf_delete_fileline()`, `wf_move_fileline()`, `wf_update_budget()`, `wf_filter_sales()`, `wf_filter_purchase()`, `wf_filter_of()`, `wf_filter_services()`, `wf_filter_stock()`, `wf_fill_projectbudget()`, `wf_doc_create()`, `wf_copyjalons()`, `wf_refresh_jalons()`, `wf_refresh_conddetail()`, `wf_createcondhead()`, `wf_ong_visibility()` |
| `w_files` | w_response | Liste des dossiers actifs — selection et ouverture | `wf_refresh()`, `wf_filteritem()` |
| `w_files_histo` | w_response | Liste des dossiers historises/archives | `wf_refresh()`, `wf_filteritem()` |
| `w_files_report` | w_response | **Rapport consolide projet** — vue globale avec onglets (commandes, livraisons, factures, achats, stock, fabrication), tables temporaires pour analyse | `wf_sql4plan()`, `wf_sql4plan_global()`, `wf_sql4plan_choosen()`, `wf_filter_activities()`, `wf_filter_users()`, `wf_create_temp_table()`, `wf_retrieve_temp_table()`, `wf_check_retrieve_temp_table()` |
| `w_files_sqlselect` | w_response | Selection SQL de dossier — choix avec filtres avances | `wf_refresh()`, `wf_filteritem()` |
| `w_fileline_update` | w_response | Mise a jour d'une ligne de dossier | `wf_inputok()` |
| `w_fileline_sqlselect` | w_response | Selection SQL d'une ligne de dossier | `wf_refresh()`, `wf_filteritem()`, `wf_create_fileline()` |
| `w_filefamily_update` | w_response | Mise a jour des familles de dossiers (module `_masters`) | `wf_filefamily_ok()` |
| `w_fileprogress_update` | w_response | Saisie de l'avancement du dossier — historisation progression | _(events: ue_getcalendar, ue_positionchanged)_ |
| `w_file_actvar` | w_response | Suivi des activites/variables du dossier — saisie temps/quantites | `wf_checktimes()`, `wf_save()`, `wf_load()`, `wf_insertrow()`, `wf_deleterow()` |
| `w_file_actvar_auto` | w_response | Activites/variables automatiques du dossier | `wf_checktimes()`, `wf_save()`, `wf_load()`, `wf_insertrow()`, `wf_deleterow()` |
| `w_calls` | w_main | **Actions/appels projet** — gestion des actions liees au dossier (fenetre standalone) | `wf_modify_doc()`, `wf_action_user()`, `wf_refresh_all()`, `wf_refreshreselect()`, `wf_action_delete()`, `wf_progress_retrieve()`, `wf_terminated()` |
| `w_calls2` | w_main | **Actions/appels projet v2** — version enrichie avec email, audit, multi-societe | `wf_modify_doc()`, `wf_action_user()`, `wf_refresh_all()`, `wf_audit()`, `wf_handle_file()`, `wf_callauto()`, `filteritem()`, `inputok()` |

### Fenetres du module Devis (_devis)

| Fenetre | Ancetre | Description | Fonctions cles |
|---------|---------|-------------|----------------|
| `w_devis` | w_response | **Fenetre principale des devis** — gestion multi-version, detail technique, conversion en commande | `wf_projdelete()`, `wf_versdelete()`, `wf_head_refresh()`, `wf_vers_refresh()`, `wf_convert2order()`, `wf_convert2item()`, `wf_tech_print()`, `wf_comm_print()`, `wf_offer_launch()`, `wf_archive()`, `wf_projreactivate()`, `wf_dviln_modify()`, `wf_dviln_lndelete()`, `wf_dviln_lncopy()`, `wf_detail_ret()`, `wf_actual()`, `wf_actual_offer()` |
| `w_devis_update` | w_response | Creation/modification d'un devis — en-tete avec client, taux, remises | `inputok()`, `wf_custsearch()`, `wf_norate()`, `wf_incmod()`, `wf_ratemod()`, `wf_copy_line()`, `wf_get_deviid()`, `wf_get_version()` |
| `w_devis_archived` | w_response | Devis archives — consultation des anciens devis | _(events)_ |
| `w_devis_garage_update` | w_response | Devis garage — variante specifique | _(events)_ |
| `w_devisoffer_update` | w_response | Mise a jour offre devis | _(events)_ |

### Fenetres du module Services (_services)

| Fenetre | Ancetre | Description | Fonctions cles |
|---------|---------|-------------|----------------|
| `w_srvctask` | w_response | **Liste des demandes d'intervention** — creation, filtrage, generation periodique, cloture | `wf_refresh_task()`, `wf_generation_periodique()`, `wf_close_task()`, `wf_cancel_task()`, `wf_print_task()`, `wf_taskreport()`, `wf_filter()`, `wf_modify_doc()` |
| `w_srvctask_update` | w_response | Creation/modification d'une demande d'intervention | `wf_inputok()`, `wf_monitoring()` |
| `w_srvctask_report` | w_response | Rapport de couts d'intervention — detail matieres, main-d'oeuvre, autres | `wf_refresh_costmat()`, `wf_refresh_costlab()`, `wf_refresh_costoth()` |
| `w_srvctask_report_update` | w_response | Saisie des couts d'intervention — ajout matieres/main-d'oeuvre/autres | `wf_inputok_costlab()`, `wf_inputok_costmat()`, `wf_inputok_costoth()`, `wf_update_stock()`, `wf_showlot()` |
| `w_srvccycle` | w_response | **Liste des cycles de maintenance** — planification periodique | `wf_refresh_srvc()`, `wf_init_date()`, `wf_modify_doc()`, `wf_filter()` |
| `w_srvccycle_update` | w_response | Creation/modification d'un cycle de maintenance | `wf_inputok()`, `wf_modify_doc()`, `wf_monitoring()` |
| `w_srvcentity_update` | w_response | Creation/modification d'une entite de service (equipement) | `wf_inputok()` |
| `w_srvc_close_realdate` | w_response | Saisie de la date de realisation lors de la cloture | _(events)_ |
| `w_srvc_sel_taskref` | w_response | Selection d'une tache de reference pour creation automatique | _(events)_ |

### DataWindows principaux

| DataWindow | Module | Role |
|------------|--------|------|
| `d_files_report` | _projects | Rapport consolide du dossier/affaire |
| `d_files_update` | _projects | Mise a jour du dossier |
| `d_files_list` | _projects | Liste des dossiers |
| `dd_file_sel` | _projects | DDDW de selection de dossier (fhcode/fhdesc) |
| `d_files_sal_print` | _prints_std | Impression commandes du projet |
| `d_files_pur_print` | _prints_std | Impression achats du projet |
| `d_files_inv_print` | _prints_std | Impression factures du projet |

---

## Flux : Gestion des affaires/dossiers (filehead)

### Creation d'un dossier

```
w_files (liste des dossiers)
    |-- Bouton "Creer"
    |
    v
w_file_update (mode creation)
    |-- Saisie : fhdesc, fhadid (client), fhresp (responsable)
    |-- Saisie budget : fhbudgetmat, fhbudgetlabour, fhbudgetother
    |-- Dates : fhexpstartdate, fhexpenddate
    |-- Famille : fhstat1 (filefamily)
    |-- wf_inputok() → validation
    |-- wf_saved() → sauvegarde
    |
    v
Tables mises a jour :
    - filehead : INSERT (nouveau dossier)
```

### Gestion des lignes de dossier

```
w_file_update (onglet lignes)
    |-- wf_create_fileline() : creation d'une ligne
    |   |
    |   v
    |   w_fileline_update (saisie detail)
    |       |-- fldesc, flbudget, flbudgetmat, flbudgetlabour, flresp
    |       |-- wf_inputok() → validation
    |
    |-- wf_modify_fileline() : modification d'une ligne existante
    |-- wf_delete_fileline() : suppression (avec verification wf_isempty_subfile)
    |-- wf_move_fileline() : deplacement/reaffectation
    |
    v
Tables mises a jour :
    - fileline : INSERT/UPDATE/DELETE
```

### Association des commandes

Le dossier centralise les liens vers les documents commerciaux existants :

```
w_file_update (onglets ventes/achats/fabrication)
    |
    |-- Onglet Ventes (wf_filter_sales) :
    |   Commandes vente liees via salline.slfileref = fhcode
    |
    |-- Onglet Achats (wf_filter_purchase) :
    |   Commandes achat liees via purghead.phfilehead
    |
    |-- Onglet OF (wf_filter_of) :
    |   Ordres de fabrication lies via mfghead
    |
    |-- Onglet Stock (wf_filter_stock) :
    |   Mouvements stock lies
    |
    |-- Onglet Services (wf_filter_services / wf_fill_services) :
    |   Demandes de service liees
    |
    v
Tables lues (consultation) :
    - salhead/salline : commandes de vente (slfileref = fhcode)
    - purghead/purgline : commandes d'achat
    - mfghead : ordres de fabrication
    - histostock/stockmvt : mouvements de stock
    - invoicehead/invoiceline : factures
    - shiphead/shipline : livraisons
```

### Suivi d'avancement

```
w_file_update → wf_fileprogress_update
    |
    v
w_fileprogress_update
    |-- Saisie : fpvalue (pourcentage), fpdate (date), fpfileheadstatu
    |
    v
Tables mises a jour :
    - fileprogress : INSERT (historique d'avancement)
    - filehead : UPDATE fhprogress (avancement courant)
```

### Rapport consolide

```
w_files_report
    |-- Selection du dossier via DDDW (dd_file_sel → fhcode/fhdesc)
    |-- wf_create_temp_table() : creation tables temporaires pour consolidation
    |-- wf_retrieve_temp_table() / wf_check_retrieve_temp_table()
    |
    |-- Onglets de consultation :
    |   - Commandes de vente → salhead/salline
    |   - Livraisons → shiphead/shipline
    |   - Factures → invoicehead/invoiceline
    |   - Achats → purghead/purgline
    |   - Stock → histostock/stockmvt
    |   - Fabrication → mfghead
    |
    |-- Impression :
    |   Printparam.infotext = "Affaire : " + description_projet
    |
    v
Tables lues (lecture seule) :
    - filehead, fileline (dossier)
    - salhead, salline (commandes vente)
    - shiphead, shipline (livraisons)
    - invoicehead, invoiceline (factures)
    - purghead, purgline (commandes achat)
    - mfghead (ordres fabrication)
    - histostock, stockmvt (mouvements stock)
```

### Gestion des jalons et conditions

```
w_file_update (onglet jalons/conditions)
    |
    |-- wf_create_jalonref() : creation d'un jalon de reference
    |-- wf_copyjalons() : copie de jalons depuis un dossier existant
    |-- wf_refresh_jalons() : actualisation des jalons
    |-- wf_filter_jalons() : filtrage
    |
    |-- wf_createcondhead() : creation d'une condition
    |-- wf_modifycondhead() : modification
    |-- wf_duplicatecondhead() : duplication
    |-- wf_copyrefcondhead() : copie depuis reference
    |-- wf_deletecondhead() / wf_deletecondline() : suppression
    |-- wf_copy_cond() : copie complete
    |
    v
Table jalons : jalons (jafileref = fhcode)
```

### Cloture du dossier

```
w_file_update
    |-- wf_check_clot() : verification des conditions de cloture
    |   (toutes commandes livrees, facturees, ...)
    |
    v
Tables mises a jour :
    - filehead : UPDATE fhstatus (passage en statut cloture)
```

---

## Flux : Gestion des devis/projets techniques (projhead)

### Creation d'un devis

```
w_devis (liste des devis)
    |-- Bouton "Creer"
    |
    v
w_devis_update (creation en-tete)
    |-- phadid (client) : selection via wf_custsearch()
    |-- phdesc, phtype, phcurr (devise)
    |-- Majorations : phuplab, phupmat, phupoth, phupglob
    |-- phrate (taux), phrist (remise)
    |-- inputok() → validation
    |
    v
Tables mises a jour :
    - projhead : INSERT (nouveau devis)
    - projvrsn : INSERT (version initiale 001)
```

### Gestion des versions

Chaque devis peut avoir plusieurs versions (variantes de chiffrage) :

```
w_devis
    |-- wf_vers_refresh(as_dvityp) : affichage de la version courante
    |-- wf_vers_reposition(versionnum, as_dvityp) : repositionnement
    |
    v
projvrsn :
    - pvphid : reference au devis (projhead)
    - pvcode : numero de version
    - pvstatus : statut de la version
    - pvqty : quantite
    - pvrampurval / pvramsalval : valeur matiere achat/vente
    - pvlabpurval / pvlabsalval : valeur main-d'oeuvre achat/vente
    - pvmacpurval / pvmacsalval : valeur machine achat/vente
    - pvpurval / pvsalval : valeur totale achat/vente
    - pvoptional : version optionnelle (O/N)
```

### Detail des lignes

```
w_devis (zone detail)
    |-- wf_dviln_modify() : modification d'une ligne
    |-- wf_dviln_lndelete() : suppression
    |-- wf_dviln_lncopy() : copie/duplication
    |-- wf_detail_ret(as_phtyp) : recuperation du detail technique
    |
    v
projline :
    - pltyp : type de ligne (matiere, main-d'oeuvre, sous-traitance, ...)
    - plqty : quantite
    - plitem : code article
    - plwcid : poste de charge (centre de couts)
    - plcostlab / plcostmat / plcostoth : couts detailles
    - plsalcost : prix de vente
    |
    +-- projmat (composants matieres de la ligne)
    |   - pmitem, pmreqqty, pmcost
    |
    +-- projlab (heures main-d'oeuvre de la ligne)
    |   - pbwc (poste), pbreqmac, pbreqlab, pbcost
    |
    +-- projsize (dimensions/specifications)
        - psdudesc, psduuom, psduval
```

### Conversion devis en commande

```
w_devis
    |-- wf_convert2order() : conversion du devis en commande de vente
    |   |-- Verification : statut, completude
    |   |-- Creation de salhead/salline depuis projline
    |   |-- Mise a jour phstatus (converti)
    |
    |-- wf_convert2item() : conversion en article (creation fiche)
    |
    v
Tables mises a jour :
    - salhead : INSERT (nouvelle commande)
    - salline : INSERT (lignes depuis projline)
    - projhead : UPDATE phstatus
```

### Impression et offres

```
w_devis
    |-- wf_tech_print() : impression technique (detail nomenclature/gamme)
    |-- wf_comm_print() : impression commerciale (devis client)
    |-- wf_dviln_tech_print() : impression technique par ligne
    |-- wf_dviln_word_print() : export Word
    |-- wf_word_reprint() : re-impression Word
    |
    |-- wf_offer_launch() : lancement d'une offre commerciale
    |-- wf_actual_offer() : actualisation de l'offre
    |-- wf_offerctrl() : controle de l'offre
```

### Archivage et reactivation

```
w_devis
    |-- wf_archive() : archivage du devis (passe en inactif)
    |-- wf_projreactivate() : reactivation d'un devis archive
    |
    v
Tables mises a jour :
    - projhead : UPDATE phactiv / phstatus
```

---

## Flux : Services et SAV (srvcentity / srvccycle / srvcrqhead)

### Configuration des entites

```
w_srvcentity_update
    |-- secode (code equipement), sename (nom), seloc (localisation)
    |-- seactiv : actif (O/N)
    |-- wf_inputok() → validation
    |
    v
Tables mises a jour :
    - srvcentity : INSERT/UPDATE
```

### Configuration des cycles de maintenance

```
w_srvccycle (liste des cycles)
    |-- wf_refresh_srvc() : affichage
    |-- wf_filter() : filtrage par type, entite, famille
    |
    v
w_srvccycle_update (creation/modification)
    |-- scentity : entite concernee
    |-- scname, scdesc : nom et description
    |-- sctype : type de cycle
    |-- sctypfreq : type de frequence (J=jours, S=semaines, M=mois, A=annees)
    |-- scfreq : valeur de frequence
    |-- scmethod : methode de calcul
    |-- scmatcost, sclabcost, scothcost : couts previsionnels
    |-- scleadt : delai de prevenance (jours)
    |-- scnextdat : prochaine date planifiee
    |-- wf_inputok() → validation
    |-- wf_monitoring() : mode monitoring (article associe)
    |
    v
Tables mises a jour :
    - srvccycle : INSERT/UPDATE
```

### Generation des demandes d'intervention

#### Generation periodique (automatique)

```
w_srvctask
    |-- wf_generation_periodique()
    |   |-- Parcours des cycles actifs (srvccycle)
    |   |-- Si scnextdat <= aujourd'hui + scleadt :
    |   |   |-- Creation srvcrqhead (INSERT)
    |   |   |-- Copie des couts previsionnels depuis srvccycle
    |   |   |-- Mise a jour srvccycle : scflagsr='Y', scsrid=nouveau_srid
    |   |   |-- Calcul prochaine date selon sctypfreq + scfreq
    |   |
    v
Tables mises a jour :
    - srvcrqhead : INSERT (nouvelle demande)
    - srvccycle : UPDATE (scflagsr, scsrid, sclastldat, scnextdat)
```

#### Creation manuelle

```
w_srvctask_update (mode creation)
    |-- srtype : type d'intervention
    |-- srentity : entite concernee
    |-- srname, srdesc : nom et description
    |-- srreqdat : date demandee
    |-- wf_inputok() → validation
    |
    v
Tables mises a jour :
    - srvcrqhead : INSERT (srcreatyp = mode manuel)
```

#### Creation depuis reference (cycle)

```
w_srvc_sel_taskref
    |-- Selection d'un cycle de reference (srvccycle)
    |
    v
INSERT INTO srvcrqhead :
    - srscid = cycle selectionne
    - copie des couts depuis srvccycle (scmatcost, sclabcost, scothcost)
    |
    v
UPDATE srvccycle :
    - scflagsr = 'Y'
    - scsrid = nouveau srid
    - sclastldat = scnextdat
```

### Saisie des couts d'intervention

```
w_srvctask_report (vue globale des couts)
    |-- wf_refresh_costmat() : couts matieres
    |-- wf_refresh_costlab() : couts main-d'oeuvre
    |-- wf_refresh_costoth() : couts autres
    |
    v
w_srvctask_report_update (saisie detail)
    |
    |-- Matieres (wf_inputok_costmat) :
    |   srvcrqmat : smitem, smqtyorig, smqtyreal, smcost
    |   wf_update_stock() : sortie de stock associee
    |   wf_showlot() : selection du lot
    |
    |-- Main-d'oeuvre (wf_inputok_costlab) :
    |   srvcrqlab : sllabid, slqtyorig, slqtyreal, slcost
    |
    |-- Autres frais (wf_inputok_costoth) :
    |   srvcrqoth : sodesc, socost
    |
    v
Tables mises a jour :
    - srvcrqmat : INSERT/UPDATE (matieres consommees)
    - srvcrqlab : INSERT/UPDATE (heures travaillees)
    - srvcrqoth : INSERT/UPDATE (frais divers)
    - stocks/histostock : UPDATE (si sortie de stock)
```

### Cloture d'une intervention

```
w_srvctask
    |-- wf_close_task()
    |   |-- Verification des saisies de couts
    |   |
    |   v
    |   w_srvc_close_realdate (saisie date de realisation)
    |   |
    |   v
    |   UPDATE srvcrqhead :
    |       srstatus = '8' (cloture)
    |       srmatcost = SUM(srvcrqmat.smcost)
    |       srlabcost = SUM(srvcrqlab.slcost)
    |       srothcost = SUM(srvcrqoth.socost)
    |       srrealdat = date de realisation
    |       srenddat = aujourd'hui
    |       srendusr = utilisateur courant
    |   |
    |   v
    |   Recalcul prochaine date du cycle :
    |   SELECT srvccycle.sctypfreq, scfreq
    |   Calcul scnextdat selon :
    |       'D' (jours) : + scfreq jours
    |       'W' (semaines) : + scfreq * 7 jours
    |       'M' (mois) : + scfreq mois
    |       'Y' (annees) : + scfreq annees
    |   UPDATE srvccycle : scnextdat, sclastrdat, scflagsr='N'
    |
    |-- wf_cancel_task() : annulation (alternative a la cloture)
```

---

## Couts et budget

### Budget dossier/affaire (filehead)

Le budget du dossier est structure en trois composantes :

| Composante | En-tete (filehead) | Ligne (fileline) | Description |
|-----------|-------------------|-------------------|-------------|
| Matieres | `fhbudgetmat` | `flbudgetmat` | Budget matieres premieres et fournitures |
| Main-d'oeuvre | `fhbudgetlabour` | `flbudgetlabour` | Budget heures de travail |
| Autres | `fhbudgetother` | `flbudgetother` | Budget frais divers |
| **Total** | **`fhbudget`** | **`flbudget`** | **Budget total** |

La fonction `wf_fill_projectbudget()` dans `w_file_update` consolide les budgets des lignes vers l'en-tete, et `wf_update_budget()` met a jour les totaux.

### Chiffrage devis (projhead / projvrsn)

Le chiffrage est calcule a deux niveaux :

**Niveau version (projvrsn)** — totaux consolides :
- `pvpurval` / `pvsalval` : valeur totale achat / vente
- `pvrampurval` / `pvramsalval` : valeur matieres achat / vente
- `pvlabpurval` / `pvlabsalval` : valeur main-d'oeuvre achat / vente
- `pvmacpurval` / `pvmacsalval` : valeur machines achat / vente
- `pvothsalval` / `pvothpurval` : valeur autres achat / vente

**Niveau ligne (projline)** — detail par poste :
- `plcostmat` : cout matieres
- `plcostlab` : cout main-d'oeuvre
- `plcostoth` : cout autres
- `plsalcost` : prix de vente

**Majorations appliquees** (depuis projhead ou projvrsn) :
- `phupmat` / `pvupmat` : majoration matieres (%)
- `phuplab` / `pvuplab` : majoration main-d'oeuvre (%)
- `phupoth` / `pvupoth` : majoration autres (%)
- `phupglob` / `pvupglob` : majoration globale (%)

### Couts SAV (srvcrqhead)

Les couts d'intervention sont calcules par sommation des lignes de detail :
- `srmatcost` = SUM(`srvcrqmat.smcost`) — total matieres
- `srlabcost` = SUM(`srvcrqlab.slcost`) — total main-d'oeuvre
- `srothcost` = SUM(`srvcrqoth.socost`) — total autres

Le calcul est effectue lors de la cloture (`wf_close_task`) avec des sous-requetes SQL directes.

---

## Points d'attention

### Dossiers/Affaires

- **Lien entre dossier et commandes** : le rattachement des commandes de vente se fait via `salline.slfileref = fhcode`. Ce champ est saisi sur la ligne de commande client.
- **Le dossier est un hub de consolidation** : il ne cree pas de commandes lui-meme, il agglomere les informations provenant des modules vente, achat, fabrication et stock.
- **Creation de documents depuis le dossier** : la fonction `wf_doc_create(as_drmod)` dans `w_file_update` permet de creer des documents (commandes, ...) directement depuis le contexte du dossier.
- **Drag & Drop** : `w_file_update` supporte le glisser-deposer (`dragdrop` event) pour reorganiser les lignes via `rowschanging()`.
- **Avancement** : chaque saisie d'avancement (`fileprogress`) est historisee. Le champ `fhprogress` de `filehead` contient la derniere valeur.
- **Jalons** : les jalons sont stockes dans une table `jalons` (jafileref = fhcode). Ils peuvent etre copies entre dossiers via `wf_copyjalons()`.
- **Onglets conditionnels** : `wf_ong_visibility()` controle la visibilite des onglets selon le contexte (droits, type de dossier).

### Devis/Projets techniques

- **Multi-versions** : chaque devis (projhead) peut avoir N versions (projvrsn). Chaque version est un chiffrage complet independant.
- **Lien devis-dossier** : `projhead.phfilehead` lie le devis a un dossier/affaire. Ce lien est optionnel.
- **Groupes de devis** (`devgroup`) : les lignes de devis peuvent etre regroupees par categorie pour une presentation structuree.
- **Lignes optionnelles** : `projvrsn.pvoptional` et `projaux.paoptional` permettent de marquer des elements comme optionnels dans le devis.
- **Conversion en commande** : `wf_convert2order()` est l'operation critique qui transforme un devis valide en commande de vente. Verifie le statut avant conversion.
- **Detail technique** (`projdetail`) : permet une arborescence multi-niveau (`pdlevel`, `pdparentline`) pour decomposer un devis en nomenclature/gamme.
- **Integration CRM** : le devis apparait dans l'onglet `tabpage_projhead` de la fiche societe CRM (`w_crm_company_detail`), filtre par `projhead_phadid`.
- **Parametrage systeme** : le parametre `projvrsn` est gere dans `w_param_sys` pour la configuration globale.

### Services/SAV

- **Generation periodique** : la fonction `wf_generation_periodique()` dans `w_srvctask` cree automatiquement les demandes d'intervention a partir des cycles de maintenance dont `scnextdat` est atteinte.
- **Calcul de prochaine date** : apres cloture, la prochaine date est calculee selon le type de frequence (`sctypfreq`) et la valeur (`scfreq`).
- **Couts consolides a la cloture** : les couts (`srmatcost`, `srlabcost`, `srothcost`) sont recalcules par SUM sur les tables de detail lors de la cloture (statut '8').
- **Sortie de stock** : lors de la saisie de matieres dans `w_srvctask_report_update`, la fonction `wf_update_stock()` peut declencher une sortie de stock.
- **Monitoring** : les fenetres `w_srvctask_update` et `w_srvccycle_update` supportent un mode monitoring (`wf_monitoring()`) lie a un article.
- **Lot associe** : `srvcrqhead.srlot` et `srvccycle.sclot` permettent d'associer un lot/numero de serie a l'intervention.

### Integration inter-modules

- **Dossier → Vente** : `salline.slfileref = fhcode` rattache une ligne de commande a un dossier
- **Dossier → Achat** : `purghead.phfilehead` rattache une commande d'achat
- **Dossier → Facture** : `invoicehead` et `invoiceline` referent `filehead`
- **Dossier → Stock** : `w_transact_proj` est une fenetre de transaction stock specifique aux projets
- **Devis → Dossier** : `projhead.phfilehead` lie un devis a un dossier
- **Devis → CRM** : integration dans la fiche societe CRM via `tabpage_projhead`
- **Devis → Commande** : `wf_convert2order()` transforme le devis en commande de vente
- **Service → Stock** : `wf_update_stock()` dans `w_srvctask_report_update` pour les sorties de matieres
- **Code-barres → Dossier** : `w_bcd_tictrl3` lit `filehead/fileline` pour associer des operations de pointage a un dossier

---

## Recherche rapide

| Je cherche... | Ou regarder |
|--------------|-------------|
| Liste des dossiers/affaires | `w_files` (actifs) / `w_files_histo` (historises) |
| Creer/modifier un dossier | `w_file_update` / table `filehead` |
| Lignes d'un dossier | `w_fileline_update` / table `fileline` |
| Familles de dossiers | `w_filefamily_update` / table `filefamily` |
| Avancement d'un dossier | `w_fileprogress_update` / table `fileprogress` |
| Rapport consolide projet | `w_files_report` / DataWindow `d_files_report` |
| Selection d'un dossier (DDDW) | DataWindow `dd_file_sel` (fhcode / fhdesc) |
| Budget du dossier | `filehead.fhbudget*` + `fileline.flbudget*` / `wf_fill_projectbudget()` |
| Activites/temps du dossier | `w_file_actvar` / `w_file_actvar_auto` |
| Actions/appels du dossier | `w_calls` / `w_calls2` |
| Jalons du dossier | `w_file_update` onglet jalons / table `jalons` |
| Conditions du dossier | `w_file_update` : `wf_createcondhead()`, `wf_modifycondhead()` |
| Commandes vente du dossier | `salline.slfileref = fhcode` |
| Commandes achat du dossier | `purghead.phfilehead = fhcode` |
| Fabrication du dossier | `mfghead` lie au dossier |
| Transaction stock projet | `w_transact_proj` (module `_stock`) |
| Operations fichier stock dossier | `fileAJ` / `filetoAJ_line` / `fileMFG` / `filetoreceptMFG_line` |
| Allocations stock dossier | `filetoallocate` / `filetoallocate_line` |
| Liste des devis | `w_devis` (module `_devis`) |
| Creer/modifier un devis | `w_devis_update` / table `projhead` |
| Versions d'un devis | Table `projvrsn` (pvphid, pvcode) |
| Lignes d'un devis | Table `projline` (plphid, plpvid, plcode) |
| Matieres d'un devis | Table `projmat` (pmphid, pmpvid, pmplid, pmcode) |
| Main-d'oeuvre d'un devis | Table `projlab` (pbphid, pbpvid, pbplid, pbcode) |
| Dimensions d'un devis | Table `projsize` |
| Detail technique (nomenclature) | Table `projdetail` (arborescence multi-niveau) |
| Etapes/jalons du devis | Table `projstep` (psphid, pscode) |
| Lignes auxiliaires du devis | Table `projaux` (frais divers) |
| Facturation par etape | Table `projinvlin` (plinvpc, plinvoiced) |
| Groupes de devis | Table `devgroup` (dgpvhid, dgcode) |
| Convertir devis en commande | `w_devis.wf_convert2order()` |
| Devis archives | `w_devis_archived` |
| Devis dans CRM | `w_crm_company_detail` onglet `tabpage_projhead` |
| Liste des equipements SAV | `w_srvcentity_update` / table `srvcentity` |
| Cycles de maintenance | `w_srvccycle` / `w_srvccycle_update` / table `srvccycle` |
| Demandes d'intervention | `w_srvctask` / table `srvcrqhead` |
| Creer une intervention | `w_srvctask_update` |
| Couts d'une intervention | `w_srvctask_report` / `w_srvctask_report_update` |
| Matieres consommees SAV | Table `srvcrqmat` (smitem, smqtyreal, smcost) |
| Heures main-d'oeuvre SAV | Table `srvcrqlab` (sllabid, slqtyreal, slcost) |
| Autres frais SAV | Table `srvcrqoth` (sodesc, socost) |
| Cloture intervention | `w_srvctask.wf_close_task()` → `srstatus = '8'` |
| Generation periodique SAV | `w_srvctask.wf_generation_periodique()` |
| Prochaine maintenance | `srvccycle.scnextdat` |
