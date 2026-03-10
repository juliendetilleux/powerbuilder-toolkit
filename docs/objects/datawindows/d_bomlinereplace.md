# d_bomlinereplace

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT bomhead.bhcode,   
         items_b.itname,   
         bomhead.bhcoeff,   
         items_a.itum,   
         bomline.blramcode,   
         bomline.blramqty,   
         items_b.itum,   
         bomline.blcode,   
         bomline.blline,   
         bomhead.bhtype,   
         bomline.bltype,   
         bomhead.bhdesc,
		bomline.blramqty as qtyorig
    FROM bomhead,   
         bomline,   
         items items_a,   
         items items_b  
   WHERE ( items_a.itcode = bomhead.bhcode ) and  
         ( bomline.blcode = bomhead.bhcode ) and  
         ( bomline.bltype = bomhead.bhtype ) and  
         ( bomline.blramcode = items_b.itcode ) and  
         ( bomhead.bhcode = :as_bhcode ) and
	    ( bomhead.bhtype = :as_bhtyp ) 
ORDER BY bomhead.bhcode ASC,   
         bomhead.bhtype ASC   

```

## Colonnes
| Colonne |
|---------|
| bomhead_bhcode |
| items_itname |
| bomhead_bhcoeff |
| items_itum |
| bomline_blramcode |
| bomline_blramqty |
| items_itum_1 |
| bomline_blcode |
| bomline_blline |
| bomhead_bhtype |
| bomline_bltype |
| bomhead_bhdesc |
| bomline_qtyorig |

