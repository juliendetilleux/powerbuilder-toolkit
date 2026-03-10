# gf_get_files

- **Module**: `_system` (Systeme)
- **Signature**: `integer gf_get_files(string as_identifier_file, ref string as_files[])`
- **Description**: Recupere la liste des fichiers d'un repertoire

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_identifier_file` | `string` | Chaine - identifier file |
| `as_files` | `ref string` | Chaine - files |

## Appele par

- `nvo_alwegen` (_system)
- `nvo_edi_import_desadv` (_edilink)
- `nvo_edi_transfert` (_edilink)
- `nvo_import` (_masters)
- `nvo_import_wms` (_system)
- `nvo_planifiedtask` (_system)
- `w_ajtf_prep_byfiles` (_stock)
- `w_cpt_invexp` (_ifcpt)
- `w_cpt_purinvexp` (_ifcpt)
- `w_mfg_prep_byfiles` (_manufg)
- `w_purrequest` (_purch)
- `w_sale_prep_byfiles` (_sales)

