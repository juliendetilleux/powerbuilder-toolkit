# d_gather_stock_loc

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         sum(stocks.stqty) as stqty  ,   
         items.itum,   
         stocks.stalloc,   
         items.itstdpur,
			(select adcurr from adresses where adcode = '##########') as money_used
    FROM locations,   
         items,   
         stocks  
   WHERE ( items.itcode = stocks.stitem ) and  
         ( stocks.stloc = locations.lccode ) and  
         ( ( locations.lccode = :location_code ) )   
GROUP BY items.itcode,   
         items.itname,   
         items.itstdpur,   
         items.itum,   
         stocks.stalloc  
HAVING	stqty <> 0
ORDER BY items.itcode ASC

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| cstqty |
| items_itum |
| stocks_stalloc |
| items_itstdpur |
| cmoney_used |

