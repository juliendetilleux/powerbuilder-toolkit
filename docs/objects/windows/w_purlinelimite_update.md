# w_purlinelimite_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Purlinelimite - Mise a jour (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| id_orgnlqty | decimal |
| iSel_purord | long |
| iSel_purlin | integer |
| Action | String |
| Item_Price_pmix | Double |
| shiptoName | string |
| ShipToNb | integer |
| ib_flash | boolean |
| ii_nbtimer | integer |
| idec_currconv | decimal |
| is_APPROBIVY | string |
| il_CntrctId | Long |
| ii_index | int |
| isel_adresse_id | string |
| ii_It_Sel_availtime | int |
| iSel_line_Status | string |
| iSel_ordr_Curr | string |
| is_ITUMTRF | string |
| is_LINKITEM | string |
| ii_Ret | int |
| is_type_WMS | string |
| nv_contract | nvo_purchase_contract |
| iw_parent | w_window |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| checkitem(string selected_item) | public | Validation |
| changeorder(double orderqty, double uomconv, double stdval, string ordercurr) | public | Modification |
| purlineinputok() | public | Verifie purlineinputok |
| load_ddlb_shipto() | public | Charge les donnees |
| changedate(datetime newdat, integer intdelay, string mode) | public | Modification |
| changeitem(string selected_item, boolean at_wload) | public | Modification |
| wf_itemretrieve(string as_item) | public | Recupere les donnees |
| wf_check_tarif(boolean ab_modifycoeff) | public | Validation |
| wf_reset_dw_usrfld() | public | Reinitialisation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| timer | Evenement timer |
| rbuttondown | Evenement rbuttondown |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
