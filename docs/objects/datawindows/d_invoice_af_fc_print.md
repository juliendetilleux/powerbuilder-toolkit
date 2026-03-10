# d_invoice_af_fc_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses_b.adcode,   
         adresses_b.adname,   
         adresses_b.adadr1,   
         adresses_b.adadr2,   
         adresses_b.adzip,   
         adresses_b.adloc,   
         adresses_b.adcountr,   
         invoicehead.ihcode,   
         adresses_a.adname,   
         adresses_a.adadr1,   
         adresses_a.adadr2,   
         adresses_a.adzip,   
         adresses_a.adloc,   
         adresses_a.adcountr,   
         invoicehead.ihdate,   
         choices.chname,   
         invoicehead.ihsalval,   
         invoicehead.ihtvaval,   
         invoicehead.ihtotval,   
         invoicehead.ihcurr,   
         invoicehead.ihtvaref,   
         invoicehead.ihcomment,   
         adresses_b.adtel,   
         adresses_b.adfax,   
         adresses_b.adbank,   
         adresses_b.adcmnt,   
         adresses_b.adreg,   
         adresses_b.adtva,   
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
         salline.slcustref,   
         invoiceline.iltva,   
         invoiceline.ilcomment,   
         adresses_b.admail ,  
			invoicehead.ihcodemc,  
			invoicehead.ihmccode as mcdo   ,
			(select cuconv from currencies where cucode = 'CDF') as conversion
    FROM {oj invoiceline  LEFT OUTER JOIN salline  ON invoiceline.ilsalorder = salline.slcode AND invoiceline.ilsalline = salline.slline},   
         adresses adresses_a,   
         invoicehead,   
         adresses adresses_b,   
         choices  
   WHERE ( invoicehead.ihcust = adresses_a.adcode ) and  
         ( invoicehead.ihpaymnt = choices.chcode ) and  
         ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( ( adresses_b.adcode = mcdo
```

## Colonnes
| Colonne |
|---------|
| adresses_adcode |
| adresses_adname |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| invoicehead_ihcode |
| adresses_adname |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| invoicehead_ihdate |
| choices_chname |
| invoicehead_ihsalval |
| invoicehead_ihtvaval |
| invoicehead_ihtotval |
| invoicehead_ihcurr |
| invoicehead_ihtvaref |
| invoicehead_ihcomment |
| adresses_adtel |
| adresses_adfax |
| adresses_adbank |
| adresses_adcmnt |
| adresses_adreg |
| adresses_adtva |
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
| salline_slcustref |
| invoiceline_iltva |
| invoiceline_ilcomment |
| adresses_admail |
| invoicehead_ihcodemc |
| invoicehead_mcdo |
| conversion |

