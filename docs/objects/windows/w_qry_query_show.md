# w_qry_query_show

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _query
- **Description**: Query show (Requetes)

## Variables d'instance

| Variable | Type |
|----------|------|
| dwc | datawindowchild |
| is_object_name | string |
| is_hold_color | string |
| is_hold_backcolor | string |
| is_hold_backmode | string |
| is_text | boolean |
| ib_updating | boolean |
| OutputSel | integer |
| is_sql | String |
| is_qrname | String |
| is_criteria | String |
| is_filter | String |
| iw_parent | w_window |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| change_select(string ls_requete) | public | Selection |
| wf_convert_height_to_points(uo_datawindow adw_parm, string as_height) | public | Conversion |
| wf_modify() | public | Traitement wf_modify |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| resize | Redimensionnement de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| ue_leftbuttonup | Evenement personnalise ue_leftbuttonup |
