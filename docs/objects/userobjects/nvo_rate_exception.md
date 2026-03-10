# nvo_rate_exception

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
| uof_delete_rate_itad(long al_rate, string as_adcode, string as_itcode) : boolean | Public | Fonction utilisateur publique |
| uof_check_unicity(datetime adt_stardate, string as_itcode_tab[], string as_adcode, string as_message) : integer | Public | Fonction utilisateur publique |
| uof_check_unicity(datetime adt_stardate, string as_itcode, string as_adcode) : integer | Public | Fonction utilisateur publique |
| uof_add_cust(long al_rate) : boolean | Public | Fonction utilisateur publique |
| uof_check_unicity_ratecust(datetime adt_stardate, string as_adcode) : integer | Public | Fonction utilisateur publique |
| uof_delete_rate_ad(long al_rate, string as_adcode) : boolean | Public | Fonction utilisateur publique |
| uof_add_items(long al_rate, string as_adcode) : boolean | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
