# w_managcost_mass_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Managcost mass - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_MULTICO | string |
| ii_axline | int |
| il_ax_row | long |
| ScreenFilter | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh() | public | Rafraichit l'affichage |
| extracosts_deleteline() | public | Suppression |
| wf_filter() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
