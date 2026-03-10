# w_calendar

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _general
- **Description**: Calendrier (General)

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| getmonthstring(integer vs_month) | public | Retourne getmonthstring |
| enterdaynumbers(integer start_day_num, integer days_in_month) | public | Traitement enterdaynumbers |
| nbdaysinmonth(integer monthno, integer yearno) | public | Calcule/retourne nbdaysinmonth |
| drawmonth(integer yearno, integer monthno) | public | Traitement drawmonth |
| initcalendar(date vd_start_date) | public | Initialisation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
