# w_purinvoices_qry

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Purinvoices qry (Achats)

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
| idt_Start | DateTime |
| il_sel_invlline | long |
| is_splitmethod | string |
| is_HdStatus | String |
| iSel_ordr_Curr | string |
| iSel_invlinetyp | string |
| is_ITEMANX | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| wf_ediduplic_open() | public | Ouverture |
| wf_refreshline() | public | Rafraichit l'affichage |
| wf_modify_pdf_file() | public | Traitement wf_modify_pdf_file |
| wf_reset_pdf_file() | public | Reinitialisation |
| wf_show_pdf_file() | public | Affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
