# uo_tab_crm_company_list

- **Type**: User Object (Visuel)
- **Ancetre**: userobject
- **Module**: _pad
- **Description**: Objet utilisateur - gestion CRM

## Variables d'instance

| Variable | Type |
|----------|------|
| istr_return | s_sqlsearch_return |
| istr_empty | s_sqlsearch_return |
| idwc1 | dataWindowChild |
| AdressNameFilter | string |
| idwc_Group | DataWindowChild |
| is_Action | String |
| ib_Maintallowed | Boolean |
| ib_canceled | boolean |
| WithAltMenu | boolean |
| AltMenu | string |
| Altmenuitem | string |
| isTab_OpenOrdTri | Any[] |
| is_fkey | string |
| iSel_adresse_id | string |
| ib_canfilter | boolean |
| is_BDBADRS | string |
| is_basicSqlSelect | string |
| fullfilter | String |
| is_mccode | String |
| is_mcfilter | String |
| ib_withMultiCo | Boolean |
| SqlSelect | String |
| SqlSelect_shipto | String |
| is_sqlselect | s_sqlselect |
| is_code | string |
| is_drcreauser | string |
| il_drcontactid | long |
| is_path_word | string |
| is_adcode_word | string |
| is_sOpen_word | string |
| is_typ_user | string |
| iboo_save | boolean |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_checkacess() : boolean | Public | Fonction privee de fenetre |
| wf_visibiltyf(boolean ab_visible) : void (subroutine) | Public | Fonction privee de fenetre |
| arrange(string as_diffretrieve) : void (subroutine) | Public | Fonction publique |
| filteradresse() : void (subroutine) | Public | Fonction publique |
| wf_complist_refresh(string adid) : void (subroutine) | Public | Fonction privee de fenetre |
| wf_export() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_print(string type_print) : void (subroutine) | Public | Fonction privee de fenetre |
| wf_retrieve_sqlfilters() : void (subroutine) | Public | Fonction privee de fenetre |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_postopen | Evenement personnalise |
| ue_keypressed | Evenement personnalise |
