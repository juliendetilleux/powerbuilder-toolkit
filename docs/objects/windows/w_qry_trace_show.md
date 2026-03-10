# w_qry_trace_show

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _query
- **Description**: Trace show (Requetes)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_posxsep | Integer |
| il_handleav | Long |
| is_lot | String |
| is_Tv | String |
| is_SupLot | String |
| is_AdId | String |
| iboo_SupLot | Boolean |
| is_ItId | String |
| is_CusLot | String |
| iboo_CusLot | Boolean |
| il_salhead | long |
| il_salline | long |
| il_shiphead | long |
| ib_withqty | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_tracaval(integer ai_traclev, string as_lot, integer ai_cpt) | public | Traitement wf_tracaval |
| build_tree4print(long al_handle, uo_treeview as_tree) | public | Impression |
| wf_tracamont(integer ai_traclev, string as_lot, integer ai_cpt) | public | Traitement wf_tracamont |
| wf_suplot_trace(string as_suplot, string as_adid, string as_itid) | public | Traitement wf_suplot_trace |
| wf_tracaval_kit(integer ai_traclev, integer ai_cpt) | public | Traitement wf_tracaval_kit |
| wf_fill_ds(long al_handle, ref nv_datastore ads_store, ref uo_treeview atr_treeview, long al_level) | public | Verifie wf_fill_ds |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| ue_editchange | Evenement personnalise ue_editchange |
| getfocus | Evenement getfocus |
| doubleclicked | Double-clic sur la fenetre |
| mousemove | Deplacement de la souris |
| mouseup | Clic souris relache |
| rbuttondown | Evenement rbuttondown |
