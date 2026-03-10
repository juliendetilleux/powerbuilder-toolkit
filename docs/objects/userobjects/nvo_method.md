# nvo_method

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _methods
- **Description**: Objet du module Methodes/Nomenclatures

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_createdatastore(string as_sql, string as_error) : nv_datastore | Public | Fonction utilisateur publique |
| uof_copy_bomcoitem(string as_item_tocopy, string as_item_dest, string as_type_item_tocopy, string as_type_item_dest) : boolean | Public | Fonction utilisateur publique |
| uof_copy_bomline(string as_item_tocopy, string as_item_dest, string as_type_item_tocopy, string as_type_item_dest) : boolean | Public | Fonction utilisateur publique |
| uof_copy_bomxtra(string as_item_tocopy, string as_item_dest, string as_type_item_tocopy, string as_type_item_dest) : boolean | Public | Fonction utilisateur publique |
| uof_copy_routline(string as_item_tocopy, string as_item_dest, boolean ab_routtest, ...) : boolean | Public | Fonction utilisateur publique |
| uof_copy_routreject(string as_item_tocopy, string as_item_dest, string as_type_item_tocopy, string as_type_item_dest) : boolean | Public | Fonction utilisateur publique |
| uof_copy_routtest(string as_item_tocopy, string as_item_dest, string as_typ_item_tocopy, string as_typ_item_dest) : boolean | Public | Fonction utilisateur publique |
| uof_copymethods_var(string as_itemtocopy, string as_type_itemtocopy) : boolean | Public | Fonction utilisateur publique |
| uof_qctchoice_create(string as_testid) : long | Public | Fonction utilisateur publique |
| uof_copymethod(string as_itemtocopy, string as_itemdest, boolean ab_bomcoitem, ...) : boolean | Public | Fonction utilisateur publique |
| uof_copymethod(string as_itemtocopy, string as_itemdest, boolean ab_bomcoitem, ...) : boolean | Public | Fonction utilisateur publique |
| uof_copy_bomhead(string as_item_tocopy, string as_item_dest, string as_type_item_tocopy, ...) : boolean | Public | Fonction utilisateur publique |
| uof_copy_docref(string as_item_tocopy, string as_item_dest, string as_type_item_tocopy, string as_type_item_dest) : boolean | Public | Fonction utilisateur publique |
| uof_delete_bom(string as_bhcode, string as_bhtype) : boolean | Public | Fonction utilisateur publique |
| uof_copymethods(string as_itemtocopy) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
