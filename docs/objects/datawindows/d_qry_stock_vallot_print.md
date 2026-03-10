# d_qry_stock_vallot_print

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
         if isnull(lobascost,0) + isnull(loxtrcost,0) = 0 then items.itstdpur else isnull(lobascost,0) + isnull(loxtrcost,0) endif as itstdpur,   
         items.itlastissue,
         items.itcat,
		lots.locode,
		lots.lostock,
		items.itstat1,
		items.itstat2,
		(select imputcpt.icref from imputcpt where imputcpt.ictyp = 'I' and imputcpt.iccode = items.itcptinv) as itcptinv,
		(select imputcpt.icref from imputcpt where imputcpt.ictyp = 'A' and imputcpt.iccode = items.itcptanal) as itcptanal,
		items.itdefaultlot 
    FROM items, 
		lots 
   WHERE  items.itcons = 'N' AND  
         	items.itcat <> 'W' AND
         	items.itcode not like '###########%' AND
		lots.loitem = items.itcode AND
		lots.lostock <> 0  AND
         ( lots.lost like :as_lotwc )   
ORDER BY items.itcode,
		lots.locode 
```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itum |
| ittyp |
| itstdpur |
| itlastissue |
| itcat |
| lots_locode |
| lots_lostock |
| items_itstat1 |
| items_itstat2 |
| itcptinv |
| itcptanal |
| items_itdefaultlot |

