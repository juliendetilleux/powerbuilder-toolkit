# w_bcd_sales_directship

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Ventes directship (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_status | int |
| is_action | string |
| is_ShipCost | string |
| is_cust | string |
| is_ShipToName | string |
| ii_done | integer |
| ii_ShipToNb | integer |
| ii_ShipToDays | integer |
| ii_shipto | integer |
| ii_shipdays | integer |
| il_salhead | long |
| il_shipnotice | long |
| last_shipordno | long |
| idw_cust | Datawindowchild |
| ib_shipped | boolean |
| idt_now | datetime |
| is_custcurr | string |
| idec_CurrConv | decimal |
| ratecode | long |
| sel_rhcode | long |
| ii_Ret | int |
| is_remanenceRefDateType | string |
| il_fileref | long |
| il_fileline | long |
| action | string |
| il_action | long |
| is_BCFEFOEXP | string |
| is_adsalesauth | string |
| il_i | long |
| ib_rightclic | boolean |
| is_rightclic_loc | string |
| Last_Dat | DateTime |
| iw_parent | w_window |
| is_ITUMTRF | string |
| ii_Ret2 | int |
| is_EXPDCUML | string |
| id_qty | decimal |
| ii_rowidkit | int |
| istr_ean128 | struct_ean128 |
| istr_ean13 | struct_ean13 |
| istr_info_recept | struct_info_recept |
| is_loorgcode | string |
| is_loc | string |
| idt_dlc | datetime |
| is_MULTICO | string |
| is_mcdo | string |
| il_salhead_rea | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_save() | public | Sauvegarde les donnees |
| wf_issaved() | public | Verifie si saved |
| wf_isshipped() | public | Verifie si shipped |
| wf_iscancellable() | public | Verifie si cancellable |
| wf_delete_salline(long al_code, long al_line) | public | Suppression |
| wf_lot_treatment(readonly string as_lot, readonly decimal adec_qty, string as_treatmenttype) | public | Verifie wf_lot_treatment |
| wf_create_sale(string as_cust) | public | Creation |
| wf_ship() | public | Calcule/retourne wf_ship |
| loadratenames(string custcurr) | public | Charge les donnees |
| wf_load_ddlb_shipto(string as_adid) | public | Charge les donnees |
| wf_alloc() | public | Verifie wf_alloc |
| wf_autoallocatelot(long ordrno, long ordrlin, string item, integer lastalloc, decimal qtyrequired, string as_lot, string as_loc, long al_malocseq) | public | Verifie wf_autoallocatelot |
| wf_exp(boolean ab_resetall) | public | Traitement wf_exp |
| wf_history_treat() | public | Traitement wf_history_treat |
| wf_get_ean_info(string as_data) | public | Retourne ean_info |
| wf_create_sale_reap(string as_cust) | public | Creation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
