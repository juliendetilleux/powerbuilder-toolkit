# w_bcd_input_qty

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Input qty (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| istr_qty_req | s_qty_req |
| s_balance | s_getweight_rs232_param |
| is_bizerba | string |
| is_ETIPRI | string |
| ii_ETIPRI | int |
| is_funct | string |
| ib_ret | boolean |
| is_CONTPREPA | string |
| is_ITUMTRF | string |
| ib_cancel | boolean |
| lb_inclose | boolean |
| is_espera | string |
| is_LBLPROC2 | string |
| invo_alwegen | nvo_alwegen |
| ib_check | boolean |
| ib_bizerba_socket | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_opencolisage() | public | Ouverture |
| wf_findfunction(string as_lot, string as_item, string as_adcode, keycode key) | public | Recherche |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| getfocus | Evenement getfocus |
| constructor | Constructeur |
