# w_deposit

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Deposit (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_sep1 | string |
| is_separator | string |
| is_import_file | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_modify() | public | Traitement wf_modify |
| wf_refresh() | public | Rafraichit l'affichage |
| wf_file_import(string as_filename, string as_path, ref string as_error) | public | Importation |
| wf_rejet() | public | Traitement wf_rejet |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
