# d_qry_stock_invventil_print

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
		items.itdefaultlot,
		items.itum 
    FROM items,   
         locations,   
         lots,   
         stocks  
   WHERE lots.loitem = items.itcode AND
		stocks.stitem = items.itcode AND
		stocks.stloc = locations.lccode AND
		stocks.stlot = lots.locode AND
		stocks.stqty <> 0 AND 

		items.itcptanal =( if   :an_ventil = -1 then items.itcptanal  else :an_ventil endif ) 
      

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
| items_itdefaultlot |
| items_itum |

