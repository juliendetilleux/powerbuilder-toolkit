# w_qry_trace

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _query
- **Description**: Trace (Requetes)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_dwSQL | string |
| is_ShipSQL | string |
| TitleTxt | string |
| is_lot | string |
| iboo_SupLot | Boolean |
| iboo_CusLot | boolean |
| Is_ordtri | any |
| filter_crit | string |
| is_entry | string |
| il_salhead | long |
| il_salline | long |
| il_shiphead | long |
| il_shipline | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| loadsqls() | public | Charge les donnees |
| replacedates(string sql_or) | public | Remplacement de chaine |
| loadmultitri() | public | Charge les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
