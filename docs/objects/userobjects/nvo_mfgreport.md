# nvo_mfgreport

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _cust2
- **Description**: Objet non-visuel pour les rapports de fabrication (declarations de production, backflush, mouvements de stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_mfhloorgcodetupdate | string |
| il_row | long |
| ib_showmessagebox | boolean |
| is_error | string |
| ib_webservice | Boolean |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_check_serials(string as_item, long an_start, long an_end) : boolean | Public | Verifie les numeros de serie |
| uof_get_coitem_coeff(string as_item, long al_of, decimal an_coefqty, decimal an_coefcost, decimal an_coefnqual) : void | Public | Obtient les coefficients de co-produit |
| uof_check_backflush(long al_ordno) : boolean | Public | Verifie le backflush d'un ordre |
| uof_alloc_immediat(transact astr_transact) : boolean | Public | Allocation immediate |
| uof_make_backflush_utilities(long al_itemseq, string as_item, decimal ad_qty2issue, decimal ad_qtyissued, long al_ordno) : boolean | Public | Execute le backflush des matieres |
| uof_check_backflush_emp_nostock(long al_ordno) : boolean | Public | Verifie le backflush sans stock |
| uof_make_backflush_nostock(...) : boolean | Public | Execute le backflush sans stock |
| uof_resetvariable() : void | Public | Reinitialise les variables |
| uof_make_backflush_fusion(long al_ordno) : boolean | Public | Execute le backflush en mode fusion |
| uof_check_status_rcmo(long al_of, string as_lot) : boolean | Public | Verifie le statut RCMO |
| uof_stock_issue(long al_of, string as_item_issue, decimal ad_qty_orig) : boolean | Public | Sortie de stock |
| uof_print_stock(long al_histoseq) : void | Public | Impression du stock |
| uof_return_dtreq(decimal ad_mhcode) : datetime | Public | Retourne la date requise |
| uof_nullof(boolean ab_interactiv, long al_mfg_id, ...) : integer | Public | Traitement d'OF nul |
| uf_alloc_timeprest(long al_of, string as_error) : boolean | Public | Allocation des temps de prestation |
| uof_delete_wc(long al_of, long al_line) : boolean | Public | Supprime un poste de charge |
| uof_savetr_rtmo() : boolean | Public | Sauvegarde transaction RTMO |
| uof_savetr_dlmo() : boolean | Public | Sauvegarde transaction DLMO |
| uof_search_mindlc_mp(long al_of, datetime adt_dlcmin) : boolean | Public | Recherche DLC minimum MP |
| uof_update_lot_withldcminmp(long al_of, string as_lot, integer ai_dlcmp) : boolean | Public | Met a jour le lot avec DLC min MP |
| uof_search_mindlc_mpalloc(long al_of, string as_item, datetime adt_dlcmin) : boolean | Public | Recherche DLC min MP allouee |
| uof_autorcmo(long al_mfgcode) : boolean | Public | Reception automatique d'OF |
| uof_save_transact_rcmo(transact astr_transact, boolean ab_coitem, long an_starsernum, long an_endsernum) : boolean | Public | Sauvegarde transaction RCMO |
| uof_make_backflush(...) : boolean | Public | Execute le backflush |
| uof_coitem_mp(...) : boolean | Public | Traitement co-produit MP |

## Evenements

Aucun evenement personnalise.
