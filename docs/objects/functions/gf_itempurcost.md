# gf_itempurcost

- **Module**: `_purch` (Achats)
- **Signature**: `integer gf_itempurcost(ref s_purcost astruct_purcost, readonly decimal adec_qty, readonly string as_currencie)`
- **Description**: Calcule le cout d'achat d'un article

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `astruct_purcost` | `ref s_purcost` | s purcost |
| `adec_qty` | `readonly decimal` | decimal |
| `as_currencie` | `readonly string` | Chaine - currencie |

## Appele par

- `nvo_if_transfert` (_edilink)
- `w_brf_transact_rcpo3` (_stkbarcod)
- `w_purchase_mrp` (_purch)
- `w_purinvlins_update` (_purch)
- `w_purline_update` (_purch)
- `w_purlinelimite_update` (_purch)
- `w_quickpurchase` (_purch)
- `w_quickpurchaselimite` (_purch)
- `w_transact_rcpo3` (_stock)

## Appelle

- `dberrormsg`

