# w_sales_label_prepare

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Ventes etiquettes prepare

## Variables d'instance

| Variable | Type |
|----------|------|
| is_sales_label | s_sales_label |
| ii_etityp | integer |
| is_etipri | string |
| is_labeldir | string |
| defetiitem | string |
| adetiitem | string |
| is_para_etiqexp | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_load_lineorders() | public | Charge les donnees |
| wf_load_global_labels() | public | Charge les donnees |
| wf_load_specific_labels(string sel_item, string sel_cust, ref string line_etiitem, ref string line_etigro, ref string line_etipal) | public | Charge les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
