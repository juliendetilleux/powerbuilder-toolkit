# w_jalon_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _projects
- **Description**: Jalon - Mise a jour (Projets)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_action | string |
| il_code | long |
| iw_parent | w_window |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok(uo_datawindow adw_data) | public | Verifie wf_inputok |
| wf_save(uo_datawindow adw_data) | public | Sauvegarde les donnees |
| wf_change_jatype(string as_data) | public | Modification |
| wf_copy_global(long al_code) | public | Copie |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_getcalendar | Evenement personnalise ue_getcalendar |
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| close | Fermeture de la fenetre |
| rbuttondown | Evenement rbuttondown |
| clicked | Clic sur la fenetre |
