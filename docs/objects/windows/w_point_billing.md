# w_point_billing

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _devis
- **Description**: Point billing (Devis)

## Variables d'instance

| Variable | Type |
|----------|------|
| ScreenFilter | string |
| is_McCoCode | string |
| il_salhead | Long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh(datetime adt_date) | public | Rafraichit l'affichage |
| filteritem() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
