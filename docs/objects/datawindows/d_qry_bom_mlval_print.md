# d_qry_bom_mlval_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
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
          bomhead.bhdateval , 
          bomhead.bhsubc , 
          bomhead.bhsuppid,
			 bomhead.bhxtrval 
        FROM bomhead, 
		       items    
        WHERE ( items.itcode = bomhead.bhcode ) and 
         ( ( bomhead.bhcode = :Selected_Item ) and 
         ( bomhead.bhtype = '0' ) and 
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
| bomhead_bhdateval |
| bomhead_bhsubc |
| bomhead_bhsuppid |
| bomhead_bhxtrval |

