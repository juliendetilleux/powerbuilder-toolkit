# w_discount

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Remises (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_dischead | long |
| il_discline | long |
| is_screenfilter | string |
| is_filter | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh() | public | Rafraichit l'affichage |
| filteritem() | public | Applique un filtre |
| wf_dischead_delete() | public | Suppression |
| wf_discline_delete() | public | Suppression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| ue_selectionchanged | Evenement personnalise ue_selectionchanged |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
