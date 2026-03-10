# w_crm_mailsend

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _sales_crm
- **Description**: Mailsend (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| PBObject_SMTP_send | OLEObject |
| PBObject_mailStore_send | OLEObject |
| PBObject_mailStore | OLEObject |
| PBObject_message | OLEObject |
| is_OutboxStore | string |
| is_adMailStore | string |
| is_sentMailStore | string |
| is_mailstore_path | string |
| ib_CanGoOn | Boolean |
| is_smtp | string |
| ii_SMTPTimeOut | integer |
| Current_user | string |
| Mode | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_sendmail() | public | Envoi |
| wf_return_mailstore_send_row(long ll_pmixid) | public | Envoi |
| wf_createlink(string ls_mailstore, string ls_folder, string ls_adcode) | public | Creation |
| wf_store_sent_mail(string ls_filename, string ls_mailstore, string ls_folder, string ls_adcode, struct_crm_doc lstr_data) | public | Traitement wf_store_sent_mail |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
