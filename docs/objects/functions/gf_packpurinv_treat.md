# gf_packpurinv_treat

- **Module**: `_purch` (Achats)
- **Signature**: `boolean gf_packpurinv_treat(string as_adid, string as_packid, long al_qty, long al_invhead, integer ai_invline, string as_action)`
- **Description**: Traite le colisage d'une facture d'achat

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

- `w_purinvlinp_update` (_purch)
- `w_purinvoices` (_purch)
- `w_quick_purinvoice` (_purch)

