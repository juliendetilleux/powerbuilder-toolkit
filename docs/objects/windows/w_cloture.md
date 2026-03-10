# w_cloture

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _monthclot
- **Description**: Cloture

## Variables d'instance

| Variable | Type |
|----------|------|
| is_period | string |
| idt_datstart | datetime |
| il_num | long |
| is_WIPParam | String |
| is_truck | String |
| is_splitmethod | String |
| is_MFGEVAL | String |
| is_LBCMFG | string |
| is_LBCPUR | string |
| is_ITUMTRF | string |
| is_PURVALREC | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_majbouton(long cur_clot, string cur_status) | public | Traitement wf_majbouton |
| wf_previous_period(string Curr_period) | public | Retourne wf_previous_period |
| wf_checkparam_wip() | public | Validation |
| wf_majstock_wip() | public | Traitement wf_majstock_wip |
| wf_majtruckcost() | public | Traitement wf_majtruckcost |
| wf_truck_load_update(datetime a_datestart, datetime a_datend) | public | Charge les donnees |
| wf_truck_cost_update() | public | Mise a jour |
| wf_add_otheritem() | public | Ajout |
| wf_majstatut(string awf_clotstatut) | public | Verifie wf_majstatut |
| wf_eval_linkedcost_p() | public | Verifie wf_eval_linkedcost_p |
| wf_eval_linkedcost_r() | public | Verifie wf_eval_linkedcost_r |
| wf_copy_stock() | public | Copie |
| wf_eval_subc_linkedcost_r() | public | Verifie wf_eval_subc_linkedcost_r |
| wf_eval_subc_linkedcost_p() | public | Verifie wf_eval_subc_linkedcost_p |
| wf_mfg_subc_xcost_update(string as_period, string as_item, decimal adec_qty, decimal adec_totval) | public | Mise a jour |
| wf_insert_clotstocklot() | public | Ajout |
| wf_clotfinit_addcoitem(string as_period, datetime adt_datstart, datetime adt_datend) | public | Ajout |
| wf_eval_mfg_with_mfg(datetime adt_datstart, datetime adt_datend) | public | Verifie wf_eval_mfg_with_mfg |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
