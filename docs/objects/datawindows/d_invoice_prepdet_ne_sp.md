# d_invoice_prepdet_ne_sp

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT  * FROM sp_invoice_prep_ne_aut (:Selected_cust, :Selected_curr, :as_mcdo)     

```

## Colonnes
| Colonne |
|---------|
| shipline_slcode |
| shipline_slline |
| shiphead_shdate |
| shipline_slitem |
| shipline_slqty |
| items_itum |
| shipline_slsalorder |
| shipline_slsalline |
| items_itname |
| shipline_slitcustnam |
| salhead_shcustref |
| salhead_shcustpay |
| salhead_shcust |
| qt |
| salhead_shdlvt |
| salhead_shdlvtplace |
| shiphead_shshipto |
| shipto_stdesc |
| salhead_shcurr |
| shipline_linesort |
| shiphead_shcust |
| datship |

