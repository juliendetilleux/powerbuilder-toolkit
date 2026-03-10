# d_invoice_ctrl_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihcode,   
         adresses.adname,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         invoicehead.ihdate,   
         invoicehead.ihsalval,   
         invoicehead.ihtvaval,   
         invoicehead.ihtotval,   
         invoicehead.ihcurr,   
         invoicehead.ihtvaref,   
         invoicehead.ihcomment,   
         invoiceline.illine,   
         invoiceline.iltype,   
         invoiceline.ilitem,   
         invoiceline.ilitcustnam,   
         invoiceline.ilqtycust,   
         invoiceline.ilsalval,   
         invoiceline.ilshiporder,   
         invoiceline.ilshipline,   
         invoiceline.ilstdval,   
         invoiceline.iltva,   
         invoiceline.ilcomment,   
         invoicehead.ihpaymnt,   
         invoiceline.ilcptsal,   
         invoicehead.ihcust,   
         invoicehead.ihtyptva,   
         invoicehead.ihtypinv,   
         invoicehead.ihcurconv,   
         invoiceline.iluomord,   
         invoiceline.ilcptanal,    
         invoiceline.ilcptanal2,  
         invoicehead.ihexpiry,   
         invoicehead.ihcodemc,   
         invoicehead.ihmccode, 
         invoicehead.ihmccode as cmcdo   
    FROM invoiceline,   
         adresses,   
         invoicehead  
   WHERE ( invoicehead.ihcust = adresses.adcode ) and  
         ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( ( invoicehead.ihstatus between :MinStatus and :MaxStatus ) )

Union All

  SELECT invoicehead.ihcode,   
         adresses.adname,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         invoicehead.ihdate,   
         invoicehead.ihsalval,   
         invoicehead.ihtvaval,   
         invoicehead.ihtotval,   
         invoicehead.ihcurr,   
         invoicehead.ihtvaref,   
```

## Colonnes
| Colonne |
|---------|
| invoicehead_ihcode |
| adresses_adname |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| invoicehead_ihdate |
| invoicehead_ihsalval |
| invoicehead_ihtvaval |
| invoicehead_ihtotval |
| invoicehead_ihcurr |
| invoicehead_ihtvaref |
| invoicehead_ihcomment |
| invoiceline_illine |
| invoiceline_iltype |
| invoiceline_ilitem |
| invoiceline_ilitcustnam |
| invoiceline_ilqtycust |
| invoiceline_ilsalval |
| invoiceline_ilshiporder |
| invoiceline_ilshipline |
| invoiceline_ilstdval |
| invoiceline_iltva |
| invoiceline_ilcomment |
| invoicehead_ihpaymnt |
| invoiceline_ilcptsal |
| invoicehead_ihcust |
| invoicehead_ihtyptva |
| invoicehead_ihtypinv |
| invoicehead_ihcurconv |
| invoiceline_iluomord |
| invoiceline_ilcptanal |
| invoiceline_ilcptanal2 |
| invoicehead_ihexpiry |
| invoicehead_ihcodemc |
| invoicehead_ihmccode |
| cmcdo |

