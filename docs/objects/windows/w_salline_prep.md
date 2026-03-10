# w_salline_prep

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Salline prep (Ventes)

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
| is_INVEXPCPT | string |
| is_EXPPREP1 | string |
| il_SetRow | Long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| check_tr() | public | Validation |
| save_tr() | public | Sauvegarde les donnees |
| wf_duplicate() | public | Traitement wf_duplicate |
| wf_printlabel(boolean autoprint) | public | Impression |
| autoallocate_withoutstock(string ordrtyp, long ordrno, long ordrlin, string item, integer lastalloc, decimal qtyrequired, string lot, string lorgcode, string loc, datetime adt_dlc) | public | Verifie autoallocate_withoutstock |
| wf_check_dateperiod() | public | Validation |
| wf_verify() | public | Calcule/retourne wf_verify |
| wf_get_shipto(ref long al_shipto[]) | public | Retourne shipto |
| wf_expedition(long al_shipto[]) | public | Traitement wf_expedition |
| autoallocate_withstock(string ordrtyp, long ordrno, long ordrlin, string item, integer lastalloc, decimal qtyrequired, string as_lot, string as_lotorigin, string as_loc) | public | Verifie autoallocate_withstock |
| wf_mustcheck_dlc() | public | Validation |
| wf_setrow(long al_row) | public | Definit row |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| ue_keypressed | Evenement personnalise ue_keypressed |
| getfocus | Evenement getfocus |
| losefocus | Evenement losefocus |
| rbuttondown | Evenement rbuttondown |
