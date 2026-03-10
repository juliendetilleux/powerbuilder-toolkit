# w_item_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Articles - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| iSel_item_id | String |
| NewLot2create | Boolean |
| Itemadsup | long |
| adsupcurr | string |
| adsupum | string |
| adsupactiv | string |
| Sel_quotesup | decimal |
| iSel_quote_id | decimal |
| Sel_quotecus | Long |
| Sel_doc_mod | string |
| ilong_itemadcus | long |
| is_itlang | string |
| Action | String |
| ii_Ret | Integer |
| il_ItemAdSup | long |
| iboo_Transact | Boolean |
| is_WithAm | String |
| is_ItSale | String |
| is_com_controled | String |
| ai_selconsign | Integer |
| is_progitpack | string |
| is_olditpol | string |
| is_bhtype | string |
| ib_method | boolean |
| is_taxt | string |
| is_labeldir | string |
| idwc_winprinteritemof | datawindowchild |
| idwc_winprintergroof | datawindowchild |
| idwc_winprinterpalof | datawindowchild |
| is_CONTPREPA | string |
| ib_monitoring | Boolean |
| ib_M_changes_allowed | Boolean |
| ii_itum_seq | Integer |
| idddw_itcat | DataWindowChild |
| ls_dwo_name | string |
| ib_subgrps | Boolean |
| idwc_itwebtype1 | DataWindowChild |
| idwc_itwebtype2 | DataWindowChild |
| is_FREEZART | string |
| is_BCDBUYER | string |
| isel_smt | string |
| iw_parent | w_window |
| is_QCCHCKPSW | string |
| ib_qual_modified | boolean |
| iSel_itemad_id | long |
| iadcurr | string |
| iadum | string |
| ilinkitad_Selected_lktyp | string |
| il_sel_disc | long |
| is_ITUMTRF | string |
| is_MONITORNG | string |
| is_FREEZABLE | string |
| is_QUICKALLOC | string |
| is_ITEMCONT | string |
| ii_InterCoNbr | Integer |
| is_LBLPROC2 | string |
| is_ITAUTINACTIV | String |
| is_MODUNITITEM | string |
| is_auditmodunit | string |
| im_ad | string |
| im_adname | string |
| im_it | string |
| im_itname | string |
| ls_itsal | string |
| is_type_WMS | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| iteminputok() | public | Verifie iteminputok |
| acceptall() | public | Traitement acceptall |
| comment_prepare(string cokey) | public | Traitement comment_prepare |
| setpreferedsup() | public | Traitement setpreferedsup |
| smtlink_refresh() | public | Rafraichit l'affichage |
| smtlink_delete() | public | Suppression |
| doc_refresh() | public | Rafraichit l'affichage |
| disc_delete() | public | Suppression |
| wf_umborder_init(integer ai_altummod) | public | Initialisation |
| wf_altmeas_update() | public | Mise a jour |
| visible(integer ai_visible) | public | Traitement visible |
| adapt_visibility(string as_field, string as_value) | public | Traitement adapt_visibility |
| wf_del_item_bomline(string as_item) | public | Verifie wf_del_item_bomline |
| color_comment() | public | Traitement color_comment |
| wf_deleteconsign() | public | Suppression |
| wf_insertconsign() | public | Ajout |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_check_inbom(string as_item) | public | Validation |
| wf_method_access() | public | Traitement wf_method_access |
| wf_picture() | public | Verifie wf_picture |
| wf_refresh_tax() | public | Rafraichit l'affichage |
| wf_etiof_access() | public | Traitement wf_etiof_access |
| wf_setpicture() | public | Definit picture |
| wf_deletepicture() | public | Suppression |
| wf_monitoring(boolean ab_monitoring) | public | Calcule/retourne wf_monitoring |
| wf_selecttab_qua() | public | Selection |
| wf_gen_eancode() | public | Traitement wf_gen_eancode |
| wf_check_audit() | public | Validation |
| wf_deleteall() | public | Suppression |
| wf_creation_fichier_article() | public | Traitement wf_creation_fichier_article |
| wf_load_logolink() | public | Charge les donnees |
| wf_save_logolink() | public | Sauvegarde les donnees |
| wf_set_instance_authority() | public | Definit instance_authority |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
| ue_keypressed | Evenement personnalise ue_keypressed |
