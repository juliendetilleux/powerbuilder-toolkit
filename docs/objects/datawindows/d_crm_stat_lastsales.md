# d_crm_stat_lastsales

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname,
         isnull(( select min(shdatcrea) from salhead where salhead.shcust = adresses.adcode ) , date('1900-1-1'))  firstdate ,
         isnull(( select max(shdatcrea) from salhead where salhead.shcust = adresses.adcode ), date('1900-1-1'))  lastdate ,
         isnull(( SELECT max(adrsactions.aacreadate)
             FROM adrsactions WHERE adrsactions.aaadrid = adresses.adcode 
              AND adrsactions.aastatus IN (1,2) ), date('1900-1-1'))  last_action,
         isnull(( SELECT sum(invoicehead.ihsalval * invoicehead.ihfacnot/ invoicehead.ihcurconv)  
             FROM invoicehead WHERE invoicehead.ihcust = adresses.adcode /*1*/ ),0) last_ca ,
         isnull(( SELECT sum(invoicehead.ihsalval * invoicehead.ihfacnot/ invoicehead.ihcurconv)  
             FROM invoicehead WHERE invoicehead.ihcust = adresses.adcode /*2*/ ),0) prev_ca
    FROM adresses  
   WHERE adresses.adcust = 'Y' AND  
         adresses.adcode not in ('#########C','#########R','#########S')     

```

## Colonnes
| Colonne |
|---------|
| adresses_adcode |
| adresses_adname |
| firstdate |
| lastdate |
| last_action |
| last_ca |
| prev_ca |

