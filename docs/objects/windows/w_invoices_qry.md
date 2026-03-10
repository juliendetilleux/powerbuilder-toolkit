# w_invoices_qry

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Factures qry (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| ls_testtri | string |
| isel_invhead | long |
| screenfilter | string |
| is_filter | string |
| is_choixfilter | string |
| filterstring | string |
| is_adcode | string |
| is_ustyp | string |
| il_oldrow | long |
| idt_Start | DateTime |
| il_sel_invlline | long |
| is_OrdTri | any |
| is_pdffolder | string |
| ii_pdfnumber | integer |
| invo_mail | nvo_mail |
| ii_cpt | integer |
| is_invonote | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| wf_ediduplic_open() | public | Ouverture |
| load_multitri() | public | Charge les donnees |
| wf_send_inv2salesm(nv_datastore ads_sel) | public | Envoi |
| wf_mailinv2salesm(nv_datastore ads_sel) | public | Traitement wf_mailinv2salesm |
| wf_modifstatus(string as_status) | public | Traitement wf_modifstatus |
| wf_printpdf(long al_invid, string as_com, string as_cust, long al_realid) | public | Impression |
| waf_refresh() | public | Rafraichit l'affichage |
| wf_print() | public | Impression |
| wf_create_note() | public | Creation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| activate | Activation de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
