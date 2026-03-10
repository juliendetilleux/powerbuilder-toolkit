# d_stdcost_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itname,   
         items.itum,   
         items.itcode,   
         items.itstdsal,   
         adresses.adcode,   
         adresses.adcurr,   
         adresses.adname,
		items.itmccode   
    FROM items,   
         adresses  
   WHERE ( items.itactiv = 'Y' ) AND  
         ( adresses.adcode = :as_AdCode ) AND  
         ( items.itsale = 'Y' )   
    AND  items.itcode not like '###########%'      

```

## Colonnes
| Colonne |
|---------|
| items_itname |
| items_itum |
| items_itcode |
| items_itstdsal |
| adresses_adcode |
| adresses_adcurr |
| adresses_adname |
| items_itmccode |

