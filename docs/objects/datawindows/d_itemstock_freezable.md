# d_itemstock_freezable

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
         items.itlot,   
         items.itcat,   
         items.itstat1,   
         items.itstat2,   
         items.itstdpur  
    FROM items  
   WHERE ( items.itactiv = 'Y' ) AND  
         ( items.itcat <> 'K' ) AND  
         ( items.ittyp <> 'F' ) AND  
         ( items.itcode not like '###########%' )  AND
		items.itlot = 'Y' AND
		isnull(items.itval,0) > 0 AND
		isnull(items.itfreezable,'N') = 'Y' 
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

