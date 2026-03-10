# d_inventory_ajst_mass

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _stock
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
		items.itlocpic ,
		cast( '' as char(30)) as hscomment  
    FROM stocks,   
         items,   
         lots  
   WHERE stocks.stitem = items.itcode AND
		stocks.stlot = lots.locode AND 
		lots.loitem = items.itcode AND
		stocks.stqty <> 0  
      
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
| qtycorr |
| lots_loorgcode |
| items_itum |
| items_itdefaultlot |
| calloc |
| items_itstdpur |
| items_itcons |
| lkadcode |
| items_itstat1 |
| items_itstat2 |
| items_itlocpic |
| hscomment |

