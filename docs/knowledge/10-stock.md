# Domaine : STOCK (Gestion des Stocks)

## Vue d'ensemble

La gestion des stocks dans PmiGest ERP (PMIX) couvre l'ensemble des mouvements d'entree, de sortie, les transferts entre emplacements et les operations d'inventaire. Le domaine est reparti sur deux modules principaux :

- **`_stock`** (195 objets) : module central — 70 fenetres, 93 DataWindows, 6 NVO, 10 fonctions globales, 12 structures, 4 menus. Centralise toutes les transactions de stock (receptions, sorties, ajustements, transferts, inventaire).
- **`_stkbarcod`** (303 objets) : interface de saisie par codes-barres et scanners pour les operations terrain (picking, reception, inventaire, preparation expedition).

La table `histostock` est la table centrale qui archive tous les mouvements de stock. La table `stocks` contient les soldes courants par article/lot/emplacement. Les transactions sont typees par un code a 4 caracteres (RCPO, SHIP, ISSU, TRF, etc.) defini dans la table `transactions`.

Le stock est gere a trois niveaux de granularite :
1. **Article + Emplacement** : solde global par emplacement (table `stocks`)
2. **Article + Lot + Emplacement** : tracabilite lot (table `lots` + `stocks`)
3. **Article + Lot + Numero de serie** : tracabilite unitaire (table `serialnum`)

---

## Tables principales

| Table | Role | Colonnes cles | FK vers |
|-------|------|---------------|---------|
| **stocks** | Soldes de stock courants par article/lot/emplacement | `stitem`, `stlot`, `stloc`, `stqty`, `stalloc`, `stid` | `items`, `locations` |
| **stocks_f** | Stock reserve/alloue par ligne de commande client | `stitem`, `stsalhead`, `stsallin`, `stlot`, `stloc`, `stqty`, `stalloc` | _(aucune documentee)_ |
| **locations** | Emplacements/depots de stockage | `lccode` (PK), `lcdesc`, `lcactiv`, `lcmrpexcl`, `lcautoalloc` | _(aucune)_ |
| **lots** | Lots/tracabilite — gestion complete du cycle de vie lot | `locode`, `loitem` (PK composite), `lostatus`, `lostock`, `loalloc`, `loexpdat`, `loqcstatus` | `items` |
| **histostock** | Historique des mouvements de stock (table centrale d'ecriture) | `hsseq` (PK), `hscode`, `hsitem`, `hslot`, `hsloc`, `hsqty`, `hsval`, `hsdatim` | `locations` |
| **transactions** | Table de reference des types de transaction | `trcode` (PK), `trname`, `trway`, `trsign`, `tractiv` | _(aucune)_ |
| **transreason** | Motifs de transaction (raison du mouvement) | `ticode` (PK), `tidesc`, `tiimp`, `tiactiv` | _(aucune)_ |
| **transact_with_confirm** | Transactions avec confirmation (transferts inter-depots) | `tc_id` (PK), `tc_itcode`, `tc_locode`, `tc_from`, `tc_to`, `tc_qty`, `tc_date` | `items`, `locations` (x2) |
| **transactico** | Configuration interface comptable des transactions | `ticode`, `tiadcode`, `tifunction`, `tisourdest` | _(aucune)_ |
| **transactcash** | Types de transaction cash/caisse | `tccode` (PK), `tcdesc`, `tcsign`, `tcactiv` | _(aucune)_ |
| **cycnthead** | En-tete des comptages cycliques (inventaire tournant) | `chnumcc` (PK), `chdate`, `chuscode`, `chstatus` | _(aucune)_ |
| **cycntline** | Lignes de comptage cyclique (detail par article/lot/emplacement) | `clnumcc`, `clstitem`, `clstlot`, `clstloc` (PK composite), `clstqty`, `clstqtyc` | `cycnthead` |
| **serialnum** | Numeros de serie par article/lot | `snitem`, `snstartno`, `snendno`, `snlotid`, `snqty`, `sndat` | _(aucune)_ |
| **matallocs** | Allocations de matieres (reservations stock pour ordres) | `matyp`, `macode`, `maitemseq`, `maallocseq` (PK composite), `maitem`, `malot`, `maloc`, `maallocqty` | `items`, `locations` |
| **shiphead** | En-tete de bon de livraison/expedition | `shcode` (PK), `shcust`, `shdate`, `shexpedi` | `adresses` (x2) |
| **shipline** | Lignes de bon de livraison | `slcode`, `slline` (PK composite), `slitem`, `sllot`, `slqty` | `items`, `salline`, `shiphead` |
| **linkitloc** | Liaison article-emplacement (min/max) | `llitem`, `llloc` (PK composite), `llqtymin`, `llqtymax` | `items`, `locations` |
| **ssccline** | Lignes SSCC (codes-barres palette/unite logistique) | `slcode`, `sllot`, `slqty`, `slloc`, `slshiphead`, `slshipline` | `shipline` |

---

## Colonnes cles de la table stocks

### Identification et quantites

| Colonne | Type | Description |
|---------|------|-------------|
| `stitem` | char(20) | **Code article** — FK vers `items.itcode` |
| `stlot` | char(30) | **Code lot** — vide si article non gere par lot |
| `stloc` | char(8) | **Code emplacement** — FK vers `locations.lccode` |
| `stqty` | numeric(12,3) | **Quantite en stock** (solde physique disponible) |
| `stalloc` | numeric(12,3) | **Quantite allouee/reservee** (commandes clients, ordres de fabrication) |
| `stctrl` | char(1) | Flag de controle |
| `stid` | integer | Identifiant unique auto-increment |
| `stqtytarif` | numeric(12,3) | Quantite en unite tarifaire (si differente de l'unite de stock) |

**Quantite disponible** = `stqty - stalloc`

### Table stocks_f (stock reserve par commande)

| Colonne | Type | Description |
|---------|------|-------------|
| `stitem` | char(20) | Code article |
| `stsalhead` | numeric(6) | Numero de commande client |
| `stsallin` | numeric(4) | Ligne de commande client |
| `stlot` | char(30) | Code lot |
| `stloc` | char(8) | Emplacement |
| `stqty` | numeric(12,3) | Quantite reservee |
| `stalloc` | numeric(12,3) | Quantite allouee |
| `stordtyp` | char(1) | Type d'ordre (commande/fabrication) |
| `stordhead` | numeric(6) | Numero d'ordre associe |
| `stordlin` | numeric(4) | Ligne d'ordre associee |
| `ststdval` | numeric(10,4) | Valeur standard unitaire |

---

## Colonnes cles de la table histostock

| Colonne | Type | Description |
|---------|------|-------------|
| `hsseq` | numeric(12) | **Sequence (PK)** — identifiant unique du mouvement |
| `hscode` | char(4) | **Code transaction** (RCPO, SHIP, ISSU, TRF, MISC, INVT...) |
| `hsordtyp` | char(1) | Type d'ordre source (P=achat, S=vente, M=fabrication) |
| `hsordno` | numeric(8) | Numero de l'ordre source |
| `hsordlin` | numeric(3) | Ligne de l'ordre source |
| `hsitem` | char(20) | Code article concerne |
| `hslot` | char(30) | Code lot |
| `hsloc` | char(8) | Emplacement — FK vers `locations.lccode` |
| `hsqty` | numeric(12,3) | **Quantite du mouvement** (positive=entree, negative=sortie) |
| `hsum` | char(2) | Unite de mesure |
| `hsval` | numeric(12,2) | Valeur du mouvement |
| `hsuser` | char(50) | Utilisateur ayant effectue le mouvement |
| `hsdatim` | timestamp | Date/heure du mouvement |
| `hscomment` | char(30) | Commentaire libre |
| `hsprgcmnt` | char(30) | Commentaire programme (automatique) |
| `hsord2no` | numeric(8) | Numero d'ordre secondaire (ex: bon livraison) |
| `hsord2lin` | numeric(4) | Ligne d'ordre secondaire |
| `hstrfint_ret` | char(1) | Flag transfert interne retour |
| `hsqtytarif` | numeric(12,3) | Quantite en unite tarifaire |
| `hspn` | varchar(256) | Reference/numero de piece |
| `hscash` | char(30) | Reference caisse |

### Index de histostock

| Index | Colonnes | Description |
|-------|----------|-------------|
| PK | `hsseq` | Cle primaire |
| `histostock_shipline` | `hsord2no`, `hsord2lin` | Recherche par bon de livraison |
| `horodate` | `hsdatim` | Recherche par date/heure |
| `hs3_ordno` | `hsordno`, `hsordlin` | Recherche par ordre source |
| `hs4` | `hscode`, `hsordtyp`, `hsdatim` | Recherche par type de transaction + date |
| `hs4_lot_date` | `hslot`, `hsdatim` | Recherche par lot + date |
| `item` | `hsitem` | Recherche par article |

---

## Objets PB cles

### Fenetres principales (_stock)

| Fenetre | Ancetre | Description | Fonctions cles |
|---------|---------|-------------|----------------|
| `w_stockqry` | w_response | Consultation stock — affichage des soldes avec filtres multiples | `filteritem()`, `wf_changedwvisible()` |
| `w_stock_selection` | w_response | Selection stock (choix article/lot/emplacement pour une operation) | `wf_modify_doc()` |
| `w_stock_selection2` | w_response | Selection stock variante 2 | _(events)_ |
| `w_stock_f_selection` | w_response | Selection stock reserve (stocks_f) | _(events)_ |
| `w_stock_loc` | w_response | Stock par emplacement — vue par depot | `load_multitri()` |
| `w_stock_f_alloc` | w_response | Allocations de stock reserve | _(events)_ |
| `w_stock_choice` | w_response | Choix de stock (selection pour consommation) | _(events)_ |
| `w_stockalloc` | w_response | Gestion des allocations stock | `wf_checkloc()` |
| `w_stockall_selection` | w_response | Selection stock avec allocations | _(events)_ |
| `w_stocksel_itlost` | w_response | Selection stock par article avec lots | _(events)_ |
| `w_stocksel_lost` | w_response | Selection stock par lots | _(events)_ |
| `w_stock_histo` | w_response | Historique des mouvements de stock (module `_query`) | _(events)_ |
| `w_stock_id_print` | w_response | Impression etiquettes de stock | _(events)_ |
| `w_stock_id_qty_print` | w_response | Impression etiquettes stock avec quantite | _(events)_ |

### Fenetres de transactions (_stock)

| Fenetre | Description | Fonctions cles |
|---------|-------------|----------------|
| `w_transact_rcpo_inout` | Reception commande achat (entree/sortie) | `initwindow()`, `check_tr()`, `save_tr()`, `wf_verif_lot()`, `wf_verif_unicite_lot()`, `initqc()`, `save_qc()` |
| `w_transact_rcpo2_inout` | Reception achat variante 2 | `initwindow()`, `check_tr()`, `save_tr()` |
| `w_transact_rcpo3` | Reception achat multi-lignes | `wf_createpur()`, `wf_checklots()`, `check_tr()`, `save_tr()`, `wf_umrcptinit()`, `wf_qty_calc()`, `initqc()`, `save_qc()` |
| `w_transact_rcpo1` | Reception achat variante 1 | _(events)_ |
| `w_transact_rcpo` | Reception achat standard | _(events)_ |
| `w_transact_rcpo_dlxo` | Reception achat avec delai | _(events)_ |
| `w_transact_rcmo_f` | Reception fabrication (retour production) | `initwindow()`, `save_tr()`, `check_tr()`, `check_tr_neg()`, `save_tr_neg()` |
| `w_transact_rcmo` | Reception fabrication standard | _(events)_ |
| `w_transact_rcmo1` | Reception fabrication variante 1 | _(events)_ |
| `w_transact_rqmo` | Requisition fabrication (sortie composants) | `initwindow()`, `check_tr()`, `save_tr()`, `wf_return_dtreq()` |
| `w_transact_rcsc` | Reception sous-traitance | `initwindow()`, `check_tr()`, `save_tr()`, `wf_verif_lot()`, `wf_verif_unicite_lot()`, `reset_input()` |
| `w_transact_rtpo` | Retour fournisseur | `initwindow()`, `check_tr()`, `save_tr()`, `wf_check_realdatclot()` |
| `w_transact_rtpo1` | Retour fournisseur variante 1 | _(events)_ |
| `w_transact_rtpo2` | Retour fournisseur variante 2 | _(events)_ |
| `w_transact_rtsc` | Retour sous-traitance | _(events)_ |
| `w_transact_aj` | Ajustement de stock (entree/sortie diverse) | `check_tr()`, `save_tr()`, `reset_transact()`, `refresh_quantity()`, `filteritem()`, `wf_save_ajtf_bak()`, `wf_save_rnam_bak()` |
| `w_transact_ajtf` | Ajustement transfert (mouvement entre emplacements) | `check_tr()`, `save_tr()`, `initwindow()` |
| `w_transact_ajtf_mass` | Ajustement transfert en masse | _(events)_ |
| `w_transact_ajds_mass` | Ajustement destruction en masse | _(events)_ |
| `w_transact_ajst_itemcons` | Ajustement stock consommation articles | _(events)_ |
| `w_transact_opbl` | Operation bloquee (gel/degel de lots) | `check_tr()`, `save_tr()`, `inittrans()`, `inititem()`, `filteritem()`, `resettrans()` |
| `w_transact_rnam` | Renommage de lot | `check_tr()`, `save_tr()`, `initwindow()`, `wf_returnstatus()` |
| `w_transact_dlmo` | Desolidarisation/sortie fabrication | `initwindow()`, `check_tr()`, `save_tr_u()`, `save_tr_d()`, `wf_checkloc()` |
| `w_transact_freezable` | Gel/degel de lots (freeze/unfreeze) | `check_tr()`, `save_tr()`, `reset_transact()`, `wf_save_rnam()` |
| `w_transact_containing` | Transaction sur contenants | `check_tr()`, `save_tr()`, `reset_transact()`, `wf_save_rnam()` |
| `w_transact_proj` | Transaction liee a un projet | `check_tr()`, `save_tr()`, `reset_transact()`, `refresh_quantity()` |
| `w_inventory_ajst_mass` | Ajustement d'inventaire en masse | `load_multitri()` |

### Fenetres de transfert inter-depots (_stock)

| Fenetre | Description | Fonctions cles |
|---------|-------------|----------------|
| `w_trf_3step_list` | Liste des transferts 3 etapes | _(events: open, clicked, doubleclicked)_ |
| `w_trf_3step_update` | Mise a jour transfert 3 etapes | `wf_refresh_dw_line()`, `wf_scan_trf3()` |
| `w_trf_3step_create` | Creation de transfert 3 etapes | _(events)_ |
| `w_trf3_alloc` | Allocation/preparation de transfert | `wf_inputok()` |
| `w_trf3_reception` | Reception de transfert | `wf_recept()`, `wf_refresh_dwhead()`, `wf_refresh_dwdetail()` |

### Fenetres codes-barres (_stkbarcod)

| Fenetre | Module | Description |
|---------|--------|-------------|
| `w_brf_stock_move` | _stkbarcod | Mouvement de stock par lecteur code-barres (BRF) |
| `w_brf_stock_move_groupe` | _stkbarcod | Mouvement stock groupe par BRF |
| `w_brf_stock_move_backflush` | _stkbarcod | Mouvement stock postflush par BRF |
| `w_brf_stock_loc` | _stkbarcod | Stock par emplacement via BRF |
| `w_brf_stock_inv` | _stkbarcod | Inventaire par BRF |
| `w_brf_stock_id_print` | _stkbarcod | Impression etiquettes stock par BRF |
| `w_brf_sscc_stock_move` | _stkbarcod | Mouvement stock SSCC par BRF |
| `w_brf_transact_rcpo` | _stkbarcod | Reception achat par BRF |
| `w_brf_transact_rcpo3` | _stkbarcod | Reception achat multi-lignes par BRF |
| `w_brf_transact_rcsc` | _stkbarcod | Reception sous-traitance par BRF |
| `w_brf_transact` | _stkbarcod | Transaction stock generique par BRF |
| `w_brf_transact_opbl` | _stkbarcod | Operation bloquee par BRF |
| `w_brf_trf_3step_list` | _stkbarcod | Liste transferts 3 etapes par BRF |
| `w_brf_trf_3step_update` | _stkbarcod | Mise a jour transfert 3 etapes par BRF |
| `w_bcd_stock_move` | _stkbarcod | Mouvement de stock par scanner (BCD) |
| `w_bcd_stock_move_groupe` | _stkbarcod | Mouvement stock groupe par scanner |
| `w_bcd_stock_move_backflush` | _stkbarcod | Mouvement stock postflush par scanner |
| `w_bcd_stock_loc` | _stkbarcod | Stock par emplacement via scanner |
| `w_bcd_stock_inv` | _stkbarcod | Inventaire par scanner |
| `w_bcd_transact` | _stkbarcod | Transaction stock generique par scanner |
| `w_bcd_ship_prepare` | _stkbarcod | Preparation expedition par scanner |

### Fenetres liees (autres modules)

| Fenetre | Module | Description |
|---------|--------|-------------|
| `w_smt_stock` | _stock | Stock SMT (suivi stock) |
| `w_qry_cmpny_stock` | _query | Requete stock par societe |
| `w_stockmini_calc` | _planning | Calcul des stocks minimum |
| `w_clot_stock_graph` | _query | Graphique stock cloture |
| `w_clot_stock_balance` | _query | Balance stock cloture |
| `w_imput_ventilstock_update` | _stock | Ventilation stock (imputation) |
| `w_ctransact_rcpk` | _stock | Transaction reception picking |
| `w_ctransact_rtpk` | _stock | Transaction retour picking |
| `w_ctransact_dlpk` | _stock | Transaction sortie picking |
| `w_ctransact_radj` | _stock | Transaction re-ajustement |
| `w_ctransact_dadj` | _stock | Transaction ajustement debit |
| `w_aftransact_reception` | _stock | Apres-transaction reception |
| `w_aftransact_ajtf_mass` | _stock | Apres-transaction ajustement transfert masse |

### NVO (Non-Visual Objects) du module _stock

| NVO | Ancetre | Lignes | Role | Fonctions cles |
|-----|---------|--------|------|----------------|
| `nvo_stock_aj` | nv_nonvisualobject | 1296 | **Moteur d'ajustement de stock** — verification et execution des ajustements | `uof_check_aj(transact)`, `uof_save_aj(transact)`, `uof_save_ajtf(transact)`, `uof_save_rnam(lot, loc1, loc2, qty, qty_trf)`, `uof_reset_data_transact()` |
| `nvo_recept` | nv_nonvisualobject | 1698 | **Moteur de reception** — verification et execution des receptions fournisseur/production | `uof_check_recept_pur_normal(...)`, `uof_recept_pur_normal(...)`, `uof_verif_lot(...)`, `uof_verif_unicite_lot(...)`, `uof_recept_st(...)`, `uof_check_tarif()` |
| `nvo_lot_trf3` | nv_nonvisualobject | 1594 | **Moteur de transfert 3 etapes** — preparation, allocation, reception de transferts | `uof_prepare_trf3(...)`, `uof_recept_trf3(...)`, `uof_cancel_line_trf3(...)`, `uof_deletealloc_trf3_bylot(...)`, `uof_search_lot_from_loetiq(...)`, `uof_search_remanent_validity(...)` |
| `nvo_allocate` | nv_nonvisualobject | 404 | **Moteur d'allocation automatique** — reservation de stock | `uof_autoallocate(ordrtyp, ordrno, ordrlin, qtyrequired, message)` |
| `nvo_sscc` | nv_nonvisualobject | 657 | **Gestion des SSCC** (codes-barres palette) — creation, mise a jour, transactions | `uof_1_create()`, `uof_1_update()`, `uof_1_delete()`, `uof_stock_transactions()`, `uof_trans_ajtf()`, `uof_trans_ajst()` |
| `nvo_stock_file_import` | nv_nonvisualobject | 587 | **Import fichier stock** — chargement et execution d'ajustements en masse | `uof_import_file_aj(pathfile, fa_id)`, `uof_execute_file_aj(fa_id)`, `uof_check_file(...)`, `uof_print(...)` |

### Fonctions globales du module _stock

| Fonction | Description |
|----------|-------------|
| `gf_alloc_delete` | Suppression d'allocation stock |
| `gf_autoallocate_withoutstock` | Allocation automatique sans verification de stock |
| `gf_location_buffer_mixed` | Verification emplacement tampon mixte |
| `gf_packnegstk_report` | Rapport stock negatif par emballage |
| `gf_rcpo_check_kit` | Verification kit a la reception achat |

### Structures cles

| Structure | Module | Champs principaux | Description |
|-----------|--------|-------------------|-------------|
| `transact` | _stock | `trcode`, `trordtyp`, `trordno`, `trordlin`, `tritem`, `trlot`, `trloc`, `trqty`, `trum`, `trval`, `truser`, `trdatim`, `trexpiry`, `trallocqty`, `trcomment`, `trsscc`, `trqtytrf`, `trdensity`, `trdegree`, `trloc2`, `trpn` | **Structure de transaction** — utilisee par toutes les fenetres de transaction et les NVO comme parametre |
| `stockalloc` | _stock | `lotnb`, `lotstatus`, `lotloc`, `lotavailqty`, `lotallocqty`, `origin`, `lotctrl`, `lotexp`, `loteti`, `loorgcode` | **Structure d'allocation stock** — information lot/emplacement pour allocation |
| `struct_info_recept` | _stkbarcod | `ss_phcode`, `ss_plline`, `ss_itcode`, `ss_lot`, `ss_dluo`, `ss_qty`, `ss_loc`, `ss_um`, `ss_loorgcode`, `ss_salhead`, `ss_tlteid`, `ss_tlline` | **Structure d'information reception** — parametres pour reception codes-barres |
| `st_lotlbc` | _stock | _(lot + code-barres)_ | Structure lot/code-barres |

---

## Flux : Entree de stock

### Reception fournisseur (RCPO)

```
Commande d'achat (purhead/purline)
    |
    v
Fenetre de reception (w_transact_rcpo_inout / rcpo2_inout / rcpo3)
    |-- Verification : article, lot, emplacement, quantite
    |-- Controle qualite optionnel (initqc / save_qc)
    |-- wf_verif_lot() : verification/creation lot
    |-- wf_verif_unicite_lot() : unicite du lot
    |-- check_tr() : validation metier
    |
    v
nvo_recept.uof_check_recept_pur_normal(...)  → validation
nvo_recept.uof_recept_pur_normal(...)        → execution
    |
    v
Tables mises a jour :
    - histostock : INSERT (hscode='RCPO', hsqty > 0)
    - stocks : UPDATE stqty += quantite recue
    - lots : INSERT/UPDATE (si gestion par lot)
    - purline : UPDATE plqtyrcvd (quantite recue)
    - serialnum : INSERT (si gestion par numero de serie)
```

**Variantes de reception** :
- `w_transact_rcpo_inout` : reception standard avec entree/sortie
- `w_transact_rcpo2_inout` : reception variante (unite differente)
- `w_transact_rcpo3` : reception multi-lignes avec creation commande possible (`wf_createpur()`)
- `w_transact_rcpo_dlxo` : reception avec gestion de delai
- `w_brf_transact_rcpo` / `w_brf_transact_rcpo3` : reception par code-barres

### Reception fabrication (RCMO)

```
Ordre de fabrication (mfghead)
    |
    v
w_transact_rcmo_f
    |-- initwindow() : chargement de l'OF
    |-- check_tr() / check_tr_neg() : validation (entree ou correction negative)
    |-- save_tr() / save_tr_neg() : sauvegarde
    |
    v
Tables mises a jour :
    - histostock : INSERT (hscode='RCMO', hsqty > 0)
    - stocks : UPDATE stqty += quantite produite
    - lots : INSERT/UPDATE
    - mfghead : UPDATE (quantite produite, statut)
```

### Reception sous-traitance (RCSC)

```
Ordre de sous-traitance
    |
    v
w_transact_rcsc
    |-- initwindow()
    |-- wf_verif_lot(), wf_verif_unicite_lot()
    |-- check_tr() → save_tr()
    |
    v
Tables mises a jour :
    - histostock : INSERT (hscode='RCSC', hsqty > 0)
    - stocks : UPDATE stqty += quantite recue
    - lots : INSERT/UPDATE
```

---

## Flux : Sortie de stock

### Expedition client (SHIP)

```
Commande client (salhead/salline)
    |
    v
w_sales_shipnotice2 (module _sales)
    ou w_bcd_ship_prepare / w_brf_ship_prepare (module _stkbarcod)
    |
    v
Tables mises a jour :
    - shiphead : INSERT (en-tete bon de livraison)
    - shipline : INSERT (lignes bon de livraison)
    - histostock : INSERT (hscode='SHIP', hsqty < 0)
    - stocks : UPDATE stqty -= quantite expediee
    - stocks.stalloc -= quantite desallouee
    - matallocs : DELETE/UPDATE (desallocation)
    - ssccline : UPDATE (si SSCC)
```

### Sortie production (ISSU)

```
Ordre de fabrication + nomenclature
    |
    v
w_transact_rqmo (requisition matieres)
    ou w_transact_dlmo (desolidarisation)
    |-- initwindow() : chargement composants OF
    |-- check_tr() : verification disponibilite
    |-- save_tr() / save_tr_u() / save_tr_d()
    |
    v
Tables mises a jour :
    - histostock : INSERT (hscode='ISSU', hsqty < 0)
    - stocks : UPDATE stqty -= quantite consommee
    - matallocs : UPDATE maissuedqty
```

### Retour fournisseur (RTPO)

```
Commande d'achat (purhead/purline)
    |
    v
w_transact_rtpo / rtpo1 / rtpo2
    |-- initwindow()
    |-- check_tr() → save_tr()
    |
    v
Tables mises a jour :
    - histostock : INSERT (hscode='RTPO', hsqty < 0)
    - stocks : UPDATE stqty -= quantite retournee
    - purline : UPDATE (quantite retournee)
```

### Sortie diverse / Ajustement (MISC)

```
w_transact_aj (ajustement generique)
    |-- Selectionner article, lot, emplacement
    |-- Definir code transaction + motif (transreason)
    |-- check_tr() → save_tr()
    |
    v
nvo_stock_aj.uof_check_aj(transact) → validation
nvo_stock_aj.uof_save_aj(transact)  → execution
    |
    v
Tables mises a jour :
    - histostock : INSERT (hscode selon transaction, hsqty +/- selon trsign)
    - stocks : UPDATE stqty +/- quantite ajustee
    - lots : UPDATE lostock
```

---

## Flux : Transfert inter-depots

### Transfert simple (AJTF)

```
w_transact_ajtf / w_transact_ajtf_mass
    |-- Selectionner article, lot
    |-- Definir emplacement source (trloc2) et destination (trloc)
    |-- check_tr() → save_tr()
    |
    v
nvo_stock_aj.uof_save_ajtf(transact)
    |
    v
Tables mises a jour :
    - histostock : INSERT x2 (sortie emplacement source + entree emplacement destination)
    - stocks : UPDATE source (stqty -=) + UPDATE destination (stqty +=)
```

### Transfert 3 etapes (demande → allocation → reception)

Le transfert 3 etapes est un processus formalise en trois phases distinctes, adapte aux transferts entre depots distants.

**Etape 1 : Demande de transfert**
```
w_trf_3step_create / w_trf_3step_list
    |
    v
Tables : INSERT trf3head (en-tete) + trf3line (lignes)
Statut : demande creee
```

**Etape 2 : Allocation / Preparation**
```
w_trf3_alloc
    |-- wf_inputok() : validation saisie
    |
    v
nvo_lot_trf3.uof_prepare_trf3(lot, loc, qty, tlteid, tlline)
    |
    v
Tables mises a jour :
    - matallocs : INSERT (reservation stock source)
    - stocks.stalloc += quantite allouee
Statut : alloue / en preparation
```

**Etape 3 : Reception au depot destination**
```
w_trf3_reception
    |-- wf_recept(row) : reception ligne par ligne
    |-- wf_refresh_dwhead() / wf_refresh_dwdetail()
    |
    v
nvo_lot_trf3.uof_recept_trf3(lot, loc_from, loc_to, tlteid, tlline, qty, comment)
    |
    v
Tables mises a jour :
    - histostock : INSERT x2 (sortie source + entree destination)
    - stocks source : UPDATE stqty -= , stalloc -=
    - stocks destination : UPDATE stqty +=
    - matallocs : DELETE (liberation allocation)
    - transact_with_confirm : INSERT (trace du transfert confirme)
    - trf3head/trf3line : UPDATE statut
```

**Annulation** : `nvo_lot_trf3.uof_cancel_line_trf3(tlteid, tlline)` + `uof_deletealloc_trf3_bylot(...)` pour liberer les allocations.

---

## Flux : Inventaire physique / cyclique

### Inventaire physique (ponctuel)

```
w_inventory_ajst_mass
    |-- load_multitri() : chargement des articles a inventorier
    |-- Saisie des quantites comptees
    |-- Calcul des ecarts (stock theorique vs physique)
    |-- Validation → ajustement automatique
    |
    v
Tables mises a jour :
    - histostock : INSERT (hscode='INVT', hsqty = ecart)
    - stocks : UPDATE stqty = quantite comptee
```

### Inventaire tournant (cyclique)

```
cycnthead (creation d'un comptage)
    |-- chnumcc : numero de comptage
    |-- chdate : date planifiee
    |-- chuscode : utilisateur
    |-- chstatus : statut (O=ouvert, C=cloture)
    |
    v
cycntline (lignes de comptage)
    |-- clstitem, clstlot, clstloc : article/lot/emplacement a compter
    |-- clstqty : quantite theorique (au moment du comptage)
    |-- clstqtyc : quantite comptee (saisie)
    |-- clajust : flag ajustement effectue (0/1)
    |-- clcycntdate : date du comptage reel
    |-- cldluo : date limite (DLC/DLUO)
    |
    v
Inventaire par BRF/BCD :
    w_brf_stock_inv / w_bcd_stock_inv
    |-- Scan article + lot + emplacement
    |-- Saisie quantite
    |
    v
Ajustement :
    - histostock : INSERT (hscode='INVT') pour chaque ecart
    - stocks : UPDATE pour mettre a jour les soldes
    - cycntline.clajust = 1 (marque comme ajuste)
    - cycnthead.chstatus = 'C' (cloture)
```

---

## Flux : Valorisation du stock

La valorisation du stock repose sur plusieurs mecanismes :

### Cout standard
- Defini dans la fiche article (`items.itstdcost`)
- `histostock.hsval` = `hsqty * cout standard unitaire`
- La structure `transact.trinfostdcost` transporte le cout standard lors des transactions

### Cout par lot
- Table `lots` : `lobascost` (cout de base), `loxtrcost` (cout extra)
- Dates de cout : `lobasdate`, `loxtrdate`
- Utilisateurs : `lobasuser`, `loxtruser`

### Stock reserve valorise
- Table `stocks_f` : `ststdval` (valeur standard unitaire)
- Permet de valoriser le stock par commande client

### Rapports de valorisation
- `w_clot_stock_balance` : balance stock a la cloture
- `w_clot_stock_graph` : graphique d'evolution du stock
- `gf_packnegstk_report` : detection des stocks negatifs

---

## Gestion des lots et numeros de serie

### Table lots — Cycle de vie

| Colonne | Type | Description |
|---------|------|-------------|
| `locode` | char(30) | **Code lot (PK partiel)** |
| `loitem` | char(20) | **Code article (PK partiel)** — FK vers `items` |
| `lostatus` | char(1) | **Statut du lot** (A=actif, I=inactif, etc.) |
| `lostock` | numeric(12,3) | Quantite en stock |
| `loalloc` | numeric(12,3) | Quantite allouee |
| `lowip` | numeric(12,3) | Quantite en-cours (WIP) |
| `loqcstatus` | char(1) | **Statut controle qualite** |
| `lorecdat` | timestamp | Date de reception |
| `loreldat` | timestamp | Date de liberation |
| `loexpdat` | timestamp | **Date d'expiration** (DLC/DLUO) |
| `lofreeze` | char(1) | **Lot gele** (Y/N) |
| `lofreezdate` | timestamp | Date de gel |
| `loorder` | numeric(6) | Numero d'ordre associe |
| `locmnt` | varchar(1024) | Commentaire libre |
| `loorgcode` | char(20) | Code d'origine fournisseur |
| `losampleid` | numeric(8) | Identifiant echantillon qualite |
| `lolabelid` | numeric(6) | Identifiant etiquette |
| `loserialcpt` | numeric(6) | Compteur numeros de serie |
| `lost` | char(1) | Statut lot (redondant) |
| `loexcmrp` | char(1) | Exclu du MRP (Y/N) |
| `lodensity` | numeric(6,3) | Densite du lot |
| `lodegree` | numeric(4,2) | Degre alcool |
| `loavailabledate` | timestamp | Date de disponibilite |
| `lorcpoum` | char(2) | Unite de mesure a la reception |
| `lolotctrl` | char(1) | Controle lot |
| `lobascost` | numeric(12,4) | Cout de base |
| `loxtrcost` | numeric(12,4) | Cout supplementaire |

### Operations sur les lots

| Operation | Fenetre | Code transaction | Description |
|-----------|---------|-----------------|-------------|
| Gel/degel | `w_transact_freezable` | OPBL | Bloquer/debloquer un lot (`lofreeze = Y/N`) |
| Renommage | `w_transact_rnam` | RNAM | Changer le code lot (renumerotation) |
| Blocage QC | `w_transact_opbl` | OPBL | Bloquer un lot suite a un controle qualite |
| Verification remanence | `nvo_lot_trf3.uof_search_remanent_validity()` | _(calcul)_ | Verifier si le lot respecte la duree de vie minimale requise par le client |

### Numeros de serie (table serialnum)

| Colonne | Type | Description |
|---------|------|-------------|
| `snitem` | char(20) | Code article |
| `snstartno` | numeric(9) | Numero de serie debut de plage |
| `snendno` | numeric(9) | Numero de serie fin de plage |
| `snlotid` | char(30) | Lot associe |
| `snmfgid` | numeric(6) | Ordre de fabrication |
| `snqty` | numeric(10,3) | Quantite |
| `sndat` | timestamp | Date de creation |

Les numeros de serie sont geres par plage (`snstartno` a `snendno`) et sont lies a un lot et un article. Le compteur de serie est maintenu dans `lots.loserialcpt`.

---

## Types de transactions

### Table transactions — Reference

| Colonne | Type | Description |
|---------|------|-------------|
| `trcode` | char(4) | **Code transaction (PK)** — RCPO, SHIP, etc. |
| `trname` | char(30) | Libelle de la transaction |
| `tractiv` | char(1) | Active (Y/N) |
| `trach` | char(1) | Flag achat |
| `trfab` | char(1) | Flag fabrication |
| `trexp` | char(1) | Flag expedition |
| `trway` | char(1) | **Direction** : I=entree, O=sortie, T=transfert |
| `trtracelev` | numeric(1) | Niveau de tracabilite requis |
| `triconnum` | numeric(2) | Numero d'icone |
| `trsign` | numeric(1) | **Signe** : 1=positif (entree), -1=negatif (sortie), 0=neutre |

### Codes de transaction stock

| Code | Signe | Direction | Description | Fenetre principale |
|------|-------|-----------|-------------|-------------------|
| `RCPO` | +1 | I (entree) | Reception commande d'achat | `w_transact_rcpo_inout` |
| `RCMO` | +1 | I (entree) | Reception fabrication | `w_transact_rcmo_f` |
| `RCSC` | +1 | I (entree) | Reception sous-traitance | `w_transact_rcsc` |
| `RTPO` | -1 | O (sortie) | Retour fournisseur | `w_transact_rtpo` |
| `RTSC` | -1 | O (sortie) | Retour sous-traitance | `w_transact_rtsc` |
| `SHIP` | -1 | O (sortie) | Expedition client | `w_sales_shipnotice2` |
| `ISSU` | -1 | O (sortie) | Sortie pour production | `w_transact_rqmo` |
| `MISC` | +/-1 | I/O | Mouvement divers (ajustement) | `w_transact_aj` |
| `TRF` | 0 | T (transfert) | Transfert inter-emplacements | `w_transact_ajtf` |
| `INVT` | +/-1 | I/O | Ajustement inventaire | `w_inventory_ajst_mass` |
| `OPBL` | 0 | _(neutre)_ | Operation bloquee (gel/degel) | `w_transact_opbl` |
| `RNAM` | 0 | _(neutre)_ | Renommage de lot | `w_transact_rnam` |

### Table transreason — Motifs de transaction

| Colonne | Type | Description |
|---------|------|-------------|
| `ticode` | char(4) | **Code motif (PK)** |
| `tiimp` | char(1) | Imputation (type de motif) |
| `tidesc` | char(20) | Description du motif |
| `tiactiv` | char(1) | Actif (Y/N) |

Les motifs sont associes aux transactions de type MISC (ajustement) pour preciser la raison du mouvement (rebut, don, correction, perte, etc.).

---

## Points d'attention

### Coherence stock

- **Toujours verifier SQLCA.SQLCode** apres les operations INSERT/UPDATE sur `stocks` et `histostock`.
- La quantite disponible est `stqty - stalloc`. Ne jamais modifier `stalloc` sans passer par les mecanismes d'allocation (`nvo_allocate`, `matallocs`).
- Les mouvements doivent **toujours** etre enregistres dans `histostock` en plus de la mise a jour de `stocks` — pas de mise a jour directe de `stocks` sans trace.

### Gestion des lots

- La verification d'unicite du lot (`wf_verif_unicite_lot`) est obligatoire a la reception.
- Le parametre `is_CheckParamLotFss` controle le comportement lors de la creation de lots fournisseur.
- Un lot gele (`lofreeze = 'Y'`) ne peut pas etre utilise dans les sorties (SHIP, ISSU).
- La date d'expiration (`loexpdat`) est verifiee lors des allocations et expeditions.
- Le statut QC (`loqcstatus`) peut bloquer les mouvements.

### Emplacements

- Le champ `locations.lcactiv` determine si un emplacement est actif.
- `lcmrpexcl = 'Y'` : emplacement exclu du calcul MRP.
- `lcautoalloc = 'Y'` : emplacement utilise pour l'allocation automatique.
- `lclocprod = 'Y'` : emplacement de production.
- `lctypbuffer` : type d'emplacement tampon.
- `lcpriority` : priorite pour l'allocation automatique (les emplacements de priorite inferieure sont utilises en premier).
- `lc_exclprepsimpl = 'Y'` : exclu de la preparation simplifiee.
- `linkitloc` lie un article a un emplacement avec des quantites min/max.

### Allocations

- L'allocation automatique est geree par `nvo_allocate.uof_autoallocate()`.
- `gf_alloc_delete` permet de supprimer une allocation.
- `gf_autoallocate_withoutstock` alloue sans verifier le stock reel (pour les besoins planifies).
- La table `matallocs` contient les allocations de matieres avec le detail lot/emplacement.
- `matallocs.maallocqty` = quantite allouee, `maissuedqty` = quantite effectivement sortie.

### SSCC (Serial Shipping Container Code)

- La gestion SSCC est assuree par `nvo_sscc` dans le module `_stock`.
- Les unites logistiques sont tracees dans `ssccline`.
- Les operations SSCC incluent : creation (`uof_1_create`), mise a jour (`uof_1_update`), suppression (`uof_1_delete`), transactions stock (`uof_stock_transactions`).

### Codes-barres (BRF / BCD)

- Deux modes d'interface terrain : **BRF** (lecteur code-barres fixe) et **BCD** (scanner mobile).
- L'objet `nvo_bcd_brf` (148 fonctions, module `_cust2`) est le moteur commun aux fenetres BRF et BCD.
- Toutes les fenetres BRF/BCD utilisent la variable `nvo_bc : nvo_bcd_brf` pour acceder aux fonctions.
- Les messages d'erreur sont stockes dans des variables d'instance (`Msg_Error`, `Msg_no_Item`, `Msg_no_lot`, etc.) et multilingues.

### Structure transact — Parametre universel

La structure `transact` est le parametre central de toutes les operations de stock. Champs importants :
- `trcode` : code transaction (RCPO, SHIP, etc.)
- `tritem` / `trlot` / `trloc` : article, lot, emplacement
- `trqty` : quantite du mouvement
- `trum` : unite de mesure
- `trordtyp` / `trordno` / `trordlin` : reference ordre source
- `trexpiry` : date d'expiration du lot
- `trallocqty` : quantite a allouer
- `trsscc` : code SSCC
- `trqtytrf` : quantite en unite tarifaire
- `trloc2` : emplacement d'origine (pour les transferts AJTF)
- `trprgcmnt` : commentaire programme automatique

### NVO nvo_stock_aj — Variables cles

- `is_error` : message d'erreur en cas d'echec
- `il_histoseq` : sequence du mouvement dans histostock
- `ib_interactive` : mode interactif (true) ou batch (false) — en mode batch, pas de MessageBox
- `is_itumtrf` : parametre unite tarifaire
- `is_rnamonpist` : parametre renommage sur pistage

---

## Recherche rapide

| Je cherche... | Ou regarder |
|--------------|-------------|
| Soldes de stock par article | Table `stocks` (stitem + stloc + stqty) |
| Stock par lot | Table `stocks` (filtrer sur stlot) + Table `lots` |
| Historique des mouvements | Table `histostock` (index sur hsitem, hsdatim, hscode) |
| Reception fournisseur | `w_transact_rcpo_inout` / `nvo_recept` |
| Sortie pour production | `w_transact_rqmo` (ISSU) |
| Expedition client | `w_sales_shipnotice2` (module `_sales`) |
| Ajustement de stock | `w_transact_aj` / `nvo_stock_aj` |
| Transfert entre depots | `w_transact_ajtf` (simple) ou `w_trf_3step_*` (3 etapes) |
| Inventaire | `w_inventory_ajst_mass` / `cycnthead` + `cycntline` |
| Allocation automatique | `nvo_allocate.uof_autoallocate()` |
| Allocations en cours | Table `matallocs` |
| Stock reserve par commande | Table `stocks_f` |
| Gestion des lots | Table `lots` + fenetres `w_transact_opbl`, `w_transact_rnam`, `w_transact_freezable` |
| Numeros de serie | Table `serialnum` |
| Codes SSCC | `nvo_sscc` + table `ssccline` |
| Emplacements | Table `locations` + `linkitloc` (min/max par article) |
| Stock par emplacement | `w_stock_loc` / `w_brf_stock_loc` / `w_bcd_stock_loc` |
| Import fichier stock | `nvo_stock_file_import` |
| Operations par code-barres | Fenetres `w_brf_*` (BRF) et `w_bcd_*` (BCD) dans `_stkbarcod` |
| Types de transaction | Table `transactions` (trcode, trway, trsign) |
| Motifs d'ajustement | Table `transreason` |
| Stock negatif | `gf_packnegstk_report` |
| Calcul stock minimum | `w_stockmini_calc` (module `_planning`) |
| Valorisation stock | `w_clot_stock_balance`, `lots.lobascost / loxtrcost` |
