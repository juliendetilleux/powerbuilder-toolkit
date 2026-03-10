# w_truck_report

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Truck - Rapport (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| sel_ship | long |
| sel_row | long |
| sel_date | datetime |
| Sel_cost | double |
| ii_Ret | integer |
| iSel_truck | long |
| iSel_truck_typ | string |
| idt_horizon | datetime |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| truck_refresh() | public | Rafraichit l'affichage |
| truck_detail_refresh() | public | Rafraichit l'affichage |
| truck_clot() | public | Traitement truck_clot |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| dragdrop | Depot de glisser-deposer |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
