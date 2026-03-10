# w_srvctask_report

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _services
- **Description**: Srvctask - Rapport (Services)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_TaskID | Int |
| ib_Lab | Boolean |
| ii_NumCostMat | Int |
| ii_NumCostLab | Int |
| ii_NumCostOth | Int |
| is_Item | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh_costmat(integer seltask, integer selline) | public | Rafraichit l'affichage |
| wf_refresh_costlab(integer seltask, integer selline) | public | Rafraichit l'affichage |
| wf_refresh_costoth(integer SelTask, integer SelLine) | public | Rafraichit l'affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
