# gf_packsalinv_treat

- **Module**: `_sales` (Ventes et facturation)
- **Signature**: `boolean gf_packsalinv_treat(string as_adid, string as_packid, long al_qty, long al_invhead, integer ai_invline, string as_action)`
- **Description**: Traite le colisage d'une facture de vente

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_adid` | `string` | Chaine - adid |
| `as_packid` | `string` | Chaine - packid |
| `al_qty` | `long` | Valeur long - qty |
| `al_invhead` | `long` | Valeur long - invhead |
| `ai_invline` | `integer` | Entier - invline |
| `as_action` | `string` | Chaine - action |

## Appele par

- `w_invlinep_update` (_sales)
- `w_invoices` (_sales)

