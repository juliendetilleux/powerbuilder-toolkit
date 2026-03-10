# w_plangroup_pur_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Plangroup pur - Mise a jour (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| Action | String |
| groupCode | Long |
| itcontrainte | String |
| Modified | Boolean |
| idt_newdate | datetime |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| calclineload(long linenum) | public | Charge les donnees |
| update_total() | public | Mise a jour |
| load_group_pur(long groupid) | public | Charge les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
