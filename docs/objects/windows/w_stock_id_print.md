# w_stock_id_print

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Stock id - Impression

## Variables d'instance

| Variable | Type |
|----------|------|
| OriginalReport | String |
| ReportDW | String |
| ReportLang | String |
| Lot | String |
| il_choice_index | Long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_win_print(string lot_id, integer nbcopies) | public | Impression |
| wf_set_report_fullname(string reportname) | public | Definit report_fullname |
| init(string as_lot) | public | Initialisation |
| wf_adaptwidth() | public | Traitement wf_adaptwidth |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
