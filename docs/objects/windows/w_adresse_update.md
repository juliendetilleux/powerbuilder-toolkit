# w_adresse_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Adresses - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| dwc | Datawindowchild |
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
| is_multi_Contact | string |
| idwc_attention | datawindowchild |
| is_taxt | string |
| is_adctintexp | string |
| is_CONTPREPA | string |
| is_CUSTCRDT3 | string |
| is_FACTELECT | string |
| iSel_quote_id | decimal |
| Sel_quotesup | decimal |
| iSel_shipto_id | Integer |
| iSel_contact_id | Integer |
| isel_ratedat | datetime |
| iw_parent | w_window |
| isel_salord | long |
| isel_purord | long |
| isel_purtyp | string |
| is_sel_ad | string |
| is_Sel_Ordr_Curr | string |
| iSel_itemad_id | long |
| iadcurr | string |
| iadum | string |
| ilinkitad_Selected_lktyp | string |
| il_sel_disc | long |
| is_ADINVTO | string |
| is_MULTICO | string |
| ii_LKOVRTEMPL | int |
| is_WEBSERTVA | string |
| il_Val_soap | Long |
| isoapconnection | soapconnection |
| icheckvatport | checkvatport |
| is_usmcdo2 | string |
| is_ustyp | string |
| is_ADINVSUPP | string |
| is_ADAUTINACTIV | String |
| is_CHECKLOTDLC | string |
| is_activ | string |
| is_DviType | String |
| il_ProjId | Long |
| is_HeadStatus | string |
| is_type_WMS | string |
| is_return | string |
| ib_error | boolean |
| ib_error2 | boolean |
| il_currow | integer |

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
| wf_refresh_tax() | public | Rafraichit l'affichage |
| wf_bebank_ctrl(string as_colname, string as_bank) | public | Calcule/retourne wf_bebank_ctrl |
| wf_deleteall() | public | Suppression |
| wf_createdatastore(string as_sql, ref string as_error) | public | Creation |
| wf_modify_assortline(string as_adcode, long al_oldascode, long al_ascode, ref string as_error) | public | Applique un tri |
| wf_bob_visible(string as_mccode) | public | Traitement wf_bob_visible |
| wf_retrieve_multico2() | public | Recupere les donnees |
| wf_initialise_soap() | public | Initialisation |
| wf_check_vat(boolean ab_withmessage) | public | Validation |
| wf_creation_fichier_adresse_insert() | public | Ajout |
| wf_creation_fichier_adresse() | public | Traitement wf_creation_fichier_adresse |
| wf_add_2_linkadch() | public | Ajout |
| wf_refreshdevis() | public | Rafraichit l'affichage |
| wf_get_deviid() | public | Retourne deviid |
| wf_auditgdrp(string type_trans) | public | Traitement wf_auditgdrp |
| wf_checkgrpd(integer ll_row, string ls_col, string ls_data) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| losefocus | Evenement losefocus |
| doubleclicked | Double-clic sur la fenetre |
| constructor | Constructeur |
