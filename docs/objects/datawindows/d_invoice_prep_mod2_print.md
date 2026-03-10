# d_invoice_prep_mod2_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT shiphead.shcust,   
         adresses.adname,   
         shipline.slcode,   
         shipline.slline,   
         shipline.slitem,   
         items.itname,   
         shiphead.shdate,   
         shipline.slqty,   
         items.itum  
    FROM shiphead,   
         shipline,   
         adresses,   
         items  
   WHERE ( shipline.slcode = shiphead.shcode ) and  
         ( shiphead.shcust = adresses.adcode ) and  
         ( shipline.slitem = items.itcode ) and  
         ( shipline.slinv = 'N' ) and
	    ( shiphead.shdate <= :adt_todate )   
ORDER BY shiphead.shcust ASC,   
         shipline.slcode ASC,   
         shipline.slline ASC   

```

## Colonnes
| Colonne |
|---------|
| shiphead_shcust |
| adresses_adname |
| shipline_slcode |
| shipline_slline |
| shipline_slitem |
| items_itname |
| shiphead_shdate |
| shipline_slqty |
| items_itum |

