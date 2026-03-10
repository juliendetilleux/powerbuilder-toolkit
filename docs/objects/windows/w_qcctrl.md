# w_qcctrl

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _quality
- **Description**: Qcctrl (Qualite)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_action | string |
| ii_numversion | int |
| il_curr_row | long |
| ic_typtest | char |
| il_old_row | long |
| id_LotQty | Double |
| ii_SelChoiceID | Int |
| ii_SelChSeq | Int |
| My_SpecSel | s_specsel |
| ScreenFilter | string |
| il_CtrlId | Long |
| is_QCCHCKPSW | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_type_qctest(string as_qctestid) | public | Test |
| wf_refresh_head(integer ai_ctrlid) | public | Rafraichit l'affichage |
| wf_create_ctrlhead(string as_type) | public | Creation |
| wf_copytest() | public | Copie |
| filteritem() | public | Applique un filtre |
| wf_delete() | public | Suppression |
| wf_approbation_bup() | public | Traitement wf_approbation_bup |
| wf_sample_ship() | public | Traitement wf_sample_ship |
| wf_refresh_line(long al_ctrlid, long al_line) | public | Rafraichit l'affichage |
| wf_check_test_reported(long al_ctrlid) | public | Validation |
| wf_update_lotstatus(datetime ad_datim, boolean ab_lotalloc, string as_lot_id, long al_ctrlid, string as_item) | public | Mise a jour |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
