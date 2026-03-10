# w_transact_rtpo1

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions rtpo1 (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| histoseq | long |
| item_id | string |
| ii_PurLine | Integer |
| il_MfgOrder | Long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| initwindow() | public | Initialisation |
| check_tr() | public | Validation |
| save_tr() | public | Sauvegarde les donnees |
| wf_check_realdatclot(datetime realdate) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
