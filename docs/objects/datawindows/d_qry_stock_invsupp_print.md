# d_qry_stock_invsupp_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,
		items.itname,
		locations.lccode,
		lots.locode,
		lots.loorgcode,
		lots.loexpdat,
		stocks.stqty,
		adresses.adcode,
		adresses.adname ,
		items.itdefaultlot,
		items.itum
    FROM items,   
         locations,   
         lots,   
         linkitad, 
         stocks,
	    adresses  
   WHERE lots.loitem = items.itcode AND
		stocks.stitem = items.itcode AND
		stocks.stloc = locations.lccode AND
		stocks.stlot = lots.locode AND
		stocks.stqty <> 0 AND 
		adresses.adcode like :as_supp AND
       	linkitad.lkitem = items.itcode AND
     	linkitad.lktyp = 'P' AND 
		linkitad.lkmain = 'Y' AND 
		linkitad.lkadcode = adresses.adcode 
    

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| locations_lccode |
| lots_locode |
| lots_loorgcode |
| lots_loexpdat |
| stocks_stqty |
| adresses_adcode |
| adresses_adname |
| items_itdefaultlot |
| items_itum |

