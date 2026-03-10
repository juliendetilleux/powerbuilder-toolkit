# w_transact_dlmo

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions dlmo (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| issue_type | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| initwindow() | public | Initialisation |
| check_tr() | public | Validation |
| save_tr_u() | public | Sauvegarde les donnees |
| save_tr_d() | public | Sauvegarde les donnees |
| wf_checkloc(long al_mlline) | public | Validation |
| wf_check_realdatclot(datetime adt_realdate) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
