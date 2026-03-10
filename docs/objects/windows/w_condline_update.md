# w_condline_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _projects
- **Description**: Condline - Mise a jour (Projets)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_action | string |
| il_code | long |
| is_jatype | string |
| il_jacode | long |
| il_jalonref | long |
| il_savjacode | long |
| iw_parent | w_window |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok(uo_datawindow adw_data) | public | Verifie wf_inputok |
| wf_synchronise(long al_code) | public | Traitement wf_synchronise |
| wf_arrange_columns() | public | Reorganisation |
| wf_save(uo_datawindow adw_data) | public | Sauvegarde les donnees |
| wf_copyjalon() | public | Copie |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_getcalendar | Evenement personnalise ue_getcalendar |
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| clicked | Clic sur la fenetre |
