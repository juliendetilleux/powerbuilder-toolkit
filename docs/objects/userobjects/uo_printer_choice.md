# uo_printer_choice

- **Type**: User Object (Visuel)
- **Ancetre**: uo_userobject
- **Module**: _prints_std
- **Description**: Objet d'impression standard - gestion d'impression

## Variables d'instance

| Variable | Type |
|----------|------|
| dwc | DataWindowChild |
| is_selected_printer_code | string |
| is_default_printer_code | string |
| is_selected_printer_name | STRING |
| Ib_IsNT | Boolean |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| get_selected_printer_name() : string | Public | Fonction publique |
| get_selected_specific_printer(string as_report, string as_val) : string | Public | Fonction publique |
| get_specific_printer(string as_report, string as_val) : string | Public | Fonction publique |
| wf_getdefaultprinter() : string | Public | Fonction privee de fenetre |
| get_selected_printer() : string | Public | Fonction publique |
| get_default_printer() : string | Public | Fonction publique |
| set_printer(string as_newprinter) : string | Public | Fonction publique |
| set_selected_printer(string printer_code) : void (subroutine) | Public | Fonction publique |
| wf_listprinter() : void (subroutine) | Public | Fonction privee de fenetre |

## Evenements

Aucun evenement personnalise.
