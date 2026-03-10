# w_transact_rtsc

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions rtsc (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| histoseq | long |
| idwc_Item | DataWindowChild |
| s_Rcpo | transact |
| is_AdId | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| check_tr() | public | Validation |
| save_tr() | public | Sauvegarde les donnees |
| wf_check_realdatclot(datetime realdate) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
