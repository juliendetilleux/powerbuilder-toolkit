# w_actions_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _query
- **Description**: Actions - Mise a jour (Requetes)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_etat | String |
| iw_origin | w_window |
| idwc_contact | DataWindowChild |
| il_roworigin | Long |
| ib_modify | Boolean |
| iw_parent | w_window |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok() | public | Calcule/retourne wf_inputok |
| wf_doc_refresh() | public | Rafraichit l'affichage |
| wf_modify_doc() | public | Traitement wf_modify_doc |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| rbuttondown | Evenement rbuttondown |
| clicked | Clic sur la fenetre |
