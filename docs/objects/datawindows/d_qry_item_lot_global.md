# d_qry_item_lot_global

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
		  SELECT 1 as sortid, lots.lostatus as QAStatus, count(lots.locode) as nblots,   sum(items.itstdpur * lots.lostock) as value
			 FROM items,   
					lots  
			WHERE ( lots.loitem = items.itcode ) and  
					( ( lots.lostock > 0 )  AND  ( lots.lostatus in ('R' , 'Q', 'P') ) ) 
group by lots.lostatus  

UNION
		  SELECT 2, 'X' , count(lots.locode), sum(items.itstdpur * lots.lostock)   
			 FROM items,   
					lots  
			WHERE ( lots.loitem = items.itcode ) and  
					( ( lots.lostatus not in ('Q', 'R' ) ) and
					  ( lots.lostock > 0 ) AND
					  ( lots.loexpdat >= :radt_SelDate_Start ) And
					  ( lots.loexpdat < :radt_SelDate_Stop ) )  
 
UNION 
 
  SELECT 3,  'N' , count(lots.locode), sum(items.itstdpur * lots.lostock) 
    FROM items,
         lots  
   WHERE ( lots.loitem = items.itcode ) and  
         ( Days( Date( lots.loexpdat), - 
								( select min(yv_linkitad.lkremval)
                            from yv_linkitad
                           where ( yv_linkitad.lkitem = items.itcode ) and
                                 ( yv_linkitad.lktyp = 'S' ) And
                                 ( yv_linkitad.lkremval > 0)
                        ))						 < :radt_SelDate_Stop ) AND
         ( lots.lolotctrl = 'Y' ) AND
         ( lots.lostock > 0 )
 
 UNION 
 
    SELECT 4 as sortid, 'A' as QAStatus, count(lots.locode) as nblots,   sum(items.itstdpur * lots.lostock) as value
	 FROM items,   
			lots  
	WHERE lots.loitem = items.itcode AND
			lots.lostock > 0  AND  
			lots.lostatus = 'A' AND
			lots.loexpdat >= Date(:radt_SelDate_Stop) 
  

order by 1 asc, 2 

```

## Colonnes
| Colonne |
|---------|
| sortid |
| lots_qastatus |
| nblots |
| value |

