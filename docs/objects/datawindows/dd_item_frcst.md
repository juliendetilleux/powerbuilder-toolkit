# dd_item_frcst

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname  
    FROM items  
   WHERE (( items.itsale = 'Y' ) or (items.ittyp = 'V')) AND  
         ( items.itactiv = 'Y' )  
     AND  items.itcode not like '###########%' 
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |

