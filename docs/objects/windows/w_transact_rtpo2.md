# w_transact_rtpo2

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions rtpo2 (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| histoseq | long |
| item_id | string |
| ii_PurLine | Integer |
| il_PurOrder | Long |
| inidata | transact |
| progcmnt | string |
| in_qty_avail | decimal |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| save_tr() | public | Sauvegarde les donnees |
| wf_check_realdatclot(datetime realdate) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
