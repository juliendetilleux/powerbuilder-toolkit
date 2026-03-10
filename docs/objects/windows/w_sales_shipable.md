# w_sales_shipable

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Ventes shipable

## Variables d'instance

| Variable | Type |
|----------|------|
| is_custid | string |
| il_custord | long |
| ii_shiptoid | integer |
| is_filtertruck | string |
| is_filterdate | string |
| ib_windows_active | boolean |
| ii_percent | integer |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_filter() | public | Applique un filtre |
| wf_load_data() | public | Charge les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| activate | Activation de la fenetre |
| deactivate | Desactivation de la fenetre |
| timer | Evenement timer |
| clicked | Clic sur la fenetre |
| getfocus | Evenement getfocus |
| doubleclicked | Double-clic sur la fenetre |
