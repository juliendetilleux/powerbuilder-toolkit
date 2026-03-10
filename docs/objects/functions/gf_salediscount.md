# gf_salediscount

- **Module**: `_sales` (Ventes et facturation)
- **Signature**: `boolean gf_salediscount(long al_salhead, boolean ab_showmessagebox)`
- **Description**: Calcule la remise sur une vente

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `al_salhead` | `long` | Valeur long - salhead |
| `ab_showmessagebox` | `boolean` | Booleen - showmessagebox |

## Appele par

- `nvo_edi_transfert` (_edilink)
- `nvo_if_transfert` (_edilink)
- `w_dviln_salord_launch` (_devis)
- `w_edi_order` (_edilink)
- `w_edi_transactions` (_edilink)
- `w_quicksales` (_sales)
- `w_rates` (_masters)
- `w_salline_update` (_sales)

## Appelle

- `dberrormsg`
- `gf_get_paramprog`

