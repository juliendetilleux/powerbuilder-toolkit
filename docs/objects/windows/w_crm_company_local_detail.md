# w_crm_company_local_detail

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _sales_crm
- **Description**: Societes local - Detail (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_DDEHandle | long |
| idwc | dataWindowChild |
| idwc1 | dataWindowChild |
| idwc2 | dataWindowChild |
| ids | nv_datastore |
| is_adcode | string |
| ii_ctadcode | integer |
| idt_datesuiv | datetime |
| idt_dateprec | datetime |
| iole_word | OLEObject |
| iboo_OpenWithPmix | boolean |
| il_sel_action_id | Long |
| il_sel_histo_id | Long |
| isTab_OpenOrdTri | Any |
| is_usacttyp | string |
| is_usnamedd | string |
| is_filtre | string |
| il_reid | long |
| is_parm | string |
| il_row_insert_contact | long |
| il_row_delete_contact | long |
| is_act_type | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_contact_input_ok() | public | Verifie wf_contact_input_ok |
| wf_insert_contact() | public | Ajout |
| wf_delete_contact() | public | Suppression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| losefocus | Evenement losefocus |
| rbuttondown | Evenement rbuttondown |
| clicked | Clic sur la fenetre |
