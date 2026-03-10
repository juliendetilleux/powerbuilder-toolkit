# uo_cash_return

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _sales_cash
- **Description**: Objet utilisateur

## Variables d'instance

| Variable | Type |
|----------|------|
| il_error | long |
| is_error | string |
| istr_return | str_cash_return |
| is_item | string[] |
| is_lot | string[] |
| is_loc | string[] |
| is_ittyp | string[] |
| il_salorder | long[] |
| il_salline | long[] |
| is_um | string[] |
| idec_stdval | decimal[] |
| idec_salval | decimal[] |
| idec_tva | decimal[] |
| idec_tvaval | decimal[] |
| idec_totval | decimal[] |
| idec_bascost | decimal[] |
| idec_xtrcost | decimal[] |
| idec_currconv2 | decimal[] |
| is_hsprgcmnt | string |
| is_cust | string |
| il_newthead | long |
| idec_sum | decimal |
| idec_return | decimal |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_return(str_cash_return astr_return) : decimal | Public | Fonction utilisateur publique |
| uof_chgstock() : void (subroutine) | Public | Fonction utilisateur publique |
| uof_chgstock_packing(long al_tabline) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_chgstock_item(long al_count) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_createticket() : void (subroutine) | Public | Fonction utilisateur publique |
| uof_createticket_head() : void (subroutine) | Public | Fonction utilisateur publique |
| uof_createticket_line(long al_count) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_createhistocash() : void (subroutine) | Public | Fonction utilisateur publique |
| uof_print(string as_type) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_filldata() : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
