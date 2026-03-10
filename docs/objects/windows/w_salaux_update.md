# w_salaux_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Salaux - Mise a jour (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_action | string |
| il_salcode | long |
| iw_parent | w_window |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_retrievefileline(long al_fileref) | public | Recupere les donnees |
| wf_inputok() | public | Verifie wf_inputok |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| losefocus | Evenement losefocus |
