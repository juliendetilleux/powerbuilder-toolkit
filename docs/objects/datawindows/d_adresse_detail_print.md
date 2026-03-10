# d_adresse_detail_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
         adresses.adcust,   
         adresses.adsupp,   
         adresses.adactiv,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         adresses.adtva,   
         adresses.adcustpay,   
         adresses.adsupppay,   
         adresses.adcurr,   
         adresses.adtel,   
         adresses.adfax,   
         adresses.admail,   
         adresses.adlang,   
         adresses.adbank,   
         adresses.adgrcust,   
         adresses.admoddat,   
         adresses.adeancode,   
         adresses.adsalesman,   
         adresses.adcreadat,   
         adresses.adcreauser,   
         adresses.admodifuser,   
         adresses.adurl
    FROM adresses  
   WHERE adresses.adcode = :as_adcode   

```

## Colonnes
| Colonne |
|---------|
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
| adresses_adcustpay |
| adresses_adsupppay |
| adresses_adcurr |
| adresses_adtel |
| adresses_adfax |
| adresses_admail |
| adresses_adlang |
| adresses_adbank |
| adresses_adgrcust |
| adresses_admoddat |
| adresses_adeancode |
| adresses_adsalesman |
| adresses_adcreadat |
| adresses_adcreauser |
| adresses_admodifuser |
| adresses_adurl |

