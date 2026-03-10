# w_inventory_ajst_mass

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Inventory ajst mass (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| ia_ordtri | any |
| is_itstat1 | string |
| is_itstat2 | string |
| is_loc | string |
| is_supp | string |
| is_filter2 | string |
| ib_modified | boolean |
| is_infofilter | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| load_multitri() | public | Charge les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
