# d_qry_mfg_1it_histo_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhmfgdat,   
         mfghead.mhmfgqty,   
         items_a.itum,   
         mfghead.mhmreal,   
         mfghead.mhlreal,   
         mfghead.mhereal,   
         (mfghead.mhmreal+mfghead.mhlreal+mfghead.mhereal) as Total,   
         histostock.hsordno,   
         histostock.hsdatim,   
         transactions.trname,   
         histostock.hslot,   
         hsqty * trsign as Quantity  ,   
         items_b.itname,
         items_b.itdefaultlot,
  			histostock.hsitem 
    FROM histostock,   
         items items_a,   
         mfghead,   
         transactions,   
         items items_b  
   WHERE ( mfghead.mhitem = items_a.itcode ) and  
         ( histostock.hsordno = mfghead.mhcode ) and  
         ( transactions.trcode = histostock.hscode ) and  
         ( histostock.hsitem = items_b.itcode ) and  
         (( trcode = 'RQMO') OR (trcode = 'RCMO' and hsordlin = 0 /*os2519*/)) AND  
         (  mfghead.mhstatus = '8' ) AND  
         ( mfghead.mhitem = :aitem ) AND  
         ( mfghead.mhmfgdat >= :astart ) AND  
         ( mfghead.mhmfgdat <= :astop )    

```

## Colonnes
| Colonne |
|---------|
| mfghead_mhmfgdat |
| mfghead_mhmfgqty |
| items_itum |
| mfghead_mhmreal |
| mfghead_mhlreal |
| mfghead_mhereal |
| ctotal |
| histostock_hsordno |
| histostock_hsdatim |
| transactions_trname |
| histostock_hslot |
| cquantity |
| items_itname |
| items_itdefaultlot |
| histostock_hsitem |

