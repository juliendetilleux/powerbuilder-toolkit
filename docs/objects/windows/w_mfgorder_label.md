# w_mfgorder_label

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Mfgorder etiquettes (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| OriginalReport | String |
| ReportDW | String |
| ReportLang | String |
| isof_ordtri | Any |
| il_mfgId | Long |
| is_item | String |
| ii_etityp | INteger |
| is_etipri | String |
| FallBackReport | String |
| is_labeldir | String |
| is_mfgorder | string |
| is_lot | string |
| screenfilter | string |
| is_filter | string |
| is_choixfilter | string |
| filterstring | string |
| il_choice_index | Long |
| is_MFGETIQ | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_win_print(string lot_id, integer nbcopies) | public | Impression |
| wf_adaptwidth() | public | Traitement wf_adaptwidth |
| loadmultitri() | public | Charge les donnees |
| loadstdlabel() | public | Charge les donnees |
| loadmodlabel() | public | Charge les donnees |
| loadspecificlabel() | public | Charge les donnees |
| reportvalidity(string proposedreport) | public | Verifie reportvalidity |
| zooming(string SIgn) | public | Traitement zooming |
| filteritem() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| getfocus | Evenement getfocus |
