# 19 - PERSONNALISATION (Customization)

## Vue d'ensemble

PMIX dispose d'un systeme de personnalisation a plusieurs niveaux permettant d'adapter l'ERP aux besoins specifiques de chaque client sans modifier le code standard. Ce systeme repose sur 4 modules complementaires :

| Module | Objets | Role |
|--------|--------|------|
| `_sysxtra` | 23 | Surcharges client — menus, fenetres, NVO specifiques |
| `_cust2` | 83 | Developpements client avances — barcode, fabrication, web services |
| `Cust_Empty` | 7 | Templates vides pour initialiser les personnalisations |
| `cust_peppol` | 9 | Personnalisation specifique Peppol (facturation electronique) |

**Principe fondamental** : La personnalisation fonctionne par **heritage PowerBuilder**. Les objets `w_xtra_*`, `m_xtra_*`, `uo_xtra_*`, `nvo_xtra_*` heritent des objets standard et surchargent uniquement les comportements a modifier. Le code standard n'est jamais touche directement.

---

## Module _sysxtra (Surcharges client)

### Description

Le module `_sysxtra` contient les **extensions specifiques client** sous forme de surcharges. C'est la couche de personnalisation principale. Chaque objet herite d'un objet standard et peut redefinir ses events/fonctions.

### Statistiques

| Type | Nombre |
|------|--------|
| Fenetres (w_xtra_*) | 4 |
| User Objects (uo_xtra_*, nvo_xtra_*) | 7 |
| Menus (m_xtra_*) | 12 |
| **Total** | **23** |

### Fenetres (w_xtra_*)

Surcharges des menus de lecteurs code-barres par module fonctionnel :

| Objet | Ancetre | Role |
|-------|---------|------|
| `w_xtra_brf_menu` | `w_brf_menu` | Menu principal barcode reader (surcharge) |
| `w_xtra_brf_menu_stk` | `w_brf_menu_stk` | Menu barcode stock (surcharge) |
| `w_xtra_brf_menu_sal` | `w_brf_menu_sal` | Menu barcode ventes/expedition (surcharge) |
| `w_xtra_brf_menu_mfg` | `w_brf_menu_mfg` | Menu barcode fabrication (surcharge) |

Chaque fenetre herite les controles de son ancetre (boutons cb_*, picture p_1, static text st_user, st_version, pb_exit) et peut redefinir leurs events.

### User Objects (uo_xtra_*, nvo_xtra_*)

| Objet | Ancetre | Lignes | Role |
|-------|---------|--------|------|
| `nvo_xtra_specific` | `nvo_specific` | 19 | Comportements specifiques client (vide, pret a surcharger) |
| `nvo_xtra_function` | `nvo_function` | 19 | Fonctions globales specifiques (vide) |
| `nvo_xtra_planifiedtask` | `nvo_planifiedtask` | 19 | Taches planifiees specifiques (vide) |
| `nvo_xtra_edi_transfert` | `nvo_edi_transfert` | 19 | Transferts EDI specifiques (vide) |
| `uo_xtra_bomrout_update` | `uo_bomrout_update` | 19 | Mise a jour nomenclatures/gammes (vide) |
| `uo_xtra_itemspec_update` | `uo_itemspec_update` | 19 | Mise a jour specs article (vide) |
| `uo_xtra_clot_reports` | `uo_clot_reports` | 31 | Rapports de cloture (variable `is_period`) |

La plupart des NVO sont des **coquilles vides** (19 lignes = uniquement forward/create/destroy). Ils servent de points d'extension ou le client peut ajouter du code sans toucher aux objets standard.

### Menus (m_xtra_*)

| Objet | Ancetre | Lignes | Role |
|-------|---------|--------|------|
| `m_xtra_erp_mdi` | `m_erp_mdi` | 2078 | Menu principal ERP (surcharge importante) |
| `m_xtra_crm_mdi` | `m_crm_mdi` | 20 | Menu principal CRM (surcharge legere) |
| `m_xtra_action` | `m_action` | - | Menu popup actions |
| `m_xtra_popsales` | `m_popsales` | - | Menu popup ventes |
| `m_xtra_salorder_popup` | `m_salorder_popup` | - | Menu popup commande vente |
| `m_xtra_popordr` | `m_popordr` | - | Menu popup commandes |
| `m_xtra_popmethod` | `m_popmethod` | - | Menu popup methodes/gammes |
| `m_xtra_pop_devis` | `m_pop_devis` | - | Menu popup devis |
| `m_xtra_poptimesheet` | `m_poptimesheet` | - | Menu popup feuilles de temps |
| `m_xtra_dshbrd` | `m_dshbrd` | - | Menu popup tableau de bord |
| `m_xtra_frame_design` | `m_frame_design` | - | Menu popup design frame |

Le menu `m_xtra_erp_mdi` (2078 lignes) est l'objet le plus consequent du module. Il surcharge le menu principal de l'ERP pour ajouter/modifier des entrees specifiques au client.

---

## Module _cust2 (Developpements client avances)

### Description

Le module `_cust2` contient le **deuxieme jeu d'extensions client**. Contrairement a `_sysxtra` qui surcharge des objets existants, `_cust2` contient des **developpements autonomes** : objets metier, DataWindows, web services, cryptographie.

### Statistiques

| Type | Nombre |
|------|--------|
| Fenetres | 4 |
| DataWindows | 69 |
| User Objects | 8 |
| Fonctions | 2 |
| **Total** | **83** |

### Objets cles

| Objet | Ancetre | Lignes | Role |
|-------|---------|--------|------|
| `nvo_bcd_brf` | `nv_nonvisualobject` | 26 762 | Logique barcode reader complete (picking, ship, mfg, stock, colisage) |
| `nvo_mfgreport` | `nv_nonvisualobject` | 5 834 | Rapports de fabrication (backflush, stock, co-produits, serials) |
| `nvo_webservice` | `nonvisualobject` | 1 301 | Web services (inventaire, ajustement, transfert, preparation, reception) |
| `n_cst_crypto` | `nonvisualobject` | 910 | Chiffrement/dechiffrement (EncryptData, DecryptData, EncryptNumber) |
| `w_apitest` | `window` | 1 509 | Fenetre de test API (token, messages, check_enabled) |
| `w_password` | `window` | 125 | Fenetre saisie mot de passe |
| `gf_autoexec_webservice` | - | - | Fonction globale autoexec web service |

### DataWindows principales

Les 69 DataWindows couvrent plusieurs domaines :

- **Gestion stock** : `d_in_gestion_stock`, `d_out_gestion_stock`, `d_in_gestion_stock_multi`, `d_out_gestion_stock_multi`, `d_out_gestion_stock_multi_return`
- **Preparation/expedition** : `d_list_prepa`, `d_list_prepa_today` (variants 1-4), `d_list_prepa_en_avance`, `d_get_sales_lot_prepare`
- **Fabrication** : `d_of`, `d_of_detail`, `d_of_item`, `d_of_pc`, `d_pc_not_of`, `d_workoper`
- **Commandes** : `d_get_command`, `d_get_command_purchase`, `d_list_global_cmd`
- **Emplacements** : `d_emplacement`, `d_emplacement_item`
- **Utilisateurs/travailleurs** : `d_workers`, `d_workers_list`, `dd_workers`, `d_pmixusers`, `d_pmixusers_nfc`, `d_pmixuser_get_worker`
- **Achats** : `d_purhead_update`
- **Divers** : `d_password`, `d_transreason_list`, `d_moyenne_livraison`, `d_ws_get_printer`

### NVO nvo_bcd_brf (26 762 lignes)

L'objet le plus volumineux du module. Il implemente la logique metier complete pour les operations barcode :

- **Expedition** : `ship_prepare()`, `ship_prepare_cust()` — verification commande, lot, client, allocation
- **Fabrication** : `mfg_prepare()`, `mfg_prepare2()`, `mfg_report()`, `mfg_report2()`, `mfg_report_user()` — OF, lots, stock issues
- **Stock** : `stock_move()`, `stock_move_group()`, `stock_move_backflush()`, `stock_inv()`, `transaction()`
- **Picking** : `picking()` — palettes, caisses, lots
- **Colisage** : `colisage()`, `colisage2()` — palettes, caisses, commandes
- **Contenance** : `containing()` — lots, make
- **Qualite** : `mfg_quality()` — controle qualite
- **Pointage** : `tictrl()` — badgeage operateur, poste de charge
- **Consultation** : `lot()`, `uof_loc()`, `uof_item()` — requetes lot/emplacement/article

### NVO nvo_webservice (1 301 lignes)

Expose des services via events :
- `ue_setinventory` — inventaire
- `ue_setadjustment` — ajustement stock
- `ue_settransfer` — transfert stock
- `ue_setprepare` / `ue_setpreparenotplanned` — preparation planifiee/non planifiee
- `ue_setreport` — rapport fabrication
- `ue_setwork` / `ue_setnotwork` — pointage travail
- `ue_setreceptpurchase` — reception achat
- `ue_setshipprepare` — preparation expedition
- `ue_print_etiq` — impression etiquettes

---

## Templates Cust_Empty

### Description

Le module `Cust_Empty` fournit les **templates vides** pour initialiser les personnalisations client. Il contient la structure de base que chaque installation client doit posseder.

### Statistiques

| Type | Nombre |
|------|--------|
| DataWindows | 2 |
| User Objects | 2 |
| Fonctions | 3 |
| **Total** | **7** |

### Structure des libraries

Le module est organise en 3 sous-libraries :

| Library | Contenu | Role |
|---------|---------|------|
| `_cust_prg.pbl` | `uo_cust_prg_id`, `rreplace.srf` | Identification client + fonction utilitaire |
| `_cust_prints.pbl` | `dummy.srd` | DataWindows d'impression personnalisees (vide) |
| `_cust_logo.pbl` | `dummy.srf` | Logos et assets client (vide) |

### Objet cle : uo_cust_prg_id

User object visuel qui identifie l'installation client :

| Variable | Type | Role |
|----------|------|------|
| `cust_id` | string | Identifiant unique du client |
| `cust_builtno` | string | Numero de build client |
| `ExpCustDbLvl` | long | Niveau de base de donnees attendu |

Cet objet est utilise au demarrage pour identifier la configuration client et verifier la compatibilite de la base de donnees.

---

## Module cust_peppol (Personnalisation Peppol)

### Description

Module de personnalisation specifique pour la **facturation electronique Peppol**. Surcharge les objets standard du module `Shared_peppol` pour les adapter aux besoins client.

### Statistiques

| Type | Nombre |
|------|--------|
| Fenetres | 4 |
| DataWindows | 5 |
| **Total** | **9** |

### Fenetres

Les fenetres principales sont dans `Shared_peppol` (module standard) :

| Objet | Ancetre | Lignes | Role |
|-------|---------|--------|------|
| `w_invoices_peppol` | `w_response` | 1 575 | Envoi factures Peppol (XML, Babelway, PDF, mail) |
| `w_invoices_pdf` | `w_response` | 1 287 | Generation factures PDF |
| `w_peppol` | `w_response` | 163 | Configuration Peppol |
| `w_print` | - | - | Impression Peppol |

### DataWindows cust_peppol

| Objet | Role |
|-------|------|
| `d_invhead_sel_peppol` | Selection factures pour envoi Peppol |
| `d_invhead_sel_peppol_success` | Factures envoyees avec succes |
| `d_invoicexml_print` | Impression XML facture |
| `d_param_babelway` | Parametres plateforme Babelway |
| `d_societe_peppol` | Donnees societe pour Peppol |

### Fonctionnalites

- **Generation XML** : Creation de factures au format Peppol/UBL
- **Envoi Babelway** : Integration avec la plateforme Babelway pour l'echange electronique
- **PDF** : Generation parallele de factures PDF
- **Validation TVA** : Verification XML des numeros TVA (`wf_check_tva_xml`)
- **Pieces jointes** : Ajout de documents aux factures (`wf_addattachment`)
- **Envoi email** : Integration `nvo_mail` pour notification

---

## Inventaire des objets PB par module

### _sysxtra (23 objets)

**Fenetres** : `w_xtra_brf_menu`, `w_xtra_brf_menu_stk`, `w_xtra_brf_menu_sal`, `w_xtra_brf_menu_mfg`

**User Objects** : `nvo_xtra_specific`, `nvo_xtra_function`, `nvo_xtra_planifiedtask`, `nvo_xtra_edi_transfert`, `uo_xtra_bomrout_update`, `uo_xtra_itemspec_update`, `uo_xtra_clot_reports`

**Menus** : `m_xtra_erp_mdi`, `m_xtra_crm_mdi`, `m_xtra_action`, `m_xtra_popsales`, `m_xtra_salorder_popup`, `m_xtra_popordr`, `m_xtra_popmethod`, `m_xtra_pop_devis`, `m_xtra_poptimesheet`, `m_xtra_dshbrd`, `m_xtra_frame_design`

### _cust2 (83 objets)

**Fenetres** : `w_apitest`, `w_password`

**User Objects** : `nvo_bcd_brf`, `nvo_mfgreport`, `nvo_webservice`, `n_cst_crypto`

**Fonctions** : `gf_autoexec_webservice`

**DataWindows** : 69 DataWindows (voir section detaillee ci-dessus)

### Cust_Empty (7 objets)

`uo_cust_prg_id`, `rreplace.srf`, `dummy.srd` (prints), `dummy.srf` (logo)

### cust_peppol (9 objets)

**Fenetres** : `w_invoices_pdf`, `w_peppol`, `w_invoices_peppol`, `w_print`

**DataWindows** : `d_invhead_sel_peppol`, `d_invhead_sel_peppol_success`, `d_invoicexml_print`, `d_param_babelway`, `d_societe_peppol`

---

## Comment personnaliser PMIX (best practices)

### 1. Surcharge par heritage (methode privilegiee)

```
// Creer un objet w_xtra_* ou m_xtra_* dans _sysxtra
// qui herite de l'objet standard a modifier

global type w_xtra_brf_menu_stk from w_brf_menu_stk
// ... surcharger uniquement les events necessaires
end type
```

**Avantages** : Le code standard reste intact. Les mises a jour de PMIX n'ecrasent pas les personnalisations.

### 2. Menus popup (m_xtra_*)

Pour ajouter des entrees de menu specifiques, creer un `m_xtra_*` heritant du menu popup standard. Le menu `m_xtra_erp_mdi` (2078 lignes) montre l'etendue possible des personnalisations menu.

### 3. NVO metier (_cust2)

Pour des developpements client importants (logique barcode, web services, rapports), utiliser `_cust2` avec des objets autonomes. Exemples : `nvo_bcd_brf` (26K lignes), `nvo_webservice`.

### 4. Identification client (Cust_Empty)

Chaque installation doit renseigner `uo_cust_prg_id` avec :
- `cust_id` : identifiant unique
- `cust_builtno` : numero de build
- `ExpCustDbLvl` : niveau DB attendu

### 5. Impressions client (_cust_prints.pbl)

Placer les DataWindows d'impression personnalisees dans `_cust_prints.pbl` pour ne pas melanger avec les impressions standard (`_prints_std`, `_prints_mod`).

---

## Points d'attention

1. **Ne jamais modifier le code standard** — Toujours passer par heritage dans `_sysxtra` ou developpements dans `_cust2`
2. **Verifier les cascades** — Une modification dans `_sysxtra` sur un ancetre peut impacter tous ses descendants
3. **Ordre de chargement PBD** — Les libraries `_sysxtra` et `_cust2` doivent etre chargees APRES les libraries standard dans le projet
4. **Coquilles vides** — Les NVO `nvo_xtra_*` de 19 lignes sont normaux : ce sont des points d'extension prets a recevoir du code
5. **m_xtra_erp_mdi** — C'est le plus gros objet de personnalisation (2078 lignes). Toute modification doit etre testee soigneusement car elle affecte le menu principal
6. **nvo_bcd_brf** — Objet massif (26K lignes) dans `_cust2`. Contient toute la logique barcode client. Modifications complexes.
7. **Sections interdites** — Ne JAMAIS modifier `forward`, `on create`, `on destroy` dans les fichiers source

---

## Recherche rapide

| Je cherche... | Ou regarder |
|---------------|-------------|
| Surcharger un menu ERP | `m_xtra_erp_mdi` dans `_sysxtra` |
| Surcharger un menu CRM | `m_xtra_crm_mdi` dans `_sysxtra` |
| Surcharger le barcode reader | `w_xtra_brf_menu*` dans `_sysxtra` |
| Ajouter une fonction globale client | `nvo_xtra_function` dans `_sysxtra` |
| Ajouter une tache planifiee client | `nvo_xtra_planifiedtask` dans `_sysxtra` |
| Personnaliser le transfert EDI | `nvo_xtra_edi_transfert` dans `_sysxtra` |
| Personnaliser les nomenclatures | `uo_xtra_bomrout_update` dans `_sysxtra` |
| Personnaliser les specs article | `uo_xtra_itemspec_update` dans `_sysxtra` |
| Logique barcode client | `nvo_bcd_brf` dans `_cust2` (26K lignes) |
| Rapports fabrication client | `nvo_mfgreport` dans `_cust2` |
| Web services client | `nvo_webservice` dans `_cust2` |
| Chiffrement/crypto | `n_cst_crypto` dans `_cust2` |
| Test API | `w_apitest` dans `_cust2` |
| Identifier l'installation client | `uo_cust_prg_id` dans `Cust_Empty` |
| Impressions personnalisees | `_cust_prints.pbl` dans `Cust_Empty` |
| Logo client | `_cust_logo.pbl` dans `Cust_Empty` |
| Facturation electronique Peppol | `w_invoices_peppol` dans `Shared_peppol` / `cust_peppol` |
| Configuration Peppol | `w_peppol` dans `Shared_peppol` |
| Factures PDF | `w_invoices_pdf` dans `Shared_peppol` / `cust_peppol` |
| Menu popup ventes client | `m_xtra_popsales` dans `_sysxtra` |
| Menu popup devis client | `m_xtra_pop_devis` dans `_sysxtra` |
