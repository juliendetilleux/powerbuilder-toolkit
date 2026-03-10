# d_method_mod3_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT  bomhead.bhcode , 
          bomhead.bhtype , 
          bomhead.bhcoeff , 
          bomhead.bhyield , 
          bomhead.bhcomment , 
          items.itname , 
          items.itum , 
          bomhead.bhramval , 
          bomhead.bhlabval ,
          bomhead.bhmacval , 
          bomhead.bhxtrval , 
          bomhead.bhdateval , 
          bomhead.bhsubc , 
          bomhead.bhsuppid , 
          bomhead.bhcoeff_calc 
        FROM bomhead, 
		       items    
        WHERE ( items.itcode = bomhead.bhcode ) and 
         ( ( bomhead.bhcode = :Selected_Item ) and 
         ( bomhead.bhtype = :Selected_type ) and 
         ( bomhead.bhactiv = 'Y' ) )  
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
| bomhead_bhramval |
| bomhead_bhlabval |
| bomhead_bhmacval |
| bomhead_bhxtrval |
| bomhead_bhdateval |
| bomhead_bhsubc |
| bomhead_bhsuppid |
| bomhead_bhcoeff_calc |

