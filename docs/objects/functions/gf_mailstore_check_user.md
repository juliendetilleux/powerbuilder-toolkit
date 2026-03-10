# gf_mailstore_check_user

- **Module**: `_sales_crm` (CRM - Gestion de la relation client)
- **Signature**: `boolean gf_mailstore_check_user(string mailstore_path)`
- **Description**: Verifie l'utilisateur du magasin de mails

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `mailstore_path` | `string` | string |

## Appele par

- `gf_check_mailoutawaiting` (_sales_crm)
- `w_crm_mailcenter` (_sales_crm)

## Appelle

- `gf_mailstore_create`
- `gf_path_set`

