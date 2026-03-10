# nvo_import_fileindw

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _masters
- **Description**: Objet du module Donnees de base - fonctionnalite d'import

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_import_fileindw(uo_datawindow adw_empty, string as_file, string as_sep, ...) : long | Public | Fonction utilisateur publique |
| uof_insert_linkdisc(string as_adcode, string as_item, long al_nb_pc, ...) : integer | Public | Fonction utilisateur publique |
| uof_import_linkdisc(uo_datawindow adw_col_match, uo_datawindow adw_dwtoimport, long al_row_tostart, ...) : long | Public | Fonction utilisateur publique |
| uof_createdatawindow(uo_datawindow adw_touse, long al_width_column, string as_type, ...) : uo_datawindow | Public | Fonction utilisateur publique |
| uof_insert_ddwchild(datawindowchild adwc_child, uo_datawindow adw_use) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
