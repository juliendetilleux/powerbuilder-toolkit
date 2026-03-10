# w_flxreport_expression

- **Type**: Window
- **Ancetre**: window
- **Module**: _FlxReport
- **Description**: Flxreport expression (FlexReport)

## Variables d'instance

| Variable | Type |
|----------|------|
| ids_check | datastore |
| is_object | string |
| is_property | string |
| is_initial_expression | string |
| is_model_syntax | string |
| ib_ok_clicked | boolean |
| iw_old_parent | window |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_replace(string as_source, string as_what, string as_by_what) | public | Remplacement de chaine |
| wf_feed_tv_function(string as_group_name, string as_group_code, ref string as_functions[]) | public | Traitement wf_feed_tv_function |
| wf_feed_tv_constant(string as_group_name, string as_group_code, ref string as_functions[]) | public | Calcule/retourne wf_feed_tv_constant |
| wf_check(boolean ab_verbose) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
