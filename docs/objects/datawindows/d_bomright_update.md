# d_bomright_update

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
	    isnull(bomright.brright,'N') as brright,
		isnull(bomright.bruser, '') as bruser,
		isnull(bomright.britem, '') as britem,
		isnull(bomright.brtype, '') as brtype,
		isnull(bomright.brmanufrep,'N') as brmanufrep,
		isnull(bomright.brmanufclot, 'N' ) as brmanufclot,
		isnull(bomright.brmancreate, 'N') as brmancreate
  
    FROM items,
			bomhead left outer join bomright ON 
					bomright.britem = bomhead.bhcode AND
					bomright.brtype = bomhead.bhtype AND
					bomright.bruser = :as_user
   WHERE bomhead.bhactiv = 'Y' AND  
		items.itcode = bomhead.bhcode AND
		isnull(bomhead.bhbomright,'') <> '1' AND
         ( ( items.itactiv = 'Y' And items.itcat <> 'U') Or ( items.itcat = 'U') )   
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
| brright |
| bruser |
| britem |
| brtype |
| brmanufrep |
| brmanufclot |
| brmancreate |

