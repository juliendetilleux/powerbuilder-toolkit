# d_itemstock2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itstock,   
         items.italloc,   
         items.itum,   
         items.itlot  ,
         0,
         0
    FROM items  
   WHERE items.itactiv = 'Y'   
UNION ALL 
  SELECT stocks_f.stitem,   
         salpline.sldesc,   
         sum(stocks_f.stqty),   
         sum(stocks_f.stalloc),
         salpline.slum,   
         '#########M',  
         stocks_f.stsalhead,
         stocks_f.stsallin
    FROM stocks_f,   
         salpline  
   WHERE ( stocks_f.stsalhead = salpline.slcode ) and  
         ( stocks_f.stsallin = salpline.slline ) and  
         ( ( stocks_f.stitem = '###########M' ) ) 
GROUP BY  stocks_f.stitem, salpline.sldesc, salpline.slum , stocks_f.stsalhead, stocks_f.stsallin 
ORDER BY 1 ASC  ;
 

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itstock |
| italloc |
| itum |
| itlot |
| compute_0007 |
| compute_0008 |

