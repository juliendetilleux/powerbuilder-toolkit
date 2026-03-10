# w_jalons

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _projects
- **Description**: Jalons (Projets)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_currentcode | long |
| il_line | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_setstatus(long al_row, character ac_new_status) | public | Definit status |
| wf_refresh(uo_datawindow adw_data) | public | Rafraichit l'affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
