# w_proformas_histo

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Proformas histo (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_code | long |
| is_curr | string |
| ls_testtri | string |
| screenfilter | string |
| is_filter | string |
| is_choixfilter | string |
| filterstring | string |
| ib_cherche | boolean |
| isel_line | long |
| is_mcfilter | string |
| is_FACTELECT | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| line_delete() | public | Suppression |
| filteritem() | public | Applique un filtre |
| refresh() | public | Rafraichit l'affichage |
| refreshlin() | public | Rafraichit l'affichage |
| prof_print() | public | Impression |
| wf_word(string as_lang) | public | Traitement wf_word |
| wf_head_delete() | public | Suppression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
