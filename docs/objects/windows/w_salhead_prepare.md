# w_salhead_prepare

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Salhead prepare (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_filter | string |
| il_shcode_sel | long |
| is_adcode | string |
| is_ColName | string |
| ScreenFilter | string |
| fullfilter | String |
| ii_ETIPRI | int |
| id_Sel_TruckDate | date |
| iSel_truck | long |
| il_Sel_TckLCode | long |
| ii_Sel_TckLLine | long |
| il_tlsalhead | long |
| is_ITUMTRF | string |
| is_allocall | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| wf_refresh() | public | Rafraichit l'affichage |
| wf_f(integer ai_f) | public | Traitement wf_f |
| wf_reordertruck(long truckid, boolean withpreretrieve) | public | Traitement wf_reordertruck |
| wf_truckline_del() | public | Traitement wf_truckline_del |
| wf_truckline_delcmd() | public | Traitement wf_truckline_delcmd |
| truck_refresh() | public | Rafraichit l'affichage |
| truck_alloc(long al_salorder, long al_salline, integer ai_turnhead, integer ai_turnline) | public | Traitement truck_alloc |
| wf_sales_truck_alloc() | public | Traitement wf_sales_truck_alloc |
| wf_custautoalloc() | public | Verifie wf_custautoalloc |
| wf_orderautoalloc(boolean lb_with_enddate) | public | Verifie wf_orderautoalloc |
| wf_allautoalloc() | public | Verifie wf_allautoalloc |
| wf_salord_alloc_print(string ras_oneorder) | public | Impression |
| wf_sale_refresh() | public | Rafraichit l'affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
| ue_keypressed | Evenement personnalise ue_keypressed |
| dragdrop | Depot de glisser-deposer |
