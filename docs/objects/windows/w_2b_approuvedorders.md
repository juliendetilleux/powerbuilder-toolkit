# w_2b_approuvedorders

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: 2b approuvedorders (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_item | string |
| isel_mfg_id | long |
| isof_ordtri | Any |
| isplan_ordtri | Any |
| is_mfglist | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_approuve_of() | public | Calcule/retourne wf_approuve_of |
| wf_getselectedof() | public | Retourne selectedof |
| wf_annul_of() | public | Calcule/retourne wf_annul_of |
| wf_print_order() | public | Impression |
| wf_load_multitri() | public | Charge les donnees |
| wf_inside_availability() | public | Traitement wf_inside_availability |
| wf_multitridw(uo_datawindow adw_dw, any astab_tri[]) | public | Calcule/retourne wf_multitridw |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
