# w_items_cust

- **Type**: Window
- **Ancetre**: w_item_update
- **Module**: _masters
- **Description**: Articles clients (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_colname | string |
| is_coltype | string |
| ids_cust_spec | nv_datastore |
| COLOR_Obligatoire | Long (constant) |
| COLOR_Invisible | Long (constant) |
| COLOR_Inaccessible | Long (constant) |
| COLOR_Normal | Long (constant) |
| COLOR_Intouchable | Long (constant) |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| adapt_visibility(string as_field, string as_value) | public | Traitement adapt_visibility |
| popup(dwobject dwo) | public | Calcule/retourne popup |
| paint() | public | Calcule/retourne paint |
| iteminputok() | public | Verifie iteminputok |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
