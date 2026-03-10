# dberrormsg

- **Module**: `_system` (Systeme)
- **Signature**: `boolean dberrormsg(string progref, long dberrornb, string dberrormsg)`
- **Description**: Affiche un message d'erreur base de donnees

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `progref` | `string` | string |
| `dberrornb` | `long` | long |
| `dberrormsg` | `string` | string |

## Appele par

- `createadcode` (_masters)
- `createnewlotnb` (_stock)
- `createwcschedule` (_planning)
- `getnexthistoseq` (_general)
- `gf_access_setnewobjects` (_system)
- `gf_action_delete` (_sales_crm)
- `gf_adaptpaidwithbalance` (_ifcpt)
- `gf_adresse_inputok` (_masters)
- `gf_adsalesauthblock` (_ifcpt)
- `gf_adsalesauthoblock` (_sales)
- `gf_alloc_delete` (_stock)
- `gf_alloclot` (_sales)
- `gf_autoallocate_withoutstock` (_stock)
- `gf_bomaudit_save` (_methods)
- `gf_check_methode_access` (_methods)
- `gf_check_methode_access_operation` (_methods)
- `gf_check_mfg_mat_status` (_quality)
- `gf_check_new_pwd` (_system)
- `gf_check_of_access` (_methods)
- `gf_check_pwd_expiry` (_system)
- `gf_checkacces` (_system)
- `gf_checkmodules` (_system)
- `gf_clot_jalonsintern` (_projects)
- `gf_company_twinctrl` (_sales_crm)
- `gf_createpromoline` (_sales)
- `gf_delimit_ean128` (_stkbarcod)
- `gf_dvi_itemcode_create` (_devis)
- `gf_ean_create` (_masters)
- `gf_fact_create_kitng` (_sales)
- `gf_fill_techdata_ing` (_methods)
- `gf_get_discrate` (_sales)
- `gf_get_itemfromean13` (_stkbarcod)
- `gf_get_logisticdisc` (_sales)
- `gf_get_nexthistocashseq` (_sales_cash)
- `gf_get_promodisc` (_sales)
- `gf_get_ratesalval` (_devis)
- `gf_get_saledisc` (_sales)
- `gf_get_salerate` (_sales)
- `gf_get_taxes` (_sales)
- `gf_getlastoffernbr` (_devis)
- `gf_getnextmfgord` (_general)
- `gf_import_actions` (_sales_crm)
- `gf_import_tickets` (_projects)
- `gf_ischarged` (_manufg)
- `gf_itemaudit` (_masters)
- `gf_itempurcost` (_purch)
- `gf_location_buffer_mixed` (_stock)
- `gf_lot_uniqueid` (_stkbarcod)
- `gf_mailstore_create` (_sales_crm)
- `gf_methodcost_copy2item` (_methods)
- ... et 626 autres

## Appelle

- `clean_comment`
- `get_os`

