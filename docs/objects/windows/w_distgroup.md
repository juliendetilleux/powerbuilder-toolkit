# w_distgroup

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_crm
- **Description**: Distgroup (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_dhcode | integer |
| is_dhname | string |
| screenfilter | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_copygroup(integer ai_dhcode) | public | Copie |
| wf_deletegroup(integer ai_dhcode) | public | Suppression |
| wf_reset() | public | Reinitialisation |
| wf_refresh() | public | Rafraichit l'affichage |
| wf_filter() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
