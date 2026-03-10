# w_bcd_rcmo

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Rcmo (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| ib_Check | boolean |
| ib_Go | boolean |
| ib_changed | boolean |
| is_lot | string |
| is_user | string |
| il_of | long |
| isel_item_id | string |
| is_It_Sel_Ser | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_save() | public | Sauvegarde les donnees |
| check_tr() | public | Validation |
| save_tr() | public | Sauvegarde les donnees |
| save_cotr() | public | Sauvegarde les donnees |
| save_rebtr() | public | Sauvegarde les donnees |
| wf_dw_barcode_retrieve(long al_of) | public | Recupere les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| getfocus | Evenement getfocus |
| losefocus | Evenement losefocus |
| ue_keypressed | Evenement personnalise ue_keypressed |
| constructor | Constructeur |
