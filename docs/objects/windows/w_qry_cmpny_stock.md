# w_qry_cmpny_stock

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _query
- **Description**: Cmpny stock (Requetes)

## Variables d'instance

| Variable | Type |
|----------|------|
| VisibilityAll | boolean |
| is_qry_ad | string |
| ls_testtri | string |
| is_su_bluefilter | string |
| is_item | string |
| WipModified | Boolean |
| trcode | string |
| reascode | string |
| sel_code | string |
| sel_codename | string |
| tonow | datetime |
| ii_SelectTab | Int |
| is_AdCons | String |
| is_ItId | String |
| is_InfoHisto | String |
| is_InfoLowStock | String |
| is_InfoQC | String |
| StockUseIndex | integer |
| StockPrintIndex | integer |
| is_Filter_histo | string |
| ii_index | int |
| is_Filter_rot | string |
| is_InfoHisto_emp | string |
| is_STDSPC | string |
| is_locfilter | string |
| ldwc_locs | datawindowchild |
| il_oldrow | long |
| idt_dat_lot | datetime |
| idt_Date_Lot_Start | DateTime |
| idt_Date_Lot_Stop | DateTime |
| is_mcfilter | string |
| lb_ismulticodo_visible | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| recalcwip(long ordno) | public | Calcul |
| loadtransact() | public | Charge les donnees |
| loadreason(string cur_code) | public | Charge les donnees |
| wf_checkauthority() | public | Validation |
| wf_selectitem(string sel_item) | public | Selection |
| wf_refresh_index() | public | Rafraichit l'affichage |
| wf_fill_item_use(string as_item) | public | Verifie wf_fill_item_use |
| wf_qual_date_treat() | public | Traitement wf_qual_date_treat |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
