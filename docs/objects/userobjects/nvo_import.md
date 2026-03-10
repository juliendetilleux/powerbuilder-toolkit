# nvo_import

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _masters
- **Description**: Objet du module Donnees de base - fonctionnalite d'import

## Variables d'instance

| Variable | Type |
|----------|------|
| is_path | string |
| is_path_export | string[] |
| is_adcode_export | string[] |
| is_supplier | string |
| is_histojob | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_import_shipto(string as_file) : boolean | Public | Fonction utilisateur publique |
| uof_import_contact(string as_file) : boolean | Public | Fonction utilisateur publique |
| uof_import_item(string as_file) : boolean | Public | Fonction utilisateur publique |
| uof_import_lot(string as_file) : boolean | Public | Fonction utilisateur publique |
| uof_import_adresrate(string as_file) : boolean | Public | Fonction utilisateur publique |
| uof_import_ratehead(string as_file) : boolean | Public | Fonction utilisateur publique |
| uof_import_rateline(string as_file) : boolean | Public | Fonction utilisateur publique |
| uof_import_dischead(string as_file) : boolean | Public | Fonction utilisateur publique |
| uof_import_linkaddisc(string as_file) : boolean | Public | Fonction utilisateur publique |
| uof_import_discline(string as_file) : boolean | Public | Fonction utilisateur publique |
| uof_import_disclogist(string as_file) : boolean | Public | Fonction utilisateur publique |
| uof_import_linkdisclogist(string as_file) : boolean | Public | Fonction utilisateur publique |
| uof_import_linkadrist(string as_file) : boolean | Public | Fonction utilisateur publique |
| uof_import_saledisc(string as_file) : boolean | Public | Fonction utilisateur publique |
| uof_import_promohead(string as_file) : boolean | Public | Fonction utilisateur publique |
| uof_import_promoline(string as_file) : boolean | Public | Fonction utilisateur publique |
| uof_import_linkadpromo(string as_file) : boolean | Public | Fonction utilisateur publique |
| uo_init_path_exp() : boolean | Public | Fonction publique |
| uof_import_ship(string as_file) : boolean | Public | Fonction utilisateur publique |
| uof_import_file(string as_file, nv_datastore anv_datastore, integer ai_exists) : boolean | Public | Fonction utilisateur publique |
| uof_export_csv(datawindow adw, string as_filename, string as_separator, boolean ab_header) : integer | Public | Fonction utilisateur publique |
| uof_export_csv(datastore adw, string as_filename, string as_separator, boolean ab_header) : integer | Public | Fonction utilisateur publique |
| uof_import_socity(string as_file) : boolean | Public | Fonction utilisateur publique |
| uof_transform_xls_txttab(string as_path, string as_file_xls, string as_file_txt, string as_error) : boolean | Public | Fonction utilisateur publique |
| uof_import_files() : void (subroutine) | Public | Fonction utilisateur publique |
| uof_export(nv_datastore adt_export, string as_adcode, string as_filename) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_export(uo_datawindow adw_export, string as_adcode, string as_filename) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
