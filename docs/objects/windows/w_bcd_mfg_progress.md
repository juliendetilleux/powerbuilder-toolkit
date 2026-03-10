# w_bcd_mfg_progress

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Fabrication progression (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_level | Integer |
| nvo_bc | nvo_bcd_brf |
| is_ADVANCSCHED | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_error(string as_msg) | public | Traitement wf_error |
| wf_connect() | public | Connexion |
| wf_check_visibility_doc() | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| timer | Evenement timer |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
