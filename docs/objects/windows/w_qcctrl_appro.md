# w_qcctrl_appro

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _quality
- **Description**: Qcctrl appro (Qualite)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_appro | String |
| il_ctrlid | long |
| ib_Print | Boolean |
| Sel_Doc_Mod | String |
| iSel_Lot_Id | string |
| is_QCCHCKPSW | string |
| ib_lotalloc | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_check_tests_reported() | public | Validation |
| wf_checkline() | public | Validation |
| wf_update_lotstatus(datetime datim) | public | Mise a jour |
| wf_doc_refresh() | public | Rafraichit l'affichage |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_print(long as_ctrlid) | public | Impression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
