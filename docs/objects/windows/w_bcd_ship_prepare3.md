# w_bcd_ship_prepare3

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Expedition prepare3 (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_BCDSHPEANWTL | string |
| is_BCDLOCQU | string |
| is_barcode | String |
| ib_choice_loc | boolean |
| ib_dw_sale_done | boolean |
| il_tabidparent | long |
| ii_indexidparent | int |
| il_id | long |
| is_BCDXCTRL1 | string |
| is_loc | string |
| ii_linnbr | integer |
| iboo_Not1stPass | Boolean |
| il_Scanned_LastRow | Long |
| is_Sl_loc_Filter | String |
| il_order | long |
| is_PKIMPTYP_fileval | string |
| ii_inter | int |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_error(string as_msg) | public | Traitement wf_error |
| wf_scan_s(string as_data) | public | Traitement wf_scan_s |
| wf_refresh_sale(long al_salcode) | public | Rafraichit l'affichage |
| wf_ean13(string as_data) | public | Calcule/retourne wf_ean13 |
| wf_ean128(string as_data) | public | Calcule/retourne wf_ean128 |
| wf_add_cons(string as_data) | public | Ajout |
| wf_check_lot(string as_data) | public | Validation |
| wf_save() | public | Sauvegarde les donnees |
| wf_find_loc(string as_item, string as_lot) | public | Recherche |
| wf_check_groupfromalloc(long al_salhead) | public | Validation |
| wf_add(long al_slcode, long al_slline, string as_lot, decimal ad_qty, decimal ad_conv, decimal ad_weight, string as_um, datetime adt_dluo) | public | Ajout |
| wf_confirm_reset(string as_message) | public | Reinitialisation |
| wf_endcont() | public | Traitement wf_endcont |
| wf_check_art() | public | Validation |
| wf_check_qty(decimal ad_qty, long al_row) | public | Validation |
| wf_chek_prepare() | public | Verifie wf_chek_prepare |
| wf_refresh_toprepare() | public | Rafraichit l'affichage |
| wf_check_article(string as_data) | public | Validation |
| wf_get_salord() | public | Retourne salord |
| wf_check_lotsurimp(ref struct_info_recept ast_info_recept_return[]) | public | Validation |
| wf_last_qty_mod() | public | Traitement wf_last_qty_mod |
| wf_calc_packweight(long ai_cons_id_tocalc) | public | Calcul |
| wf_bpost_inter_options() | public | Traitement wf_bpost_inter_options |
| wf_check_infoetigroup(string as_item) | public | Validation |
| wf_etigroup_print(string as_item, string as_lot) | public | Impression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| deactivate | Desactivation de la fenetre |
| closequery | Verification avant fermeture |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
| losefocus | Evenement losefocus |
