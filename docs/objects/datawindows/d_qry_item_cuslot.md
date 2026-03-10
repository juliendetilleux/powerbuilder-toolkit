# d_qry_item_cuslot

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname  
    FROM items  
   WHERE ( items.itactiv = 'Y' ) AND  
         items.itsale = 'Y'
     AND  items.itcode not like '###########%'   
  
ORDER BY 1 ASC

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |

