# d_qry_item_list_pur

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itum,   
         items.itstat1,   
         items.itstat2  
    FROM items  
   WHERE ( items.ittyp in ( 'P' , 'C' ) ) AND  
         ( items.itactiv = 'Y' ) AND  
         ( items.itcode not like '###########%'    )   
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itum |
| items_itstat1 |
| items_itstat2 |

