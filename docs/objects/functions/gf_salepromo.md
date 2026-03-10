# gf_salepromo

- **Module**: `_sales` (Ventes et facturation)
- **Signature**: `integer gf_salepromo(long al_shcode)`
- **Description**: Calcule la promotion sur une vente

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `al_shcode` | `long` | Valeur long - shcode |

## Appele par

- `w_quicksales` (_sales)
- `w_salline_update` (_sales)

## Appelle

- `gf_getsaleprice`

