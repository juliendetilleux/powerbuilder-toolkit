# w_qry_cmpny_pur

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _query
- **Description**: Cmpny pur (Requetes)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_qry_ad | string |
| idt_histostart | datetime |
| idt_RcpoStart | DateTime |
| iboo_CurrRet | Boolean |
| iboo_PlanRet | Boolean |
| iboo_AbcPlanRet | Boolean |
| iboo_RcpoRet | Boolean |
| iboo_HistoRet | Boolean |
| iboo_ContractRet | Boolean |
| iboo_InvRet | Boolean |
| iboo_Suppliers | Boolean |
| is_TestTri | String |
| idt_InvStart | DateTime |
| id_PurInvStart | datetime |
| ii_Index | Integer |
| ii_SelectTab | Int |
| is_InfoOpen | String |
| is_InfoPlan | String |
| is_InfoRCPO | String |
| is_InfoHisto | String |
| is_InfoInv | String |
| is_Infoitems | String |
| iboo_CtOpenRet | Boolean |
| il_CntctId | Long |
| is_InfoCtOpen | String |
| Adress_visibility | Boolean |
| Item_visibility | Boolean |
| ii_itemsoc | int |
| is_caevol | string |
| caevol_start | datetime |
| caevol_stop | datetime |
| il_purorder | long |
| is_ordertype | string |
| ii_ind | int |
| ib_filtersearchfocus | Boolean |
| is_filtersearchname | String |
| screenfilter_af | String |
| screenfilter_fa | String |
| dwc | datawindowchild |
| is_mcfilter | string |
| ib_ismulticodo_visible | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| essai(tabpage_open atp_tp, tab at_t, w_window aw_w, uo_datawindow adw_dw) | public | Traitement essai |
| wf_checkauthority() | public | Validation |
| wf_refresh_index() | public | Rafraichit l'affichage |
| wf_filtersearchsetfocus() | public | Applique un filtre |
| filteritem(string as_filtersearch) | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| losefocus | Evenement losefocus |
| ue_graph_create | Evenement personnalise ue_graph_create |
