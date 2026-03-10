# w_jalons_sqlselect

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _projects
- **Description**: Jalons sqlselect (Projets)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_jacode | long |
| JalonsNameFilter | string |
| is_Action | String |
| ib_canceled | boolean |
| iw_parent | w_window |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filterjalons() | public | Applique un filtre |
| wf_refresh() | public | Rafraichit l'affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
