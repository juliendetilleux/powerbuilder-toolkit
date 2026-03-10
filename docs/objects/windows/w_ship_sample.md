# w_ship_sample

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _quality
- **Description**: Expedition sample (Qualite)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_lot | string |
| is_cust | string |
| is_custcurr | string |
| is_ShipToName | string |
| ii_ShipToNb | integer |
| ii_ShipToDays | integer |
| ii_shipto | integer |
| ii_shipdays | integer |
| Last_Dat | DateTime |
| last_shipordno | long |
| il_shipnotice | long |
| il_malocseq | long |
| il_ctrl | long |
| idw_cust | Datawindowchild |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_load_ddlb_shipto(string as_adid) | public | Charge les donnees |
| uof_shiphead(long al_code, string as_cust, integer ai_shipto, string as_comment, long al_sort) | public | Calcule/retourne uof_shiphead |
| wf_exp(ref string as_error, string as_loc, decimal ad_qty, string as_item) | public | Verifie wf_exp |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
