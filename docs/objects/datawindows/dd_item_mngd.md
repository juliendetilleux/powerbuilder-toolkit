# dd_item_mngd

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname  
    FROM items  
   WHERE ( items.itactiv = 'Y'  ) AND  
         ( items.ittyp in ('P','C', 'M') )  
     AND  items.itcode not like '###########%'   
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |

