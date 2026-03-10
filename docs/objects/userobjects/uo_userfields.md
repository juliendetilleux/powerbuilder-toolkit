# uo_userfields

- **Type**: User Object (Visuel)
- **Ancetre**: uo_userobject
- **Module**: _system
- **Description**: Controle visuel pour la gestion des champs utilisateur personnalisables

## Variables d'instance

| Variable | Type |
|----------|------|
| il_ScrollPos | Long |
| is_Label | String |
| idwc_ChHead | DataWindowChild |
| ii_Ret | Integer |
| ib_modified | boolean |
| iboo_Mod4Other | Boolean |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_usrfields_edit(string as_table, string as_retcolname[], string as_retcolval[]) : integer | Public | Edite les champs utilisateur pour une table |
| uof_usrfields_edit(string as_table_ref, string as_table, string as_retcolname[], string as_retcolval[]) : integer | Public | Edite les champs utilisateur avec table de reference |
| uof_labelverif(integer ai_start) : void | Public | Verifie les libelles |
| uof_ufupdate(string as_action, string as_keyval[]) : void | Public | Met a jour les champs utilisateur |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_itemchanged | Declenchement lors de la modification d'un element |
