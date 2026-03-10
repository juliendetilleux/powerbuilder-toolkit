# w_workcenter_selection

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Workcenter selection (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| ib_multiselect | Boolean |
| is_workcenters | String |
| il_inc | long |
| istr_specific | gstr_specific |
| istr_return | s_sqlsearch_return |
| istr_empty | s_sqlsearch_return |
| ib_canceled | boolean |
| iSel_workcenter_id | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_find_and_replace(ref string as_vector[], string as_value) | public | Recherche |
| wf_find_workcenters() | public | Recherche |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_end_pre_garnissage | Evenement personnalise ue_end_pre_garnissage |
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
| constructor | Constructeur |
