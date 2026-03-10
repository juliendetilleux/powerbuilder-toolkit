# nvo_rebilling

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _sales
- **Description**: Objet du module Ventes

## Variables d'instance

| Variable | Type |
|----------|------|
| is_REBILLING | string |
| is_error | string |
| ib_interactiv | boolean |
| is_multico | string |
| is_NUMINNC | string |
| is_cptperiod | string |
| is_tvahierarchy | string |
| is_LBCPUR | string |
| is_PURINVFR | string |
| il_REBILCPS | long |
| il_REBILCPP | long |
| id_tvalvl_presta | decimal |
| is_REBILINGMP | string |
| invo_imputcpt | nvo_imputcpt |
| ist_salinvoice | st_invoice[] |
| ist_purinvoice | st_invoice[] |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_rebilling_of(long al_of, string as_mcdomaker, string as_mcdoitem, ...) : boolean | Public | Fonction utilisateur publique |
| uof_rebilling_mp(long al_of, string as_mcdomaker, string as_mcdoitem, ...) : boolean | Public | Fonction utilisateur publique |
| uof_return_list_of() : string | Public | Fonction utilisateur publique |
| uof_rebilling_mp2(long al_of, string as_mcdoitem, string as_cmnt, decimal ad_qtyhead) : boolean | Public | Fonction utilisateur publique |
| uof_getinvoicecount() : long | Public | Fonction utilisateur publique |
| uof_commit_allinv() : int | Public | Fonction utilisateur publique |
| uof_getlistsalinvoice() : string | Public | Fonction utilisateur publique |
| uof_getlistpurinvoice() : string | Public | Fonction utilisateur publique |
| uof_create_invoiceline(long al_invoice, string as_item, decimal ad_stdval, ...) : boolean | Public | Fonction utilisateur publique |
| uof_create_purinvline(long al_purinvoice, string as_item, decimal ad_stdval, ...) : boolean | Public | Fonction utilisateur publique |
| uof_create_purinvhead(string as_mcdomaker, string as_mcdoitem, string as_cmnt, long al_numsaleinv) : long | Public | Fonction utilisateur publique |
| uof_create_invoiceline_presta(long al_invoice, string as_item, decimal ad_stdval, ...) : boolean | Public | Fonction utilisateur publique |
| uof_create_purinvline_presta(long al_purinvoice, string as_item, decimal ad_stdval, ...) : boolean | Public | Fonction utilisateur publique |
| uo_search_ratevalue(string as_item, string as_cust, decimal ad_rlval) : boolean | Public | Fonction publique |
| uof_of_notinvoice(long al_of, string as_mcdomaker, string as_mcdoitem) : boolean | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
