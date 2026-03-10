# d_recovery_stock_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
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
			locations.lcautoalloc 
    FROM stocks,   
         lots,
         items,
			locations
   WHERE ( lots.locode = stocks.stlot ) and  
			( lots.loitem = items.itcode ) and
			( stocks.stloc = locations.lccode ) and  
         ( stocks.stitem = :Selected_item ) and      
		(stocks.stloc = 'DEPOT') and
		(stocks.stitem in( select plitem from purline, purhead where purhead.phcode = purline.plcode and phstatus < 6))
 ORDER BY lots.loexpdat ASC,   
			lots.lorecdat ASC,
			locations.lcpriority ASC,
			locations.lccode ASC 

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

