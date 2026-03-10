# d_crm_merge_ad_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname,   
         adresses.adtype,   
         adresses.adloc,   
         adresses.adtel,  
			adresses.adtva,
			adresses.adreg,
			adresses.adbank, 
         adresses.adactiv,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adcountr,   
         adresses.adfax,   
         adresses.admail,   
         adresses.adlang,   
         adresses.adcountrid,   
         adresses.adurl,   
         adresses.adactivite,   
         adresses.adsource,  
			adresses.adsalesman,  
         salesman.smname,
         choiceline_c.clname as c_clname,   
         choiceline_b.clname as b_clname,   
         choiceline_a.clname as a_clname,   
         adresses.adsalesman,   
			(select ctname from contacts where ctmain = 'Y'and contacts.ctadcode = adresses.adcode ) ,
			(select ctfirstname from contacts where ctmain = 'Y'and contacts.ctadcode = adresses.adcode ) ,
			(select ctline from contacts where ctmain = 'Y'and contacts.ctadcode = adresses.adcode )
   FROM adresses,   
         choiceline choiceline_a,   
         salesman,   
         choiceline choiceline_b,   
         choiceline choiceline_c
   WHERE ( adresses.adtype = choiceline_a.clline ) and  
         ( adresses.adactivite = choiceline_b.clline ) and  
         ( adresses.adsource = choiceline_c.clline ) and  
         ( adresses.adsalesman = salesman.smcode ) and  
         ( adresses.adcode not like '#########%' ) AND  
         choiceline_a.clcode = 'ADTP' AND  
         choiceline_b.clcode = 'ADTA' AND  
         choiceline_c.clcode = 'ADSO' 
```

## Colonnes
| Colonne |
|---------|
| adcode |
| adname |
| adtype |
| adloc |
| adtel |
| adresses_adtva |
| adresses_adreg |
| adresses_adbank |
| adactiv |
| adadr1 |
| adadr2 |
| adzip |
| adcountr |
| adfax |
| admail |
| adlang |
| adcountrid |
| adurl |
| adactivite |
| adsource |
| adsalesman |
| salesman_smname |
| choiceline_c_clname |
| choiceline_b_clname |
| choiceline_a_clname |
| adresses_adsalesman |
| cctname |
| cctfirstname |
| cctline |

