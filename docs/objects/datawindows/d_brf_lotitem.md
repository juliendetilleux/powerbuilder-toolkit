# d_brf_lotitem

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT loorgcode as lot,   
         lots.loitem,   
         items.itname,   
         sum(stocks.stqty - stocks.stalloc) as stavailable,   
         max (lots.lolotctrl) as lolotctrl,   
         isnull(lots.loorgcode,'') as loorgcode,   
         min(lots.lorecdat) as lorecdat,  
	    min(lots.loexpdat) as loexpdat, 
         items.itdefaultlot,
         items.itum  
    FROM lots,   
         items,
	    stocks,
	    locations  
   WHERE items.itcode = lots.loitem AND 
         lots.loitem = :Selected_item AND   
	    lots.lostatus IN ('A', 'P') AND
	    lots.loexpdat >= :adt_remanenceRefDate AND
	    stocks.stlot = lots.locode AND 
	    stocks.stitem = items.itcode AND
	    locations.lccode = stocks.stloc AND 
         if :ai_all_loc = 1 then 'Y' else isnull(locations.lcexp, '') endif <> 'N'  AND	//os1681
		trim(loorgcode) <> '' AND
		stocks.stloc like :as_loc  /*os1678*/
   
GROUP BY lot,   
         lots.loitem,   
         items.itname,   
         lots.loorgcode,   
         items.itdefaultlot,
	items.itum    
  
HAVING stavailable > 0 
 
UNION ALL
  
  SELECT lots.locode as lot,   
         lots.loitem,   
         items.itname,   
         sum(stocks.stqty - stocks.stalloc) as stavailable,   
         max (lots.lolotctrl) as lolotctrl,   
         isnull(lots.loorgcode,'') as loorgcode,   
         min(lots.lorecdat) as lorecdat,  
	    min(lots.loexpdat) as loexpdat, 
         items.itdefaultlot,
         items.itum  
    FROM lots,   
         items,
	    stocks,
	    locations  
   WHERE items.itcode = lots.loitem AND 
         lots.loitem = :Selected_item AND   
	    lots.lostatus IN ('A', 'P') AND
	    lots.loexpdat >= :adt_remanenceRefDate AND
	    stocks.stlot = lots.locode AND 
	    stocks.stitem = items.itcode AND
	    locations.lccode = stocks.stloc AND 
         if :ai_all_loc = 1 then 'Y' else isnull(locations.lcexp, '') endif <> 'N'  AND	/*os1681*/
	    stocks.stloc like :as_loc  /*o
```

## Colonnes
| Colonne |
|---------|
| lot |
| loitem |
| items_itname |
| stavailable |
| lots_lolotctrl |
| lots_loorgcode |
| lots_lorecdat |
| lots_loexpdat |
| items_itdefaultlot |
| items_itum |

