# w_cub6_invexp

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _ifcpt
- **Description**: Cub6 invexp (Interface comptable)

## Variables d'instance

| Variable | Type |
|----------|------|
| ErrInv | long |
| NbInvErr | long |
| cptperiod | string |
| il_InvHead | Long |
| is_Curr | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| invoiceprint(long sel_invoice) | public | Impression |
| invoice_refresh() | public | Rafraichit l'affichage |
| f_invexp() | public | Traitement f_invexp |
| f_invexp_ctrl() | public | Calcule/retourne f_invexp_ctrl |
| invoice_sendlog() | public | Envoi |
| f_invexp2() | public | Traitement f_invexp2 |
| f_invexp1() | public | Traitement f_invexp1 |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
