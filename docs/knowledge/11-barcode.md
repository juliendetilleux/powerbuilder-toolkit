# 11 - CODE-BARRES (Barcode & Scanning)

## Vue d'ensemble

Le module codes-barres (`_stkbarcod`) de PmiGest ERP fournit une interface optimisee pour les operations terrain utilisant des lecteurs de codes-barres. Il couvre la preparation de commandes (picking), les receptions fournisseur, les expeditions, les retours, la fabrication, l'inventaire, le colisage et le controle qualite. C'est l'un des plus gros modules du systeme avec **303 objets** (139 fenetres, 129 DataWindows, 18 fonctions, 10 structures, 6 user objects, 1 menu).

Deux types de terminaux sont supportes :

| Aspect | BRF (Barcode Reader Form) | BCD (Barcode Device) |
|--------|---------------------------|----------------------|
| Type | Lecteur fixe / filaire connecte a un PC | Scanner portable autonome |
| Prefixe fenetres | `w_brf_*` | `w_bcd_*` |
| Ancetre typique | `w_brf_response` → `w_brf_nvo` | `w_response` ou `w_main` |
| Interface | Ecran PC avec saisie clavier, fond vert fonce | Ecran tactile simplifie |
| NVO partage | `nvo_bcd_brf` | `nvo_bcd_brf` |

Le moteur logique metier est centralise dans un unique objet non-visuel (`nvo_bcd_brf`) partage par toutes les fenetres BRF et BCD. Ce NVO contient plus de 25 000 lignes de code et gere le decodage, la validation, les interactions stock/commandes/fabrication.

---

## Tables principales

### ean128 -- Definitions codes-barres EAN128/GS1-128

Table de reference des balises EAN128 (norme GS1-128). Definit la structure des codes-barres pour le decodage.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `eabalise` | varchar(10) | Non | **(PK)** Identifiant de la balise GS1 (ex: "01", "10", "17", "21") |
| `easizebalise` | numeric(2) | Non | Taille de la balise (nombre de caracteres de l'identifiant) |
| `easizedata` | numeric(3) | Non | Taille des donnees associees a cette balise |
| `eavariable` | char(1) | Non | "Y" si la longueur des donnees est variable, "N" si fixe |

**Cle primaire** : `eabalise`
**Pas de FK** : table de reference autonome.

Les balises GS1-128 courantes : `01` = GTIN, `10` = lot/batch, `17` = date d'expiration, `21` = numero de serie, `37` = quantite, `00` = SSCC.

### ssccline -- Lignes SSCC (Serial Shipping Container Code)

Table des contenus des colis/palettes identifies par un code SSCC. Relie un code SSCC a un lot, une quantite, un emplacement et une ligne d'expedition.

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `slcode` | char(18) | Non | Code SSCC (18 caracteres selon norme GS1) |
| `sllot` | char(30) | Oui | Numero de lot contenu dans le SSCC |
| `slqty` | numeric(10,3) | Oui | Quantite dans le SSCC |
| `slloc` | char(8) | Oui | Emplacement de stockage |
| `slin` | char(1) | Oui | Indicateur entree/sortie |
| `sl_lastmod` | timestamp | Oui | Date de derniere modification |
| `slshiphead` | numeric(8) | Oui | Numero d'en-tete d'expedition (FK vers `shiphead`) |
| `slshipline` | numeric(4) | Oui | Numero de ligne d'expedition (FK vers `shipline`) |

**FK sortante** : `shipline` (via `slshiphead` + `slshipline`)

### labelconfig -- Configuration des etiquettes

Table de parametrage des formats d'etiquettes pour l'impression de codes-barres (dimensions, marges, grille lignes/colonnes).

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| `lbid` | numeric(3) | Non | **(PK)** Identifiant du format d'etiquette |
| `lbname` | varchar(30) | Non | Nom du format (ex: "A4 3x7", "Zebra 100x50") |
| `lbwidth` | numeric(5,1) | Non | Largeur de l'etiquette (mm) |
| `lbheight` | numeric(5,1) | Non | Hauteur de l'etiquette (mm) |
| `lbrowsnb` | numeric(2) | Non | Nombre de lignes par page |
| `lbcolsnb` | numeric(2) | Non | Nombre de colonnes par page |
| `lbmargleft` | numeric(3,1) | Non | Marge gauche (mm) |
| `lbmargright` | numeric(3,1) | Non | Marge droite (mm) |
| `lbmargtop` | numeric(3,1) | Non | Marge haute (mm) |
| `lbmargbottom` | numeric(3,1) | Non | Marge basse (mm) |
| `lbrowspace` | numeric(3,1) | Non | Espacement entre lignes (mm) |
| `lbcolspace` | numeric(3,1) | Non | Espacement entre colonnes (mm) |
| `lbmain` | char(1) | Oui | "Y" si format par defaut |
| `lbactiv` | char(1) | Oui | "Y" si actif |

### Autres tables impliquees dans le module

| Table | Usage dans le module barcode |
|-------|------------------------------|
| `salhead` | En-tete commande client -- selection commande a preparer (lecture) |
| `salline` | Lignes commande client -- quantites requises (`slqtyreq`) et allouees (`slqtyalloc`) |
| `items` | Articles -- identification par code-barres, unite, lot, emplacement par defaut |
| `stockmvt` | Mouvements de stock -- toutes les operations de scan generent des ecritures |
| `shiphead` | En-tete livraison/expedition (ecriture) |
| `shipline` | Lignes livraison/expedition (ecriture) |
| `purgline` | Lignes commande achat -- reception fournisseur (lecture/ecriture) |
| `mfghead` | En-tete ordre de fabrication (lecture) |
| `mfgline` | Lignes OF -- composants a prelever (lecture) |
| `mfgprogress` | Avancement OF -- declaration par scan (ecriture) |
| `qlctrl` | Controle qualite (ecriture) |
| `adresses` | Clients -- nom pour affichage lors du picking/expedition |

---

## Objets PB cles

### Objet non-visuel central : nvo_bcd_brf

| Propriete | Valeur |
|-----------|--------|
| **Type** | User Object (Non-visuel) |
| **Ancetre** | `nv_nonvisualobject` |
| **Module** | `_cust2` |
| **Taille** | > 25 000 lignes |
| **Role** | Moteur logique metier pour TOUT le module codes-barres |

Cet objet est le cerveau du module. Il est reference par quasiment toutes les fenetres BRF et BCD via la variable d'instance `nvo_bc`. Il centralise :

- Le decodage des codes-barres (EAN-13, EAN-128/GS1-128, SSCC)
- La validation metier (lot, emplacement, quantite, date d'expiration)
- Les interactions avec le stock, les commandes et la fabrication
- Les messages d'erreur et de confirmation multilingues

**Variables d'instance principales** :

| Variable | Type | Role |
|----------|------|------|
| `is_Item` | string | Code article en cours de traitement |
| `is_ItemName` | string | Nom de l'article |
| `is_lot` | string | Numero de lot |
| `is_itum` | string | Unite de mesure |
| `is_itdefaultloc` | string | Emplacement par defaut |
| `il_OrdNo` | long | Numero de commande/OF en cours |
| `ii_ordline` | int | Numero de ligne |
| `id_reqqty` | decimal | Quantite requise |
| `id_qtymax` | decimal | Quantite maximale autorisee |
| `id_item_qty` | decimal | Quantite scannee |
| `id_stdval` | decimal | Valeur standard |
| `is_custid` / `is_adname` | string | Client (code / nom) |
| `is_pallet` / `is_crate` | string | Palette / caisse en cours |
| `lnvo_colisage` | nvo_colisage | Sous-NVO de gestion du colisage |
| `is_worker` / `is_worker_name` | string | Operateur identifie |
| `ib_shipprepare_makeissue` | boolean | Flag : creer le mouvement de sortie a l'expedition |
| `Msg_*` | String | Messages d'erreur (multilingues) |
| `Conf_*` | String | Messages de confirmation |

**Fonctions publiques principales** (35+ fonctions) :

| Fonction | Description |
|----------|-------------|
| `ship_prepare(string, integer, integer)` | Preparation d'expedition |
| `ship_prepare_cust(string, integer, integer)` | Preparation expedition par client |
| `uof_ship_prepare_check_custorder(string)` | Verification commande client |
| `uof_ship_prepare_check_item(string, integer)` | Verification article |
| `uof_ship_prepare_check_lot(integer)` | Verification lot pour expedition |
| `uof_ship_prepare_make_ship_alloc()` | Creation allocation d'expedition |
| `uof_ship_prepare_make_receipt(long)` | Creation bon de reception |
| `uof_ship_prepare_backflush()` | Backflush expedition |
| `uof_ship_prepare_consigne(string)` | Traitement consigne |
| `mfg_prepare(string, integer, integer)` | Preparation fabrication (matieres) |
| `mfg_prepare2(string, integer, integer)` | Preparation fabrication variante 2 |
| `mfg_report(string, integer, integer)` | Declaration production |
| `mfg_report2(string, integer, integer)` | Declaration production variante 2 |
| `mfg_report_user(string, integer, integer)` | Declaration production par operateur |
| `mfg_progress(string, integer, integer)` | Suivi avancement fabrication |
| `mfg_quality(string, integer, integer)` | Controle qualite fabrication |
| `mfg_addsupp_wc(string, integer, integer)` | Ajout poste de charge supplementaire |
| `stock_inv(string, integer, integer)` | Inventaire de stock |
| `stock_move(string, integer, integer)` | Mouvement de stock (transfert emplacement) |
| `stock_move_group(string, integer, integer)` | Mouvement de stock groupe |
| `stock_move_backflush(string, integer, integer)` | Mouvement backflush |
| `picking(string, integer)` | Picking |
| `colisage(string, integer, integer)` | Colisage (emballage colis) |
| `colisage2(string, integer, integer)` | Colisage variante 2 |
| `containing(string, integer, integer)` | Contenance |
| `transaction(string, integer, integer)` | Transaction de stock generique |
| `tictrl(string, integer, integer)` | Controle de pointage |
| `lot(string, integer, integer)` | Gestion des lots |
| `uof_loc(string, integer, integer)` | Gestion des emplacements |
| `uof_item(string, integer, integer)` | Gestion des articles |
| `uof_showerror(string)` | Affichage message d'erreur |
| `uof_showconfirm(string)` | Affichage message de confirmation |
| `uof_show_question(string)` | Affichage question oui/non |

### Fenetres Barcode Reader (BRF) -- prefixe `w_brf_*`

Les fenetres BRF sont concues pour les postes fixes avec lecteur code-barres filaire. Interface PC standard avec fond vert fonce adapte a la lisibilite en entrepot.

#### Menus et navigation

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_brf_menu` | `w_response` | Menu principal BRF -- point d'entree general |
| `w_brf_menu_stk` | `w_response` | Menu Stock -- operations de stockage, inventaire, mouvements |
| `w_brf_menu_sal` | `w_response` | Menu Ventes -- preparation commandes, expedition, retours |
| `w_brf_menu_mfg` | `w_response` | Menu Fabrication -- preparation matieres, declaration production |
| `w_brf_menu_int` | `w_response` | Menu Interne -- operations internes |
| `w_brf_menu_old` | `w_response` | Menu ancien format (retro-compatibilite) |
| `w_brf_sscc_menu` | `w_response` | Menu SSCC -- operations palettes/colis SSCC |

#### Expedition et preparation

| Fenetre | Ancetre | Description | Fonctions cles |
|---------|---------|-------------|----------------|
| `w_brf_ship_prepare` | `w_response` | Preparation expedition -- scan articles, verification commande, allocation stock | `wf_error()`, `wf_modif_qty()`, `wf_checkphysiol()` |
| `w_brf_ship_prepare_bycust` | `w_response` | Preparation expedition regroupee par client | |
| `w_brf_sscc_ship_prepare` | `w_response` | Preparation expedition SSCC -- scan palettes/colis avec code SSCC | `wf_check_custorder()`, `wf_make_ship_alloc()`, `wf_check_sscc()` |
| `w_brf_picking` | `w_response` | Picking -- prelevement articles en stock pour commandes | via `nvo_bc` |
| `w_brf_prepare_loc` | `w_response` | Preparation par emplacement | |
| `w_brf_prepare_loc_empl` | `w_response` | Preparation par emplacement (variante) | |
| `w_brf_prepare_loc_forsales` | `w_response` | Preparation emplacement pour ventes | |

#### Reception

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_brf_recept` | `w_response` | Reception fournisseur par scan -- utilise `nvo_purrcpt` (NVO reception achat) |

#### Fabrication

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_brf_mfg_report` / `_report2` / `_report_user` | `w_response` | Declaration production -- entree stock produits finis (3 variantes) |
| `w_brf_mfg_progress` | `w_response` | Suivi avancement fabrication -- declaration temps/operations |
| `w_brf_mfg_prepare` / `_prepare2` | `w_response` | Preparation matieres pour un OF (via `nvo_bc.mfg_prepare()`) |
| `w_brf_mfg_prepare_histo` / `_histo_list` | `w_brf_response` | Historique des preparations fabrication |
| `w_brf_mfg_picking` | `w_response` | Picking composants (`wf_check_lot()`, `wf_check_mfgorder()`) |
| `w_brf_mfg_linecheck` | `w_brf_response` | Verification ligne fabrication |
| `w_brf_mfg_addsupp_wc` | `w_response` | Ajout poste de charge supplementaire |
| `w_brf_mfg_return` | `w_response` | Retour matieres fabrication |
| `w_brf_mfgw_update` | `w_response` | Mise a jour poste de travail fabrication |

#### Stock et inventaire

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_brf_stock_inv` | `w_response` | Inventaire par scan -- comptage physique des articles |
| `w_brf_stock_move` | `w_response` | Mouvement de stock -- transfert entre emplacements |
| `w_brf_stock_move_groupe` | `w_response` | Mouvement de stock groupe -- plusieurs articles/lots |
| `w_brf_stock_move_backflush` | `w_response` | Mouvement backflush |
| `w_brf_stock_loc` | `w_response` | Consultation emplacement stock |
| `w_brf_stock_id_print` | `w_main` | Impression etiquettes stock -- genere les etiquettes d'identification |
| `w_brf_sscc_stock_move` | `w_response` | Mouvement stock SSCC -- transfert de palettes entieres |
| `w_brf_sscc_loc_move` | `w_response` | Mouvement emplacement SSCC |

#### Autres operations BRF

- **Transactions stock** : `w_brf_transact` (generique), `w_brf_transact_rcpo` / `w_brf_transact_rcpo3` (reception achat), `w_brf_transact_rcsc` (sous-traitance), `w_brf_transact_opbl` (operation BL)
- **Qualite** : `w_brf_quality` -- controle qualite par scan (evenements : `closequery`, `losefocus`)
- **Retours** : `w_brf_return_item` (retour article, structure `s_sqlsearch_return`), `w_brf_return_loc`, `w_brf_return_cycn`
- **Caisse/POS** : `w_brf_cash` (vente directe par scan), `w_brf_cash_ticket_pay_update`
- **Divers** : `w_brf_pallet`, `w_brf_tictrl` (pointage), `w_brf_incub_in` (incubation), `w_brf_report_loc`, `w_brf_cycn_input`, `w_brf_trf_3step_update` / `w_brf_trf_3step_list` (transfert 3 etapes)

#### Dialogues de saisie BRF

Fenetres utilitaires partagees par les ecrans BRF (toutes heritent de `w_response` sauf mention) :

- **Saisie** : `w_brf_input_qty` (quantite, structure `s_qty_req`), `w_brf_input_text` (texte libre), `w_brf_input_user` (identification operateur), `w_brf_input_picking`, `w_brf_input_palette_sol`
- **Lots** : `w_brf_lot` (saisie/selection), `w_brf_lot_qty` (quantite par lot), `w_brf_lot_list` / `w_brf_lot_list2` (listes)
- **Emplacements** : `w_brf_loc` (saisie), `w_brf_loc_list` (liste)
- **Articles** : `w_brf_item` (saisie), `w_brf_item_list` (liste)
- **SSCC** : `w_brf_select_sscc` (ancetre `w_brf_response`), `w_brf_select_sscc_qty`
- **Dialogues** : `w_brf_question`, `w_brf_confirmmsg`, `w_brf_errormsg`, `w_brf_print`, `w_brf_check_col`, `w_brf_containing`, `w_brf_chose_date` (ancetre `w_brf_response`)

### Fenetres Barcode Device (BCD) -- prefixe `w_bcd_*`

Les fenetres BCD sont concues pour les scanners portables. Interface simplifiee avec boutons plus gros et ergonomie tactile. La plupart heritent de `w_response`, certaines de `w_main`.

#### Expedition et preparation

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_bcd_ship_prepare` | `w_main` | Preparation expedition (scanner portable) |
| `w_bcd_ship_prepare2` | `w_response` | Preparation expedition variante 2 |
| `w_bcd_ship_prepare3` | `w_response` | Preparation expedition variante 3 |
| `w_bcd_ship_prepare3_sel` | `w_response` | Selection pour preparation expedition v3 |
| `w_bcd_ship_prepare_bycust` | `w_response` | Preparation expedition par client |
| `w_bcd_picking` | `w_response` | Picking (scanner portable) |
| `w_bcd_prepare_loc` | `w_response` | Preparation par emplacement |
| `w_bcd_prepare_loc_forsales` | `w_response` | Preparation emplacement pour ventes |
| `w_bcd_sales_directship` | `w_response` | Expedition directe vente |

#### Reception

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_bcd_recept` | `w_response` | Reception fournisseur (scanner portable) -- utilise `nvo_purrcpt` |
| `w_bcd_rcmo` | `w_response` | Reception ordre de fabrication |

#### Fabrication

| Fenetre | Description |
|---------|-------------|
| `w_bcd_mfg_report` / `_report2` / `_report_user` | Declaration production (3 variantes, ancetre `w_response`) |
| `w_bcd_mfg_progress` | Suivi avancement fabrication (scanner) |
| `w_bcd_mfg_prepare` / `_prepare2` | Preparation matieres (scanner) |
| `w_bcd_mfg_linecheck` / `w_bcd_mfg_addsupp_wc` | Verification ligne / ajout poste de charge |
| `w_bcd_batch_mfg_prepare` / `_sel` | Preparation batch fabrication + selection |
| `w_bcd_of_choice` | Choix d'OF |

#### Stock et inventaire

| Fenetre | Ancetre | Description |
|---------|---------|-------------|
| `w_bcd_stock_inv` | `w_response` | Inventaire (scanner portable) |
| `w_bcd_stock_move` | `w_response` | Mouvement de stock |
| `w_bcd_stock_move_groupe` | `w_response` | Mouvement de stock groupe |
| `w_bcd_stock_move_backflush` | `w_response` | Mouvement backflush |
| `w_bcd_stock_loc` | `w_response` | Consultation emplacement |
| `w_bcd_report_loc` | `w_response` | Rapport par emplacement |

#### Autres operations BCD

- **Transactions** : `w_bcd_transact` (stock generique)
- **Qualite** : `w_bcd_quality` (controle qualite, evenements : `closequery`, `losefocus`)
- **Colisage** : `w_bcd_colisage` (emballage colis, NVO `nvo_bcd_brf`, structure `s_qty_req`)
- **Pointage** : `w_bcd_tictrl`, `w_bcd_tictrl2`, `w_bcd_tictrl3` (3 variantes)
- **Divers** : `w_bcd_pallet`, `w_bcd_return_cycn`, `w_bcd_incub_in`, `w_bcd_tache_list`, `w_bcd_left2allocate`

#### Dialogues de saisie BCD

Fenetres utilitaires partagees par les ecrans BCD (toutes heritent de `w_response`) :

- **Saisie** : `w_bcd_input_qty` (quantite, **supporte balances** : Bizerba socket, Espera, Alwegen via `nvo_alwegen`), `w_bcd_input_text` (texte), `w_bcd_input_user` (operateur), `w_bcd_cycn_input` (comptage cyclique)
- **Lots** : `w_bcd_lot`, `w_bcd_lot_qty`, `w_bcd_lot_list` / `w_bcd_lot_list2`
- **Listes** : `w_bcd_loc_list` (emplacements), `w_bcd_item_list` (articles)
- **Dialogues** : `w_bcd_question`, `w_bcd_questionmsg`, `w_bcd_confirmmsg`, `w_bcd_errormsg`, `w_bcd_check_col`, `w_bcd_containing`

---

## Heritage

### Chaine d'heritage des fenetres BRF

```
window (PB built-in)
  └── w_a_pmi                         ← controle d'acces, autorisations
       └── w_window                    ← resize, design, sauvegarde taille
            └── w_a_response_pmi       ← fenetre de dialogue
                 └── w_brf_response    ← ancetre BRF : fond vert fonce, plein ecran
                      │                   Variables: ib_fullposition
                      │                   Fonctions: wf_position("FULL"|"CENTER")
                      │
                      └── w_brf_nvo    ← ancetre BRF avec NVO integre
                           │              Variables: nvo_bc (nvo_bcd_brf), ii_level
                           │
                           ├── w_brf_select_sscc
                           ├── w_brf_select_sscc_qty
                           ├── w_brf_mfg_prepare_histo
                           ├── w_brf_mfg_prepare_histo_list
                           ├── w_brf_mfg_linecheck
                           └── w_brf_chose_date
```

**Important** : La majorite des fenetres `w_brf_*` n'heritent PAS de `w_brf_nvo` mais directement de `w_response`. Elles instancient le NVO `nvo_bcd_brf` manuellement dans leur variable `nvo_bc`. Seuls 6 descendants heritent de `w_brf_nvo`.

### Chaine d'heritage des fenetres BCD

Les fenetres BCD n'ont pas d'ancetre specifique. Elles heritent directement de `w_response` (la plupart) ou de `w_main` (pour `w_bcd_ship_prepare`). Le NVO `nvo_bcd_brf` est instancie via la variable `nvo_bc`.

### Heritage du NVO central

```
nonvisualobject (PB built-in)
  └── nv_nonvisualobject              ← ancetre NVO PmiGest
       └── nvo_bcd_brf                ← moteur logique barcode (> 25 000 lignes)
```

---

## Flux : Scan article

Sequence de validation lors du scan d'un code-barres article :

1. **Lecture code-barres** : L'operateur scanne un code EAN-13 ou GS1-128
2. **Decodage** : Le NVO `nvo_bcd_brf` decode la balise selon la table `ean128` (taille, variable/fixe)
3. **Identification article** : Recherche dans la table `items` par code-barres, code article ou GTIN
4. **Verification lot** : Si l'article est gere par lot, demande le scan du lot (balise GS1 `10`)
5. **Verification date d'expiration** : Si applicable, verifie la date (balise GS1 `17`)
6. **Verification emplacement** : Propose l'emplacement par defaut (`items.itdefaultloc`) ou demande le scan
7. **Saisie quantite** : Fenetre `w_brf_input_qty` ou `w_bcd_input_qty` pour la quantite
8. **Validation** : Controles metier (stock disponible, lot bloque QC, date expiree, quantite excessive)

Messages d'erreur standards (variables `Msg_*` dans le NVO) :

| Variable | Signification |
|----------|---------------|
| `Msg_no_Item` | Article non trouve |
| `Msg_no_lot` | Lot non trouve |
| `Msg_no_loc` | Emplacement non trouve |
| `Msg_no_qty` | Quantite invalide |
| `Msg_2much` | Quantite excessive |
| `Msg_miss_qty` | Quantite manquante |
| `Msg_Lot_QC` | Lot bloque en controle qualite |
| `Msg_Lot_Exp` | Lot expire |
| `Msg_Lot_ResExp` | Lot avec date de remanence expiree |
| `Msg_Lot_read` | Erreur lecture lot |

---

## Flux : Picking / Preparation commande

Fenetre principale : `w_brf_ship_prepare` (BRF) / `w_bcd_ship_prepare` (BCD)

1. **Selection commande** : L'operateur scanne le code-barres de la commande ou la selectionne dans la liste
   - Table : `salhead` (lecture)
   - Fonction NVO : `uof_ship_prepare_check_custorder()`
2. **Affichage commande** : Le systeme affiche le client (`is_AdName`), la reference client (`is_CustRef`), les articles a preparer
   - Tables : `salline`, `adresses`
3. **Scan articles** : Pour chaque article de la commande, l'operateur scanne le code-barres
   - Fonction NVO : `uof_ship_prepare_check_item()`
   - Verification stock disponible : `id_itstock`, `id_italloc`
4. **Verification lot** : Si article gere par lot, scan du lot
   - Fonction NVO : `uof_ship_prepare_check_lot()`
   - Controles : QC (`Msg_Lot_QC`), expiration (`Msg_Lot_Exp`), remanence (`Msg_Lot_ResExp`)
5. **Saisie quantite** : Confirmation de la quantite preparee
   - Variables : `id_reqqty` (requise), `id_QtyReq` (demandee), `id_qtymax` (max), `id_Qty2prep` (reste a preparer)
   - Controle quantite : `is_qtyctrl` (parametre de controle)
6. **Allocation** : Creation de l'allocation stock
   - Fonction NVO : `uof_ship_prepare_make_ship_alloc()`
   - Tables : `salline.slqtyalloc`, `stockmvt`
7. **Impression etiquette** : Si parametre, impression automatique de l'etiquette colis
   - Variable : `is_brf_printer` (imprimante selectionnee)
   - DataWindow : `d_prepcmd_etiq_print`

### Variante par client

Fenetre `w_brf_ship_prepare_bycust` / `w_bcd_ship_prepare_bycust` : permet de preparer toutes les commandes d'un client en une seule operation. Fonction NVO : `ship_prepare_cust()`.

### Variante SSCC

Fenetre `w_brf_sscc_ship_prepare` : preparation par scan de codes SSCC (palettes/colis). L'operateur scanne le SSCC au lieu de scanner chaque article individuellement. Fonctions specifiques : `wf_check_sscc()`, messages `Msg_No_Sscc`, `Msg_Sscc_Read`, `Msg_Sscc_StockOut`.

---

## Flux : Reception avec scan

Fenetre principale : `w_brf_recept` (BRF) / `w_bcd_recept` (BCD)

Ce flux utilise un NVO different : `nvo_purrcpt` (module `_purch`) au lieu de `nvo_bcd_brf`.

1. **Selection commande achat** : L'operateur selectionne la commande fournisseur a receptionner
   - Table : `purgline` (lecture)
2. **Scan articles recus** : Lecture du code-barres de chaque article recu
   - Verification correspondance avec la commande
   - Table : `items` (identification)
3. **Saisie lot** : Si article gere par lot, creation ou selection du lot
4. **Saisie quantite** : Confirmation de la quantite recue
5. **Validation** : Enregistrement de la reception et mise a jour du stock
   - Tables : `purgline` (mise a jour quantite recue), `stockmvt` (mouvement d'entree)

### Variantes reception

| Fenetre | Description |
|---------|-------------|
| `w_brf_transact_rcpo` | Reception commande achat (variante transaction) |
| `w_brf_transact_rcpo3` | Reception achat variante 3 |
| `w_brf_transact_rcsc` | Reception sous-traitance |
| `w_bcd_rcmo` | Reception ordre de fabrication (BCD) |
| `w_brf_sscc_rcmo` | Reception OF par SSCC |

---

## Flux : Expedition avec scan

Ce flux prolonge la preparation de commande.

1. **Visualisation preparation** : Apres le picking, l'expedition affiche les articles prepares
   - DataWindows : `d_barcode_ship`, `d_barcode_ship2`
   - Variable : `is_BCDSHIPVIEW` (vue d'expedition parametrable)
2. **Verification colisage** : Si colisage active, l'operateur scanne chaque colis
   - Fenetre : `w_bcd_colisage` / NVO : `nvo_colisage`
   - Variable NVO : `lnvo_colisage`
3. **Association SSCC** : Attribution d'un code SSCC a chaque colis/palette
   - Table : `ssccline` (creation des lignes SSCC)
4. **Confirmation expedition** : Validation finale de l'expedition
   - Fonction NVO : `uof_ship_prepare_make_ship_alloc()`
   - Tables : `shiphead` (creation en-tete livraison), `shipline` (lignes)
   - Table : `stockmvt` (mouvement de sortie)
   - Variable : `ib_shipprepare_makeissue` (flag pour creer le mouvement immediatement)
5. **Impression BL** : Impression du bon de livraison

### Backflush expedition

Fenetre `w_brf_stock_move_backflush` / `w_bcd_stock_move_backflush` : permet le mouvement retroactif de stock (backflush) lors de l'expedition. Fonction NVO : `uof_ship_prepare_backflush()`.

---

## Flux : Impression etiquettes

### Etiquettes stock

Fenetre : `w_brf_stock_id_print` (ancetre `w_main`)

1. **Selection article/lot** : L'operateur selectionne l'article et le lot a etiqueter
   - Fonction : `init(as_lot)` -- initialisation avec le lot
2. **Configuration impression** : Selection du format via `labelconfig`
   - Fonction : `wf_set_report_fullname()` -- definit le rapport d'impression
   - Fonction : `wf_adaptwidth()` -- adapte la largeur au format
3. **Impression** : Generation des etiquettes
   - Fonction : `wf_win_print(lot_id, nbcopies)` -- impression avec nombre de copies
   - DataWindow : `d_stock_id_print`

### Etiquettes preparation commande

Impression automatique ou manuelle des etiquettes de colis lors du picking.
- DataWindow : `d_prepcmd_etiq_print`
- Declenchee par la variable `is_brf_printer` dans `w_brf_ship_prepare`

### Configuration des formats (table `labelconfig`)

Les formats d'etiquettes sont parametrables : dimensions (mm), marges, grille lignes/colonnes. Le format par defaut est marque `lbmain = 'Y'`. Formats courants : planches A4 multi-etiquettes, etiquettes Zebra individuelles.

---

## Flux : Fabrication avec scan

### Declaration de production

Fenetre : `w_brf_mfg_report` / `w_bcd_mfg_report`

1. **Selection OF** : L'operateur scanne le code-barres de l'ordre de fabrication
   - Variable : `il_OrdNo` (numero OF)
2. **Scan produit fini** : Scan du code article fabrique
   - Variables : `is_Item`, `is_ItemName`
3. **Saisie lot** : Attribution du lot de production
   - Variable : `is_lot`
4. **Saisie quantite** : Quantite declaree
   - Variables : `id_reqqty` (quantite requise OF), `id_mfgqty` (quantite fabriquee)
5. **Emplacement** : Emplacement de stockage
   - Variable : `is_itdefaultloc`
6. **Validation** : Entree en stock
   - Fonction NVO : `mfg_report()`
   - Table : `stockmvt` (mouvement d'entree production)

### Suivi avancement

Fenetre : `w_brf_mfg_progress` / `w_bcd_mfg_progress`

Permet la declaration d'avancement des operations (temps, quantite) sur un OF.
- Fonction NVO : `mfg_progress()`
- Variable specifique BCD : `is_ADVANCSCHED` (planning avancement)
- Fonction BCD : `wf_connect()`, `wf_check_visibility_doc()`
- Table : `mfgprogress`
- Utilise un `timer` pour le rafraichissement automatique

### Preparation matieres (picking composants)

Fenetre : `w_brf_mfg_picking` / `w_brf_mfg_prepare`

Prelevement des composants necessaires a la fabrication.
- Fonctions : `wf_check_mfgorder()` (verification OF), `wf_check_lot()` (verification lot)
- Fonction NVO : `mfg_prepare()`, `picking()`
- Tables : `mfgline` (composants a prelever), `stockmvt` (mouvement sortie)

---

## Points d'attention

### Scanner (BCD) vs Reader (BRF) -- differences cles

1. **Ancetre different** : Les fenetres BRF utilisent parfois `w_brf_response` (fond vert fonce, plein ecran), les BCD utilisent `w_response` ou `w_main`.
2. **Heritage non symetrique** : Il n'y a PAS de `w_bcd_response`. Les BCD n'ont pas d'ancetre dedie.
3. **Equipements peripheriques** : `w_bcd_input_qty` supporte les balances connectees (Bizerba via socket, Espera, Alwegen via `nvo_alwegen`). Les BRF n'ont pas cette integration balance.
4. **Fenetres non appairees** : Certaines fenetres BRF n'ont pas d'equivalent BCD et inversement (ex: `w_brf_cash` existe en BRF seulement, `w_bcd_batch_mfg_prepare` existe en BCD seulement).
5. **Extension client** : `w_xtra_brf_menu_stk` (dans `_sysxtra`) permet de personnaliser le menu stock BRF par client.

### Pattern NVO -- architecture centrale

Le pattern `nvo_bcd_brf` est central a comprendre :

- **Un seul NVO pour tout** : Toute la logique metier est dans `nvo_bcd_brf` (> 25 000 lignes). Il n'y a pas de separation par domaine fonctionnel.
- **Instanciation** : Chaque fenetre cree sa propre instance via `nvo_bc` (variable d'instance de type `nvo_bcd_brf`). Le NVO n'est pas partage entre fenetres.
- **Navigation par niveaux** : La variable `ii_level` dans chaque fenetre controle le niveau de navigation dans le workflow (ex: level 1 = commande, level 2 = article, level 3 = lot, level 4 = quantite).
- **Messages multilingues** : Les variables `Msg_*` et `Conf_*` sont initialisees dans l'event `open` de chaque fenetre pour supporter le multilinguisme.
- **Exception** : `w_brf_recept` et `w_bcd_recept` utilisent `nvo_purrcpt` (module `_purch`) au lieu de `nvo_bcd_brf` car la reception fournisseur releve de la logique achat.

### Variables d'instance communes

Presque toutes les fenetres barcode partagent un ensemble commun de variables :

| Groupe | Variables | Role |
|--------|-----------|------|
| Navigation | `ii_level` | Niveau dans le workflow multi-ecrans |
| Commande | `il_OrdNo`, `ii_OrdLine` | Numero et ligne de commande/OF |
| Article | `is_Item`, `is_ItemName`, `is_ItUm`, `is_item_bcd_auto` | Article, nom, unite, auto-scan |
| Quantite | `id_reqqty`, `id_item_qty`, `id_stdval`, `id_QtyReq`, `id_qtymax`, `id_Qty2prep` | Quantites diverses |
| Client | `is_CustId`, `is_CustRef`, `is_AdName`, `ii_shipto` | Client et adresse livraison |
| Stock | `id_itstock`, `id_italloc` | Stock disponible et alloue |
| Trace | `uniqueid` | Identifiant unique pour tracabilite |
| NVO | `nvo_bc` (nvo_bcd_brf) | Reference au moteur logique |
| Messages | `Msg_Error`, `Msg_no_*`, `Msg_Lot_*`, `Conf_*` | Messages d'erreur et confirmation |

### SSCC (Serial Shipping Container Code)

Les fenetres prefixees `w_brf_sscc_*` gerent les palettes/colis identifies par un code SSCC a 18 chiffres (norme GS1). Fonctionnalites :

- `w_brf_sscc_menu` : menu specifique SSCC
- `w_brf_sscc_ship_prepare` : preparation expedition par palette SSCC
- `w_brf_sscc_stock_move` : mouvement stock de palettes entieres
- `w_brf_sscc_loc_move` : deplacement d'emplacement SSCC
- `w_brf_sscc_rcmo` : reception OF par SSCC
- `w_brf_select_sscc` / `w_brf_select_sscc_qty` : selection de SSCC

### Caisse / POS

`w_brf_cash` (+ `w_brf_cash_ticket_pay_update`) fournit un mode caisse simplifie :
- Vente directe par scan d'articles
- Fonctions : creation ticket (`wf_create_ticket`), avis d'expedition (`wf_create_shipnotice`), facture (`wf_create_invoice`)
- Gestion prix (`wf_get_pricedata`), client (`wf_get_custdata`)
- Variable specifique : `is_brfcash` (dans le menu ventes)

### Colisage

Le colisage est gere par un NVO dedie `nvo_colisage`, reference via `lnvo_colisage` dans `nvo_bcd_brf`. Fenetres : `w_bcd_colisage`, `w_brf_check_col`, `w_bcd_check_col`. Le processus permet de scanner les articles et de les affecter a des colis/palettes avant expedition.

---

## DataWindows principaux

| DataWindow | Module | Role |
|------------|--------|------|
| `d_barcode_ship` | `_stkbarcod` | Grille de preparation expedition |
| `d_barcode_ship2` | `_stkbarcod` | Detail expedition secondaire |
| `d_stock_available` | `_stkbarcod` | Stock disponible par article |
| `d_prepcmd_etiq_print` | `_prints_std` | Etiquette preparation commande |
| `d_stock_id_print` | `_prints_std` | Etiquette stock (identification article/lot) |
| `d_quality_update` | `_stkbarcod` | Grille controle qualite |

---

## Recherche rapide

| Je cherche... | Ou regarder |
|---------------|-------------|
| Logique metier codes-barres | `nvo_bcd_brf` (NVO central, module `_cust2`, > 25 000 lignes) |
| Preparation de commande | `w_brf_ship_prepare`, `w_bcd_ship_prepare`, `nvo_bcd_brf.ship_prepare()` |
| Reception fournisseur par scan | `w_brf_recept`, `w_bcd_recept`, `nvo_purrcpt` (module `_purch`) |
| Declaration de production | `w_brf_mfg_report`, `w_bcd_mfg_report`, `nvo_bcd_brf.mfg_report()` |
| Suivi avancement fabrication | `w_brf_mfg_progress`, `w_bcd_mfg_progress`, `nvo_bcd_brf.mfg_progress()` |
| Picking composants fabrication | `w_brf_mfg_picking`, `nvo_bcd_brf.mfg_prepare()` |
| Inventaire par scan | `w_brf_stock_inv`, `w_bcd_stock_inv`, `nvo_bcd_brf.stock_inv()` |
| Mouvement de stock par scan | `w_brf_stock_move`, `w_bcd_stock_move`, `nvo_bcd_brf.stock_move()` |
| Etiquettes / impression | `w_brf_stock_id_print`, `labelconfig`, `d_stock_id_print` |
| Colisage / emballage | `w_bcd_colisage`, `nvo_colisage`, `nvo_bcd_brf.colisage()` |
| Operations SSCC / palettes | `w_brf_sscc_*`, `ssccline`, `w_brf_select_sscc` |
| Caisse / vente directe | `w_brf_cash`, `w_brf_cash_ticket_pay_update` |
| Controle qualite par scan | `w_brf_quality`, `w_bcd_quality`, `nvo_bcd_brf.mfg_quality()` |
| Retour article | `w_brf_return_item`, structure `s_sqlsearch_return` |
| Menu principal BRF | `w_brf_menu`, `w_brf_menu_stk`, `w_brf_menu_sal`, `w_brf_menu_mfg` |
| Extension client menu | `w_xtra_brf_menu_stk` (module `_sysxtra`) |
| Ancetre fenetres BRF | `w_brf_response` → `w_brf_nvo` (module `_ancestor`) |
| Definition balises GS1-128 | Table `ean128` |
| Codes SSCC | Table `ssccline` |
| Formats d'etiquettes | Table `labelconfig` |
| Saisie quantite avec balance | `w_bcd_input_qty` (Bizerba, Espera, Alwegen) |
| Transactions stock generiques | `w_brf_transact`, `w_brf_transact_rcpo`, `w_bcd_transact` |
| Pointage / tictrl | `w_brf_tictrl`, `w_bcd_tictrl`, `nvo_bcd_brf.tictrl()` |
