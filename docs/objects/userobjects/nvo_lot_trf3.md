# nvo_lot_trf3

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _stock
- **Description**: Objet du module Stock - gestion des lots

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |
| ib_BRF | boolean |
| ib_showmessage | boolean |
| is_BCDLOCQU | string |
| is_ITUMTRF | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_deletealloc_trf3_bylot(string as_item, string as_lot, string as_loc, ...) : boolean | Public | Fonction utilisateur publique |
| uof_deletealloc_trf3_bytrf3_line(long al_tlteid, long al_tlline) : boolean | Public | Fonction utilisateur publique |
| uof_cancel_line_trf3(long al_tlteid, long al_tlline) : integer | Public | Fonction utilisateur publique |
| uof_recept_trf3(string as_lot, string as_loc_from, string as_loc_to, ...) : boolean | Public | Fonction utilisateur publique |
| uof_prepare_trf3(string as_lot, string as_loc, decimal ad_qty_toalloc, ...) : boolean | Public | Fonction utilisateur publique |
| uof_prepare_trf3(string as_lot, decimal ad_qty, long al_tlteid, long al_tlline) : boolean | Public | Fonction utilisateur publique |
| uof_fullallocate_possible(long al_shcode, long al_slline) : integer | Public | Fonction utilisateur publique |
| uof_search_lot_from_loetiq(struct_info_recept ast_info_recept_origine, struct_info_recept ast_info_recept_return[]) : boolean | Public | Fonction utilisateur publique |
| uof_search_remanent_validity(string as_item, string as_cust, long al_salorder, ...) : boolean | Public | Fonction utilisateur publique |
| uof_showerror(string as_message) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
