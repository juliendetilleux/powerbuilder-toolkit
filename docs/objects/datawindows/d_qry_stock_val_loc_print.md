# d_qry_stock_val_loc_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itum,   
         items.ittyp,   
         items.itstdpur,   
         stocks.stqty,   
         0 as salhead,
         0 as sallin,
         stocks.stloc, 
         stocks.stlot,
         items.itcons,
         items.itdefaultlot  
    FROM items, stocks, lots 
   WHERE ( items.itcons = 'N' ) AND  
         ( items.itcode = stocks.stitem ) and 
         ( items.itstock <> 0 ) AND  
         ( items.itcode not like '###########%' ) and 
         ( stocks.stqty <> 0 ) AND
		lots.locode = stocks.stlot AND
		lots.lost like :as_lotwc
UNION all 
  SELECT stocks_f.stitem,   
         salpline.sldesc,   
         salpline.slum,   
         'M',
			stocks_f.ststdval,
         stocks_f.stqty,   
         stocks_f.stsalhead,
         stocks_f.stsallin,
         stocks_f.stloc,  
         '' ,
         'N',
         ''
    FROM stocks_f,   
         salpline  
   WHERE ( stocks_f.stsalhead = salpline.slcode ) and  
         ( stocks_f.stsallin = salpline.slline ) and  
         ( stocks_f.stitem = '###########M' )  and
         ( stocks_f.stqty <> 0 ) 
order by 9 asc

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itum |
| ittyp |
| itstdpur |
| stocks_stqty |
| salhead |
| sallin |
| stocks_stloc |
| stocks_stlot |
| items_itcons |
| items_itdefaultlot |

