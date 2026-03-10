# w_call_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _projects
- **Description**: Call - Mise a jour (Projets)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_chid | long |
| Action | string |
| is_callctg | string |
| ib_modified | boolean |
| ii_actionsatterm | integer |
| invo_mail | nvo_mail |
| is_MAILCLOTT | string |
| il_action | long |
| is_CALLITEML | string |
| is_tabattachment | string |
| ls_path | string |
| il_SelCall | long |
| ib_auto | boolean |
| is_MULTICO | string |
| is_mccode | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| inputok() | public | Verifie inputok |
| wf_audit() | public | Verifie wf_audit |
| wf_handle_file(string as_adresseid) | public | Traitement wf_handle_file |
| wf_doc_refresh() | public | Rafraichit l'affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| ue_retrieve_end | Evenement personnalise ue_retrieve_end |
| constructor | Constructeur |
