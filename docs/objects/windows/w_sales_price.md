# w_sales_price

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Ventes prix

## Variables d'instance

| Variable | Type |
|----------|------|
| is_ordtri | Any |
| il_oldrow | long |
| ScreenFilt | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| load_multitri() | public | Charge les donnees |
| filteritem() | public | Applique un filtre |
| wf_save() | public | Sauvegarde les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| losefocus | Evenement losefocus |
