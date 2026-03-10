# d_mfgordr_prod_preclose

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhitem,   
         mfghead.mhreqqty,   
         mfghead.mhmfgqty,   
		if ITUMTRF = '2' and isumtarif = 'Y' then
			items.itumtbascost + isnull( items.itumtxtrcost, 0 )
		ELSE
	         items.itstdpur
		ENDIF as itstdpur,
         items.itname,
         items.itum,
         (0.0001 - 0.0001) realcost,
		(select sum(mxval) from mfgxtracost where mxcode = :sel_mfg ) as mxval,
		isnull( items.itumtarif, 'KG' ) as umtarif,
		isnull( items.itisumtarif, 'N' ) as isumtarif,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF,
		if ITUMTRF = '2' and isumtarif = 'Y' then
			(select sum( histostock.hsqtytarif ) 
			  from histostock 
			where histostock.hscode = 'RCMO' and 
				histostock.hsordlin = 0 AND
				histostock.hsitem = items.itcode AND
				histostock.hsordno = mfghead.mhcode )
		else
			0
		endif as mhreqqty_trf,
		IF ITUMTRF = '2' and isumtarif = 'Y' THEN
			items.itumtarifconv
		ELSE
			1
		ENDIF as umtarifconv
		
    FROM mfghead,   
         items  
   WHERE ( items.itcode = mfghead.mhitem ) and  
         ( mfghead.mhcode = :sel_mfg ) AND  
         ( mfghead.mhtype not in ('G', 'F') ) 
UNION all
  SELECT mfgcoitem.mcitem,   
         mfgcoitem.mcreqty,   
         mfgcoitem.mcmfgqty,
		if ITUMTRF = '2' and isumtarif = 'Y' then
			items.itumtbascost + isnull( items.itumtxtrcost, 0 )
		ELSE
	         items.itstdpur
		ENDIF as itstdpur,
         items.itname,
         items.itum,
         0.0000,
			(select sum(mxval) from mfgxtracost where mxcode = :sel_mfg ),
		isnull( items.itumtarif, 'KG' ) as umtarif,
		isnull( items.itisumtarif, 'N' ) as isumtarif,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF,
		if ITUMTRF = '2' and isumtarif = 'Y' then
			(select sum( histostock.hsqtytarif ) 
			  from histostock 
			where histostock.hscode = 'RCMO' and 
				histostock.hsordlin = 0 AND
				histostock.hsitem = items.itcode AN
```

## Colonnes
| Colonne |
|---------|
| mfghead_mhitem |
| mfghead_mhreqqty |
| mfghead_mhmfgqty |
| items_itstdpur |
| items_itname |
| items_itum |
| mfghead_realcost |
| cmxval |
| umtarif |
| isumtarif |
| itumtrf |
| mhreqqty_trf |
| umtarifconv |

