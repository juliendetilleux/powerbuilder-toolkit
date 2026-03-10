# nvo_bcd_monitoring

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _stkbarcod
- **Description**: Objet du module Codes-barres/Stock - gestion des codes-barres

## Variables d'instance

| Variable | Type |
|----------|------|
| is_LABINCUB | string |
| ii_typ_parent | int |
| ii_level | int |
| ib_showmessage | boolean |
| is_error | string |
| idt_dw | uo_datawindow |
| is_machinhead | string |
| is_workers | string |
| Msg_Error | String |
| Msg_no_use | String |
| Msg_no_order | String |
| Msg_of_close | String |
| Msg_no_Item | String |
| Msg_no_lot | String |
| Msg_no_loc | String |
| Msg_nul_order | String |
| Msg_no_qty | String |
| Msg_miss_qty | String |
| Msg_Lot_QC | String |
| Msg_Lot_Exp | String |
| Msg_Lot_alloc | String |
| Msg_2much | String |
| Msg_Lot_read | String |
| Msg_Lot_ResExp | String |
| Conf_Cancel | String |
| Conf_Qty | String |
| Msg_no_loc_activate | String |
| Msg_loc_same | String |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| incub_in(string as_data) : integer | Public | Fonction publique |
| uof_incub_in_box(string as_data) : integer | Public | Fonction utilisateur publique |
| check_col(string as_data) : integer | Public | Fonction publique |
| uof_check_col_op(string as_data) : integer | Public | Fonction utilisateur publique |
| uof_check_col_box(string as_data) : integer | Public | Fonction utilisateur publique |
| uof_check_box(long al_box) : boolean | Public | Fonction utilisateur publique |
| uof_showconfirm(string as_msg) : boolean | Public | Fonction utilisateur publique |
| uof_incub_in_machine(string as_data) : integer | Public | Fonction utilisateur publique |
| uof_incub_in_showlevelinfo() : void (subroutine) | Public | Fonction utilisateur publique |
| uof_showerror(string as_msg) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_initialise(uo_datawindow adw, integer li_typ_parent) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_check_col_showlevelinfo() : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
