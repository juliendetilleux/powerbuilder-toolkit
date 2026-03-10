# uo_tab_crm_company_detail

- **Type**: User Object (Visuel)
- **Ancetre**: userobject
- **Module**: _pad
- **Description**: Objet utilisateur - gestion CRM

## Variables d'instance

| Variable | Type |
|----------|------|
| ib_sheet_enabled | Boolean |
| iw_sheet_parent | w_window |
| ib_save_size | Boolean |
| inv_ds_size | nv_datastore |
| inv_ds_resize | nv_datastore |
| inv_resize | n_cst_resize |
| inv_dw_resize | n_cst_dwsrv_resize |
| ib_is_sheet | Boolean |
| ib_border | Boolean |
| inv_resizer | nv_auto_resizer |
| Is_name_Frame | string |
| ib_resize | Boolean |
| ib_getmail | Boolean |
| ib_getfile | Boolean |
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
| isTab_OpenOrdTri | Any[] |
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
| is_activ | string[] |
| is_DviType | String |
| il_ProjId | Long |
| is_HeadStatus | string |
| is_fisto_filter | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_contact_input_ok() : boolean | Public | Fonction privee de fenetre |
| wf_displayerror(string functioneasymail, integer stat) : string | Public | Fonction privee de fenetre |
| wf_getcountryparam(string country) : string | Public | Fonction privee de fenetre |
| wf_getdrtyp() : string | Public | Fonction privee de fenetre |
| wf_return_mailstore_row(long row) : long | Public | Fonction privee de fenetre |
| wsf_cvrt2date(string maildate) : datetime | Public | Fonction publique |
| wf_retrieve_multico2() : boolean | Public | Fonction privee de fenetre |
| adapttab(string column, string colvalue) : void (subroutine) | Public | Fonction publique |
| tri_action() : void (subroutine) | Public | Fonction publique |
| tri_histo() : void (subroutine) | Public | Fonction publique |
| wf_act_delete(string act_type) : void (subroutine) | Public | Fonction privee de fenetre |
| wf_act_prec() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_act_refresh() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_act_suiv() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_aderplink(integer ai_adtyp) : void (subroutine) | Public | Fonction privee de fenetre |
| wf_crm_ctuf_visible() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_crm_uf_visible() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_ctclipboard() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_delete_contact() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_deletemail() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_doc_refresh() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_email_refresh() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_insert_contact() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_loadmail(string ls_selectedadress) : void (subroutine) | Public | Fonction privee de fenetre |
| wf_modify_doc() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_refresh_contacts_one() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_refresh_index() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_refreshdevis() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_selecttab(integer numtab) : void (subroutine) | Public | Fonction privee de fenetre |
| wf_open(string as_adcode) : void (subroutine) | Public | Fonction privee de fenetre |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_keypressed | Evenement personnalise |
| ue_itemchanged | Evenement personnalise |
