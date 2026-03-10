# w_dvi_composedln_create

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _devis
- **Description**: Dvi composedln - Creation (Devis)

## Variables d'instance

| Variable | Type |
|----------|------|
| idec_GlobInc | Decimal |
| ii_LnId | Integer |
| il_ProjId | Long |
| ii_Ret | Integer |
| is_typ | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_calc(decimal adec_Qty, decimal adec_StdPurVal) | public | Calcul |
| wf_imputok() | public | Verifie wf_imputok |
| wf_get_deviid() | public | Retourne deviid |
| wf_get_version() | public | Retourne version |
| wf_get_dvitype() | public | Retourne dvitype |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
