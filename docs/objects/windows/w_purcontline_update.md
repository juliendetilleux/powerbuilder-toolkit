# w_purcontline_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Purcontline - Mise a jour (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| Action | String |
| il_contract | long |
| is_contline | string |
| iw_parent | w_window |
| is_suppid | string |
| idt_expdate | datetime |
| is_chtyp | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| inputok() | public | Verifie inputok |
| adapt_item(string item) | public | Traitement adapt_item |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
