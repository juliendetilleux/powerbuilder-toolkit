# w_mfg_linkallocwcreq

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Fabrication linkallocwcreq

## Variables d'instance

| Variable | Type |
|----------|------|
| il_mfgcode | long |
| il_wcrow | long |
| il_mlrow | long |
| il_lkrow | long |
| ib_fromsort | boolean |
| is_ordtri | any |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_checklink() | public | Validation |
| wf_addlink() | public | Ajout |
| wf_refresh() | public | Rafraichit l'affichage |
| wf_dellink() | public | Calcule/retourne wf_dellink |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
