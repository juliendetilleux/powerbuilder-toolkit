# w_edi_transactions

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _edilink
- **Description**: EDI transactions

## Variables d'instance

| Variable | Type |
|----------|------|
| il_SelectedRow | Long |
| is_CustCode | String |
| idt_Date | DateTime |
| ii_ShipDays | Integer |
| iboo_Problem | Boolean |
| is_DiscDate | String |
| iboo_OneSel | Boolean |
| il_LastLine | Long |
| is_EdiType | String |
| is_path | string |
| is_ehenvrec | string |
| il_salorder | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_createsalhead() | public | Creation |
| wf_createsalline(long al_salcode, integer ai_lastline, integer ai_row) | public | Creation |
| wf_create_salorder() | public | Creation |
| wf_modify_salorder(long al_order) | public | Traitement wf_modify_salorder |
| wf_edipax_initwindow() | public | Initialisation |
| wf_edipax_initordrline() | public | Initialisation |
| wf_edipax_ok_treat() | public | Traitement wf_edipax_ok_treat |
| wf_editie_ok_treat() | public | Traitement wf_editie_ok_treat |
| wf_editie_creasalhd(long al_row) | public | Verifie wf_editie_creasalhd |
| wf_editie_creasalln() | public | Verifie wf_editie_creasalln |
| wf_delete_ediline() | public | Suppression |
| wf_delinactiv_ediline() | public | Traitement wf_delinactiv_ediline |
| wf_clotedihead(string as_envsend, string as_headref) | public | Verifie wf_clotedihead |
| wf_datacontrol() | public | Verifie wf_datacontrol |
| wf_control() | public | Traitement wf_control |
| wf_allheadsel() | public | Traitement wf_allheadsel |
| wf_salcreate() | public | Creation |
| wf_edifileimport(string as_datafilepath, string as_datafilename) | public | Importation |
| wf_create_edisalhead(string as_envsend, string as_headref, string as_envid, string as_custean, string as_docdate, string as_doctime, string as_reqdate, string as_reqtime, string as_curr, string as_headcmnt, string as_pickupdate, string as_pickuptime, string as_envrec) | public | Creation |
| wf_create_edisalline(string as_envsend, string as_headref, string as_linenum, string as_envid, string as_itemean, string as_cuitemean, string as_custdesc, string as_qty, string as_reqdate, string as_reqtime, string as_shiptoean, string as_linecmnt, string as_esuomord, string as_esenvrec) | public | Creation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
