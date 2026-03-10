# d_stock_prevexp_sales_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname,   
         items.itcode,   
         items.itname,
         items.itum,   
         lots.locode,
         lots.lostock,
         lots.loalloc,
         ( lots.lostock - lots.loalloc ) As Qty,
         Days( Date ( lots.loexpdat), - ( yv_linkitad.lkremval)) As MaxDate
    FROM adresses,   
         items,   
         yv_linkitad,   
         lots  
   WHERE ( yv_linkitad.lkitem = items.itcode ) and  
         ( yv_linkitad.lkadcode = adresses.adcode ) and  
         ( lots.loitem = items.itcode ) and  
         ( yv_linkitad.lktyp = 'S' ) And
         ( MaxDate > :adt_date ) And 
         ( lots.lolotctrl = 'Y' ) And
         ( lots.lostock > 0 ) And
			IsNull( items.itval, 0 ) > 0  /*HA2309*/
 
```

## Colonnes
| Colonne |
|---------|
| adresses_adcode |
| adresses_adname |
| items_itcode |
| items_itname |
| items_itum |
| lots_locode |
| lots_lostock |
| lots_loalloc |
| cqty |
| cmaxdate |

