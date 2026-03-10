# d_smt_stock

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itum,   
         items.ittyp,   
         items.itstock,   
         smtlink.slcontent,   
         smtcode.scum,   
         smtcode.scdesc  
    FROM items,   
         smtlink,   
         smtcode  
   WHERE ( smtlink.slitemid = items.itcode ) and  
         ( smtlink.slsmtid = smtcode.sccode ) and  
         ( ( smtcode.sccode = :Sel_smt ) AND  
         ( items.itstock <> 0 ) )    

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itum |
| ittyp |
| stockqty |
| smtlink_slcontent |
| smtcode_scum |
| smtcode_scdesc |

