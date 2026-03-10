# w_purchase_sales

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Achats ventes

## Variables d'instance

| Variable | Type |
|----------|------|
| ib_supsel | boolean |
| ib_consel | boolean |
| ib_having_supp | boolean |
| ib_flash | boolean |
| idwc_purchaser | datawindowchild |
| idt_datsup | datetime |
| idec_qtyreq | decimal |
| idec_itstdpur | decimal |
| idec_permstdcost | decimal |
| idec_suppumconv | decimal |
| idec_purqty | decimal |
| idec_suppcurrconv | decimal |
| ii_timer | integer |
| iti_shipseq | integer |
| ii_shipindex | integer |
| ii_nbtimer | integer |
| il_salorder | long |
| il_salpurch_linesel | long |
| il_supplier_linesel | long |
| il_contract_linesel | long |
| il_fileref | long |
| il_fileline | long |
| il_linkcode | long |
| il_contordid | long |
| il_contractid | long |
| il_purhead | long |
| is_filter | string |
| is_supplier | string |
| is_purchaser | string |
| its_shipdesc | string |
| is_itum | string |
| is_itcode | string |
| is_itname | string |
| is_adcode | string |
| is_adname | string |
| is_lkadref | string |
| is_suppcurr | string |
| is_suppum | string |
| is_item | string |
| is_SuppPay | String |
| is_MULTICO | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_fill_dw_purch(long al_row, uo_datawindow adw_from) | public | Retourne wf_fill_dw_purch |
| wf_retrieve_last_purch() | public | Recupere les donnees |
| wf_base_insert() | public | Ajout |
| wf_quotes_cost() | public | Fonction wf_quotes_cost |
| wf_save() | public | Sauvegarde les donnees |
| wf_contract_valid() | public | Verifie wf_contract_valid |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| timer | Evenement timer |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
