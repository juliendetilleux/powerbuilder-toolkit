# d_cycn_detail

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT cycntline.clnumcc,   
         cycntline.clstitem,   
         cycntline.clstlot,   
         cycntline.clstloc,   
  		cycntline.clstqty,
         cycntline.clstqtyc,   
         cycntline.clcomment,   
         cycntline.clcycntdate,   
         items.itum,   
         items.itdefaultlot,   
         items.itname  ,
ITEMS.ITSTDPUR
    FROM cycntline,   
         items  
   WHERE ( cycntline.clstitem = items.itcode ) and  
         ( ( cycntline.clnumcc = :numcycn ) )   
ORDER BY cycntline.clstitem ASC   

```

## Colonnes
| Colonne |
|---------|
| clnumcc |
| clstitem |
| clstlot |
| clstloc |
| clstqty |
| clstqtyc |
| clcomment |
| clcycntdate |
| items_itum |
| items_itdefaultlot |
| items_itname |
| items_itstdpur |

