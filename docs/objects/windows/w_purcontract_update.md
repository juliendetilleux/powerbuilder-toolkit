# w_purcontract_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Purcontract - Mise a jour (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| Action | String |
| ib_adrefmodif | Boolean |
| is_MULTICO | string |
| iw_parent | w_window |
| il_contract | long |
| ib_continue | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| inputok() | public | Verifie inputok |
| adaptexp(string typ) | public | Traitement adaptexp |
| newcontract() | public | Creation |
| wf_create_pur(string as_phmccode) | public | Creation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
