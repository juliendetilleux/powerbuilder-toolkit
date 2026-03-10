# w_disclogist

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Disclogist (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_dischead | long |
| is_screenfilter | string |
| is_filter | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh() | public | Rafraichit l'affichage |
| filteritem() | public | Applique un filtre |
| wf_dischead_delete() | public | Suppression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| losefocus | Evenement losefocus |
| clicked | Clic sur la fenetre |
| ue_selectionchanged | Evenement personnalise ue_selectionchanged |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
