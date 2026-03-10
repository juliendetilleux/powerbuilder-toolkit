# nvo_ship

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _sales
- **Description**: Objet du module Ventes - gestion des expeditions

## Variables d'instance

| Variable | Type |
|----------|------|
| MANDATORY_COUNT | int (Constant) |
| is_items_itum | string |
| is_items_itstdpur | string |
| is_salhead_shcust | string |
| is_salline_slshipto | string |
| is_salline_slcode | string |
| is_salline_slline | string |
| is_salline_slitem | string |
| is_matallocs_maallocqty | string |
| is_matallocs_ma2issueqty | string |
| is_matallocs_malot | string |
| is_matallocs_malotorgcode | string |
| is_matallocs_maloc | string |
| is_matallocs_maallocseq | string |
| is_matallocs_masscc | string |
| is_mcdo_name | string |
| is_salline_slediean | string |
| is_adresses_adnetyp | string |
| shippackline | long |
| is_CompCustPay | string |
| is_gbackorder | string |
| in_gbackorder | decimal |
| ib_setbackorderotherline | boolean |
| is_taxt | string |
| il_tab_tax | long[] |
| is_error | string |
| is_CONTPREPA | string |
| il_salorder_crate | long |
| il_salline_crate | long |
| is_matallocs_malotdlc | string |
| ib_certautoprint | boolean |
| il_InvHead | Long |
| is_LaunchInv | String |
| ib_crate_redesign | boolean |
| il_hsseq | long[] |
| is_trcode | string[] |
| id_qty | decimal[] |
| il_row | long |
| ib_directsale | boolean |
| is_shcons | string |
| is_slsample | string |
| is_ADINVTO | string |
| is_CallOrigin | String |
| is_ITUMTRF | string |
| il_shiphead | long |
| is_MULTICO | string |
| il_QCNum | long |
| ic_certautoprint | char |
| is_DESADVAUTO | string |
| ii_Weight2Use4EAN | int |
| iboo_Fedex_ShipVal_0 | Boolean |
| ilTab_SalHead | Long[] |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_shipment(uo_datawindow adw_data, datetime adt_shipdate, boolean ab_addtoship, ...) : integer | Public | Fonction utilisateur publique |
| uof_desallocate(uo_datawindow adw_dw, uo_checkbox acbx_desalloc, string as_newloc, string as_cancelsalline) : integer | Public | Fonction utilisateur publique |
| uof_createinvoice(string as_cust, string as_curr, long al_shiphead, ...) : long | Public | Fonction utilisateur publique |
| uof_crates(uo_datawindow adw_data, string as_cust, long al_rows[]) : boolean | Public | Fonction utilisateur publique |
| uof_colisage(uo_datawindow adw_data, string as_cust, long al_shiphead, long al_rows[]) : boolean | Public | Fonction utilisateur publique |
| uof_kitcomp_diffline(uo_datawindow adw_data, long al_salhead, long al_salline) : integer | Public | Fonction utilisateur publique |
| uof_not_in(integer ai_vector[], integer ai_value) : boolean | Public | Fonction utilisateur publique |
| uof_add_manual_cons(long al_salcode, long al_salline, long al_shiphead, string as_adid) : boolean | Public | Fonction utilisateur publique |
| uof_regroup_all(string as_method, string as_payterm, string as_cust, ...) : long | Public | Fonction utilisateur publique |
| uof_create_multigroup(long al_salhead, long al_shiphead) : boolean | Public | Fonction utilisateur publique |
| uof_autoprint_certificate(datawindow adw_data) : integer | Public | Fonction utilisateur publique |
| uof_allocatecust(uo_datawindow adw_data, string as_adcode) : integer | Public | Fonction utilisateur publique |
| uof_desadvauto(long al_shiphead) : boolean | Public | Fonction utilisateur publique |
| uof_shipfromcash(long ii_noticket, string ss_cust, long ii_shcode, ...) : integer | Public | Fonction utilisateur publique |
| uof_custpayctrl(long al_cx, string method, nv_datastore ldt_invoice_prepdet) : integer | Public | Fonction utilisateur publique |
| uof_setbackorderotherline(boolean ab_choice) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_corr_crate() : void (subroutine) | Public | Fonction utilisateur publique |
| uof_regroup_cmde(string as_method, string as_payterm, string as_cust, ...) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_file_creation(long al_shipcode, long al_firstline) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_ctrl_fedex_shipval(long al_shiphead) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_fedex_ship_val_0_init(long al_shiphead) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
