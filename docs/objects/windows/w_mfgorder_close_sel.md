# w_mfgorder_close_sel

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Mfgorder close sel (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| ls_testtri | string |
| isel_mfg_id | long |
| isubc_mfg | string |
| iit_sel_id | string |
| screenfilter | string |
| is_filter | string |
| is_choixfilter | string |
| filterstring | string |
| is_smtof | string |
| is_mfgtyp | string |
| isof_ordtri | ANy |
| is_mfgtypbom | string |
| is_ofcloseparam | string |
| is_ofcloseprint | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| refresh() | public | Rafraichit l'affichage |
| loadmultitri() | public | Charge les donnees |
| wf_init_itsat2(string as_itstat1) | public | Initialisation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
