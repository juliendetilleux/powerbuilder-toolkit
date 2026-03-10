# d_pur_and_purg_head_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purhead.phcode,  
			'S' As phtype, 
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
		purhead.phsendwms
    FROM purhead,   
         adresses,   
         choices  
   WHERE ( adresses.adcode = purhead.phsupp ) and  
         ( purhead.phstatus = choices.chcode ) and  
         ( ( purhead.phstatus between :Sel_Status_Min and :Sel_Status_Max ) AND  
         ( choices.chtype = 'PURS' ) )   

Union All

  Select purghead.phcode,  
			purghead.phtype, 
         purghead.phsupp,   
         purghead.phstatus,   
         purghead.phlastline,   
         adresses.adname,  
         choices.chname,   
         purghead.phcurr,   
         adresses.adgradin
```

## Colonnes
| Colonne |
|---------|
| phcode |
| phtype |
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

