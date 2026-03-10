# d_sales_label_prepare_std

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
SELECT adresses.adname,  
		matallocs.maitem,   
		matallocs.malot,   
		matallocs.maloc,  
		matallocs.maallocqty,   
		matallocs.maallocseq, 
		items.itname,   
		items.itum,   
		salhead.shcode,   
		salhead.shcust,   
		salline.sldatship,   
		salline.slline,   
		salline.sluomconv,   
		salline.sluomord,   
		items.itdefaultlot,   
		lots.loexpdat,   
		items.itean, 
		items.iteanref, 
		items.itean2, 
		items.itean2ref, 
		items.itean2conv, 
		items.itean3, 
		items.itean3ref, 
		items.itean3conv,
		cast(null as numeric(3,0)) as nb,
		isnull((SELECT parameters.pmcval
			FROM parameters
			WHERE parameters.pmcode = 'REMREF'),'R')			as remref,
		items.itshowetiq 	   
 FROM matallocs,   
		adresses,   
		items,   
		salhead,  
		salline,  
		lots  
WHERE ( salhead.shcust = adresses.adcode ) and  
		( salline.slcode = salhead.shcode ) and  
		( salline.slitem = items.itcode ) and  
		( matallocs.macode = salline.slcode ) and  
		( matallocs.maitemseq = salline.slline ) and  
		( lots.locode = matallocs.malot ) and  
		( matallocs.matyp = 'X' ) and
		( salhead.shcust = :as_cust )  
    
UNION ALL    
    
SELECT adresses.adname,  
		items.itcode,   
		string(salline.slcode) + '/' + string(salline.slline), //matallocs.malot,   
		'', //matallocs.maloc,  
		0, //salline.slqtyreq -  salline.slqtyreal, //matallocs.maallocqty,   
		0, //matallocs.maallocseq, 
		items.itname,   
		items.itum,   
		salhead.shcode,   
		salhead.shcust,   
		salline.sldatship,   
		salline.slline,   
		salline.sluomconv,   
		salline.sluomord,   
		items.itdefaultlot,   
		if remref = 'S' then salline.sldatship 
		else
			if remref = 'T' then today() else salline.sldatreq endif
		endif + yv_linkitad.lkremval as loexpdat,   
		items.itean, 
		items.iteanref, 
		items.itean2, 
		items.itean2ref, 
		items.itean2conv, 
		items.itean3, 
		items.itean3ref, 
		items.itean3conv,
		cast(null as numeric(3,0)) as nb,
		isnull((S
```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| matallocs_maitem |
| matallocs_malot |
| matallocs_maloc |
| matallocs_maallocqty |
| matallocs_maallocseq |
| items_itname |
| items_itum |
| salhead_shcode |
| salhead_shcust |
| salline_sldatship |
| salline_slline |
| salline_sluomconv |
| salline_sluomord |
| items_itdefaultlot |
| lots_loexpdat |
| items_itean |
| items_iteanref |
| items_itean2 |
| items_itean2ref |
| items_itean2conv |
| items_itean3 |
| items_itean3ref |
| items_itean3conv |
| cnb |
| remref |
| itshowetiq |

