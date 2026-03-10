# w_allocateorder_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Allocateorder - Mise a jour (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| Is_Ittyp | string |
| ib_bfdel | boolean |
| is_backflush | string |
| is_start_alloctyp | string |
| idec_allocqty | decimal |
| ii_LastItemSeq | Integer |
| il_MfgId | Long |
| idwc_loc | datawindowchild |
| is_stockunmanaged | string |
| is_it_sel_id | string |
| is_It_sel_name | string |
| ii_it_sel_leadtime | int |
| ii_It_Sel_availtime | int |
| id_It_sel_stdcost | decimal |
| isel_itemseq | int |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| checkitem(string selected_item) | public | Validation |
| changeitem(string selected_item) | public | Modification |
| mfglineinputok() | public | Verifie mfglineinputok |
| wf_utilitiesalloc() | public | Verifie wf_utilitiesalloc |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
