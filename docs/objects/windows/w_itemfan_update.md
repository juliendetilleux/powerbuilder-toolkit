# w_itemfan_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Itemfan - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| NewLot2create | Boolean |
| Itemadsup | long |
| adsupcurr | string |
| adsupum | string |
| adsupactiv | string |
| Sel_doc_mod | string |
| ilong_itemadcus | long |
| is_itlang | string |
| Action | String |
| ii_Ret | Integer |
| il_ItemAdSup | long |
| iboo_Transact | Boolean |
| is_WithAm | String |
| is_ItSale | String |
| is_itemfantom | String |
| is_com_controled | string |
| iSel_item_id | string |
| iSel_Bom_Line | long |
| bommodified | boolean |
| is_taxt | string |
| is_bhusetdqty | string |
| ib_refreshtab | boolean |
| ls_dwo_name | string |
| idddw_itwebtype2 | DataWindowChild |
| ib_subgrps | Boolean |
| iBl_ramcode | string |
| iw_bomroutmod | boolean |
| iSel_quote_id | decimal |
| Sel_quotesup | decimal |
| isel_smt | string |
| iw_parent | w_window |
| is_QCCHCKPSW | string |
| ib_qual_modified | boolean |
| iSel_itemad_id | long |
| iadcurr | string |
| iadum | string |
| ilinkitad_Selected_lktyp | string |
| il_sel_disc | long |
| is_BCDBUYER | string |
| is_LBLPROC2 | string |
| is_MODUNITITEM | string |
| is_auditmodunit | string |
| is_type_WMS | string |
| is_KitPurch | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| iteminputok() | public | Verifie iteminputok |
| acceptall() | public | Traitement acceptall |
| comment_prepare(string cokey) | public | Traitement comment_prepare |
| adaptsupcus(string column, string newval) | public | Traitement adaptsupcus |
| setpreferedsup() | public | Traitement setpreferedsup |
| smtlink_refresh() | public | Rafraichit l'affichage |
| smtlink_delete() | public | Suppression |
| doc_refresh() | public | Rafraichit l'affichage |
| disc_delete() | public | Suppression |
| wf_altmeas_update() | public | Mise a jour |
| wf_umborder_init(integer ai_altummod) | public | Initialisation |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_bldelete() | public | Suppression |
| wf_audit4delete() | public | Suppression |
| wf_bladd() | public | Ajout |
| wf_refreshcost() | public | Rafraichit l'affichage |
| wf_picture() | public | Verifie wf_picture |
| wf_visible_compta(string as_itsalghost) | public | Traitement wf_visible_compta |
| wf_refresh_tax() | public | Rafraichit l'affichage |
| wf_setpicture() | public | Definit picture |
| wf_deletepicture() | public | Suppression |
| wf_gen_eancode() | public | Traitement wf_gen_eancode |
| wf_check_audit() | public | Validation |
| wf_deleteall() | public | Suppression |
| wf_visibility() | public | Traitement wf_visibility |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| ue_keypressed | Evenement personnalise ue_keypressed |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
