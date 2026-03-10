# w_method_simulate

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _methods
- **Description**: Methodes simulate (Methodes/Nomenclatures)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_itcode | string |
| id_qty | decimal |
| is_METHSIM | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_bomlevelcalculate() | public | Calcul |
| wf_recalc(decimal adec_qty, string as_item, boolean ab_retrieve) | public | Calcul |
| wf_addpc(string as_rlwccode, string as_wcname, decimal adec_rllabrun, decimal adec_rllabfix, decimal adec_rlmacrun, decimal adec_rlsetup, decimal adec_wcmacprop, decimal adec_wcmacfix, decimal adec_wccost, boolean ab_update) | public | Ajout |
| wf_calcbom(decimal adec_qty, string as_item, boolean ab_update, boolean ab_inrecursiv) | public | Calcul |
| wf_additem(string as_itcode, string as_itname, decimal adec_qty, decimal adec_cost, string as_itum, decimal ad_scrap) | public | Ajout |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| rbuttondown | Evenement rbuttondown |
| clicked | Clic sur la fenetre |
