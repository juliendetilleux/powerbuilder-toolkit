# w_brf_trf_3step_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Transferts 3step - Mise a jour (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| istr_objectparm | struct_objectparm |
| is_loc_dest | string |
| li_level | int |
| il_tlteid | long |
| il_tlline | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh_dw_line() | public | Rafraichit l'affichage |
| wf_scan_trf3(long al_tlteid, long al_tlline) | public | Verifie wf_scan_trf3 |
| wf_scan_bcd_lot(string as_bcd) | public | Traitement wf_scan_bcd_lot |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
