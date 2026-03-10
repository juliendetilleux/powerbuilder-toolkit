# w_wb5_purinvexp

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _ifcpt
- **Description**: Wb5 purinvexp (Interface comptable)

## Variables d'instance

| Variable | Type |
|----------|------|
| cptperiod | string |
| is_AdSub | String |
| is_Periode | String |
| iboo_Declare | Boolean |
| iSel_ordr_Curr | string |
| iSel_invhead | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| invoice_refresh() | public | Rafraichit l'affichage |
| f_invexp_ctrl() | public | Calcule/retourne f_invexp_ctrl |
| invoice_sendlog() | public | Envoi |
| f_invexp() | public | Verifie f_invexp |
| wf_valcontrol(decimal adec_totval, decimal adec_purval, decimal adec_tvaval) | public | Fonction wf_valcontrol |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
