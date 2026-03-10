# w_brf_sscc_stock_move

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Sscc stock move (Codes-barres/Stock)

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
| id_stdval | decimal |
| is_hjjob | string |
| is_hjcomnt | string |
| uniqueid | long |
| Msg_Error | String |
| Msg_no_use | String |
| Msg_no_loc_activate | String |
| Msg_no_Item | String |
| Msg_no_lot | String |
| Msg_no_loc | String |
| Msg_no_qty | String |
| Msg_miss_qty | String |
| Msg_Lot_QC | String |
| Msg_Lot_Exp | String |
| Msg_loc_same | String |
| Conf_Cancel | String |
| Conf_Qty | String |
| Msg_Sscc_StockOut | String |
| is_negbcd | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_error(string as_msg) | public | Traitement wf_error |
| wf_showlevelinfo() | public | Affichage |
| wf_check_emp(string as_data) | public | Validation |
| wf_save_rnam(string as_lot, string as_loc1, string as_loc2, decimal ad_qty) | public | Sauvegarde les donnees |
| wf_check_sscc(string as_data) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| deactivate | Desactivation de la fenetre |
| clicked | Clic sur la fenetre |
