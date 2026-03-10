# d_qry_stock_val_print

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
         (select sum(lostock) from lots where lots.loitem = items.itcode and lots.lost like :as_lotwc) as itstock,  
         0 as salhead,
         0 as sallin,
         items.itlastissue,
         items.itcat
    FROM items  
   WHERE ( items.itcons = 'N' ) AND  
         ( items.itstock <> 0 ) AND  
         ( items.itcat <> 'W')  AND
         ( items.itcode not like '###########%' )  
UNION all 
  SELECT stocks_f.stitem,   
         salpline.sldesc,   
         salpline.slum,   
         'M',
			stocks_f.ststdval,
         sum(stocks_f.stqty),  
         stocks_f.stsalhead,
         stocks_f.stsallin,
         null,
         null    
    FROM stocks_f,   
         salpline  
   WHERE ( stocks_f.stsalhead = salpline.slcode ) and  
         ( stocks_f.stsallin = salpline.slline ) and  
         ( ( stocks_f.stitem = '###########M' ) ) 
GROUP BY  stocks_f.stitem, salpline.sldesc, salpline.slum ,stocks_f.ststdval,stocks_f.stsalhead, stocks_f.stsallin

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itum |
| ittyp |
| itstdpur |
| stockqty |
| salhead |
| sallin |
| itlastissue |
| itcat |

