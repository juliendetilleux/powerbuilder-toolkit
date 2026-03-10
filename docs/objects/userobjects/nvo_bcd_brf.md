# nvo_bcd_brf

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _cust2
- **Description**: Objet non-visuel metier pour le traitement des codes-barres (preparation expedition, declaration fabrication, inventaire, picking, colisage, mouvements de stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_typ_parent | int |
| ii_ordline | int |
| ii_shipto | int |
| il_OrdNo | long |
| uniqueid | long |
| is_qtyctrlprm | string |
| is_flag | string |
| is_itum | string |
| is_Item | string |
| is_ItemName | string |
| is_itdefaultloc | string |
| is_lot | string |
| is_item_bcd_auto | string |
| is_custref | string |
| is_custid | string |
| is_adname | string |
| is_mfgrprtlabel | string |
| is_mfgrprtloc | string |
| is_worker_name | string |
| is_worker | string |
| id_stdval | decimal |
| id_reqqty | decimal |
| id_qtymax | decimal |
| id_mfgqty | decimal |
| id_item_qty | decimal |
| id_itstock | decimal |
| id_italloc | decimal |
| id_qty2prep | decimal |
| it_expdat | datetime |
| il_salorder | long |
| il_salline | long |
| is_pallet | string |
| is_crate | string |
| ib_qty | boolean |
| Msg_Error | String |
| Msg_no_use | String |
| Msg_no_order | String |
| Msg_of_close | String |
| Msg_no_Item | String |
| Msg_no_lot | String |
| Msg_no_loc | String |
| Msg_nul_order | String |
| Msg_no_qty | String |
| Msg_miss_qty | String |
| Msg_Lot_QC | String |
| Msg_Lot_Exp | String |
| Msg_Lot_alloc | String |
| Msg_2much | String |
| Msg_Lot_read | String |
| Msg_Lot_ResExp | String |
| Conf_Cancel | String |
| Conf_Qty | String |
| Msg_no_loc_activate | String |
| Msg_loc_same | String |
| is_Oper_User | String |
| lnvo_colisage | nvo_colisage |
| ib_processcrate | boolean |
| il_row | long |
| ib_shipprepare_makeissue | boolean |
| ib_showmessage | boolean |
| is_wcname | string |
| il_mfgwcreqs_line | long |
| is_nonprod | string |
| is_woopid | string |
| is_type | string |
| is_hjcomnt | string |
| is_hjjob | string |
| is_transaction | string |
| is_tiimp | string |
| is_mccode | string |
| is_loc_forced | string |
| ib_printpal | boolean |
| ii_pick_tuple | int |
| is_MFGPREMES | string |
| il_mwline | long |
| is_mwwccode | string |
| is_mwname | string |
| ii_fromksb | integer |
| ib_webservice | Boolean |
| il_ws_qty | Decimal |
| is_ws_cmnt | String |
| is_ws_empl | String |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| ship_prepare(string, integer, integer) : integer | Public | Preparation d'expedition |
| ship_prepare_cust(string, integer, integer) : integer | Public | Preparation expedition par client |
| uof_ship_prepare_check_custorder(string) : boolean | Public | Verifie la commande client |
| uof_ship_prepare_check_lot(integer) : integer | Public | Verifie le lot pour expedition |
| uof_ship_prepare_make_ship_alloc() : boolean | Public | Cree l'allocation d'expedition |
| uof_ship_prepare_check_of(string) : integer | Public | Verifie l'OF pour expedition |
| uof_ship_prepare_check_purhead(string) : integer | Public | Verifie l'en-tete achat |
| uof_ship_prepare_check_cust(string) : integer | Public | Verifie le client |
| uof_ship_prepare_make_receipt(long) : string | Public | Cree la reception |
| uof_ship_prepare_check_item(string, integer) : integer | Public | Verifie l'article |
| uof_ship_prepare_consigne(string) : integer | Public | Traite la consigne |
| uof_ship_prepare_backflush() : integer | Public | Backflush expedition |
| mfg_prepare(string, integer, integer) : integer | Public | Preparation fabrication |
| mfg_prepare2(string, integer, integer) : integer | Public | Preparation fabrication v2 |
| mfg_report(string, integer, integer) : integer | Public | Declaration fabrication |
| mfg_report2(string, integer, integer) : integer | Public | Declaration fabrication v2 |
| mfg_report_user(string, integer, integer) : integer | Public | Declaration fabrication utilisateur |
| mfg_progress(string, integer, integer) : integer | Public | Suivi avancement fabrication |
| mfg_quality(string, integer, integer) : integer | Public | Controle qualite fabrication |
| mfg_addsupp_wc(string, integer, integer) : integer | Public | Ajout poste de charge supplementaire |
| stock_inv(string, integer, integer) : integer | Public | Inventaire de stock |
| stock_move(string, integer, integer) : integer | Public | Mouvement de stock |
| stock_move_group(string, integer, integer) : integer | Public | Mouvement de stock groupe |
| stock_move_backflush(string, integer, integer) : integer | Public | Mouvement backflush |
| picking(string, integer) : integer | Public | Picking |
| colisage(string, integer, integer) : integer | Public | Colisage |
| colisage2(string, integer, integer) : integer | Public | Colisage v2 |
| containing(string, integer, integer) : integer | Public | Contenance |
| transaction(string, integer, integer) : integer | Public | Transaction de stock |
| tictrl(string, integer, integer) : integer | Public | Controle de pointage |
| lot(string, integer, integer) : integer | Public | Gestion des lots |
| uof_loc(string, integer, integer) : integer | Public | Gestion des emplacements |
| uof_item(string, integer, integer) : integer | Public | Gestion des articles |
| uof_showerror(string) : void | Public | Affiche une erreur |
| uof_showconfirm(string) : boolean | Public | Affiche une confirmation |
| uof_show_question(string) : boolean | Public | Affiche une question |

## Evenements

Aucun evenement personnalise.
