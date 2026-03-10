# nvo_alwegen

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _system
- **Description**: Objet systeme

## Variables d'instance

| Variable | Type |
|----------|------|
| is_file_out | string |
| is_file_in2 | string |
| is_file_in | string |
| is_error | string |
| is_balance | string |
| is_balance2 | string |
| ii_f | integer |
| il_iteration | Long |
| il_time | long |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_getweight_loop(decimal ad_weight, long al_loop, long al_time, boolean ab_showmessage) : integer | Public | Fonction utilisateur publique |
| uof_getweight_loop(decimal ad_weight, boolean ab_showmessage) : integer | Public | Fonction utilisateur publique |
| uof_send_getweight_of(string as_filename_created, long al_of, string as_lot, string as_balanceid) : boolean | Public | Fonction utilisateur publique |
| uof_getweight_loop(decimal ad_weight, long al_loop, long al_time, ...) : integer | Public | Fonction utilisateur publique |
| uof_getweight_loop(decimal ad_weight, long al_of, string as_lot, ...) : integer | Public | Fonction utilisateur publique |
| uof_getweight(string as_filename, decimal ad_weight) : integer | Public | Fonction utilisateur publique |
| uof_send_getweight_manuel(string as_filename_created) : boolean | Public | Fonction utilisateur publique |
| uof_send_getweight_manuel(string as_filename_created, string as_balanceid) : boolean | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
