# w_invlinep_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Invlinep - Mise a jour (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| action | String |
| is_consignicref | String |
| ii_ret | int |
| iboo_QtyMod | Boolean |
| il_InvHead | Long |
| is_InvTyp | String |
| iboo_RistGlob | Boolean |
| idec_StartQty | Decimal |
| iSel_adresse_id | string |
| iw_parent | w_window |
| iSel_ordr_Curr | string |
| iSel_invtyp | string |
| ii_ihshipto | int |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| iteminvoiceok() | public | Verifie iteminvoiceok |
| wf_histocons_flaginv(string as_pack) | public | Verifie wf_histocons_flaginv |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
