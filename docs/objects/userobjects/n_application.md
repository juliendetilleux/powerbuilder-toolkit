# n_application

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _system
- **Description**: Objet systeme

## Variables d'instance

| Variable | Type |
|----------|------|
| ld_compiled | Date |
| is_company | String |
| is_version | String |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| ShowWindow(Long handle, Integer ncmdshow) : boolean | Public | Fonction publique |
| GetSystemMetrics(integer nIndex) : integer | Public | Fonction publique |
| of_setreg(string as_entry, string as_value) : integer | Public | Fonction publique |
| of_getreg(string as_subkey, string as_entry, string as_default) : string | Public | Fonction publique |
| of_getreg(string as_entry, string as_default) : string | Public | Fonction publique |
| of_getappname() : string | Public | Fonction publique |
| of_titlebaroffset() : integer | Public | Fonction publique |
| of_getcompany() : string | Public | Fonction publique |
| of_parse(string as_string, string as_separator, string as_outarray[]) : long | Public | Fonction publique |
| of_replaceall(string as_oldstring, string as_findstr, string as_replace) : string | Public | Fonction publique |
| of_setreg(string as_subkey, string as_entry, string as_value) : integer | Public | Fonction publique |
| of_showwindow(w_window aw_window, windowstate ae_state) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
