# w_transact_rqmo

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions rqmo (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| iSel_item_id | string |
| iSel_mfg_id | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| initwindow() | public | Initialisation |
| check_tr() | public | Validation |
| save_tr() | public | Sauvegarde les donnees |
| wf_return_dtreq(decimal ad_mhcode) | public | Fonction wf_return_dtreq |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
