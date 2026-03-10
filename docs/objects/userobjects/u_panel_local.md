# u_panel_local

- **Type**: User Object (Visuel)
- **Ancetre**: u_panel
- **Module**: _ftp
- **Description**: Objet utilisateur - gestion des emplacements

## Variables d'instance

| Variable | Type |
|----------|------|
| ids_sorter | nv_datastore |
| il_handle | Long |
| il_mydocuments | Long |
| il_cdrive | Long |
| is_path | String |
| is_data | String[] |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_gotodirectory(string as_directory) : boolean | Public | Fonction publique |
| of_populate_listview(long al_handle) : void (subroutine) | Public | Fonction publique |
| of_menufunction(string as_command) : void (subroutine) | Public | Fonction publique |
| of_deletefiles() : void (subroutine) | Public | Fonction publique |
| of_uploadfiles(boolean ab_delete) : void (subroutine) | Public | Fonction publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_postopen | Evenement personnalise |
| ue_preclose | Evenement personnalise |
