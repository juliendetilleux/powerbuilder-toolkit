# d_qry_itemused_mn_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
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
| items_itsale |

