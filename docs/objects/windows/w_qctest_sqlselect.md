# w_qctest_sqlselect

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _quality
- **Description**: Qctest sqlselect (Qualite)

## Variables d'instance

| Variable | Type |
|----------|------|
| ib_multiselect | Boolean |
| is_qttestid | string |
| ScreenFilter | String |
| il_inc | long |
| istr_SQLSelect | s_SqlSelect |
| istr_return | s_sqlsearch_return |
| istr_empty | s_sqlsearch_return |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh(string as_testid) | public | Rafraichit l'affichage |
| wf_filter() | public | Applique un filtre |
| wf_find_and_replace(ref string as_vector[], string as_value) | public | Recherche |
| wf_find_tests() | public | Recherche |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_end_pre_garnissage | Evenement personnalise ue_end_pre_garnissage |
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
