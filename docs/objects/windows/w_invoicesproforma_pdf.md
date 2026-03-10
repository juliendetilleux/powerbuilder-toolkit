# w_invoicesproforma_pdf

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _edilink
- **Description**: Invoicesproforma pdf (EDI)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_Filter | String |
| is_const | String |
| is_ScreenFilter | String |
| is_ErrMess | string |
| is_INVOICEPDF_dir | string |
| is_GenMess | string |
| is_curr_usermail | string |
| is_PRTINVPDF | string |
| is_lang | string |
| invo_mail | nvo_mail |
| is_cond_gen_pdf | string |
| screenfilter | string |
| iSel_invhead | long |
| is_McCoCode | String |
| is_choixfilter | string |
| ib_cherche | boolean |
| filterstring | string |
| is_OrdTri | any |
| fullfilter | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_filter() | public | Applique un filtre |
| wf_expfactelect(uo_datawindow adw_inv_factelect) | public | Verifie wf_expfactelect |
| wf_create_pfd(long al_ihcode) | public | Creation |
| wf_searchtext_fromprint(string as_ihcust) | public | Impression |
| wf_replaceall(string mystring, string as_new, character ac_old) | public | Remplacement de chaine |
| wf_addattachment(long al_invoice) | public | Ajout |
| wf_sended(uo_datawindow adw_inv_factelect) | public | Envoi |
| filteritem() | public | Applique un filtre |
| load_multitri() | public | Charge les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
