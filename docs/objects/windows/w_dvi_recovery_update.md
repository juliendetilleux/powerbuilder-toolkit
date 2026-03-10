# w_dvi_recovery_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _devis
- **Description**: Dvi recovery - Mise a jour (Devis)

## Variables d'instance

| Variable | Type |
|----------|------|
| idec_GlobInc | Decimal |
| ii_LnId | Integer |
| il_ProjId | Long |
| is_Action | String |
| iboo_OfferMod | Boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_calc(decimal adec_Qty, decimal adec_StdPurVal) | public | Calcul |
| wf_imputok() | public | Verifie wf_imputok |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
