# w_purrequest

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Purrequest (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_sep1 | string |
| is_separator | string |
| is_import_file | string |
| is_PRICPURREQ | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_modify() | public | Traitement wf_modify |
| wf_refresh() | public | Rafraichit l'affichage |
| wf_file_import(string as_filename, string as_path, ref string as_error) | public | Importation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
