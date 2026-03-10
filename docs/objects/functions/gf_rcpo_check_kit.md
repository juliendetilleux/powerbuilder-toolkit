# gf_rcpo_check_kit

- **Module**: `_stock` (Gestion des stocks)
- **Signature**: `boolean gf_rcpo_check_kit(datetime adt_recdate, string as_fsslot, ref string astab_lotkitcomp2print[])`
- **Description**: Verifie un kit lors de la reception commande

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `adt_recdate` | `datetime` | DateTime - recdate |
| `as_fsslot` | `string` | Chaine - fsslot |
| `astab_lotkitcomp2print` | `ref string` | string |

## Appelle

- `dberrormsg`
- `getnexthistoseq`

