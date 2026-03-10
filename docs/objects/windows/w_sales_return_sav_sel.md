# w_sales_return_sav_sel

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Ventes retours sav sel

## Variables d'instance

| Variable | Type |
|----------|------|
| ls_testtri | string |
| is_filter | string |
| is_choixfilter | string |
| filterstring | string |
| isel_shiphead | long |
| isel_shipline | long |
| is_client | string |
| is_devis | string |
| is_typpay | string |
| id_ristcust | decimal |
| is_salrtrno | string |
| is_salrtrns | string |
| is_salrtrnt | string |
| is_ScreenFilter | String |
| is_type_WMS | string |
| is_lot | string |
| il_slline | long |
| is_item | string |
| Action | String |
| il_selcall | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| refresh() | public | Rafraichit l'affichage |
| wf_call_win_return(long al_row) | public | Traitement wf_call_win_return |
| wf_sendreturntowms() | public | Envoi |
| wf_refresh_all() | public | Rafraichit l'affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
