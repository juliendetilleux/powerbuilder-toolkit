# w_exact_purinvexp

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _ifcpt
- **Description**: Exact purinvexp (Interface comptable)

## Variables d'instance

| Variable | Type |
|----------|------|
| cptperiod | string |
| is_AdSub | String |
| is_Periode | String |
| iSel_ordr_Curr | string |
| iSel_invhead | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| invoice_refresh() | public | Rafraichit l'affichage |
| f_invexp_ctrl() | public | Calcule/retourne f_invexp_ctrl |
| invoice_sendlog() | public | Envoi |
| wf_valcontrol(decimal adec_totval, decimal adec_purval, decimal adec_tvaval) | public | Fonction wf_valcontrol |
| f_invexp() | public | Traitement f_invexp |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
