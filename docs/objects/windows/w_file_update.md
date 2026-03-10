# w_file_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _projects
- **Description**: Fichiers - Mise a jour (Projets)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_action | string |
| il_filecode | long |
| is_fhstatus | string |
| il_currentAction | long |
| il_currentActionHisto | long |
| il_currentHsseq | long |
| ib_updatable | boolean |
| il_filterfileline | long |
| is_projectstatus | string |
| is_filteruser | string |
| is_invstatus | string |
| ii_action_datetype | integer |
| ii_acthisto_datetype | integer |
| ii_of_datetype | integer |
| ids_services | nv_datastore |
| ib_endopen | boolean |
| is_sel_docmod | string |
| ii_actcharge_datetype | integer |
| il_currentActioncharge | long |
| ii_periodindex | integer |
| il_currjalon | long |
| il_currcond | long |
| il_currcondline | long |
| ii_tabsaldet | int |
| iw_parent | w_window |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh() | public | Rafraichit l'affichage |
| wf_inputok() | public | Calcule/retourne wf_inputok |
| wf_saved() | public | Sauvegarde les donnees |
| wf_action_delete(string as_action_type) | public | Suppression |
| wf_retrieve_all() | public | Recupere les donnees |
| wf_create_fileline() | public | Creation |
| wf_delete_fileline(long al_row) | public | Suppression |
| wf_isempty_subfile(long al_filecode, long al_fileline) | public | Verifie si empty_subfile |
| wf_move_fileline(long al_filecode, long al_fileline, long al_filecode_dest, long al_fileline_dest) | public | Deplacement |
| wf_modify_fileline(long al_row) | public | Traitement wf_modify_fileline |
| wf_enabled(boolean ab_enabled) | public | Activation |
| wf_filter() | public | Applique un filtre |
| wf_selectrow(uo_datawindow adw, long al_rowselect) | public | Selection |
| wf_check_clot() | public | Validation |
| wf_filter_actionslist() | public | Applique un filtre |
| wf_filter_actionshisto() | public | Applique un filtre |
| wf_filter_stock() | public | Applique un filtre |
| wf_filter_files() | public | Applique un filtre |
| wf_filter_purchase() | public | Applique un filtre |
| wf_filter_sales() | public | Applique un filtre |
| wf_filter_of() | public | Applique un filtre |
| wf_filter_services() | public | Applique un filtre |
| wf_fill_services() | public | Verifie wf_fill_services |
| wf_fill_projectbudget() | public | Traitement wf_fill_projectbudget |
| wf_filter_workcenters() | public | Applique un filtre |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_filter_workers() | public | Applique un filtre |
| wf_doc_create(string as_drmod) | public | Creation |
| wf_update_budget() | public | Mise a jour |
| wf_copyjalons(long al_fileref) | public | Copie |
| rowschanging(uo_datawindow source, uo_datawindow destination, integer emplacement) | public | Calcule/retourne rowschanging |
| wf_refresh_jalons() | public | Rafraichit l'affichage |
| wf_filter_jalons() | public | Applique un filtre |
| wf_refresh_conddetail() | public | Rafraichit l'affichage |
| wf_createcondhead() | public | Creation |
| wf_modifycondhead() | public | Traitement wf_modifycondhead |
| wf_duplicatecondhead() | public | Traitement wf_duplicatecondhead |
| wf_copyrefcondhead() | public | Copie |
| wf_refresh_condhead() | public | Rafraichit l'affichage |
| wf_deletecondhead() | public | Suppression |
| wf_deletecondline() | public | Suppression |
| wf_copy_cond(long al_refcopy) | public | Copie |
| wf_create_jalonref(ref long al_cljalon) | public | Creation |
| wf_ong_visibility() | public | Traitement wf_ong_visibility |
| wf_filter_actionscharge() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_getcalendar | Evenement personnalise ue_getcalendar |
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| closequery | Verification avant fermeture |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
| losefocus | Evenement losefocus |
| ue_itemchanged | Evenement personnalise ue_itemchanged |
| ue_filter | Evenement personnalise ue_filter |
| dragdrop | Depot de glisser-deposer |
