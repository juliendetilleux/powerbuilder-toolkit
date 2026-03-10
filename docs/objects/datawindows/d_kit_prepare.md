# d_kit_prepare

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,    
         items.itname, 
         cast(null as decimal(20,13)) as qty,
         '' lot,
         items.itum,
         locations.lcintext,
			'Y' as withstock,
			items.itlot,
			2 as type,
			'' as loorgcode,
		locations.lccode,   
         0 disponible,
	    	IF bomline.blramtype = '0' THEN 
			cast ( round(bomline.blramqty,3) / bomhead.bhcoeff * :ad_qtyorg as decimal (20,13))
		ELSE
			cast ( round(bomline.blramqty,3)  as decimal (20,13))
		ENDIF as qtyask,
		0 as blline,
		items.itdefaultlot 
    FROM items ,
         locations,
		bomline,
		bomhead 
   WHERE bomline.blcode = :as_itemkit AND
		bomline.blcode = bomhead.bhcode AND
		locations.lccode = items.itloc AND
			(items.itcat <> 'K') AND
		items.ittyp <> 'F' AND
		bomline.blramcode = items.itcode AND
			( items.itstock - IsNull( ( Select Sum( matallocs.maallocqty)
										 From matallocs
										Where matallocs.maitem = items.itcode ), 0) - isnull(( Select Sum( lots.lostock) 
																											From lots 
																										  Where lots.loitem = items.itcode And
																												  date(lots.loexpdat) < date(Now()) 				),0))	<= 0  
  
 UNION ALL

// stock géré avec stock

  SELECT items.itcode,    
         items.itname, 
         cast(null as decimal(20,13)) as qty,
         lots.locode as lot,
         items.itum,
         locations.lcintext,
			'Y' as withstock,
			items.itlot,
			3,
         if items.itlot = 'Y' then lots.loorgcode else '' endif as loorgcode,
		locations.lccode ,   
         (stocks.stqty - stocks.stalloc) disponible,
	    	IF bomline.blramtype = '0' THEN 
			cast ( round(bomline.blramqty,3) / bomhead.bhcoeff * :ad_qtyorg  as decimal (20,13))
		ELSE
			cast ( round(bomline.blramqty,3)  as decimal (20,13))
		ENDIF as qtyask,
		bomline.blline ,
		items.itdefaultlot 
    FROM items ,
         locations,
		lots,
		stocks,
		bomline,
		bomhead
   WHERE bomline.blcode = :as_i
```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| cqty |
| clot |
| items_itum |
| locations_lcintext |
| cwithstock |
| items_itlot |
| salline_type |
| loorgcode |
| locations_lccode |
| disponible |
| qtyask |
| blline |
| items_itdefaultlot |

