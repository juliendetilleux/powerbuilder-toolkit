# Flux : Codes-barres et picking

## Description
Le module codes-barres (`_stkbarcod`) de PmiGest fournit une interface optimisee pour les operations terrain utilisant des lecteurs de codes-barres. Il couvre la preparation de commandes (picking), les receptions, les expeditions, les retours, la fabrication et l'inventaire. Deux types de terminaux sont supportes : BRF (lecteur code-barres fixe/filaire) et BCD (scanner portable).

## Etapes du flux

### Preparation de commande (Picking)
1. **Selection de la commande** : L'operateur scanne le code-barres de la commande ou le selectionne dans la liste. → Fenetre : `w_brf_ship_prepare` / `w_bcd_ship_prepare`, Table : `salhead`
2. **Scan des articles** : Chaque article prepare est scanne. Le systeme verifie la correspondance avec la commande et affiche les informations (quantite requise, stock disponible). → Fenetre : `w_brf_ship_prepare`, Tables : `salline`, `items`, `stockmvt`
3. **Saisie des quantites** : L'operateur confirme la quantite preparee. → Fenetre : `w_bcd_input_qty`, Table : `salline`
4. **Allocation** : Les quantites scanees sont allouees dans le stock. → Table : `salline` (champ `slqtyalloc`), `stockmvt`
5. **Impression etiquette** : Impression des etiquettes de colis/palette. → Fenetre : `w_print`, DataWindow : `d_prepcmd_etiq_print`

### Expedition
6. **Preparation expedition** : Vue des articles prepares avec detail par commande, client et reference. → Fenetre : `w_brf_ship_prepare`, DataWindows : `dw_barcode_ship`, `dw_barcode_ship2`
7. **Validation expedition** : Confirmation de l'expedition avec generation du bon de livraison. → Tables : `shiphead`, `shipline`, `stockmvt`

### Reception fournisseur par scanner
8. **Scan des articles recus** : Lecture du code-barres a la reception. → Fenetre : `w_brf_receipt` / `w_bcd_receipt`, Tables : `purgline`, `items`
9. **Validation reception** : Enregistrement de la quantite recue et mise a jour du stock. → Tables : `stockmvt`, `purgline`

### Fabrication par scanner
10. **Suivi avancement production** : Declaration d'avancement des operations de fabrication. → Fenetre : `w_brf_mfg_progress` / `w_bcd_mfg_progress`, Table : `mfgprogress`
11. **Declaration de production** : Entree en stock des produits finis par scan. → Fenetre : `w_brf_mfg_report`, Table : `stockmvt`
12. **Picking composants** : Preparation des composants pour un OF. → Fenetre : `w_brf_mfg_picking`, Tables : `mfgline`, `stockmvt`
13. **Preparation fabrication** : Interface de preparation des matieres pour la production. → Fenetre : `w_brf_mfg_prepare` / `w_brf_mfg_prepare2`, Tables : `mfghead`, `mfgline`

### Retour articles
14. **Retour article** : Gestion des retours avec scan du code-barres. → Fenetre : `w_brf_return_item`, Tables : `stockmvt`, `items`

### Stock et inventaire
15. **Impression etiquettes stock** : Impression d'etiquettes pour les emplacements ou articles. → Fenetre : `w_brf_stock_id_print`, DataWindow : `d_stock_id_print`

### Controle qualite
16. **Saisie QC par scanner** : Saisie des resultats de controle qualite via terminal. → Fenetre : `w_brf_quality` / `w_bcd_quality`, Table : `qlctrl`

## Fenetres impliquees

| Fenetre | Module | Role |
|---------|--------|------|
| `w_brf_ship_prepare` | `_stkbarcod` | Preparation commande (BRF) |
| `w_bcd_ship_prepare` | `_stkbarcod` | Preparation commande (BCD) |
| `w_brf_mfg_report` | `_stkbarcod` | Declaration production (BRF) |
| `w_brf_mfg_progress` | `_stkbarcod` | Avancement fabrication (BRF) |
| `w_brf_mfg_prepare` | `_stkbarcod` | Preparation fabrication (BRF) |
| `w_brf_mfg_prepare2` | `_stkbarcod` | Preparation fabrication variante (BRF) |
| `w_brf_mfg_prepare_histo` | `_stkbarcod` | Historique preparation (BRF) |
| `w_brf_mfg_prepare_histo_list` | `_stkbarcod` | Liste historique preparation (BRF) |
| `w_brf_mfg_picking` | `_stkbarcod` | Picking composants (BRF) |
| `w_bcd_mfg_progress` | `_stkbarcod` | Avancement fabrication (BCD) |
| `w_brf_return_item` | `_stkbarcod` | Retour article (BRF) |
| `w_brf_quality` | `_stkbarcod` | Controle qualite (BRF) |
| `w_bcd_quality` | `_stkbarcod` | Controle qualite (BCD) |
| `w_brf_stock_id_print` | `_stkbarcod` | Impression etiquettes stock (BRF) |
| `w_bcd_input_qty` | `_stkbarcod` | Saisie quantite (BCD) |
| `w_brf_menu_stk` | `_stkbarcod` | Menu stock codes-barres |
| `w_xtra_brf_menu_stk` | `_sysxtra` | Extension client du menu stock BRF |

## Tables impliquees

| Table | Usage |
|-------|-------|
| `salhead` | En-tete commande (lecture) - selection commande a preparer |
| `salline` | Lignes commande (lecture/ecriture) - quantites requises et allouees |
| `items` | Articles (lecture) - identification par code-barres, unite, lot |
| `stockmvt` | Mouvements stock (ecriture) - toutes operations |
| `shiphead` | En-tete livraison (ecriture) |
| `shipline` | Lignes livraison (ecriture) |
| `purgline` | Lignes commande achat (lecture/ecriture) - reception |
| `mfghead` | OF (lecture) - production |
| `mfgline` | Lignes OF (lecture) - composants |
| `mfgprogress` | Avancement OF (ecriture) |
| `qlctrl` | Controle qualite (ecriture) |
| `adresses` | Clients (lecture) - nom pour affichage |

## DataWindows principaux

| DataWindow | Module | Role |
|------------|--------|------|
| `d_barcode_ship` | `_stkbarcod` | Grille preparation expedition |
| `d_barcode_ship2` | `_stkbarcod` | Detail expedition secondaire |
| `d_stock_available` | `_stkbarcod` | Stock disponible par article |
| `d_prepcmd_etiq_print` | `_prints_std` | Etiquette preparation commande |
| `d_stock_id_print` | `_prints_std` | Etiquette stock |
| `d_quality_update` | `_stkbarcod` | Grille controle qualite |

## Objet non-visuel cle

| Objet | Module | Role |
|-------|--------|------|
| `nvo_bcd_brf` | `_stkbarcod` / `_cust2` | Moteur logique du module codes-barres. Gere le decodage des codes-barres, la validation metier, les interactions avec le stock, les commandes et la fabrication. Plus de 25000 lignes de code. Utilise dans les deux variantes BRF et BCD. |

## Architecture BRF vs BCD

| Aspect | BRF (Barcode Reader Form) | BCD (Barcode Device) |
|--------|---------------------------|----------------------|
| Type | Lecteur fixe / filaire | Scanner portable |
| Fenetres | Prefixe `w_brf_` | Prefixe `w_bcd_` |
| Ancetre | `w_brf_response` | `w_response` |
| Interface | Ecran PC avec saisie clavier | Ecran tactile simplifie |
| NVO partage | `nvo_bcd_brf` | `nvo_bcd_brf` |

## Liens avec autres flux

- **Vente** : Le picking est l'etape cle entre la commande et l'expedition.
- **Achat** : La reception par scanner accelere l'enregistrement des marchandises.
- **Fabrication** : Le suivi de production par scanner permet un reporting en temps reel.
- **Qualite** : Le controle qualite par scanner est integre au flux de reception.
- **Stock** : Toutes les operations de scan generent des mouvements de stock.
