# w_workflows

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _sales_crm
- **Description**: Workflows (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| isel_wfheadid | int |
| isel_wflineid | int |
| ls_testtri | string |
| ls_testtri2 | string |
| isTab_ScreenFilter | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| refresh() | public | Rafraichit l'affichage |
| rowschanging(uo_datawindow source, uo_datawindow destination, integer emplacement) | public | Calcule/retourne rowschanging |
| wf_wfhead_delete() | public | Suppression |
| wf_wfline_delete() | public | Suppression |
| wf_wfhcopy() | public | Copie |
| wf_headfilter() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| dragdrop | Depot de glisser-deposer |
