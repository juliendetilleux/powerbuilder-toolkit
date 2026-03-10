# w_item_customize

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Articles customize (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| iSel_item_id | String |
| NewLot2create | Boolean |
| Itemadsup | long |
| adsupcurr | string |
| adsupum | string |
| adsupactiv | string |
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
| red | string |
| green | string |
| grey | string |
| white | string |
| is_colname | string |
| is_coltype | string |
| ids_cust_spec | nv_datastore |
| is_FREEZART | string |
| is_BCDBUYER | string |
| COLOR_Obligatoire | Long (constant) |
| COLOR_Invisible | Long (constant) |
| COLOR_Inaccessible | Long (constant) |
| COLOR_Normal | Long (constant) |
| COLOR_Intouchable | Long (constant) |
| iSel_quote_id | decimal |
| Sel_quotesup | decimal |
| iSel_smt | string |
| iw_parent | w_window |
| iSel_itemad_id | long |
| iadcurr | string |
| iadum | string |
| ilinkitad_Selected_lktyp | string |
| il_sel_disc | long |
| is_ITEMCONT | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| iteminputok() | public | Verifie iteminputok |
| acceptall() | public | Traitement acceptall |
| wf_umborder_init(integer ai_altummod) | public | Initialisation |
| wf_altmeas_update() | public | Mise a jour |
| popup(dwobject dwo) | public | Calcule/retourne popup |
| paint() | public | Calcule/retourne paint |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| ue_keypressed | Evenement personnalise ue_keypressed |
