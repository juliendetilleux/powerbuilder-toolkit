# w_qcctrl_appro_multi

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _quality
- **Description**: Qcctrl appro - Multi-selection (Qualite)

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
| wf_print(long as_ctrlid) | public | Impression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
