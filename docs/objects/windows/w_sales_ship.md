# w_sales_ship

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Ventes expedition

## Variables d'instance

| Variable | Type |
|----------|------|
| isel_cust_id | string |
| isel_shipto_id | long |
| ls_testtri | string |
| screenfilter | string |
| is_filter | string |
| is_choixfilter | string |
| filterstring | string |
| ldec_LastCordC | Decimal |
| is_SelAdNeVal | String |
| ii_nbcopy | Integer |
| ShipDatPara | boolean |
| afteropen | boolean |
| last_shipordno | long |
| last_dat | datetime |
| ii_choice1selected | integer |
| is_adinvm | string |
| is_printer_shipnotice | string |
| is_printer_invoice | string |
| is_INVEXPCPT | string |
| screenfilter2 | string |
| is_error | string |
| is_mfgdeclar | string |
| il_of | long |
| ib_newof | boolean |
| ii_Ret | int |
| invo_of_launch | nvo_of_launch |
| is_finalitem | string |
| idec_coeff | decimal |
| is_cmcdo | string |
| il_salnum | long |
| is_MSGBXEXP | string |
| is_MSGBNEEX | string |
| ib_windows_active | boolean |
| ii_TruckRef | Integer |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| wf_fill_filterdd(integer ai_choice1) | public | Applique un filtre |
| wf_check_dateperiod() | public | Validation |
| filtercmd() | public | Applique un filtre |
| uof_init_var_inst() | public | Initialisation |
| uof_launchof(string as_item, decimal ad_qty, boolean lb_showmessage, ref long al_of) | public | Verifie uof_launchof |
| uof_treat_of(long al_com_num, integer ai_line_com, long al_of_num, integer ai_of_line, decimal adec_qty, string as_lot, string as_loc) | public | Calcule/retourne uof_treat_of |
| uof_make_complete_of(decimal adec_qty, long al_num_com, integer al_line_com) | public | Calcule/retourne uof_make_complete_of |
| uof_merge_com_lines(long al_com_num, integer ai_line_com, string as_fakelot, integer ai_matallocseq, string as_it_sel_loc, decimal adec_coeff) | public | Calcule/retourne uof_merge_com_lines |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| activate | Activation de la fenetre |
| timer | Evenement timer |
| deactivate | Desactivation de la fenetre |
| dragdrop | Depot de glisser-deposer |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
