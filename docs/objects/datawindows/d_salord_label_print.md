# d_salord_label_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT adresses.adname,  
		matallocs.maitem,   
		matallocs.malot,   
		matallocs.maloc,
		items.itname,   
		items.itum,   
		salhead.shcode,   
		salhead.shcust,     
		salline.slline,   
		salline.sluomconv,   
		salline.sluomord,   
		lots.loexpdat,
		lots.lorecdat,
		items.itdefaultlot,
		isnull((SELECT parameters.pmcval
			FROM parameters
			WHERE parameters.pmcode = 'REMREF'),'R')			as remref	   
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
		( matallocs.macode = :al_salord ) and
		( matallocs.maitemseq = :al_salline ) and
		( matallocs.maallocseq = :al_allocseq )  
    
UNION ALL  
   
SELECT adresses.adname,  
		items.itcode,   
		string(salline.slcode) + '/' + string(salline.slline),   
		'',
		items.itname,   
		items.itum,   
		salhead.shcode,   
		salhead.shcust,     
		salline.slline,   
		salline.sluomconv,   
		salline.sluomord,   
		if remref = 'S' then salline.sldatship 
		else
			if remref = 'T' then today() else salline.sldatreq endif
		endif + yv_linkitad.lkremval as loexpdat,
		today(),
		items.itdefaultlot,
		isnull((SELECT parameters.pmcval
			FROM parameters
			WHERE parameters.pmcode = 'REMREF'),'R')			as remref	   
 FROM adresses,   
		items,   
		salhead,  
		salline ,
		yv_linkitad  
WHERE ( salhead.shcust = adresses.adcode ) and  
		( salline.slcode = salhead.shcode ) and  
		( salline.slitem = items.itcode ) and  
		salline.slcode = :al_salord and
		salline.slline = :al_salline and
		:al_allocseq = 0  and 
		isnull(yv_linkitad.lkcalcdluo, 'N') = 'Y' and
		isnull((select ppvalue from progparam where ppcode = 'CALCDLUO' ),'') = '1' and
```

## Colonnes
| Colonne |
|---------|
| adname |
| matallocs_maitem |
| matallocs_malot |
| matallocs_maloc |
| items_itname |
| items_itum |
| salhead_shcode |
| salhead_shcust |
| salline_slline |
| salline_sluomconv |
| salline_sluomord |
| lots_loexpdat |
| lots_lorecdat |
| items_itdefaultlot |
| remref |

