# nvo_launch_atreceipt

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _manufg
- **Description**: Objet du module Fabrication

## Variables d'instance

| Variable | Type |
|----------|------|
| is_AdId | string |
| is_itcode | string |
| is_error | string |
| is_mfgdeclar | string |
| is_MFGRCPO | string |
| il_histoseq | long |
| il_of | long |
| ib_newof | boolean |
| ii_Ret | int |
| invo_of_launch | nvo_of_launch |
| lnvo_bcd | nvo_bcd_brf |
| is_it_sel_lot | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_dlmo(long al_of, string al_lot, decimal ad_qty) : boolean | Public | Fonction utilisateur publique |
| uof_recept(long al_plcode, long al_plline, decimal ad_qty, string as_lot) : boolean | Public | Fonction utilisateur publique |
| uof_launchof(string as_item, decimal ad_qty, boolean lb_showmessage, long al_of) : boolean | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
