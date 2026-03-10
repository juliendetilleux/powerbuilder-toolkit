# w_crm_mailshow

- **Type**: Window
- **Ancetre**: w_popup
- **Module**: _sales_crm
- **Description**: Mailshow (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_HTMLpathName | string |
| is_HTMLfileName | string |
| PB_message | OLEObject |
| status | integer |
| file2delete | string |
| is_tempdir | string |
| is_filename | string |
| ib_new | Boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_displayerror(string functioneasymail, integer stat) | public | Affichage |
| wsf_cvrt2date(string maildate) | public | Fonction wsf_cvrt2date |
| wf_exportmail(integer mailboxtype) | public | Exportation |
| wf_return_mailstore_row(integer row) | public | Calcule/retourne wf_return_mailstore_row |
| wf_send_mail(integer mode) | public | Envoi |
| wf_show_userdata(integer mailboxtype) | public | Affichage |
| wf_answermail(integer mailboxtype) | public | Traitement wf_answermail |
| wf_printmail(integer mailboxtype) | public | Impression |
| wf_get_text(string as_balise, string as_text, string as_end) | public | Retourne text |
| wf_get_picture(string as_html, string as_text) | public | Retourne picture |
| wf_get_attachment(string as_text) | public | Retourne attachment |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
