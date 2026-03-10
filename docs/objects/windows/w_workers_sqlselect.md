# w_workers_sqlselect

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Workers sqlselect (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_currentwkcode | string |
| lb_returnwithvalue | boolean |
| istr_specific | gstr_specific |
| il_inc | long |
| ib_multiselect | Boolean |
| is_workers | string |
| istr_return | s_sqlsearch_return |
| istr_empty | s_sqlsearch_return |
| ib_canceled | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh() | public | Rafraichit l'affichage |
| wf_find_and_replace(ref string as_vector[], string as_value) | public | Recherche |
| wf_find_workers() | public | Recherche |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_end_pre_garnissage | Evenement personnalise ue_end_pre_garnissage |
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
