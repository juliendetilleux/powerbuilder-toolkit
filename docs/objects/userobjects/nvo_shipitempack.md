# nvo_shipitempack

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _sales
- **Description**: Objet du module Ventes - gestion des articles

## Variables d'instance

| Variable | Type |
|----------|------|
| is_AutoBaseItem | String |
| ib_ticket | boolean |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_pack2nextship(string as_shipckqkwadd, string as_packid, decimal adec_qty) : boolean | Public | Fonction utilisateur publique |
| uof_reportpacksearch(string as_shipckqkwadd) : boolean | Public | Fonction utilisateur publique |
| uof_packtransact(string as_itempack, string as_adid, decimal adec_qty, ...) : boolean | Public | Fonction utilisateur publique |
| uof_autopacksearch(string as_item, string as_adid, decimal adec_qty, ...) : boolean | Public | Fonction utilisateur publique |
| uof_packtransact(string as_itempack, string as_adid, decimal adec_qty, ...) : boolean | Public | Fonction utilisateur publique |
| uof_stocknegtreat(string as_pack) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
