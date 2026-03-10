# w_packgrhead_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Packgrhead - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_Action | String |
| iw_parent | w_window |
| isel_packgrhead_id | string |
| isel_packgrline_id | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_input_ok() | public | Verifie wf_input_ok |
| wf_delete_packgrline_row() | public | Suppression |
| wf_add_packings() | public | Ajout |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
