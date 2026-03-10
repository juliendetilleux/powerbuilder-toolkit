# dd_item_scfm

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itpol  
    FROM items  
   WHERE ( items.itcat = 'M' ) AND  
         ( items.itactiv = 'Y' ) AND  
         ( items.itcode not like '###########%' )   
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itpol |

