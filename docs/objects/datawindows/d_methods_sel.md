# d_methods_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT bomhead.bhcode,   
         items.itname,   
			items.itcat, 
         bomhead.bhcoeff,   
         items.itum,   
         bomhead.bhtype,   
         bomhead.bhdesc,   
         bomhead.bhsubc,
			items.ittyp,
         bomhead.bhcoeff_calc,
		items.itdesc2 
  
    FROM bomhead,   
         items  
   WHERE ( items.itcode = bomhead.bhcode ) and  
         ( ( bomhead.bhactiv = 'Y' ) AND  
         ( ( items.itactiv = 'Y' And items.itcat <> 'U') Or ( items.itcat = 'U') ) )   
ORDER BY bomhead.bhcode ASC,   
         bomhead.bhtype ASC   

```

## Colonnes
| Colonne |
|---------|
| bhcode |
| items_itname |
| items_itcat |
| bomhead_bhcoeff |
| items_itum |
| bomhead_bhtype |
| bomhead_bhdesc |
| bomhead_bhsubc |
| items_ittyp |
| bomhead_bhcoeff_calc |
| items_itdesc2 |

