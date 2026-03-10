# w_sales_allocate

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Ventes allocate

## Variables d'instance

| Variable | Type |
|----------|------|
| Sel_row | Long |
| is_autho | string |
| is_contst | string |
| ibo_isallowed | boolean |
| isel_row | long |
| isel_custord | long |
| isel_itemseq | long |
| iit_sel_id | string |
| ls_testtri | string |
| isel_adresse_id | string |
| screenfilter | string |
| is_filter | string |
| is_choixfilter | string |
| ib_numbersearch | boolean |
| filterstring | string |
| isel_allocseq | long |
| isel_allocqty | decimal |
| isel_alloclot | string |
| isel_allocloc | string |
| il_Last_allocseq | long |
| id_Sel_TruckDate | Date |
| il_seltruck | long |
| il_Sel_TckLCode | Long |
| ii_Sel_TckLLine | Long |
| idt_Sel_ShipDat | DateTime |
| ii_shipto_id | integer |
| ii_Horz | Integer |
| isTaballoc_Ordtri | Any |
| is_remanenceRefDateType | string |
| il_tlsalhead | long |
| is_allocall | string |
| ib_printhorizonday | boolean |
| iNeededQty | decimal |
| iSel_truck | long |
| is_itisumtarif | string |
| is_ITUMTRF | string |
| is_CHOICTRUK | string |
| is_TURNTRUK1 | string |
| ib_windows_active | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| alloc_delete() | public | Suppression |
| alloc_auto() | public | Traitement alloc_auto |
| truck_refresh() | public | Rafraichit l'affichage |
| truck_alloc_line() | public | Traitement truck_alloc_line |
| truck_alloc_order() | public | Traitement truck_alloc_order |
| filteritem() | public | Applique un filtre |
| refresh() | public | Rafraichit l'affichage |
| refreshlin() | public | Rafraichit l'affichage |
| wf_truckline_del() | public | Traitement wf_truckline_del |
| wf_allautoalloc() | public | Traitement wf_allautoalloc |
| wf_init_instvar(long al_row) | public | Initialisation |
| wf_orderautoalloc() | public | Traitement wf_orderautoalloc |
| wf_custautoalloc() | public | Traitement wf_custautoalloc |
| wf_reordertruck(long truckid, boolean withpreretrieve) | public | Traitement wf_reordertruck |
| truck_alloc(long choosen_row, integer ai_turnhead, integer ai_turnline) | public | Traitement truck_alloc |
| loadmultitri() | public | Charge les donnees |
| wf_bcd_lineprep() | public | Traitement wf_bcd_lineprep |
| wf_truckline_delcmd() | public | Traitement wf_truckline_delcmd |
| wf_salord_alloc_print(string ras_oneorder) | public | Impression |
| wf_salline_alloc_print(string ras_oneline) | public | Impression |
| wf_bon_enlevement_print() | public | Impression |
| wf_fiche_daa_print() | public | Impression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| activate | Activation de la fenetre |
| timer | Evenement timer |
| deactivate | Desactivation de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| dragdrop | Depot de glisser-deposer |
| doubleclicked | Double-clic sur la fenetre |
