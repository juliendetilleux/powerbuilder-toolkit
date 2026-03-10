# w_ftp_main

- **Type**: Window
- **Ancetre**: w_mdihelp
- **Module**: _ftp
- **Description**: FTP main

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_statesave() | public | Sauvegarde les donnees |
| wf_staterestore() | public | Traitement wf_staterestore |
| wf_dynamicmenus(integer ai_index) | public | Traitement wf_dynamicmenus |
| wf_serverprofiles() | public | Traitement wf_serverprofiles |
| wf_addmsg(string as_msg) | public | Ajout |
| wf_connect() | public | Connexion |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_postopen | Evenement personnalise ue_postopen |
| ue_percent_download | Evenement personnalise ue_percent_download |
| ue_percent_upload | Evenement personnalise ue_percent_upload |
| close | Fermeture de la fenetre |
| open | Ouverture de la fenetre |
| resize | Redimensionnement de la fenetre |
