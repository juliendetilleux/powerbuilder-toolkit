# d_adresses_sqlsearch

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
			   where smcode = adresses.adsalesman )as smname,    
			adresses.adgrading,   
         isnull ( linkmcad.lkmccode , '##########') as mccode,
	   	adresses.addesc2,
			isnull((select list(lkmccode) from linkmcad2 where lkadcode = adresses.adcode and lkactiv = 'Y'), '') as mccode2,
		adresses.adcountrid
    FROM adresses left outer join linkmcad on linkmcad.lkadcode = adresses.adcode   
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
| mccode2 |
| adcountrid |

