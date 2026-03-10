# w_qry_qcrslt

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _query
- **Description**: Qcrslt (Requetes)

## Variables d'instance

| Variable | Type |
|----------|------|
| idwc_test | DataWindowChild |
| is_TestId | String |
| ii_ctrlidopen | long |
| ii_CtrlIdhisto | long |
| ii_SelectTab | Int |
| ii_Indexhisto | Int |
| ii_IndexEvol | Int |
| ii_IndexSpec | Int |
| ii_Versn | Int |
| is_Items | String |
| ib_open | Boolean |
| id_StartOpen | Datetime |
| ib_histo | Boolean |
| id_StartHisto | Datetime |
| ib_evol | Boolean |
| id_StartEvol | Datetime |
| ib_spec | Boolean |
| id_StartSpec | Datetime |
| Linecolor | Long |
| SelectColor | Long |
| SelectCat | Long |
| IsTabOpen_ordtri | ANy |
| id_startdate | Date |
| id_stopdate | Date |
| ib_testsresults_retrieved | Boolean |
| ii_IndexTestRes | integer |
| is_location | string |
| is_filtertestres | string |
| ii_index | int |
| is_qttestid | string |
| is_dw_qry_tests_filter | string |
| ib_w_open | Boolean |
| ii_monitdattyp | integer |
| is_evol_Typ | String |
| is_evol_CliFour | String |
| is_evol_TestId | String |
| is_evol_Items | String |
| idt_evol_datstart | datetime |
| idt_evol_datstop | datetime |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_checkautority() | public | Validation |
| loadmultitri() | public | Charge les donnees |
| wf_refresh_index() | public | Rafraichit l'affichage |
| wf_dw_tests_filter() | public | Applique un filtre |
| wf_filtertests() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
