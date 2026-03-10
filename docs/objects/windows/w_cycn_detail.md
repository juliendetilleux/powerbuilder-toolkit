# w_cycn_detail

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Cycn - Detail (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| idc_num_cycn | decimal |
| is_code_user | string |
| ib_new_cyccn | boolean |
| idt_date_creation | datetime |
| invo_pass_parm | nvo_pass_parm_cycn |
| ib_zero | boolean |
| is_CYCLECOUNT | string |
| il_numclot | long |
| is_cpdesc | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_statut() | public | Calcule/retourne wf_statut |
| wf_msg_error() | public | Traitement wf_msg_error |
| wf_verif_loc_stock(long al_row) | public | Calcule/retourne wf_verif_loc_stock |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| ue_retrieve | Evenement personnalise ue_retrieve |
| ue_dw_update | Evenement personnalise ue_dw_update |
| ue_dw_notupdate | Evenement personnalise ue_dw_notupdate |
| ue_col_not_visible | Evenement personnalise ue_col_not_visible |
| ue_ligne_insert | Evenement personnalise ue_ligne_insert |
