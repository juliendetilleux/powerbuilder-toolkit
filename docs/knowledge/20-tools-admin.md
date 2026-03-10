# 20 - OUTILS ET DIVERS (Tools & Administration)

## Vue d'ensemble

PMIX integre plusieurs modules utilitaires et outils d'administration qui completent les fonctions metier principales de l'ERP. Ces modules couvrent l'edition de texte, la planification, le debug, la conformite reglementaire et des modes de vente specialises.

| Module | Objets | Role |
|--------|--------|------|
| `_pad` | 22 | Editeur de texte HTML / notes |
| `_agenda` | 18 | Agenda / calendrier |
| `_XDWSpy` | 8 | Espion DataWindow (debug) |
| `_gdpr` | 7 | Conformite RGPD |
| `_sales_cash` | 82 | Ventes cash / caisse enregistreuse |
| `_sales_food` | 25 | Specificites agroalimentaire |

**Total** : 162 objets repartis sur 6 modules.

---

## Editeur de texte (_pad)

### Description

Module d'edition de texte riche (HTML) integre a PMIX. Utilise un controle OLE (Internet Explorer / WebBrowser) pour fournir un editeur WYSIWYG complet avec gestion de templates, polices, tableaux et sources HTML.

### Statistiques

| Type | Nombre |
|------|--------|
| Fenetres | 5 |
| DataWindows | 5 |
| User Objects | 11 |
| Fonctions | 1 |
| **Total** | **22** |

### Objets cles

| Objet | Ancetre | Lignes | Role |
|-------|---------|--------|------|
| `u_web_browser` | `olecustomcontrol` | 596 | Controle navigateur web integre (editeur HTML) |
| `w_gest_template_html` | `w_response` | 253 | Gestion des templates HTML |
| `w_param_html` | `w_response` | 86 | Parametres de l'editeur HTML |
| `w_fonts` / `w_insert_table` | `w_response` | - | Selection polices / insertion tableaux |
| `w_technicien` | `w_response` | - | Fenetre technicien (notes) |

Les 11 user objects incluent le composant navigateur (`u_web_browser`), les onglets (`u_tab_main`, `u_base_tab`, `u_tabpg_design/view/source/select`) et 3 onglets CRM integres (`uo_tab_crm_action_update`, `uo_tab_crm_company_list`, `uo_tab_crm_company_detail`).

### Composant u_web_browser (596 lignes)

Controle OLE encapsulant un navigateur web avec 33 fonctions publiques :

- **Navigation** : `of_navigate()`, `of_goback()`, `of_goforward()`, `of_refresh()`, `of_stop()`
- **Edition** : `of_designmode()`, `of_inserthtml()`, `of_documentcommand()`, `of_toggle_property()`
- **Fichiers** : `of_getsource()`, `of_setsource()`, `of_writefile()`, `of_readfile()`
- **Impression** : `of_execwb_print()`, `of_execwb_printpreview()`, `of_execwb_save()`

Constantes `OLECMDID_*` et `OLECMDEXECOPT_*` pour piloter le controle OLE via `of_execwb()`.

### DataWindows

`dd_choiceline_tytp` (type template), `d_fontdetail` (polices), `d_html_select` (selection), `d_list_html_source` (sources), `d_marked_all` (elements marques).

---

## Agenda / Calendrier (_agenda)

### Description

Module d'agenda et de calendrier integre a PMIX. Fournit des vues jour, semaine et mois avec gestion des actions CRM, des groupes de calendrier et des couleurs personnalisables.

### Statistiques

| Type | Nombre |
|------|--------|
| Fenetres | 2 |
| DataWindows | 11 |
| User Objects | 2 |
| Structures | 2 |
| Menus | 1 |
| **Total** | **18** |

### Objets cles

| Objet | Ancetre | Lignes | Role |
|-------|---------|--------|------|
| `vuo_agenda` | `uo_userobject` | 2 330 | Composant visuel agenda (vues jour/semaine/mois) |
| `vuo_monthcalendar` | - | - | Composant calendrier mensuel |
| `w_calgroup` | `w_response` | 85 | Gestion des groupes de calendrier |
| `w_agendacolor` | `w_window` | 137 | Configuration des couleurs de l'agenda |

### Composant vuo_agenda (2 330 lignes)

User object visuel principal de l'agenda. Fonctions publiques :

| Fonction | Role |
|----------|------|
| `uf_setdate(datetime)` | Positionner la date courante |
| `uf_init_design(string as_mode)` | Initialiser le mode d'affichage (jour/semaine/mois) |
| `of_init_design_appointments()` | Initialiser l'affichage des rendez-vous |
| `of_init_design_day()` | Initialiser la vue journaliere |
| `of_init_design_dwheight(long, long, long)` | Calculer la hauteur des DataWindows |
| `uf_cal_rbuttondown(string)` | Gestion du clic droit calendrier |

**Events surcharges** : `ue_retrieveend`, `ue_resize`

**Variables cles** :
- `idt_date` / `idt_caldate` — Dates courantes
- `is_curruser` — Utilisateur actif
- `il_actioncode` — Code action CRM selectionnee
- `is_dataobject` — DataObject en cours
- `ib_drag` — Mode glisser-deposer actif
- `il_cgid` / `is_cgname` — Groupe de calendrier

### DataWindows (11)

- **Vues** : `d_cal_day`, `d_cal_day_super`, `d_cal_week`, `d_cal_month`, `d_cal_month_day`
- **Infos** : `d_info_action` (action CRM), `d_info_day` (jour)
- **Mini-calendrier** : `d_mc_date`, `d_mc_month`
- **Divers** : `d_users_select`, `d_agendacolor`

**Structures** : `struct_uaweek` (semaine), `struct_useraction` (action). **Menu** : `m_calaction` (contextuel).

---

## Espion DataWindow (_XDWSpy)

### Description

Module de **debug et d'inspection** des DataWindows a l'execution. Permet d'examiner en temps reel le contenu, les filtres, les tris, les sources SQL, les arguments de recuperation et les modifications de n'importe quel DataWindow de l'application. Outil indispensable pour le diagnostic.

### Statistiques

| Type | Nombre |
|------|--------|
| Fenetres | 1 |
| User Objects | 3 |
| Fonctions | 4 |
| **Total** | **8** |

### Organisation en 2 libraries

| Library | Contenu | Role |
|---------|---------|------|
| `_xdwspy.pbl` | `w_spy`, `n_dwspy_util`, `n_parm`, `iif.srf`, `iin.srf`, `nvl.srf` | Espion principal + utilitaires |
| `_xdwexception.pbl` | `n_ex`, `f_throw.srf` | Gestion des exceptions |

### Fenetre w_spy (2 407 lignes)

Fenetre principale de l'espion. Inspecte n'importe quel DataWindow a l'execution.

**Capacites** : compteurs de lignes (primary/filtered/deleted), champ selectionne (nom, label, DDDW), expressions tri/filtre, source SQL/proc stockee, champs modifies, champs invisibles, arguments de retrieval.

**References** : `idw` (DataWindow inspecte), `iw` (Window parente), `inv_util` (n_dwspy_util)

### Utilitaire n_dwspy_util (771 lignes)

Objet non-visuel avec 25 fonctions utilitaires pour l'inspection DW :

- **Lecture** : `uf_get_item_as_string()` (6 surcharges), `uf_get_field_label()`, `uf_get_pb_version()`
- **Verification** : `uf_col_exists()`, `uf_col_is_visible()`, `uf_col_modified()`, `uf_row_modified()`, `uf_row_count()`
- **Navigation** : `uf_get_window()`, `uf_get_pbl_of_class()`, `uf_get_proc_of_dataobject()`
- **Utilitaires** : `uf_string_to_array()`, `uf_replace_all()`, `uf_populated()`, `uf_empty()`, `uf_sort_array()`, `uf_ds_from_array()`

### Fonctions globales

| Fonction | Role |
|----------|------|
| `iif()` | Equivalent du IIF (inline if) |
| `iin()` | Test d'inclusion (IN) |
| `nvl()` | Valeur par defaut si null (NVL) |
| `f_throw()` | Lancer une exception (`_xdwexception.pbl`) |

### Objet n_ex

Objet d'exception pour la gestion d'erreurs structuree dans l'espion.

---

## Conformite RGPD (_gdpr)

### Description

Module de **conformite au Reglement General sur la Protection des Donnees** (RGPD/GDPR). Fournit des outils pour gerer les droits des personnes (acces, suppression, modification) et l'historique des operations RGPD.

### Statistiques

| Type | Nombre |
|------|--------|
| Fenetres | 2 |
| DataWindows | 3 |
| Fonctions | 2 |
| **Total** | **7** |

### Objets

| Objet | Ancetre | Lignes | Role |
|-------|---------|--------|------|
| `w_gpdr` | `w_response_dw` | 43 | Fenetre principale RGPD (gestion des donnees personnelles) |
| `w_pswd_modif` | - | - | Modification de mot de passe (securite) |
| `d_adresses_gdrp` | - | - | Adresses soumises au RGPD |
| `d_histogdrp` | - | - | Historique des operations RGPD |
| `dd_choiceline_gdrp` | - | - | Liste deroulante actions RGPD |
| `returndwarg()` | - | - | Retour d'arguments DataWindow |
| `savehistogdrp()` | - | - | Sauvegarde historique RGPD |

### Fonctionnalites

- **Consultation des donnees** : Visualisation des adresses et donnees personnelles enregistrees
- **Historique** : Traçabilite de toutes les operations RGPD (consultation, suppression, modification)
- **Modification de mot de passe** : Securisation des acces utilisateur
- **DataWindow-based** : La fenetre principale `w_gpdr` herite de `w_response_dw`, orientee affichage de donnees

> **Note** : Le nom de la fenetre contient une faute de frappe (`w_gpdr` au lieu de `w_gdpr`). C'est un artefact historique a conserver.

---

## Ventes cash / Caisse (_sales_cash)

### Description

Module complet de **caisse enregistreuse** et de ventes directes. Gere les ventes au comptoir, les tickets, les modes de paiement, les rendus de monnaie, les mouvements de caisse et les rapports. C'est le module le plus volumineux des outils avec 82 objets.

### Statistiques

| Type | Nombre |
|------|--------|
| Fenetres | 13 |
| DataWindows | 59 |
| User Objects | 3 |
| Fonctions | 2 |
| Structures | 3 |
| Menus | 2 |
| **Total** | **82** |

### Fenetres principales

| Objet | Ancetre | Lignes | Role |
|-------|---------|--------|------|
| `w_quick_directsales` | `w_response` | 10 344 | Ventes directes rapides (fenetre principale) |
| `w_sales_dirsal` | - | - | Ventes directes standard |
| `w_cash_report` | `w_response` | 284 | Rapport de caisse |
| `w_invoice_cash` | - | - | Facture caisse |
| `w_cash_movement` | - | - | Mouvements de caisse |
| `w_cash_return` | - | - | Retours caisse |
| `w_cash_return_pay` | - | - | Paiement retours |
| `w_current_change_cash` | - | - | Change en cours |
| `w_give_back_change` | - | - | Rendu de monnaie |
| `w_ticket_pay_update` | - | - | Mise a jour paiement ticket |
| `w_dirsal_addprice` | - | - | Ajout prix vente directe |
| `w_dirsal_addqty` | - | - | Ajout quantite vente directe |
| `w_cash_itemgroup_search` | - | - | Recherche par groupe d'articles |

### Fenetre w_quick_directsales (10 344 lignes)

Fenetre principale de ventes directes — l'un des plus gros objets de PMIX. 56 fonctions publiques couvrant :

- **Commande** : `wf_createsalhead()`, `wf_save()`, `wf_modify()`, `wf_new()`, `wf_delete()`, `wf_next()`, `wf_previous()`
- **Lignes** : `createsalline()`, `wf_insrowdw()`, `wf_copyrow()`, `wf_add1qty()`, `wf_addnqty()`
- **Tarification** : `wf_totcalc()`, `wf_currconv2()`, `wf_creditbal_adjust()`
- **Expedition** : `allocate()`, `wf_truckitems()`, `load_ddlb_shipto()`
- **Divers** : `wf_check_vat()`, `wf_autopack()`, `wf_search_first()`, `wf_initialise_soap()`

**Variables cles** : `il_SalCode`, `idt_Date`, `is_CustRef`, `idec_ValToPay`, `is_cash`, `luo_display_cash` (afficheur client), `invo_conditionmanager`

### User Objects

| Objet | Role |
|-------|------|
| `uo_cash_change` | Gestion des changes caisse |
| `uo_cash_return` | Gestion des retours caisse |
| `uo_display_cash` | Afficheur client (ecran pole) |

### DataWindows (59)

Les 59 DataWindows se repartissent en 3 familles :

- **Rapports (33)** : Pattern combinatoire `d_cashcentral_print*`, `d_cashreport_print*`, `d_cashreport_prod_print*`, `d_cash_sales_print*` — chaque famille avec 8 variantes (par caisse, commercial, groupe, tout) + `d_cashreport_paymode_print`
- **Listes/operations (13)** : `dd_cash_list`, `dd_grcash*`, `d_list_current_cash`, `d_list_change_*` (4 variantes), `d_cash_item_list`, `d_cash_itstat1/2/3_list`, `d_cash_return_head/line`
- **Ventes directes (13)** : `dd_ratehead_directsal`, `dd_salesman`, `d_quick_dirsales`, `d_salhead_*`, `d_ticket_pay_update`, `d_histocash_update`, `d_cl_cpty_legend*`, `d_itempack_tmp`

### Structures

| Structure | Role |
|-----------|------|
| `gstr_cashpay` | Structure paiement caisse |
| `str_cash_return` | Structure retour caisse |
| `st_display` | Structure affichage (ecran client) |

### Menus

| Menu | Role |
|------|------|
| `m_quick_directsales` | Menu popup ventes directes rapides |
| `m_ticket_pay` | Menu popup paiement ticket |

### Fonctions globales

| Fonction | Role |
|----------|------|
| `gf_get_nextcashseq()` | Obtenir le prochain numero de sequence caisse |
| `gf_get_nexthistocashseq()` | Prochain numero sequence historique caisse |

---

## Specificites agroalimentaire (_sales_food)

### Description

Module de **ventes specifiques au secteur agroalimentaire**. Interface de caisse tactile simplifiee avec gestion des services, des PLU (Price Look-Up), des categories produits alimentaires, des tickets et de l'historique.

### Statistiques

| Type | Nombre |
|------|--------|
| Fenetres | 9 |
| DataWindows | 15 |
| Structures | 1 |
| **Total** | **25** |

### Fenetres

| Objet | Ancetre | Lignes | Role |
|-------|---------|--------|------|
| `w_cashfood` | `w_main` | 2 025 | Caisse agroalimentaire (fenetre principale) |
| `w_logmein_food` | - | - | Login operateur food |
| `w_admin` | - | - | Administration caisse food |
| `w_cfadpass` | - | - | Mot de passe admin food |
| `w_historique` | - | - | Historique des ventes food |
| `w_rendu` | - | - | Rendu de monnaie food |
| `w_stat1_button` / `w_stat2_button` | - | - | Boutons statistiques (par categorie) |
| `w_ticketfood_pay_update` | - | - | Mise a jour paiement ticket food |

### Fenetre w_cashfood (2 025 lignes)

Caisse agroalimentaire principale. Herite de `w_main` (fenetre standalone). Fonctions :

| Fonction | Role |
|----------|------|
| `wf_opencash(string)` | Ouvrir la caisse (par type) |
| `wf_init_salehead_and_tickethead()` | Initialiser en-tete vente et ticket |
| `wf_create_salhead_and_tickethead()` | Creer en-tete vente + ticket |
| `wf_create_salline_and_ticketline()` | Creer ligne vente + ligne ticket |
| `wf_makepayments()` | Enregistrer les paiements |
| `wf_histocash()` | Consulter l'historique caisse |
| `wf_histostock()` | Consulter l'historique stock |
| `wf_stock()` | Mouvements de stock |
| `wf_refreshtime()` | Rafraichir l'heure |
| `wf_check_dbversion()` | Verifier la version DB |

**Variables cles** : `il_idle` (temps inactivite), `idec_tot` (total), `Is_pay` (montant paye), `idec_rendu` (rendu), `idec_recu` (recu)

### DataWindows (15)

- **Articles/vente** : `dd_items`, `d_cl_cpty_food`, `d_itcat_foodcash`, `d_salemanfood`
- **Tickets** : `d_tickethead_create`, `d_ticket_create`, `d_ticket_create_print`, `d_histo_ticket`, `d_salhead_create`
- **Rapports** : `d_jour_print`, `d_mois_print`, `d_serv_print`, `d_plu_print`
- **Stats** : `d_stat1_button`, `d_stat2_button`

**Structure** : `gstr_cash_food` (donnees caisse agroalimentaire).

### Particularites du module

- **Interface tactile** : Conçue pour ecrans tactiles avec boutons larges par categorie
- **PLU (Price Look-Up)** : Systeme de codes PLU pour identification rapide des articles
- **Services** : Gestion des services (dejeuner, diner, etc.) avec rapports par service
- **Tickets** : Creation simultanee vente + ticket (en-tete et lignes)
- **Login operateur** : Authentification specifique (`w_logmein_food`)
- **Administration** : Fenetre admin dediee avec mot de passe (`w_admin`, `w_cfadpass`)

---

## Points d'attention

1. **w_quick_directsales** (10 344 lignes) est l'un des plus gros objets de tout PMIX. Modifications a aborder avec precaution.
2. **w_spy (XDWSpy)** n'herite PAS de la hierarchie standard w_a_pmi/w_window/w_response. Il herite directement de `window` PB.
3. **u_web_browser** utilise un controle OLE ActiveX (Internet Explorer). Dependance a IE/Edge Legacy.
4. **w_gpdr** contient une faute de frappe dans le nom (gpdr au lieu de gdpr). Ne pas renommer pour eviter les regressions.
5. **_sales_cash vs _sales_food** : Les deux modules gerent des caisses mais pour des secteurs differents. `_sales_cash` est general (82 objets), `_sales_food` est specifique agroalimentaire (25 objets, interface tactile).
6. **Rapports caisse** : Les 32+ DataWindows de rapport dans `_sales_cash` suivent un pattern de nommage combinatoire (par caisse, par commercial, par groupe, tout). Modifier un pattern necessite de traiter toutes les variantes.
7. **vuo_agenda** (2 330 lignes) est un composant visuel complexe avec drag & drop, multi-vues et integration CRM.

---

## Recherche rapide

| Je cherche... | Ou regarder |
|---------------|-------------|
| Editeur HTML / texte riche | `u_web_browser` dans `_pad` |
| Templates HTML | `w_gest_template_html` dans `_pad` |
| Polices de caracteres | `w_fonts` dans `_pad` |
| Insertion de tableaux | `w_insert_table` dans `_pad` |
| Agenda / calendrier | `vuo_agenda` dans `_agenda` |
| Calendrier mensuel | `vuo_monthcalendar` dans `_agenda` |
| Couleurs agenda | `w_agendacolor` dans `_agenda` |
| Groupes de calendrier | `w_calgroup` dans `_agenda` |
| Espionner un DataWindow | `w_spy` dans `_XDWSpy` |
| Fonctions utilitaires DW | `n_dwspy_util` dans `_XDWSpy` |
| Valeur d'un champ DW a l'execution | `n_dwspy_util.uf_get_item_as_string()` |
| Conformite RGPD | `w_gpdr` dans `_gdpr` |
| Historique RGPD | `d_histogdrp` dans `_gdpr` |
| Caisse enregistreuse | `w_quick_directsales` dans `_sales_cash` |
| Rapport de caisse | `w_cash_report` dans `_sales_cash` |
| Retours caisse | `w_cash_return` dans `_sales_cash` |
| Mouvements de caisse | `w_cash_movement` dans `_sales_cash` |
| Rendu monnaie | `w_give_back_change` dans `_sales_cash` |
| Afficheur client (pole display) | `uo_display_cash` dans `_sales_cash` |
| Caisse agroalimentaire | `w_cashfood` dans `_sales_food` |
| Tickets food | `d_ticket_create` dans `_sales_food` |
| PLU / prix rapide | `d_plu_print` dans `_sales_food` |
| Rapports journaliers food | `d_jour_print` dans `_sales_food` |
| Login operateur food | `w_logmein_food` dans `_sales_food` |
