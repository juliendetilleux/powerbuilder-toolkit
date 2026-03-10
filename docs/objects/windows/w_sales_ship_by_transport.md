# w_sales_ship_by_transport

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Ventes expedition by transport

## Variables d'instance

| Variable | Type |
|----------|------|
| ib_shipdatpara | boolean |
| il_sel_truck_id | long |
| is_testtri | string |
| ii_sel_shipto_id | integer |
| is_filter | string |
| ldec_LastCordC | Decimal |
| is_SelAdNeVal | String |
| ii_nbcopy | Integer |
| last_shipordno | long |
| last_dat | datetime |
| is_TURNTRUK1 | string |
| ib_windows_active | boolean |
| id_date | datetime |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_filteritem() | public | Applique un filtre |
| wf_check_dateperiod() | public | Validation |
| wf_check_precolisage() | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| activate | Activation de la fenetre |
| timer | Evenement timer |
| deactivate | Desactivation de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| ue_selectionchanged | Evenement personnalise ue_selectionchanged |
