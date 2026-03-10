# d_crm_liste_2

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
			(select ctline from contacts where ctmain = 'Y'and contacts.ctadcode = adresses.adcode ) ,
			(select ctciv1 from contacts where ctmain = 'Y'and contacts.ctadcode = adresses.adcode ) civ1 ,
         (select choices.chname from choices where chtype = 'CIV1' and chcode = civ1 ) civilit   ,
			adresses.adgrading,
			adresses.adcustzone,
			(select ctfirstname from contacts where ctmain = 'Y'and contacts.ctadcode = adresses.adcode ) ,
			adresses.adlegalform,
			adresses.adcmnt,
			adresses.adcurr,
			(select ctgsm from contacts where ctmain = 'Y'and contacts.ctadcode = adresses.adcode ),
		adresses.addesc2
   FROM adresses,   
         choiceline choiceline_a,   
         salesman,   
         choiceline choiceline_b,   
         choiceline choiceline_c
   WHERE ( adresses.adtype = choiceline_a.clline ) and  
         ( adresses.adactivite = choiceline_b.clline ) and  
         ( adresses.adsource = choiceline_c.clline ) and  
         ( adresses.adsalesman = salesman.smcode ) and  
         choiceline_a.clcode = 'ADTP' AND  
         choiceline_b.clcode = 'ADTA' 
```

## Colonnes
| Colonne |
|---------|
| adcode |
| adname |
| adtype |
| adloc |
| adtel |
| adtva |
| adreg |
| adbank |
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
| adsalesman |
| cctname |
| ctline |
| cciv1 |
| ccivilit |
| adresses_adgrading |
| adresses_adcustzone |
| cctfirstname |
| adresses_adlegalform |
| adresses_adcmnt |
| adresses_adcurr |
| cctgsm |
| adresses_addesc2 |

