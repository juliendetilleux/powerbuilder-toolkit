# w_rcpo_kit_comp_lot

- **Type**: Window
- **Ancetre**: w_response_dw
- **Module**: _stock
- **Description**: Rcpo kits comp lots (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| iboo_MustCreaLotNb | Boolean |
| idst_Comp_List | nv_DataStore |
| is_Lot | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_verif_lot(long al_row) | public | Verifie wf_verif_lot |
| wf_verif_unicite_lot(string as_lot) | public | Calcule/retourne wf_verif_unicite_lot |
| wf_verif_nv(string as_data) | public | Verifie wf_verif_nv |
| wf_verif_doublonlot() | public | Verifie wf_verif_doublonlot |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
