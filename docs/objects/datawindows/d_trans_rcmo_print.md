# d_trans_rcmo_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.lostatus,   
         lots.lorecdat,   
         lots.loreldat,   
         lots.loexpdat,   
         lots.loqcstatus,   
         lots.loorgcode,   
         items.itcode,   
         items.itname,   
         items.itdefaultlot,   
         items.itum,
		histostock.hsloc as locations,
		histostock.hsqty,
		histostock.hsum,
		histostock.hsuser,
		histostock.hsdatim,
		histostock.hscomment,
		histostock.hsprgcmnt 
    FROM items,   
         lots ,
	histostock
   WHERE lots.loitem = items.itcode and  
         	lots.locode = histostock.hslot and
         	items.itcode = histostock.hsitem and
		histostock.hsseq = :al_histoseq 

```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| lots_lostatus |
| lots_lorecdat |
| lots_loreldat |
| lots_loexpdat |
| lots_loqcstatus |
| lots_loorgcode |
| items_itcode |
| items_itname |
| items_itdefaultlot |
| items_itum |
| locations |
| histostock_hsqty |
| histostock_hsum |
| histostock_hsuser |
| histostock_hsdatim |
| histostock_hscomment |
| histostock_hsprgcmnt |

