# w_methods

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _methods
- **Description**: Methods (Methodes/Nomenclatures)

## Variables d'instance

| Variable | Type |
|----------|------|
| ls_testtri | string |
| isel_method_item | string |
| isel_method_type | string |
| is_routparam | string |
| printparam | s_print |
| is_filter | string |
| ScreenFilt | string |
| FilterString | string |
| idec_percmin | decimal |
| is_lang | string |
| is_usbomright | string |
| is_ustyp | string |
| is_choixfilter | string |
| ii_ITEMCHOI | int |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| printmethod(string sel_item, string sel_typ) | public | Impression |
| printallmethods() | public | Impression |
| filteritem() | public | Applique un filtre |
| methodscost(datetime dateval) | public | Traitement methodscost |
| refresh() | public | Rafraichit l'affichage |
| wf_rolupmethcost(string as_bhcode, string as_bhtype, datetime adt_dateval) | public | Traitement wf_rolupmethcost |
| wf_copymethod() | public | Copie |
| wf_rolupmethcost_old(string as_bhcode, string as_bhtype, datetime adt_dateval) | public | Traitement wf_rolupmethcost_old |
| wf_delete_bom() | public | Suppression |
| print_methodstruct() | public | Impression |
| printselectedmethod(string sel_item, string sel_typ, integer ai_print) | public | Impression |
| wf_copymethod_var() | public | Copie |
| wf_open_modif_bomline() | public | Ouverture |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
