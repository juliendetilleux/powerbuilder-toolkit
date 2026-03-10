# w_crm_mdi_frame

- **Type**: Window
- **Ancetre**: w_mdi
- **Module**: _sales_crm
- **Description**: Mdi frame (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_CRM_CurrAdress | string |
| is_CRM_CurrAdName | string |
| is_CRM_Customer | string |
| is_CRM_Supplier | string |
| il_CRM_CurrContact | long |
| is_CRM_accesslist_sales | string |
| is_comment_merge | string |
| is_CRM_agenda_user | string |
| easymail | boolean |
| rtf2html | boolean |
| iboo_break | boolean |
| is_adcode | string |
| is_comment | string |
| is_cust | string |
| is_item | string |
| il_fileref | long |
| il_fileline | long |
| il_invoice | long |
| idec_val | decimal |
| im_MenuTag | m_Xtra_Action |
| is_HiddenERPMenu | string |
| ib_HiddenMenuLoaded | boolean |
| iuo_qry | uo_qry |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| DllRegisterServer() | public | Calcule/retourne DllRegisterServer |
| set_curr_company(string new_ad) | public | Traitement set_curr_company |
| set_curr_contact(long new_ct) | public | Traitement set_curr_contact |
| wf_merge1() | public | Traitement wf_merge1 |
| wf_refresh_center(string windowname) | public | Rafraichit l'affichage |
| wf_getcomment() | public | Retourne comment |
| wf_getcust() | public | Retourne cust |
| wf_getitem() | public | Retourne item |
| wf_getfileline() | public | Retourne fileline |
| wf_getfileref() | public | Retourne fileref |
| wf_getinvoice() | public | Retourne invoice |
| wf_getval() | public | Retourne val |
| wf_setval(decimal adec_val) | public | Definit val |
| wf_setinvoice(long al_invoice) | public | Definit invoice |
| wf_setfileline(long al_fileline) | public | Definit fileline |
| wf_setfileref(long al_fileref) | public | Definit fileref |
| wf_setitem(string as_item) | public | Definit item |
| wf_setcust(string as_cust) | public | Definit cust |
| wf_setcomment(string as_comment) | public | Definit comment |
| wf_check_menu_access(menu a_object, integer ai_type) | public | Validation |
| wf_adapterpmenu() | public | Traitement wf_adapterpmenu |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| closequery | Verification avant fermeture |
| resize | Redimensionnement de la fenetre |
