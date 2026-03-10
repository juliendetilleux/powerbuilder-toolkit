# w_bcd_lot_qty

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Lots qty (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| st_info_recept | struct_info_recept |
| st_info_recept_return | struct_info_recept |
| s_balance | s_getweight_rs232_param |
| is_itum | string |
| is_bizerba | string |
| ii_ETIPRI | int |
| is_ETIPRI | string |
| is_MSLOTSUPP | string |
| is_itlot | string |
| il_itval | long |
| ii_RemVal | int |
| is_ITUMTRF | string |
| is_itisumtarif | string |
| is_LBCMFG | string |
| is_LBCPUR | string |
| is_BCDEXPEAN | string |
| is_BCDSHIPEANSL | string |
| is_BCDSHPEANDTL | string |
| is_espera | string |
| is_LBLPROC2 | string |
| idec_ItBcQty | Decimal |
| is_ItBcdWeightSal | String |
| invo_alwegen | nvo_alwegen |
| is_CONTPREPA | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_showerror(string as_msg) | public | Affichage |
| wf_f9() | public | Traitement wf_f9 |
| wf_f11() | public | Traitement wf_f11 |
| wf_f12() | public | Traitement wf_f12 |
| wf_inputok(boolean ab_showmessage) | public | Verifie wf_inputok |
| wf_filter() | public | Applique un filtre |
| wf_check_loorgcode(string as_item, datetime adt_remdate) | public | Validation |
| wf_retrieve(datetime adt_remrefdate) | public | Recupere les donnees |
| wf_f8() | public | Traitement wf_f8 |
| wf_findfunction(string as_lot, string as_item, string as_adcode, keycode key, ref string as_codefunct) | public | Recherche |
| wf_check_qty(string as_qty) | public | Validation |
| wf_showconfirm(string as_msg) | public | Affichage |
| wf_f7() | public | Traitement wf_f7 |
| wf_opencolisage() | public | Ouverture |
| wf_mustcheck_dlc(string as_adcode, string as_item, string as_lot, boolean ab_locode) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| getfocus | Evenement getfocus |
| ue_keypressed | Evenement personnalise ue_keypressed |
| losefocus | Evenement losefocus |
