# nvo_imputcpt

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _sales
- **Description**: Objet du module Ventes

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |
| ib_initilised | boolean |
| is_MULTICO | string |
| is_progparam_IMPCPTS1 | string |
| is_progparam_IMPCPTP1 | string |
| is_IMPCPTS1 | string |
| is_IMPCPTP1 | string |
| is_adcode | string |
| is_mcdo | string |
| ii_adcptsal | integer |
| ii_adcptpur | integer |
| ii_adanalsal | integer |
| is_impcptcust | string |
| is_impcptpurcust | string |
| is_impcptanal2 | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_get_imputcpt_pur_fromitem(string as_item, string as_imputcpt_pur, string as_imputcptanal) : boolean | Public | Fonction utilisateur publique |
| uof_initialise_with_invoicehead(long al_invoicehead) : boolean | Public | Fonction utilisateur publique |
| uof_initialise_with_purinvoicehead(long al_purinvoicehead) : boolean | Public | Fonction utilisateur publique |
| uof_initialise_with_purghead(long al_purghead) : boolean | Public | Fonction utilisateur publique |
| uof_initialise_with_purhead(long al_purhead) : boolean | Public | Fonction utilisateur publique |
| uof_get_imputcpt_pur_frompc(string as_pccode, string as_item, string as_imputcpt_pur) : boolean | Public | Fonction utilisateur publique |
| uof_get_imputcpt_sale_fromshipcost(long al_shicosthead, long al_shicostline, string as_imputcpt, ...) : boolean | Public | Fonction utilisateur publique |
| uof_initialise(string as_adcode, string as_mcdo) : boolean | Public | Fonction utilisateur publique |
| uof_get_imputcpt_sale_fromitem(string as_item, string as_imputcpt, string as_imputcptanal, string as_imputcptanal2) : boolean | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
