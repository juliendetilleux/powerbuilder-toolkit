# w_tictrl_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Tictrl - Mise a jour (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| lc_autotime | string |
| selectedrow | long |
| newuser | string |
| Sel_typ | string |
| newdate | datetime |
| modified | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| adaptdddw(long rownum) | public | Traitement adaptdddw |
| delete_null_line() | public | Suppression |
| calculate_time() | public | Calcul |
| tictrl_check() | public | Validation |
| showbutton(boolean show) | public | Affichage |
| reorder_lines() | public | Traitement reorder_lines |
| validhour(string hour) | public | Retourne validhour |
| wf_checkline(long row) | public | Validation |
| wf_addreqsline() | public | Ajout |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
