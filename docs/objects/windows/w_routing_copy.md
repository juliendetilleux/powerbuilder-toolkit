# w_routing_copy

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _methods
- **Description**: Gammes - Copie (Methodes/Nomenclatures)

## Variables d'instance

| Variable | Type |
|----------|------|
| ls_testtri | string |
| isel_method_item | string |
| isel_method_type | string |
| is_error | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| methodscost(datetime dateval) | public | Traitement methodscost |
| refresh() | public | Rafraichit l'affichage |
| uof_createdatastore(string as_sql, ref string as_error) | public | Creation |
| uof_copy_routline(string as_item_tocopy, string as_item_dest, boolean ab_routtest, string as_methodtype_source, string as_methodtype_to_replace) | public | Copie |
| uof_copy_routreject(string as_item_tocopy, string as_item_dest, string as_methodtype_source, string as_methodtype_to_replace) | public | Copie |
| uof_copy_routtest(string as_item_tocopy, string as_item_dest, string as_methodtype_source, string as_methodtype_to_replace) | public | Copie |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
