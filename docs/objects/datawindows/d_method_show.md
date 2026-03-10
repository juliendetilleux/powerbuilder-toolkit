# d_method_show

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT bomhead.bhcode,   
         items.itname,   
         bomhead.bhtype,   
         bomhead.bhcoeff,   
         items.itum,   
         bomhead.bhyield,   
         bomhead.bhdesc,   
         bomhead.bhramval,   
         bomhead.bhmacval,   
         bomhead.bhlabval,   
         bomhead.bhxtrval,   
			bomhead.bhfabdvrg, /*HA2350*/
         items.ittyp,   
         isnull(items.itsalghost, '') as itsalghost,   
         bomhead.bhcoeff_calc,
	    (items.itean2conv) as itean2conv,
	    (items.itean3conv) as itean3conv,
	    items.itumean2 ,
	    items.itumean3
    FROM bomhead,   
         items  
   WHERE ( items.itcode = bomhead.bhcode ) and  
         ( ( bomhead.bhcode = :Selected_item ) AND  
         ( bomhead.bhtype = :Selected_type ) )    

```

## Colonnes
| Colonne |
|---------|
| bomhead_bhcode |
| items_itname |
| bomhead_bhtype |
| bhcoeff |
| items_itum |
| bhyield |
| bomhead_bhdesc |
| bomhead_bhramval |
| bomhead_bhmacval |
| bomhead_bhlabval |
| bomhead_bhxtrval |
| bomhead_bhfabdvrg |
| items_ittyp |
| itsalghost |
| bhcoeff_calc |
| items_itean2conv |
| items_itean3conv |
| items_itumean2 |
| items_itumean3 |

