# nvo_createinvoice

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _sales
- **Description**: Objet du module Ventes - gestion d'inventaire

## Variables d'instance

| Variable | Type |
|----------|------|
| idt_today | datetime |
| idt_expiry | datetime |
| idt_InvDate | datetime |
| idec_rist | decimal |
| idec_currconv | decimal |
| idec_esct | decimal |
| idec_risttnet1 | decimal |
| idec_risttnet2 | decimal |
| idec_risttnet3 | decimal |
| idec_risttnet1typ | decimal |
| idec_risttnet2typ | decimal |
| idec_risttnet3typ | decimal |
| il_paymode | long |
| ilt_ih_created | long[] |
| is_cptper | string |
| is_cust | string |
| is_curr | string |
| is_tvaref | string |
| is_paymnt | string |
| is_typtva | string |
| is_comment | string |
| is_invattention | string |
| is_Lang | String |
| is_StructCom | String |
| is_InvPRist | String |
| istTab_ShipLineToInv | st_ShipLineToInv[] |
| il_InvHead | Long |
| is_ITUMTRF | string |
| is_INVPACKDI | string |
| ib_fromdirectship | boolean |
| is_CallOrigin | String |
| is_INVEXPCPT | string |
| is_MULTICO | string |
| is_NUMINNC | string |
| is_error | string |
| invo_imputcpt | nvo_imputcpt |
| is_neinvoiced | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_caddi0003(gstr_specific astr_caddi) : integer | Public | Fonction utilisateur publique |
| uof_invmodify(any astr_specific) : integer | Public | Fonction utilisateur publique |
| uof_createinvoicable(long al_invoicehead, uo_datawindow adw_invoicable) : boolean | Public | Fonction utilisateur publique |
| uof_createinvoice(string as_cust, string as_curr, string as_cmnt, ...) : long | Public | Fonction utilisateur publique |
| uof_createinvoicehead(string as_cust, string as_curr, string as_comment, ...) : long | Public | Fonction utilisateur publique |
| uof_msg(long al_code, integer ai_type, boolean ab_show_msg) : string | Public | Fonction utilisateur publique |
| uof_msg(long al_code, integer ai_type) : string | Public | Fonction utilisateur publique |
| uof_create_invoiceline_withoutexp(long al_invoice, string as_item, decimal ad_tvarate, ...) : integer | Public | Fonction utilisateur publique |
| uof_add_line_esc(long al_ihcode) : integer | Public | Fonction utilisateur publique |
| uof_createinvoiceline(long al_invoicehead, string as_item, long al_shiphead, ...) : long | Public | Fonction utilisateur publique |
| uof_end_transaction(long al_code, boolean ab_withmsg, integer ai_type, ...) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
