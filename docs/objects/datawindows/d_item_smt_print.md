# d_item_smt_print

- **Type**: DataWindow
- **Style**: Composite
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         '',   
         '',   
         0  
    FROM items 
 where items.itactiv = 'Y' 
   UNION ALL  
  SELECT items.itcode,   
         items.itname,   
         smtcode.sccode,   
         smtcode.scdesc,   
         smtlink.slcontent  
    FROM items,   
         smtcode,   
         smtlink  
   WHERE ( smtcode.sccode = smtlink.slsmtid ) and  
         ( smtlink.slitemid = items.itcode ) and  
         ( ( items.itactiv = 'Y' ) AND  
         ( smtcode.scactiv = 'Y' ) ) 
order by 1 asc   

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| compute_0005 |

