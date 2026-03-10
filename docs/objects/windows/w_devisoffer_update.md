# w_devisoffer_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _devis
- **Description**: Devisoffer - Mise a jour

## Variables d'instance

| Variable | Type |
|----------|------|
| idwc_Adresse | datawindowchild |
| idwc_Rate | datawindowchild |
| idwc_Contact | datawindowchild |
| idwc_cust | datawindowchild |
| idwc_shipto | datawindowchild |
| idwc_RateLine | datawindowchild |
| lboo_Modify | boolean |
| il_selectline | long |
| iw_parent | w_window |
| ib_flash | boolean |
| ii_flash | int |
| is_ColName | string |
| idec_pvrist | decimal |
| is_CmntTab | string |
| is_lang | string |
| iboo_ManChange | Boolean |
| ii_DelInd | Integer |
| il_OfferId | Long |
| is_Action | String |
| iboo_SuccessPer | Boolean |
| is_table_name | string |
| is_OrdTri | any |
| il_rowright | long |
| is_MULTICO | string |
| is_turntruck | string |
| is_QUICKTRUC | string |
| is_TURNSAL | string |
| is_WithAm | string |
| ibooo_nc | boolean |
| ii_FORMDVI | int |
| lboo_RateHead_Mod | Boolean |
| ii_Shipto | Integer |
| il_Line_Aux | Long |
| is_OffAvDonOrd | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| inputok_head() | public | Calcule/retourne inputok_head |
| wf_norate(ref datawindowchild adwc_rate) | public | Traitement wf_norate |
| wf_modify() | public | Calcule/retourne wf_modify |
| input_line_ok() | public | Verifie input_line_ok |
| wf_delete_line() | public | Suppression |
| wf_checkline(long row) | public | Validation |
| wf_update_line(long al_phcode, datetime adt_creation) | public | Mise a jour |
| wf_sum() | public | Traitement wf_sum |
| wf_modifprice(long row, string as_item, long al_rate, string as_adid, string as_curr, datetime adt_reqdate, decimal adec_qty) | public | Traitement wf_modifprice |
| wf_insertline_2_modify() | public | Ajout |
| wf_setlinetype(long al_row) | public | Definit linetype |
| load_multitri() | public | Charge les donnees |
| wf_reactual() | public | Traitement wf_reactual |
| wf_altmeas_dd_init(long al_row) | public | Initialisation |
| wf_opendevisoffer() | public | Ouverture |
| wf_savedevis() | public | Sauvegarde les donnees |
| wf_add_line_aux() | public | Ajout |
| wf_add_line(string ras_type) | public | Ajout |
| wf_add_line_item(string as_type) | public | Ajout |
| wf_refresh_sortnum() | public | Applique un tri |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| timer | Evenement timer |
| close | Fermeture de la fenetre |
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| losefocus | Evenement losefocus |
