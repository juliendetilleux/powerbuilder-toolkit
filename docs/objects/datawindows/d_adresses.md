# d_adresses

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
		   from adresses as ad 
		where ad.adcode = mccode_code) as mccode,
	adresses.addesc2,
	adresses.adsalesauth,
	ADRESSES.ADEANCODE
    FROM adresses  
   WHERE ( adresses.adcode <> '##########' ) AND  
         ( adresses.adcode not in ('#########C','#########R','#########S') ) AND  
         (adresses.adcust = 'Y' OR  
         adresses.adsupp = 'Y')   
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
| mccode_code |
| mccode |
| addesc2 |
| adsalesauth |
| adeancode |

