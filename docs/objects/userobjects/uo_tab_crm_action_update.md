# uo_tab_crm_action_update

- **Type**: User Object (Visuel)
- **Ancetre**: userobject
- **Module**: _pad
- **Description**: Objet utilisateur - gestion CRM

## Variables d'instance

| Variable | Type |
|----------|------|
| is_etat | string |
| is_errmess | string |
| is_from | string |
| idwc_contact | DataWindowChild |
| il_codeactn | long |
| il_roworigin | long |
| il_followid | long |
| myStruct | struct_crm_action_update_parm |
| il_expenses_code | long |
| ib_workflow | boolean |
| ii_group | int |
| ib_mustapplygroup | boolean |
| ib_statmarket | boolean |
| il_invoicehead | long |
| iboo_SuccessPer | boolean |
| is_docfilename | string |
| il_docref | long |
| il_newdocref | long |
| ib_firstaction | boolean |
| ib_mustapplygroup_multi | boolean |
| ib_groupm_modifylink | boolean |
| ids_groupmulti | nv_datastore |
| uo_mail | nvo_mail |
| il_aacode | Long |
| ib_modified | boolean |
| is_CALLDESCA | string |
| iSel_contact_id | Integer |
| is_multi_Contact | string |
| ii_Contact_Id | integer |
| is_adcode | string |
| il_oldrow | long |
| is_OrdTri | string[] |
| il_dw_line | long[] |
| ii_dhcode | integer |
| ib_modify | boolean |
| screenfilter_sel | string[] |
| screenfilter_list | string[] |
| iw_parent | Window |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_getcomment() : string | Public | Fonction privee de fenetre |
| wf_getcust() : string | Public | Fonction privee de fenetre |
| wf_getfileline() : long | Public | Fonction privee de fenetre |
| wf_getfileref() : long | Public | Fonction privee de fenetre |
| wf_getinvoice() : long | Public | Fonction privee de fenetre |
| wf_getitem() : string | Public | Fonction privee de fenetre |
| wf_getval() : decimal | Public | Fonction privee de fenetre |
| wf_inputok() : integer | Public | Fonction privee de fenetre |
| wf_modify_groupmulti() : boolean | Public | Fonction privee de fenetre |
| wf_projheadupdate() : integer | Public | Fonction privee de fenetre |
| wf_save(string button) : integer | Public | Fonction privee de fenetre |
| wf_invoicing() : boolean | Public | Fonction privee de fenetre |
| getactionprec() : datetime | Public | Fonction publique |
| getactionsuiv() : datetime | Public | Fonction publique |
| filteritem(string as_target) : void (subroutine) | Public | Fonction publique |
| wf_contacts_retrieve(string as_adcode) : void (subroutine) | Public | Fonction privee de fenetre |
| wf_ctformation() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_doc_refresh() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_filter_sel() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_modify_doc() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_moveselect(uo_extendeddw source, uo_extendeddw target) : void (subroutine) | Public | Fonction privee de fenetre |
| wf_qtyvisible() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_refresh_groupmulti(boolean ab_retrieve) : void (subroutine) | Public | Fonction privee de fenetre |
| wf_retrieve_all_tabs() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_setcost() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_seteditable() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_setinvoice(long al_invoice) : void (subroutine) | Public | Fonction privee de fenetre |
| wf_adaptopen() : void (subroutine) | Public | Fonction privee de fenetre |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_getcal | Evenement personnalise |
| ue_mousemove | Evenement personnalise |
| ue_postitemchanged | Evenement personnalise |
