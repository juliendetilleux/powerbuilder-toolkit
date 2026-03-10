# d_adresses_bcd_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT 10 as sort,
		adresses.adcode,   
         adresses.adname,   
         adresses.adcust,   
         adresses.adsupp,   
         adresses.adactiv,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         adresses.adtva,   
         adresses.adreg,   
         adresses.adcustpay,   
         adresses.adcmnt,   
         adresses.adcurr,   
         adresses.adgrsupp,   
         adresses.adgrcust,   
         adresses.adsupppay,   
         adresses.adinvcopy,   
         adresses.adtvalvl,   
         adresses.adtel,   
         adresses.adfax,   
         adresses.admail,   
         adresses.adlang,   
         adresses.adbank,   
         adresses.adidcptsupp,   
         adresses.adidcptcust,   
         adresses.adrateid,   
         adresses.adtvatyp,   
         adresses.adcountrid,   
         adresses.adgrading,   
         adresses.adristcust,   
         adresses.adesctcust,   
         adresses.adfcst,   
         adresses.addlvt,   
         adresses.adsalesauth,   
         adresses.adneval,   
         adresses.adeancode,   
         adresses.adsalesman,   
         adresses.adcreadat,   
         adresses.adcreauser,   
         adresses.admoddat,   
         adresses.admodifuser,   
         adresses.adurl,   
         adresses.adedil,   
         adresses.adpaymode,   
         adresses.adshipcopy,   
         adresses.adetigro,   
         adresses.adetipal,   
         adresses.adtype,   
         adresses.adinvm,   
         adresses.adcustzone,   
         adresses.adristrate  
    FROM adresses
   WHERE adresses.adactiv = 'Y' AND 
			adresses.adcode not in ('#########C','#########R','#########S') AND
			adresses.adsupp = 'Y'    
     
 UNION ALL   
    
  SELECT 20 as sort,
		adresses.adcode,   
         adresses.adname,   
         adresses.adcust,   
         adresses.a
```

## Colonnes
| Colonne |
|---------|
| sort |
| adresses_adcode |
| adresses_adname |
| adresses_adcust |
| adresses_adsupp |
| adresses_adactiv |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| adresses_adtva |
| adresses_adreg |
| adresses_adcustpay |
| adresses_adcmnt |
| adresses_adcurr |
| adresses_adgrsupp |
| adresses_adgrcust |
| adresses_adsupppay |
| adresses_adinvcopy |
| adresses_adtvalvl |
| adresses_adtel |
| adresses_adfax |
| adresses_admail |
| adresses_adlang |
| adresses_adbank |
| adresses_adidcptsupp |
| adresses_adidcptcust |
| adresses_adrateid |
| adresses_adtvatyp |
| adresses_adcountrid |
| adresses_adgrading |
| adresses_adristcust |
| adresses_adesctcust |
| adresses_adfcst |
| adresses_addlvt |
| adresses_adsalesauth |
| adresses_adneval |
| adresses_adeancode |
| adresses_adsalesman |
| adresses_adcreadat |
| adresses_adcreauser |
| adresses_admoddat |
| adresses_admodifuser |
| adresses_adurl |
| adresses_adedil |
| adresses_adpaymode |
| adresses_adshipcopy |
| adresses_adetigro |
| adresses_adetipal |
| adresses_adtype |
| adresses_adinvm |
| adresses_adcustzone |
| adresses_adristrate |

