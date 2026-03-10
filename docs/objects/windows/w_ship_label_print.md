# w_ship_label_print

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Expedition etiquettes - Impression (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| OriginalReport | String |
| ReportDW | String |
| ReportLang | String |
| Lot | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_win_print(string lot_id, integer nbcopies) | public | Impression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| getfocus | Evenement getfocus |
| losefocus | Evenement losefocus |
| ue_keypressed | Evenement personnalise ue_keypressed |
