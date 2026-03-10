# nvo_rate_recalc

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _masters
- **Description**: Objet du module Donnees de base

## Variables d'instance

| Variable | Type |
|----------|------|
| iuo_extendeddw | uo_extendeddw |
| idw | uo_datawindow |
| is_error | string |
| is_RATEMARGC | string |
| is_PURCOSTPC | string |
| invo_import | nvo_import |
| lds_ret | nv_datastore |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uf_save() : boolean | Public | Fonction utilitaire |
| uf_ratemodify() : boolean | Public | Fonction utilitaire |
| uf_update_purcost() : boolean | Public | Fonction utilitaire |
| uf_insertratline_bypriceweight(long al_rate, decimal ad_price_bykilo, boolean ab_onlyfab) : boolean | Public | Fonction utilitaire |
| uf_preparedw_bypriceweight(uo_datawindow ldw, long al_rate, decimal ad_price_bykilo, boolean ab_onlyfab) : boolean | Public | Fonction utilitaire |
| uf_update_purcost_2() : boolean | Public | Fonction utilitaire |
| uf_createdatastore(string as_sql) : nv_datastore | Public | Fonction utilitaire |
| uf_insertratline(long al_rate) : boolean | Public | Fonction utilitaire |
| uf_preparedw(uo_datawindow ldw, long al_rate) : boolean | Public | Fonction utilitaire |
| uof_creation_fichier_rateline(string as_item, long al_rates) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
