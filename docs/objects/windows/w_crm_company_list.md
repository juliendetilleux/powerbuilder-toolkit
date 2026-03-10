# w_crm_company_list

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_crm
- **Description**: Societes - Liste (CRM)

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
| isTab_OpenOrdTri | Any |
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

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteradresse() | public | Applique un filtre |
| arrange(string as_diffretrieve) | public | Reorganisation |
| wf_checkacess() | public | Validation |
| wf_complist_refresh(string adid) | public | Rafraichit l'affichage |
| wf_export() | public | Exportation |
| wf_print(string type_print) | public | Impression |
| wf_retrieve_sqlfilters() | public | Applique un filtre |
| wf_visibiltyf(boolean ab_visible) | public | Traitement wf_visibiltyf |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_postopen | Evenement personnalise ue_postopen |
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| remotesend | Evenement remotesend |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
| ue_keypressed | Evenement personnalise ue_keypressed |
| doubleclicked | Double-clic sur la fenetre |
