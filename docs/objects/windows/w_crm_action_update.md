# w_crm_action_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_crm
- **Description**: Actions - Mise a jour (CRM)

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
| is_OrdTri | string |
| il_dw_line | long |
| ii_dhcode | integer |
| ib_modify | boolean |
| screenfilter_sel | string |
| screenfilter_list | string |
| ls_aagrouptyp | string |
| Il_km | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok() | public | Calcule/retourne wf_inputok |
| getactionprec() | public | Fonction getactionprec |
| getactionsuiv() | public | Fonction getactionsuiv |
| wf_refresh() | public | Rafraichit l'affichage |
| wf_retrieve_all_tabs() | public | Recupere les donnees |
| wf_seteditable() | public | Definit editable |
| wf_setcost() | public | Definit cost |
| wf_invoicing() | public | Verifie wf_invoicing |
| wf_getcust() | public | Retourne cust |
| wf_getitem() | public | Retourne item |
| wf_getval() | public | Retourne val |
| wf_getfileref() | public | Retourne fileref |
| wf_getfileline() | public | Retourne fileline |
| wf_getinvoice() | public | Retourne invoice |
| wf_getcomment() | public | Retourne comment |
| wf_setinvoice(long al_invoice) | public | Definit invoice |
| wf_projheadupdate() | public | Mise a jour |
| wf_save(string button) | public | Sauvegarde les donnees |
| wf_qtyvisible() | public | Traitement wf_qtyvisible |
| wf_refresh_groupmulti(boolean ab_retrieve) | public | Rafraichit l'affichage |
| wf_modify_groupmulti() | public | Verifie wf_modify_groupmulti |
| wf_adaptopen() | public | Ouverture |
| wf_contacts_retrieve(string as_adcode) | public | Recupere les donnees |
| wf_doc_refresh() | public | Rafraichit l'affichage |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_moveselect(uo_extendeddw source, uo_extendeddw target) | public | Selection |
| wf_filter_sel() | public | Applique un filtre |
| filteritem(string as_target) | public | Applique un filtre |
| wf_ctformation() | public | Formatage |
| wf_filter_activities(string as_mcdo) | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| ue_getcal | Evenement personnalise ue_getcal |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| clicked | Clic sur la fenetre |
| ue_mousemove | Evenement personnalise ue_mousemove |
| doubleclicked | Double-clic sur la fenetre |
| dragdrop | Depot de glisser-deposer |
| getfocus | Evenement getfocus |
| ue_postitemchanged | Evenement personnalise ue_postitemchanged |
