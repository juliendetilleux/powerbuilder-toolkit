# w_conditions

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _projects
- **Description**: Conditions (Projets)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_currentcode | long |
| is_level | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_setstatus(long al_row, character ac_new_status) | public | Definit status |
| wf_refresh() | public | Rafraichit l'affichage |
| wf_condhead_delete() | public | Suppression |
| wf_condline_delete() | public | Suppression |
| rowschanging(uo_datawindow source, uo_datawindow destination, integer emplacement) | public | Calcule/retourne rowschanging |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| dragdrop | Depot de glisser-deposer |
