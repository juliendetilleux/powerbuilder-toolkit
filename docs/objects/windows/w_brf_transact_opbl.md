# w_brf_transact_opbl

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Transactions opbl (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_sel_item | string |
| inidata | transact |
| is_filter | string |
| ScreenFilt | string |
| FilterString | string |
| is_it_sel_lot | string |
| ii_nbcopy | integer |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| check_tr() | public | Validation |
| save_tr() | public | Sauvegarde les donnees |
| inittrans() | public | Initialisation |
| inititem(string item) | public | Initialisation |
| wf_check_realdatclot(datetime adt_realdate) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| ue_keypressed | Evenement personnalise ue_keypressed |
| clicked | Clic sur la fenetre |
| getfocus | Evenement getfocus |
| losefocus | Evenement losefocus |
