# d_mailadress

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT DISTINCT 20 as type,
	    adresses.adcode,   
         adresses.adname,   
         adresses.adtype,   
         adresses.adloc,   
         adresses.adtel,   
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
         adresses.adactiv,   
         adresses.adactivite,    
         adresses.adsource,   
         salesman.smname,   
         choiceline_c.clname,   
         choiceline_b.clname,   
         choiceline_a.clname,   
         adresses.adsalesman,   
         contacts.ctname,   
         contacts.ctfirstname,   
         contacts.cttel,   
         contacts.ctmail,   
         contacts.ctlangue,   
         contacts.ctmain,   
         contacts.ctline,
         contacts.ctfunction,   
         contacts.ctactiv    
    FROM adresses,   
         choiceline choiceline_a,   
         salesman,   
         choiceline choiceline_b,   
         choiceline choiceline_c,   
         contacts  
   WHERE ( adresses.adtype = choiceline_a.clline ) and  
         ( adresses.adactivite = choiceline_b.clline ) and  
         ( adresses.adsource = choiceline_c.clline ) and  
         ( adresses.adsalesman = salesman.smcode ) and  
         ( contacts.ctadcode = adresses.adcode ) and  
         (adresses.adcode not in ('#########C','#########R','#########S') ) AND  
         choiceline_a.clcode = 'ADTP' AND  
         choiceline_b.clcode = 'ADTA' AND  
         choiceline_c.clcode = 'ADSO'     and  
		(contacts.ctmail  is not Null ) and (contacts.ctmail <> '') and
		( adresses.adcode <> '##########' ) AND  
         (adresses.adcust = 'Y' OR adresses.adsupp = 'Y')   

UNION ALL

  SELECT 10,
         adresses.adcode,   
         adresses.adname,   
         adresses.adty
```

## Colonnes
| Colonne |
|---------|
| type |
| adcode |
| adname |
| adtype |
| adloc |
| adtel |
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
| adactiv |
| adactivite |
| adsource |
| smname |
| choiceline_clname |
| choiceline_clname |
| choiceline_clname |
| adsalesman |
| ctname |
| ctfirstname |
| cttel |
| ctmail |
| ctlangue |
| ctmain |
| ctline |
| ctfunction |
| contacts_ctactiv |

