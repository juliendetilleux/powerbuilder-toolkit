# w_qry_query_select

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _query
- **Description**: Query - Selection (Requetes)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_view | String |
| is_query | String |
| is_criteria | String |
| is_filter | String |
| is_cols | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| rowschanging(uo_datawindow source, uo_datawindow destination, integer emplacement) | public | Calcule/retourne rowschanging |
| wf_replace_underscores_with_spaces(string a_instring) | public | Remplacement de chaine |
| get_style() | public | Retourne get_style |
| wf_replace_and(string as_where) | public | Remplacement de chaine |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| losefocus | Evenement losefocus |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
