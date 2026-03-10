# w_cycn_sel

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Cycn sel (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| idc_num_cycn | decimal |
| ib_new_cyccn | boolean |
| idc_delete_cycn | decimal |
| idt_date_creation | datetime |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_delete_cycn(decimal ldc_cycn) | public | Suppression |
| wf_msg_error() | public | Traitement wf_msg_error |
| wf_menu(decimal adc_numcycn, string as_menu) | public | Verifie wf_menu |
| wf_statut_cycn(decimal adc_numcycn) | public | Calcule/retourne wf_statut_cycn |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| rbuttondown | Evenement rbuttondown |
| clicked | Clic sur la fenetre |
| ue_refresh | Evenement personnalise ue_refresh |
| ue_refresh_new | Evenement personnalise ue_refresh_new |
| ue_analyser | Evenement personnalise ue_analyser |
| ue_lancer | Evenement personnalise ue_lancer |
| ue_terminer | Evenement personnalise ue_terminer |
| ue_refresh_statut | Evenement personnalise ue_refresh_statut |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
