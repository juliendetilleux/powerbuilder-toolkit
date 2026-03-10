# gf_check_mailoutawaiting

- **Module**: `_sales_crm` (CRM - Gestion de la relation client)
- **Signature**: `integer gf_check_mailoutawaiting(string as_user)`
- **Description**: Verifie les mails en attente d'envoi

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_user` | `string` | Chaine - user |

## Appele par

- `w_crm_mailcenter` (_sales_crm)
- `w_crm_mdi_frame` (_sales_crm)
- `w_intro_new` (_design)

## Appelle

- `gf_get_crmmail_path`
- `gf_mailstore_check_user`

