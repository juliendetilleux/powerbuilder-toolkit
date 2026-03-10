# w_transact_ajtf_mass

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions ajtf mass (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| to_loc | string |
| fullfilter | string |
| il_hsseq | long |
| is_trcode | string |
| id_qty | decimal |
| il_row | long |
| is_mcfilter | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filterdw() | public | Applique un filtre |
| filteritem() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
