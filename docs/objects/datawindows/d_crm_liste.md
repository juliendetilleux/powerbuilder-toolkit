# d_crm_liste

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
		adresses.addesc2,
		IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'),'') = '1' THEN
				  isnull((select list(linkmcad2.lkmccode)
							 from linkmcad2 
							where linkmcad2.lkadcode = adresses.adcode And
									linkmcad2.lkactiv = 'Y' /*HA2188*/), '##########' )
				ELSE
				  isnull((select linkmcad.lkmccode 
							 from linkmcad 
							where linkmcad.lkadcode = adresses.adcode ), '##########' )
				ENDIF as mccode_code, 
	
			(select ad.adname 
				
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
| mccode_code |
| mccode |

