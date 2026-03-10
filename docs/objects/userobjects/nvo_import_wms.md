# nvo_import_wms

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _system
- **Description**: Objet systeme - fonctionnalite d'import

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |
| is_location_wms | string |
| is_type_WMS | string |
| is_path_export | string |
| is_path_import | string |
| il_sale_toexp | long[] |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_import_files() : long | Public | Fonction utilisateur publique |
| uof_execute_ccs06_easywms(string as_content, string as_filename, long al_fileline, string as_message) : integer | Public | Fonction utilisateur publique |
| uof_redesign(string as_item, string as_lot, string as_status, ...) : integer | Public | Fonction utilisateur publique |
| uof_finilize_sto(long al_iw_id_sto) : integer | Public | Fonction utilisateur publique |
| uof_execute_sto04_easywms(longlong al_iw_id, string as_content, string as_filename, ...) : integer | Public | Fonction utilisateur publique |
| uof_read_file_intotab(string as_filename, string as_lines[]) : long | Public | Fonction utilisateur publique |
| uof_geterror() : string | Public | Fonction utilisateur publique |
| uof_execute_wms() : long | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
