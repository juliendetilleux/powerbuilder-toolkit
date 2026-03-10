# d_adresses_shipto_sqlsearch

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname,   
         adresses.adcust,   
         adresses.adsupp,   
         adresses.adactiv,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         adresses.adtva,   
         adresses.adgrsupp,   
         adresses.adgrcust,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adtel,   
         adresses.adsalesman,
         ( select smname 
        	from salesman 
        	where smcode = adresses.adsalesman )as smname    
         , adresses.adgrading ,   
         	isnull ( linkmcad.lkmccode , '##########') as mccode,
	  	adresses.addesc2,
		shipto.stcode,
		shipto.stseq,
		shipto.stdesc,
		shipto.stmain,
		shipto.stadr1,
		shipto.stadr2,
		shipto.stzip,
		shipto.stloc,
		shipto.stcountr,
		shipto.sttel,
		shipto.stcontact ,
		adresses.adcountrid   
    FROM adresses left outer join linkmcad on linkmcad.lkadcode = adresses.adcode,
		adresses join shipto on adresses.adcode = shipto.stcode
   WHERE adresses.adcode not in ('#########C','#########R','#########S') 
		 
        ORDER BY adresses.adcode ASC   


```

## Colonnes
| Colonne |
|---------|
| adcode |
| adname |
| adcust |
| adsupp |
| adactiv |
| adzip |
| adloc |
| adcountr |
| adtva |
| adgrsupp |
| adgrcust |
| adadr1 |
| adadr2 |
| adtel |
| adsalesman |
| smname |
| adgrading |
| mccode |
| addesc2 |
| shipto_stcode |
| shipto_stseq |
| shipto_stdesc |
| shipto_stmain |
| shipto_stadr1 |
| shipto_stadr2 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |
| shipto_sttel |
| shipto_stcontact |
| adcountrid |

