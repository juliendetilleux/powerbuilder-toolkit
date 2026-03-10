# d_mfg_report_bcd_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itname,   
         items.itean,   
         lots.loitem,   
         lots.locode,   
         lots.loexpdat,   
         lots.loorgcode,   
         histostock.hsqty,   
         items.itum,   
         histostock.hsprgcmnt,   
         histostock.hsdatim,   
         lots.lofreezdate,   
         isnull(items.itisfrozen,'') as itisfrozen,
		isnull((select ppvalue from progparam where ppcode = 'FREEZART'), '') as FREEZART 
    FROM items,   
         lots,   
         histostock,   
         mfghead
   WHERE ( lots.loitem = items.itcode ) and  
         ( histostock.hsordno = mfghead.mhcode ) and  
         ( lots.locode = :sellot ) AND  
         ( histostock.hsseq = :selhist ) 
```

## Colonnes
| Colonne |
|---------|
| items_itname |
| items_itean |
| lots_loitem |
| lots_locode |
| lots_loexpdat |
| lots_loorgcode |
| histostock_hsqty |
| items_itum |
| histostock_hsprgcmnt |
| histostock_hsdatim |
| lots_lofreezdate |
| itisfrozen |
| freezart |

