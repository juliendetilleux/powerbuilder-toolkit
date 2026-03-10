# gf_get_file_xtrainfo

- **Module**: `_system` (Systeme)
- **Signature**: `boolean gf_get_file_xtrainfo(string as_pathfilename, ref string as_file_xtrainfo[])`
- **Description**: Recupere les informations supplementaires d'un fichier

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_pathfilename` | `string` | Chaine - pathfilename |
| `as_file_xtrainfo` | `ref string` | Chaine - file xtrainfo |

## Appele par

- `w_crm_mail_inbox` (_sales_crm)
- `w_crm_mail_inbox_test` (_sales_crm)
- `w_crm_merge` (_sales_crm)
- `w_crm_merge_fromfile` (_sales_crm)
- `w_crm_merge_list` (_sales_crm)
- `w_crm_merge_master` (_sales_crm)
- `w_dvi_merge` (_devis)
- `w_dvi_merge_master` (_devis)
- `w_techdata_merge` (_methods)
- `w_techdata_merge_master` (_methods)
- `ws_password` (_system)
- `ws_password_newdesign` (_system)
- `ws_password2` (_system)

## Appelle

- `gf_get_path_filename`

