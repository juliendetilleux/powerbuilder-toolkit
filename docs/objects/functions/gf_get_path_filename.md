# gf_get_path_filename

- **Module**: `_system` (Systeme)
- **Signature**: `boolean gf_get_path_filename(string as_pathfilename, ref string as_path, ref string as_filename)`
- **Description**: Extrait le nom de fichier d'un chemin complet

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_pathfilename` | `string` | Chaine - pathfilename |
| `as_path` | `ref string` | Chaine - path |
| `as_filename` | `ref string` | Chaine - filename |

## Appele par

- `gf_get_file_xtrainfo` (_system)
- `w_item_update` (_masters)
- `w_mfglabel_update` (_masters)

