# d_adresses_cust

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adcust,   
         adresses.adsupp,   
         adresses.adactiv,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adname,   
         adresses.adgrading,   
         adresses.adtva,
		  
		(select ad.adname 
		   from adresses as ad 
		where ad.adcode = isnull((select linkmcad.lkmccode 
											 from linkmcad 
											where linkmcad.lkadcode = adresses.adcode), '##########')) as mccode,
			isnull((select list(lkmccode) from linkmcad2 where lkadcode = adresses.adcode and lkactiv = 'Y'), '') as mccode2,
			adcustzone,
			adcountr, 
			adcountrid, 
			adcurr, 
			
			(select count(*) 
			 from adextracosts,   
			where adextracosts.axadcode = adresses.adcode) as nb_costs

    FROM adresses  
   WHERE adresses.adcode <> '##########' AND  
         adresses.adcode not in ('#########C','#########R','#########S') AND  
         adresses.adcust = 'Y' AND
			adresses.adactiv = 'Y' AND
			adresses.adcurr = :as_curr   
ORDER BY adresses.adcode ASC   

```

## Colonnes
| Colonne |
|---------|
| adcode |
| adcust |
| adsupp |
| adactiv |
| adzip |
| adloc |
| adname |
| adgrading |
| adtva |
| mccode |
| mccode2 |
| adcustzone |
| adcountr |
| adcountrid |
| adcurr |
| nb_costs |

