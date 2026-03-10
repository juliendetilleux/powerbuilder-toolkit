# w_shipcost_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Shipcost - Mise a jour (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_Etat | String |
| il_ScId | Long |
| ii_ScLineId | Integer |
| is_Parent | String |
| iw_parent | w_window |
| is_Curr | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok() | public | Calcule/retourne wf_inputok |
| wf_init_window() | public | Initialisation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
