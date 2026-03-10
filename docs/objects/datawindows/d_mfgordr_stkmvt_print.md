# d_mfgordr_stkmvt_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode,   
         mfghead.mhitem,   
         items_a.itname,   
         mfghead.mhreqqty,   
         mfghead.mhmfgqty,   
         mfghead.mhmfgdat,   
         histostock.hsitem,   
         items_b.itname,   
         histostock.hslot,   
         histostock.hsloc,   
         histostock.hsqty,   
         histostock.hsum,   
         histostock.hsdatim,   
         histostock.hscode,   
         transactions.trname,   
         items_a.itum,   
         lots.lolotctrl,
         lots.loorgcode,
         histostock.hscomment,
		lots.loexpdat  ,
		histostock.hsuser
    FROM histostock,   
         mfghead,   
         items items_a,   
         items items_b,   
         transactions,   
         lots  
   WHERE ( transactions.trcode = histostock.hscode ) and  
         ( mfghead.mhcode = histostock.hsordno ) and  
         ( items_a.itcode = mfghead.mhitem ) and  
         ( items_b.itcode = histostock.hsitem ) and  
         ( histostock.hslot = lots.locode ) and  
         ( histostock.hsordtyp = 'M' ) AND  
         ( histostock.hsordno = :Selected_order ) 
ORDER BY mfghead.mhcode ASC,   
         mfghead.mhitem ASC,   
         histostock.hscode ASC,   
         histostock.hsdatim ASC   

```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| mfghead_mhitem |
| items_itname |
| mfghead_mhreqqty |
| mfghead_mhmfgqty |
| mfghead_mhmfgdat |
| histostock_hsitem |
| items_itname |
| histostock_hslot |
| histostock_hsloc |
| histostock_hsqty |
| histostock_hsum |
| histostock_hsdatim |
| histostock_hscode |
| transactions_trname |
| items_itum |
| lots_lolotctrl |
| lots_loorgcode |
| histostock_hscomment |
| lots_loexpdat |
| histostock_hsuser |

