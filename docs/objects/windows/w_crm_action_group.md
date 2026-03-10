# w_crm_action_group

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_crm
- **Description**: Actions groupes (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_count_fields | long |
| is_origin_select_merge | string |
| itab_fields | string |
| tab2 | string |
| appdir | string |
| iole_word | OLEObject |
| is_fichierDot | String |
| il_taille_tab_doublon | long |
| is_SelItem | string |
| is_selection | string |
| idwc1 | dataWindowChild |
| templatedir | string |
| rtn | int |
| icbx_null | uo_checkbox |
| istr_return | s_sqlsearch_return |
| istr_empty | s_sqlsearch_return |
| is_mccode | String |
| is_desc | String |
| is_com | String |
| ii_timing | integer |
| is_fact | String |
| ii_repet | integer |
| il_sousprojet | long |
| itime | Time |
| is_costtype | String |
| il_preavi | long |
| ids_userstimesheet | nv_datastore |
| ii_grouptyp | int |
| ii_time_index | int |
| idt_datestart | datetime |
| idt_datestop | datetime |
| idt_actiondate | datetime |
| idt_datestartmin | datetime |
| idt_datestopmax | datetime |
| is_users | string |
| is_usersname | string |
| ib_agenda | boolean |
| uo_mail | nvo_mail |
| ib_mailsend | boolean |
| is_fkey | string |
| is_MULTICO | string |
| is_sqlselect | s_sqlselect |
| is_basicSqlSelect | string |
| is_Action | String |
| ib_canfilter | boolean |
| AdressNameFilter | string |
| idwc_Group | DataWindowChild |
| is_BDBADRS | string |
| SqlSelect | String |
| SqlSelect_shipto | String |
| is_code | string |
| iSel_adresse_id | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_retrieve_sqlfilters() | public | Applique un filtre |
| wf_numgroup() | public | Calcule/retourne wf_numgroup |
| wf_date_by_num(integer ai_annee, integer ai_mois, integer ai_numjour, integer ai_numsem) | public | Fonction wf_date_by_num |
| wf_create_action_daily(datetime dat, integer ai_nbocc, integer i) | public | Creation |
| wf_create_action_weekly(datetime dat, integer ai_nbjoursuiv, integer ai_nbocc, integer i) | public | Creation |
| wf_create_action_yearly(datetime dat, integer ai_nbocc, integer i) | public | Creation |
| wf_create_action_monthly(datetime dat, integer ai_nbocc, integer i) | public | Creation |
| wf_create_actions(datetime ad_date, integer ai_group) | public | Creation |
| wf_change_day(datetime adt_day) | public | Modification |
| wf_check_selectedtimes(datetime adt_start, time at_length) | public | Validation |
| wf_datastore_actionsbyuser_create() | public | Creation |
| wf_dwday_availabilities() | public | Verifie wf_dwday_availabilities |
| wf_dwday_create() | public | Creation |
| wf_dwday_fill() | public | Verifie wf_dwday_fill |
| wf_dwday_selectrows() | public | Selection |
| wf_dwday_visual() | public | Verifie wf_dwday_visual |
| wf_window_visual() | public | Traitement wf_window_visual |
| filteradresse() | public | Applique un filtre |
| arrange(string as_diffretrieve) | public | Reorganisation |
| wf_visibiltyf(boolean ab_visible) | public | Traitement wf_visibiltyf |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_postopen | Evenement personnalise ue_postopen |
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
| losefocus | Evenement losefocus |
| ue_after_itemchanged | Evenement personnalise ue_after_itemchanged |
