# d_inventory_mass_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         lots.locode,   
         stocks.stloc,   
         stocks.stqty,   
         stocks.stqty as qtycorr,   
         lots.loorgcode,   
         items.itum,   
         items.itdefaultlot,
		stocks.stalloc  as alloc,
		items.itstdpur,
		items.itcons,
		(select first linkitad.lkadcode
		   from linkitad 
		where linkitad.lkitem = items.itcode AND
				linkitad.lktyp = 'P' AND 
				linkitad.lkmain = 'Y' ) as lkadcode,
		items.itstat1, 
		items.itstat2,
		items.itlocpic  
    FROM stocks,   
         items,   
         lots  
   WHERE stocks.stitem = items.itcode AND
		stocks.stlot = lots.locode AND 
		lots.loitem = items.itcode AND
		stocks.stqty <> IF :al_stock = 0 THEN stocks.stqty -1 ELSE 0 ENDIF
      
ORDER BY items.itcode,
		stocks.stloc,
		lots.locode
```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| lots_locode |
| stocks_stloc |
| stocks_stqty |
| stocks_qtycorr |
| lots_loorgcode |
| items_itum |
| items_itdefaultlot |
| stocks_alloc |
| items_itstdpur |
| items_itcons |
| lkadcode |
| items_itstat1 |
| items_itstat2 |
| items_itlocpic |

