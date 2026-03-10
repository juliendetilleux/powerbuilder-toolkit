# d_invedi

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihcode,   
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
         invoicehead.ihtyptva,   
         adresses.adediseq,   
         selected = 'N',   
         invoicehead.ihtvaval,   
         invoicehead.ihtotval,   
         invoicehead.ihtvaref,   
         adresses.adeancode,   
         invoicehead.ihexpedi,   
         adresses.adadr1,   
         adresses.adloc,   
         adresses.adzip,   
         adresses.adcountr,   
         adresses.adtva,   
         invoicehead.ihesctval,   
         invoicehead.ihesct,   
         adresses.adlang,   
         adresses.adcountrid,  
         invoicehead.ihcomment,
			invoicehead.ihexpiry,
			invoicehead.ihcodemc,
			invoicehead.ihnuminv,
			isnull(invoicehead.ihmccode, '##########') as ihmccode
    FROM adresses,   
         invoicehead  
   WHERE ( adresses.adcode = invoicehead.ihcust ) and  
         ( ( invoicehead.ihstatus <= :SelectedStatusMax ) AND  
         ( invoicehead.ihstatus >= :SelectedStatusMin ) ) AND  
         isnull(invoicehead.ihexpedi,'N') in ( 'N', 'D' )  AND  
         adresses.adinvedi = 'Y' /* AND  
         invoicehead.ihtypinv = '1' */    
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
| invoicehead_ihtyptva |
| adresses_adediseq |
| cselected |
| invoicehead_ihtvaval |
| invoicehead_ihtotval |
| invoicehead_ihtvaref |
| adresses_adeancode |
| invoicehead_ihexpedi |
| adresses_adadr1 |
| adresses_adloc |
| adresses_adzip |
| adresses_adcountr |
| adresses_adtva |
| invoicehead_ihesctval |
| invoicehead_ihesct |
| adresses_adlang |
| adresses_adcountrid |
| invoicehead_ihcomment |
| invoicehead_ihexpiry |
| ihcodemc |
| invoicehead_ihnuminv |
| ihmccode |

