# d_purhead_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purhead.phcode,   
         purhead.phsupp,   
         purhead.phstatus,   
         purhead.phlastline,   
         adresses.adname,   
         choices.chname,   
         purhead.phcurr,   
         adresses.adgrading,   
         purhead.phcntid,   
         purhead.phcntref,   
         purhead.phdatcrea,   
         adresses.adlang,   
         purhead.phdatsupply,   
         isnull(purhead.phaut, ' ') as phaut,
			isnull((select ppvalue from progparam where ppcode = 'APPROBIVY'),'') as APPROBIVY,
			isnull((select count(*) from purline 
						where purline.plcode = purhead.phcode and 
							purline.plstatus < '9' and
							((purline.plstatus >= '3') OR (purline.plstatus = '2' and isnull(purline.plenvoy, 'N') = 'Y'))
						),0) as envoy,
			isnull((select count(*) from purline where purline.plcode = purhead.phcode and purline.plstatus >= '3' and purline.plstatus < '9'),0) as confirmed,
			isnull((select count(*) from purline where purline.plcode = purhead.phcode and purline.plstatus < '9'),0) as nbpurline,

			
			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2398*/
				isnull(phmccode, '##########')
			ELSE
				isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = purhead.phsupp),'##########') 
			ENDIF as mcdo,
		purhead.phrefint,
		purhead.phnbsendedi,
		purhead.phsendwms,
		purhead.phcmnt
    FROM purhead,   
         adresses,   
         choices  
   WHERE ( adresses.adcode = purhead.phsupp ) and  
         ( purhead.phstatus = choices.chcode ) and  
         ( ( purhead.phstatus between '0' and '5' ) AND  
         ( choices.chtype = 'PURS' ) )   
ORDER BY purhead.phcode DESC   

```

## Colonnes
| Colonne |
|---------|
| phcode |
| phsupp |
| phstatus |
| phlastline |
| adresses_adname |
| choices_chname |
| phcurr |
| adresses_adgrading |
| purhead_phcntid |
| purhead_phcntref |
| purhead_phdatcrea |
| adresses_adlang |
| purhead_phdatsupply |
| phaut |
| capprobivy |
| envoy |
| confirmed |
| nbpurline |
| mcdo |
| purhead_phrefint |
| phnbsendedi |
| purhead_phsendwms |
| purhead_phcmnt |

