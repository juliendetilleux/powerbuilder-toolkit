# w_invoices

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Factures (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| isel_invhead | long |
| ls_testtri | string |
| screenfilter | string |
| is_filter | string |
| is_choixfilter | string |
| filterstring | string |
| isel_invline | long |
| iSel_invlinetyp | string |
| is_adcode | string |
| is_PreInv | String |
| is_tvatyp | string |
| is_impcpts1 | string |
| il_illinesel | long |
| is_sortable | string |
| ii_invprinttyp | integer |
| is_invtyp | string |
| is_AutoItPack | String |
| is_McCoCode | String |
| is_FACTELECT | string |
| is_adresses_adfactelect | string |
| iSel_ordr_Curr | string |
| isel_invtyp | string |
| is_OrdTri | any |
| ib_cherche | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| invoice_histper() | public | Traitement invoice_histper |
| filteritem() | public | Applique un filtre |
| refresh() | public | Rafraichit l'affichage |
| refreshlin() | public | Rafraichit l'affichage |
| linedelete() | public | Suppression |
| sendtowait() | public | Envoi |
| wf_wait(string as_typ) | public | Traitement wf_wait |
| wf_linemodify() | public | Traitement wf_linemodify |
| wf_reorg_linesort(long al_oldsort, long al_newsort) | public | Applique un tri |
| invoiceprint_auto(long sel_invoice, long invoicenum, boolean automatic, string sel_dataobject, boolean withprinter, string printername) | public | Impression |
| invoiceprint(long sel_invoice, long invoicenum, boolean autoprint) | public | Impression |
| load_multitri() | public | Charge les donnees |
| wf_multiline_delete() | public | Suppression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| activate | Activation de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
| losefocus | Evenement losefocus |
