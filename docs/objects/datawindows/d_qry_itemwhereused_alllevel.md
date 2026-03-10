# d_qry_itemwhereused_alllevel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT bomhead.bhcode,
	    items.itname,   
         items.itum,
		items.itsale
    FROM bomline,   
         bomhead,   
         items items 
   WHERE ( bomline.blcode = bomhead.bhcode ) and  
         ( bomhead.bhcode = items.itcode ) and  
         ( bomline.bltype = bomhead.bhtype ) and  
         ( bomline.blramcode = :Selected_item ) 
ORDER BY bomline.blcode ASC,   
         bomline.bltype ASC   

```

## Colonnes
| Colonne |
|---------|
| bhcode |
| itname |
| itum |
| itsale |

