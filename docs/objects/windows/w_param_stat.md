# w_param_stat

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Parametres - Statistiques (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| ib_modif_rcpo_print | Boolean |
| modif_labrun_n | Boolean |
| modif_labtruk_n | boolean |
| modif_defalloc_c | Boolean |
| modif_evalpur_c | Boolean |
| modif_label | Boolean |
| modif_evalmfg_c | Boolean |
| modif_evaltruck_c | Boolean |
| Modif_cons | Boolean |
| modif_shipcost | Boolean |
| Modif_TvaFrais_n | Boolean |
| Modif_TvaDef | Boolean |
| modif_qcaudit | Boolean |
| modif_qsal | Boolean |
| is_audit_yn | String |
| Modif_PreInv | Boolean |
| iboo_Modif_SalHzAlc_i | Boolean |
| Modif_ShipHorizon | Boolean |
| ib_modif_remrefalloc | Boolean |
| ib_modif_clotinvoicelinehorizon | Boolean |
| ib_modif_lastinv_horizon | Boolean |
| iboo_Modif_DviCmnt | Boolean |
| ib_modif_tarif_dec | Boolean |
| ib_modif_tarif_rnd | Boolean |
| modif_printof | boolean |
| modif_valoof | boolean |
| modif_backorder | boolean |
| Modif_eanWeight | boolean |
| modif_factdirectprint | boolean |
| Modif_italttyp | boolean |
| modif_usersys_c | boolean |
| modif_shipreturn | boolean |
| modif_stockreturn | boolean |
| modif_transreturn | boolean |
| modif_printalloc_c | boolean |
| modif_allocall_c | boolean |
| modif_finalprice | boolean |
| modif_orderrist | boolean |
| modif_autopqsal | boolean |
| modif_evalitclot_c | boolean |
| modif_kit | boolean |
| modif_mfggrp | boolean |
| modif_factoring | boolean |
| modif_INVDYMAX | boolean |
| modif_BCDLOCQU_c | boolean |
| modif_EXPDCUML_c | boolean |
| mod_tictrl_pause | Boolean |
| iboo_modif_triprepone | Boolean |
| modif_qurcpack | boolean |
| modif_filterac | boolean |
| ii_index_tarif_rnd | Integer |
| iboo_Modif_DviValidity | Boolean |
| iboo_Modif_DviAutoClot | Boolean |
| iboo_ACTRMINV_c | Boolean |
| iboo_showprest | Boolean |
| iboo_Modif_ConsAss | Boolean |
| is_labeldir | string |
| idwc_winprinteritemof | datawindowchild |
| idwc_winprintergroof | datawindowchild |
| idwc_winprinterpalof | datawindowchild |
| iboo_modif_seecrbal | Boolean |
| iboo_modif_seestock | Boolean |
| iboo_modif_com | Boolean |
| iboo_Modif_DirectSal | Boolean |
| iboo_DirSal_NotClose | Boolean |
| iboo_Modif_NBDMFGCS_i | Boolean |
| ib_Modif_calls01 | Boolean |
| ib_Modif_calls02 | Boolean |
| ib_Modif_calls03 | Boolean |
| ib_Modif_calls04 | Boolean |
| ib_Modif_calls06 | Boolean |
| ib_Modif_calls07 | Boolean |
| iboo_Modif_linkitem | Boolean |
| iboo_Modif_messof | Boolean |
| Modif_ETQOFREC | Boolean |
| Modif_ETQDETQT | Boolean |
| Modif_METHSIM | Boolean |
| ibool_pdf | boolean |
| iboo_Modif_purinvfr | boolean |
| modif_bcdshipp_c | boolean |
| Modif_MSGBOXEXP | boolean |
| Modif_MSGBNEEX | boolean |
| ib_modif_NBLDAYQ_i | boolean |
| ib_modif_NBLDAYQ_c | boolean |
| ib_modif_cdvcust | boolean |
| ib_modif_cdvelec | boolean |
| is_ADVANCSCHED | string |
| ib_ADVSCHD1 | boolean |
| ib_ADVSCHD2 | boolean |
| ib_modif_sallineprep_threshold | boolean |
| iboo_Modif_RATEDVI | boolean |
| iboo_Modif_FORMDVI | boolean |
| iboo_Modif_DefShSum | Boolean |
| ib_prixkm | Boolean |
| iboo_Modif_DviDatReq | Boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| adapt_eti() | public | Traitement adapt_eti |
| wf_directsal_verif() | public | Traitement wf_directsal_verif |
| wf_save_tictrl_pause() | public | Sauvegarde les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| closequery | Verification avant fermeture |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| losefocus | Evenement losefocus |
