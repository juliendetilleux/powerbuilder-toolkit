# d_ship_noninvoiced_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT shipline.slcode,   
         shipline.slline,   
         shiphead.shdate,   
         shipline.slitem,   
         shipline.slqty,   
         items.itum,   
         shipline.slsalorder,   
         shipline.slsalline,   
         shiphead.shshipto,   
         shipto.stdesc,   
         shipline.slinvno,   
         shipline.slinv,   
         salline.slsample,   
         items.itname,   
         shiphead.shcust,   
         salline.slsalval,   
         salline.slqtyreq,
			salline.slunitprice
    FROM shipline,   
         shiphead,   
         items,   
         shipto,   
         salline  
   WHERE ( shiphead.shcode = shipline.slcode ) and  
         ( shipline.slitem = items.itcode ) and  
         ( shiphead.shcust = shipto.stcode ) and  
         ( shiphead.shshipto = shipto.stseq ) and  
         ( shipline.slsalorder = salline.slcode ) and  
         ( shipline.slsalline = salline.slline ) and  
         ( shipline.slinv = 'Y' ) AND  
         ( shipline.slinvno = 0 ) AND  
         ( items.itactiv = 'Y' ) AND  
         shipline.slqty <> 0   
ORDER BY shipline.slcode DESC,   
         shipline.slline ASC   

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
| shiphead_shshipto |
| shipto_stdesc |
| shipline_slinvno |
| shipline_slinv |
| salline_slsample |
| items_itname |
| shiphead_shcust |
| salline_slsalval |
| salline_slqtyreq |
| salline_slunitprice |

