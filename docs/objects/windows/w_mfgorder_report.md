# w_mfgorder_report

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Mfgorder - Rapport (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_linechoic | long |
| is_mfgtyp | string |
| il_mfg_id | long |
| il_salhead | long |
| is_itum | string |
| itcode | string |
| id_stdval | dec |
| ib_Retrieve | boolean |
| ib_QCModified | Boolean |
| idwc_Choices | DataWindowChild |
| Is_MergedItem | String |
| MfgedQty | decimal |
| ratio | decimal |
| ii_ETIPPRI | integer |
| QCParaLaunch | String |
| ib_openrcmo | boolean |
| iSel_coitem | string |
| iSel_item_id | string |
| is_it_sel_typ | string |
| iSubC_mfg | string |
| is_DLMOUNEXP | string |
| is_STDSPC | string |
| is_ITUMTRF | string |
| is_AUTOCLPREST | string |
| is_mpfab1 | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| savetr_dlmo() | public | Sauvegarde les donnees |
| tr_coitem_call() | public | Traitement tr_coitem_call |
| import_tictrl() | public | Importation |
| mat_refresh(long sel_mfg) | public | Rafraichit l'affichage |
| doc_refresh() | public | Rafraichit l'affichage |
| savetr_rtmo() | public | Sauvegarde les donnees |
| tr_mergeditem_call() | public | Traitement tr_mergeditem_call |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_initmt() | public | Initialisation |
| wf_check_tr_neg(long ll_row) | public | Validation |
| wf_check_tr(long ll_row) | public | Validation |
| wf_mat_newline() | public | Creation |
| wf_rcmo_detail() | public | Traitement wf_rcmo_detail |
| wf_matproduced_refresh() | public | Rafraichit l'affichage |
| wf_check_clot() | public | Validation |
| wf_return_dtreq(decimal ad_mhcode) | public | Fonction wf_return_dtreq |
| wf_cb_cloture() | public | Traitement wf_cb_cloture |
| waf_refresh() | public | Rafraichit l'affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| losefocus | Evenement losefocus |
| rbuttondown | Evenement rbuttondown |
