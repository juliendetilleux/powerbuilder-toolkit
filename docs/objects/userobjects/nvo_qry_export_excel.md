# nvo_qry_export_excel

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _query
- **Description**: Objet du module Requetes - fonctionnalite d'export

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |
| is_path_modele_sales | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uo_generate_excel(datetime adt_start, datetime adt_stop, string as_countrid) : long | Public | Fonction publique |
| uof_connect_excel(oleobject aoo_excel, string as_path) : boolean | Public | Fonction utilisateur publique |
| uof_complete_excel(oleobject loo_excel, nv_datastore ads_store) : boolean | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
