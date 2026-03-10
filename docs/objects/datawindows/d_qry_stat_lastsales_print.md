# d_qry_stat_lastsales_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname,
         ( select min(shdatcrea) from salhead where salhead.shcust = adresses.adcode )  firstdate ,
         ( select max(shdatcrea) from salhead where salhead.shcust = adresses.adcode )  lastdate ,
         ( SELECT max(adrsactions.aacreadate)
             FROM adrsactions WHERE adrsactions.aaadrid = adresses.adcode 
              AND adrsactions.aastatus IN (1,2) ) last_action,
         ( SELECT sum(invoicehead.ihsalval * invoicehead.ihcurconv * invoicehead.ihfacnot)  
             FROM invoicehead WHERE invoicehead.ihcust = adresses.adcode ) last_ca ,
         ( SELECT sum(invoicehead.ihsalval * invoicehead.ihcurconv * invoicehead.ihfacnot)  
             FROM invoicehead WHERE invoicehead.ihcust = adresses.adcode ) prev_ca,
		adresses.adactiv
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
| adactiv |

