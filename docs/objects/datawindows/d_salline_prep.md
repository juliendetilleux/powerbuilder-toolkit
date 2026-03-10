# d_salline_prep

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
         cast(null as numeric(10, 3)) as qty,
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
		0 as stockdispo,
		salline.slsort

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
		(isnull(items.itisumtarif,'') <> 'Y' OR isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') = '' /*os2751*/ )  AND
			isnull(locations.lc_exclprepsimpl, 'N') = 'N'
and locations.lc_exclprepsimpl not in ('Y','B')//fz0172
// stock non géré

 UNION ALL

// stock géré, pas de stock

  SELECT salline.slcode,   
         salline.slline,    
         salline.slitem,    
         items.itname, 
         items.itloc, 
         salline.slqtyalloc, 
         salline.slqtyreq,
         '', 
         salline.slpallocseq,   
         cast(null as numeric(10, 3)) as qty,
         '' lot,
         items.itum,
         locations.lcintext,
         salline.slqtyreq -  salline.slqtyreal - salline.slqtyalloc as prepar,
         salline.sldatreq,

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
| stockdispo |
| salline_slsort |

