# w_crm_import_bind

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _sales_crm
- **Description**: Importation bind (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| itab_fieldBinded | struct_prepare_import |
| ii_row_right | integer |
| tabCtrl | boolean |
| ii_cptTab | integer |
| ib_previous | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_doubleclicked_choices(uo_datawindow dw_left, uo_datawindow dw_right) | public | Traitement wf_doubleclicked_choices |
| wf_clicked_right(integer row, uo_datawindow dw) | public | Traitement wf_clicked_right |
| wf_clicked_left(integer row, uo_datawindow dw) | public | Traitement wf_clicked_left |
| wf_doubleclicked_choiceline(uo_datawindow dw_left, uo_datawindow dw_right) | public | Traitement wf_doubleclicked_choiceline |
| wf_doubleclicked_lang(uo_datawindow dw_left, uo_datawindow dw_right) | public | Traitement wf_doubleclicked_lang |
| wf_doubleclicked_salesman(uo_datawindow dw_left, uo_datawindow dw_right) | public | Traitement wf_doubleclicked_salesman |
| wf_selecttab() | public | Selection |
| wf_reloadtab() | public | Charge les donnees |
| wf_doubleclicked_countrid(uo_datawindow dw_left, uo_datawindow dw_right) | public | Traitement wf_doubleclicked_countrid |
| wf_doubleclicked_currencies(uo_datawindow dw_left, uo_datawindow dw_right) | public | Traitement wf_doubleclicked_currencies |
| wf_addchoice(uo_datawindow dw_source) | public | Ajout |
| wf_inittab(uo_datawindow dw_left, uo_datawindow dw_right, string argument) | public | Initialisation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
