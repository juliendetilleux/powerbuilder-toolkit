# w_condhead_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _projects
- **Description**: Condhead - Mise a jour (Projets)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_action | string |
| il_code | long |
| il_jacode | long |
| ls_activ | string |
| ii_index | int |
| iw_parent | w_window |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok(uo_datawindow adw_data) | public | Verifie wf_inputok |
| wf_save(uo_datawindow adw_data) | public | Sauvegarde les donnees |
| wf_createline100pc(long al_chcode) | public | Creation |
| wf_createline(integer ai_precent, integer ai_number, datetime adat_after) | public | Creation |
| wf_create_multiaction() | public | Creation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_getcalendar | Evenement personnalise ue_getcalendar |
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| close | Fermeture de la fenetre |
| activate | Activation de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
