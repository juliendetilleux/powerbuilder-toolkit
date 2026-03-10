# 17 - Reporting et Impressions

## Vue d'ensemble

Le systeme de reporting et d'impression de PmiGest ERP repose sur une architecture centralisee autour de la fenetre generique `w_print` et de la structure `s_print` (alias `PrintParam`). Cette approche permet une gestion uniforme de l'impression de tous les documents de l'ERP : commandes, bons de livraison, factures, etiquettes, rapports, statistiques, etc.

Les DataWindows d'impression sont repartis dans **6 modules _prints_*** totalisant **1 318 DataWindows**, completes par le module **_FlxReport** (182 objets) pour les etats avances FlexReport, et le module **_query** (284 objets) pour les requetes InfoCentre.

### Chiffres cles

| Composant | Objets | Role |
|-----------|--------|------|
| `_prints_std` | 569 (dont 555 DW) | Impressions standard |
| `_prints_mod` | 193 DW | Impressions modifiees (variantes client) |
| `_prints_mod2t` | 148 DW | Impressions modifiees (2eme jeu) |
| `_prints_qry` | 207 DW | Impressions requetes/rapports |
| `_prints_crm` | 100 DW | Impressions CRM |
| `_prints_clot` | 115 DW | Impressions cloture |
| `_FlxReport` | 182 (15 win, 27 DW, 110 UO) | FlexReport integration |
| `_query` | 284 (45 win, 211 DW, 17 UO) | Requetes et InfoCentre |
| `_dashboard` | 9 (1 win, 8 DW) | Tableau de bord |
| **Total** | **~2 107** | |

---

## Modules d'impression (6 modules _prints_*)

### _prints_std -- Impressions standard (569 objets)

Module principal contenant les DataWindows d'impression standard de tous les documents ERP.

| Type | Nombre |
|------|--------|
| Fenetres | 6 (`w_print`, `w_print2fax`, `w_erreur_log_mail`, ...) |
| DataWindows | 555 |
| User Objects | 3 |
| Fonctions | 2 |
| Structures | 3 (`s_print`, `s_print_return`, `str_printerinfo`) |

**DataWindows principaux :**

| DataWindow | Description |
|------------|-------------|
| `d_salhead_print` | Confirmation de commande client |
| `d_shiphead_print` | Bon de livraison |
| `d_invhead_print` | Facture de vente |
| `d_purghead_print` | Commande d'achat |
| `d_trans_rcpo_print` | Bon de reception |
| `d_trans_rcmo_print` | Bon de production |
| `d_stock_id_print` | Etiquette de stock |
| `d_prepcmd_etiq_print` | Etiquette preparation commande |
| `d_print_altchoice` | Selection rapport alternatif (inclut verification FlexReport) |

### _prints_mod -- Impressions modifiees (193 objets)

Variantes client des DataWindows d'impression standard. Contient 193 DataWindows modifies pour des besoins specifiques de clients. Les noms suivent le meme pattern que `_prints_std` avec des suffixes ou prefixes personnalises.

### _prints_mod2t -- Impressions modifiees 2eme jeu (148 objets)

Second jeu de variantes d'impression. Contient 148 DataWindows supplementaires, typiquement pour des formats alternatifs (ex: multi-devises, langues differentes).

### _prints_qry -- Impressions requetes (207 objets)

DataWindows dedies a l'impression des resultats de requetes et rapports InfoCentre. Contient 207 DataWindows utilises par le module `_query` pour les sorties imprimees des analyses et statistiques.

### _prints_crm -- Impressions CRM (100 objets)

DataWindows dedies a l'impression des documents CRM : listes de contacts, fiches entreprise, actions commerciales, rapports d'activite. Contient 100 DataWindows.

### _prints_clot -- Impressions cloture (115 objets)

DataWindows dedies aux impressions de cloture comptable et statistiques mensuelles/annuelles. Contient 115 DataWindows. Utilise par `nvo_clot_print` (module `_monthclot`) pour les statistiques de vente par periode.

---

## FlexReport (module _FlxReport)

### Description

FlexReport est un outil integre de personnalisation d'etats qui permet aux utilisateurs de modifier visuellement les DataWindows d'impression sans toucher au code source. Il fonctionne comme un editeur graphique de rapports stockant les personnalisations en base de donnees.

### Architecture

Le module `_FlxReport` est compose de **10 sous-bibliotheques PBL** :

| Sous-bibliotheque | Role |
|-------------------|------|
| `_flxreport_sc.pbl` | Structures et classes de base (ex: `str_flx`) |
| `_flxr_control.pbl` | Objets de controle FlexReport (bandes, colonnes, formes) |
| `_flxr_integration.pbl` | Integration avec PmiGest (`nv_flxri_manager`, `nv_flxri_db_param`) |
| `_flxr_management.pbl` | Gestion des personnalisations et affectations |
| `_flxr_propertygrid.pbl` | Grille de proprietes pour l'editeur visuel |
| `_flxr_undoredo.pbl` | Annulation/retablissement des modifications |
| `_flxr_visual.pbl` | Rendu visuel, couleurs, affichage |
| `_flxapi.pbl` | API Win32 pour FlexReport (structures OS) |
| `_flxsp.pbl` | Composants supplementaires (spell check, etc.) |
| `_flxtb.pbl` | Barre d'outils FlexReport |
| `_flxts.pbl` | Tab strip FlexReport |

### Tables FLXR_*

FlexReport stocke ses donnees dans 4 tables principales :

| Table | Colonnes cles | Description |
|-------|--------------|-------------|
| `flxr_customization` | `id`, `dataobject`, `name`, `sub_report`, `name_sub_report` | Personnalisations d'etats (associe un nom a un DataWindow original) |
| `flxr_param` | `id`, `name`, `value` | Parametres FlexReport (couleurs, preferences : `color:*`) |
| `flxr_aff_user` | `id`, `dataobject`, `id_user`, `id_customization` | Affectation de personnalisations par utilisateur |
| `flxr_aff_group` | `id`, `dataobject`, `id_group`, `id_customization` | Affectation de personnalisations par groupe |
| `flxr_aff_global` | `id`, `dataobject`, `id_customization` | Affectation de personnalisations globales (tous utilisateurs) |

### Structure str_flx

```powerscript
global type str_flx from structure
    string    s_original_dataobject   // Nom du DW original (ex: "d_salhead_print")
    long      l_id_customization      // ID de la personnalisation dans flxr_customization
    string    s_name                  // Nom de la personnalisation
    string    s_syntax                // Syntaxe DW modifiee
    string    s_name_sub_report       // Nom du sous-rapport (si applicable)
end type
```

### Fenetres FlexReport

| Fenetre | Description |
|---------|-------------|
| `w_flxreport` | Fenetre principale FlexReport (MDI-like, 465 lignes, ancetre `window`) |
| `w_flxreport_customization` | Gestion des personnalisations d'un DataWindow |
| `w_flxreport_retrieval` | Parametres de recuperation des donnees (arguments DW) |
| `w_flxreport_affect` | Affectation des personnalisations aux utilisateurs/groupes |
| `w_flxreport_column` | Edition des proprietes de colonnes |
| `w_flxreport_expression` | Editeur d'expressions |
| `w_flxreport_code_table` | Table de codes pour les colonnes |
| `w_flxreport_colors` | Gestion des couleurs |
| `w_flxreport_find` | Recherche dans l'etat |
| `w_flxreport_dataobject` | Selection de DataWindow source |
| `w_flxreport_progress` | Barre de progression |
| `w_flxreport_custom_new` | Creation d'une nouvelle personnalisation |
| `w_flxreport_custom_rename` | Renommage d'une personnalisation |

### Objets NVO cles

| Objet | Role |
|-------|------|
| `nv_flxri_manager` | Gestionnaire d'integration FlexReport (variable globale `gnv_flxri_manager`) |
| `nv_flxri_db_param` | Parametres de connexion DB pour FlexReport |
| `nv_flxreport_db_param` | Parametres DB cote management |
| `nv_flxreport_struct` | Manipulation de structures DW |

---

## Requetes et InfoCentre (module _query)

### Description

Le module `_query` (284 objets) fournit un systeme de requetes et analyses appele **InfoCentre**. Il est accessible via le menu "InfoCentre" de l'ERP et permet des consultations croisees par tiers (client, fournisseur), par article, par lot, ainsi que des analyses de chiffre d'affaires, tracabilite, qualite, etc.

### Statistiques

| Type | Nombre |
|------|--------|
| Fenetres | 45 |
| DataWindows | 211 |
| User Objects | 17 |
| Fonctions | 4 |
| Structures | 5 (`s_qry_type`, `s_qry_calendar`, `s_qry_calendar_test`, `st_intrastat`, `object_style`) |
| Menus | 2 |

### Fenetres InfoCentre principales

#### Fiches tiers (consultations multi-onglets)

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_qry_cmpny_sal` | `w_response` | **Fiche client ventes** -- commandes, livraisons, factures, historique, CA, evolution, marges, statistiques cloture. La plus complexe (~127 variables, ~20 fonctions, multiples onglets). |
| `w_qry_cmpny_pur` | `w_response` | **Fiche fournisseur achats** -- commandes en cours, planifiees, receptions, historique, factures, contrats. ~52 variables, ~5 fonctions. |
| `w_qry_cmpny_stock` | `w_response` | **Fiche entreprise stock** -- historique stock, rotation, niveaux bas, qualite, mouvements. ~43 variables, ~9 fonctions. |
| `w_qry_cmpny_mfg` | `w_response` | **Fiche fabrication** -- OF en cours, planifies, historique, charge postes, arbres nomenclature, graphiques. ~47 variables, ~18 fonctions. |

#### Consultations articles et lots

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_qry_items` | `w_response` | Consultation articles -- filtres, taxes, documents, images, liens. ~7 variables, ~10 fonctions. |
| `w_qry_lot_info` | `w_response` | Information lots -- detail d'un lot, arborescence. |
| `w_qry_lotcons` | `w_response_dw` | Consultation lots -- recherche et affichage avec plage de dates. |
| `w_qry_ssccprod` | `w_response` | Consultation SSCC production -- code palette/lot. |

#### Tracabilite

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_qry_trace` | `w_response` | **Tracabilite** -- suivi amont/aval d'un lot, expeditions. ~12 variables, 3 fonctions. |
| `w_qry_trace_loteti` | `w_response` | Tracabilite lot/etiquette |
| `w_qry_trace_loteti_known` | `w_response` | Tracabilite lot/etiquette (lot connu) |
| `w_qry_trace_kitng` | `w_response` | Tracabilite kit/non-conforme |
| `w_qry_trace_show` | `w_response` | Affichage resultat tracabilite |

#### Qualite et services

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_qry_qcrslt` | `w_response` | **Resultats qualite** -- controles en cours, historique, evolution, specifications. ~51 variables, ~5 fonctions. |
| `w_qry_srvc` | `w_response` | **Services** -- taches, suivi SAV, monitoring. ~16 variables, ~5 fonctions. |

#### Temps et planning

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_qry_tictrl` | `w_response` | **Controle pointages** -- impressions semaine/mois par groupe/individu. ~4 variables, ~7 fonctions. |
| `w_qry_timesheet` | `w_response` | Feuille de temps |
| `w_qry_calendar` | `w_main` | **Calendrier** -- affichage mensuel/annuel. ~5 fonctions. |

#### CRM

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_qry_actions` | `w_response` | **Actions CRM** -- liste, filtrage, impression. ~26 variables, ~5 fonctions. |
| `w_qry_calls` | `w_response` | Appels CRM |
| `w_qry_adresses` | `w_response` | Consultation adresses |

#### Moteur de requetes generiques

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_qry_queries` | `w_response` | **Liste des requetes** -- selection, suppression. |
| `w_qry_query_select` | `w_response` | **Selection requete** -- choix vues, colonnes, criteres, filtres. ~5 variables, 4 fonctions. |
| `w_qry_query_show` | `w_response` | **Affichage requete** -- resultat avec SQL dynamique, modification style. ~12 variables, 3 fonctions. |
| `w_qry_query_save` | `w_response` | **Sauvegarde requete** -- enregistrement du parametrage. |

Le moteur de requetes generiques permet aux utilisateurs de creer leurs propres requetes a partir des vues disponibles, en choisissant les colonnes, les criteres et l'ordre de tri. Les requetes sont sauvegardees en base pour reutilisation.

---

## Dashboard (module _dashboard)

Module minimaliste (9 objets : 1 fenetre + 8 DataWindows) fournissant un tableau de bord embarque. Accessible via le menu InfoCentre > Dashboard. Le bouton `cb_dashboard` est integre dans certaines fenetres de stock (`w_transact_rcpo_inout`) pour un acces rapide.

Le menu principal (`m_erp_mdi`) contient un sous-menu `m_p_dashboard` dans la section `m_infocentre`.

---

## Objets PB cles

### Fenetre w_print (4216 lignes)

La fenetre centrale de tout le systeme d'impression. Herite de `w_response`.

**Variables d'instance principales :**

| Variable | Type | Role |
|----------|------|------|
| `printparam` | `s_print` | Parametres d'impression recus |
| `print_return` | `s_print_return` | Valeurs retournees apres impression |
| `zoom` | `integer` | Niveau de zoom |
| `NbReport` | `integer` | Nombre de rapports disponibles |
| `ReportDW` / `ReportLang` | `String` | DW et langue du rapport |
| `is_CustomDir` / `is_LocalDir` | `string` | Repertoires personnalises |
| `OriginalReport` | `String` | Nom du rapport original (avant personnalisation) |
| `is_defprinter` | `string` | Imprimante par defaut |
| `WithCopyCtrl` | `Boolean` | Controle des copies |
| `is_FACTELECT` | `string` | Facturation electronique |
| `is_PRTINVPDF` | `string` | Impression facture PDF |
| `ii_original` / `ii_duplicata` | `integer` | Compteurs original/duplicata |
| `is_dir_pdf` / `is_file_pdf` | `string` | Chemin et nom du fichier PDF |

**Fonctions principales :**

| Fonction | Description |
|----------|-------------|
| `retrieve_data()` | Recupere les donnees dans le DataWindow |
| `retrieve_report(string report2use)` | Recupere les donnees pour un rapport specifique |
| `select_report()` | Selection du rapport a utiliser (standard, modifie, FlexReport) |
| `set_report_fullname(string reportname)` | Resout le chemin complet du rapport |
| `zooming(string sign)` | Zoom avant/arriere dans l'apercu |
| `showcurrprinter()` | Affiche l'imprimante courante |
| `changelogo(string as_logoname, string as_object)` | Change le logo sur le document |
| `wf_save_pdf(string as_tempdir, string as_docname)` | Sauvegarde en PDF |
| `wf_printinvoices()` | Impression batch de factures |
| `wf_invpdf_add_duplicata()` | Ajoute un duplicata a la facture PDF |
| `wf_isoriginal()` | Determine si c'est un original |
| `wf_print_kitdocument()` | Impression document kit |
| `wf_auditgdrp(string type_trans)` | Audit RGPD |

### Structure s_print (parametres d'impression)

```powerscript
global type s_print from structure
    string      datawindow          // Nom du DW d'impression (ex: "d_salhead_print")
    string      retrievearg         // Arguments retrieve (ex: numero de commande)
    boolean     withfilter          // Permettre le filtrage
    string      filter              // Expression de filtre
    string      windowname          // Titre de la fenetre d'apercu
    string      docname             // Nom du document
    string      format              // Format papier (A4V, A4H)
    integer     nbcopy              // Nombre de copies
    boolean     companyname         // Afficher le nom de societe
    boolean     companycurrency     // Afficher la devise
    boolean     companylogo         // Afficher le logo societe
    boolean     withtitle           // Afficher un titre
    string      reporttitle         // Titre du rapport
    boolean     withinfo            // Afficher infos supplementaires
    string      infotext            // Texte d'information
    boolean     exportable          // Permettre l'export
    string      exportname          // Nom du fichier d'export
    string      exportformat        // Format (E=Excel, EC=Excel complet, P=PDF)
    boolean     withexportdw        // DW d'export separe
    string      exportdwname        // Nom du DW d'export
    boolean     withsetup           // Boite de dialogue imprimante
    boolean     withisoref          // Reference ISO
    string      isoref              // Texte reference ISO
    boolean     withlangctrl        // Controle de langue
    string      langref             // Langue de reference
    boolean     withfax             // Envoi par fax
    string      adid                // ID adresse (fax)
    string      importstring        // Donnees a importer (pour DW sans retrieve)
    boolean     autoprint           // Impression directe (true) ou apercu (false)
    boolean     closeafterprint     // Fermer apres impression
    boolean     withprinter         // Imprimante specifique
    string      printername         // Nom de l'imprimante
    boolean     withoutchoice       // Sans choix de rapport
    boolean     invoicepdf          // Generer PDF facture
    boolean     puheadpdf           // Generer PDF commande achat
    boolean     invoicepdf2com      // PDF facture vers comptabilite
    string      retrievearg_exp     // Arguments retrieve export
    string      invtype_f_n         // Type facture (F=facture, N=note credit)
    string      mcdo                // Multi-societe
    uo_datawindow  dw              // Reference au DataWindow (optionnel)
    boolean     withsort            // Permettre le tri
    string      sort                // Expression de tri
    boolean     proformapdf         // Generer PDF proforma
    any         any_retrieve[]      // Arguments retrieve generiques (tableau Any)
end type
```

### Structure s_print_return (retour apres impression)

```powerscript
global type s_print_return from structure
    string      dataobject          // Nom du DW utilise
    string      printername         // Imprimante utilisee
    boolean     printed             // Impression effectuee
    boolean     report_imposed      // Rapport impose (pas de choix)
    long        qty_printed         // Quantite imprimee
    integer     duplicata           // Nombre de duplicatas
    string      filename            // Nom du fichier genere
    string      directory           // Repertoire du fichier
end type
```

### Autres fenetres d'impression

| Fenetre | Module | Description |
|---------|--------|-------------|
| `w_print2fax` | `_prints_std` | Envoi par fax -- gestion des numeros, code pays, generation HTML. 7 fonctions. |
| `w_erreur_log_mail` | `_prints_std` | Journal des erreurs d'envoi email |
| `w_stock_id_print` | `_stock` | Impression etiquettes stock (integre FlexReport) |
| `w_mfgorder_label` | `_manufg` | Impression etiquettes OF (integre FlexReport) |
| `w_invoices_peppol` | `cust_peppol` | Factures electroniques Peppol |
| `w_invoices_pdf` | `cust_peppol` | Generation PDF factures en batch |

---

## Flux impression standard

Le flux standard est le plus courant. Il est utilise par tous les modules fonctionnels pour imprimer des documents.

```
1. Module appelant
   |-- Remplit s_print (PrintParam) avec :
   |   - datawindow = "d_salhead_print"
   |   - retrievearg = String(ll_salorder)
   |   - windowname, docname, format, nbcopy
   |   - companyname, companylogo, exportable, etc.
   |
2. OpenWithParm(w_print, PrintParam)
   |
3. w_print.open
   |-- Lit les parametres depuis Message.PowerObjectParm
   |-- Determine le rapport a utiliser :
   |   - Standard (DW de _prints_std)
   |   - Modifie (DW de _prints_mod ou _prints_mod2t)
   |   - FlexReport (personnalisation dans flxr_customization)
   |-- Cree dynamiquement le DataWindow
   |-- Connecte a SQLCA
   |-- Execute retrieve avec retrievearg
   |
4. Apercu (si autoprint = false)
   |-- Zoom, navigation pages, modification logo
   |-- Export possible (Excel, PDF)
   |
5. Impression
   |-- Selection imprimante (si withsetup = true)
   |-- Envoi a l'imprimante
   |-- Retour via s_print_return (printed, qty_printed, etc.)
   |
6. Options supplementaires
   |-- wf_save_pdf() → sauvegarde PDF
   |-- Email → openwithparm(w_email, email)
   |-- Fax → openwithparm(w_print2fax, printparam)
```

### Exemple d'appel typique

```powerscript
s_print PrintParam

PrintParam.datawindow = "d_salhead_print"
PrintParam.retrievearg = String(ll_salorder)
PrintParam.windowname = "Confirmation de commande"
PrintParam.docname = "CMD_" + String(ll_salorder)
PrintParam.format = "A4V"
PrintParam.nbcopy = 1
PrintParam.companyname = True
PrintParam.companylogo = True
PrintParam.withsetup = True
PrintParam.exportable = True
PrintParam.exportformat = "E"    // Excel

openwithparm(w_print, PrintParam)
```

---

## Flux impression personnalisee (FlexReport)

Quand une personnalisation FlexReport existe pour un DataWindow donne, `w_print` la detecte automatiquement et redirige vers `w_flxreport`.

```
1. w_print.select_report()
   |-- Consulte flxr_customization pour le DW demande
   |-- Si personnalisation trouvee → redirige vers FlexReport
   |
2. Preparation
   |-- Remplit str_flx avec :
   |   - s_original_dataobject = nom du DW original
   |   - l_id_customization = ID dans flxr_customization
   |   - s_name = nom de la personnalisation
   |-- Initialise gnv_flxri_manager (moteur DB, transaction SQL)
   |
3. OpenWithParm(w_flxreport, str_tmp)
   |-- w_flxreport charge la syntaxe DW modifiee depuis la BD
   |-- Ouvre les feuilles MDI internes (wf_open_sheet)
   |-- Affiche l'etat avec la mise en forme personnalisee
   |
4. L'utilisateur peut :
   |-- Imprimer
   |-- Exporter
   |-- Modifier la personnalisation (editeur visuel)
```

### Affectation des personnalisations

Le systeme d'affectation permet de definir quel rapport personnalise est utilise par qui :

- **Global** (`flxr_aff_global`) : applicable a tous les utilisateurs
- **Par groupe** (`flxr_aff_group`) : applicable a un groupe d'utilisateurs
- **Par utilisateur** (`flxr_aff_user`) : applicable a un utilisateur specifique

La priorite est : utilisateur > groupe > global.

---

## Flux requete InfoCentre

Le flux InfoCentre permet des consultations interactives multi-onglets avec impression integree.

```
1. Menu InfoCentre (m_infocentre)
   |-- Sous-menus : Tiers (m_p_cmpny), Adresses (m_p_adress),
   |   Articles (m_p_items), Dashboard (m_p_dashboard)
   |
2. Ouverture fenetre w_qry_*
   |-- Ex: w_qry_cmpny_sal pour fiche client ventes
   |-- Initialisation : chargement onglets, droits (wf_checkauthority)
   |-- Retrieve des DataWindows selon l'onglet selectionne
   |
3. Navigation multi-onglets
   |-- Chaque onglet charge ses donnees a la demande (lazy loading)
   |-- Variables iboo_* tracent les onglets deja charges
   |-- Ex: iboo_SaleRet, iboo_ShipRet, iboo_InvRet, iboo_HistoRet
   |
4. Impression depuis InfoCentre
   |-- Bouton impression → remplit s_print
   |-- Utilise les DW de _prints_qry
   |-- OpenWithParm(w_print, PrintParam)
   |
5. Requetes generiques (moteur)
   |-- w_qry_query_select → choix vue, colonnes, criteres
   |-- w_qry_query_show → execution SQL dynamique, affichage
   |-- w_qry_query_save → sauvegarde pour reutilisation
```

### Categories de droits InfoCentre

Le systeme de droits utilise des codes de module pour l'InfoCentre : `I` (InfoCentre) dans la table des autorites. Chaque fenetre `w_qry_*` appelle `wf_checkauthority()` pour verifier les droits de l'utilisateur courant.

---

## Flux FlexReport (creation/edition)

```
1. Acces via w_flxreport_customization
   |-- Liste les personnalisations existantes pour un DW
   |-- Permet de creer, modifier, supprimer
   |
2. Edition visuelle
   |-- Editeur graphique avec :
   |   - Barre d'outils (_flxtb)
   |   - Grille de proprietes (_flxr_propertygrid)
   |   - Undo/Redo (_flxr_undoredo)
   |   - Gestion des bandes (_flxr_control)
   |
3. w_flxreport_affect → Affectation
   |-- Arbre utilisateurs/groupes (wf_load_tree, wf_save_tree)
   |-- Deploiement : wf_deploy_tree(), ue_apply_all_users, ue_apply_all_groups
   |
4. Sauvegarde
   |-- Syntaxe DW modifiee stockee dans flxr_customization
   |-- Affectations dans flxr_aff_user, flxr_aff_group, flxr_aff_global
```

---

## Structure des donnees d'impression

### Tables de parametrage

| Table | Usage |
|-------|-------|
| `ARREPORT` / `aralternate` | Table des rapports alternatifs (reference les DW d'impression et variantes). Croisee avec `flxr_customization` dans `d_print_altchoice`. |
| `flxr_customization` | Personnalisations FlexReport |
| `flxr_param` | Parametres globaux FlexReport (couleurs, preferences) |
| `flxr_aff_user/group/global` | Affectations des personnalisations |

### Relations entre modules

```
Module fonctionnel (_sales, _purch, _stock, _manufg, ...)
    |
    |-- s_print (parametres) --> w_print (_prints_std)
    |                               |
    |                               |-- DW standard (_prints_std)
    |                               |-- DW modifie (_prints_mod, _prints_mod2t)
    |                               |-- DW FlexReport (_FlxReport + flxr_*)
    |                               |
    |                               |-- PDF export → fichier
    |                               |-- Email → w_email (Shared_mail)
    |                               |-- Fax → w_print2fax (_prints_std)
    |
    |-- InfoCentre (_query)
    |       |-- w_qry_cmpny_* → DW requetes (_prints_qry)
    |       |-- w_qry_query_* → Requetes generiques
    |       |-- w_qry_trace → Tracabilite
    |
    |-- Cloture (_monthclot)
            |-- nvo_clot_print → DW cloture (_prints_clot)
```

---

## Points d'attention

### Architecture d'impression

- **w_print est centralise** : toutes les impressions passent par `openwithparm(w_print, printparam)`. Ne jamais contourner ce mecanisme.
- **s_print est la structure d'echange** : tout parametre d'impression doit etre passe via cette structure. Le champ `any_retrieve[]` permet de passer des arguments de types varies.
- **s_print_return contient le retour** : apres impression, verifier `print_return.printed` pour savoir si l'impression a eu lieu.

### FlexReport

- **Tables FLXR_*** : les personnalisations sont stockees en base. Une modification de schema peut impacter tous les etats personnalises.
- **Priorite d'affectation** : utilisateur > groupe > global. Verifier `flxr_aff_user` en premier.
- **Integration via gnv_flxri_manager** : variable globale initialisee dans `w_print` avant l'appel a `w_flxreport`. Necessite `is_dbmotor` et `itr_sql` (transaction SQLCA).
- **w_flxreport herite de `window`** (pas de `w_response`) : c'est une fenetre MDI independante avec son propre cycle de vie.

### Module _query / InfoCentre

- **Chargement paresseux** : les onglets des fenetres `w_qry_cmpny_*` ne chargent les donnees qu'au premier affichage. Les variables `iboo_*` tracent l'etat.
- **w_qry_cmpny_sal est la plus complexe** : 127+ variables d'instance, multiples onglets (commandes, livraisons, factures, historique, CA, evolution, marges, cloture). Toute modification doit etre testee sur chaque onglet.
- **Requetes generiques** : le moteur `w_qry_query_select` / `w_qry_query_show` construit du SQL dynamique a partir des vues. Le SQL est dans `is_sql` et peut etre modifie via `change_select()`.

### Performance

- Les DataWindows d'impression avec beaucoup de lignes (factures multiples, etiquettes) peuvent etre lents. Utiliser `autoprint = true` pour eviter l'apercu.
- Le champ `importstring` de `s_print` permet d'injecter des donnees dans un DW sans retrieve SQL (utilise pour les statistiques de cloture via `nvo_clot_print`).

### Formats d'export

| Code | Format |
|------|--------|
| `E` | Excel |
| `EC` | Excel complet |
| `P` | PDF |

---

## Recherche rapide

| Besoin | Ou chercher |
|--------|-------------|
| Modifier un document imprime | `_prints_std` (DW original), `_prints_mod` / `_prints_mod2t` (variante), `flxr_customization` (FlexReport) |
| Ajouter un champ a une impression | Modifier le DW dans `_prints_std`, puis verifier les variantes `_prints_mod` |
| Personnaliser un etat sans code | Utiliser FlexReport : `w_flxreport_customization` → creer personnalisation |
| Ajouter un nouveau rapport | Creer DW dans `_prints_std`, ajouter l'appel avec `openwithparm(w_print, printparam)` |
| Modifier la logique d'impression | `w_print` (fenetre centrale, 4216 lignes) dans `_prints_std` |
| Ajouter une requete InfoCentre | Creer fenetre `w_qry_*` dans `_query`, DW dans `_prints_qry` |
| Consulter les ventes d'un client | `w_qry_cmpny_sal` dans `_query` |
| Tracabilite d'un lot | `w_qry_trace`, `w_qry_trace_loteti` dans `_query` |
| Gerer les affectations FlexReport | `w_flxreport_affect`, tables `flxr_aff_*` |
| Impression par fax (legacy) | `w_print2fax` dans `_prints_std` |
| Generation PDF facture | `w_print.wf_save_pdf()`, `w_invoices_pdf` dans `cust_peppol` |
| Statistiques de cloture | `nvo_clot_print` dans `_monthclot`, DW dans `_prints_clot` |
| Dashboard | Module `_dashboard` (1 fenetre, 8 DW) |
| Requetes generiques utilisateur | `w_qry_query_select` → `w_qry_query_show` dans `_query` |
