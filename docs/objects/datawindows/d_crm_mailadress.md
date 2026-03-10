# d_crm_mailadress

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
         adresses.adactiv,   
         adresses.adactivite,    
         adresses.adsource,   
         contacts.ctname,   
         contacts.ctfirstname,   
         contacts.cttel,   
         contacts.ctmail,   
         contacts.ctlangue,   
         contacts.ctmain,   
         contacts.ctline,
         contacts.ctfunction,   
         contacts.ctactiv,
		IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'),'') = '1' THEN
			  isnull((select list(linkmcad2.lkmccode)
						 from linkmcad2 
						where linkmcad2.lkadcode = adresses.adcode And
								linkmcad2.lkactiv = 'Y' ), '##########' )
		ELSE
			  isnull((select linkmcad.lkmccode 
						 from linkmcad 
						where linkmcad.lkadcode = adresses.adcode ), '##########' )
		ENDIF as mccode ,
		adsalesman
    FROM adresses,   
           contacts  
   WHERE
         ( contacts.ctadcode = adresses.adcode ) and  
         (adresses.adcode not in ('#########C','#########R','#########S') ) AND  
         	( contacts.ctmail  is not Null ) and
			(contacts.ctmail <> '')

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
| adlang |
| adcountrid |
| adurl |
| adactiv |
| adactivite |
| adsource |
| ctname |
| ctfirstname |
| cttel |
| ctmail |
| ctlangue |
| ctmain |
| ctline |
| ctfunction |
| contacts_ctactiv |
| mccode |
| adsalesman |

