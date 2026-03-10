# nv_sales

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_a_pmi
- **Module**: _sales
- **Description**: Objet du module Ventes - gestion des commandes

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |
| is_sep | string |
| is_delimiter | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_execute_fileprep(long al_fa_id) : long | Public | Fonction utilisateur publique |
| uof_allocate_salline(long al_salhead, long al_salline, string as_item, ...) : boolean | Public | Fonction utilisateur publique |
| uof_check_file(string as_filename, datetime adt_date_lastinsertion, string as_user_lastinsertion) : integer | Public | Fonction utilisateur publique |
| uof_ship_sales(long al_salhead_tab[], boolean ab_directprint) : long | Public | Fonction utilisateur publique |
| uof_allocate_salline_withstock(long ordrno, long ordrlin, string item, ...) : decimal | Public | Fonction utilisateur publique |
| uof_tri(long al_salorder, string as_columns_to_tri_tab[]) : boolean | Public | Fonction utilisateur publique |
| uof_tri_by_parameters(long al_salorder) : boolean | Public | Fonction utilisateur publique |
| uof_import_fileprep(string as_pathfile, long al_fa_id) : long | Public | Fonction utilisateur publique |
| uof_print(long al_fa_id_start, long al_fa_id_stop) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_print_bydates(datetime adt_fa_id_start, datetime adt_fa_id_stop) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
