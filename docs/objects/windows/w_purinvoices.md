# w_purinvoices

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Purinvoices (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| cptperiod | string |
| isel_invhead | long |
| ls_testtri | string |
| screenfilter | string |
| is_filter | string |
| is_choixfilter | string |
| ib_cherche | boolean |
| filterstring | string |
| isel_invline | long |
| ls_testtri2 | string |
| is_invlinetyp | string |
| is_SelAdCode | String |
| is_SplitMethod | String |
| is_InvTyp | String |
| iSel_invlinetyp | string |
| iSel_invtyp | string |
| iSel_ordr_Curr | string |
| is_ITEMANX | string |
| ibol_modified | boolean |
| il_rows | long |
| is_mcdo | string |
| is_McDo_print | string |
| is_CptId | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| invhead_refresh() | public | Rafraichit l'affichage |
| update_total(long sel_invoice) | public | Mise a jour |
| invoice_histper() | public | Traitement invoice_histper |
| invline_delete() | public | Suppression |
| refresh() | public | Rafraichit l'affichage |
| filteritem() | public | Applique un filtre |
| refreshlin() | public | Rafraichit l'affichage |
| wf_reset_pdf_file() | public | Reinitialisation |
| wf_show_pdf_file() | public | Affichage |
| wf_modify_pdf_file() | public | Traitement wf_modify_pdf_file |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
