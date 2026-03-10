# d_crm_liste_contact

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT DISTINCT adresses.adcode,   
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
         adresses.adactivite,   
         adresses.adsource,   
         salesman.smname,   
         choiceline_c.clname as choiceline_c,   
         choiceline_b.clname as choiceline_b,   
         choiceline_a.clname as choiceline_a,   
         adresses.adsalesman,    
         contacts.ctname,   
         contacts.ctfirstname,  
         contacts.cttel,   
         contacts.ctmail,   
         contacts.ctlangue,   
         contacts.ctmain,   
         contacts.ctline, 
         (select choices.chname from choices where chtype = 'CIV1' and chcode = contacts.ctciv1) civilit ,
         contacts.ctactiv,
		adresses.adtva,
		adresses.adreg,
		adresses.adbank,
		adresses.adlegalform,
		adresses.adgrading,
		IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'),'') = '1' THEN
			  isnull((select list(linkmcad2.lkmccode)
						 from linkmcad2 
						where linkmcad2.lkadcode = adresses.adcode And
								linkmcad2.lkactiv = 'Y' ), '##########' )
		ELSE
			  isnull((select linkmcad.lkmccode 
						 from linkmcad 
						where linkmcad.lkadcode = adresses.adcode ), '##########' )
		ENDIF as mccode
    FROM adresses,   
         choiceline choiceline_a,   
         salesman,   
         choiceline choiceline_b,   
         choiceline choiceline_c,   
         contacts  
   WHERE ( adresses.adtype = choiceline_a.clline ) and  
         ( adresses.adactivite = choiceline_b.clline ) and  
         ( adresses.adsource = choiceline_c.clline ) and  
         ( adresses.adsalesm
```

## Colonnes
| Colonne |
|---------|
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
| adresses_adlang |
| adresses_adcountrid |
| adresses_adurl |
| adresses_adactivite |
| adresses_adsource |
| salesman_smname |
| choiceline_c |
| choiceline_b |
| choiceline_a |
| adsalesman |
| contacts_ctname |
| ctfirstname |
| contacts_cttel |
| contacts_ctmail |
| contacts_ctlangue |
| contacts_ctmain |
| ctline |
| ccivilit |
| contacts_ctactiv |
| adtva |
| adreg |
| adbank |
| adresses_adlegalform |
| adgrading |
| mccode |

