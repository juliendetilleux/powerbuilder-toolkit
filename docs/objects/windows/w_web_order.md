# w_web_order

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _edilink
- **Description**: Web commandes (EDI)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_wslwebidhead | long |
| is_wshcurr | string |
| il_shlastline | long |
| is_DiscDate | string |
| is_ErrMess | string |
| iboo_Problem | boolean |
| il_wshcode | long |
| iboo_ClotHead | boolean |
| is_shcust | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_createheadorder(integer al_row) | public | Creation |
| wf_createlineorder() | public | Creation |
| wf_clotureorder(long al_wslwebidhead) | public | Verifie wf_clotureorder |
| wf_allheadsel() | public | Traitement wf_allheadsel |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
