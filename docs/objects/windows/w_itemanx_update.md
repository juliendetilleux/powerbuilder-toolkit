# w_itemanx_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Itemanx - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| NewLot2create | Boolean |
| Itemadsup | long |
| adsupcurr | string |
| adsupum | string |
| adsupactiv | string |
| Sel_quotesup | Long |
| Sel_doc_mod | string |
| ilong_itemadcus | long |
| is_itlang | string |
| Action | String |
| ii_Ret | Integer |
| il_ItemAdSup | long |
| iboo_Transact | Boolean |
| is_WithAm | String |
| is_ItSale | String |
| is_itemid | string |
| ib_refreshtab | boolean |
| idddw_itwebtype2 | DataWindowChild |
| ib_subgrps | Boolean |
| iSel_quote_id | long |
| isel_smt | string |
| iw_parent | w_window |
| is_QCCHCKPSW | string |
| ib_qual_modified | boolean |
| iSel_itemad_id | long |
| iadcurr | string |
| iadum | string |
| ilinkitad_Selected_lktyp | string |
| il_sel_disc | long |
| is_LBLPROC2 | string |
| is_MODUNITITEM | string |
| is_auditmodunit | string |
| is_type_WMS | string |

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
| wf_check_audit() | public | Validation |
| wf_deleteall() | public | Suppression |
| wf_visibility() | public | Traitement wf_visibility |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| rbuttondown | Evenement rbuttondown |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
| ue_keypressed | Evenement personnalise ue_keypressed |
