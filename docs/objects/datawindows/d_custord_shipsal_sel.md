# d_custord_shipsal_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: 0

## SQL
```sql
  SELECT items.itname,   
         matallocs.malot,   
         matallocs.maloc,   
         matallocs.maallocqty,   
         matallocs.maallocseq,   
         salline.slcode,   
         salline.slline,   
         salline.slitem,   
         items.itum,   
         salline.sldatplan,   
         lots.lolotctrl,   
         matallocs.ma2issueqty,
         salhead.shautho,
         items.itstdpur,
         matallocs.masscc,
			salhead.shcust,
         salline.slshipto, 
			salhead.shcurr,
			salline.slcustref,
			salline.slprintghost,
			salline.slsalghost, 
			matallocs.malotorgcode,   
			matallocs.macustalloc,
         (cast(null as varchar(1)) ) as icoexp,
			locations.lcexp,
			salline.slqtyreq,
			(Select first count(*) 
				From salline as sals 
				Where sals.slcode = salhead.shcode And 
					sals.slsalghost = salline.slline) 				As kit,
			matallocs.malotdlc,
		IF isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
			isnull(items.itisumtarif,'')
		ELSE
			''
		ENDIF as itisumtarif,
		salhead.shcons,
		salline.slsample,
		IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*HA2170*/
			isnull(salhead.shmccode, '##########') 
		ELSE 
			isnull( ( SELECT first linkmcad.lkmccode  FROM linkmcad  WHERE linkmcad.lkadcode = salhead.shcust) , '##########' )
		ENDIF as shmccode,
		isnull(salline.slediean, '') as slediean,
		//os2770 - information pour les garage
		ggregistre,
		ggdtreg,
		ggchassis,
		itstat4,
		adresses.adnetyp
   
    FROM matallocs,   
         items,   
         salline,   
         salhead
		JOIN adresses ON salhead.shcust = adresses.adcode,   
         lots left outer join garaghead on loorgcode=ggchassis,
		locations   
   WHERE ( salline.slitem = items.itcode ) and  
         ( salline.slcode = matallocs.macode ) and  
         ( salline.slline = matallocs.maitemseq ) and  
         ( salhead.shcode = salline.sl
```

## Colonnes
| Colonne |
|---------|
| items_itname |
| matallocs_malot |
| matallocs_maloc |
| matallocs_maallocqty |
| matallocs_maallocseq |
| salline_slcode |
| salline_slline |
| salline_slitem |
| itum |
| salline_sldatplan |
| lots_lolotctrl |
| matallocs_ma2issueqty |
| salhead_shautho |
| items_itstdpur |
| matallocs_masscc |
| salhead_shcust |
| salline_slshipto |
| salhead_shcurr |
| salline_slcustref |
| salline_slprintghost |
| salline_slsalghost |
| matallocs_malotorgcode |
| matallocs_macustalloc |
| cicoexp |
| locations_lcexp |
| salline_slqtyreq |
| kit |
| matallocs_malotdlc |
| itisumtarif |
| salhead_shcons |
| salline_slsample |
| shmccode |
| slediean |
| garaghead_ggregistre |
| garaghead_ggdtreg |
| garaghead_ggchassis |
| items_itstat4 |
| adresses_adnetyp |

