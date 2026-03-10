# invoicesalecalc_m

- **Module**: `_sales` (Ventes et facturation)
- **Signature**: `integer invoicesalecalc_m(long salinvoice)`
- **Description**: Calcul facture de vente (methode M)

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `salinvoice` | `long` | long |

## Appele par

- `invoicesalecalc` (_sales)
- `nvo_rebilling` (_sales)
- `nvo_subscription` (_devis)
- `w_system_application` (_system)
- `w_system_upgrade` (_system)

## Appelle

- `dberrormsg`
- `gf_get_paramprog`

