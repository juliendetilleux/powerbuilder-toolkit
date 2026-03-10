# ws_brf_password

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Brf mot de passe (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| Licence_Expiry | date |
| Accessword | String |
| ib_userlanguage | boolean |
| is_SESSIONWIN | string |
| ib_autosession | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| enter() | public | Traitement enter |
| user_enter() | public | Verifie user_enter |
| wf_load_globalvariable() | public | Charge les donnees |
| wf_check_upgrade() | public | Validation |
| wf_check_dbversion() | public | Validation |
| wf_check_custversion() | public | Validation |
| wf_check_pc_access(string as_pcname) | public | Validation |
| checkuseraccess() | public | Validation |
| wf_check_session() | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| activate | Activation de la fenetre |
| close | Fermeture de la fenetre |
| getfocus | Evenement getfocus |
| clicked | Clic sur la fenetre |
