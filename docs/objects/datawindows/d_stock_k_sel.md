# d_stock_k_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT stocks.stlot,   
         lots.lostatus,   
         stocks.stloc,   
         stocks.stqty,   
         lots.lorecdat,   
         items.itdefaultlot,   
         lots.locmnt,   
         (stocks.stqty - stocks.stalloc) disponible,   
         lots.loexpdat,   
         lots.losampleid, 
         lots.loadcode,
         lots.loorgcode,
         lots.lolotctrl,
			locations.lcautoalloc,
			items.itcat,
			items.itlot,
			Cast ( 0 As Numeric( 10, 3) ) As Dispo_Trf //HA2458
    FROM stocks,   
         lots,
         items,
			locations
   WHERE ( lots.locode = stocks.stlot ) and  
			( lots.loitem = items.itcode ) and
			( stocks.stloc = locations.lccode ) and  
       		( stocks.stitem = 'Selected_item' ) and
		     (items.itcat <> 'K')  
   
UNION ALL 
  
  SELECT lots.locode,   
         lots.lostatus,   
         items.itloc,   
         0,   
         lots.lorecdat,   
         items.itdefaultlot,   
         lots.locmnt,   
         0 disponible,   
         lots.loexpdat,   
         lots.losampleid,
         lots.loadcode,
         lots.loorgcode,
         lots.lolotctrl,
	    locations.lcautoalloc,
		items.itcat,
		items.itlot,
		Cast ( 0 As Numeric( 10, 3) ) As Dispo_Trf //HA2458   
    FROM lots,
         items,
	    locations
   WHERE items.itcode = 'Selected_item' AND
	   lots.locode = items.itdefaultlot AND
	   locations.lccode = items.itloc AND 
	   items.itcat = 'K' AND
	   items.itlot = 'N'      
 
UNION ALL 
  
  SELECT items.itdefaultlot,   
         'A',   
         items.itloc,   
         0,   
         now(),   
         items.itdefaultlot,   
         '',   
         0 disponible,   
         IF items.itval > 0 THEN cast('1900/01/01' as timestamp) ELSE cast('2999/12/31' as timestamp) ENDIF,   
         null,
         '',
         '',
         lots.lolotctrl,
	    locations.lcautoalloc,
		items.itcat,
		items.itlot ,
			Cast ( 0 As Numeric( 10, 3) ) As Dispo_Trf /
```

## Colonnes
| Colonne |
|---------|
| stlot |
| lots_lostatus |
| stloc |
| stqty |
| lots_lorecdat |
| items_itdefaultlot |
| lots_locmnt |
| cdisponible |
| lots_loexpdat |
| lots_losampleid |
| lots_loadcode |
| lots_loorgcode |
| lots_lolotctrl |
| locations_lcautoalloc |
| items_itcat |
| items_itlot |
| dispo_trf |

