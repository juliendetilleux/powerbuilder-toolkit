# d_mfgordr_stkmvt

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode,   
         mfghead.mhitem,   
         mfghead.mhreqqty,   
         mfghead.mhmfgqty,   
         mfghead.mhmfgdat,  
         histostock.hsseq,   
         histostock.hsitem,   
         histostock.hslot,   
         histostock.hsloc,   
         histostock.hsqty,   
         histostock.hsum,   
         histostock.hsdatim,   
         histostock.hscode,   
         histostock.hscomment,   
         histostock.hsprgcmnt,   
         transactions.trname,   
         lots.lolotctrl,
         lots.loorgcode,
		items.itname,
		histostock.hsqtytarif,
		isnull( items.itisumtarif, 'N' ) as isumtarif,
		isnull( items.itumtarif, 'KG' ) as umtarif,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF,
		lots.loexpdat  
    FROM histostock,   
         mfghead,   
         transactions,   
         lots,
         items  
   WHERE ( transactions.trcode = histostock.hscode ) and  
         ( mfghead.mhcode = histostock.hsordno ) and  
         ( histostock.hsitem = items.itcode ) and 
         ( histostock.hslot = lots.locode ) and  
         ( ( histostock.hsordtyp = 'M' ) AND  
         ( histostock.hsordno = :Selected_order ) )   
ORDER BY histostock.hscode ASC,   
         histostock.hsdatim ASC   

```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| mfghead_mhitem |
| mfghead_mhreqqty |
| mfghead_mhmfgqty |
| mfghead_mhmfgdat |
| histostock_hsseq |
| histostock_hsitem |
| histostock_hslot |
| histostock_hsloc |
| histostock_hsqty |
| histostock_hsum |
| histostock_hsdatim |
| histostock_hsdatim_t |
| histostock_hscomment |
| histostock_hsprgcmnt |
| transactions_trname |
| lots_lolotctrl |
| lots_loorgcode |
| items_itname |
| histostock_hsqtytarif |
| isumtarif |
| umtarif |
| itumtrf |
| lots_loexpdat |

