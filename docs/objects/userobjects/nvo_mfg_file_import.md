# nvo_mfg_file_import

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _manufg
- **Description**: Objet du module Fabrication - fonctionnalite d'import

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |
| is_sep | string |
| is_delimiter | string |
| is_ITUMTRF | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_import_file_of(string as_pathfile, long al_fm_id, string as_type) : long | Public | Fonction utilisateur publique |
| uof_execute_file_rcmo(long al_fm_id, boolean ab_qclaunch, boolean ab_etiqrcmo_print) : long | Public | Fonction utilisateur publique |
| uof_execute_file_dlmo(long al_fm_id) : long | Public | Fonction utilisateur publique |
| uof_check_file(string as_filename, datetime adt_date_lastinsertion, string as_user_lastinsertion, string as_type) : integer | Public | Fonction utilisateur publique |
| uof_print(long al_fm_id_start, long al_fm_id_stop) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_print_bydates(datetime adt_fm_id_start, datetime adt_fm_id_stop, string as_type) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
