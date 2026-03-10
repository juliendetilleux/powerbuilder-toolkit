# w_crm_company_detail

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _sales_crm
- **Description**: Societes - Detail (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_DDEHandle | long |
| Action | String |
| is_usmcdo2 | string |
| is_ustyp | string |
| is_MULTICO | string |
| idwc | dataWindowChild |
| idwc1 | dataWindowChild |
| idwc2 | dataWindowChild |
| ids | nv_datastore |
| is_adcode | string |
| ii_ctadcode | integer |
| idt_datesuiv | datetime |
| idt_dateprec | datetime |
| iole_word | OLEObject |
| iboo_OpenWithPmix | boolean |
| il_sel_action_id | Long |
| il_sel_histo_id | Long |
| isTab_OpenOrdTri | Any |
| is_usacttyp | string |
| is_usnamedd | string |
| is_filtre | string |
| il_reid | long |
| is_parm | string |
| il_row_insert_contact | long |
| il_row_delete_contact | long |
| is_act_type | string |
| is_drmod | string |
| is_date | string |
| is_contact | string |
| is_resp | string |
| il_sousprojet_action | long |
| il_projet_action | long |
| is_contact_action | string |
| il_sousprojet_histo | long |
| il_projet_histo | long |
| is_contact_histo | string |
| is_usnamedd2 | string |
| il_contact_id | long |
| ls_ADPHYSIC | string |
| is_mailstore_path | string |
| PBObject_mailStore | OLEObject |
| is_filter_action | string |
| ii_oldtype | integer |
| is_multi_Contact | string |
| ii_index | int |
| uo_mail | nvo_mail |
| is_activ | string |
| is_DviType | String |
| il_ProjId | Long |
| is_HeadStatus | string |
| is_fisto_filter | string |
| ib_error | boolean |
| ib_error2 | boolean |
| il_currow | integer |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_crm_uf_visible() | public | Traitement wf_crm_uf_visible |
| wf_act_prec() | public | Traitement wf_act_prec |
| wf_act_suiv() | public | Traitement wf_act_suiv |
| wf_act_refresh() | public | Rafraichit l'affichage |
| wf_contact_input_ok() | public | Verifie wf_contact_input_ok |
| wf_insert_contact() | public | Ajout |
| wf_delete_contact() | public | Suppression |
| wf_selecttab(integer numtab) | public | Selection |
| wf_act_delete(string act_type) | public | Suppression |
| wf_getcountryparam(string country) | public | Retourne countryparam |
| wsf_cvrt2date(string maildate) | public | Fonction wsf_cvrt2date |
| wf_displayerror(string functioneasymail, integer stat) | public | Affichage |
| wf_loadmail(string ls_selectedadress) | public | Charge les donnees |
| wf_email_refresh() | public | Rafraichit l'affichage |
| wf_getdrtyp() | public | Retourne drtyp |
| wf_doc_refresh() | public | Rafraichit l'affichage |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| tri_action() | public | Traitement tri_action |
| tri_histo() | public | Traitement tri_histo |
| wf_refresh_contacts_one() | public | Rafraichit l'affichage |
| wf_aderplink(integer ai_adtyp) | public | Traitement wf_aderplink |
| wf_deletemail() | public | Suppression |
| wf_return_mailstore_row(long row) | public | Calcule/retourne wf_return_mailstore_row |
| wf_crm_ctuf_visible() | public | Traitement wf_crm_ctuf_visible |
| wf_ctclipboard() | public | Traitement wf_ctclipboard |
| wf_refresh_index() | public | Rafraichit l'affichage |
| wf_refreshdevis() | public | Rafraichit l'affichage |
| wf_retrieve_multico2() | public | Recupere les donnees |
| adapttab(string column, string colvalue) | public | Traitement adapttab |
| wf_auditgdrp(string type_trans) | public | Traitement wf_auditgdrp |
| wf_checkgrpd(integer ll_row, string ls_col, string ls_data) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| ue_keypressed | Evenement personnalise ue_keypressed |
| constructor | Constructeur |
| losefocus | Evenement losefocus |
| ue_itemchanged | Evenement personnalise ue_itemchanged |
