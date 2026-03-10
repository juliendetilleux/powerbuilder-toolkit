# w_invhead_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: En-tetes factures - Mise a jour (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_oldcust | string |
| cust_modif_request | boolean |
| is_originaltvatyp | string |
| ii_Ret | Integer |
| file_modified | boolean |
| is_invprist | string |
| iboo_EscMod | Boolean |
| is_EscCalcTyp | String |
| iSel_adresse_id | string |
| iw_parent | w_window |
| is_Periode | String |
| ii_INVDYMAX | int |
| is_MULTICO | string |
| is_NUMINNC | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| invheadinputok() | public | Verifie invheadinputok |
| wf_check_dateperiod() | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
