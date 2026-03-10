# w_qry_item_mfg_1it

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _query
- **Description**: Articles fabrication 1it (Requetes)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_qry_it | string |
| iboo_PlanRet | Boolean |
| iboo_HistoRet | Boolean |
| iboo_StockRet | Boolean |
| iboo_BomRet | Boolean |
| iboo_UseRet | Boolean |
| idt_HistoStart | DateTime |
| ii_SelectTab | Int |
| is_InfoOpen | String |
| is_InfoPlan | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| show_graph(string sel_item, datetime startdat, datetime stopdat) | public | Affichage |
| wf_checkauthority() | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
