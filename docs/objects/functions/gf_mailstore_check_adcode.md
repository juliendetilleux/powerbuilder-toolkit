# gf_mailstore_check_adcode

- **Module**: `_sales_crm` (CRM - Gestion de la relation client)
- **Signature**: `boolean gf_mailstore_check_adcode(string mailstore_path, string adcode)`
- **Description**: Verifie le code adresse du magasin de mails

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `mailstore_path` | `string` | string |
| `adcode` | `string` | string |

## Appele par

- `uo_crm_maildw` (_sales_crm)
- `uo_tab_crm_company_detail` (_pad)
- `w_crm_company_detail` (_sales_crm)
- `w_crm_mail_inbox` (_sales_crm)
- `w_crm_mailcenter` (_sales_crm)
- `w_crm_mailsend` (_sales_crm)
- `w_crm_mailshow` (_sales_crm)
- `w_email` (_prints_std)
- `w_email_old` (_prints_std)

## Appelle

- `gf_mailstore_create`
- `gf_path_set`
- `messagebox`

