# nvo_sscc

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _stock
- **Description**: Objet du module Stock

## Variables d'instance

| Variable | Type |
|----------|------|
| ibol_return | boolean |
| ii_count | integer |
| is_newloc | string |
| istr_sscc | str_sscc[] |
| istr_sscc_arg | str_sscc |
| istr_ssccprint | str_sscc[] |
| istr_ssccnull | str_sscc[] |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_1_select() : boolean | Public | Fonction utilisateur publique |
| uof_open_window(string as_window, str_sscctab astr_param) : boolean | Public | Fonction utilisateur publique |
| uof_trans_ajds(integer ai_trsign) : boolean | Public | Fonction utilisateur publique |
| uof_1_qty(integer ai_trsign) : boolean | Public | Fonction utilisateur publique |
| uof_trans_ajst(integer ai_trsign) : boolean | Public | Fonction utilisateur publique |
| uof_trans_ajtf(integer ai_trsign) : boolean | Public | Fonction utilisateur publique |
| uof_stock_transactions(string as_transcode, str_sscc astr_arg, string as_newloc) : boolean | Public | Fonction utilisateur publique |
| uof_sales_ship_return(str_sscc astr_arg, string as_newloc) : boolean | Public | Fonction utilisateur publique |
| uof_1_print() : boolean | Public | Fonction utilisateur publique |
| uof_1_create(integer ai_count) : boolean | Public | Fonction utilisateur publique |
| uof_1_update(str_sscc astr_sscc, integer ai_count) : boolean | Public | Fonction utilisateur publique |
| uof_1_delete(string as_ssccnum) : boolean | Public | Fonction utilisateur publique |
| uof_1_param_and_check(str_sscc astr_sscc) : boolean | Public | Fonction utilisateur publique |
| uof_1_get_info(str_sscc astr_sscc[]) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_1_empl() : void (subroutine) | Public | Fonction utilisateur publique |
| uof_1_error(string as_errormsg) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
