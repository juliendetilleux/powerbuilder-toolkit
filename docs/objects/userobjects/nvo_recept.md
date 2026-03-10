# nvo_recept

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _stock
- **Description**: Objet du module Stock

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |
| is_interactiv | boolean |
| is_ITUMTRF | string |
| is_RCPTLOT | string |
| is_CheckParamLotFss | string |
| is_print_rcpo | string |
| is_LBCPUR | string |
| is_PURVALREC | string |
| is_MFGRCPO | string |
| is_MSLOTSUPP | string |
| is_CHECKREC | string |
| il_hsseq | long |
| is_trcode | string |
| id_qty | decimal |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_recept_pur_normal(string as_item, long al_purhead, long al_purline, ...) : boolean | Public | Fonction utilisateur publique |
| uof_verif_unicite_lot(string as_lot, string as_item, long al_pursale) : integer | Public | Fonction utilisateur publique |
| uof_verif_lot(string as_lotint, string as_lotfss, long al_purhead, ...) : boolean | Public | Fonction utilisateur publique |
| uof_recept_st(boolean ab_updatemfghead, datetime adt_hsdatim, long al_purord, ...) : boolean | Public | Fonction utilisateur publique |
| uof_verif_nv(string as_data, string as_lottype) : boolean | Public | Fonction utilisateur publique |
| uof_check_tarif(string as_item) : boolean | Public | Fonction utilisateur publique |
| uof_check_recept_pur_normal(string as_item, string as_lotint, string as_lotfss, ...) : boolean | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
