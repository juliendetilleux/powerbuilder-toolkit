# w_planord_create

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _planning
- **Description**: Planord - Creation (Planification)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_TypeOrder | string |
| is_itemSearch | string |
| is_It_sel_name | string |
| is_it_sel_um | string |
| ii_it_sel_leadtime | int |
| ii_It_Sel_availtime | int |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| changeitem(string selected_item) | public | Modification |
| mrpinputok() | public | Verifie mrpinputok |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
