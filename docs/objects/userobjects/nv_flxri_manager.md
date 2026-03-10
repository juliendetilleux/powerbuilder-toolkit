# nv_flxri_manager

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport

## Variables d'instance

| Variable | Type |
|----------|------|
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| long | constant |
| is_dbmotor | string |
| itr_sql | transaction |
| is_group_table | string |
| is_group_column | string |
| is_user_table | string |
| is_user_column | string |
| is_user_link | string |
| is_first_library | string |
| ii_pb_version | integer |
| inv_param | NV_FLXRI_DB_PARAM |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| UpdateSyntax(string sSyntax, string sReference) : string | Public | Fonction publique |
| _in(any aa_item, any aa_list[]) : boolean | Public | Fonction publique |
| of_apply_customization(datastore ads_target, long al_id_customization) : integer | Public | Fonction publique |
| of_apply_customization(datawindow adw_target, long al_id_customization) : integer | Public | Fonction publique |
| of_apply_customization_user(datawindow adw_target, long al_id_user) : integer | Public | Fonction publique |
| of_apply_customization_user(datastore ads_target, long al_id_user) : integer | Public | Fonction publique |
| of_find_customization_user(string as_dataobject, long al_id_user) : long | Public | Fonction publique |
| of_replace(string as_source, string as_what, string as_by_what) : string | Public | Fonction publique |
| of_replace(string as_source, string as_what[], string as_by_what[]) : string | Public | Fonction publique |
| of_update_customization(long al_id_customization) : void (subroutine) | Public | Fonction publique |
| of_nested_purge() : void (subroutine) | Public | Fonction publique |
| of_nested_customize(datastore ads_target) : void (subroutine) | Public | Fonction publique |
| of_nested_customize(datawindow adw_target) : void (subroutine) | Public | Fonction publique |
| of_update_customizations() : void (subroutine) | Public | Fonction publique |
| of_update_customization(long al_id_customization, boolean ab_force_upgrade) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
