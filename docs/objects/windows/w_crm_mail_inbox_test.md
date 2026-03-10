# w_crm_mail_inbox_test

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _sales_crm
- **Description**: Courrier/email inbox test (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| myoleobject | OLEObject |
| mynamespace | OLEObject |
| fdPMIX | OLEObject |
| itmEmail | OLEObject |
| itminspector | OLEObject |
| mSes | nv_mailsession |
| FldHierarchy | string |
| FldDefault | string |
| olFolderDeletedItems | Integer |
| olFolderOutbox | Integer |
| olFolderSentMail | Integer |
| olFolderInbox | Integer |
| olFolderCalendar | Integer |
| olFolderContacts | Integer |
| olFolderJournal | Integer |
| olFolderNotes | Integer |
| olFolderTasks | Integer |
| olFolderDrafts | Integer |
| is_emailsoft | string |
| OutlookXprs | string (constant) |
| MSOutlook | string (constant) |
| ii_AttachmentCount | integer |
| ii_EditorType | integer |
| il_selrow | long |
| is_senderaddress | string |
| is_body | string |
| is_htmlbody | string |
| is_EntryId | String |
| is_TempFilePath | String |
| is_MailStorePath | String |
| idwc_adtype | DataWindowChild |
| ib_dwinit | Boolean |
| ib_mailtaken | Boolean |
| is_OutlookVersion | String |
| is_drcreauser | String |
| il_drcontactid | Long |
| il_drfileid | Long |
| il_drfilelineid | Long |
| ib_cancel | boolean |
| Filter | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| get_folder_childs(any parent_folder, integer level, long parenthandle) | public | Calcule/retourne get_folder_childs |
| is_defaultfolder(string foldername) | public | Verifie is_defaultfolder |
| filterfolders() | public | Applique un filtre |
| wf_open_msoutlook() | public | Ouverture |
| get_mails_msoutlook(any folder) | public | Calcule/retourne get_mails_msoutlook |
| wf_mapi_error_show(mailreturncode mailerrcode) | public | Affichage |
| wf_show_mail_msoutlook(long row) | public | Affichage |
| wf_show_mail(long row) | public | Affichage |
| wf_delete_mail() | public | Suppression |
| wf_save_eml_msoutlook(long al_row, string as_adcode, integer ai_mode) | public | Sauvegarde les donnees |
| wf_filter_adresses() | public | Applique un filtre |
| wf_outlook_temp_clean() | public | Traitement wf_outlook_temp_clean |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| ue_mousemove | Evenement personnalise ue_mousemove |
| ue_selectionchanged | Evenement personnalise ue_selectionchanged |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
