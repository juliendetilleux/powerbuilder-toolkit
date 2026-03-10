# d_purghead_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purghead.phcode,   
         purghead.phsupp,   
         purghead.phstatus,   
         purghead.phlastline,   
         adresses.adname,   
         purghead.phcurr,   
         purghead.phtype,   
         adresses.adlang,   
         isnull(purghead.phaut,' ') as phaut,
			isnull((select ppvalue from progparam where ppcode = 'APPROBIVY'),'') as APPROBIVY,
			isnull((select count(*) from purgline 
						where purgline.plcode = purghead.phcode and 
							purgline.plstatus < '9' and
							((purgline.plstatus >= '3') OR (purgline.plstatus = '2' and isnull(purgline.plenvoy, 'N') = 'Y'))
						),0) as envoy,
			isnull((select count(*) from purgline where purgline.plcode = purghead.phcode and purgline.plstatus >= '3' and purgline.plstatus < '9'),0) as confirmed,
				isnull((select count(*) from purgline where purgline.plcode = purghead.phcode and purgline.plstatus < '9'),0) as nbpurline,

			
			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2398*/
				isnull(phmccode, '##########')
			ELSE
				isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = purghead.phsupp),'##########') 
			ENDIF as mcdo,
   		purghead.phrefint,
		purghead.phsendwms
    FROM purghead,   
         adresses  
   WHERE ( adresses.adcode = purghead.phsupp ) and  
         ( purghead.phstatus between :Min_Status and :max_status )   
ORDER BY purghead.phcode DESC   

```

## Colonnes
| Colonne |
|---------|
| phcode |
| phsupp |
| phstatus |
| phlastline |
| adresses_adname |
| phcurr |
| flag |
| adresses_adlang |
| phaut |
| capprobivy |
| envoy |
| confirmed |
| nbpurline |
| mcdo |
| phrefint |
| purghead_phsendwms |

