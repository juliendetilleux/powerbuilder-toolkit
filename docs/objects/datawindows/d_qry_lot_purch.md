# d_qry_lot_purch

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT histostock.hscode,   
         purhead.phsupp,   
         adresses.adname,   
         histostock.hsordno,   
         histostock.hsordlin,   
         histostock.hsitem,   
         items.itname,
         histostock.hsseq,   
         histostock.hsqty,   
         histostock.hsum,   
         histostock.hsdatim,
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr  
    FROM histostock,   
         lots,   
         purhead,   
         adresses,   
         items  
   WHERE ( lots.loorder = purhead.phcode ) and  
         ( histostock.hsordno = lots.loorder ) and  
         ( histostock.hslot = lots.locode ) and  
         ( adresses.adcode = purhead.phsupp ) and  
         ( items.itcode = lots.loitem ) and  
         ( ( histostock.hsordno = :ran_Order ) AND  
         ( histostock.hslot = :ras_Lot ) )    


```

## Colonnes
| Colonne |
|---------|
| histostock_hscode |
| purhead_phsupp |
| adresses_adname |
| histostock_hsordno |
| histostock_hsordlin |
| histostock_hsitem |
| items_itname |
| histostock_hsseq |
| histostock_hsqty |
| histostock_hsum |
| histostock_hsdatim |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |

