# w_file_actvar_auto

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _projects
- **Description**: Fichiers actvar auto (Projets)

## Variables d'instance

| Variable | Type |
|----------|------|
| ib_modify | boolean |
| ib_saved | boolean |
| ids_actions | nv_datastore |
| il_salorder | long |
| il_salline | long |
| ib_modiffact | boolean |
| idec_qtytofact | decimal |
| il_realtime | long |
| il_runid | long |
| idec_value | decimal |
| is_ihcust | string |
| is_action | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_checktimes() | public | Validation |
| wf_save() | public | Sauvegarde les donnees |
| wf_load(long an_salhead, long an_salline, long an_runid) | public | Charge les donnees |
| wf_insertrow() | public | Ajout |
| wf_deleterow() | public | Suppression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| losefocus | Evenement losefocus |
