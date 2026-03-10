# w_invlineas_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Invlineas - Mise a jour (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_Action | String |
| is_DelLiv | String |
| is_TvaHier | String |
| il_SalHead | Long |
| il_SalLine | Long |
| il_InvHead | Long |
| ib_Modified | Boolean |
| id_QtyReq | Decimal |
| id_OldQty | Decimal |
| il_possalline | long |
| qtyinv | decimal |
| ii_ret | int |
| iboo_RistGlob | Boolean |
| is_MULTICO | string |
| invo_imputcpt | nvo_imputcpt |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok() | public | Verifie wf_inputok |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| losefocus | Evenement losefocus |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
