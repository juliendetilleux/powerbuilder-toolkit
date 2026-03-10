# w_qry_adresses

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _query
- **Description**: Adresses (Requetes)

## Variables d'instance

| Variable | Type |
|----------|------|
| isel_adresse_id | string |
| is_client | string |
| il_contactid | long |
| ii_itemsort | integer |
| is_filter | string |
| is_ScreenFilter | string |
| FilterString | string |
| is_choixfilter | string |
| isel_ratedat | datetime |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| refresh() | public | Rafraichit l'affichage |
| setfilter1() | public | Applique un filtre |
| email() | public | Traitement email |
| email_ad() | public | Traitement email_ad |
| email_ct() | public | Traitement email_ct |
| wf_doc_refresh() | public | Rafraichit l'affichage |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_preselect(string as_message) | public | Selection |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
| losefocus | Evenement losefocus |
