# d_adresses_crm_sqlsearch

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname as adname,   
         adresses.adcust,   
         adresses.adsupp,  
	 	adresses.adtype as adtype,    
         adresses.adactiv,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
		adresses.adcountrid,
         adresses.adtva,   
         adresses.adgrsupp,   
         adresses.adgrcust,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adtel,   
		adresses.adactiv,   
         adresses.adsalesman,
		(select ctname from contacts where ctmain = 'Y'and contacts.ctadcode = adresses.adcode ) as cctname ,
         ( select smname 
			    from salesman 
			   where smcode = adresses.adsalesman )as smname,    
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
		ENDIF as mccode,
	   	adresses.addesc2,
		(select ctline from contacts where ctmain = 'Y'and contacts.ctadcode = adresses.adcode ) as ctline,
		(select choiceline.clname from choiceline where adresses.adsource = choiceline.clline and choiceline.clcode = 'ADSO' ) as choiceline_c,
		(select choiceline.clname from choiceline where adresses.adactivite = choiceline.clline and choiceline.clcode = 'ADTA' ) as choiceline_b,
		(select choiceline.clname from choiceline where adresses.adtype = choiceline.clline and choiceline.clcode = 'ADTP' ) as choiceline_a,
		adresses.adlang,
		adresses.adfax,
		adresses.admail,
		adresses.adurl
    FROM adresses left outer join linkmcad on linkmcad.lkadcode = adresses.adcode   
   WHERE adresses.adcode not in ('#########C','#########R','#########S')


```

## Colonnes
| Colonne |
|---------|
| adcode |
| adname |
| adcust |
| adsupp |
| adtype |
| adactiv |
| adzip |
| adloc |
| adcountr |
| adresses_adcountrid |
| adtva |
| adgrsupp |
| adgrcust |
| adadr1 |
| adadr2 |
| adtel |
| adresses_adactiv |
| adsalesman |
| cctname |
| salesman_smname |
| adgrading |
| mccode |
| adresses_addesc2 |
| ctline |
| choiceline_c |
| choiceline_b |
| choiceline_a |
| adlang |
| adfax |
| admail |
| adurl |

