# d_creditnote_print

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
         adresses_b.adtva,   
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
         invoicehead.ihcomment  
    FROM adresses adresses_a,   
         invoicehead,   
         adresses adresses_b,   
         choices  
   WHERE ( invoicehead.ihcust = adresses_a.adcode ) and  
         ( invoicehead.ihpaymnt = choices.chcode ) and  
         ( ( adresses_b.adcode = '##########' ) AND  
         ( choices.chtype = 'PAYM' ) AND  
         ( invoicehead.ihcode = :Selected_invoice ) )    

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
| adresses_adtva |
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

