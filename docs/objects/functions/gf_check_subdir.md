# gf_check_subdir

- **Module**: `_system` (Systeme)
- **Signature**: `integer gf_check_subdir(string as_path, string as_dir)`
- **Description**: Verifie l'existence d'un sous-repertoire

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_path` | `string` | Chaine - path |
| `as_dir` | `string` | Chaine - dir |

## Appele par

- `nvo_alwegen` (_system)
- `nvo_colisage` (_sales)
- `nvo_edi_import_desadv` (_edilink)
- `nvo_edi_transfert` (_edilink)
- `nvo_import` (_masters)
- `nvo_import_wms` (_system)
- `nvo_planifiedtask` (_system)
- `nvo_purchase_auto_create` (_purch)
- `w_ajtf_prep_byfiles` (_stock)
- `w_deposit` (_purch)
- `w_edi_order` (_edilink)
- `w_edi_transactions` (_edilink)
- `w_forecasts` (_planning)
- `w_mfg_prep_byfiles` (_manufg)
- `w_planifiedtask_execute` (_system)
- `w_print` (_prints_std)
- `w_purrequest` (_purch)
- `w_sale_prep_byfiles` (_sales)
- `w_sales_ext_manage` (_sales)
- `ws_brf_password` (_stkbarcod)
- `ws_password` (_system)
- `ws_password_newdesign` (_system)
- `ws_password2` (_system)

## Appelle

- `gf_replaceall`

