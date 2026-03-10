# w_bcd_tictrl

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Tictrl (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| window_timer | w_tictrl_timer |
| ib_Check | boolean |
| ib_multpoint | boolean |
| ib_Go | boolean |
| is_user | string |
| is_start_multi | string |
| il_seqmulti | long |
| date_now | datetime |
| is_TICTRLBCDC | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_error(string as_msg) | public | Traitement wf_error |
| wf_checktime(ref string as_start) | public | Validation |
| wf_update_prev_line(long al_row, string as_start) | public | Mise a jour |
| wf_updatetimeprest(long al_line) | public | Mise a jour |
| wf_check_prev_ticking(string as_worker, ref string as_message) | public | Validation |
| wf_modify_opid(string as_opid) | public | Traitement wf_modify_opid |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| timer | Evenement timer |
