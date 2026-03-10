# nvo_stock_aj

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _stock
- **Description**: Objet du module Stock - gestion de stock

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |
| il_histoseq | long |
| is_parentname | string |
| ib_interactive | boolean |
| is_SSCCGEST | string |
| il_hsseq | long[] |
| is_trcode | string[] |
| id_qty | decimal[] |
| il_row | long |
| is_itumtrf | string |
| is_rnamonpist | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_save_rnam(string as_lot, string as_loc1, string as_loc2, ...) : boolean | Public | Fonction utilisateur publique |
| uof_check_aj(transact atr_transact) : boolean | Public | Fonction utilisateur publique |
| uof_save_aj(transact atr_transact) : boolean | Public | Fonction utilisateur publique |
| uof_save_ajtf(transact atr_transdata) : boolean | Public | Fonction utilisateur publique |
| uof_reset_data_transact() : void (subroutine) | Public | Fonction utilisateur publique |
| uof_launch_caddi_ue_transaction() : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
