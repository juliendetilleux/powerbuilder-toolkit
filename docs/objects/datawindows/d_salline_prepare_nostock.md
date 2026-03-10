# d_salline_prepare_nostock

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slcode,   
         salline.slline,    
         salline.slitem,    
         items.itname, 
         items.itloc, 
         salline.slqtyalloc, 
         salline.slqtyreq,
         items.itdefaultlot, 
         salline.slpallocseq,   
         cast(null as numeric(12, 3)) as qty,
			if items.itlot = 'Y' then cast(null as char(20)) else items.itdefaultlot endif as lot,
         items.itum,
         locations.lcintext,
         salline.slqtyreq -  salline.slqtyreal - salline.slqtyalloc as prepar,
         salline.sldatreq,
         shipto.stdesc,
			'N' as withstock,
			items.itlot,
			1 as type,
			'' as lotorigin,
	    CAST(null as timestamp) as dlc,
		isnull(itval, 0) as itval  ,
		shipto.stseq,

		null as lastmaallocdat,
		'' as lastmauser,
		0 as maallocseq,
		locations.lccode,
		'' as locode,
		items.itdefaultlot as cmplot,
		IF isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
			isnull(items.itisumtarif,'N') 
		ELSE
			'N'
		ENDIF as itisumtarif,
		isnull(salline.slsalghost,0) as slsalghost,
         cast(null as numeric(12, 3)) as qtytarif
		
    FROM salline,   
         items ,
         locations,
         shipto,
         salhead
   WHERE ( items.itcode = salline.slitem ) AND    
         salline.slcode = :al_slcode AND
         salline.slcode = salhead.shcode AND
         locations.lccode = items.itloc AND
         salline.slstatus < '5' AND
         salline.slshipto = shipto.stseq AND
         shipto.stcode = salhead.shcust AND
		(items.itcat = 'K') AND
		items.ittyp <> 'F' AND
/*os1853		(isnull(items.itisumtarif,'') <> 'Y' OR isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') = '' ) AND */
		NOT EXISTS( select * from matallocs 
							where matallocs.matyp = 'X' AND
								matallocs.macode = salline.slcode AND
								matallocs.maitemseq = salline.slline AND
								matallocs.malot = if items.itlot = 'Y' then '' else items
```

## Colonnes
| Colonne |
|---------|
| salline_slcode |
| salline_slline |
| salline_slitem |
| items_itname |
| items_itloc |
| salline_slqtyalloc |
| salline_slqtyreq |
| items_itdefaultlot |
| salline_slpallocseq |
| cqty |
| clot |
| items_itum |
| locations_lcintext |
| cprepar |
| salline_sldatreq |
| shipto_stdesc |
| cwithstock |
| items_itlot |
| salline_type |
| clotorigin |
| dlc |
| itval |
| shipto_stseq |
| lastmaallocdat |
| lastmauser |
| maallocseq |
| locations_lccode |
| locode |
| items_cmplot |
| items_itisumtarif |
| slsalghost |
| qtytarif |

