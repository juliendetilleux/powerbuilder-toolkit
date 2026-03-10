# w_alloc_mpofs_by_item

- **Type**: Window
- **Ancetre**: w_response_dw
- **Module**: _manufg
- **Description**: Allocations mpofs by articles (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_item | string |
| il_of | long |
| il_mlitemseq | long |
| il_Last_allocseq | long |
| id_NeededQty | decimal |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh() | public | Rafraichit l'affichage |
| wf_alloc() | public | Traitement wf_alloc |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
