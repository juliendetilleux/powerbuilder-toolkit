# nvo_factoring

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _ifcpt
- **Description**: Objet d'interface comptable

## Variables d'instance

| Variable | Type |
|----------|------|
| is_factnum | string |
| is_factpath | string |
| ii_factbord | integer |
| is_selected_invoices | string |
| is_selected_clients | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| set_invoice_list(string as_selected_invoices) : string | Public | Fonction publique |
| facto_ing() : integer | Public | Fonction publique |
| nulltoempty(string input, integer length, string sign, string choice) : string | Public | Fonction publique |
| get_factbord() : integer | Public | Fonction publique |
| save_factbord(integer ai_factbord) : integer | Public | Fonction publique |
| facto_eurofactor() : integer | Public | Fonction publique |
| facto_cbc() : integer | Public | Fonction publique |
| facto_dexia() : integer | Public | Fonction publique |
| get_factnum() : string | Public | Fonction publique |
| get_factpath() : string | Public | Fonction publique |
| set_client_list(string as_selected_clients) : string | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
