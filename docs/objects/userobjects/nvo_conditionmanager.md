# nvo_conditionmanager

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _projects
- **Description**: Objet du module Projets

## Variables d'instance

| Variable | Type |
|----------|------|
| is_ventserviceforfait | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| nvof_extract_sallines_to_invoice(long al_sale, string as_tempdb_name) : long | Public | Fonction publique |
| nvof_deactivate(long al_condition, boolean ab_confirm) : long | Public | Fonction publique |
| nvof_deactivate(long al_condition, long al_line, boolean ab_confirm) : long | Public | Fonction publique |
| nvof_deactivate(long al_condition, long al_line) : long | Public | Fonction publique |
| nvof_assignatecondition(long al_condition, long al_salecode, boolean ab_confirm) : long | Public | Fonction publique |
| nvof_assignatecondition(long al_condition, long al_salecode, long al_saleline, boolean ab_confirm) : long | Public | Fonction publique |
| nvof_inheritcondition(long al_parent_code) : long | Public | Fonction publique |
| nvof_inheritcondition(long al_parent_code, long al_child_code) : long | Public | Fonction publique |
| nvof_deactivate(long al_condition) : long | Public | Fonction publique |
| nvof_createdatastore(string as_sql) : nv_datastore | Public | Fonction publique |
| nvof_activate(long al_condition, boolean ab_confirm) : long | Public | Fonction publique |
| nvof_copy_condition(long al_refcopy, string as_level) : long | Public | Fonction publique |
| nvof_extract_invoices(string as_winmode) : long | Public | Fonction publique |
| nvo_create_jalonref(long al_cljalon, long al_filecode) : boolean | Public | Fonction publique |
| nvof_evaluate_condition(long al_condition, long al_sale) : boolean | Public | Fonction publique |
| nvof_test(long al_chcode, long al_shcode) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
