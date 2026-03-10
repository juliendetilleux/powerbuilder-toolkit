# nvo_export_wms

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _system
- **Description**: Objet systeme - fonctionnalite d'export

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |
| is_location_wms | string |
| is_type_WMS | string |
| is_path_import | string |
| is_path_export | string |
| is_WAREHOUSE_CODE | string |
| itr_transaction | nv_transaction |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_export_pur(integer ai_file, long al_purhead) : integer | Public | Fonction utilisateur publique |
| uof_export_suppliers() : integer | Public | Fonction utilisateur publique |
| uof_export_supplier(integer ai_file, string as_adcode) : integer | Public | Fonction utilisateur publique |
| uof_export_askstock_lot(integer ai_file, string as_lot) : integer | Public | Fonction utilisateur publique |
| uof_export_askstock_all(integer ai_file) : integer | Public | Fonction utilisateur publique |
| uof_export_ean(integer ai_file, string as_item) : integer | Public | Fonction utilisateur publique |
| uof_export_ean_allitems() : integer | Public | Fonction utilisateur publique |
| uof_export_lotsfrompurline(integer ai_file, long al_purhead) : integer | Public | Fonction utilisateur publique |
| uof_export_cust(integer ai_file, string as_adcode) : integer | Public | Fonction utilisateur publique |
| uof_export_custs() : integer | Public | Fonction utilisateur publique |
| uof_export_sales() : integer | Public | Fonction utilisateur publique |
| uof_export_purs() : integer | Public | Fonction utilisateur publique |
| uof_export_lotstatus(integer ai_file, string as_lot, string as_old_status) : integer | Public | Fonction utilisateur publique |
| uof_export_sale(integer ai_file, long al_salhead) : integer | Public | Fonction utilisateur publique |
| uof_export_sale(integer ai_file, long al_order, integer al_orderline, ...) : integer | Public | Fonction utilisateur publique |
| uof_export_sale_return(long al_shiphead) : integer | Public | Fonction utilisateur publique |
| uof_export_pur(integer ai_file, long al_order, integer ai_type) : integer | Public | Fonction utilisateur publique |
| uof_geterror() : string | Public | Fonction utilisateur publique |
| uof_openfile_uniquename(string as_filename) : integer | Public | Fonction utilisateur publique |
| uof_export_items() : integer | Public | Fonction utilisateur publique |
| uof_export_item(integer ai_file, string as_item) : integer | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
