# w_email

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _prints_std
- **Description**: Email (Impressions standard)

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
| tab_adcode2 | struct_mail |
| tab_adcode_empty | struct_mail |
| tab_adcode_temp | Struct_mail |
| currentselection | integer |
| ib_print_Done | Boolean |
| print_return | s_print_return |
| PBObject_SMTP | OLEObject |
| invo_mail | nvo_mail |
| is_lang | string |
| ds_contacts | nv_datastore |
| ds_user | nv_datastore |
| ds_list_user | nv_datastore |
| il_contacts | Long |
| is_to | String |
| is_CTRLCTSDMAIL | String |
| is_adressid | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_save_rtf2html() | public | Sauvegarde les donnees |
| wf_searchtext_fromprint(s_email email) | public | Impression |
| wf_add_doc() | public | Ajout |
| wf_spleecheck() | public | Validation |
| wf_add_lv_item(string as_file, boolean ab_from_file) | public | Ajout |
| wf_get_sign(string as_uscode) | public | Retourne sign |
| wf_group_address(ref struct_mail tab[]) | public | Ajout |
| wf_store_email(long al_idmail, string as_adcode, string as_to, struct_crm_doc str_doc) | public | Calcule/retourne wf_store_email |
| wf_get_text(string as_balise, string as_text, string as_end) | public | Retourne text |
| wf_get_picture(string as_html, string as_text) | public | Retourne picture |
| wf_get_attachment(string as_text) | public | Retourne attachment |
| wf_get_sign_with_html(string as_sign) | public | Retourne sign_with_html |
| wf_format_html(string as_html, string as_text) | public | Formatage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| losefocus | Evenement losefocus |
| rbuttondown | Evenement rbuttondown |
