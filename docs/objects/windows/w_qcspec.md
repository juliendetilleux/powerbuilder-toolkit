# w_qcspec

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _quality
- **Description**: Qcspec (Qualite)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_items | string |
| ii_versn | int |
| il_row | long |
| is_StatusHead | String |
| is_filter | string |
| ls_TypTest | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_filter(string as_filter) | public | Applique un filtre |
| wf_id_null() | public | Verifie wf_id_null |
| wf_change_status(string as_modif) | public | Modification |
| wf_refresh(string as_item, string as_typ, string as_adcode, integer ai_versn) | public | Rafraichit l'affichage |
| wf_refresh_line(integer ai_line) | public | Rafraichit l'affichage |
| wf_delete_test() | public | Suppression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
