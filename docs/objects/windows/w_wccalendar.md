# w_wccalendar

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _planning
- **Description**: Wccalendar (Planification)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_calendar | string |
| is_wc | string |
| id_dwcaldat | date |
| ii_Day | Integer |
| block_prev | Boolean |
| WorkDate | date |
| WorkHours | dec |
| detstartdate | datetime |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| regenerate_selwc() | public | Traitement regenerate_selwc |
| regenerate_allwc() | public | Traitement regenerate_allwc |
| relativemonth(date currmonth, integer offset) | public | Fonction relativemonth |
| load_calendar(string wcid, date startdate, string way) | public | Charge les donnees |
| draw_wcload(string wc, datetime startdate, datetime enddate) | public | Charge les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| ue_mousemove | Evenement personnalise ue_mousemove |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
