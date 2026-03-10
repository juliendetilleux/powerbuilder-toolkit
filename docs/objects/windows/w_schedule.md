# w_schedule

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _planning
- **Description**: Planification

## Variables d'instance

| Variable | Type |
|----------|------|
| ib_Firstplan | boolean |
| il_selrow | long |
| ib_framed | boolean |
| SchdHori | long |
| SchdDat | datetime |
| Gantt_row | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| draw_gantt() | public | Traitement draw_gantt |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_postopen | Evenement personnalise ue_postopen |
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| dragdrop | Depot de glisser-deposer |
| dragwithin | Glissement dans la fenetre |
| ue_mousemove | Evenement personnalise ue_mousemove |
