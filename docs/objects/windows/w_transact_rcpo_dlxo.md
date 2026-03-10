# w_transact_rcpo_dlxo

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions rcpo dlxo (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| idec_pur_umconv | decimal |
| idec_pur_qtyreq | decimal |
| il_purhead | long |
| il_purline | long |
| il_pur_salhead | long |
| il_pur_salline | long |
| is_pur_um | string |
| is_pur_item | string |
| is_pur_suppcode | string |
| is_print_rcpo | string |
| idt_sal_datplan | datetime |
| idec_sal_umconv | decimal |
| is_sal_item | string |
| is_sal_um | string |
| is_sal_custcode | string |
| is_sal_auto | string |
| ii_shipto | integer |
| is_curr | string |
| il_lastshiphead | long |
| idec_item_purval | decimal |
| idec_item_salval | decimal |
| ii_item_valid | integer |
| is_item_um | string |
| is_item_withlot | string |
| is_item_deflot | string |
| is_item_name | string |
| ii_rcpo_umsel | integer |
| ii_dlxo_umsel | integer |
| iboo_lotfss2int | boolean |
| il_rcpo_num | long |
| is_rcpo_um | string |
| is_fsslot | string |
| is_fsslot_cmnt | string |
| is_checkparamlotfss | string |
| is_rcpo_prgcmnt | string |
| itr_rcpo | transact |
| itr_dlxo | transact |
| id_qty | decimal |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| save_tr() | public | Sauvegarde les donnees |
| wf_verif_lot() | public | Verifie wf_verif_lot |
| wf_verif_nv(string as_data) | public | Verifie wf_verif_nv |
| wf_verif_unicite_lot(string as_lot) | public | Calcule/retourne wf_verif_unicite_lot |
| initwindow() | public | Initialisation |
| wf_inittransacts() | public | Initialisation |
| wf_check() | public | Validation |
| wf_check_realdatclot(datetime realdate) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| getfocus | Evenement getfocus |
| losefocus | Evenement losefocus |
