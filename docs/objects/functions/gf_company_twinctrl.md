# gf_company_twinctrl

- **Module**: `_sales_crm` (CRM - Gestion de la relation client)
- **Signature**: `integer gf_company_twinctrl(ref st_company_twinctrl st_check)`
- **Description**: Controle les doublons de societes

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `st_check` | `ref st_company_twinctrl` | st company twinctrl |

## Appelle

- `dberrormsg`
- `gf_replace_character`
- `messagebox`

