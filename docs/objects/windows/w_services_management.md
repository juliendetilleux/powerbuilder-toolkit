# w_services_management

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _projects
- **Description**: Services management (Projets)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_salecode | long |
| il_actions_transfered | long |
| sel_action_retrieve | integer |
| Sel_action_withtime | integer |
| ii_assi_statut_index | integer |
| ii_assi_type_index | integer |
| ib_save | boolean |
| ib_from_filter | boolean |
| il_sousprojet | long |
| is_TriMaintenance | any |
| ItemNameFilter | string |
| is_ventservice | string |
| is_ventserviceforfait | string |
| is_all_actions | string |
| ll_condition | long |
| lb_showfact | boolean |
| il_row | long |
| il_invoicehead | long |
| il_invoiceline | long |
| invo_cm | nvo_conditionmanager |
| is_table_name | string |
| is_typ | string |
| is_customer | string |
| idec_ratio | decimal |
| ib_direct | boolean |
| ii_tab | int |
| idt_datemax | datetime |
| il_modjalon | long |
| il_rowjalon | long |
| ib_withfilter | boolean |
| invo_Specific | nvo_Xtra_Specific |
| is_ADINVTO | string |
| is_mcfilter | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_transfert(uo_datawindow adw_source, uo_datawindow adw_destination, long al_beforerow) | public | Traitement wf_transfert |
| wf_change_invstatus(uo_datawindow adw_data, string as_newstatus) | public | Modification |
| wf_actionfilter() | public | Applique un filtre |
| wf_filter_maintenance() | public | Applique un filtre |
| wf_action_assign2order() | public | Calcule/retourne wf_action_assign2order |
| wf_adaptstatus(string as_from) | public | Traitement wf_adaptstatus |
| wf_loadmultitri_maintenance() | public | Charge les donnees |
| wf_jalonfilter() | public | Applique un filtre |
| wf_refreshsalline(long al_slline) | public | Rafraichit l'affichage |
| wf_check_lot(long al_filecode) | public | Validation |
| wf_createaction() | public | Creation |
| wf_modifyaction() | public | Traitement wf_modifyaction |
| wf_clot_line() | public | Traitement wf_clot_line |
| wf_novisible() | public | Traitement wf_novisible |
| wf_invoice() | public | Traitement wf_invoice |
| wf_createservice() | public | Creation |
| wf_save() | public | Sauvegarde les donnees |
| wf_refreshjalon() | public | Rafraichit l'affichage |
| wf_filter() | public | Applique un filtre |
| wf_refresh_action() | public | Rafraichit l'affichage |
| wf_show_cmd_from_jalon() | public | Affichage |
| wf_custom(long row) | public | Traitement wf_custom |
| wf_actionmcfilter() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_opened | Evenement personnalise ue_opened |
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| timer | Evenement timer |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| ue_selectionchanged | Evenement personnalise ue_selectionchanged |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
| ue_mousemove | Evenement personnalise ue_mousemove |
| dragdrop | Depot de glisser-deposer |
| ue_selectionchanging | Evenement personnalise ue_selectionchanging |
| losefocus | Evenement losefocus |
