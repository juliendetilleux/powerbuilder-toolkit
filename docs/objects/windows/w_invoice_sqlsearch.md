# w_invoice_sqlsearch

- **Type**: Window
- **Ancetre**: w_response_dw
- **Module**: _masters
- **Description**: Factures sqlsearch (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| ist_objectparm | struct_objectparm |
| ist_objectparm_return | struct_objectparm |
| is_sql | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh() | public | Rafraichit l'affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
