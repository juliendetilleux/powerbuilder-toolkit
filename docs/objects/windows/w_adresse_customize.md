# w_adresse_customize

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Adresses customize (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| Itemadcus | long |
| Sel_quotecus | long |
| adsupcurr | string |
| il_Sel_action_id | Long |
| is_useracttype | String |
| idwc_contact | DataWindowChild |
| is_testtri | String |
| is_comment | String |
| is_adcode | string |
| ib_test | boolean |
| ii_axline | integer |
| il_ax_row | long |
| Action | String |
| Modified | Boolean |
| sel_doc_mod | string |
| ii_Ret | Integer |
| is_turntruck | String |
| ib_turnmodified | Boolean |
| ii_Contact_Id | integer |
| ib_adshipcmntmodified | boolean |
| ls_ADPHYSIC | string |
| ids_cust_spec | nv_datastore |
| is_colname | string |
| is_coltype | string |
| is_CUSTCRDT3 | string |
| COLOR_Obligatoire | Long (constant) |
| COLOR_Invisible | Long (constant) |
| COLOR_Inaccessible | Long (constant) |
| COLOR_Normal | Long (constant) |
| COLOR_Intouchable | Long (constant) |
| COLOR_Transparent | Long (constant) |
| iSel_quote_id | decimal |
| Sel_quotesup | decimal |
| iSel_shipto_id | Integer |
| iSel_contact_id | Integer |
| isel_ratedat | datetime |
| iSel_itemad_id | long |
| iadcurr | string |
| iadum | string |
| ilinkitad_Selected_lktyp | string |
| il_sel_disc | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| adresseinputok() | public | Verifie adresseinputok |
| lookcomments(string cmnttype, string adresse) | public | Traitement lookcomments |
| acceptall() | public | Traitement acceptall |
| adapttab(string column, string colvalue) | public | Traitement adapttab |
| doc_refresh() | public | Rafraichit l'affichage |
| wf_scroll(long f_row) | public | Traitement wf_scroll |
| wf_disc_delete() | public | Suppression |
| wf_refresh(string dwtorefresh) | public | Rafraichit l'affichage |
| wf_tri(string as_nomcol) | public | Traitement wf_tri |
| wf_brder0(string as_nomcol) | public | Traitement wf_brder0 |
| wf_actdoc_refresh() | public | Rafraichit l'affichage |
| extracosts_deleteline() | public | Suppression |
| extracosts_refresh() | public | Rafraichit l'affichage |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_color_infos() | public | Traitement wf_color_infos |
| paint() | public | Calcule/retourne paint |
| popup(dwobject dwo) | public | Calcule/retourne popup |
| setbkcolor(ref uo_datawindow dw_target, string as_colname, string as_color) | public | Retourne setbkcolor |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| losefocus | Evenement losefocus |
| constructor | Constructeur |
