# nvo_stock_file_import

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _stock
- **Description**: Objet du module Stock - fonctionnalite d'import

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
| uof_import_file_aj(string as_pathfile, long al_fa_id) : long | Public | Fonction utilisateur publique |
| uof_execute_file_aj(long al_fa_id) : long | Public | Fonction utilisateur publique |
| uof_check_file(string as_filename, datetime adt_date_lastinsertion, string as_user_lastinsertion) : integer | Public | Fonction utilisateur publique |
| uof_print(long al_fm_id_start, long al_fm_id_stop) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_print_bydates(datetime adt_fm_id_start, datetime adt_fm_id_stop) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
