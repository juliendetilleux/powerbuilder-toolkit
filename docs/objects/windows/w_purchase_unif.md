# w_purchase_unif

- **Type**: Window
- **Ancetre**: w_response_purch
- **Module**: _purch
- **Description**: Achats unif

## Variables d'instance

| Variable | Type |
|----------|------|
| ls_testtri | string |
| ls_testtri2 | string |
| screenfilter | string |
| il_Contract | long |
| is_ContractRef | string |
| idt_datreq | datetime |
| is_APPROBIVY | string |
| is_phaut | string |
| is_pathpdf | string |
| id_qtyrec | decimal |
| iSel_adresse_id | string |
| iSel_purlstlin | int |
| iSel_ordr_Status | string |
| is_MULTICO | string |
| is_usdefaultmcdo | string |
| is_ustyp | string |
| is_MULCOCNTR | string |
| ii_purhead_rowid | integer |
| ii_purline_rowid | integer |
| is_type_WMS | string |
| isel_plcontract | long |
| is_filter | string |
| is_choixfilter | string |
| ib_cherche | boolean |
| filterstring | string |
| is_Sel_AdId | String |
| iSel_purtyp | string |
| ib_commande_production | boolean |
| ib_commande_general | boolean |
| is_typ_STAROTRANS | string |
| is_HeadType | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| refresh() | public | Rafraichit l'affichage |
| refreshlin() | public | Rafraichit l'affichage |
| filteritem() | public | Applique un filtre |
| purline_close() | public | Fermeture |
| purline_null() | public | Traitement purline_null |
| wf_close_purhead() | public | Fermeture |
| wf_cancel_purhead() | public | Traitement wf_cancel_purhead |
| wf_toapprob() | public | Traitement wf_toapprob |
| wf_confirm_purhead() | public | Traitement wf_confirm_purhead |
| wf_confirm_purline() | public | Traitement wf_confirm_purline |
| wf_unconfirm_purline() | public | Traitement wf_unconfirm_purline |
| wf_unconfirm_purhead() | public | Traitement wf_unconfirm_purhead |
| wf_verif_shipto() | public | Verifie wf_verif_shipto |
| wf_envoy_purhead() | public | Traitement wf_envoy_purhead |
| wf_envoy_purline() | public | Traitement wf_envoy_purline |
| wf_unenvoy_purhead() | public | Traitement wf_unenvoy_purhead |
| wf_unenvoy_purline() | public | Traitement wf_unenvoy_purline |
| waf_refresh() | public | Rafraichit l'affichage |
| wf_create_edi_purchase() | public | Creation |
| wf_send_wms() | public | Envoi |
| refreshlin_general() | public | Rafraichit l'affichage |
| wf_purgline_close() | public | Fermeture |
| get_islpuroed() | public | Calcule/retourne get_islpuroed |
| wf_commande_general_selected() | public | Selection |
| wf_commande_porduction_selected() | public | Selection |
| wf_headmodify() | public | Traitement wf_headmodify |
| wf_purhead_closeall() | public | Fermeture |
| wf_print_option(boolean aboo_visible) | public | Impression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| getfocus | Evenement getfocus |
