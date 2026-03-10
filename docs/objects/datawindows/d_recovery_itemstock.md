# d_recovery_itemstock

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT distinct items.itcode,   
         items.itname,   
         items.itstock,   
         items.italloc,   
         items.itum,   
         items.itlot,   
         items.itcat,   
         items.itstat1,   
         items.itstat2,   
         items.itstdpur,   
         items.itmccode,
		purline.plcode,
		purline.plline
    FROM items, purline , stocks, purreqhead
   WHERE ( items.itactiv = 'Y' ) AND  
         ( items.itcat <> 'K' ) AND  
         ( items.ittyp <> 'F' ) AND  
         ( items.itcode not like '###########%' )   AND
		( items.itcode = purline.plitem ) and  
         ( purline.plitem = stocks.stitem) and
         ( stocks.stloc = 'DEPOT' ) AND
         ( purline.plstatus < '6' ) AND
		( purreqhead.pqcode = purline.plpurreqcode )
ORDER BY items.itcode ASC   

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
| itcat |
| itstat1 |
| itstat2 |
| itstdpur |
| itmccode |
| purline_plcode |
| purline_plline |

