# d_stock_prevexp_nosales_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,
         items.itum,   
         lots.locode,
         lots.lostock,
         lots.loalloc,
         ( lots.lostock - lots.loalloc ) As Qty,
         Days( Date( lots.loexpdat), - 
								( select min(yv_linkitad.lkremval)
                            from yv_linkitad
                           where ( yv_linkitad.lkitem = items.itcode ) and
                                 ( yv_linkitad.lktyp = 'S' ) And
                                 ( yv_linkitad.lkremval > 0)
                        )
             ) As MaxDate,
         lots.loexpdat loexp
    FROM items,
         lots  
   WHERE ( lots.loitem = items.itcode ) and  
         ( MaxDate <= :adt_date ) And 
         ( lots.lolotctrl = 'Y' ) And
         ( lots.lostock > 0 )
```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itum |
| lots_locode |
| lots_lostock |
| lots_loalloc |
| cqty |
| cmaxdate |
| lots_loexp |

