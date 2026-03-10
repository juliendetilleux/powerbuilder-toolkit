# w_crm_mailadress_sel

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_crm
- **Description**: Mailadress sel (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_origin_select_merge | string |
| idwc1 | datawindowchild |
| il_cpt | long |
| ScreenFilter | string |
| fullfilter | String |
| its_adcode | string |
| iti_ctline | integer |
| its_ctmail | string |
| its_adname | string |
| its_ctname | string |
| is_BDBADRS | string |
| is_basicSqlSelect | string |
| is_mccode | String |
| is_mcfilter | String |
| ib_withMultiCo | Boolean |
| SqlSelect | String |
| SqlSelect_shipto | String |
| is_MULTICO | string |
| is_sqlselect | s_sqlselect |
| is_code | string |
| is_fkey | string |
| istr_return | s_sqlsearch_return |
| istr_empty | s_sqlsearch_return |
| AdressNameFilter | string |
| idwc_Group | DataWindowChild |
| is_Action | String |
| ib_canfilter | boolean |
| is_from | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| wf_selectadress() | public | Selection |
| wf_setselection(long al_row, string as_type) | public | Definit selection |
| wf_insertfilteredrows() | public | Applique un filtre |
| filteradresse() | public | Applique un filtre |
| arrange(string as_diffretrieve) | public | Reorganisation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| getfocus | Evenement getfocus |
| losefocus | Evenement losefocus |
