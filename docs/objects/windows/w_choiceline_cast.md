# w_choiceline_cast

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Choiceline cast (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_choiceline | Long |
| ii_blocked | integer |
| is_choicename | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_renumsort() | public | Applique un tri |
| wf_create() | public | Creation |
| wf_modify() | public | Traitement wf_modify |
| wf_refresh(long al_choice) | public | Rafraichit l'affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
