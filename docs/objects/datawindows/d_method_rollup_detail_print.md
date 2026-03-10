# d_method_rollup_detail_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT bomhead.bhcode,   
         bomhead.bhtype,   
         bomhead.bhcoeff,   
         bomhead.bhyield,   
         bomhead.bhcomment,   
         items.itname,   
         items.itum,   
         bomhead.bhdateval,   
         bomhead.bhsubc,   
         bomhead.bhsuppid,   
         bomhead.bhrlupramval,   
         bomhead.bhrlupmacval,   
         bomhead.bhrluplabval,   
         bomhead.bhrlupxtrval  
    FROM bomhead,   
         items  
   WHERE ( items.itcode = bomhead.bhcode ) and  
         ( ( bomhead.bhtype = '0' ) AND  
         ( bomhead.bhactiv = 'Y' ) )   
ORDER BY bomhead.bhcode ASC   

```

## Colonnes
| Colonne |
|---------|
| bomhead_bhcode |
| bomhead_bhtype |
| bomhead_bhcoeff |
| bomhead_bhyield |
| bomhead_bhcomment |
| items_itname |
| items_itum |
| bomhead_bhdateval |
| bomhead_bhsubc |
| bomhead_bhsuppid |
| bomhead_bhrlupramval |
| bomhead_bhrlupmacval |
| bomhead_bhrluplabval |
| bomhead_bhrlupxtrval |

