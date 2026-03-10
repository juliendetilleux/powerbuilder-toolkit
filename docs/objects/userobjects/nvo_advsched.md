# nvo_advsched

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _planning
- **Description**: Objet du module Planning

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |
| is_ADVSCHD2 | string |
| is_ADVSCHD1 | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_check_machine_timeavailable(integer ai_shednumber, long al_machine, long al_mfgwcreqs_advsc, ...) : integer | Public | Fonction utilisateur publique |
| uof_shedule_one(long al_num, long al_mwcode, long al_mwline, string as_error) : boolean | Public | Fonction utilisateur publique |
| uof_shift(long al_num, string as_error) : boolean | Public | Fonction utilisateur publique |
| uof_shift_one(long al_num, integer al_advschednum, string as_error) : boolean | Public | Fonction utilisateur publique |
| uof_shedule(long al_num, integer ai_typ, long al_mwcode, ...) : boolean | Public | Fonction utilisateur publique |
| uof_complete_schedule(long al_num, integer ai_typ, long al_mwcode, ...) : boolean | Public | Fonction utilisateur publique |
| uof_shedule(long al_num, integer ai_typ, string as_error) : boolean | Public | Fonction utilisateur publique |
| uof_complete_schedule(long al_num, integer ai_typ, string as_error) : boolean | Public | Fonction utilisateur publique |
| uof_assign(long al_num, string as_error) : boolean | Public | Fonction utilisateur publique |
| uof_delete_all(long al_num, string as_error) : boolean | Public | Fonction utilisateur publique |
| uof_delete_rec(long al_num, string as_error) : boolean | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
