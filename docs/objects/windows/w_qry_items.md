# w_qry_items

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _query
- **Description**: Articles (Requetes)

## Variables d'instance

| Variable | Type |
|----------|------|
| isel_item_id | string |
| ls_testtri | string |
| is_taxt | string |
| is_filter | string |
| is_ScreenFilter | string |
| FilterString | string |
| is_It_sel_name | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| refresh() | public | Rafraichit l'affichage |
| colorcmnt() | public | Traitement colorcmnt |
| wf_refresh_tax() | public | Rafraichit l'affichage |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_doc_refresh() | public | Rafraichit l'affichage |
| wf_picture() | public | Verifie wf_picture |
| smtlink_refresh() | public | Rafraichit l'affichage |
| wf_etiof_access() | public | Traitement wf_etiof_access |
| wf_preselect(string as_message) | public | Selection |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
