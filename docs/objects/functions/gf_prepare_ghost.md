# gf_prepare_ghost

- **Module**: `_sales` (Ventes et facturation)
- **Signature**: `boolean gf_prepare_ghost(long al_salcode, long al_salline)`
- **Description**: Prepare un enregistrement fantome

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `al_salcode` | `long` | Valeur long - salcode |
| `al_salline` | `long` | Valeur long - salline |

## Appele par

- `gf_alloc_delete` (_stock)
- `gf_alloclot` (_sales)
- `nv_sales` (_sales)
- `nvo_allocate` (_stock)
- `nvo_bcd_brf` (_stkbarcod)
- `nvo_mfgreport` (_manufg)
- `nvo_of_launch` (_manufg)
- `nvo_ship` (_sales)
- `w_allocateorder` (_manufg)
- `w_bcd_sales_directship` (_stkbarcod)
- `w_sales_allocate` (_sales)
- `w_sales_dirsal` (_sales_cash)
- `w_stockalloc` (_stock)

## Appelle

- `dberrormsg`
- `gf_get_paramprog`

