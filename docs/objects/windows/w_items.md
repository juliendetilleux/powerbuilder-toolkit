# w_items

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Articles (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_filter | string |
| FilterString | string |
| isel_item_id | string |
| is_ScreenFilter | String |
| is_ItCat | String |
| is_ittyp | String |
| is_itemfantom | String |
| is_It_sel_name | string |
| is_ITEMANX | string |
| ii_ITEMCHOI | int |
| ii_index | int |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| refresh() | public | Rafraichit l'affichage |
| wf_update() | public | Mise a jour |
| wf_opentechdata() | public | Ouverture |
| wf_init_itsat2(string as_itstat1) | public | Initialisation |
| wf_special_filter() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
