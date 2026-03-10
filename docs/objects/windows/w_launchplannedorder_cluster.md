# w_launchplannedorder_cluster

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Launchplannedorder cluster (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_item_cluster | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_insert_manual(string as_item, decimal ad_qty) | public | Ajout |
| wf_insertbomfromitem(string as_item, decimal ad_qty2prod, datetime adt_matplan_mpplduedat, ref string as_error) | public | Ajout |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
