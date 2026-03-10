# Domaine : FABRICATION (Manufacturing)

## Vue d'ensemble

La fabrication dans PmiGest ERP (PMIX) couvre le cycle complet de production : definition des nomenclatures (BOM) et gammes operatoires, creation et lancement des ordres de fabrication (OF), suivi d'avancement des operations en atelier, declarations de production (entrees en stock), et cloture avec calcul des ecarts. Trois modules principaux collaborent :

- **`_manufg`** (188 objets) : module central de fabrication — 53 fenetres, 104 DataWindows, 9 NVO, 15 fonctions globales, 3 structures, 4 menus. Gere les ordres de fabrication, le lancement, le suivi MES, les lots de fabrication, les couts et la cloture.
- **`_methods`** (116 objets) : nomenclatures et gammes operatoires — 29 fenetres, 62 DataWindows, 5 NVO, 16 fonctions globales, 3 structures, 1 menu. Definit les structures produits (BOM), les sequences d'operations (gammes), les co-produits et les tests qualite.
- **`_planning`** (102 objets) : planification et ordonnancement — calcul des besoins nets (CBN/MRP), generation automatique d'ordres planifies, ordonnancement avance.

Le flux fabrication interagit avec les modules stock (`_stock`, `_stkbarcod` pour les declarations terrain par codes-barres), ventes (`_sales` pour les commandes declenchant des besoins) et achats (`_purch` pour les composants manquants).

---

## Tables principales

### Tables des ordres de fabrication

| Table | Role | Colonnes cles | FK vers |
|-------|------|---------------|---------|
| **mfghead** | En-tete ordre de fabrication (OF) | `mhcode` (PK), `mhstatus`, `mhitem`, `mhreqqty`, `mhrelqty`, `mhmfgqty`, `mhreldat`, `mhreqdat` | `items`, `adresses` |
| **mfgwcreqs** | Operations de l'OF (demandes sur postes de charge) | `mwcode`, `mwline` (PK composite), `mwwccode`, `mwreqmac`, `mwreqlab`, `mwreamac`, `mwrealab` | `workcenters`, `adresses` |
| **mfglallocs** | Allocations de matieres de l'OF | `mlcode`, `mlitemseq`, `mlline` (PK composite), `mlstatus`, `mlitem`, `mlbomqty`, `mllallocqty`, `mlissuedqty` | `items`, `mfghead` |
| **mfgcoitem** | Co-produits de l'OF | `mccode`, `mcitem` (PK composite), `mcreqty`, `mcmfgqty`, `mclotmfg`, `mccostf` | `items`, `mfghead` |
| **mfgcosts** | Couts de fabrication par operation | `mccode`, `mctype`, `mcseq` (PK composite), `mcitem`, `mcqalloc`, `mcqreal`, `mcvalloc`, `mcvreal` | _(aucune documentee)_ |
| **mfghbatch** | En-tete lots de fabrication (batch) | `mhmhcode`, `mhline` (PK composite), `mhinmodif`, `mhqtybatchexpect` | `mfghead` |
| **mfglbatch** | Lignes lots de fabrication | `mlmhcode`, `mlline`, `mlitemseq` (PK composite), `mlqtyissue` | `mfglallocs` |
| **mfgwcreject** | Rebuts par operation de l'OF | `mrcode`, `mrline`, `mrtype` (PK composite), `mrcoeff`, `mrum`, `mrqty` | _(aucune documentee)_ |
| **mfgwctests** | Tests qualite par operation de l'OF | `wtcode`, `wtline`, `wttest`, `wtidreplicat` (PK composite), `wtidtest`, `wtdesc`, `wtnval`, `wtbval` | _(aucune documentee)_ |
| **mfgxtracost** | Couts supplementaires de l'OF | `mxcode`, `mxline` (PK composite), `mxdesc`, `mxtype`, `mxval`, `mxcostval` | _(aucune documentee)_ |
| **mfgwcreqs_advsc** | Ordonnancement avance des operations | `maid` (PK), `mamwcode`, `mamwline`, `mamachine`, `mastart`, `maduration`, `matype` | `machine`, `mfgwcreqs` |
| **mfgcoitemsal** | Lien co-produits / commandes clients | `msmhcode`, `msitem`, `mssalhead`, `mssalline`, `msqty` | `items`, `salline` |

### Tables des nomenclatures (BOM)

| Table | Role | Colonnes cles | FK vers |
|-------|------|---------------|---------|
| **bomhead** | En-tete nomenclature | `bhcode`, `bhtype` (PK composite), `bhcoeff`, `bhactiv`, `bhramval`, `bhmacval`, `bhlabval`, `bhyield` | `items`, `adresses` |
| **bomline** | Lignes nomenclature (composants) | `blcode`, `bltype`, `blline` (PK composite), `blramcode`, `blramqty`, `blramval`, `blscrap` | `bomhead`, `items` |
| **bomcoitem** | Co-produits de nomenclature | `bccode`, `bctype`, `bccoitem` (PK composite), `bcqtyf`, `bccostf`, `bcnqualf` | `bomhead`, `items` |
| **bomxtra** | Donnees supplementaires nomenclature | `bxcode`, `bxtype`, `bxline` (PK composite), `bxdesc`, `bxxtrtype`, `bxxtrval` | _(aucune)_ |
| **bomaudit** | Audit/historique des modifications BOM | `babhcode`, `babhtype`, `balncode`, `batyp`, `baline`, `badate` (PK composite), `bauser`, `baaction` | _(aucune)_ |
| **bomright** | Droits d'acces aux nomenclatures par utilisateur | `bruser`, `britem`, `brtype` (PK composite), `brright`, `brmanufrep`, `brmanufclot` | _(aucune)_ |

### Tables des gammes operatoires (Routing)

| Table | Role | Colonnes cles | FK vers |
|-------|------|---------------|---------|
| **routline** | Lignes gamme (operations) | `rlcode`, `rltype`, `rlline` (PK composite), `rlwccode`, `rlmacrun`, `rllabrun`, `rlsetup`, `rloper` | `adresses` |
| **routjal** | Jalons de gamme (prix par palier) | `rjcode_item`, `rjcode`, `rjminqty` (PK composite), `rjprice` | _(aucune documentee)_ |
| **routreject** | Types de rebuts gamme | `rrcode`, `rrtype` (PK composite), `rrcoeff`, `rrum` | _(aucune documentee)_ |
| **routtest** | Tests qualite definis dans la gamme | `rtcode`, `rtline`, `rtidtest` (PK composite), `rtseq`, `rtdesc`, `rtnval_min`, `rtnval_max`, `rtreplicat` | _(aucune documentee)_ |
| **routline_nomachine** | Exclusion de machines par operation | `rmrlcode`, `rmrltype`, `rmrlline`, `rmmcid` (PK composite), `rmallow` | `machine`, `routline` |

### Tables des postes de charge, machines et operateurs

| Table | Role | Colonnes cles | FK vers |
|-------|------|---------------|---------|
| **workcenters** | Postes de charge (centres de travail) | `wccode` (PK), `wcname`, `wcactiv`, `wccost`, `wccal`, `wccrit`, `wcmonday`..`wcsunday` | `calhead` |
| **machine** | Machines de production | `mcid` (PK), `mcode`, `mcname`, `mcpriority`, `mcactiv`, `mccells`, `mccal` | `calhead`, `CELLS`, `hourly` |
| **CELLS** | Cellules de production | `clid` (PK), `clname`, `clactiv` | _(aucune)_ |
| **workers** | Operateurs/employes de production | `wkcode` (PK), `wkactiv`, `wkname`, `wkpswrd`, `wkwc`, `wktyp`, `wkcost`, `wkcell` | `CELLS` |

### Tables de gestion des matieres

| Table | Role | Colonnes cles | FK vers |
|-------|------|---------------|---------|
| **matallocs** | Allocations de matieres (reservations stock) | `matyp`, `macode`, `maitemseq`, `maallocseq` (PK composite), `maitem`, `malot`, `maloc`, `maallocqty`, `maissuedqty` | `items`, `locations` |
| **matreq** | Besoins en matieres (calcul MRP) | `mritem`, `mrreqdat`, `mrorigin`, `mrqty`, `mrrun` (PK composite) | `items` |

---

## Colonnes cles de mfghead (en-tete OF)

### Identification et statut

| Colonne | Type | Description |
|---------|------|-------------|
| `mhcode` | numeric(6) | **Numero de l'OF** — cle primaire, identifiant unique |
| `mhstatus` | char(1) | **Statut de l'OF** — cycle de vie de l'ordre |
| `mhitem` | char(20) | **Code article fabrique** — FK vers `items.itcode` |
| `mhitemseq` | numeric(4) | Sequence article (variante) |
| `mhtype` | char(1) | Type d'OF (standard, sous-traitance, etc.) |
| `mhbomtyp` | char(1) | Type de nomenclature utilisee |
| `mhblocked` | char(1) | OF bloque (oui/non) |
| `mhdecla` | char(1) | Mode de declaration |
| `mhfabdvrg` | char(1) | Fabrication divergente |

### Quantites

| Colonne | Type | Description |
|---------|------|-------------|
| `mhreqqty` | numeric(12,3) | **Quantite demandee/requise** |
| `mhrelqty` | numeric(12,3) | **Quantite lancee** (released) |
| `mhmfgqty` | numeric(12,3) | **Quantite fabriquee** (declaree) |
| `mhmfgcostqty` | numeric(12,4) | Quantite pour calcul du cout de fabrication |
| `mhmfgnqualqty` | numeric(12,4) | Quantite non conforme (rebuts) |
| `mhmfgqtyqty` | numeric(12,4) | Quantite declaree (double precision) |
| `mhqtybybatch` | numeric(7,2) | Quantite par lot (batch) |
| `mhqcip` | numeric(8) | Nombre de pieces controle qualite |

### Dates

| Colonne | Type | Description |
|---------|------|-------------|
| `mhreldat` | timestamp | **Date de lancement** (release date) |
| `mhreqdat` | timestamp | **Date requise** (due date) |
| `mhmfgdat` | timestamp | **Date de fabrication** (derniere declaration) |
| `mhexpdat` | timestamp | Date d'expiration (pour lot) |
| `mhclosdat` | timestamp | Date de cloture de l'OF |

### Couts

| Colonne | Type | Description |
|---------|------|-------------|
| `mhmalloc` | numeric(11,2) | **Cout matieres alloue** (previsionnel) |
| `mhmreal` | numeric(11,2) | **Cout matieres reel** (consomme) |
| `mhlalloc` | numeric(11,2) | **Cout main-d'oeuvre alloue** |
| `mhlreal` | numeric(11,2) | **Cout main-d'oeuvre reel** |
| `mhealloc` | numeric(11,2) | **Cout equipement alloue** |
| `mhereal` | numeric(11,2) | **Cout equipement reel** |
| `mhmfgcost` | numeric(12,4) | Cout total de fabrication |

### Liens et references

| Colonne | Type | Description |
|---------|------|-------------|
| `mhsalhead` | numeric(6) | Lien vers en-tete commande client |
| `mhsalline` | numeric(4) | Lien vers ligne commande client |
| `mhpghid` | numeric(6) | Lien vers planning (en-tete) |
| `mhpgline` | numeric(4) | Lien vers planning (ligne) |
| `mhlotmfg` | char(30) | Numero de lot fabrique |
| `mhlotprt` | char(20) | Lot parent |
| `mhprint` | char(1) | Flag impression |
| `mhsubc` | char(1) | Sous-traitance |
| `mhcustof` | numeric(6) | OF client (custom) |
| `mhfileref` | numeric(4) | Reference fichier |
| `mhfileline` | numeric(4) | Ligne fichier |
| `mhrefint` | varchar(60) | Reference interne |
| `mhcmntrel` | long varchar | Commentaire de lancement |
| `mhpaid` | numeric(12) | Identifiant paye/prestation |
| `mhmcdomaker` | varchar(10) | Fabricant multi-company |
| `mhdlcmp` | numeric(1) | DLC composant |

---

## Colonnes cles de mfgwcreqs (operations OF)

### Identification

| Colonne | Type | Description |
|---------|------|-------------|
| `mwcode` | numeric(6) | **Numero de l'OF** — FK vers `mfghead.mhcode` |
| `mwline` | numeric(4) | **Numero de ligne/operation** |
| `mwwccode` | char(8) | **Code poste de charge** — FK vers `workcenters.wccode` |
| `mwoper` | char(60) | Description de l'operation |
| `mwtask` | char(4) | Code tache |
| `mwtype` | char(1) | Type d'operation |

### Temps prevus et reels

| Colonne | Type | Description |
|---------|------|-------------|
| `mwreqmac` | decimal(20,12) | **Temps machine prevu** (required) |
| `mwreqlab` | decimal(20,12) | **Temps main-d'oeuvre prevu** |
| `mwreamac` | decimal(20,12) | **Temps machine reel** (realise) |
| `mwrealab` | decimal(20,12) | **Temps main-d'oeuvre reel** |
| `mw2rpmac` | numeric(20,12) | Temps machine restant a pointer |
| `mw2rplab` | decimal(20,12) | Temps main-d'oeuvre restant a pointer |

### Planification

| Colonne | Type | Description |
|---------|------|-------------|
| `mwstartdat` | timestamp | **Date debut prevue** |
| `mwstopdat` | timestamp | **Date fin prevue** |
| `mwstarthour` | time | Heure de debut |
| `mwendhour` | time | Heure de fin |
| `mwoffset` | numeric(6,2) | Decalage (offset) en jours |

### Avancement et quantites

| Colonne | Type | Description |
|---------|------|-------------|
| `mwfinish` | char(1) | **Operation terminee** (oui/non) |
| `mwdatefinish` | timestamp | Date de fin effective |
| `mwcoeff` | numeric(12,4) | Coefficient de l'operation |
| `mwqty` | numeric(12,3) | Quantite produite sur cette operation |
| `mwum` | char(20) | Unite de mesure |
| `mwnbr` | numeric(2) | Nombre d'operateurs |
| `mwresponsable` | char(50) | Responsable de l'operation |

### Controle et blocage

| Colonne | Type | Description |
|---------|------|-------------|
| `mwctrl` | char(1) | Controle requis |
| `mwblocmes` | char(1) | Blocage mesure (test qualite bloquant) |
| `mwblocqty` | char(1) | Blocage quantite |
| `mwstartdatestep` | timestamp | Date de debut d'etape |
| `mwstartuserstep` | varchar(8) | Utilisateur ayant demarre l'etape |
| `mwsubc` | char(1) | Sous-traitance sur cette operation |
| `mwsuppid` | varchar(10) | Fournisseur sous-traitant |
| `mwadvscsort` | integer | Ordre de tri ordonnancement avance |

---

## Objets PB cles

### Fenetres principales — Module `_manufg`

| Fenetre | Ancetre | Description | Fonctions cles |
|---------|---------|-------------|----------------|
| `w_launchorder` | `w_response` | **Lancement des OF** — ecran principal de creation d'OF depuis planning ou manuellement | `launchplannedorder()`, `launchmanualorder()`, `createplorder()`, `printorder()` |
| `w_launchorder_multi` | `w_response` | Lancement multi-selection d'OF | `filteritem()` |
| `w_launchorder_group` | `w_response` | Lancement par groupes d'OF | `launchgroup()`, `launchgroupin1()`, `calclineload()`, `load_group_mfg()` |
| `w_launchorder_group_line` | `w_response` | Detail d'un OF dans un groupe | `launchwithcheck()`, `allocateram()`, `allocateresource()`, `prepare_ram()`, `update_coitems()` |
| `w_launchorder_adapt` | `w_response` | Adaptation des quantites de lancement | `adapt_total()`, `adaptreq()`, `adapt_choice()` |
| `w_mfghorder_update` | `w_response` | Mise a jour de l'en-tete de l'OF | Utilise `nvo_of_launch`, gestion des lots et co-produits |
| `w_mfgwc_update` | `w_response` | Mise a jour des operations (postes de charge) de l'OF | `wclineinputok()`, `wf_mfgwctests_insert()`, `wf_mfgwcreject_insert()` |
| `w_mfgorder_report` | `w_response` | **Rapport de l'OF** — declaration production, suivi matieres, cloture | `savetr_dlmo()`, `savetr_rtmo()`, `mat_refresh()`, `wf_cb_cloture()`, `wf_rcmo_detail()` |
| `w_mfgorder_close` | `w_response` | **Cloture de l'OF** — validation finale, calcul des ecarts | `checkapproval()`, `doc_refresh()`, utilise `nvo_mfgreport` |
| `w_mfgorder_close_sel` | `w_response` | Selection d'OF pour cloture | `filteritem()`, `refresh()` |
| `w_mfgorder_closebydate` | `w_response` | Cloture par date (cloture en masse) | `wf_close_of()` |
| `w_mfg_batch` | `w_response` | Lots de fabrication (batch) | Utilise `struct_batch` |
| `w_mfg_prep_byfiles` | `w_response` | Preparation fabrication par dossiers/fichiers | `wf_init_type()` |
| `w_mfg_linkallocwcreq` | `w_response` | Lien entre allocations et operations | `wf_addlink()`, `wf_dellink()`, `wf_checklink()` |
| `w_mfgorder_label` | `w_response` | Impression d'etiquettes de fabrication | `wf_win_print()`, `loadstdlabel()`, `loadmodlabel()` |
| `w_mfgbomrout_sel` | `w_response` | Selection nomenclature/gamme pour l'OF | _(selection de type BOM/gamme)_ |
| `w_mfgfinish` | `w_response` | Fin d'operation de fabrication | `wf_time_to_decimal()` |

### Fenetres MES (Manufacturing Execution System) — Module `_manufg`

| Fenetre | Description | Fonctions cles |
|---------|-------------|----------------|
| `w_mfgmes_release` | Liberation/lancement MES | `wf_release()`, `wf_choicelist()` |
| `w_mfgmes_wc` | Suivi MES par poste de charge — selection operation | `filteritem()` |
| `w_mfgmes_prod` | Ecran de production MES | _(event open)_ |
| `w_mfgmes_finish` | Fin d'etape MES — validation des quantites | `wf_test_qty()`, `wf_clot_step()`, `wf_savedw()`, `wf_updateof()` |
| `w_mfgmes_tests` | Tests qualite MES — saisie des resultats | `wf_check_wc()`, `wf_save()`, `wf_blocof()`, `wf_quarantine()`, `wf_check_ok()` |
| `w_mfgmes_testrslt` | Resultats de tests MES | `wf_validate_result()` |
| `w_mfgmes_pswrd` | Authentification operateur MES (mot de passe) | _(verification password worker)_ |

### Fenetres codes-barres — Module `_stkbarcod`

| Fenetre | Description |
|---------|-------------|
| `w_brf_mfg_report` | Declaration de production (BRF) — entree en stock RCMO |
| `w_brf_mfg_progress` | Suivi d'avancement (BRF) — declaration des quantites par operation |
| `w_brf_mfg_prepare` | Preparation de fabrication (BRF) — allocation matieres |
| `w_brf_mfg_prepare2` | Preparation fabrication variante (BRF) |
| `w_brf_mfg_picking` | Picking composants (BRF) — sortie matieres |
| `w_brf_mfg_prepare_histo` | Historique des preparations (BRF) |
| `w_brf_mfg_addsupp_wc` | Ajout operation supplementaire (BRF) |
| `w_brf_mfg_linecheck` | Verification lignes de fabrication (BRF) |
| `w_brf_mfgw_update` | Mise a jour poste de charge (BRF) |
| `w_bcd_mfg_progress` | Suivi d'avancement (BCD scanner) |
| `w_bcd_mfg_report` | Declaration production (BCD scanner) |
| `w_bcd_mfg_prepare` | Preparation fabrication (BCD scanner) |
| `w_bcd_mfg_prepare2` | Preparation fabrication variante (BCD scanner) |

### Fenetres methodes — Module `_methods`

| Fenetre | Description | Fonctions cles |
|---------|-------------|----------------|
| `w_bom_update` | Creation/modification de nomenclature | `bomlineinputok()` |
| `w_bomcoitem_update` | Mise a jour des co-produits de nomenclature | `bomcoiteminputok()` |
| `w_routing_update` | Creation/modification de gamme operatoire | `routlineinputok()`, `wf_routtest_insert()`, `wf_routreject_insert()` |
| `w_routing_copy` | Copie d'une gamme existante | _(copie de gamme)_ |
| `w_bomrout` | **Vue combinee nomenclature + gamme** — ecran central des methodes | `refresh()`, `refreshlin()`, `refreshcoitem()`, `wf_refreshcost()`, `wf_bladd()`, `wf_bldelete()` |

### Fenetres postes de charge — Module `_masters`

| Fenetre | Description | Fonctions cles |
|---------|-------------|----------------|
| `w_workcenter_update` | Mise a jour des postes de charge | `workcenterinputok()` |
| `w_workcenter_replace` | Remplacement d'un poste de charge | _(remplacement)_ |
| `w_workcenter_selection` | Selection d'un poste de charge | _(selection)_ |

### Fenetres pointage — Module `_manufg`

| Fenetre | Description |
|---------|-------------|
| `w_tictrl_wnt_param` | Parametres du pointage Windows NT |
| `w_tictrl_wnt_import` | Import des temps de pointage |
| `w_tictrl_wnt_correct` | Correction des temps pointes |
| `w_tictrl_wnt_correct_update` | Mise a jour correction pointage |
| `w_tictrl_timer` | Timer de pointage (chronometre) |
| `w_tictrl_update` | Mise a jour pointage |
| `w_tictrl_validate` | Validation des temps pointes |
| `w_tictrl_in_out` | Pointage entree/sortie operateur |
| `w_tictrl_mfg_show` | Affichage des temps fabrication |
| `w_tictrl_sel` | Selection pour pointage |
| `w_tictrl_copy_to` | Copie de pointage |

### Fenetres requetes et historiques — Module `_query`

| Fenetre | Description |
|---------|-------------|
| `w_qry_item_mfg_1it` | Historique fabrication d'un article |
| `w_qry_lot_info` | Information lot (incluant tests fabrication) |
| `w_transact_rcmo_f` | Reception fabrication (transaction stock RCMO) |

### Objets non-visuels (NVO)

| Objet | Module | Description | Fonctions cles |
|-------|--------|-------------|----------------|
| **`nvo_mfgreport`** | `_cust2` | **Logique metier des declarations** — backflush, transactions RCMO/DLMO/RTMO, allocation stock, co-produits (>5000 lignes) | `uof_save_transact_rcmo()`, `uof_make_backflush()`, `uof_stock_issue()`, `uof_check_backflush()`, `uof_autorcmo()`, `uof_nullof()` |
| **`nvo_of_launch`** | `_manufg` | **Logique de lancement des OF** — creation, allocation matieres/ressources, co-produits, sous-ordres | `uof_launch_of()`, `uof_launch_ofgrp()`, `launchwithcheck()`, `allocateram()`, `allocateresource()`, `handlecoitems()`, `createsuborder()` |
| **`nvo_mfgclot`** | `_manufg` | **Logique de cloture des OF** — cloture, calcul couts, nettoyage allocations | `uf_mfg_close()`, `uf_mfgcosting()`, `uf_cleanallocations()`, `uf_closesubpur()`, `uf_closemfgpc()` |
| **`nvo_mfg_file_import`** | `_manufg` | Import de fichiers de fabrication — import OF, execution RCMO/DLMO depuis fichier | `uof_import_file_of()`, `uof_execute_file_rcmo()`, `uof_execute_file_dlmo()` |

### DataWindows principaux

| DataWindow | Module | Role |
|------------|--------|------|
| `d_bom_update` | `_methods` | Mise a jour nomenclature |
| `d_routing_update` | `_methods` | Mise a jour gamme |
| `d_mfghead_update` | `_manufg` | Mise a jour en-tete OF |
| `d_mfgline_update` | `_manufg` | Mise a jour lignes OF |
| `d_mfg_testsshow` | `_query` | Affichage tests fabrication |
| `d_mfg_histo` | `_query` | Historique fabrication |
| `d_mfg_histo_one` | `_query` | Historique fabrication 1 article |
| `d_mfg_histograph` | `_query` | Graphique historique fabrication |
| `d_trans_rcmo_print` | `_prints_std` | Impression reception fabrication |

---

## Flux : Creation d'un OF

La creation d'un ordre de fabrication suit ce processus :

1. **Declenchement** : L'OF peut etre cree de trois manieres :
   - **Depuis le planning (MRP/CBN)** : les ordres planifies sont transformes en OF via `w_launchorder` → `launchplannedorder()`
   - **Manuellement** : creation directe via `w_launchorder` → `launchmanualorder()`
   - **Depuis une commande client** : lancement lie a une ligne de commande (`mhsalhead`, `mhsalline`)
   - **Par groupe** : lancement groupe via `w_launchorder_group` → `launchgroup()`

2. **Preparation de l'OF** : Le NVO `nvo_of_launch` orchestre la creation :
   - `uof_launch_of()` / `uof_launch_ofgrp()` : creation de l'enregistrement `mfghead`
   - Lecture de la nomenclature (`bomhead` + `bomline`) pour le type BOM selectionne
   - Application du coefficient BOM (`bhcoeff`) et du rendement (`bhyield`)
   - Generation des lignes d'allocation matieres (`mfglallocs`) via `allocateram()`

3. **Allocation des ressources** :
   - `allocateresource()` : generation des operations (`mfgwcreqs`) a partir de la gamme (`routline`)
   - Copie des temps prevus (`rlmacrun` → `mwreqmac`, `rllabrun` → `mwreqlab`)
   - Copie des tests qualite (`routtest` → `mfgwctests`)
   - Copie des types de rebuts (`routreject` → `mfgwcreject`)

4. **Gestion des co-produits** : `handlecoitems()` cree les enregistrements `mfgcoitem` depuis `bomcoitem`

5. **Sous-traitance** : Si des operations sont en sous-traitance (`rlsubc = 'Y'`), creation de sous-ordres via `createsuborder()` / `uof_createsuborder_wc()`

6. **Finalisation** :
   - Allocation du stock existant (FIFO, lots, emplacements)
   - Mise a jour des ordres planifies (`updateplanorder()`)
   - Impression optionnelle de l'OF via `printorder()`

---

## Flux : Lancement en production

Le lancement en production prepare l'OF pour l'atelier :

1. **Selection des OF a lancer** : `w_launchorder` affiche les ordres planifies et les OF existants avec filtres par article, date, type, etc.

2. **Adaptation des quantites** : `w_launchorder_adapt` permet d'ajuster les quantites entre la quantite planifiee (`iSel_PlnQty`) et la quantite de fabrication (`iSel_MfgQty`)

3. **Preparation des matieres** :
   - `w_brf_mfg_prepare` / `w_bcd_mfg_prepare` : interfaces terrain pour preparer les composants
   - Verification de la disponibilite en stock
   - Allocation des lots (FIFO, DLC) via `matallocs`
   - Picking des composants via `w_brf_mfg_picking`

4. **Preparation par lots (batch)** : `w_mfg_batch` permet de regrouper les OF en lots de fabrication (`mfghbatch`, `mfglbatch`) avec les quantites attendues par lot (`mhqtybatchexpect`)

5. **Preparation par dossiers** : `w_mfg_prep_byfiles` organise la production par reference de fichier/dossier

6. **Impression** : Impression du dossier de fabrication (OF, nomenclature, gamme) et des etiquettes via `w_mfgorder_label`

---

## Flux : Suivi de production

Le suivi de production enregistre l'avancement en temps reel :

1. **Suivi par poste de charge (MES)** :
   - `w_mfgmes_wc` : selection du poste de charge et de l'operation
   - `w_mfgmes_pswrd` : authentification de l'operateur (password worker)
   - `w_mfgmes_prod` : ecran de saisie de production
   - `w_mfgmes_finish` : fin d'etape — enregistrement des quantites produites (`wf_test_qty()`, `wf_savedw()`) et mise a jour de l'OF (`wf_updateof()`)

2. **Suivi par codes-barres** :
   - `w_brf_mfg_progress` / `w_bcd_mfg_progress` : declaration des quantites par scan
   - Controle des quantites maximales (`id_qtymax`)
   - Mise a jour des temps reels (`mwreamac`, `mwrealab`)

3. **Tests qualite en cours de production** :
   - `w_mfgmes_tests` : saisie des resultats de tests sur les operations
   - `w_mfgmes_testrslt` : validation des resultats (`wf_validate_result()`)
   - Tests bloquants (`mwblocmes`, `mwblocqty`) pouvant bloquer l'OF ou mettre en quarantaine (`wf_quarantine()`)
   - Resultats stockes dans `mfgwctests` (numeriques `wtnval`, booleens `wtbval`, texte `wttval`)

4. **Pointage des temps** :
   - `w_tictrl_wnt_param` : configuration du systeme de pointage
   - `w_tictrl_timer` : chronometre en temps reel
   - `w_tictrl_in_out` : entree/sortie des operateurs
   - `w_tictrl_validate` : validation des temps pointes
   - Les temps sont enregistres dans la table `timctrl` et importes dans l'OF via `import_tictrl()`

5. **Declaration de production (RCMO)** :
   - `w_mfgorder_report` : ecran principal de declaration — transactions RCMO (reception fabrication)
   - `w_brf_mfg_report` / `w_bcd_mfg_report` : declaration terrain par codes-barres
   - `w_transact_rcmo_f` : transaction stock de reception fabrication
   - Le NVO `nvo_mfgreport` execute la logique : `uof_save_transact_rcmo()` cree le mouvement de stock
   - **Backflush** : consommation automatique des matieres — `uof_make_backflush()`, `uof_check_backflush()`, `uof_make_backflush_fusion()`

---

## Flux : Cloture de l'OF

La cloture finalise l'OF et calcule les ecarts :

1. **Selection des OF a cloturer** :
   - `w_mfgorder_close_sel` : selection individuelle avec filtres
   - `w_mfgorder_closebydate` : cloture en masse par plage de dates (`wf_close_of()`)

2. **Verification avant cloture** :
   - `w_mfgorder_close` : ecran de cloture avec validation
   - `checkapproval()` : verification des approbations necessaires
   - Verification des operations terminees (`mwfinish`)
   - Verification des allocations restantes

3. **Calcul des couts** : Le NVO `nvo_mfgclot` orchestre la cloture :
   - `uf_mfgcosting()` : calcul des couts reels vs prevus
     - Ecart matieres : `mhmreal` vs `mhmalloc`
     - Ecart main-d'oeuvre : `mhlreal` vs `mhlalloc`
     - Ecart equipement : `mhereal` vs `mhealloc`
   - `uf_closemfgpc` : cloture du prix de revient

4. **Nettoyage** :
   - `uf_cleanallocations()` : liberation des allocations non consommees
   - `uf_closesubpur()` : cloture des commandes de sous-traitance liees
   - `uof_checkfor_rebilling()` : verification de refacturation eventuelle

5. **Finalisation** :
   - Mise a jour du statut `mhstatus` (cloture)
   - Mise a jour de `mhclosdat` (date de cloture)
   - `uf_mfg_close()` : point d'entree principal de la cloture complete (avec options impression et backflush final)

---

## Nomenclatures (BOM)

Les nomenclatures definissent la structure des produits fabriques :

### Structure

- **En-tete** (`bomhead`) : identifie par le code article (`bhcode`) et le type (`bhtype`). Un article peut avoir plusieurs nomenclatures de types differents.
- **Lignes** (`bomline`) : composants necessaires avec quantites (`blramqty`), taux de rebut (`blscrap`), dates de validite (`blstartdat`, `blstopdat`), et lien optionnel vers une operation de la gamme (`blroutline`).
- **Co-produits** (`bomcoitem`) : articles secondaires generes pendant la fabrication, avec quantites (`bcqtyf`) et repartition des couts (`bccostf`).
- **Couts extra** (`bomxtra`) : couts supplementaires non lies aux matieres/operations.

### Proprietes cles

| Propriete | Colonne | Description |
|-----------|---------|-------------|
| Coefficient | `bhcoeff` | Multiplicateur de quantite (ex: 1.05 pour inclure les pertes) |
| Rendement | `bhyield` | Rendement en % (ex: 95% = 5% de perte) |
| Sous-traitance | `bhsubc`, `bhsuppid` | Nomenclature sous-traitee avec code fournisseur |
| Valorisation | `bhramval`, `bhmacval`, `bhlabval` | Valeurs matieres, machine, main-d'oeuvre |
| Rollup | `bhrlupramval`, `bhrlupmacval`, `bhrluplabval` | Cumul des couts multi-niveaux |
| Declaration | `bhdecla` | Mode de declaration de production |
| Fabrication divergente | `bhfabdvrg` | Permet la fabrication divergente |
| Auto RCMO | `bhautorcmo` | Reception automatique en stock |
| Droits | `bhbomright` | Controle d'acces a la nomenclature |

### Audit et securite

- **Audit** (`bomaudit`) : traçabilite des modifications avec utilisateur (`bauser`), action (`baaction`), date (`badate`) et commentaire.
- **Droits** (`bomright`) : controle d'acces par utilisateur/article/type — droits sur rapport de fabrication (`brmanufrep`), cloture (`brmanufclot`), creation (`brmancreate`).

### Fenetre principale

`w_bomrout` (module `_methods`) est l'ecran central de gestion des methodes. Il affiche la vue combinee nomenclature + gamme pour un article donne, permettant :
- Ajout/suppression de composants (`wf_bladd()`, `wf_bldelete()`)
- Gestion des co-produits (`refreshcoitem()`, `coitem_delete()`)
- Visualisation des couts (`wf_refreshcost()`)
- Gestion des couts extra (`wf_refreshextra()`, `wf_extra_delete()`)
- Articles fantomes (`wf_replace_fantome()`)
- Gestion de l'article principal (`wf_main_managing()`)

---

## Gammes operatoires (Routing)

Les gammes definissent les sequences d'operations pour fabriquer un article :

### Structure

- **Lignes d'operations** (`routline`) : chaque operation identifiee par code article (`rlcode`), type (`rltype`), et numero de ligne (`rlline`). Liee a un poste de charge (`rlwccode`).

### Proprietes cles par operation

| Propriete | Colonne | Description |
|-----------|---------|-------------|
| Poste de charge | `rlwccode` | Code du centre de travail |
| Temps machine | `rlmacrun` | Temps machine par unite (decimal 20,12 pour precision) |
| Temps MOD | `rllabrun` | Temps main-d'oeuvre par unite |
| Reglage | `rlsetup` | Temps de reglage (setup) fixe |
| MOD fixe | `rllabfix` | Temps main-d'oeuvre fixe |
| Decalage | `rloffset` | Decalage en jours par rapport au debut |
| Operation | `rloper` | Description de l'operation (60 car.) |
| Tache | `rltask` | Code tache |
| Coefficient | `rlcoeff` | Coefficient multiplicateur |
| Unite | `rlum` | Unite de mesure de l'operation |
| Sous-traitance | `rlsubc`, `rlsuppid` | Operation sous-traitee avec code fournisseur |
| Controle | `rlctrl` | Controle qualite requis |
| Test | `rltest` | Lien vers definition de test |
| Blocage mesure | `rlblocmes` | Test bloquant la mesure |
| Blocage quantite | `rlblocqty` | Test bloquant la quantite |
| Valeur machine | `rlmacval` | Cout machine calcule |
| Valeur MOD | `rllabval` | Cout main-d'oeuvre calcule |

### Donnees associees

- **Jalons** (`routjal`) : prix de sous-traitance par palier de quantite (`rjminqty`, `rjprice`)
- **Types de rebut** (`routreject`) : coefficients de rebut par type (`rrcoeff`, `rrum`)
- **Tests qualite** (`routtest`) : tests a effectuer sur l'operation, avec valeurs min/max (`rtnval_min`, `rtnval_max`), replicats (`rtreplicat`, `rtreplicatqty`), et blocage (`rtbloc`)
- **Exclusion machines** (`routline_nomachine`) : machines autorisees/interdites pour une operation (`rmallow`)

### Fenetre principale

`w_routing_update` (module `_methods`) permet la creation et modification des gammes :
- Verification de coherence (`routlineinputok()`)
- Gestion de la sequence des operations (`wf_line_seq()`)
- Ajout/suppression de tests qualite (`wf_routtest_insert()`, `wf_routtest_delete()`)
- Ajout/suppression de rebuts (`wf_routreject_insert()`, `wf_routreject_delete()`)
- Gestion des jalons de prix (`wf_routjal_delete()`)
- Sauvegarde avec verification (`wf_save_routline()`)

---

## Postes de charge et machines

### Postes de charge (`workcenters`)

Les postes de charge (centres de travail) definissent les capacites de production :

| Propriete | Colonne | Description |
|-----------|---------|-------------|
| Code | `wccode` | Identifiant unique (8 car.) |
| Nom | `wcname` | Designation (30 car.) |
| Actif | `wcactiv` | Poste actif/inactif |
| Cout horaire | `wccost` | Cout horaire du poste |
| Cout machine fixe | `wcmacfix` | Cout machine fixe |
| Cout machine proportionnel | `wcmacprop` | Cout machine proportionnel |
| Calendrier | `wccal` | FK vers `calhead` — calendrier de disponibilite |
| Critique | `wccrit` | Poste goulot (critique pour la planification) |
| Couleur | `wccolor` | Couleur d'affichage dans le planning |
| Capacite journaliere | `wcmonday`..`wcsunday` | Heures disponibles par jour de la semaine |
| Departement | `wcdptid` | Code departement |
| Ordonnancement avance | `wcadvsched` | Utilisation dans l'ordonnancement avance |

References : les postes de charge sont utilises par `mfgwcreqs`, `activities`, `link_machine_pdc`, `machinehead`.

### Machines (`machine`)

| Propriete | Colonne | Description |
|-----------|---------|-------------|
| ID | `mcid` | Identifiant unique (auto-increment) |
| Code | `mcode` | Code machine (30 car.) |
| Nom | `mcname` | Designation (50 car.) |
| Priorite | `mcpriority` | Priorite pour l'ordonnancement |
| Actif | `mcactiv` | Machine active/inactive |
| Cellule | `mccells` | FK vers `CELLS` — cellule de production |
| Calendrier | `mccal` | FK vers `calhead` |
| Tarif horaire | `mchourly` | FK vers `hourly` — tarif horaire |

Liaison machine-poste de charge via `link_machine_pdc`. Exclusion de machines par operation via `routline_nomachine`.

### Cellules (`CELLS`)

Regroupement logique de machines et d'operateurs. Structure simple : `clid` (PK), `clname`, `clactiv`. Les cellules sont referencees par les tables `machine` et `workers`.

### Operateurs (`workers`)

| Propriete | Colonne | Description |
|-----------|---------|-------------|
| Code | `wkcode` | Identifiant operateur (8 car.) |
| Nom | `wkname` | Nom de l'operateur |
| Mot de passe | `wkpswrd` | Password pour authentification MES |
| Poste defaut | `wkwc` | Poste de charge par defaut |
| Type | `wktyp` | Type d'operateur |
| Cout horaire | `wkcost` | Cout horaire |
| Cellule | `wkcell` | FK vers `CELLS` |
| Entree/sortie | `wkinout` | Statut pointage en cours |
| Auto-validation | `wkselfvalid` | L'operateur peut valider ses propres operations |
| Groupe | `wkgroup` | Groupe d'operateurs |
| Matricule paie | `wkpayroll` | Lien vers la paie |

---

## Co-produits

La gestion des co-produits permet de declarer des articles secondaires produits simultanement :

### En nomenclature (`bomcoitem`)

- Definis par code parent (`bccode`), type (`bctype`), et article co-produit (`bccoitem`)
- Quantite produite (`bcqtyf`) et cout (`bccostf`)
- Quantite non conforme (`bcnqualf`) et backflush (`bcbackf`)
- Pourcentage de l'article de base : quantite (`bcbaseitqtypc`) et cout (`bcbaseitcostpc`)

### En fabrication (`mfgcoitem`)

- Copie des co-produits BOM lors du lancement de l'OF
- Quantite requise (`mcreqty`) et quantite fabriquee (`mcmfgqty`)
- Lot de fabrication propre (`mclotmfg`), date expiration (`mcexpdat`)
- Cout de fabrication (`mcmfgcost`), quantite non conforme (`mcnqualf`)
- Lien avec les commandes clients via `mfgcoitemsal` (`mssalhead`, `mssalline`)

### Fenetre de gestion

`w_bomcoitem_update` (module `_methods`, ancetre `w_popup`) permet de creer et modifier les co-produits dans la nomenclature. La fenetre `w_mfgorder_report` gere les co-produits au niveau de l'OF via `tr_coitem_call()`.

---

## Qualite en fabrication

Le controle qualite est integre au processus de fabrication a plusieurs niveaux :

### Definition des tests (gamme operatoire)

- Table `routtest` : tests definis par operation, avec valeurs min/max, unite, replicats
- Indicateur de blocage (`rtbloc`) : le test peut bloquer la poursuite de la fabrication

### Execution des tests (OF)

- Table `mfgwctests` : resultats des tests enregistres par operation de l'OF
- Types de resultats : numerique (`wtnval`), booleen (`wtbval`), texte (`wttval`)
- Choix parmi une liste (`wtrsltchoice`, `wtchoice`)
- Replicats (`wtidreplicat`) pour repetabilite
- Operateur (`wtwkcode`) et date (`wtdate`)
- Blocage (`wtbloc`) : peut bloquer l'OF ou declencher une quarantaine

### Fenetres MES qualite

- `w_mfgmes_tests` : saisie des resultats de tests avec validation (`wf_check_ok()`)
- `w_mfgmes_testrslt` : visualisation et validation des resultats
- Fonctions de blocage : `wf_blocof()` bloque l'OF, `wf_quarantine()` met en quarantaine
- `wf_check_mat()` : verification des matieres avant poursuite

### Gestion des rebuts

- Table `routreject` : types de rebuts definis dans la gamme (coefficient, unite)
- Table `mfgwcreject` : rebuts enregistres par operation de l'OF (quantite `mrqty`)
- Quantite non conforme au niveau OF : `mhmfgnqualqty`

---

## Points d'attention

### Cout de fabrication
- Le calcul des couts distingue trois postes : matieres (`mhmalloc`/`mhmreal`), main-d'oeuvre (`mhlalloc`/`mhlreal`), equipement (`mhealloc`/`mhereal`)
- Les couts supplementaires sont geres dans `mfgxtracost`
- Le rollup multi-niveaux de la nomenclature (`bhrlup*`) permet le calcul du prix de revient complet
- `nvo_mfgclot.uf_mfgcosting()` est le point central du calcul des ecarts

### Backflush
- La consommation automatique des matieres (backflush) est geree par `nvo_mfgreport`
- Plusieurs modes : standard (`uof_make_backflush()`), sans stock (`uof_make_backflush_nostock()`), fusion (`uof_make_backflush_fusion()`)
- Le type de backflush est parametre par composant dans la nomenclature (`blpalloctyp`)

### Sous-traitance
- Les operations sous-traitees (`rlsubc = 'Y'`) generent des sous-ordres (`createsuborder()`)
- Le fournisseur est identifie par `rlsuppid` / `mwsuppid`
- Les jalons de prix (`routjal`) definissent les tarifs par palier de quantite
- La cloture des commandes sous-traitance est geree par `nvo_mfgclot.uf_closesubpur()`

### Ordonnancement avance
- La table `mfgwcreqs_advsc` stocke les affectations machine avec dates/durees precises
- Les machines ont une priorite (`mcpriority`) pour l'ordonnancement
- Les postes critiques (`wccrit`) sont identifies comme goulots
- L'activation se fait par poste via `wcadvsched`

### Tracabilite lot
- Le lot de fabrication (`mhlotmfg`) est attribue lors du lancement
- Les co-produits ont leur propre lot (`mclotmfg`)
- La DLC (date limite de consommation) est geree : `mhexpdat`, recherche de DLC min des matieres premieres via `uof_search_mindlc_mp()`
- Le lot parent (`mhlotprt`) permet la traçabilite ascendante

### Transactions de stock
- **RCMO** (Reception Commande de fabrication) : entree en stock du produit fini — `uof_save_transact_rcmo()`
- **DLMO** (Delivrance Matieres OF) : sortie de stock des composants — `uof_savetr_dlmo()`
- **RTMO** (Retour Matieres OF) : retour de composants non utilises — `uof_savetr_rtmo()`
- **ISSU** : sortie de stock generique
- Auto-reception : `bhautorcmo` / `uof_autorcmo()` permet la reception automatique sans intervention

### Import de fichiers
- `nvo_mfg_file_import` permet l'import d'OF et l'execution de RCMO/DLMO depuis des fichiers externes
- Fonctions : `uof_import_file_of()`, `uof_execute_file_rcmo()`, `uof_execute_file_dlmo()`
- Verification de doublon via `uof_check_file()`

---

## Recherche rapide

| Je cherche... | Table(s) | Fenetre(s) | NVO |
|---------------|----------|------------|-----|
| Un ordre de fabrication | `mfghead` | `w_launchorder`, `w_mfgorder_report` | `nvo_of_launch` |
| Les operations d'un OF | `mfgwcreqs` | `w_mfgwc_update`, `w_mfgmes_wc` | — |
| Les composants alloues a un OF | `mfglallocs` | `w_mfg_linkallocwcreq` | — |
| Les couts d'un OF | `mfgcosts`, `mfgxtracost` | `w_mfgorder_report`, `w_mfgorder_close` | `nvo_mfgclot` |
| La nomenclature d'un article | `bomhead`, `bomline` | `w_bom_update`, `w_bomrout` | — |
| La gamme operatoire d'un article | `routline` | `w_routing_update`, `w_bomrout` | — |
| Les co-produits | `bomcoitem`, `mfgcoitem` | `w_bomcoitem_update`, `w_mfgorder_report` | — |
| Un poste de charge | `workcenters` | `w_workcenter_update` | — |
| Une machine | `machine` | _(gestion machines)_ | — |
| Un operateur | `workers` | `w_tictrl_in_out` | — |
| Les tests qualite d'un OF | `mfgwctests` | `w_mfgmes_tests`, `w_mfgmes_testrslt` | — |
| Les rebuts d'un OF | `mfgwcreject` | `w_mfgwc_update` | — |
| Les lots de fabrication (batch) | `mfghbatch`, `mfglbatch` | `w_mfg_batch` | — |
| La declaration de production | `stockmvt` (RCMO) | `w_brf_mfg_report`, `w_transact_rcmo_f` | `nvo_mfgreport` |
| Le suivi d'avancement | `mfgwcreqs` (temps reels) | `w_brf_mfg_progress`, `w_mfgmes_finish` | — |
| La cloture d'un OF | `mfghead` (statut) | `w_mfgorder_close`, `w_mfgorder_closebydate` | `nvo_mfgclot` |
| Le pointage des temps | `timctrl` | `w_tictrl_wnt_param`, `w_tictrl_validate` | — |
| L'historique de fabrication | _(requetes)_ | `w_qry_item_mfg_1it` | — |
| Les allocations de matieres | `matallocs` | _(via OF)_ | — |
| Les besoins matieres (MRP) | `matreq` | _(module planning)_ | — |
| L'import de fichiers OF | _(fichiers)_ | `w_mfg_prep_byfiles` | `nvo_mfg_file_import` |
