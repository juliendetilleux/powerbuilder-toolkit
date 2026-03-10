# d_qry_stock_qty

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         (select sum(lostock) from lots where lots.loitem = items.itcode and lots.lost like :as_lotwc) as itstock,   
         items.italloc,   
         items.itwip,   
         items.itum,   
         items.itlot,   
         items.itstat1,   
         items.itstat2,
         isnull (( SELECT sum(stocks.stqty - stocks.stalloc) 
             FROM lots, stocks  
            WHERE ( stocks.stlot = lots.locode ) and  
                  ( stocks.stitem = items.itcode ) and 
                  ( ( lots.lostatus = 'R' ) OR 
                  ( lots.loexpdat <= today() ) ) ), 0 ) unusable ,
         items.itactiv,
		IF ITUMTRF = '2' THEN 
			isnull( (select sum( isnull( stocks.stqtytarif, 0) ) from stocks join lots ON stocks.stlot = lots.locode where stocks.stqty <> 0 and stocks.stitem = items.itcode and lots.lost like :as_lotwc), 0 ) 
		ELSE 
			0 
		ENDIF as itqty_trf,
		IF ITUMTRF = '2' THEN 
			f_get_alloctrf_byitem ( items.itcode ) 
		ELSE 
			0 
		ENDIF as itqtyalloc_trf,
		isnull( items.itisumtarif, '' ) as itisumtarif,
		isnull( items.itumtarif, '' ) as itumtarif,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF,
		IF ITUMTRF = '2' then
				isnull (( SELECT sum(stocks.stqtytarif - f_get_alloctrf_bystock( stocks.stlot, stocks.stloc ) ) 
						 FROM lots, stocks  
						WHERE ( stocks.stlot = lots.locode ) and  
								( stocks.stitem = items.itcode ) and 
								( stocks.stqty <> 0  ) and
								( ( lots.lostatus = 'R' ) OR 
								( lots.loexpdat <= today() ) ) ), 0 )
		ELSE
			0
		ENDIF as unusable_trf
    FROM items  
   WHERE itcode not like '####%' 
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itstock |
| italloc |
| itwip |
| itum |
| itlot |
| itstat1 |
| itstat2 |
| unusable |
| itactiv |
| itqty_trf |
| itqtyalloc_trf |
| itisumtarif |
| itumtarif |
| itumtrf |
| unusable_trf |

