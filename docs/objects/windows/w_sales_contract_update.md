# w_sales_contract_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Ventes contrats - Mise a jour

## Variables d'instance

| Variable | Type |
|----------|------|
| action | string |
| il_Salorder | long |
| is_item | string |
| dwci | datawindowchild |
| custcurr | string |
| currconv | double |
| custum | string |
| itum | string |
| leadtime | int |
| umconv | double |
| isel_sallin | long |
| contractsplit | s_contractsplit |
| userfields | integer |
| is_ITUMTRF | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_addline() | public | Ajout |
| wf_splitline() | public | Traitement wf_splitline |
| wf_update_userfields(integer linenum, string item) | public | Mise a jour |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
