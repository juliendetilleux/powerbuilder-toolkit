# d_salline_prepare

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slcode,   //stock géré sans stock
         salline.slline,    
         salline.slitem,    
         items.itname, 
         '' as itloc,  
         salline.slqtyalloc, 
         salline.slqtyreq,
         salline.slpallocseq,   
         cast(null as numeric(12, 3)) as qty,
         '' lot,
         items.itum,
         locations.lcintext,
         salline.slqtyreq -  salline.slqtyreal - salline.slqtyalloc as prepar,
         salline.sldatreq,
         shipto.stdesc,
			'Y' as withstock,
			items.itlot,
			2 as type,
			'' as lotorigin,
	    CAST(null as timestamp) as dlc,
		isnull(itval, 0) as itval  ,
		shipto.stseq,
		0 as maallocseq,
		locations.lccode,
		items.itdefaultlot as cmplot,
		null as lastmaallocdat,
		'' as lastmauser,
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
			(items.itcat <> 'K') AND
		items.ittyp <> 'F' AND
			( items.itstock - IsNull( ( Select Sum( matallocs.maallocqty)
										 From matallocs
										Where matallocs.maitem = salline.slitem ), 0) - isnull(( Select Sum( lots.lostock) 
																											From lots 
																										  Where lots.loitem = salline.slitem And
																												  date(lots.loexpdat) < date(Now()) 				),0))	<= 0   /*os1853 AND
		(isnull(items.itisumtarif,'') <> 'Y' OR isnull((select ppvalue from progparam wh
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
| maallocseq |
| locations_lccode |
| items_cmplot |
| lastmaallocdat |
| lastmauser |
| items_itisumtarif |
| slsalghost |
| qtytarif |

