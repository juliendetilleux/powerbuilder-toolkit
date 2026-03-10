# w_plangroup_mfg_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _planning
- **Description**: Plangroup fabrication - Mise a jour (Planification)

## Variables d'instance

| Variable | Type |
|----------|------|
| Action | String |
| groupCode | Long |
| itcontrainte | String |
| Modified | Boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| load_group_mfg(long groupid) | public | Charge les donnees |
| calclineload(long linenum) | public | Charge les donnees |
| update_total() | public | Mise a jour |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
