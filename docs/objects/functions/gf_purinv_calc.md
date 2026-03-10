# gf_purinv_calc

- **Module**: `_purch` (Achats)
- **Signature**: `integer gf_purinv_calc(long sel_invoice)`
- **Description**: Calcule une facture d'achat

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `sel_invoice` | `long` | long |

## Appele par

- `nvo_if_transfert` (_edilink)
- `nvo_rebilling` (_sales)
- `w_invoice_billing` (_sales)
- `w_purinvoices` (_purch)
- `w_system_upgrade` (_system)

## Appelle

- `dberrormsg`

