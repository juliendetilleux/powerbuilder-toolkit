# w_crm_choices_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_crm
- **Description**: Choices - Mise a jour (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_choice | string |
| ib_modified | boolean |
| il_row | long |
| create_line | boolean |
| created_line | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok() | public | Verifie wf_inputok |
| renum_lines() | public | Traitement renum_lines |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| close | Fermeture de la fenetre |
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
