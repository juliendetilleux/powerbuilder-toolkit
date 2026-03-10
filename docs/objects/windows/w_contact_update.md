# w_contact_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Contacts - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| Action | String |
| ii_ContactId | Integer |
| is_AdId | String |
| is_email | String |
| iw_parent | w_window |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| input_ok() | public | Verifie input_ok |
| wf_check_mailtocpt() | public | Validation |
| wf_creation_fichier_contact() | public | Traitement wf_creation_fichier_contact |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
