# gf_cpt_numbercomplete

- **Module**: `_ifcpt` (Interface comptable)
- **Signature**: `string gf_cpt_numbercomplete(string as_string, integer ai_len, ref string as_Sign)`
- **Description**: Complete un numero pour la comptabilite

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_string` | `string` | Chaine - string |
| `ai_len` | `integer` | Entier - len |
| `as_Sign` | `ref string` | Chaine - sign |

## Appele par

- `gf_ean_create` (_masters)
- `gf_expm_expadrcpt` (_ifcpt)
- `gf_fill_techdata_ing` (_methods)
- `nvo_bcd_brf` (_stkbarcod)
- `nvo_edi_transfert` (_edilink)
- `nvo_export_wms` (_system)
- `nvo_factoring` (_ifcpt)
- `nvo_ship_pallet` (_sales)
- `uo_diffretrieve` (_system)
- `w_eurcpt_invexp` (_ifcpt)
- `w_eurcpt_purinvexp` (_ifcpt)
- `w_expm_invexp` (_ifcpt)
- `w_expm_purinvexp` (_ifcpt)
- `w_sales` (_sales)
- `w_sales_dirsal` (_sales_cash)
- `w_sscc_generation` (_sales)
- `w_techdata_link_update` (_methods)
- `w_techdata_merge` (_methods)
- `w_wings_invexp` (_ifcpt)
- `w_wings_purinvexp` (_ifcpt)

