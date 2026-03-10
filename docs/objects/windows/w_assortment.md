# w_assortment

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Assortment (Donnees de base)

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_delete() | public | Suppression |
| wf_modify() | public | Traitement wf_modify |
| wf_refresh(long al_ascode) | public | Rafraichit l'affichage |
| wf_refresh_detail() | public | Rafraichit l'affichage |
| wf_refresh_line() | public | Rafraichit l'affichage |
| wf_create_line() | public | Creation |
| wf_delete_line() | public | Suppression |
| wf_modify_line() | public | Traitement wf_modify_line |
| wf_delete_assortline(long al_ascode, string as_itcode, ref string as_error) | public | Applique un tri |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
