# nvo_purrcpt

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _stkbarcod
- **Description**: Objet du module Codes-barres/Stock

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_typ_parent | int |
| ii_level | int |
| is_error | string |
| is_message | string |
| il_phcode | long |
| il_plline | long |
| il_phcntid | long |
| is_cust | string |
| is_lot | string |
| idt_dluo | datetime |
| id_weight | decimal |
| il_qty | long |
| is_itcode | string |
| is_itname | string |
| is_itlot | string |
| il_itval | int |
| ii_conv | int |
| ii_um | string |
| is_adcust | string |
| is_adsupp | string |
| is_RCPONOPUR | string |
| is_RCPOCKPUR | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_checkcmdpur(string as_data) : boolean | Public | Fonction utilisateur publique |
| uof_checkitem() : boolean | Public | Fonction utilisateur publique |
| uof_search_items() : boolean | Public | Fonction utilisateur publique |
| uof_checkcust(string as_data) : boolean | Public | Fonction utilisateur publique |
| uof_search_purline(string as_cust, string as_itcode, long al_purhead_fromsearch, ...) : integer | Public | Fonction utilisateur publique |
| uof_right() : string | Public | Fonction utilisateur publique |
| uof_showinfo() : void (subroutine) | Public | Fonction utilisateur publique |
| uof_showerror(string as_msg) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_cmdpur(string as_data) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_search_adresses() : void (subroutine) | Public | Fonction utilisateur publique |
| uof_search_cmdpur() : void (subroutine) | Public | Fonction utilisateur publique |
| uof_reset_variables() : void (subroutine) | Public | Fonction utilisateur publique |
| uof_reset_variables(boolean ab_resetall) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
