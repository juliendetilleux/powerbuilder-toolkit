# invoice_expiry

- **Module**: `_sales` (Ventes et facturation)
- **Signature**: `datetime invoice_expiry(datetime datestart, string paymnt_typ)`
- **Description**: Calcule l'echeance d'une facture

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `datestart` | `datetime` | datetime |
| `paymnt_typ` | `string` | string |

## Appele par

- `nvo_createinvoice` (_sales)
- `nvo_if_transfert` (_edilink)
- `nvo_open_return_update` (_sales)
- `w_create_invoice_note` (_sales)
- `w_inv_directsal` (_sales)
- `w_invhead_update` (_sales)
- `w_profhead_update` (_sales)
- `w_purinvhead_update` (_purch)
- `w_quick_purinvoice` (_purch)

## Appelle

- `relativedatetime`

