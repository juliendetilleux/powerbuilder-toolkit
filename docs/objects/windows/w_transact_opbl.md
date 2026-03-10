# w_transact_opbl

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions opbl (Stock)

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
| is_ITUMTRF | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| check_tr() | public | Validation |
| save_tr() | public | Sauvegarde les donnees |
| inittrans() | public | Initialisation |
| inititem(string item) | public | Initialisation |
| filteritem() | public | Applique un filtre |
| resettrans() | public | Reinitialisation |
| wf_check_realdatclot(datetime adt_realdate) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| ue_keypressed | Evenement personnalise ue_keypressed |
| getfocus | Evenement getfocus |
| losefocus | Evenement losefocus |
