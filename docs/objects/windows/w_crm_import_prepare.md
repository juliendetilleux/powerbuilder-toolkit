# w_crm_import_prepare

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _sales_crm
- **Description**: Importation prepare (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| iboo_nameBinded | boolean |
| iboo_fileProblem | boolean |
| itab_fieldBinded | struct_prepare_import |
| ii_currentPos | integer |
| ii_currentRow | integer |
| is_pathName | string |
| is_separator | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_showbinded() | public | Affichage |
| wf_load_dw_lb() | public | Charge les donnees |
| wf_loadtabseparated() | public | Charge les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
