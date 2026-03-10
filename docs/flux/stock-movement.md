# Flux : Gestion des stocks

## Description
La gestion des stocks dans PmiGest couvre les mouvements d'entree, de sortie, les transferts entre emplacements, et les operations d'inventaire. Le module `_stock` centralise toutes les transactions de stock, tandis que le module `_stkbarcod` fournit l'interface de saisie par codes-barres pour les operations terrain (picking, reception, inventaire).

## Etapes du flux

### Entrees de stock
1. **Reception fournisseur** : Entree de stock suite a une commande d'achat. → Fenetre : `w_purchase_receipt`, Table : `stockmvt` (type RCPO)
2. **Retour de production** : Entree en stock d'articles fabriques. → Fenetre : `w_transact_rcmo_f`, Table : `stockmvt` (type RCMO)
3. **Entree diverse** : Ajustement positif de stock (dons, corrections, etc.). → Fenetre : `w_transact_misc`, Table : `stockmvt`

### Sorties de stock
4. **Expedition client** : Sortie de stock pour livraison. → Fenetre : `w_sales_shipnotice2`, Tables : `shiphead`, `shipline`, `stockmvt`
5. **Sortie production** : Consommation de matieres pour un ordre de fabrication. → Fenetre : `w_transact_issu`, Table : `stockmvt`
6. **Retour fournisseur** : Sortie de stock pour retour. → Fenetre : `w_purchase_return`, Table : `stockmvt` (type RTPO)
7. **Sortie diverse** : Ajustement negatif (rebuts, pertes, etc.). → Fenetre : `w_transact_misc`, Table : `stockmvt`

### Transferts
8. **Transfert inter-emplacements** : Deplacement d'articles entre deux emplacements de stock. → Fenetre : `w_trf_3step_update`, Tables : `stockmvt`, `trf3head`
9. **Transfert 3 etapes** : Processus en 3 etapes : demande → allocation → reception. → Fenetre : `w_trf_3step_list` / `w_trf_3step_update`, Table : `trf3head`
10. **Allocation transfert** : Reservation des quantites pour un transfert. → Fenetre : `w_trf3_alloc`, Table : `stockmvt`

### Inventaire
11. **Inventaire physique** : Comptage des quantites reelles en stock. → Fenetre : `w_inventory_update`, Table : `stockinv`
12. **Ajustement d'inventaire** : Mise a jour des ecarts entre stock theorique et stock physique. → Fenetre : `w_inventory_adjust`, Tables : `stockmvt`, `stockinv`

## Fenetres impliquees

| Fenetre | Module | Role |
|---------|--------|------|
| `w_purchase_receipt` | `_stock` | Reception fournisseur |
| `w_purchase_return` | `_stock` | Retour fournisseur |
| `w_transact_rcpo_inout` | `_stock` | Transaction reception commande achat |
| `w_transact_rcpo2_inout` | `_stock` | Transaction reception variante |
| `w_transact_rcpo3` | `_stock` | Transaction reception multi-lignes |
| `w_transact_rcpo_dlxo` | `_stock` | Transaction reception avec delai |
| `w_transact_rcmo_f` | `_stock` | Reception fabrication |
| `w_transact_rcsc` | `_stock` | Reception sous-traitance |
| `w_transact_rtpo` | `_stock` | Retour fournisseur |
| `w_transact_rtpo1` | `_stock` | Retour fournisseur variante 1 |
| `w_transact_rtpo2` | `_stock` | Retour fournisseur variante 2 |
| `w_transact_rtsc` | `_stock` | Retour sous-traitance |
| `w_trf_3step_update` | `_stock` | Transfert 3 etapes - mise a jour |
| `w_trf_3step_list` | `_stock` | Liste des transferts 3 etapes |
| `w_trf3_alloc` | `_stock` | Allocation de transfert |
| `w_sales_shipnotice2` | `_sales` | Bon de livraison / expedition |
| `w_brf_stock_id_print` | `_stkbarcod` | Impression etiquettes stock (BRF) |
| `w_bcd_ship_prepare` | `_stkbarcod` | Preparation expedition par scanner |
| `w_brf_ship_prepare` | `_stkbarcod` | Preparation expedition par BRF |

## Tables impliquees

| Table | Usage |
|-------|-------|
| `stockmvt` | Mouvements de stock (ecriture) - table centrale de toutes les transactions |
| `stockhead` | En-tete stock / soldes par emplacement (lecture/ecriture) |
| `stocklot` | Stock par lot (ecriture) pour articles geres par lots |
| `items` | Articles (lecture) - reference article, type, unite |
| `trf3head` | En-tete transfert 3 etapes (ecriture) |
| `trf3line` | Lignes transfert 3 etapes (ecriture) |
| `stockinv` | Inventaire physique (ecriture) |
| `shiphead` | En-tete livraison (ecriture) |
| `shipline` | Lignes livraison (ecriture) |
| `purgline` | Lignes commande achat (lecture/ecriture - mise a jour qte recue) |
| `emplacement` | Emplacements de stockage (lecture) |

## DataWindows principaux

| DataWindow | Module | Role |
|------------|--------|------|
| `d_stockmvt_list` | `_stock` | Liste des mouvements de stock |
| `d_stockhead_sel` | `_stock` | Consultation stock par article |
| `d_trf3_head_update` | `_stock` | Mise a jour transfert 3 etapes |
| `d_trf3_alloc` | `_stock` | Allocation transfert |
| `d_stock_id_print` | `_prints_std` | Impression etiquettes de stock |
| `d_trans_rcpo_print` | `_prints_std` | Impression bon de reception |

## Types de transactions stock

| Code | Description |
|------|-------------|
| RCPO | Reception commande d'achat |
| RTPO | Retour fournisseur |
| RCMO | Reception fabrication |
| RCSC | Reception sous-traitance |
| RTSC | Retour sous-traitance |
| SHIP | Expedition client |
| ISSU | Sortie pour production |
| MISC | Mouvement divers |
| TRF  | Transfert inter-emplacements |
| INVT | Ajustement inventaire |
