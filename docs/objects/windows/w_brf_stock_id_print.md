# w_brf_stock_id_print

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _stkbarcod
- **Description**: Stock id - Impression (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| OriginalReport | String |
| ReportDW | String |
| ReportLang | String |
| Lot | String |
| il_nb | Long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_win_print(string lot_id, integer nbcopies) | public | Impression |
| wf_adaptwidth() | public | Traitement wf_adaptwidth |
| wf_set_report_fullname(string reportname) | public | Definit report_fullname |
| init(string as_lot) | public | Initialisation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
