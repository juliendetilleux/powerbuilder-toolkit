# Domaine : Noyau Systeme

## Vue d'ensemble

PmiGest ERP (PMIX) est un logiciel de gestion integre pour PME, construit en PowerBuilder 2025 (runtime 25.0.0.3726). L'application demarre via le point d'entree `pmix/pmix.pbl/pmix.sra` (916 lignes), qui initialise les transactions BD (`SQLCA`, `SQLCB`), lit le fichier `pmix.ini` pour les parametres de connexion, se connecte a SQL Anywhere 17, puis ouvre la fenetre de login (`ws_password` / `ws_password_newdesign`). Apres authentification, le profil et les autorites de l'utilisateur sont charges, puis le cadre MDI principal `w_erp_mdi_frame` est ouvert avec son menu `m_erp_main` et la feuille de fond `w_erp_desktop`. Le systeme comporte 6 266 objets repartis dans 49 bibliotheques, 428 tables, 175 vues et 82 procedures stockees.

Les modules noyau sont `_ancestor` (classes de base), `_system` (administration, profils, BD), `_general` (utilitaires partages), `_design` (theming) et `_langue` (multilingue).

---

## Heritage des fenetres

Toutes les fenetres de l'application derivent d'une chaine d'heritage a 3 couches definie dans `_ancestor/`. Cette architecture garantit un comportement uniforme (controle d'acces, resize, design) a travers les ~1 158 fenetres du systeme.

### Arbre complet

```
window (type PB natif)
 |
 +-- w_a_pmi [_ancestor] .............. Couche 1 : controle d'acces, autorites, filtres
      |                                  (139 lignes)
      |
      +-- w_window [_ancestor] ........ Couche 2 : resize, design, sauvegarde tailles
           |                             (931 lignes)
           |
           +-- w_a_response_pmi [_ancestor] ........ Sous-type Response
           |    |
           |    +-- w_response [_ancestor] .......... Couche 3 : dialogue modal
           |    |    |                                 (~964 descendants)
           |    |    |
           |    |    +-- w_response_dw [_ancestor] .. Specialise DataWindow
           |    |         (16 descendants directs)
           |    |
           |    +-- w_brf_response [_ancestor] ..... Sous-type lecteur code-barres
           |         |
           |         +-- w_brf_nvo [_ancestor] ..... NVO barcode reader
           |         (7 descendants directs)
           |
           +-- w_a_main_pmi [_ancestor] ............ Sous-type Main (autonome)
           |    |
           |    +-- w_main [_ancestor] ............. Couche 3 : fenetre principale
           |         (~61 descendants)
           |
           +-- w_a_child_pmi [_ancestor] ........... Sous-type MDI Child
           |    |
           |    +-- w_child [_ancestor] ............ Couche 3 : feuille MDI
           |         (8 descendants directs)
           |
           +-- w_a_mdi_pmi [_ancestor] ............. Sous-type MDI Frame
           |    |
           |    +-- w_mdi [_ancestor] .............. Couche 3 : cadre MDI
           |         (3 descendants : w_erp_mdi_frame, w_crm_mdi_frame, w_intro_new)
           |
           +-- w_a_popup_pmi [_ancestor] ........... Sous-type Popup
           |    |
           |    +-- w_popup [_ancestor] ............ Couche 3 : fenetre flottante
           |         (16 descendants)
           |
           +-- w_a_mdihelp_pmi [_ancestor] ......... Sous-type MDI Help
           |    |
           |    +-- w_mdihelp [_ancestor]
           |         (1 descendant : w_ftp_main)
           |
           +-- 11 fenetres heritant directement de w_window (sans couche 3)
               w_db_move, w_crm_appointments, w_crm_appointments_param,
               w_crm_appointments_chgmtgrp, w_crm_agenda, w_ship_summary,
               w_linkitcountry, w_claims, w_adresgroup_select, w_icone, w_agendacolor
```

### Repartition des descendants par sous-type

| Sous-type | Ancetre couche 2 | Ancetre couche 3 | Descendants |
|-----------|------------------|-------------------|-------------|
| Response (modal) | `w_a_response_pmi` | `w_response` | ~964 |
| Response DW | (via `w_response`) | `w_response_dw` | 16 |
| Barcode Reader | `w_a_response_pmi` | `w_brf_response` | 7 |
| Main (autonome) | `w_a_main_pmi` | `w_main` | 61 |
| MDI Child | `w_a_child_pmi` | `w_child` | 8 |
| MDI Frame | `w_a_mdi_pmi` | `w_mdi` | 3 |
| Popup (flottante) | `w_a_popup_pmi` | `w_popup` | 16 |
| MDI Help | `w_a_mdihelp_pmi` | `w_mdihelp` | 1 |
| Direct w_window | -- | -- | 11 |

### Roles des couches

| Couche | Objet | Responsabilite |
|--------|-------|----------------|
| **Couche 1** | `w_a_pmi` (139 lignes) | Controle d'acces (`wf_windowscheckacces()`), verification autorites (`wf_set_instance_authority()`), filtres par defaut (`wf_set_default_filter()`), parametres programme (`wf_get_progparamwindow_object_i()`) |
| **Couche 2** | `w_window` (931 lignes) | Redimensionnement via `inv_resize` (`n_cst_resize`), sauvegarde/restauration tailles (`wf_save_size()`, `wf_restore_size()`), design visuel (`wf_set_design()`), gestion multilingue via `inv_language` |
| **Couche 3** | `w_response`, `w_main`, `w_child`, `w_popup`, `w_mdi`, `w_mdihelp` | Comportement specifique au type de fenetre (modale, autonome, MDI child, popup, etc.) |

---

## Heritage des User Objects

### Controles visuels (uo_*)

Chaque controle visuel standard PB est enveloppe dans un user object ancetre avec un intermediaire `uo_*_a_pmi` pour le controle d'acces :

```
datawindow (PB natif)
 +-- uo_dw_a_pmi [_ancestor] .......... Intermediaire acces
      +-- uo_datawindow [_ancestor] .... Base DataWindow (665 lignes)
           +-- uo_extendeddw [_system]
           +-- uo_extendeddw_2 [_system]
           +-- uo_datawindow_lang [_langue]
           +-- uo_dw_doc [_general]

singlelineedit (PB natif)
 +-- uo_sle_a_pmi [_ancestor]
      +-- uo_singlelineedit [_ancestor]
           +-- uo_linesearch [_system]
           +-- uo_filtersearch [_system]
           +-- uo_diffretrieve [_system]

commandbutton (PB natif)
 +-- uo_cb_a_pmi [_ancestor]
      +-- uo_commandbutton [_ancestor]
           +-- uo_commandbutton_lang [_langue]
           +-- u_language_lang [_langue]
           +-- u_cb [_ftp]

dropdownlistbox (PB natif)
 +-- uo_ddlb_a_pmi [_ancestor]
      +-- uo_dropdownlistbox [_ancestor]
           +-- uo_sort_group_profils [_system]
           +-- uo_ddlb_filtertype [_services]
           +-- uo_ddlb_filterservice [_services]
           +-- uo_ddlb_filterentity [_services]
           +-- uo_dropdownlistbox_lang [_langue]

tab (PB natif)
 +-- uo_tab_a_pmi [_ancestor]
      +-- uo_tab [_ancestor]
           +-- uo_tab_lang [_langue]

treeview (PB natif)
 +-- uo_tv_a_pmi [_ancestor]
      +-- uo_treeview [_ancestor]
           +-- u_treeview [_ftp]
```

### Objets non-visuels (nv_*, nvo_*)

```
nonvisualobject (PB natif)
 +-- nv_a_pmi [_ancestor] ............. Intermediaire acces
      +-- nv_nonvisualobject [_ancestor] Base NVO (18 lignes)
      |    +-- nvo_mail [_system]
      |    +-- nvo_users [_system]
      |    +-- nvo_specific [_system]
      |    +-- nvo_planifiedtask [_system]
      |    +-- nvo_function [_system]
      |    +-- nvo_dbgest [_system]
      |    +-- n_application [_system]
      |    +-- nvo_ship [_sales]
      |    +-- nvo_createinvoice [_sales]
      |    +-- nvo_invauto [_sales]
      |    +-- nvo_allocate [_stock]
      |    +-- nvo_recept [_stock]
      |    +-- nvo_method [_methods]
      |    +-- nvo_mfgreport [_manufg]
      |    +-- nvo_tictrl [_manufg]
      |    +-- nvo_plan [_planning]
      |    +-- nvo_advsched [_planning]
      |    +-- nvo_import [_masters]
      |    +-- nvo_createpdf [_edilink]
      |    +-- nvo_edi_transfert [_edilink]
      |    +-- nvo_subscription [_devis]
      |    +-- ... (105+ descendants au total)
      |
      +-- nv_sales [_sales] ............ NVO specialise ventes

datastore (PB natif)
 +-- nv_ds_a_pmi [_ancestor]
      +-- nv_datastore [_ancestor] ..... Base DataStore
           +-- uo_datastore [_system]
           +-- nvo_ds_saveerror [_system]
           +-- ds_error [_system]
           +-- nuo_srvc_task_print [_services]
           +-- nvo_ds_company_twinctr [_sales_crm]
           +-- nvo_datastore [_methods]

transaction (PB natif)
 +-- nv_tr_a_pmi [_ancestor]
      +-- nv_transaction [_ancestor] ... Transaction personnalisee
           (utilise pour SQLCA et SQLCB)

error (PB natif)
 +-- nv_er_a_pmi [_ancestor]
      +-- nv_error [_ancestor] ......... Gestion erreurs personnalisee

message (PB natif)
 +-- nv_me_a_pmi [_ancestor]
      +-- nv_message [_ancestor] ....... Message personnalise

errorlogging (PB natif)
 +-- nv_el_a_pmi [_ancestor]
      +-- nv_errorlogging [_ancestor] .. Journalisation erreurs
```

### Services techniques

```
n_base (PB natif / PFC)
 +-- n_cst_resize [_design] ........... Service de redimensionnement (1261 lignes)
      Fonctions : of_register(), of_unregister(), of_setminsize(),
                  of_SetOrigSize(), of_getminmaxpoints(), of_clear_register()

 +-- n_cst_dwsrv_resize ............... Service resize pour DataWindows
 +-- n_svc_dw_gridstyle ............... Service style grille DW
 +-- n_svc_dw_selectrow ............... Service selection lignes DW
```

---

## Tables systeme

### Tables principales

| Table | Role | Colonnes cles | FK |
|-------|------|---------------|-----|
| `users` | Utilisateurs du systeme | `uscode` (PK, char 50), `usactiv` (char 1), `usname` (char 30), `uspswrd` (char 50), `uslastcon` (timestamp), `ustyp` (char 1), `uslang` (char 2), `usnewdesign` (char 1), `usbomright` (char 1), `ussmcode` (char 8), `usdefaultmcdo` (varchar 10) | `salesman` -> `salesman` |
| `pfhead` | En-tetes de profils d'acces | `phcode` (PK, char 8), `phdesc` (varchar 30), `phactif` (char 1) | -- |
| `pfline` | Lignes de profils (droits par objet) | `plphcode` (PK, char 8), `plobjetid` (PK, numeric 5), `plautorite` (char 1) | `pfhead`, `pfobjet` |
| `pfobjet` | Objets de profil (ecrans/fonctions) | `poid` (PK, numeric 5), `posort` (numeric 5), `podesc` (varchar 60), `pogroup` (char 1), `podefaultval` (char 1), `poavailable` (char 1) | -- |
| `pfuseracces` | Acces specifiques par utilisateur | `pauscode` (PK, char 50), `papoid` (PK, numeric 5), `paautoritep` (char 1), `paautoriteu` (char 1), `paautoriteg` (char 1) | `pfobjet` |
| `pfusers` | Lien utilisateur-profil | `puuscode` (PK, char 50), `puprofil` (PK, char 8) | `pfhead` |
| `progparam` | Parametres par programme/module | `ppcode` (PK, char 12), `ppname` (varchar 30), `ppvalue` (varchar 4), `ppchoices` (varchar 20), `ppdesc` (long varchar), `ppdomsys/itm/adr/sal/pur/mfg/stk/dvi/prj/lot/bcd/fin/qua` (varchar 1 chacun) | -- |
| `programs` | Programmes/fonctionnalites | `pgcode` (PK, char 8), `pgname` (char 30) | -- |
| `parameters` | Parametres systeme cle/valeur | `pmcode` (PK, char 8), `pmname` (char 30), `pmtype` (char 1), `pmcval` (char 50), `pmival` (numeric 12), `pmnval` (numeric 12,4), `pmdval` (timestamp), `pm_fileval` (varchar 500) | -- |
| `Authorities` | Autorisations par utilisateur et programme | `aucode` (PK, char 50), `auprog` (PK, char 8), `auread` (char 1), `aumodif` (char 1) | `auprog` -> `programs(pgcode)` |
| `modules` | Modules applicatifs actifs | `mdcode` (PK, char 8), `mdactiv` (char 1), `mdtype` (char 10), `mdkey` (char 20), `mddesc` (char 8) | -- |

### Tables de support systeme

| Table | Role |
|-------|------|
| `params` | Parametres systeme generaux (cle/valeur) |
| `sysconfig` | Configuration systeme avancee |
| `sysversion` | Version de la structure BD (pour mises a jour) |
| `licence` | Licence d'utilisation (lecture seule) |
| `bomrights` | Droits specifiques nomenclature |
| `multico` | Configuration multi-societes |
| `planifiedtask` | Taches planifiees |
| `condtemplate` | Modeles de conditions commerciales |

---

## Objets PB cles

### Fenetres

| Fenetre | Module | Role | Lignes |
|---------|--------|------|--------|
| `w_erp_mdi_frame` | `_system` | Cadre MDI principal ERP. Reference par 248 objets. Contient `wf_adapt_erp_menu()` et `wf_get_acces_filter()` | 564 |
| `w_system_application` | `_system` | Parametres application. 14+ onglets : vente, stock, achat, fabrication, taches planifiees, controle stock, bibliotheques PBL, imprimantes, deconnexion | 14 263 |
| `w_system_database` | `_system` | Configuration BD, mises a jour structure, verification modifications, gestion acces BD, deconnexion utilisateurs | 3 028 |
| `w_profils_user` | `_system` | Gestion profils utilisateurs : droits d'acces, autorites, audit GDPR | 2 315 |
| `w_param_sys` | `_system` | Parametres systeme globaux : modules actifs, options, formats, EDI | 4 200+ |
| `ws_password` | `_system` | Ecran de connexion classique | -- |
| `ws_password_newdesign` | `_system` | Ecran de connexion nouveau design | -- |
| `ws_password2` | `_system` | Ecran de connexion variante 2 | -- |
| `w_passwrd_new` | `_system` | Changement de mot de passe | -- |
| `w_erp_desktop` | `_system` | Feuille MDI de fond (child) | -- |
| `w_system_upgrade` | `_system` | Mise a jour structure BD | -- |
| `w_system_auto_update` | `_system` | Mise a jour automatique au demarrage | -- |
| `w_profils` | `_system` | Liste et gestion des profils | -- |
| `w_intro` | `_system` | Ecran d'accueil (mode non-MDI) | -- |
| `w_intro_new` | `_design` | Ecran d'accueil nouveau design (MDI) | -- |
| `w_interco` | `_system` | Gestion inter-societes | -- |
| `w_planifiedtask_update` | `_system` | Mise a jour taches planifiees | -- |
| `w_planifiedtask_execute` | `_system` | Execution taches planifiees | -- |
| `w_param_location` | `_system` | Parametres localisation (emplacements, machines) | -- |
| `w_param_mail` | `_system` | Parametres serveur de messagerie | -- |
| `w_condtemplate_update` | `_system` | Modeles conditions commerciales | -- |
| `ws_about` | `_system` | A propos / informations version | -- |
| `w_debug_sql` | `_system` | Debug SQL | -- |
| `w_set_resize` | `_design` | Configuration du resize | -- |
| `w_mdi_background` | `_design` | Fond MDI personnalise (child) | -- |
| `w_progress_language` | `_langue` | Progression traduction | -- |
| `w_jobprogression` | `_general` | Barre de progression generique (popup) | -- |

### User Objects fondamentaux

| Objet | Type | Module | Role | Lignes |
|-------|------|--------|------|--------|
| `uo_datawindow` | Visuel | `_ancestor` | Base de tous les DataWindow controles. Surcharge `SetTransObject()` et `Update()` | 665 |
| `uo_singlelineedit` | Visuel | `_ancestor` | Base de tous les champs de saisie texte | -- |
| `uo_commandbutton` | Visuel | `_ancestor` | Base de tous les boutons | -- |
| `uo_dropdownlistbox` | Visuel | `_ancestor` | Base de toutes les listes deroulantes | -- |
| `uo_tab` | Visuel | `_ancestor` | Base de tous les controles onglets | -- |
| `uo_treeview` | Visuel | `_ancestor` | Base de tous les arbres | -- |
| `nv_nonvisualobject` | Non-visuel | `_ancestor` | Base NVO (105+ descendants) | 18 |
| `nv_datastore` | Non-visuel | `_ancestor` | Base DataStore | -- |
| `nv_transaction` | Non-visuel | `_ancestor` | Transaction personnalisee (SQLCA, SQLCB) | -- |
| `nv_error` | Non-visuel | `_ancestor` | Gestion d'erreurs personnalisee | -- |
| `nv_message` | Non-visuel | `_ancestor` | Message personnalise | -- |
| `nv_errorlogging` | Non-visuel | `_ancestor` | Journalisation des erreurs | -- |
| `n_cst_resize` | Service | `_design` | Service de redimensionnement (registre controles, recalcul positions) | 1 261 |
| `n_cst_dwsrv_resize` | Service | `_design` | Service resize specifique DataWindows | -- |
| `uo_extendeddw` | Visuel | `_system` | DataWindow etendu | -- |
| `uo_linesearch` | Visuel | `_system` | Recherche dans lignes | -- |
| `uo_filtersearch` | Visuel | `_system` | Recherche par filtre | -- |
| `uo_datastore` | Non-visuel | `_system` | DataStore systeme | -- |
| `nvo_mail` | Non-visuel | `_system` | Gestion envoi de mails | -- |
| `nvo_users` | Non-visuel | `_system` | Gestion utilisateurs | -- |
| `nvo_dbgest` | Non-visuel | `_system` | Gestion base de donnees | -- |
| `nvo_planifiedtask` | Non-visuel | `_system` | Taches planifiees | -- |
| `n_application` | Non-visuel | `_system` | Objet application | -- |

### Fonctions globales importantes

#### Module `_system` (77 fonctions)

| Fonction | Role |
|----------|------|
| `gf_checkacces` | Verification des droits d'acces d'un utilisateur |
| `gf_checkmodules` | Verification des modules actifs |
| `gf_check_licenceexp` | Verification expiration de la licence |
| `gf_check_pwd_expiry` | Verification expiration du mot de passe |
| `gf_check_new_pwd` | Validation d'un nouveau mot de passe |
| `gf_check_match_pwd` | Verification correspondance mot de passe |
| `gf_pwd_check_rules` | Validation regles de complexite mot de passe |
| `gf_update_pwd` | Mise a jour du mot de passe |
| `gf_access_update` | Mise a jour des droits d'acces |
| `gf_access_setnewobjects` | Ajout de nouveaux objets dans les profils |
| `gf_get_param_c` | Lecture parametre type caractere (table `parameters`) |
| `gf_get_param_d` | Lecture parametre type date |
| `gf_get_param_f` | Lecture parametre type fichier |
| `gf_get_param_i` | Lecture parametre type entier |
| `gf_get_param_n` | Lecture parametre type numerique |
| `gf_get_paramprog` | Lecture parametre programme (table `progparam`) |
| `gf_get_paramini_value` | Lecture parametre depuis fichier INI |
| `gf_get_paramini_string` | Lecture chaine depuis fichier INI |
| `gf_set_paramini_value` | Ecriture parametre dans fichier INI |
| `gf_sqlca_dbparm` | Configuration parametres connexion SQLCA |
| `gf_sqlstring_normalise` | Normalisation chaine SQL (echappement) |
| `gf_sqlstring_normalise_len` | Normalisation chaine SQL avec limite longueur |
| `gf_msgbox` | Boite de message personnalisee |
| `gf_showhelp` | Affichage aide |
| `gf_error_detail` | Detail d'erreur |
| `gf_dwerrfile` | Journalisation erreur DataWindow |
| `gf_get_usertype` | Type d'utilisateur courant |
| `gf_get_session_name` | Nom de la session courante |
| `gf_get_window_parent` | Fenetre parente |
| `gf_get_window4popup` | Fenetre pour popup |
| `gf_check_sheet` | Verification feuille MDI ouverte |
| `gf_check_servertime` | Synchronisation heure serveur |
| `gf_autoexec` | Execution automatique au demarrage |
| `gf_skin_set_w` | Application skin a une fenetre |
| `gf_skin_set_wo` | Application skin a un windowobject |
| `gf_skin_retrieve` | Chargement des skins |
| `gf_path_get` | Lecture chemin d'acces |
| `gf_path_set` | Ecriture chemin d'acces |
| `gf_path_choose` | Selection chemin via dialogue |
| `gf_changeprinter` | Changement d'imprimante |
| `gf_getnetworkinfo` | Information reseau |
| `gf_get_screenheight` | Hauteur ecran |
| `gf_get_os_tempdir` | Repertoire temporaire OS |
| `gf_substring` | Extraction sous-chaine |
| `gf_replace_accent` | Remplacement des accents |
| `gf_array_from_line` | Conversion ligne en tableau |
| `gf_mm2twips` | Conversion mm vers twips |
| `gf_getproject` | Information projet |
| `gf_getchecksum` | Calcul checksum |
| `gf_popmenu_color` | Couleur menu contextuel |
| `nvl` | Fonction NVL (5 surcharges) |
| `iif` | Fonction IIF inline (7 surcharges) |
| `iin` | Fonction IN (3 surcharges) |
| `noaccess` | Affichage message "acces refuse" |
| `accessdenied` | Affichage message "acces interdit" |
| `dberrormsg` | Message d'erreur BD |
| `centerwindow` | Centrage fenetre |
| `centerscreen` | Centrage ecran |
| `checkkey` | Verification cle de licence |
| `checkifruning` | Verification si application deja en cours |
| `sysuserpwd` | Mot de passe utilisateur systeme |
| `partnerpwd` | Mot de passe partenaire |
| `hoursbetween` | Heures entre deux dates |
| `get_os` | Detection OS |
| `get_adname_from_adcode` | Nom adresse depuis code |
| `f_remove_char` | Suppression de caracteres |
| `f_check_pbl_update` | Verification mise a jour PBL |
| `check_idcode` | Verification code identification |

#### Module `_general` (42 fonctions)

| Fonction | Role |
|----------|------|
| `gf_replaceall` | Remplacement global de chaine |
| `gf_replaceall_fordw` | Remplacement global pour DataWindows |
| `gf_replace_character` | Remplacement de caracteres |
| `gf_removeaccent` | Suppression des accents |
| `gf_string2dec` | Conversion chaine vers decimal |
| `gf_value2words` | Conversion nombre en mots (lettres) |
| `gf_tridw` | Tri DataWindow |
| `gf_multitridw` | Tri multiple DataWindow |
| `gf_getdwfilter` | Obtention filtre DataWindow |
| `gf_dw_ddlb_deleteitems` | Suppression items dans dropdown DW |
| `gf_getcalendar` | Calendrier |
| `gf_get_week_number` | Numero de semaine |
| `gf_get_month_first_day` | Premier jour du mois |
| `gf_get_month_last_day` | Dernier jour du mois |
| `gf_get_next_month_first_day` | Premier jour du mois suivant |
| `gf_lastdayofmonth` | Dernier jour du mois |
| `gf_correlation_line` | Correlation de lignes |
| `gf_docrefdelete` | Suppression reference document |
| `gf_getnextmfgord` | Prochain numero d'OF |
| `gf_getnexthistocall` | Prochain historique appel |
| `gf_get_lasts_closed_of` | Derniers OF clotures |
| `gf_invstructcom_create` | Creation structure commentaire facture |
| `gf_qcinfo_retrieveparam` | Parametres info qualite |
| `gf_qtywip` | Quantite en-cours (WIP) |
| `numdaysinmonth` | Nombre de jours dans le mois |
| `eurodaynumber` | Numero de jour europeen |
| `decp` | Calcul decimal de precision |
| `daystimeafter` | Jours apres une date/heure |
| `relativedatetime` | Date/heure relative |
| `get_day_name` | Nom du jour |
| `get_month_name` | Nom du mois |
| `get_consignement` | Donnees consignation |
| `getadresscomment` | Commentaire adresse |
| `getdefaultshipto` | Adresse de livraison par defaut |
| `getitemcomment` | Commentaire article |
| `getnextconsseq` | Prochaine sequence consignation |
| `getnexthistoseq` | Prochaine sequence historique |
| `getnextlinkseq` | Prochaine sequence lien |
| `lotsyntaxok` | Validation syntaxe lot |
| `savehistojob` | Sauvegarde historique travail |
| `savehistojobseq` | Sauvegarde historique travail avec sequence |
| `savehistojobsequser` | Sauvegarde historique travail avec sequence et utilisateur |

---

## Flux : Demarrage application

### Sequence detaillee

```
pmix.sra (event open)
  |
  1. Creer SQLCA = nv_transaction
  2. Creer SQLDA = nv_dynamicdescriptionarea
  3. Lire pmix.ini (gs_dbms, gs_dbparm)
  4. Connexion SQLCA a la base SQL Anywhere 17
  5. Creer SQLCB = nv_transaction (connexion secondaire)
  6. Initialiser variables globales (gs_appName, gs_AppPath, gs_pmi_version, etc.)
  |
  7. Ouvrir fenetre de login
     |  ws_password / ws_password_newdesign / ws_password2
     |  -> Verification identifiant et mot de passe (table `users`)
     |  -> Verification licence (table `licence`)
     |  -> Choix mode MDI (radio buttons `rb_mdi`) ou mode simplifie
     |
  8. Charger profil et autorites
     |  -> tables `pfusers`, `pfhead`, `pfline`, `pfobjet`, `pfuseracces`, `Authorities`
     |
  9. Mise a jour automatique (si necessaire)
     |  -> w_system_auto_update / w_sysupgrade_mess
     |  -> table `sysversion`
     |
 10. Ouvrir cadre principal
     |  -> w_erp_mdi_frame (mode MDI) ou w_intro (mode simplifie)
     |
 11. Charger menus
     |  -> m_erp_main (menu principal ERP)
     |  -> wf_adapt_erp_menu() selon les droits
     |
 12. Ouvrir feuille de fond
     |  -> w_erp_desktop (feuille MDI background)
     |
 13. Application prete pour l'utilisation
```

### Ouverture d'une fenetre typique

```
OpenWithParm(w_xxx, parametre)
  |
  +-- w_a_pmi.open (Couche 1)
  |    +-- wf_windowscheckacces()  --> verification droits
  |    +-- wf_set_instance_authority()
  |
  +-- w_window.open (Couche 2)
  |    +-- wf_restore_size()  --> restauration position sauvegardee
  |    +-- wf_set_resize()    --> activation resize via inv_resize
  |    +-- wf_set_design()    --> application theme courant
  |
  +-- w_response.open (Couche 3, ou w_main, w_child, etc.)
  |
  +-- w_xxx.open (fenetre concrete)
       +-- Message.StringParm / PowerObjectParm --> lecture parametres
       +-- Initialisation specifique
       +-- Retrieve des DataWindows
```

---

## Flux : Gestion des profils et autorites

### Modele de donnees

Le systeme de securite repose sur une hierarchie a 3 niveaux :

1. **Objets de profil** (`pfobjet`) : definissent les ecrans/fonctions securisables. Chaque objet a un identifiant numerique (`poid`), une description (`podesc`), un groupe (`pogroup`), une valeur par defaut (`podefaultval`) et un indicateur de disponibilite (`poavailable`).

2. **Profils** (`pfhead` + `pfline`) : un profil est un ensemble nomme de droits. `pfhead` definit le profil (code, description, actif). `pfline` associe chaque objet de profil (`plobjetid`) a un niveau d'autorite (`plautorite`).

3. **Utilisateurs** : deux mecanismes d'affectation :
   - `pfusers` : lien utilisateur-profil (un utilisateur peut avoir plusieurs profils via `puuscode` + `puprofil`)
   - `pfuseracces` : droits specifiques par utilisateur, surchargeant le profil (`paautoritep`, `paautoriteu`, `paautoriteg`)

4. **Autorites par programme** (`Authorities`) : droits lecture/modification par utilisateur (`aucode`) et par programme (`auprog` -> `programs.pgcode`). Champs `auread` et `aumodif`.

### Flux de creation/modification d'un profil

```
1. Administrateur ouvre w_profils (liste des profils)
   -> DataWindow d_profils_list (table pfhead)

2. Creation ou selection d'un profil
   -> w_profils_user (2315 lignes)
   -> Variables: ii_Object, is_user_novis, is_user_vis, ib_AUtority_Changed

3. Configuration des droits par ecran/fonction
   -> Chaque objet de pfobjet est affiche
   -> Niveau d'autorite defini dans pfline.plautorite

4. Affectation utilisateurs au profil
   -> Table pfusers (puuscode + puprofil)

5. Surcharges specifiques par utilisateur
   -> Table pfuseracces (paautoritep, paautoriteu, paautoriteg)

6. Droits specifiques nomenclature (si usbomright='Y')
   -> Table bomrights

7. Rafraichissement
   -> wf_refresh(string) pour un utilisateur
   -> wf_refresh_autorite() pour les autorites
   -> wf_menu_autorities() pour les menus

8. Audit GDPR
   -> wf_auditgdrp(string) par type de transaction
```

### Verification des droits a l'ouverture de fenetre

```
w_a_pmi.open
  |
  +-- wf_windowscheckacces()
  |    |
  |    +-- Lecture pfuseracces pour l'utilisateur courant
  |    +-- Si pas de surcharge : lecture pfline via pfusers.puprofil
  |    +-- Verification Authorities (auread, aumodif)
  |    +-- Si acces refuse : noaccess() ou accessdenied()
  |
  +-- wf_set_instance_authority()
  |    +-- Configure ipo_return_authority
  |
  +-- wf_set_default_filter(awo_control[])
       +-- Applique filtres par defaut selon profil
```

---

## Flux : Configuration application

### Parametres systeme (table `parameters`)

La table `parameters` stocke les parametres globaux du systeme avec typage :
- `pmtype` = 'C' : valeur caractere dans `pmcval`
- `pmtype` = 'I' : valeur entiere dans `pmival`
- `pmtype` = 'N' : valeur numerique dans `pmnval`
- `pmtype` = 'D' : valeur date dans `pmdval`
- `pmtype` = 'F' : valeur fichier dans `pm_fileval`

Acces via les fonctions globales `gf_get_param_c()`, `gf_get_param_i()`, `gf_get_param_n()`, `gf_get_param_d()`, `gf_get_param_f()`.

### Parametres par programme (table `progparam`)

La table `progparam` permet de definir des parametres specifiques par domaine fonctionnel. Chaque parametre a un code (`ppcode`), un nom (`ppname`), une valeur (`ppvalue`), des choix possibles (`ppchoices`), une description (`ppdesc`) et des flags de domaine :

| Colonne | Domaine |
|---------|---------|
| `ppdomsys` | Systeme |
| `ppdomitm` | Articles |
| `ppdomadr` | Adresses |
| `ppdomsal` | Ventes |
| `ppdompur` | Achats |
| `ppdommfg` | Fabrication |
| `ppdomstk` | Stock |
| `ppdomdvi` | Devis |
| `ppdomprj` | Projets |
| `ppdomlot` | Lots |
| `ppdombcd` | Codes-barres |
| `ppdomfin` | Finance |
| `ppdomqua` | Qualite |

Acces via `gf_get_paramprog()` et dans les fenetres via `wf_get_progparamwindow_object_i()` (w_a_pmi).

### Fenetre w_system_application (14 263 lignes)

Plus grande fenetre de l'application. Gere la configuration detaillee par module avec de nombreux onglets. Fonctions principales :
- `checkstock_lot()` / `checkstock_item()` / `check_stock()` : controle d'integrite du stock
- `check_alloc_logical()` / `check_alloc_physical()` : verification des allocations
- `wf_get_reports()` / `wf_get_inforeports()` : gestion des rapports
- `wf_library_list()` / `wf_getdwlib()` : gestion des bibliotheques PBL
- `wf_wama_recalcul()` : recalcul WAMA expedition
- `wf_check_itstock_integrity()` : verification integrite stock articles
- `wf_planedtask_refresh()` : rafraichissement taches planifiees
- `wf_printsetup_filter()` : filtre configuration impression
- `wf_disconnectuser()` : deconnexion d'un utilisateur

### Fenetre w_system_database (3 028 lignes)

Gestion de la base de donnees :
- `isvalidaut()` : validation fichier autorite
- `wf_checkdbmod()` : verification modification BD
- `wf_dbaccess()` : gestion acces base de donnees
- `wf_disconnectuser()` : deconnexion utilisateur

### Modules actifs (table `modules`)

La table `modules` controle l'activation des modules fonctionnels. La verification se fait via `gf_checkmodules()`. Colonnes : `mdcode` (code module), `mdactiv` (actif O/N), `mdtype` (type), `mdkey` (cle de licence), `mddesc` (description).

### Fichier INI

Le fichier `pmix.ini` stocke les parametres de connexion et de configuration locale. Acces via `gf_get_paramini_value()`, `gf_get_paramini_string()` et `gf_set_paramini_value()`.

---

## Design et theming

### Module `_design` (58 objets)

| Type | Nombre |
|------|--------|
| Fenetres | 10 |
| DataWindows | 7 |
| User Objects | 31 |
| Fonctions | 3 |
| Structures | 5 |
| Menus | 2 |

### Mecanisme

Le design est applique a chaque fenetre via `w_window.wf_set_design()` (Couche 2). Cette fonction appelle `wf_set_design_control(windowobject[], string)` pour appliquer les couleurs aux controles.

Le service principal est `n_cst_resize` (1 261 lignes) qui gere le redimensionnement automatique de tous les controles enregistres.

### Fenetres design

- `w_set_resize` : configuration du resize (herite de w_main)
- `w_mdi_background` : fond MDI personnalise (herite de w_child)
- `w_bkg` : fond (herite de w_child)
- `w_icone` : gestion icones (herite directement de w_window)
- `w_intro_new` : ecran d'accueil nouveau design (herite de w_mdi)

### Mecanisme de resize

1. A l'ouverture : `w_window.wf_set_resize()` est appele
2. Chaque controle est enregistre via `n_cst_resize.of_register(control, methode)` avec une methode de resize (deplacement X/Y, mise a l'echelle largeur/hauteur)
3. Lors du `resize` : `n_cst_resize.pfc_resize` recalcule positions et tailles
4. Taille minimale : `of_setminsize()`
5. Activation : `of_setresize(TRUE)` dans la fenetre

### Variables de resize dans w_window

| Variable | Type | Role |
|----------|------|------|
| `inv_resize` | `n_cst_resize` | Service de resize fenetre |
| `inv_dw_resize` | `n_cst_dwsrv_resize` | Service resize DataWindow |
| `inv_resizer` | `nv_auto_resizer` | Resizer automatique |
| `ib_resize` | Boolean | Flag activation resize |
| `inv_ds_resize` | `nv_datastore` | Donnees de resize |
| `ib_save_size` | Boolean | Activation persistence taille |
| `inv_ds_size` | `nv_datastore` | Stockage taille |

### Skins

Les fonctions `gf_skin_set_w()`, `gf_skin_set_wo()` et `gf_skin_retrieve()` dans `_system` gerent l'application de skins aux fenetres et controles. Le flag global `gb_newdesign` active le nouveau design.

---

## Multilingue

### Module `_langue` (28 objets)

| Type | Nombre |
|------|--------|
| Fenetres | 3 |
| DataWindows | 6 |
| User Objects | 17 |
| Fonctions | 1 |
| Structures | 1 |

### Mecanisme

La gestion multilingue est activee via la variable globale `GB_MULTILANG` (defaut: `False`). Quand elle est active :

1. `w_window` instancie `inv_language` (de type `nv_language`) dans la Couche 2
2. Les controles visuels ont des variantes multilingues dans `_langue` :
   - `uo_datawindow_lang` : DataWindow avec traduction
   - `uo_commandbutton_lang` : Bouton avec traduction
   - `uo_dropdownlistbox_lang` : Liste deroulante avec traduction
   - `uo_tab_lang` : Onglet avec traduction
   - `u_language_lang` : Controle de langue

3. Flags globaux :
   - `GB_MULTILANG` : Activation du systeme multilingue
   - `gb_translate` : Mode traduction actif
   - `gb_mode_translate` : Mode traduction en cours
   - `gs_SysLang` : Langue du systeme

4. Langue utilisateur : `users.uslang` (char 2)
5. Traduction utilisateur : `users.ustranslate` (bit)
6. Fenetre de progression : `w_progress_language` (herite de w_child)

---

## Variables globales

### Objets de transaction

| Variable | Type | Role |
|----------|------|------|
| `SQLCA` | `nv_transaction` | Transaction principale, utilisee par defaut pour toutes les operations DB |
| `SQLCB` | `nv_transaction` | Transaction secondaire pour operations concurrentes (batch, traitement parallele) |
| `SQLDA` | `nv_dynamicdescriptionarea` | SQL dynamique |

### Configuration systeme

| Variable | Type | Description |
|----------|------|-------------|
| `gs_appName` | String | Nom de l'application ("PMIX") |
| `gs_CnxName` | String | Nom de connexion utilisateur |
| `gs_dbms` | String | Type SGBD (ex: "ODBC") |
| `gs_dbparm` | String | Parametres de connexion DB |
| `gs_AppPath` | String | Chemin de l'application |
| `gs_pmi_version` | String | Version de l'application |
| `gs_Key` | String | Cle de licence globale |
| `gs_SysLang` | String | Langue du systeme |
| `gl_connect_id` | Long | ID de connexion courante |
| `gi_os` | Integer | Systeme d'exploitation |

### Parametres metier

| Variable | Type | Description |
|----------|------|-------------|
| `gs_mode` | String | Mode de fonctionnement (demo, etc.) |
| `gs_ShipTime` | String | Mode expedition (jour ou jour/heure) |
| `gs_PurOrdTime` | String | Mode commande achat |
| `gs_QCAudit` | String | Parametres audit qualite |
| `gs_lotlogic` | String | Logique de gestion des lots |
| `gs_round` | String | Methode d'arrondi tarifaire |
| `gi_nbdec` | Integer | Nombre de decimales tarifs |
| `gs_CashName` | String | Numero de caisse associee au PC |
| `gs_licenceMail` | String | Licence email |
| `gi_pmix_pdf` | Integer | Mode PDF (0=aucun, 1=Amyuni, 2=PB integre) |
| `gs_interco_data[]` | String[] | Donnees inter-societes |
| `gs_bearer` | String | Token d'authentification API |

### Flags d'etat

| Variable | Type | Description |
|----------|------|-------------|
| `gb_IsPmiGest` | Boolean | Flag application PmiGest |
| `gb_readonly` | Boolean | Mode lecture seule |
| `gb_modif` | Boolean | Modifications en cours |
| `GB_MULTILANG` | Boolean | Activation multilingue (defaut: False) |
| `gb_newdesign` | Boolean | Nouveau design active (defaut: False) |
| `GB_CRMfirstopen` | Boolean | Premier ouverture CRM (defaut: False) |
| `gb_translate` | Boolean | Mode traduction (defaut: False) |
| `gb_mode_translate` | Boolean | Mode traduction actif (defaut: False) |
| `gs_autokill` | Character | Auto-kill session ('Y' par defaut) |
| `gs_SESSIONWIN` | String | Fenetre de session |

### Gestion d'erreurs

| Variable | Type | Description |
|----------|------|-------------|
| `gb_error_detail` | Boolean | Affichage details erreur |
| `gs_error_detail` | String | Details de la derniere erreur |
| `gb_error_ResumeNext` | Boolean | Continuer apres erreur |
| `gb_error_return` | Boolean | Retour apres erreur |

### Interface

| Variable | Type | Description |
|----------|------|-------------|
| `gl_menucolors[]` | Long[] | Couleurs des menus |
| `gst_keep_perc[]` | st_keep_perc[] | Pourcentages sauvegardes |

### Fonctions externes (DLL)

| Fonction | DLL | Usage |
|----------|-----|-------|
| `GetCursorPos()` | user32.dll | Position du curseur souris |
| `ChooseColor()` | comdlg32.dll | Dialogue selection couleur |

---

## Couche de personnalisation client

### Module `_sysxtra` (23 objets)

Contient les surcharges specifiques au client. Les objets heritent des objets standards et ajoutent ou modifient le comportement. Ce mecanisme permet de personnaliser l'application sans modifier le code standard.

Exemples :
- `nvo_xtra_edi_transfert` : herite de `nvo_edi_transfert` -- surcharge du transfert EDI
- `w_xtra_brf_menu_stk` : surcharge du menu stock codes-barres

### Module `Cust_Empty` (7 objets)

Templates vides que le client peut implementer (fonctions, user objects, datawindows). Sert de point d'extension predetermine.

### Module `_cust2` (83 objets)

Extensions client supplementaires.

---

## Menus principaux

| Menu | Module | Role |
|------|--------|------|
| `m_erp_mdi` | `_system` | Menu principal ERP (barre de menu MDI) |
| `m_erp_main` | `_system` | Menu principal (charge dans w_erp_mdi_frame) |
| `m_action` | `_system` | Menu actions (toolbar) |
| `m_action_4crm` | `_system` | Menu actions CRM |
| `m_popordr` | `_system` | Menu contextuel commandes |
| `m_Xtra_Action` | `_sysxtra` | Menu actions surcharge client |

---

## Points d'attention

### Heritage critique

- **Ne jamais modifier `_ancestor` sans precaution** : une modification dans `w_a_pmi` impacte les ~1 158 fenetres, une modification dans `w_response` impacte ~964 fenetres. Toujours verifier l'heritage avec `pb_get_inheritance` avant de modifier un ancetre.
- **Ne jamais modifier les sections `forward`, `on create` ou `on destroy`** dans les fichiers .sr* -- elles sont generees par l'IDE PowerBuilder.
- Les intermediaires (`w_a_response_pmi`, `uo_dw_a_pmi`, `nv_a_pmi`, etc.) ne doivent generalement pas etre modifies directement.

### Acces base de donnees

- Toujours verifier `SQLCA.SQLCode` apres chaque operation SQL. Codes : 0=succes, -1=erreur, 100=NOT FOUND.
- Les DataWindows utilisent `SetTransObject(SQLCA)` -- l'ancetre `uo_datawindow` surcharge cette fonction.
- `SQLCB` est reserve aux operations concurrentes (batch, traitement parallele).

### Communication inter-fenetres

- Pattern principal : `OpenWithParm()` / `CloseWithReturn()`.
- Parametres simples via `Message.StringParm`, complexes via `Message.PowerObjectParm` (structures `st_*`).
- Les fenetres `w_response` (modales) utilisent systematiquement ce pattern.

### Sauvegarde taille

- `w_window` sauvegarde/restaure automatiquement la position et la taille des fenetres entre sessions via `wf_save_size()` / `wf_restore_size()`.
- Le flag `ib_save_size` controle l'activation.

### Modules et licences

- Les modules actifs sont controles par la table `modules` et verifie via `gf_checkmodules()`.
- La licence est verifiee au demarrage par `gf_check_licenceexp()`.
- Les mots de passe sont geres avec verification de regles (`gf_pwd_check_rules`), expiration (`gf_check_pwd_expiry`) et correspondance (`gf_check_match_pwd`).

### Multi-societes

- La configuration `multico` impacte les ventes, achats et la comptabilite.
- Donnees inter-societes dans `gs_interco_data[]`.
- Fenetre de gestion : `w_interco`.

---

## Recherche rapide

### Explorer les ancetres

```bash
# Lire un ancetre fenetre
pb_read_object w_a_pmi
pb_read_object w_window
pb_read_object w_response

# Heritage complet d'un objet
pb_get_inheritance w_response
pb_get_inheritance uo_datawindow
```

### Explorer les tables systeme

```bash
# Via dbisql CLI
"/c/Program Files/SQL Anywhere 17/Bin32/dbisql.exe" -c "DSN=Pmix" -nogui
  SELECT * FROM users WHERE uscode = 'PMIGEST';
  SELECT * FROM pfhead WHERE phactif = 'Y';
  SELECT ph.phcode, ph.phdesc, po.podesc, pl.plautorite
    FROM pfline pl
    JOIN pfhead ph ON ph.phcode = pl.plphcode
    JOIN pfobjet po ON po.poid = pl.plobjetid
    WHERE ph.phcode = 'ADMIN';
  SELECT * FROM progparam WHERE ppdomsys = 'Y';
  SELECT * FROM parameters;
  SELECT * FROM modules WHERE mdactiv = 'Y';
  SELECT * FROM Authorities WHERE aucode = 'PMIGEST';
```

### Explorer les fonctions systeme

```bash
# Rechercher les fonctions d'acces
pb_search_code "gf_checkacces"
pb_search_code "wf_windowscheckacces"

# Rechercher les fonctions de parametres
pb_search_code "gf_get_param"
pb_search_code "gf_get_paramprog"

# Graphe d'appels
pb_get_call_graph gf_checkacces
pb_get_call_graph wf_windowscheckacces
```

### Explorer les objets systeme

```bash
# Lister les objets du module _system
pb_list_objects --object_type window   # puis filtrer par library _system
pb_list_objects --object_type function # puis filtrer par library _system

# Sommaire d'un objet
pb_get_object_summary w_erp_mdi_frame
pb_get_object_summary w_system_application
pb_get_object_summary w_profils_user

# Dependances
pb_get_dependencies w_erp_mdi_frame
pb_get_dependencies gf_checkacces
```

### Recherches par pattern

```bash
# Rechercher les references a une table
pb_search_code "FROM users"
pb_search_code "FROM pfhead"
pb_search_code "FROM parameters"

# Rechercher les appels de fonctions globales
pb_search_code "gf_msgbox"
pb_search_code "gf_error_detail"

# Rechercher les patterns de securite
pb_search_code "checkacces"
pb_search_code "accessdenied"
pb_search_code "noaccess"
```

### Grep dans le code source

```
# Exemples de recherche Grep dans le repertoire source
Grep: pattern="wf_windowscheckacces" glob="*.srw"
Grep: pattern="SQLCA.SQLCode" glob="*.sr*"
Grep: pattern="gf_get_param_c" glob="*.sr*"
Grep: pattern="OpenWithParm" glob="*.srw" path="_system"
```

---

## Automatisation : Connexion a PMIX

### Identification des champs Login/Password

La fenetre de connexion (`ws_password` ou `ws_password_newdesign`) contient **3 champs Edit** :

| Champ | Position (top) | Position (left) | Statut |
|-------|:---:|:---:|---|
| Champ cache | 260 | -- | **NE PAS UTILISER** |
| Login (username) | 594 | -- | Principal |
| Password | 627 | -- | Principal |

**IMPORTANT** : Identifier les champs par leur **handle hexadecimal** retourne par `pb_list_controls`, PAS par leur index numerique. L'ordre z-order Win32 ne correspond pas a l'ordre visuel.

### Sequence exacte de connexion

1. **Lister les controles** de la fenetre de login :
   ```
   pb_list_controls window_title="PMI -  Login  PMIGEST"
   ```

2. **Identifier les handles** : noterle handle (format `0x...`) du champ Login et du champ Password. Ignorer le 3e Edit (top=260).

3. **Taper le login** :
   ```
   pb_interact_control action="click_input" control_handle=<HANDLE_LOGIN>
   pb_interact_control action="type_keys" control_handle=<HANDLE_LOGIN> keys="PMIGEST"
   ```

4. **Taper le mot de passe ET soumettre** (une seule commande) :
   ```
   pb_interact_control action="click_input" control_handle=<HANDLE_PASSWORD>
   pb_interact_control action="type_keys" control_handle=<HANDLE_PASSWORD> keys="NEW2012{ENTER}"
   ```

**CRITIQUE** :
- **NE JAMAIS** cliquer le petit bouton fleche → (26x26 px) pour soumettre. Cela provoque un **crash complet** de l'application.
- Utiliser **{ENTER}** dans le champ password en une seule commande `type_keys()`. Le {TAB} suivi de {ENTER} ne fonctionne pas — le focus passe ailleurs.

### Apres la connexion reussie

- Le **PID de l'application peut changer** lors de la transition login -> MDI frame.
- En cas d'erreur `PID not found`, appeler `pb_launch_app` pour se reconnecter a la nouvelle instance.
- Le titre MDI devient : `"PMI -  Login  PMIGEST"` → `"<Nom application> - <Module actif>"` (avec **espaces doubles**).

### Credentials de test

| Donnee | Valeur |
|--------|--------|
| **Login** | `PMIGEST` |
| **Password** | `NEW2012` |

---

## Avertissement : Dialogue ATTENTION apres login

Sur la base de donnees de **demo**, immediatement apres une connexion reussie, une **fenetre d'avertissement** s'affiche :

```
Titre : "ATTENTION"
Message : "La base de donnee STANDARD est a un niveau NON COMPATIBLE"
Bouton : "OK"
```

**Action requise** : Cliquer le bouton "OK" pour fermer le dialogue et acceder au cadre MDI.

**Note** : Ce dialogue **n'apparait PAS** en environnement de production.

---

## Mapping Toolbar MDI

### Comportement dynamique du toolbar

Le toolbar MDI contient des **boutons dynamiques** qui sont **crees et detruits** lors du changement d'onglet menu. Cette architecture particuliere a plusieurs implications pour l'automatisation :

**Caracteristiques** :
- Quand on clique un onglet menu (ex: "Fact. Ventes"), les boutons correspondants sont crees dynamiquement.
- Chaque bouton a un **handle Win32 unique** (format hexadecimal).
- Quand on ferme une feuille MDI enfant via Ctrl+F4 ou fermeture, les boutons du toolbar sont **detruits** et leurs handles deviennent **invalides**.
- Apres destruction, il faut **re-cliquer l'onglet** et **relister les controles** via `pb_list_controls` pour obtenir les nouveaux handles.
- **Identification** : ne PAS utiliser le `control_index` (l'ordre est inverse ou aleatoire). Identifier les boutons par leur **position gauche (left)** dans les pixels.

### Onglet "Fact. Ventes" (6 boutons)

Quand on clique l'onglet "Fact. Ventes", 6 boutons apparaissent dans le toolbar. Les voici dans l'ordre de **position visuelle de gauche a droite** :

| Position left (px) | Bouton | Fenetre | Description | Module |
|:---:|---|---|---|---|
| 44 | 1. Preparation Factures | `w_invoice_prep` | Selection des livraisons a facturer, regroupement, creation facture | `_sales` |
| 89 | 2. Maintenance facturation | `w_invoices` | Liste principale, consultation, modification factures creees | `Shared_peppol` |
| 134 | 3. Interrogation factures | _(query dialog)_ | Recherche/consultation rapide factures | `_query` |
| 179 | 4. Situation des paiements | `w_inv_paid` | Suivi paiements clients, gestion encaissements | `_sales` |
| 224 | 5. Proforma | _(proforma dialog)_ | Generation factures proforma (pre-facture) | `_sales` / `_devis` |
| 269 | 6. Vente directe sur stock | `w_inv_directsal` | **DEPRECIE** — sera supprime version 8, ne fonctionne pas | `_sales` |

**Important** : Les champs avec `(query dialog)` ou `(proforma dialog)` ouvrent des dialogues de selection/requete, pas une fenetre directe.

**Notes de trigger**:
- L'onglet est identifie par clic sur le texte "Fact. Ventes" dans le MDI menu bar.
- Apres clic onglet, appeler immediatement `pb_list_controls` pour capturer les nouveaux handles.
- Identifier chaque bouton par sa **position left**, pas par un index, car les containers FNUDO3 et les boutons sont meles.

---

## Extensions et limitations du toolbar dynamique

### Autres onglets (a explorer et documenter)

Les onglets suivants ont egalement des boutons dynamiques :
- **Stock** (codes-barres, preparation, expedition)
- **Achats** (commandes, receptons)
- **Fabrication** (ordres de fabrication, travaux)
- **Ventes** (commandes client, livraisons)
- etc.

Chaque onglet suit le meme pattern : boutons crees/detruits dynamiquement, identification par position left.

### Limitation connue : handles stale

Si la session Claude a ete **comprimee en contexte** pendant une interaction, l'etat des handles toolbar est **perdu**. Il est recommande de **relister les controles immediatement** avant chaque interaction avec le toolbar, surtout apres une fermeture de feuille MDI child.

### Containers FNUDO3 non-interactifs

Les controles retournes par `pb_list_controls` incluent des containers internes `FNUDO3` qui ne sont **pas cliquables**. Ces containers ne doivent **pas etre cibles** — cliquer directement sur le bouton par sa position.
