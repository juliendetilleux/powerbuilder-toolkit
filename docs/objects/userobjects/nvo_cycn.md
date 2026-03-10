# nvo_cycn

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _stkbarcod
- **Description**: Objet du module Codes-barres/Stock

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_typ_parent | integer |
| ii_level | integer |
| idc_numcycn | decimal |
| is_location | string |
| is_lot | string |
| is_item | string |
| idc_get_qty | decimal |
| is_itemname | string |
| is_itum | string |
| idc_itbcqty | decimal |
| iw_current | w_ancestor_brf_bcd_cycn |
| is_CYCLECOUNT | string |
| idt_dluo | datetime |
| ib_qtylot | boolean |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_error_msg(string as_error_msg) : integer | Public | Fonction publique |
| of_verif_num_cycn(decimal adc_numcycn) : integer | Public | Fonction publique |
| of_good_location(string as_loc) : integer | Public | Fonction publique |
| of_get_statut(decimal adc_numcycn) : string | Public | Fonction publique |
| of_get_item() : integer | Public | Fonction publique |
| of_insertupdate_db() : integer | Public | Fonction publique |
| of_get_qty() : integer | Public | Fonction publique |
| of_open_wqty() : integer | Public | Fonction publique |
| of_get_all_item() : integer | Public | Fonction publique |
| of_insertrow_value() : integer | Public | Fonction publique |
| of_reset_decompte() : integer | Public | Fonction publique |
| of_verif_lot(string as_lot) : integer | Public | Fonction publique |
| of_input(string as_input) : integer | Public | Fonction publique |
| of_msg_to_do_level(integer ai_level) : string | Public | Fonction publique |
| of_begin() : void (subroutine) | Public | Fonction publique |
| of_affiche_num_inventaire() : void (subroutine) | Public | Fonction publique |
| of_reset_dw() : void (subroutine) | Public | Fonction publique |
| of_reset_affiche_num_inventaire() : void (subroutine) | Public | Fonction publique |
| of_reset_affiche_st_location() : void (subroutine) | Public | Fonction publique |
| of_affiche_location() : void (subroutine) | Public | Fonction publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_choice | Evenement personnalise |
