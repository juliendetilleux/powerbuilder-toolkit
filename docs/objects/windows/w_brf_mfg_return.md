# w_brf_mfg_return

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Fabrication retours (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_level | Integer |
| il_OrdNo | Long |
| ii_OrdLine | Int |
| is_Item | string |
| is_ItemName | string |
| id_reqqty | decimal |
| is_ItUm | string |
| is_item_bcd_auto | string |
| id_item_qty | decimal |
| id_stdval | decimal |
| uniqueid | long |
| Msg_Error | String |
| Msg_no_use | String |
| Msg_no_order | String |
| Msg_no_Item | String |
| Msg_no_lot | String |
| Msg_no_loc | String |
| Msg_no_qty | String |
| Msg_miss_qty | String |
| Msg_Lot_QC | String |
| Msg_Lot_Exp | String |
| Msg_Lot_read | String |
| Conf_Cancel | String |
| Conf_Qty | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_error(string as_msg) | public | Traitement wf_error |
| wf_showlevelinfo() | public | Affichage |
| wf_check_lot(string as_data) | public | Validation |
| wf_check_mfgorder(string as_data) | public | Validation |
| wf_make_mfg_issues() | public | Verifie wf_make_mfg_issues |
| wf_make_stock_issues_return(long ordno, integer ordlin, string item, string lot, string loc, decimal qty, string itum) | public | Verifie wf_make_stock_issues_return |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| deactivate | Desactivation de la fenetre |
| clicked | Clic sur la fenetre |
