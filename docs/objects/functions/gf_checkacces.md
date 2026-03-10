# gf_checkacces

- **Module**: `_system` (Systeme)
- **Signature**: `boolean gf_checkacces(string as_user, integer ai_object)`
- **Description**: Verifie les droits d'acces utilisateur

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_user` | `string` | Chaine - user |
| `ai_object` | `integer` | Entier - object |

## Appele par

- `m_crm_mdi` (_sales_crm)
- `m_erp_mdi` (_system)
- `m_frame_design` (_design)
- `m_qry_popups` (_query)
- `m_quick_directsales` (_sales_cash)
- `uo_qry` (_query)
- `uo_tab_crm_company_detail` (_pad)
- `uo_tab_crm_company_list` (_pad)
- `uo_toolbar_right` (_design)
- `w_a_mdi_pmi` (_ancestor)
- `w_a_pmi` (_ancestor)
- `w_adresse_sqlsearch` (_masters)
- `w_adresse_sqlsearch_multi` (Shared_peppol)
- `w_adresse_sqlselect` (_masters)
- `w_adresse_update` (_masters)
- `w_adresses` (_masters)
- `w_brf_menu_mfg` (_stkbarcod)
- `w_cashfood` (_sales_food)
- `w_clot_reports` (_monthclot)
- `w_contact_sqlselect` (_masters)
- `w_crm_appointments` (_sales_crm)
- `w_crm_company_detail` (_sales_crm)
- `w_crm_company_list` (_sales_crm)
- `w_crm_mdi_frame` (_sales_crm)
- `w_crm_param` (_sales_crm)
- `w_deposit_update` (_purch)
- `w_devis` (_devis)
- `w_dsh_main` (_dashboard)
- `w_file_update` (_projects)
- `w_fileline_sqlselect` (_projects)
- `w_files` (_projects)
- `w_interco` (_system)
- `w_intro` (_system)
- `w_intro_com` (_system)
- `w_invoices_qry` (_sales)
- `w_item_link` (_edilink)
- `w_item_sqlsearch` (_masters)
- `w_item_sqlselect` (_masters)
- `w_item_update` (_masters)
- `w_itemanx_update` (_masters)
- `w_itemfan_update` (_masters)
- `w_items` (_masters)
- `w_items_cust` (_masters)
- `w_itemsrv_update` (_masters)
- `w_launchorder` (_manufg)
- `w_locations_sqlselect` (_masters)
- `w_lot_update` (_quality)
- `w_methods` (_methods)
- `w_mfgorder_report` (_manufg)
- `w_profils_user` (_system)
- ... et 35 autres

## Appelle

- `dberrormsg`

