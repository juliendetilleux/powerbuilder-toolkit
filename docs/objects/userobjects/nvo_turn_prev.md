# nvo_turn_prev

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _masters
- **Description**: Objet du module Donnees de base

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_insert_turn_prev(long al_turn, datetime adt_date) : boolean | Public | Fonction utilisateur publique |
| uof_isexist_turnprev_date(long al_turn, datetime adt_date) : integer | Public | Fonction utilisateur publique |
| uof_fill_monthcalendar(uo_monthcalendar auo_monthcal, long al_turn) : boolean | Public | Fonction utilisateur publique |
| uof_delete_turn_prev_fordate(long al_turn, datetime adt_date) : boolean | Public | Fonction utilisateur publique |
| uof_delete_turn_prev_foralldate(long al_turn) : boolean | Public | Fonction utilisateur publique |
| uof_getfirstdate_turn(long al_turn, datetime adt_date) : integer | Public | Fonction utilisateur publique |
| uof_getlastdate_turn(integer al_turn, datetime adt_date_max, datetime adt_date) : integer | Public | Fonction utilisateur publique |
| uof_insert_interval(long al_turn, integer ai_interval_day, datetime adt_date_start, ...) : boolean | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
