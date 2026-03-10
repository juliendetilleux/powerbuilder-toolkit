# d_itemstock_qtywc

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
         0,
         isnull (( SELECT sum(stocks.stqty - stocks.stalloc) 
             FROM lots, stocks  
            WHERE ( stocks.stlot = lots.locode ) and  
                  ( stocks.stitem = items.itcode ) and 
                  ( stocks.stqty <> 0 ) and 
                  ( ( lots.lostatus = 'R' ) OR 
                  ( lots.loexpdat <= today() ) ) ), 0 ) 
		+  isnull (( SELECT sum(stocks.stqty - stocks.stalloc) /*os1448*/
					 FROM lots, stocks, locations
					WHERE stocks.stlot = lots.locode and  
							stocks.stitem = items.itcode and 
							stocks.stqty <> 0 and 
							locations.lccode = stocks.stloc and 
							( locations.lcmrpexcl = 'Y' OR lots.loexcmrp = 'Y' /*os2641*/ ) and
							lots.lostatus <> 'R' and 
							lots.loexpdat > today() ), 0 ) as unusable
         , 
         items.itcat,
		items.itmccode
    FROM items  
   WHERE items.itactiv = 'Y'  and items.itcode not like '######%'  
UNION ALL 
  SELECT stocks_f.stitem,   
         salpline.sldesc,   
         sum(stocks_f.stqty),   
         sum(stocks_f.stalloc),
         salpline.slum,   
         '#########M',  
         stocks_f.stsalhead,
         stocks_f.stsallin,
         0, 
         '',
		''
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
| c |
| c |
| unusable |
| itcat |
| itmccode |

