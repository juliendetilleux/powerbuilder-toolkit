# w_shippack_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Shippack - Mise a jour (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_Row | Long |
| is_Action | String |
| il_OldQty | Long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_init_window() | public | Initialisation |
| wf_check_tr() | public | Validation |
| wf_save_tr() | public | Sauvegarde les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
