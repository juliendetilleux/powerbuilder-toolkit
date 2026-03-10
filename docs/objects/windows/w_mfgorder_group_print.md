# w_mfgorder_group_print

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Mfgorder groupes - Impression (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| ls_testtri | string |
| iit_sel_id | string |
| isel_duedate | datetime |
| isel_mfgorigin | string |
| screenfilter | string |
| is_filter | string |
| is_choixfilter | string |
| filterstring | string |
| isel_mfg_id | long |
| isel_mfgtype | string |
| isel_mfgprint | string |
| is_choixfilter2 | string |
| il_plnordno | long |
| mfggroup | string |
| QCParaLaunch | String |
| isplan_ordtri | Any |
| isof_ordtri | Any |
| il_Salord | Long |
| ii_salline | Integer |
| is_mfgtyp | String |
| is_bomtyp | string |
| is_item | String |
| OrigReport1 | String |
| OrigReport2 | String |
| OrigReport3 | String |
| Report1 | String |
| Report2 | String |
| Report3 | String |
| Report1DW | String |
| Report2DW | String |
| Report3DW | String |
| ii_print_choice | Integer |
| ids_domino | nv_datastore |
| is_select_original | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| refreshlin() | public | Rafraichit l'affichage |
| loadmultitri() | public | Charge les donnees |
| printorder(long mfgorder) | public | Impression |
| wf_check_print() | public | Impression |
| wf_print() | public | Impression |
| wf_printgroup() | public | Impression |
| wf_domino_export() | public | Exportation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
