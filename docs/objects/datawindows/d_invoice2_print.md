# d_invoice2_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihcode,   
         invoicehead.ihdate,   
         invoicehead.ihsalval,   
         invoicehead.ihtvaval,   
         invoicehead.ihtotval,   
         invoicehead.ihcurr,   
         invoicehead.ihtvaref,   
         invoicehead.ihcomment,   
         invoicehead.ihpaymnt,   
         invoicehead.ihtyptva,   
         adresses.adcode,   
         adresses.adname,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         adresses.adtva,   
         adresses.adfax,   
         invoiceline.illine,   
         invoiceline.iltype,   
         invoiceline.ilitem,   
         invoiceline.ilitcustnam,   
         invoiceline.ilqtycust,   
         invoiceline.iluomord,   
         invoiceline.ilsalval,   
         invoiceline.ilshiporder,   
         invoiceline.ilshipline,   
         invoiceline.ilstdval,   
         invoiceline.iltva,   
         invoiceline.ilcomment,   
         salhead.shdatcrea,   
         salhead.shcustref,   
         salline.slcustref,   
         shipline.sllot,   
         shipline.slcode,   
         items.itdesc2,   
         salline.slshipto  ,  
			invoicehead.ihcodemc,  
			invoicehead.ihmccode as mcdo    
    FROM {oj {oj {oj {oj invoiceline  LEFT OUTER JOIN items  ON invoiceline.ilitem = items.itcode} LEFT OUTER JOIN shipline  ON invoiceline.ilshiporder = shipline.slcode AND invoiceline.ilshipline = shipline.slline} LEFT OUTER JOIN salline  ON invoiceline.ilsalorder = salline.slcode AND invoiceline.ilsalline = salline.slline} LEFT OUTER JOIN salhead  ON invoiceline.ilsalline = salhead.shcode},   
         invoicehead,   
         adresses  
   WHERE ( invoicehead.ihcust = adresses.adcode ) and  
         ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( invoicehead.ihcode = :Selected_invoice )   
ORDER BY salhead.shcustref DESC,   
         invoiceline.ilshipo
```

## Colonnes
| Colonne |
|---------|
| invoicehead_ihcode |
| invoicehead_ihdate |
| invoicehead_ihsalval |
| invoicehead_ihtvaval |
| invoicehead_ihtotval |
| invoicehead_ihcurr |
| invoicehead_ihtvaref |
| invoicehead_ihcomment |
| ihpaymnt |
| cihtyptva |
| adresses_adcode |
| adresses_adname |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| adresses_adtva |
| adresses_adfax |
| invoiceline_illine |
| invoiceline_iltype |
| invoiceline_ilitem |
| invoiceline_ilitcustnam |
| invoiceline_ilqtycust |
| invoiceline_iluomord |
| invoiceline_ilsalval |
| invoiceline_ilshiporder |
| invoiceline_ilshipline |
| invoiceline_ilstdval |
| invoiceline_iltva |
| invoiceline_ilcomment |
| cshdatcrea |
| cshcustref |
| salline_slcustref |
| csllot |
| cslcode |
| itdesc2 |
| cslshipto |
| ihcodemc |
| mcdo |

