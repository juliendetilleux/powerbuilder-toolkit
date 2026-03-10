# nvo_edi_transfert

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _edilink
- **Description**: Objet d'integration EDI

## Variables d'instance

| Variable | Type |
|----------|------|
| istr_variables | gstr_specific |
| is_ErrMess | string |
| is_InfoLess | string |
| is_CustCode | string |
| is_Curr | string |
| idt_Date | datetime |
| il_LastLine | long |
| is_EnvSend | string |
| is_HeadRef | string |
| is_DiscDate | string |
| iboo_ClotHead | boolean |
| is_path | string |
| is_path_ext_import | string |
| is_path_ext_export | string |
| is_TURNSAL | string |
| is_turntruck | string |
| cbx_directprint | boolean |
| ls_uo_printer_selectedprinter | string |
| ib_create | boolean |
| is_print | string |
| is_QUICKTRUC | string |
| is_ehenvrec | string |
| is_NCEDIMAND | string |
| is_DESADV2QT | string |
| is_path_ext_alloti_import | string |
| is_path_ext_exki_import | string |
| is_MULTICO | string |
| is_EDIAUTLK | string |
| is_EDIINSEG | string |
| ilnb_newfiles | long |
| is_EDIIMPMA | string |
| il_EDIIMPMA | long |
| is_EDIINVQTY59 | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_datacontrol() : boolean | Public | Fonction utilisateur publique |
| uof_editie_creasalln(long al_salcode) : boolean | Public | Fonction utilisateur publique |
| uof_edifileimport(string as_datafilepath, string as_datafilename, boolean ab_interactiv) : boolean | Public | Fonction utilisateur publique |
| uof_clotedihead(string as_envsend, string as_headref) : boolean | Public | Fonction utilisateur publique |
| uof_ediimportfiles(boolean ab_interativ) : boolean | Public | Fonction utilisateur publique |
| uof_createedi_sale(boolean ab_interactiv) : boolean | Public | Fonction utilisateur publique |
| uof_extimportfiles(boolean ab_interactiv) : boolean | Public | Fonction utilisateur publique |
| uof_extfileimport(string as_datafilepath, string as_datafilename, string as_genmess, boolean ab_interactiv) : boolean | Public | Fonction utilisateur publique |
| allocate(long al_sel_order, long al_truck, string as_shcust) : integer | Public | Fonction publique |
| uof_truckitems(long al_salcode, datetime ad_allocdate, long al_truck, ...) : boolean | Public | Fonction utilisateur publique |
| uof_clotureorder(long al_wslwebidhead, uo_datawindow dw_head, long al_row) : boolean | Public | Fonction utilisateur publique |
| uof_extfilesales(boolean ab_interactiv) : boolean | Public | Fonction utilisateur publique |
| uof_extfilesale(boolean ab_interactiv, boolean ab_print, uo_datawindow dw_head, ...) : boolean | Public | Fonction utilisateur publique |
| uof_createlineorder(long al_wshcode, long al_lastline, string as_origin, ...) : boolean | Public | Fonction utilisateur publique |
| uof_recalc_value() : boolean | Public | Fonction utilisateur publique |
| uof_checkfile(long al_row, uo_datawindow dw_head, uo_datawindow dw_line, ...) : boolean | Public | Fonction utilisateur publique |
| uof_extimportfiles_alloti(boolean ab_interactiv) : boolean | Public | Fonction utilisateur publique |
| uof_extfileimport_alloti(string as_datafilepath, string as_datafilename, string as_genmess, boolean ab_interactiv) : boolean | Public | Fonction utilisateur publique |
| uof_checkfile_alloti(long al_row, uo_datawindow dw_head, uo_datawindow dw_line, ...) : boolean | Public | Fonction utilisateur publique |
| uof_extimportfiles_exki(boolean ab_interactiv) : boolean | Public | Fonction utilisateur publique |
| uof_extfileimport_exki(string as_datafilepath, string as_datafilename, string as_genmess, boolean ab_interactiv) : boolean | Public | Fonction utilisateur publique |
| uof_editie_creasalhd(long al_salcode, string as_ehheadref, datetime adt_ehreqdate, string as_ehcmnt) : boolean | Public | Fonction utilisateur publique |
| uof_create_edisalhead(string as_envsend, string as_headref, string as_envid, ...) : boolean | Public | Fonction utilisateur publique |
| uof_datacontrol(string as_type) : boolean | Public | Fonction utilisateur publique |
| uof_extimportfiles_spec(boolean ab_interactiv) : boolean | Public | Fonction utilisateur publique |
| uof_extfileimport_spec(string as_datafilepath, string as_datafilename, string as_genmess, boolean ab_interactiv) : boolean | Public | Fonction utilisateur publique |
| uof_search_path_edilink(long al_seq, string as_path, string as_error) : boolean | Public | Fonction utilisateur publique |
| uof_openfile(string as_path_filename, integer ai_file, string as_error) : boolean | Public | Fonction utilisateur publique |
| uof_filewrite(integer ai_filenum, string as_error, string as_path_filename, string as_stringtowrite) : boolean | Public | Fonction utilisateur publique |
| uof_send_cmdpur(long al_purhead, string as_message) : integer | Public | Fonction utilisateur publique |
| uof_create_edisalline(string as_envsend, string as_headref, string as_linenum, ...) : boolean | Public | Fonction utilisateur publique |
| uof_update_linkitad(string as_item, string as_cust, string as_ref, string as_error) : boolean | Public | Fonction utilisateur publique |
| uof_datacontrol_line(string as_error, string as_ehenvsend, string as_ehheadref, ...) : integer | Public | Fonction utilisateur publique |
| uof_edi_get_unitbybac(string as_item, string as_cust, string as_ean) : long | Public | Fonction utilisateur publique |
| uof_extfileimport_cust(string as_datafilepath, string as_datafilename, string as_genmess, boolean ab_interactiv) : boolean | Public | Fonction utilisateur publique |
| uof_extimportfiles_cust(boolean ab_interactiv) : boolean | Public | Fonction utilisateur publique |
| uof_replace(string as_string, string as_s1, string as_s2) : string | Public | Fonction utilisateur publique |
| uof_virgul(decimal adec) : string | Public | Fonction utilisateur publique |
| uof_virgul(decimal adec, integer ai_nb) : string | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
