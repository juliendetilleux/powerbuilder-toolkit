# d_qc_lot

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.loitem,   
         items.itname,   
         lots.lostock,   
         lots.lostatus,   
         items.itum,   
         lots.lorecdat,   
         lots.loorgcode,
		IF exists(select first hsseq
					from histostock 
					where hscode = 'RCMO' and
						hslot = lots.locode) THEN lots.loorder ELSE null ENDIF as loorder,
		lots.loalloc
    FROM items,   
         lots  
   WHERE lots.loitem = items.itcode AND 
         lots.lostock <> 0 AND   
         lots.lorecdat BETWEEN :adt_start AND :adt_stop  
ORDER BY lots.lorecdat ASC,   
         lots.loitem ASC,   
         lots.locode ASC   

```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| lots_loitem |
| items_itname |
| lots_lostock |
| lots_lostatus |
| items_itum |
| lots_lorecdat |
| lots_loorgcode |
| loorder |
| lots_loalloc |

