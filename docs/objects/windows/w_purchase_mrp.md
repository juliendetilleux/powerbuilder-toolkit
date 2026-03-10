# w_purchase_mrp

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Achats mrp

## Variables d'instance

| Variable | Type |
|----------|------|
| ib_withcontract | boolean |
| id_sel_cost | double |
| il_contordid | long |
| il_contractid | long |
| idwc_Purchaser | datawindowchild |
| purchaser | string |
| ii_nbtimer | integer |
| ib_light | boolean |
| idec_currconv | decimal |
| is_SuppPay | String |
| ib_firstclick | boolean |
| screenFilter | string |
| ii_cptsel | integer |
| idt_newdate | datetime |
| ib_newdate | boolean |
| ib_manumod | boolean |
| is_ddlbsuppdef | string |
| iSel_quote_id | decimal |
| iSel_adresse_id | string |
| iSel_adresse_name | string |
| iSel_shipto_id | integer |
| iSel_Item_Id | string |
| is_It_sel_name | string |
| is_it_sel_um | string |
| ii_It_Sel_availtime | int |
| id_It_sel_stdcost | decimal |
| isel_purord | long |
| iSel_purlstlin | int |
| iSel_DueDate | datetime |
| is_linkitad_ref | string |
| is_ITUMTRF | string |
| is_itum | string |
| id_plrist | decimal |
| is_MULTICO | string |
| is_type_WMS | string |
| is_cmnt | string |
| il_chcode | long |
| is_plprorig | string |
| nv_contract | nvo_purchase_contract |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| showorderdetail() | public | Affichage |
| load_shiptoddlb() | public | Charge les donnees |
| wf_contract_valid() | public | Verifie wf_contract_valid |
| wf_filter() | public | Applique un filtre |
| init() | public | Initialisation |
| createplorder() | public | Creation |
| refresh_mrp(string as_item, date as_date) | public | Rafraichit l'affichage |
| wf_check_tarif(long al_row) | public | Validation |
| wf_delete_mrp() | public | Suppression |
| wf_check_contract() | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| timer | Evenement timer |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
