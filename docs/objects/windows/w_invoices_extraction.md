# w_invoices_extraction

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _projects
- **Description**: Factures extraction (Projets)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_action | string |
| il_salecode | long |
| idec_ratio | decimal |
| ib_direct | boolean |
| is_adcode | string |
| cptperiod | string |
| iSel_adresse_id | string |
| iSel_adresse_id_invoicable | string |
| iSel_currency_id | string |
| is_CompCustPay | string |
| is_ADINVTO | string |
| is_mcdo_cust | string |
| is_mcdo | string |
| is_mcdo_invoicable | string |
| is_MULTICO | string |
| iSel_adresse_id2 | string |
| iSel_shipdays2 | integer |
| iSel_salord2 | long |
| iSel_ordr_Status2 | string |
| iSel_ordr_Curr2 | string |
| iSel_sallstlin2 | int |
| iSel_custref2 | string |
| iSel_datreq2 | datetime |
| il_oldrow | long |
| iSel_lastsalord | long |
| iSel_custpay | string |
| iSel_mcdo | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh() | public | Rafraichit l'affichage |
| wf_generate_new_invoiceline() | public | Creation |
| wf_del_salline() | public | Traitement wf_del_salline |
| wf_createservice() | public | Creation |
| wf_filter() | public | Applique un filtre |
| wf_refreshinvoicehead(long al_invoicehead) | public | Rafraichit l'affichage |
| wf_refreshcust() | public | Rafraichit l'affichage |
| wf_check_dateperiod() | public | Validation |
| wf_createinvoice() | public | Creation |
| wf_custpayctrl(long al_cx) | public | Calcule/retourne wf_custpayctrl |
| wf_refreshinvoicable() | public | Rafraichit l'affichage |
| wf_createinvoicable() | public | Creation |
| wf_color() | public | Traitement wf_color |
| wf_nofactinvoicable() | public | Traitement wf_nofactinvoicable |
| wf_modifyact() | public | Traitement wf_modifyact |
| wf_no_invoice() | public | Traitement wf_no_invoice |
| wf_notinv_stock() | public | Traitement wf_notinv_stock |
| wf_getdata() | public | Retourne data |
| wf_verifdata() | public | Calcule/retourne wf_verifdata |
| wf_createproforma() | public | Creation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| ue_selectionchanged | Evenement personnalise ue_selectionchanged |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
