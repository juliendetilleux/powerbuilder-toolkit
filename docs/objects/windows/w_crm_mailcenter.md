# w_crm_mailcenter

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _sales_crm
- **Description**: Mailcenter (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_HTMLpathName | string |
| is_HTMLfileName | string |
| idwc | datawindowchild |
| PBObject_SMTP_prep | OLEObject |
| PBObject_SMTP_send | OLEObject |
| PBObject_mailStore_send | OLEObject |
| PBObject_mailStore | OLEObject |
| PBObject_message | OLEObject |
| PBObject_message_send | OLEObject |
| PBObject_pop3 | OLEObject |
| SMTP_available | boolean |
| il_mailstore_row | long |
| is_smtp | string |
| status | integer |
| is_storepath | string |
| iboo_impossible2connect | boolean |
| ii_Index | integer |
| User_Signature | string |
| tab_adcode | struct_mail |
| tab_adcode_empty | struct_mail |
| Dragbegin | boolean |
| ExitClose | boolean |
| is_mailstore_path | string |
| ii_posysep | integer |
| email_format | string |
| ii_MailBoxType | integer |
| is_adMailStore | string |
| is_folder | string |
| is_selected_adress | string |
| is_clickedfilename | string |
| ii_SMTPTimeOut | integer |
| MailLoadIP | boolean |
| ib_StopLoadInbox | boolean |
| il_mail_first | long |
| ib_mail_multiselect | boolean |
| il_folderbig | long |
| il_foldersmall | long |
| is_filename | string |
| RowChangedAllowed | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_displayerror(string functioneasymail, integer stat) | public | Affichage |
| wf_deletemail(integer mailboxtype) | public | Suppression |
| wf_createlink(string ls_mailstore, string ls_folder, string ls_adcode) | public | Creation |
| wf_linkmail(string ls_filename, string ls_mailstore, string ls_folder) | public | Traitement wf_linkmail |
| wf_show_userdata(integer mailboxtype) | public | Affichage |
| wf_checkifmerge(string filename) | public | Validation |
| wf_newmail() | public | Creation |
| wf_answermail(integer mailboxtype) | public | Traitement wf_answermail |
| wf_reindex_mailbox() | public | Traitement wf_reindex_mailbox |
| wf_exportmail(integer mailboxtype) | public | Exportation |
| wf_send_mail() | public | Envoi |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_getmail() | public | Retourne mail |
| wf_getuserdatainfo(string userstring, ref string ls_to, ref long ll_pmixId) | public | Retourne userdatainfo |
| wf_search_pmixid(string userstring) | public | Recherche |
| wf_return_mailstore_send_row(long row) | public | Envoi |
| wf_move_mailstore2eml(string as_newadcode, string as_oldmailstore, string as_folder) | public | Deplacement |
| wf_move_eml2eml(long drcode, string newadcode, string oldfilepath) | public | Deplacement |
| wf_doc_refresh() | public | Rafraichit l'affichage |
| wf_return_mailstore_row(integer dw_row) | public | Calcule/retourne wf_return_mailstore_row |
| wf_deleteallmail_outbox() | public | Suppression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| closequery | Verification avant fermeture |
| dragdrop | Depot de glisser-deposer |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| ue_docclicked | Evenement personnalise ue_docclicked |
| ue_mousemove | Evenement personnalise ue_mousemove |
| ue_keypressed | Evenement personnalise ue_keypressed |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| mousemove | Deplacement de la souris |
| mouseup | Clic souris relache |
