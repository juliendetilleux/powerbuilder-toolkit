# w_sales_ext_manage

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Ventes ext - Gestion

## Variables d'instance

| Variable | Type |
|----------|------|
| il_wslwebidhead | long |
| is_wshcurr | string |
| il_shlastline | long |
| is_DiscDate | string |
| is_ErrMess | string |
| iboo_Problem | boolean |
| il_wshcode | long |
| iboo_ClotHead | boolean |
| is_shcust | string |
| is_origin | string |
| is_turntruck | string |
| ii_shipto | integer |
| idt_dateship | datetime |
| ib_create | boolean |
| idwc_altmeas | datawindowchild |
| is_adid | string |
| is_curr | string |
| il_row | long |
| is_autoprint | string |
| ii_index | int |
| il_webcomid | long |
| is_sep1 | string |
| is_message | string |
| ls_print | string |
| is_separator | string |
| is_TURNSAL | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| get_idt_dateship() | public | Fonction get_idt_dateship |
| allocate(long al_sel_order, long al_truck) | public | Calcule/retourne allocate |
| wf_truckitems(long al_salcode, datetime ad_allocdate, long al_truck, long al_turn) | public | Verifie wf_truckitems |
| wf_altmeas_dd_init(long al_row) | public | Initialisation |
| wf_createheadorder(integer al_row, long al_truck) | public | Creation |
| wf_createlineorder() | public | Creation |
| wf_clotureorder(long al_wslwebidhead) | public | Verifie wf_clotureorder |
| wf_checkmanualfile(long al_row) | public | Validation |
| wf_deletecmd() | public | Suppression |
| wf_import(ref string ls_genmess, string ls_path) | public | Importation |
| wf_adaptsalauth() | public | Traitement wf_adaptsalauth |
| wf_import_exki(string ls_genmess, string ls_path) | public | Importation |
| wf_allocate(long al_sale) | public | Traitement wf_allocate |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
