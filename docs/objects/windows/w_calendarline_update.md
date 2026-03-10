# w_calendarline_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _planning
- **Description**: Calendarline - Mise a jour (Planification)

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
