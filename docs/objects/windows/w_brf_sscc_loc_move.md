# w_brf_sscc_loc_move

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Sscc loc move (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| iboo_Error | Boolean |
| ii_ReadEtap | Integer |
| il_hsseq | long |
| is_trcode | string |
| id_qty | decimal |
| il_row | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_initwindow() | public | Initialisation |
| wf_errmess(string as_mess) | public | Traitement wf_errmess |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| timer | Evenement timer |
| clicked | Clic sur la fenetre |
