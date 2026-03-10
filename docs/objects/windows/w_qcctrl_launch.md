# w_qcctrl_launch

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _quality
- **Description**: Qcctrl launch (Qualite)

## Variables d'instance

| Variable | Type |
|----------|------|
| manual | Boolean |
| is_filter | string |
| ScreenFilt | string |
| FilterString | string |
| is_item | string |
| Is_ordtri | Any |
| is_lot | string |
| is_typ | string |
| is_clifour | string |
| id_qty | decimal |
| ii_version | integer |
| My_Specsel | s_specsel |
| Empty_Specsel | s_specsel |
| Action | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| loadmultitri() | public | Charge les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
