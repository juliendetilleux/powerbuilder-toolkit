# d_itemstock

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itstock - isnull((select sum(lostock) from lots where loitem = items.itcode and lots.lost = 'Y'),0) as itstock,   
         items.italloc,   
         items.itum,   
         items.itlot  ,
         0 as salhead,
         0 as sallin,
         isnull (( SELECT sum(stocks.stqty - stocks.stalloc) 
             FROM lots, stocks  
            WHERE ( stocks.stlot = lots.locode ) and  
                  ( stocks.stitem = items.itcode ) and 
                  ( stocks.stqty <> 0 ) and 
				( lots.lost <> 'Y' ) and
                  ( ( lots.lostatus = 'R' ) OR 
                  ( lots.loexpdat <= today() ) ) ), 0 )
		+  isnull (( SELECT sum(stocks.stqty - stocks.stalloc) /*os1448*/
					 FROM lots, stocks, locations
					WHERE stocks.stlot = lots.locode and  
							stocks.stitem = items.itcode and 
							stocks.stqty <> 0 and 
							locations.lccode = stocks.stloc and 
							( locations.lcmrpexcl = 'Y' OR lots.loexcmrp = 'Y' /*os2641*/ ) and
							lots.lostatus <> 'R' and 
							lots.lost <> 'Y' and
							lots.loexpdat > today() ), 0 ) as unusable , 
         items.itcat,
		items.itmccode,
		IF ITUMTRF = '2' THEN isnull( (select sum( isnull( stocks.stqtytarif, 0) ) from stocks where stocks.stqty <> 0 and stocks.stitem = items.itcode ), 0 ) ELSE 0 ENDIF as stqtytarif,
		items.itum,
		isnull( items.itisumtarif, '' ) as itisumtarif,
		isnull( items.itumtarif, '' ) as itumtarif,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF,
		IF ITUMTRF = '2' THEN 
			isnull (( SELECT sum( stocks.stqtytarif - f_get_alloctrf_bylot ( lots.locode ) ) 
						 FROM lots, stocks  
						WHERE ( stocks.stlot = lots.locode ) and  
								( stocks.stitem = items.itcode ) and 
								stocks.stqty <> 0 and
								( isnull(stocks.stqtytarif,0) <> 0 ) and 
						( lots.lost <> 'Y' ) and
								( ( lots.lostatus = 'R' ) OR 
								( lots.loexpda
```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itstock |
| italloc |
| itum |
| itlot |
| salhead |
| sallin |
| unusable |
| itcat |
| itmccode |
| stqtytarif |
| itum |
| itisumtarif |
| itumtarif |
| itumtrf |
| unusable_trf |
| italloc_trf |
| itean |

