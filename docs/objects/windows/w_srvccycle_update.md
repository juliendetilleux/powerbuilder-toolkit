# w_srvccycle_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _services
- **Description**: Srvccycle - Mise a jour (Services)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_Action | String |
| is_Freq | Int |
| ib_Modified | Boolean |
| idddw_items | DataWindowChild |
| is_itcode | string |
| il_scentity_X | Long |
| ib_monitoring | Boolean |
| ib_M_changes_allowed | Boolean |
| iw_parent | w_window |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok() | public | Verifie wf_inputok |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_monitoring(boolean ab_monitoring) | public | Traitement wf_monitoring |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
