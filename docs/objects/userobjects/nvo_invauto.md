# nvo_invauto

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _sales
- **Description**: Objet du module Ventes - gestion d'inventaire

## Variables d'instance

| Variable | Type |
|----------|------|
| is_cptperiod | string |
| is_error | string |
| invo_createinvoice | nvo_createinvoice |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_regroup_deliver(nv_datastore dw_invoice_prepdet, string as_payterm, string as_cust, ...) : long | Public | Fonction utilisateur publique |
| uof_regroup_ship(nv_datastore dw_invoice_prepdet, string as_payterm, string as_cust, ...) : long | Public | Fonction utilisateur publique |
| uof_custpayctrl(long al_cx, nv_datastore lds_matallocs, string as_compcustpay) : integer | Public | Fonction utilisateur publique |
| uof_billing_auto(string as_invautod) : boolean | Public | Fonction utilisateur publique |
| uof_check_ifvalues(long al_salhead[], long al_salline[]) : integer | Public | Fonction utilisateur publique |
| uof_not_regroup(nv_datastore dw_invoice_prepdet, string as_payterm, string as_cust, ...) : long | Public | Fonction utilisateur publique |
| uof_regroup_cmde(nv_datastore dw_invoice_prepdet, string as_payterm, string as_cust, ...) : long | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
