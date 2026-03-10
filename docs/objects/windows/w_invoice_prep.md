# w_invoice_prep

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Factures prep (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| cptper | string |
| ls_testtri | string |
| isel_adresse_id | string |
| isel_currency_id | string |
| screenfilter | string |
| is_filter | string |
| is_choixfilter | string |
| filterstring | string |
| is_tvahier | string |
| is_LineType | String |
| id_CurConv | Double |
| is_CompCustPay | String |
| is_Dlvt | String |
| is_DlvtPlace | string |
| iboo_LineExist | Boolean |
| iboo_Problem | Boolean |
| is_impcpts1 | String |
| is_custcpt | string |
| il_lastinvoicehead | long |
| ii_choice1selected | integer |
| isTab_ShipLnFilter | String |
| ii_adinvtyp | Integer |
| is_ADINVTO | string |
| ii_INVDYMAX | int |
| is_mcdo | string |
| is_MULTICO | string |
| il_currrow | long |
| il_oldrow | long |
| is_USESPPREP | string |
| is_DATEINV | string |
| is_INVONLYSLAUX | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| refresh() | public | Rafraichit l'affichage |
| wf_custpayctrl(long al_cx, string method) | public | Calcule/retourne wf_custpayctrl |
| wf_createinvoice(string as_method) | public | Creation |
| wf_fill_filterdd(integer ai_choice1) | public | Applique un filtre |
| wf_check_dateperiod() | public | Validation |
| wf_shiplnfilter() | public | Applique un filtre |
| filteritem() | public | Applique un filtre |
| wf_not_regroup(string as_method, string as_payterm, string as_cust, string as_cmnt, string as_mcdo) | public | Calcule/retourne wf_not_regroup |
| wf_regroup_cmde(string as_method, string as_payterm, string as_cust, string as_cmnt, string as_mcdo) | public | Calcule/retourne wf_regroup_cmde |
| wf_regroup_deliver(string as_method, string as_payterm, string as_cust, string as_cmnt, string as_mcdo) | public | Calcule/retourne wf_regroup_deliver |
| wf_regroup_ship(string as_method, string as_payterm, string as_cust, string as_cmnt, string as_mcdo) | public | Calcule/retourne wf_regroup_ship |
| wf_date_invoice() | public | Traitement wf_date_invoice |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| activate | Activation de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
