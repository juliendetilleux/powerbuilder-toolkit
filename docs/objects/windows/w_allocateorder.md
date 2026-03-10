# w_allocateorder

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Allocateorder (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| isel_wcseq | long |
| i_issuedQty | double |
| Is_Ittyp | string |
| is_bom_coitem | string |
| il_Mfg_id | long |
| is_mfgtyp | string |
| is_bomtyp | string |
| is_item | string |
| is_mhtype | string |
| is_mloneemp | string |
| is_mlloc | string |
| is_It_Sel_id | string |
| is_It_Sel_typ | string |
| iw_parent | w_window |
| isel_itemseq | int |
| il_Last_allocseq | int |
| iSel_allocseq | int |
| iNeededQty | decimal |
| iSel_allocQty | decimal |
| iSel_allocLot | string |
| iSel_allocLoc | string |
| iAllocWay | string |
| Is_FIFO | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| refresh() | public | Rafraichit l'affichage |
| refreshlin() | public | Rafraichit l'affichage |
| alloc_delete() | public | Suppression |
| alloc_lineauto() | public | Traitement alloc_lineauto |
| wf_doc_refresh() | public | Rafraichit l'affichage |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_autoallocate(string ordrtyp, long ordrno, long ordrlin, string item, integer lastalloc, decimal qtyrequired, string as_oneemp, string as_loc) | public | Verifie wf_autoallocate |
| wf_delete_wc() | public | Suppression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| losefocus | Evenement losefocus |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
