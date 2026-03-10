# gf_fill_techdata_ing

- **Module**: `_methods` (Methodes et nomenclatures)
- **Signature**: `boolean gf_fill_techdata_ing(string as_item, decimal adec_percmin, string as_lang)`
- **Description**: Remplit les donnees techniques ingredients

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_item` | `string` | Chaine - item |
| `adec_percmin` | `decimal` | decimal |
| `as_lang` | `string` | Chaine - lang |

## Appele par

- `gf_techdata_recalc` (_methods)
- `w_techdata_link_update` (_methods)
- `w_techdata_torecalc` (_methods)

## Appelle

- `dberrormsg`
- `gf_cpt_numbercomplete`
- `gf_get_param_n`

