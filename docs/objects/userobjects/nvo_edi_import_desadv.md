# nvo_edi_import_desadv

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _edilink
- **Description**: Objet d'integration EDI - fonctionnalite d'import

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |
| is_anomaly | string |
| ab_interactiv | boolean |
| is_sep | string |
| is_delimiter | string |
| is_path_import_desadv | string |
| is_ITUMTRF | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_check_gln(string as_gln, integer ai_typ_socity, string as_adcode) : integer | Public | Fonction utilisateur publique |
| uof_check_ref(string as_ref, long al_purhead, string as_file_ref, string as_phcntref) : integer | Public | Fonction utilisateur publique |
| uof_check_gtin_in_itemsonly(string as_gtin, string as_itcode, decimal ad_coef) : integer | Public | Fonction utilisateur publique |
| uof_check_qty(string as_item, decimal ad_qty, decimal ad_qtytarif, boolean ab_isitemtarif) : integer | Public | Fonction utilisateur publique |
| uof_search_item_in_purline(string as_itcode, long al_purhead, decimal ad_qty) : long | Public | Fonction utilisateur publique |
| uof_check_desadv_imported(long al_ed_id, string as_anomaly) : boolean | Public | Fonction utilisateur publique |
| uof_check_recept_prepare_desadv_imported(long al_ed_id) : boolean | Public | Fonction utilisateur publique |
| uof_recept_prepare_desadv_imported(long al_ed_id) : boolean | Public | Fonction utilisateur publique |
| uof_cancel_pur_edihead(long al_ed_id) : boolean | Public | Fonction utilisateur publique |
| uof_cancel_pur_ediline(long al_el_id) : boolean | Public | Fonction utilisateur publique |
| uof_get_salline_from_purline(long al_purhead, long al_purline, long al_salecode, long al_salline) : integer | Public | Fonction utilisateur publique |
| uof_clot_pur_ediline(long al_el_id) : boolean | Public | Fonction utilisateur publique |
| uof_clot_pur_edihead(long al_ed_id) : boolean | Public | Fonction utilisateur publique |
| uof_is_consigne(string as_itcode, string as_pkcode) : integer | Public | Fonction utilisateur publique |
| uof_insert_packing(string as_pkcode, long al_salhead, long al_salline, long al_qty) : boolean | Public | Fonction utilisateur publique |
| uof_get_salline_from_purhead(long al_purhead, long al_salecode, long al_salline) : integer | Public | Fonction utilisateur publique |
| uof_check_ifcanclot_pur_edihead(long al_ed_id) : integer | Public | Fonction utilisateur publique |
| uof_save_refdesadv_st(long al_purhead, string as_refdesadv_st) : boolean | Public | Fonction utilisateur publique |
| uof_import_file(string as_pathfile, integer ai_type) : long | Public | Fonction utilisateur publique |
| uof_import_line_tabsep(string as_tabline[], long al_line, string as_pathfile, long al_ed_id) : boolean | Public | Fonction utilisateur publique |
| uof_import_files() : long | Public | Fonction utilisateur publique |
| uof_import_line(string as_tabline[], long al_line, string as_pathfile, long al_ed_id) : boolean | Public | Fonction utilisateur publique |
| uof_check_file(string as_filename, datetime adt_lastintegration, string as_ref) : integer | Public | Fonction utilisateur publique |
| uof_print_anomaly() : void (subroutine) | Public | Fonction utilisateur publique |
| uof_reset_anomaly() : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
