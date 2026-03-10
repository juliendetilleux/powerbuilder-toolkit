# nvo_subscription

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _devis
- **Description**: Objet du module Devis

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |
| is_escttyp | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_subheads_billing(uo_datawindow adw_subscription_billing) : long | Public | Fonction utilisateur publique |
| uof_invoices_point(uo_datawindow adw_subscription_billing) : long | Public | Fonction utilisateur publique |
| uof_invoice_point(long al_shcode, datetime adt_start) : long | Public | Fonction utilisateur publique |
| uof_invoices_point_fact(uo_datawindow adw_subscription_billing) : long | Public | Fonction utilisateur publique |
| uof_invoice_point_fact(uo_datawindow adw_subscription_billing, long al_row) : long | Public | Fonction utilisateur publique |
| uof_subhead_action(long al_sh_id, datetime adt_start, datetime adt_stop) : long | Public | Fonction utilisateur publique |
| uof_get_error() : string | Public | Fonction utilisateur publique |
| uof_adapt_indexation() : boolean | Public | Fonction utilisateur publique |
| uof_adapt_status() : boolean | Public | Fonction utilisateur publique |
| uof_subhead_billing(long al_sh_id, datetime adt_start, datetime adt_stop) : long | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
