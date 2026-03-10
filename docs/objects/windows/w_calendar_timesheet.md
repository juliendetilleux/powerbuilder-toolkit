# w_calendar_timesheet

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _projects
- **Description**: Calendrier timesheet (Projets)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_cal | string |
| id_dwcaldat | date |
| ii_Day | Integer |
| block_prev | Boolean |
| WorkDate | date |
| WorkDay | String |
| detstartdate | datetime |
| iw_parent | w_window |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| load_calendar(string calendar, date startdate, string way) | public | Charge les donnees |
| relativemonth(date currmonth, integer offset) | public | Fonction relativemonth |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
