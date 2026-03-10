# gf_fact_create_kitng

- **Module**: `_sales` (Ventes et facturation)
- **Signature**: `boolean gf_fact_create_kitng(long al_ilcode, long al_illine)`
- **Description**: Cree les lignes de kit non gere en facturation

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `al_ilcode` | `long` | Valeur long - ilcode |
| `al_illine` | `long` | Valeur long - illine |

## Appele par

- `nvo_createinvoice` (_sales)
- `w_invlinek_update` (_sales)
- `w_invlines_update` (_sales)

## Appelle

- `dberrormsg`
- `gf_get_paramprog`

