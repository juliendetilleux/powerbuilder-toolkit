# w_doc_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _general
- **Description**: Documents - Mise a jour (General)

## Variables d'instance

| Variable | Type |
|----------|------|
| iboo_tooLong | boolean |
| iw_parent | w_window |
| is_sep | string |
| is_DOCGRIT | string |
| drfile | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| ShellExecute(long hwnd, string lpOperation, string lpFile, string lpParameters, string lpDirectory, long nShowCmd) | public | Calcule/retourne ShellExecute |
| get_file() | public | Traitement get_file |
| get_path() | public | Traitement get_path |
| get_files() | public | Traitement get_files |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
