# uo_qry_items_itstat_marque

- **Type**: User Object (Visuel)
- **Ancetre**: uo_userobject
- **Module**: _query
- **Description**: Objet du module Requetes - gestion des articles

## Variables d'instance

| Variable | Type |
|----------|------|
| idwc_itstat1 | DataWindowChild |
| idwc_itstat2 | DataWindowChild |
| idwc_itstat3 | DataWindowChild |
| idwc_items | DataWindowChild |
| idwc_itventstock | DataWindowChild |
| idwc_marque | DataWindowChild |
| idwc_sous_marque | DataWindowChild |
| is_Choice_ItStat1 | String |
| is_Choice_ItStat2 | String |
| is_Choice_ItStat3 | String |
| is_Choice_Item | String |
| ItemCover | String |
| iboo_Item | Boolean |
| il_choice_itcptanal | long |
| ib_allitstat | boolean |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_get_marque() : string | Public | Fonction publique |
| of_get_sous_marque() : string | Public | Fonction publique |
| dynafilter() : void (subroutine) | Public | Fonction publique |
| noitemchoice() : void (subroutine) | Public | Fonction publique |
| uof_noitstat() : void (subroutine) | Public | Fonction utilisateur publique |
| preselect(string pre_item) : void (subroutine) | Public | Fonction publique |
| setventstock(boolean ab_visible) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
