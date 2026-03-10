# d_qry_stock_qty_1it

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.lostatus,   
         stocks.stloc,   
         stocks.stqty,   
         stocks.stalloc,   
         lots.lorecdat,   
         lots.lolotctrl,   
         lots.loorgcode,   
         lots.loexpdat,   
         items.itdefaultlot,   
         lots.lorcpoum,
		lots.lost,
		isnull( stocks.stqtytarif, 0 ) as stqtytarif,
		items.itum,
		isnull( items.itisumtarif, '' ) as itisumtarif,
		isnull( items.itumtarif, '' ) as itumtarif,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF,		
		IF ITUMTRF = '2' THEN
			f_get_alloctrf_bystock( stocks.stlot, stocks.stloc )
		ELSE
			0
		ENDIF as stalloc_trf  
    FROM lots JOIN stocks ON stocks.stlot = lots.locode   
         			JOIN items ON items.itcode = lots.loitem 
   WHERE ( lots.loitem = :Selected_item ) AND  
         ( lots.lostock <> 0 )    
ORDER BY lots.locode ASC   

```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| lots_lostatus |
| stocks_stloc |
| stocks_stqty |
| stocks_stalloc |
| lots_lorecdat |
| lots_lolotctrl |
| lots_loorgcode |
| lots_loexpdat |
| items_itdefaultlot |
| lots_lorcpoum |
| lots_lost |
| stqtytarif |
| items_itum |
| itisumtarif |
| itumtarif |
| itumtrf |
| stalloc_trf |

