# d_qry_invcpt_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihcode,   
         adresses_a.adname,   
         adresses_a.adadr1,   
         adresses_a.adadr2,   
         adresses_a.adzip,   
         adresses_a.adloc,   
         adresses_a.adcountr,   
         invoicehead.ihdate,   
         invoicehead.ihsalval,   
         invoicehead.ihtvaval,   
         invoicehead.ihtotval,   
         invoicehead.ihcurr,   
         invoicehead.ihtvaref,   
         invoicehead.ihcomment,   
         invoicehead.ihpaymnt,   
         invoicehead.ihcust,   
         invoicehead.ihtyptva,   
         invoicehead.ihtypinv,   
         invoicehead.ihcurconv,   
         invoicecpt.iccptsal,   
         invoicecpt.icbasval,   
         invoicecpt.ictva,   
         invoicehead.ihexpiry,   
         invoicecpt.iccurbasval,   
         invoicehead.ihcodemc,   
         invoicehead.ihmccode,   
         adresses_b.adname,   
         invoicehead.ihchecksum  ,  
         invoicehead.ihmccode as mcdo   
    FROM adresses adresses_a,   
         invoicehead,   
         invoicecpt,   
         adresses adresses_b  
   WHERE ( invoicehead.ihcust = adresses_a.adcode ) and  
         ( invoicehead.ihcode = invoicecpt.iccode ) and  
         ( adresses_b.adcode = invoicehead.ihmccode ) and  
         ( ( invoicehead.ihdate between :MinInv and :MaxInv ) )   
ORDER BY invoicehead.ihmccode ASC,   
         invoicehead.ihcode ASC   

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
| invoicehead_ihpaymnt |
| invoicehead_ihcust |
| invoicehead_ihtyptva |
| invoicehead_ihtypinv |
| invoicehead_ihcurconv |
| invoicecpt_iccptsal |
| invoicecpt_icbasval |
| invoicecpt_ictva |
| invoicehead_ihexpiry |
| invoicecpt_iccurbasval |
| invoicehead_ihcodemc |
| invoicehead_ihmccode |
| adresses_adname |
| invoicehead_ihchecksum |
| cmcdo |

