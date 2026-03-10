# w_crm_outlook

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_crm
- **Description**: Outlook (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| ist_appointment | struct_crm_action_outlook |
| idt_lastsync | datetime |
| ib_cancel | boolean |
| uo_mail | nvo_mail |
| ii_ustrfoutlook | int |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_update_outlook_meetings() | public | Mise a jour |
| wf_update_outlook_contacts() | public | Mise a jour |
| wf_isallday(datetime start, integer duration) | public | Verifie si allday |
| wf_getdesc(string subject) | public | Retourne desc |
| wf_mso2pmix(ref OLEObject ole_item, ref nv_datastore ds_outlook, long pmixkey) | public | Calcule/retourne wf_mso2pmix |
| wf_pmix2mso(ref OLEObject ole_item, ref nv_datastore ds_outlook, long al_find) | public | Calcule/retourne wf_pmix2mso |
| wf_mso2pmix_create(ref oleobject ole_item) | public | Creation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
