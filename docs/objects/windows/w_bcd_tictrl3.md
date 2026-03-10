# w_bcd_tictrl3

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Tictrl3 (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| window_timer | w_tictrl_timer |
| ib_Check | boolean |
| ib_Go | boolean |
| is_user | string |
| il_seqmulti | long |
| date_now | datetime |
| is_TICTRLBCDC | string |
| is_add_if_finishOF | string |
| lt_TICTRDEF | time |
| il_wkcell | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_error(string as_msg) | public | Traitement wf_error |
| wf_checktime(ref string as_start) | public | Validation |
| wf_update_prev_line(long al_row, string as_start) | public | Mise a jour |
| wf_updatetimeprest(long al_line) | public | Mise a jour |
| wf_check_prev_ticking(string as_worker, ref string as_message) | public | Validation |
| wf_modify_opid(string as_opid) | public | Traitement wf_modify_opid |
| wf_scan_ofpc(long al_of, long al_mfgwcreqs_line) | public | Traitement wf_scan_ofpc |
| wf_copy_multiofprec_exeptarg(long al_of, long al_mfgwcreqs_line) | public | Copie |
| wf_isprecmultipcexist(long al_of, long al_mfgwcreqs_line) | public | Verifie si precmultipcexist |
| wf_isfabmultinotclot(long al_row) | public | Verifie si fabmultinotclot |
| wf_copy_multiofprec_witharg(long al_of, long al_mfgwcreqs_line) | public | Copie |
| wf_maxseq() | public | Calcule/retourne wf_maxseq |
| wf_return_nb_doc(long al_of) | public | Calcule/retourne wf_return_nb_doc |
| wf_is_precline_idem(string as_typ, string as_wlopid) | public | Verifie si precline_idem |
| wf_copy_multiofprec_befnp() | public | Copie |
| wf_isfabmulti(long al_row) | public | Verifie si fabmulti |
| wf_connect() | public | Connexion |
| wf_update_prevline_del() | public | Mise a jour |
| wf_checkline() | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| timer | Evenement timer |
| constructor | Constructeur |
| losefocus | Evenement losefocus |
| clicked | Clic sur la fenetre |
