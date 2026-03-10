# d_custordalloc_one_bcd_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
         adresses.adcmnt,   
         adresses.adtel,   
         adresses.adfax,   
         salhead.shcustref,   
         salhead.shcode,   
         salline.slitem,   
         items.itname,   
         salline.sldatreq,   
         salline.slqtyreq,   
         items.itum,   
         salline.slline,   
         salline.slqtyres,   
         salhead.shcmnt,   
         salline.slqtyreal,   
         salline.slshipto,   
         shipto.stdesc,   
         salhead.shcust,   
         salhead.shautho,   
         salline.sldatship,
			salline.slcode,
			salline.slallocprinted,
		salline.sluomord,
		salline.sluomconv  , 
		
		isnull((SELECT ppvalue FROM progparam WHERE ppcode = 'CALCDLUO'),'') as CALCDLUO,
		isnull(( Select yv_linkitad.lkcalcdluo
				 From yv_linkitad
				Where yv_linkitad.lktyp    = 'S'					And 
						yv_linkitad.lkitem   = items.itcode 	And 
						yv_linkitad.lkadcode = salhead.shcust And 
						yv_linkitad.lkactiv  = 'Y'						 ),'N') As lkcalcdluo,
		isnull(( Select yv_linkitad.lkpcratesregroup
				 From yv_linkitad
				Where yv_linkitad.lktyp    = 'S'					And 
						yv_linkitad.lkitem   = items.itcode 	And 
						yv_linkitad.lkadcode = salhead.shcust And 
						yv_linkitad.lkactiv  = 'Y'						 ),'N') As lkpcratesregroup,
		if remref = 'S' then salline.sldatship 
		else
			if remref = 'T' then today() else salline.sldatreq endif
		endif as sldatship  ,
		isnull(( Select yv_linkitad.lkremval
				 From yv_linkitad
				Where yv_linkitad.lktyp    = 'S'					And 
						yv_linkitad.lkitem   = items.itcode 	And 
						yv_linkitad.lkadcode = salhead.shcust And 
						yv_linkitad.lkactiv  = 'Y'						 ),0) As lkremval ,
		isnull((SELECT parameters.pmcval
			FROM parameters
			WHERE parameters.pmcode = 'REMREF'),'R')			as remref 
    FROM salhead,   
         salline,   
         adresses,   
         items,   
         shipto  
   WHERE ( salline.slcode = salhead.shcode )
```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| adresses_adcmnt |
| adresses_adtel |
| adresses_adfax |
| salhead_shcustref |
| salhead_shcode |
| salline_slitem |
| items_itname |
| salline_sldatreq |
| salline_slqtyreq |
| items_itum |
| salline_slline |
| salline_slqtyres |
| salhead_shcmnt |
| salline_slqtyreal |
| salline_slshipto |
| shipto_stdesc |
| salhead_shcust |
| salhead_shautho |
| salline_sldatship |
| salline_slcode |
| salline_slallocprinted |
| salline_sluomord |
| salline_sluomconv |
| calcdluo |
| lkcalcdluo |
| lkpcratesregroup |
| sldatship |
| lkremval |
| remref |

