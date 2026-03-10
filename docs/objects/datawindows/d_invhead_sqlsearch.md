# d_invhead_sqlsearch

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT distinct invoicehead.ihcode,   
         invoicehead.ihcust,   
         adresses.adname,   
         invoicehead.ihcurr,   
         invoicehead.ihdate,   
         invoicehead.ihpaymnt,   
         invoicehead.ihsalval,   
         invoicehead.ihtypinv,   
         invoicehead.ihcptper,   
         invoicehead.ihprint,   
         invoicehead.ihstatus,   
         invoicehead.ihpaid,   
         invoicehead.ihexpedi,   
         adresses.adinvedi,  
			invoicehead.ihcodemc,  
			invoicehead.ihmccode as mcdo,
			(select list(shcustref) from salhead 
				where shcode in (select ilsalorder from invoiceline where ilcode = invoicehead.ihcode) and
				trim(isnull(shcustref,'')) <> '') as shcustref,
			(select salhead.shsalesman from salhead 
				where shcode = (select first ilsalorder from invoiceline where ilcode = invoicehead.ihcode order by illine))
			     as salhead_shsalesman
    FROM adresses,   
         invoicehead  
   WHERE ( adresses.adcode = invoicehead.ihcust ) 
ORDER BY invoicehead.ihcode DESC   

```

## Colonnes
| Colonne |
|---------|
| invoicehead_ihcode |
| invoicehead_ihcust |
| adresses_adname |
| invoicehead_ihcurr |
| invoicehead_ihdate |
| invoicehead_ihpaymnt |
| invoicehead_ihsalval |
| invoicehead_ihtypinv |
| invoicehead_ihcptper |
| invoicehead_ihprint |
| invoicehead_ihstatus |
| invoicehead_ihpaid |
| invoicehead_ihexpedi |
| adresses_adinvedi |
| invoicehead_ihcodemc |
| cmcdo |
| shcustref |
| salhead_shsalesman |

