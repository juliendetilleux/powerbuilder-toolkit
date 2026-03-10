# w_salhead_prep

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Salhead prep (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_filter | string |
| il_shcode_sel | long |
| is_ColName | string |
| ScreenFilter | string |
| fullfilter | String |
| is_EXPPREP1 | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| wf_refresh() | public | Rafraichit l'affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
