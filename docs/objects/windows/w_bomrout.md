# w_bomrout

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _methods
- **Description**: Bomrout (Methodes/Nomenclatures)

## Variables d'instance

| Variable | Type |
|----------|------|
| iSel_method_item | string |
| iSel_method_type | string |
| isel_bom_line | long |
| isel_rout_line | long |
| isel_rout_line2 | long |
| iSel_Cost_Line | long |
| isel_coitem | string |
| isel_doc_name | string |
| isel_doc_id | long |
| ii_test | int |
| iSel_doc_mod | string |
| docref | string |
| ic_typ | char |
| is_routparam | string |
| is_action | string |
| is_blramcode | string |
| is_itemfantom | string |
| iBl_ramcode | string |
| iw_bomroutmod | boolean |
| iAltRouting | boolean |
| ii_hasmain | int |
| ii_classX | int |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| coitem_delete() | public | Suppression |
| doc_refresh() | public | Rafraichit l'affichage |
| refresh() | public | Rafraichit l'affichage |
| refreshlin() | public | Rafraichit l'affichage |
| refreshcoitem() | public | Rafraichit l'affichage |
| refreshdoc() | public | Rafraichit l'affichage |
| wf_refreshcost() | public | Rafraichit l'affichage |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_refreshextra() | public | Rafraichit l'affichage |
| wf_extra_delete() | public | Suppression |
| wf_audit4delete() | public | Suppression |
| wf_bldelete() | public | Suppression |
| wf_bladd() | public | Ajout |
| wf_replace_fantome() | public | Remplacement de chaine |
| wf_rout_ldelete() | public | Suppression |
| wf_main_managing() | public | Calcule/retourne wf_main_managing |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
