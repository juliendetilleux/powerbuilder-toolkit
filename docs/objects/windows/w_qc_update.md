# w_qc_update

- **Type**: Window
- **Ancetre**: w_popup
- **Module**: _quality
- **Description**: Qc - Mise a jour (Qualite)

## Variables d'instance

| Variable | Type |
|----------|------|
| Is_ordtri | any |
| iSel_lot_id | string |
| ii_QCLOTHOR | int |
| screenfilter | string |
| is_QCCHCKPSW | string |
| is_type_WMS | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| loadmultitri() | public | Charge les donnees |
| wf_refresh_lot() | public | Rafraichit l'affichage |
| filteritem() | public | Applique un filtre |
| wf_modify(string as_typ) | public | Calcule/retourne wf_modify |
| wf_modify_status(ref string as_error, long al_row, string as_tostatus) | public | Calcule/retourne wf_modify_status |
| wf_reset_all() | public | Reinitialisation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
