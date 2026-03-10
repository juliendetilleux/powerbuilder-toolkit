# w_multi_tictrl_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Multi tictrl - Mise a jour (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| lc_autotime | string |
| selectedrow | long |
| newuser | string |
| Sel_typ | string |
| newdate | datetime |
| modified | boolean |
| il_start_rowcopy | long |
| dwsource | uo_datawindow |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| adaptdddw(long rownum) | public | Traitement adaptdddw |
| delete_null_line() | public | Suppression |
| tictrl_check() | public | Validation |
| reorder_lines() | public | Traitement reorder_lines |
| validhour(string hour) | public | Retourne validhour |
| wf_checkline(long row) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
