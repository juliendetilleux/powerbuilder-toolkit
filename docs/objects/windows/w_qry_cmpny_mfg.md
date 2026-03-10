# w_qry_cmpny_mfg

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _query
- **Description**: Cmpny fabrication (Requetes)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_qry_it | string |
| is_item | string |
| is_filter | string |
| ScreenFilt | string |
| FilterString | string |
| histmfgitem | string |
| GraphMfg | Long |
| QCIP | long |
| ldt_hist_start | datetime |
| ldt_open_start | datetime |
| ldt_plan_start | datetime |
| ldt_accises_start | datetime |
| histdatchanged | boolean |
| SelectedMfg | Long |
| iboo_MfgCurRet | Boolean |
| iboo_MfgPlanRet | Boolean |
| iboo_MfgHistoRet | Boolean |
| iboo_WcLoadRet | Boolean |
| iboo_WcUseRet | Boolean |
| iboo_TreeNomRet | Boolean |
| is_TestTri | String |
| ii_SelectTab | Int |
| is_InfoOpen | String |
| is_InfoPlan | String |
| is_PDC | String |
| isTabOpen_OpenOrdTri | Any |
| isTabPlan_OpenOrdTri | Any |
| ii_index | int |
| istr_specific | gstr_specific |
| is_workcenters | String |
| il_workcenters | Long |
| is_wcname | String |
| ib_first_wc | Boolean |
| idddw_OF1 | DataWindowChild |
| is_usbomright | string |
| is_ustyp | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| show_graph(string sel_item, datetime startdat, datetime stopdat) | public | Affichage |
| create_tv(string itcode, string itname, string itum) | public | Creation |
| draw_wcload(string wc) | public | Charge les donnees |
| build_tree4print(long al_handle, uo_treeview atv_tree) | public | Impression |
| printmfgcost() | public | Impression |
| printmfgitems() | public | Impression |
| printmfgsmt() | public | Impression |
| wf_checkauthority() | public | Validation |
| wf_doc_refresh() | public | Rafraichit l'affichage |
| load_multitri() | public | Charge les donnees |
| printipqc() | public | Impression |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_refresh_index() | public | Rafraichit l'affichage |
| wf_get_parameters(ref gstr_specific astr_specific[]) | public | Retourne parameters |
| wf_set_parameters(gstr_specific astr_specific[]) | public | Definit parameters |
| wf_set_zero() | public | Definit zero |
| wf_get_array(ref string as_array[], string as_type) | public | Retourne array |
| wf_set_array(string as_array[], string as_type) | public | Definit array |
| wf_set_ddlb_items(uo_dropdownlistbox addlb_target, string as_values[]) | public | Definit ddlb_items |
| wf_print_mfgmes() | public | Impression |
| printmfgwk() | public | Impression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| ue_filter | Evenement personnalise ue_filter |
| ue_graph | Evenement personnalise ue_graph |
| rbuttondown | Evenement rbuttondown |
