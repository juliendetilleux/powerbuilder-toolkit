# w_inv_paid

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _ifcpt
- **Description**: Factures paid (Interface comptable)

## Variables d'instance

| Variable | Type |
|----------|------|
| isTab_InvPaid | Any |
| idt_Start | DateTime |
| il_InvHead | Long |
| is_ScreenFilter | String |
| is_McCoCode | String |
| ii_SalesAuthoBlock | Integer |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_autodataimp() | public | Traitement wf_autodataimp |
| wf_filter() | public | Applique un filtre |
| wf_refresh() | public | Rafraichit l'affichage |
| wf_get_bobexectyp(ref string as_cptid, string as_mccocode) | public | Retourne bobexectyp |
| wf_adaptpaidwithbalance() | public | Traitement wf_adaptpaidwithbalance |
| wf_adsalesauthblock(string as_cust, string as_adidsub, string as_mccocode) | public | Traitement wf_adsalesauthblock |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
