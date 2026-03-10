# w_transact_rtpo

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions rtpo (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| histoseq | long |
| ii_PurLine | Integer |
| il_PurOrder | Long |
| iSel_item_id | string |
| is_ITUMTRF | string |
| is_itisumtarif | string |
| is_itumtarif | string |
| id_qtytarif | decimal |
| is_PURVALREC | string |
| is_type_WMS | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| initwindow() | public | Initialisation |
| check_tr() | public | Validation |
| save_tr() | public | Sauvegarde les donnees |
| wf_check_realdatclot(datetime adt_realdate) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
