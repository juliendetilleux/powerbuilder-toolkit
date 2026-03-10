# d_stock_allittyp_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  Select '1',   
         items.itcode,   
         items.itname,   
         items.itum, 
         items.itcons,  
         stocks.stlot,   
         stocks.stloc,   
         stocks.stqty,   
         lots.lolotctrl,   
         items.itstdpur,
			lots.loorgcode,
		lots.lost  
    From items,   
         stocks,   
         lots  
   Where ( items.itcode =  stocks.stitem ) And  
         ( stocks.stlot =  lots.locode   ) And  
         ( items.itcat  =  'S'           ) And
         ( items.ittyp  In ( 'P', 'C')   ) And  
         ( items.itsale =  'N'           ) And 
         ( stocks.stqty <> 0             )    

Union all 

  Select '2',   
         items.itcode,   
         items.itname,   
         items.itum,   
         items.itcons,  
         stocks.stlot,   
         stocks.stloc,   
         stocks.stqty,   
         lots.lolotctrl,   
         items.itstdpur,
			lots.loorgcode,
		lots.lost  
    From items,   
         stocks,   
         lots  
   Where ( items.itcode =  stocks.stitem ) And  
         ( stocks.stlot =  lots.locode   ) And  
         ( items.itcat  =  'C'           ) And  
         ( stocks.stqty <> 0             )  

Union all 

  Select '3',   
         items.itcode,   
         items.itname,   
         items.itum,   
         items.itcons,  
         stocks.stlot,   
         stocks.stloc,   
         stocks.stqty,   
         lots.lolotctrl,   
         items.itstdpur,
			lots.loorgcode,
		lots.lost  
    From items,   
         stocks,   
         lots  
   Where ( items.itcode =  stocks.stitem ) And  
         ( stocks.stlot =  lots.locode   ) And  
         ( items.itcat  =  'S'           ) And
         ( items.ittyp  In ( 'P', 'C')   ) And  
         ( items.itsale =  'Y'           ) And  
         ( stocks.stqty <> 0             )  

Union all 

  Select '4',   
         items.itcode,   
         items.itname,   
         items.itum,   
         items.i
```

## Colonnes
| Colonne |
|---------|
| cf_category |
| items_itcode |
| items_itname |
| items_itum |
| items_itcons |
| stocks_stlot |
| stocks_stloc |
| stocks_stqty |
| lots_lolotctrl |
| items_itstdpur |
| lots_loorgcode |
| lots_lost |

