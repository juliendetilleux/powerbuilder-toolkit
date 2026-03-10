# w_email_old

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _prints_std
- **Description**: Email old (Impressions standard)

## Variables d'instance

| Variable | Type |
|----------|------|
| PrinterName | string |
| NoPrompt | integer (constant) |
| UseFileName | integer (constant) |
| Concatenate | integer (constant) |
| DisableCompression | integer (constant) |
| EmbedFonts | integer (constant) |
| BroadcastMessages | integer (constant) |
| InfoMail | s_email |
| mails | string |
| selmails | boolean |
| il_selmails | long |
| li_nbsel | long |
| tab_code | string |
| tab_ctline | string |
| tab_adcode | struct_mail |
| tab_adcode_empty | struct_mail |
| tab_adcode_temp | Struct_mail |
| currentselection | integer |
| ib_print_Done | Boolean |
| print_return | s_print_return |
| PBObject_SMTP | OLEObject |
| invo_mail | nvo_mail |
| is_lang | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_save_rtf2html() | public | Sauvegarde les donnees |
| wf_searchtext_fromprint(s_email email) | public | Impression |
| wf_add_doc() | public | Ajout |
| wf_spleecheck() | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
