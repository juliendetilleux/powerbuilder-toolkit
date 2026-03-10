# w_promo

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Promo (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_promohead | long |
| is_screenfilter | string |
| is_filter | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh() | public | Rafraichit l'affichage |
| wf_promohead_delete() | public | Suppression |
| wf_promoline_delete() | public | Suppression |
| filteritem() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| ue_selectionchanged | Evenement personnalise ue_selectionchanged |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
