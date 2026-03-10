# w_gpurchase

- **Type**: Window
- **Ancetre**: w_response_purch
- **Module**: _purch
- **Description**: Gpurchase (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| ls_testtri | string |
| ls_testtri2 | string |
| screenfilter | string |
| is_filter | string |
| is_choixfilter | string |
| ib_cherche | boolean |
| filterstring | string |
| is_Sel_AdId | String |
| is_APPROBIVY | string |
| is_phaut | string |
| is_pathpdf | string |
| iSel_purlstlin | int |
| iSel_purtyp | string |
| iSel_ordr_status | string |
| is_MULTICO | string |
| is_type_WMS | string |
| is_typ_STAROTRANS | string |
| id_qtyrec | decimal |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| refresh() | public | Rafraichit l'affichage |
| refreshlin() | public | Rafraichit l'affichage |
| filteritem() | public | Applique un filtre |
| wf_purgline_close() | public | Fermeture |
| wf_purghead_close() | public | Fermeture |
| wf_toapprob() | public | Traitement wf_toapprob |
| wf_cancel_update() | public | Mise a jour |
| wf_close_update() | public | Mise a jour |
| wf_selectpurord(long al_purid) | public | Selection |
| wf_send_wms() | public | Envoi |
| wf_envoy_purghead() | public | Traitement wf_envoy_purghead |
| wf_unenvoy_purline() | public | Traitement wf_unenvoy_purline |
| waf_refresh() | public | Rafraichit l'affichage |
| wf_confirm_purline() | public | Traitement wf_confirm_purline |
| wf_unconfirm_purline() | public | Traitement wf_unconfirm_purline |
| wf_confirm_purhead() | public | Traitement wf_confirm_purhead |
| wf_unconfirm_purhead() | public | Traitement wf_unconfirm_purhead |
| wf_envoy_purline() | public | Traitement wf_envoy_purline |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
| constructor | Constructeur |
