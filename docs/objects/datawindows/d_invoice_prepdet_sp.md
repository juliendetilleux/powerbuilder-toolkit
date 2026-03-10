# d_invoice_prepdet_sp

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
 SELECT  * FROM sp_invoice_prep_aut (:Selected_cust, :Selected_curr, :as_mcdo)   
  
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
| shipline_slicustname |
| salhead_shcustref |
| salheah_shcustpay |
| salehead_shcust |
| line_type |
| salhead_shdlvt |
| salhead_shlvtplace |
| shiphead_shipto |
| shipto_stdesc |
| salhead_shcurr |
| shipline_linesort |
| shiphead_shcust |
| shiphead_shclot |
| datship |

