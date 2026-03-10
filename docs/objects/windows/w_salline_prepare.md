# w_salline_prepare

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Salline prepare (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_filter | string |
| il_shcode | long |
| il_slline_sel | long |
| curr_row | long |
| is_ColName | string |
| ib_modifi | boolean |
| fromkey | boolean |
| is_adinvm | String |
| isel_cust_id | string |
| ib_drctxpt | Boolean |
| is_print_ne | String |
| is_item | string |
| il_slline | long |
| il_slpallocseq | long |
| id_cprepare | decimal |
| is_ITUMTRF | string |
| is_INVEXPCPT | string |
| is_info | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| check_tr() | public | Validation |
| wf_duplicate() | public | Traitement wf_duplicate |
| wf_printlabel(boolean autoprint) | public | Impression |
| wf_check_dateperiod() | public | Validation |
| wf_verify() | public | Calcule/retourne wf_verify |
| wf_get_shipto(ref long al_shipto[]) | public | Retourne shipto |
| wf_expedition(long al_shipto[]) | public | Traitement wf_expedition |
| wf_refresh() | public | Rafraichit l'affichage |
| wf_allocdelete() | public | Suppression |
| wf_alloc_auto() | public | Traitement wf_alloc_auto |
| wf_alloc_delete(long ll_salcode, long ll_salline, integer li_maallocseq, decimal ld_origqty, string ls_lot, string ls_lccode, string as_lotorigin, boolean ab_inrecursive, boolean ab_confirm) | public | Suppression |
| save_tr() | public | Sauvegarde les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| ue_keypressed | Evenement personnalise ue_keypressed |
| getfocus | Evenement getfocus |
| losefocus | Evenement losefocus |
