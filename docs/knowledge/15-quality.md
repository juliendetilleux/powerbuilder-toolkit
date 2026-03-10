# Domaine : QUALITE (Controle Qualite)

## Vue d'ensemble

Le module qualite (`_quality`) de PmiGest ERP (PMIX) assure le suivi complet des controles qualite sur les articles recus (reception fournisseur) et les articles produits (fabrication). Il couvre trois axes fonctionnels :

- **Specifications qualite** : definition des tests a effectuer par article/fournisseur, avec gestion de versions et approbation.
- **Controles qualite** : execution des tests, saisie des resultats (numeriques ou par choix), approbation et liberation des lots.
- **Monitoring/Surveillance** : plans de surveillance pour les controles periodiques et la contamination.

Le module est contenu dans la bibliotheque **`_quality`** (81 objets) : 24 fenetres, 46 DataWindows, 1 NVO, 2 fonctions globales, 6 structures, 2 menus.

Il s'integre avec :
- **`_stock`** : gestion des emplacements de quarantaine, statut QC des lots (`lots.loqcstatus`), liberation/blocage de lots.
- **`_stkbarcod`** : saisie des controles qualite sur le terrain via lecteur code-barres (BRF) ou scanner (BCD).
- **`_manufg`** : controle qualite des produits finis a la sortie de production, tests lies aux gammes de fabrication.
- **`_prints_std`** / **`_prints_mod2t`** : impressions des rapports de controle, specifications, etiquettes QC.
- **`_masters`** : parametrage QC par article (`items.itqc`), gestion des reclamations (`claims`).

Le declenchement des controles qualite peut etre **automatique** (a la reception fournisseur si le parametre `QCParaLaunch` est actif) ou **manuel** (initie par l'operateur depuis l'ecran de controle).

---

## Tables principales

### qctest — Catalogue des tests qualite

Table de reference qui definit l'ensemble des tests qualite disponibles.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `qttestid` | char(8) | NON | **Identifiant du test (PK)** |
| `qtactiv` | char(1) | OUI | Actif (Y/N) |
| `qtname` | varchar(30) | OUI | Nom du test |
| `qtcmnt` | varchar(60) | OUI | Commentaire |
| `qttyp` | char(1) | OUI | **Type de test** : N=numerique, C=choix |
| `qtum` | char(10) | OUI | Unite de mesure (pour tests numeriques) |
| `qtnameext` | varchar(50) | OUI | Nom etendu du test |
| `qtshowext` | char(1) | OUI | Afficher le nom etendu |
| `qtshowsum` | char(1) | OUI | Afficher dans le resume |
| `qtlabo` | char(1) | OUI | Test de laboratoire |
| `qtchoiceid` | numeric(6) | OUI | FK vers `qctchoice` — liste de choix associee (pour tests de type C) |

**Relations** : referencee par `qcctrlline` et `qcspecline`.

### qctchoice — Listes de choix pour tests qualite

Table des options de reponse pour les tests de type "choix" (qttyp = 'C').

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `qcchoiceid` | numeric(6) | NON | **Identifiant de la liste (PK partiel)** |
| `qcseq` | numeric(3) | NON | **Sequence dans la liste (PK partiel)** |
| `qcsort` | numeric(4) | OUI | Ordre de tri |
| `qcdesc` | varchar(30) | OUI | Description du choix |
| `qcrslt` | char(1) | OUI | **Resultat associe** : conforme/non conforme |

### qcspechead — En-tete de specification qualite

Definition des specifications qualite par article, avec versionnement et processus d'approbation.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `qhitem` | char(20) | NON | **Code article (PK partiel)** |
| `qhtyp` | char(1) | NON | **Type de specification (PK partiel)** : C=client, F=fournisseur, M=fabrication |
| `qhadcode` | char(10) | NON | **Code adresse client/fournisseur (PK partiel)** — FK vers `adresses` |
| `qhversn` | numeric(4) | NON | **Numero de version (PK partiel)** |
| `qhactiv` | char(1) | OUI | Active (Y/N) |
| `qhadtyp` | char(1) | OUI | Type d'adresse |
| `qhcmnt` | varchar(120) | OUI | Commentaire |
| `qhcreadat` | timestamp | OUI | Date de creation |
| `qhcreausr` | char(50) | OUI | Utilisateur createur |
| `qhmodifdat` | timestamp | OUI | Date de derniere modification |
| `qhmodifusr` | char(50) | OUI | Utilisateur modificateur |
| `qhapplydat` | timestamp | OUI | Date d'application |
| `qhappro` | char(1) | OUI | **Statut d'approbation** : E=en cours, A=approuve, R=refuse |
| `qhapprodat` | timestamp | OUI | Date d'approbation |
| `qhapprousr` | char(50) | OUI | Utilisateur approbateur |
| `qhsmplref` | numeric(8,3) | OUI | Reference echantillon |

**Relations** : FK vers `adresses`. Referencee par `qcspecetiq`.

### qcspecline — Lignes de specification qualite

Detail des tests a effectuer pour une specification donnee, avec criteres min/max.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `qlitem` | char(20) | NON | Code article (PK partiel) |
| `qltyp` | char(1) | NON | Type de specification (PK partiel) |
| `qladcode` | char(10) | NON | Code adresse (PK partiel) |
| `qlversn` | numeric(4) | NON | Version (PK partiel) |
| `qlline` | numeric(4) | NON | **Numero de ligne (PK partiel)** |
| `qlseq` | numeric(4) | OUI | Sequence d'affichage |
| `qltestid` | char(8) | OUI | **FK vers `qctest`** — test a effectuer |
| `qldesc` | varchar(60) | OUI | Description |
| `qlmin` | numeric(13,6) | OUI | **Valeur minimum acceptable** |
| `qlmax` | numeric(13,6) | OUI | **Valeur maximum acceptable** |
| `qlum` | char(10) | OUI | Unite de mesure |
| `qlcmnt` | varchar(60) | OUI | Commentaire |
| `qlrsltrange` | char(1) | OUI | Type de plage de resultat |
| `qlshowext` | char(1) | OUI | Afficher etendu |
| `qlshowsum` | char(1) | OUI | Afficher dans resume |
| `qlreplicat` | char(1) | OUI | Replicat (test en doublon) |
| `qlchoiceid` | numeric(6) | OUI | FK vers `qctchoice` — liste de choix |
| `qlexectyp` | char(1) | OUI | Type d'execution |
| `qlexecqty` | numeric(12,3) | OUI | Quantite d'execution |
| `qlexecdat` | timestamp | OUI | Date d'execution |
| `qlexecqtyrem` | numeric(12,3) | OUI | Quantite restante |

**Relations** : FK vers `adresses`, `qctest`.

### qcspecetiq — Etiquettes de specification qualite

Association entre specifications et etiquettes pour impression.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `qeitem` | char(20) | NON | Code article (PK partiel) |
| `qetyp` | char(1) | NON | Type (PK partiel) |
| `qeadcode` | char(10) | NON | Code adresse (PK partiel) |
| `qeversn` | numeric(4) | NON | Version (PK partiel) |
| `qeline` | numeric(4) | NON | Numero de ligne (PK partiel) |
| `qenbetiq` | numeric(3) | OUI | Nombre d'etiquettes |
| `qecmnt` | varchar(120) | OUI | Commentaire |

**Relations** : FK vers `qcspechead`.

### qcctrlhead — En-tete de controle qualite

Enregistrement d'un controle qualite execute sur un lot donne.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `qhctrlid` | numeric(8) | NON | **Identifiant du controle (PK)** |
| `qhitem` | char(20) | OUI | Code article controle |
| `qhtyp` | char(1) | OUI | **Type** : C=client, F=fournisseur, M=fabrication |
| `qhadcode` | char(10) | OUI | Code adresse client/fournisseur — FK vers `adresses` |
| `qhversn` | numeric(3) | OUI | Version de la specification utilisee |
| `qhlot` | char(30) | OUI | **Code lot controle** |
| `qhactiv` | char(1) | OUI | Actif |
| `qhcmnt` | varchar(120) | OUI | Commentaire |
| `qhcreadat` | timestamp | OUI | Date de creation du controle |
| `qhcreausr` | char(50) | OUI | Utilisateur createur |
| `qhappro` | char(1) | OUI | **Statut d'approbation** : E=en cours, A=approuve (conforme), R=refuse (non conforme), D=derogation |
| `qhapprousr` | char(50) | OUI | Utilisateur approbateur |
| `qhapprodat` | timestamp | OUI | Date d'approbation |
| `qhordno` | numeric(6) | OUI | Numero d'ordre associe (commande achat ou OF) |
| `qhordlin` | numeric(4) | OUI | Ligne d'ordre associee |

**Relations** : FK vers `adresses`. Referencee par `qcctrlline`.

### qcctrlline — Lignes de controle qualite (resultats des tests)

Detail des resultats de chaque test dans un controle qualite.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `qlctrlid` | numeric(8) | NON | **FK vers `qcctrlhead` (PK partiel)** |
| `qlline` | numeric(4) | NON | **Numero de ligne (PK partiel)** |
| `qlseq` | numeric(4) | OUI | Sequence |
| `qltestid` | char(8) | OUI | **FK vers `qctest`** — test effectue |
| `qldesc` | varchar(60) | OUI | Description du test |
| `qlmin` | numeric(13,6) | OUI | Valeur minimum (copie de la specification) |
| `qlmax` | numeric(13,6) | OUI | Valeur maximum (copie de la specification) |
| `qlum` | char(10) | OUI | Unite de mesure |
| `qlcmnt` | varchar(60) | OUI | Commentaire |
| `qlrsltval` | numeric(13,6) | OUI | **Valeur du resultat** (pour tests numeriques) |
| `qlrslt` | char(1) | OUI | **Resultat** : C=conforme, N=non conforme |
| `qltestdat` | timestamp | OUI | Date du test |
| `qlusrid` | char(50) | OUI | Utilisateur testeur |
| `qlvalid` | char(1) | OUI | Valide (Y/N) |
| `qlrsltrange` | char(1) | OUI | Type de plage de resultat |
| `qlflag` | char(1) | OUI | Flag |
| `qlchoiceid` | numeric(6) | OUI | Identifiant de la liste de choix |
| `qlchoiceseq` | numeric(3) | OUI | Sequence du choix selectionne |
| `qlchdesc` | varchar(30) | OUI | Description du choix selectionne |
| `qlshowext` | char(1) | OUI | Afficher etendu |
| `qlshowsum` | char(1) | OUI | Afficher dans resume |
| `qlexectyp` | char(1) | OUI | Type d'execution |
| `qlchoicestr` | char(1) | NON | Choix en chaine |
| `qldescnum` | varchar(20) | NON | Description numerique |

**Relations** : FK vers `qcctrlhead` (qlctrlid) et `qctest` (qltestid).

### qcauditctrl — Audit des controles qualite

Historique des modifications apportees aux resultats de controle (tracabilite).

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `qacid` | numeric(12) | NON | **Identifiant audit (PK)** |
| `qacctrlid` | numeric(8) | OUI | FK vers `qcctrlhead` — controle concerne |
| `qacline` | numeric(4) | OUI | Ligne de controle modifiee |
| `qaccmnt` | varchar(60) | OUI | Commentaire de modification |
| `qacrsltval` | numeric(13,6) | OUI | Ancienne valeur du resultat |
| `qacrslt` | char(1) | OUI | Ancien resultat |
| `qactestdat` | timestamp | OUI | Date du test original |
| `qacusrid` | char(8) | OUI | Utilisateur ayant fait la modification |
| `qacvalid` | char(1) | OUI | Ancien statut de validation |

### claims — Reclamations

Table des categories de reclamations pour les non-conformites.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `clid` | numeric(9) | NON | **Identifiant reclamation (PK)** |
| `clname` | char(50) | OUI | Nom/libelle de la reclamation |
| `clorder` | numeric(3) | OUI | Ordre d'affichage |

**Relations** : referencee par `lkitcl`. Configuree dans `w_param_dyna` (onglet `tabpage_claims`).

### lkitcl — Liaison article-reclamation

Table de liaison entre articles et types de reclamation.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `licitcode` | char(20) | NON | **Code article (PK partiel)** |
| `licclid` | numeric(9) | NON | **FK vers `claims` (PK partiel)** |
| `liccheck` | char(1) | OUI | Flag de verification |

**Relations** : FK vers `claims`.

---

## Objets PB cles

### Fenetres principales (_quality)

#### Gestion des tests qualite

| Fenetre | Ancetre | Description | Fonctions cles |
|---------|---------|-------------|----------------|
| `w_qctest` | w_response | Liste des tests qualite — consultation et filtre | `wf_refresh(as_testid)`, `wf_filter()` |
| `w_qctest_update` | w_response | Mise a jour d'un test qualite — ajout/modification | `wf_qctest_inputok()`, `wf_inputok_choice()`, `wf_save_choice()`, `wf_numline()` |
| `w_qctest_sqlselect` | w_response | Selection de test qualite pour insertion dans une requete SQL | `wf_refresh(as_testid)`, `wf_filter()`, `wf_find_and_replace()`, `wf_find_tests()` |

#### Gestion des specifications

| Fenetre | Ancetre | Description | Fonctions cles |
|---------|---------|-------------|----------------|
| `w_qcspec` | w_response | Liste des specifications qualite — consultation avec filtres | `wf_filter(as_filter)`, `wf_change_status(as_modif)`, `wf_refresh(as_item, as_typ, as_adcode, ai_versn)`, `wf_refresh_line(ai_line)`, `wf_delete_test()` |
| `w_qcspec_update` | w_response | Mise a jour d'une specification — en-tete avec gestion des versions et des etiquettes | `wf_inputok()`, `wf_numversion()`, `wf_copy()`, `wf_add_qcetiq()`, `wf_delete_qcetiq()`, `wf_copy_qcspecetiq()`, `wf_dddw_clifour()`, `wf_dddw_item()` |
| `w_qcspecline_update` | w_response | Mise a jour d'une ligne de specification — definition du test, min/max, liste de choix | `wf_inputok()`, `wf_dddwc_qctest()`, `wf_affiche_num(as_testid)`, `wf_savechoices()`, `wf_num_line()` |
| `w_qcspec_etiq_print` | w_response | Impression des etiquettes de specification qualite | _(events: open, clicked)_ |

#### Gestion des controles

| Fenetre | Ancetre | Description | Fonctions cles |
|---------|---------|-------------|----------------|
| `w_qcctrl` | w_response | Ecran principal des controles qualite — liste et saisie des resultats | `wf_type_qctest(as_qctestid)`, `wf_refresh_head(ai_ctrlid)`, `wf_create_ctrlhead(as_type)`, `wf_copytest()`, `wf_delete()`, `wf_approbation_bup()`, `wf_sample_ship()`, `wf_refresh_line(al_ctrlid, al_line)`, `wf_check_test_reported(al_ctrlid)`, `wf_update_lotstatus(ad_datim, ab_lotalloc, as_lot_id, al_ctrlid, as_item)` |
| `w_qcctrl_update` | w_response | Mise a jour de l'en-tete d'un controle — creation/modification | `wf_dddw_items()`, `wf_init_dddw_items(as_typ_spec)`, `wf_inputok()`, `wf_save_id()` |
| `w_qcctrlline_update` | w_response | Mise a jour d'une ligne de controle — saisie du resultat avec audit | `wf_qcaudit()`, `wf_conforme()`, `wf_itemsvisible(ai_visible)`, `wf_inputok()`, `wf_modify_doc()`, `wf_doc_refresh()` |
| `w_qcctrl_launch` | w_response | Lancement d'un controle qualite — selection des lots a controler avec filtres | `filteritem()`, `loadmultitri()` |
| `w_qcctrl_appro` | w_response | Approbation d'un controle qualite — validation individuelle avec impression | `wf_check_tests_reported()`, `wf_checkline()`, `wf_update_lotstatus(datim)`, `wf_doc_refresh()`, `wf_modify_doc()`, `wf_print(as_ctrlid)` |
| `w_qcctrl_appro_multi` | w_response | Approbation multi-selection — validation de plusieurs controles en lot | `wf_print(as_ctrlid)` |
| `w_qcctrl_print` | w_response | Impression du rapport de controle qualite | _(events: open, close, clicked, doubleclicked)_ |
| `w_qcquick_rslt` | w_response | Saisie rapide des resultats — ecran simplifie pour saisie terrain | _(events: open, close, clicked)_ |

#### Statut et liberation

| Fenetre | Ancetre | Description | Fonctions cles |
|---------|---------|-------------|----------------|
| `w_qcstatus` | w_response | Consultation du statut qualite d'un lot — affichage tests et resultats | `wf_doc_refresh()`, `wf_modify_doc()`, `wf_retrieve_tests(as_ordtyp, al_ordno)` |
| `w_qcrelease` | w_popup | Liberation des lots — changement de statut QC apres approbation | `loadmultitri()` |
| `w_qc_update` | w_popup | Mise a jour globale qualite — ecran principal de gestion QC avec filtres et tri | `loadmultitri()`, `wf_refresh_lot()`, `filteritem()`, `wf_modify(as_typ)`, `wf_modify_status(as_error, al_row, as_tostatus)`, `wf_reset_all()` |
| `w_lot_update` | w_response | Mise a jour du statut des lots — changement de statut avec verification QC | `wf_doc_refresh()`, `wf_modify_doc()`, `wf_filter()`, `wf_filter_lot()` |

#### Monitoring et surveillance

| Fenetre | Ancetre | Description | Fonctions cles |
|---------|---------|-------------|----------------|
| `w_monitplan` | w_response | Plan de surveillance — definition des controles periodiques | `wf_checkmoniplan()`, `wf_insertmonitline()`, `wf_insertmontplan()`, `wf_checkmonitline()`, `wf_monit_save()`, `wf_delete_monitline()`, `wf_copy_plan()` |
| `w_monitplan_launch` | w_response | Lancement de plan de surveillance | _(events: open, constructor, clicked)_ |
| `w_monittest_contam` | w_response | Test de contamination — saisie des resultats de contamination | `wf_save()` |
| `w_monitoring_status` | w_response | Statut du monitoring — tableau de bord des controles periodiques | _(events: open, constructor, clicked)_ |

#### Expedition d'echantillons

| Fenetre | Ancetre | Description | Fonctions cles |
|---------|---------|-------------|----------------|
| `w_ship_sample` | w_response | Expedition d'echantillons qualite — envoi d'echantillons a un client pour validation | `wf_load_ddlb_shipto(as_adid)`, `uof_shiphead(al_code, as_cust, ai_shipto, as_comment, al_sort)`, `wf_exp(as_error, as_loc, ad_qty, as_item)` |

### Fenetres codes-barres (_stkbarcod)

| Fenetre | Module | Description |
|---------|--------|-------------|
| `w_brf_quality` | _stkbarcod | Saisie controle qualite par lecteur code-barres (BRF) |
| `w_bcd_quality` | _stkbarcod | Saisie controle qualite par scanner (BCD) |

### Fenetres liees (autres modules)

| Fenetre | Module | Description |
|---------|--------|-------------|
| `w_purchase_receipt` | _stock | Reception fournisseur — declenchement QC si parametre actif |
| `w_transact_rcpo_inout` | _stock | Transaction reception achat — fonctions `initqc()`, `save_qc()` |
| `w_transact_rcpo3` | _stock | Transaction reception multi-lignes — fonctions `initqc()`, `save_qc()` |
| `w_sales_shipnotice2` | _sales | Bon de livraison — onglet QC stock |
| `w_qry_lot_info` | _query | Information lot — historique des tests qualite |
| `w_param_dyna` | _masters | Parametres dynamiques — onglet `tabpage_claims` pour la configuration des reclamations |

### NVO (Non-Visual Objects)

| NVO | Ancetre | Lignes | Module | Role | Fonctions cles |
|-----|---------|--------|--------|------|----------------|
| `nvo_redesign_ssccline` | nv_nonvisualobject | 564 | _quality | Redesignation de lignes SSCC — changement de statut et emplacement pour les lots suite a un controle qualite | `uof_redisign_ssccline(as_tab_ssccline[], as_newstatus, as_newloc)`, `uof_newlot_wsamecode(as_lot)` |
| `nvo_bcd_brf` | nv_nonvisualobject | 24000+ | _cust2 | Moteur commun codes-barres — gere le declenchement QC, la saisie des resultats, le reset de la grille qualite (148 fonctions) | _(voir domaine Barcode)_ |

### Fonctions globales

| Fonction | Retour | Parametres | Lignes | Description |
|----------|--------|------------|--------|-------------|
| `gf_qcctrl_launch` | long | `as_item`, `as_clifour`, `as_type`, `as_numlot`, `as_ordno`, `as_ordlin`, `ad_qtylot` | 571 | **Lancement automatique d'un controle qualite** — cree un en-tete de controle (`qcctrlhead`), copie les tests de la specification active, et retourne l'identifiant du controle. Appelee depuis les fenetres de reception. |
| `gf_check_mfg_mat_status` | integer | `as_lot`, `as_message`, `ab_manual` | 190 | **Verification du statut matiere en fabrication** — controle si le lot est libere pour utilisation en production (statut QC, freeze, etc.). |

### Structures

| Structure | Module | Description |
|-----------|--------|-------------|
| `s_specsel` | _quality | Selection de specification — parametres pour identifier une specification (article, type, adresse, version) |
| `st_qcc` | _quality | Structure de controle qualite — informations d'un controle |
| `struct_qc_return` | _quality | Retour de controle qualite — structure de retour pour `w_qcquick_rslt` |
| `struct_qc_param` | _quality | Parametres de controle qualite |
| `struct_multi_valid` | _quality | Validation multiple — pour l'approbation en lot |
| `struct_multi_option` | _quality | Options de selection multiple |

### Menus

| Menu | Module | Events | Description |
|------|--------|--------|-------------|
| `m_popqc` | _quality | 26 | Menu contextuel des ecrans QC — actions : nouveau controle, modification, suppression, approbation, impression, copie |
| `m_qcstatus` | _quality | 4 | Menu contextuel du statut QC — actions : modifier doc, rafraichir |

### DataWindows principaux

#### DataWindows du module _quality

| DataWindow | Table(s) source | Processing | Description |
|------------|----------------|------------|-------------|
| `d_qctest` | qctest | freeform | Liste des tests qualite — tri par `qttestid` |
| `d_qctest_update` | qctest | freeform | Mise a jour d'un test qualite |
| `d_qctest_choice` | _(choix)_ | freeform | Selection de test avec dropdown |
| `d_qctchoice` | qctchoice | freeform | Liste des choix pour un test |
| `d_qcspechead` | qcspechead + adresses + items | freeform | Liste des specifications — jointure avec adresses et articles, filtre par statut approbation |
| `d_qcspechead_update` | qcspechead | freeform | Mise a jour en-tete de specification |
| `d_qcspecline` | qcspecline + qctest | freeform | Lignes de specification — jointure avec tests, filtre par article/type/adresse/version |
| `d_qcspecline_update` | qcspecline | freeform | Mise a jour d'une ligne de specification |
| `d_qcspecetiq_update` | qcspecetiq | freeform | Mise a jour des etiquettes de specification |
| `d_qcctrlhead` | qcctrlhead + adresses + items + lots | freeform | Liste des controles — jointure 4 tables, filtre `qhappro = 'E'` (en cours) et `qhtyp <> 'M'` |
| `d_qcctrlhead_update` | qcctrlhead | freeform | Mise a jour en-tete de controle — dropdown lots (`dd_qcctrl_lot_sel`) |
| `d_qcctrlhead_update2` | qcctrlhead | freeform | Mise a jour en-tete variante 2 |
| `d_qcctrlline` | qcctrlline + qctest | freeform | Lignes de controle — jointure avec tests, filtre par `qlctrlid`, tri par sequence et ligne |
| `d_qcctrlline_update` | qcctrlline | freeform | Mise a jour d'une ligne de controle — dropdown test (`dd_qctest`), dropdown choix (`dd_qctchoice`) |
| `d_qcctrlline_show` | qcctrlline | freeform | Affichage d'une ligne de controle (lecture seule) |
| `d_qcctrlline_small` | qcctrlline | freeform | Vue compacte des lignes de controle |
| `d_qcctrlline_of` | qcctrlline | freeform | Lignes de controle liees a un OF |
| `d_qcctrl_appro` | qcctrlhead + lots | freeform | Approbation — en-tete avec informations lot (loadcode, loorgcode, loalloc), filtre par ctrlid |
| `d_qcctrl_cust` | _(custom)_ | freeform | Controle qualite specifique client |
| `d_qcquick_rslt` | _(resultats)_ | freeform | Saisie rapide des resultats — dropdown choix conditionnel (visible si `qctest_qttyp = 'C'`) |
| `d_qcrslts` | _(resultats)_ | freeform | Affichage des resultats |
| `d_qc_lot` | lots + items | freeform | **Liste des lots pour QC** — articles avec stock > 0 dans une plage de dates, avec detection des lots issus de fabrication (sous-requete histostock hscode='RCMO') |
| `d_qc_exp` | _(export)_ | freeform | Export qualite |
| `d_qc_perstatus` | _(statut)_ | freeform | Statut periodique QC |
| `d_selection_spec` | _(selection)_ | freeform | Selection de specification |
| `d_lot_qcsel` | lots | freeform | Selection de lot pour QC |
| `d_lot_status_update` | lots | freeform | Mise a jour du statut lot |
| `d_infolot` | lots | freeform | Information lot detaillee |
| `d_sscclist_lot` | ssccline | freeform | Liste SSCC par lot |

#### DataWindows de monitoring

| DataWindow | Description |
|------------|-------------|
| `d_monitplan_list` | Liste des plans de surveillance |
| `d_monitplan_update` | Mise a jour d'un plan de surveillance |
| `d_monitline_list` | Lignes de plan de surveillance |
| `d_monitline_update` | Mise a jour d'une ligne de surveillance |
| `d_monittest_list` | Liste des tests de surveillance |
| `d_monittest_contam_update` | Mise a jour test de contamination |
| `d_mfgwctests_list` | Liste des tests de poste de travail (fabrication) |
| `d_mfgwctests_rslt` | Resultats des tests de poste de travail |
| `d_choicehead_mon_update` | Mise a jour en-tete de choix monitoring |

#### DropDown DataWindows (dd_*)

| DataWindow | Description |
|------------|-------------|
| `dd_qctest` | Liste deroulante des tests qualite (qttestid + qtname) |
| `dd_qctest_wt_test` | Liste deroulante des tests avec code + nom |
| `dd_qctchoice` | Liste deroulante des choix (qcseq + qcdesc) |
| `dd_testtchoice` | Liste deroulante des choix pour test |
| `dd_testtchoice_mes` | Liste deroulante des choix mesure |
| `dd_qcctrl_lot_sel` | Liste deroulante des lots pour selection dans le controle |
| `dd_clifour` | Liste deroulante clients/fournisseurs |
| `ds_qctchoice` | DataStore des choix qualite |

#### DataWindows d'impression (_prints_std)

| DataWindow | Description |
|------------|-------------|
| `d_qctest_print` | Impression catalogue des tests qualite — sous-rapport `d_qctchoice_subprint` pour les choix |
| `d_qcspec_print` | Impression specifications qualite — sous-rapport choix |
| `d_qcctrl_print` | Impression rapport de controle qualite |
| `d_qcctrl_ip_print` | Impression controle en cours (in-process) |
| `d_qcctrl_ipx_print` | Impression controle en cours etendu |
| `d_qcctrl_ip_bcd_print` | Impression controle en cours (codes-barres) |
| `d_qcctrl_bcd_print` | Impression controle pour scanner |
| `d_qcctrl_cofa_print` | Impression certificat de conformite (COFA) |
| `d_qcctrl_openlist_print` | Impression liste des controles ouverts |
| `d_qcctrl_histolist_print` | Impression historique des controles |
| `d_qcctrl_qc_ip_print` | Impression controle QC en cours |
| `d_qcctrl_tests_ip_print` | Impression tests en cours |
| `d_qcctrl_tests_ip_bcd_print` | Impression tests en cours (codes-barres) |
| `d_qclabel_print` | Impression etiquettes QC |
| `d_qctchoice_subprint` | Sous-rapport : liste des choix d'un test (utilise dans d_qctest_print, d_qcspec_print, d_qcctrl_*_print) |

#### DataWindows d'impression modifies (_prints_mod2t)

| DataWindow | Description |
|------------|-------------|
| `d_qcctrl_mod1_print` | Impression controle qualite — modele 1 |
| `d_qcctrl_mod2_print` | Impression controle qualite — modele 2 |
| `d_qcctrl_mod3_print` | Impression controle qualite — modele 3 |
| `d_qcctrl_cofa_mod1_print` | Certificat de conformite — modele 1 |
| `d_qcctrl_cofa_mod2_print` | Certificat de conformite — modele 2 |
| `d_qcctrl_tests_ip_mod1_print` | Tests en cours — modele 1 |
| `d_qcctrl_tests_ip_mod2_print` | Tests en cours — modele 2 |
| `d_qclabel_mod1_print` | Etiquettes QC — modele 1 |
| `d_qcspec_mod1_print` | Specifications — modele 1 |
| `zmod_mfgordr_qc_subprint` | Sous-rapport QC pour ordres de fabrication |
| `zmod_mfgordr_qcip_subprint` | Sous-rapport QC en cours pour OF |
| `zmod_mfgordr_qc_bcd_subprint` | Sous-rapport QC codes-barres pour OF |
| `zmod_routtest_subprint` | Sous-rapport tests de gamme |

#### DataWindows codes-barres (_stkbarcod)

| DataWindow | Description |
|------------|-------------|
| `d_brf_qcctrline_update` | Mise a jour ligne de controle QC par BRF |
| `d_bcd_qcctrline_update` | Mise a jour ligne de controle QC par scanner BCD |

---

## Flux : Definition des specifications qualite

```
1. Definir les tests qualite (catalogue)
   |
   v
w_qctest / w_qctest_update
   |-- Creer un test : qttestid, qtname, qttyp (N=numerique, C=choix)
   |-- Si type C : definir la liste de choix (qctchoice)
   |-- Unite de mesure pour tests numeriques
   |
   v
Tables : INSERT qctest + INSERT qctchoice (si choix)

2. Creer une specification qualite
   |
   v
w_qcspec / w_qcspec_update
   |-- En-tete : article (qhitem), type (C/F/M), adresse (qhadcode), version
   |-- Gestion de version : wf_numversion() incremente automatiquement
   |-- Copie de specification : wf_copy() + wf_copy_qcspecetiq()
   |-- Statut : E=en cours, A=approuve, R=refuse
   |
   v
Tables : INSERT qcspechead

3. Definir les lignes de test
   |
   v
w_qcspecline_update
   |-- Selectionner le test (dropdown dd_qctest)
   |-- Definir min/max pour tests numeriques
   |-- Definir la liste de choix pour tests de type C
   |-- Replicat possible (qlreplicat)
   |
   v
Tables : INSERT qcspecline

4. Associer des etiquettes (optionnel)
   |
   v
w_qcspec_update → wf_add_qcetiq()
   |
   v
Tables : INSERT qcspecetiq

5. Approuver la specification
   |
   v
Changement de statut qhappro : E → A (approuve) ou R (refuse)
```

---

## Flux : Controle qualite

### Declenchement automatique (a la reception)

```
Reception fournisseur (w_transact_rcpo_inout / rcpo3)
   |
   |-- Verification : parametre QCParaLaunch actif pour l'article ?
   |-- initqc() : initialisation du controle qualite
   |
   v
gf_qcctrl_launch(as_item, as_clifour, as_type, as_numlot, as_ordno, as_ordlin, ad_qtylot)
   |-- Recherche de la specification active pour l'article/fournisseur
   |-- Creation de l'en-tete de controle (qcctrlhead)
   |   qhappro = 'E' (en cours)
   |-- Copie des lignes de specification vers qcctrlline
   |   (tests, min/max, unite, choix)
   |-- Retourne l'identifiant du controle (qhctrlid)
   |
   v
Tables mises a jour :
   - qcctrlhead : INSERT (nouveau controle)
   - qcctrlline : INSERT (lignes de test)
   - lots.loqcstatus : UPDATE (statut QC → en attente)

Le lot est place en quarantaine (emplacement dedie).
```

### Declenchement manuel

```
w_qcctrl_launch
   |-- Filtres : article, lot, type, client/fournisseur
   |-- Selection des lots a controler
   |-- filteritem(), loadmultitri()
   |
   v
w_qcctrl → wf_create_ctrlhead(as_type)
   |-- Meme logique que gf_qcctrl_launch
   |-- Ou copie de tests : wf_copytest()
   |
   v
Tables mises a jour :
   - qcctrlhead : INSERT
   - qcctrlline : INSERT
```

### Saisie des resultats

```
Ecran classique : w_qcctrl / w_qcctrlline_update
   |
   |-- Pour chaque ligne de test :
   |   - Test numerique (qttyp='N') : saisir qlrsltval
   |     → Comparaison auto avec qlmin/qlmax
   |   - Test par choix (qttyp='C') : selectionner dans dd_qctchoice
   |     → qlchoiceseq + qlchdesc
   |   - Saisie du commentaire (qlcmnt)
   |   - Saisie du resultat : qlrslt = C (conforme) ou N (non conforme)
   |
   |-- Audit : wf_qcaudit() enregistre les modifications dans qcauditctrl
   |-- Conformite : wf_conforme() determine le resultat global
   |
   v
Tables mises a jour :
   - qcctrlline : UPDATE (resultats)
   - qcauditctrl : INSERT (si modification d'un resultat existant)

Saisie rapide : w_qcquick_rslt
   |-- Ecran simplifie pour saisie terrain
   |-- Retourne struct_qc_return
   |
   v
Tables mises a jour : qcctrlline

Saisie codes-barres : w_brf_quality / w_bcd_quality
   |-- Scan du lot → recuperation du controle ouvert
   |-- Saisie des resultats via d_brf_qcctrline_update / d_bcd_qcctrline_update
   |-- nvo_bcd_brf gere la logique
   |
   v
Tables mises a jour : qcctrlline
```

### Approbation et liberation

```
w_qcctrl_appro (individuel) ou w_qcctrl_appro_multi (lot)
   |
   |-- wf_check_tests_reported() : tous les tests sont-ils remplis ?
   |-- wf_checkline() : verification coherence des resultats
   |
   |-- Decision :
   |   - A = Approuve (conforme) → liberation du lot
   |   - R = Refuse (non conforme) → maintien en quarantaine
   |   - D = Derogation → liberation sous reserve
   |
   |-- wf_update_lotstatus(datim) : mise a jour du statut lot
   |-- wf_print(as_ctrlid) : impression optionnelle du rapport
   |
   v
Tables mises a jour :
   - qcctrlhead : UPDATE qhappro = 'A'/'R'/'D', qhapprousr, qhapprodat
   - lots : UPDATE loqcstatus, loreldat (si libere)
   - stockmvt : transfert quarantaine → stock normal (si libere)

Liberation du lot :
   w_qcrelease → loadmultitri()
   |-- Affiche les lots en attente de liberation
   |-- Changement de statut → transfert d'emplacement
```

---

## Flux : Non-conformites et reclamations

```
1. Configuration des types de reclamation
   |
   v
w_param_dyna → onglet tabpage_claims
   |-- DataWindow : d_claims_param
   |-- Insert/Update/Delete des categories (table claims)
   |
   v
Tables : claims (clid, clname, clorder)

2. Liaison article-reclamation
   |
   v
Table : lkitcl (licitcode → items, licclid → claims)
   |-- Definit quelles reclamations s'appliquent a quel article
   |-- liccheck : flag de verification active

3. Non-conformite detectee lors d'un controle
   |
   v
w_qcctrl_appro → qhappro = 'R' (refuse)
   |-- Le lot reste en quarantaine
   |-- Action possible : retour fournisseur, destruction, retest
   |
   v
w_lot_update
   |-- Mise a jour du statut du lot (wf_modify_doc)
   |-- Variables : is_LOTSTATP (statut lot parametre), is_QCCHCKPSW (mot de passe QC)
```

---

## Integration avec la fabrication

### Controle qualite en production

```
Ordre de fabrication (mfghead)
   |
   |-- Champ mfghead.qcip : controle qualite en cours sur l'OF
   |-- Champ mfghead.mhqcip : flag QC in-process
   |
   v
Tests de gamme (routtest) → definition des tests a chaque operation
   |-- Geres dans d_rtspecline_update (module _methods)
   |-- Dropdown dd_qctest pour selectionner le test
   |
   v
Tests de poste de travail
   |-- d_wtspecline_update (module _manufg)
   |-- d_mfgwctests_list / d_mfgwctests_rslt (module _quality)
   |
   v
Verification avant utilisation des matieres :
   gf_check_mfg_mat_status(as_lot, as_message, ab_manual)
   |-- Verifie : statut QC du lot, freeze, statut lot
   |-- Retourne 0 = OK, <> 0 = bloque
```

### Sous-rapports QC dans les impressions de fabrication

```
d_mfgordr_sel / d_mfgordr_sel_appr / d_mfgmes_list
   |-- Colonne mfghead_qcip : indicateur QC en cours
   |
   v
Sous-rapports (_prints_mod2t) :
   - zmod_mfgordr_qc_subprint : resultats QC dans le rapport de fabrication
   - zmod_mfgordr_qcip_subprint : QC en cours dans le rapport de fabrication
   - zmod_mfgordr_qc_bcd_subprint : QC codes-barres dans le rapport de fabrication
   - zmod_routtest_subprint : sous-rapport tests de gamme avec sous-rapport d_qctchoice_subprint
```

### Redesignation SSCC apres controle

```
nvo_redesign_ssccline
   |-- uof_redisign_ssccline(as_tab_ssccline[], as_newstatus, as_newloc)
   |   → Change le statut et l'emplacement des lignes SSCC d'un lot
   |   → Utilise apres validation QC pour transferer de quarantaine vers stock
   |
   |-- uof_newlot_wsamecode(as_lot)
   |   → Cree un nouveau lot avec le meme code (renumerotation interne)
```

---

## Points d'attention

### Parametrage QC

- Le parametre `QCParaLaunch` dans la fiche article controle le declenchement automatique du QC a la reception.
- Le champ `items.itqc` indique si l'article est soumis au controle qualite (filtrage dans `d_items_sel`).
- La variable `is_QCCHCKPSW` stocke le mot de passe de verification QC — utilise dans `w_qcctrl`, `w_qcctrl_appro`, `w_qcstatus`, `w_lot_update`, `w_qc_update`.

### Versionnement des specifications

- Les specifications sont versionnees (`qhversn`). Chaque modification cree une nouvelle version.
- La fonction `wf_numversion()` dans `w_qcspec_update` incremente automatiquement le numero de version.
- La copie de specification (`wf_copy()`) est disponible pour dupliquer une specification existante, y compris ses etiquettes (`wf_copy_qcspecetiq()`).
- Le statut d'approbation (`qhappro`) suit le cycle : E (en cours) → A (approuve) ou R (refuse).

### Types de tests

- **Test numerique** (`qttyp = 'N'`) : l'operateur saisit une valeur (`qlrsltval`). Le systeme compare avec `qlmin`/`qlmax` pour determiner la conformite.
- **Test par choix** (`qttyp = 'C'`) : l'operateur selectionne dans une liste definie (`qctchoice`). Le champ `qcrslt` de chaque choix indique si le choix est conforme ou non.
- La visibilite des colonnes de choix dans les DataWindows est conditionnelle : `IF(qctest_qttyp = 'C', 1, 0)`.

### Audit et tracabilite

- La table `qcauditctrl` enregistre chaque modification de resultat de test. La fonction `wf_qcaudit()` dans `w_qcctrlline_update` cree l'enregistrement d'audit avant la modification.
- Chaque ligne de controle enregistre l'utilisateur (`qlusrid`) et la date (`qltestdat`).
- L'approbation enregistre l'approbateur (`qhapprousr`) et la date (`qhapprodat`).

### Integration avec les lots

- Le statut QC du lot (`lots.loqcstatus`) est mis a jour par `wf_update_lotstatus()`.
- La liberation du lot (`lots.loreldat`) est enregistree lors de l'approbation positive.
- Un lot non libere ne peut pas etre utilise dans les expeditions ou la production (`gf_check_mfg_mat_status`).
- La variable `is_LOTSTATP` dans `w_lot_update` et `w_qcstatus` controle les statuts de lot parametrables.

### Acces menu

- Menu ERP MDI : `m_erp_mdi` → ouverture de `w_qc_update` via `opensheet()`.
- Menu action : `m_action` → ouverture de `w_qc_update` via `gn_open.fn_open()`.
- Menu contextuel QC : `m_popqc` (26 events) — actions contextuelles dans les ecrans QC.

---

## Recherche rapide

| Je cherche... | Ou regarder |
|--------------|-------------|
| Catalogue des tests qualite | Table `qctest` / fenetre `w_qctest` |
| Listes de choix pour un test | Table `qctchoice` (qcchoiceid + qcseq) |
| Specification qualite d'un article | Table `qcspechead` + `qcspecline` / fenetre `w_qcspec` |
| Version active d'une specification | `qcspechead` filtrer `qhappro = 'A'` et `qhactiv = 'Y'` |
| Controles qualite en cours | `qcctrlhead` filtrer `qhappro = 'E'` / fenetre `w_qcctrl` |
| Resultats d'un controle | Table `qcctrlline` filtrer par `qlctrlid` |
| Historique des modifications de resultat | Table `qcauditctrl` filtrer par `qacctrlid` |
| Approbation d'un controle | `w_qcctrl_appro` / `w_qcctrl_appro_multi` |
| Liberation d'un lot apres QC | `w_qcrelease` + `lots.loqcstatus` |
| Statut QC d'un lot | `lots.loqcstatus` + `w_qcstatus` |
| Declenchement automatique QC | `gf_qcctrl_launch()` appelee depuis `w_transact_rcpo_inout` |
| Verification matiere avant fabrication | `gf_check_mfg_mat_status(as_lot, as_message, ab_manual)` |
| Controle QC par codes-barres | `w_brf_quality` (BRF) / `w_bcd_quality` (BCD) |
| Plans de surveillance/monitoring | `w_monitplan` + `d_monitplan_list` |
| Tests de contamination | `w_monittest_contam` + `d_monittest_contam_update` |
| Reclamations (categories) | Table `claims` / `w_param_dyna` onglet `tabpage_claims` |
| Liaison article-reclamation | Table `lkitcl` (licitcode + licclid) |
| Expedition d'echantillons | `w_ship_sample` |
| Etiquettes de specification | Table `qcspecetiq` / `w_qcspec_etiq_print` |
| Impression rapport de controle | `w_qcctrl_print` + `d_qcctrl_print` / `d_qcctrl_mod*_print` |
| Impression certificat de conformite | `d_qcctrl_cofa_print` / `d_qcctrl_cofa_mod*_print` |
| Impression etiquettes QC | `d_qclabel_print` / `d_qclabel_mod1_print` |
| Tests de gamme (fabrication) | `d_rtspecline_update` (module `_methods`) |
| Tests de poste de travail | `d_wtspecline_update` (module `_manufg`) |
| Redesignation SSCC apres QC | `nvo_redesign_ssccline.uof_redisign_ssccline()` |
| NVO codes-barres QC | `nvo_bcd_brf` (module `_cust2`) — 148 fonctions |
| Lots en stock pour QC (par date) | `d_qc_lot` — lots avec lostock <> 0, filtre par date de reception |
