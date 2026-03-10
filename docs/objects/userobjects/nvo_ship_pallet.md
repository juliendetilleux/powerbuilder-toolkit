# nvo_ship_pallet

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _sales
- **Description**: Objet du module Ventes - gestion des expeditions

## Variables d'instance

| Variable | Type |
|----------|------|
| ib_error | boolean |
| is_error | string |
| is_DESADV2QT | string |
| is_MULTICO | string |
| il_ShipNotice | Long |
| is_customer | String |
| id_dateship | datetime |
| ii_Weight2Use4EAN | integer |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_update(uo_datawindow dw_sales_palet_label, string as_elfct) : boolean | Public | Fonction utilisateur publique |
| uof_insert(uo_datawindow dw_sales_palet_label, boolean ab_replace, boolean ab_modif, ...) : boolean | Public | Fonction utilisateur publique |
| uof_save(uo_datawindow dw_sales_palet_label, boolean ab_replace, boolean ab_modif, ...) : integer | Public | Fonction utilisateur publique |
| uof_initialize_dw(uo_datawindow dw_sales_palet_label, boolean ab_group_by_lotptr, long al_shipnotice, ...) : boolean | Public | Fonction utilisateur publique |
| uof_send_desadv(long al_shiphead, string as_message, long al_rowcount_shipline) : boolean | Public | Fonction utilisateur publique |
| uof_create_auto_salegroup(long al_salhead) : boolean | Public | Fonction utilisateur publique |
| uof_create_num_sscc(string as_ean_cust, string as_sscc) : boolean | Public | Fonction utilisateur publique |
| uof_sscc_ok(uo_datawindow dw_sales_palet_label) : boolean | Public | Fonction utilisateur publique |
| uof_set_notmodified(uo_datawindow dw_sales_palet_label) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_check_edipc(long al_shiphead) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_get_back_datas(string as_customer, long al_shipnotice, uo_datawindow dw_sales_palet_label, ...) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
