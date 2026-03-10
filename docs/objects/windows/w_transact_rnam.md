# w_transact_rnam

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions rnam (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| lot2 | string |
| inidata | transact |
| MaxExp | datetime |
| is_LOTSTSRED | string |
| ii_Ret_Init | Integer |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| check_tr() | public | Validation |
| save_tr() | public | Sauvegarde les donnees |
| initwindow() | public | Initialisation |
| wf_returnstatus(string as_status1, ref string loqcstatus) | public | Retourne wf_returnstatus |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
