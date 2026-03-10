# d_purheadlimite_sel2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purheadlimite.phlcode,   
         purheadlimite.phlsupp,   
         purheadlimite.phlstatus,   
         purheadlimite.phllastline,   
         adresses.adname,   
         choices.chname,   
         purheadlimite.phlcurr,   
         adresses.adgrading,   
         purheadlimite.phlcntid,   
         purheadlimite.phlcntref,   
         purheadlimite.phldatcrea,   
         adresses.adlang,   
         purheadlimite.phldatsupply,   
         isnull(purheadlimite.phlaut, ' ') as phlaut,
			isnull((select ppvalue from progparam where ppcode = 'APPROBIVY'),'') as APPROBIVY,
			isnull((select count(*) from purlinelimite 
						where purlinelimite.pllcode = purheadlimite.phlcode and 
							purlinelimite.pllstatus < '9' and
							((purlinelimite.pllstatus >= '3') OR (purlinelimite.pllstatus = '2' and isnull(purlinelimite.pllenvoy, 'N') = 'Y'))
						),0) as envoy,
			isnull((select count(*) from purlinelimite where purlinelimite.pllcode = purheadlimite.phlcode and purlinelimite.pllstatus >= '3' and purlinelimite.pllstatus < '9'),0) as confirmed,
			isnull((select count(*) from purlinelimite where purlinelimite.pllcode = purheadlimite.phlcode and purlinelimite.pllstatus < '9'),0) as nbpurline,
			
			
			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2398*/
				isnull(phlmccode, '##########')
			ELSE
				isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = purheadlimite.phlsupp),'##########') 
			ENDIF as mcdo,
		purheadlimite.phlrefint as purhead_phrefint,
		purheadlimite.phlnbsendedi,
		purheadlimite.phlsendwms,
		phlmodif,
		phlusermodif,
		phlcreauser
    FROM purheadlimite,   
         adresses,   
         choices  
   WHERE ( adresses.adcode = purheadlimite.phlsupp ) and  
         ( purheadlimite.phlstatus = choices.chcode ) and  
         ( ( purheadlimite.phlstatus between :Sel_Status_Min and :Sel_Status_Max ) AND  
         ( choices.chtype = 'PURS
```

## Colonnes
| Colonne |
|---------|
| purheadlimite_phlcode |
| purheadlimite_phlsupp |
| purheadlimite_phlstatus |
| purheadlimite_phllastline |
| adresses_adname |
| choices_chname |
| purheadlimite_phlcurr |
| adresses_adgrading |
| purheadlimite_phlcntid |
| purheadlimite_phlcntref |
| purheadlimite_phldatcrea |
| adresses_adlang |
| purheadlimite_phldatsupply |
| phlaut |
| capprobivy |
| envoy |
| confirmed |
| nbpurline |
| mcdo |
| phlrefint |
| purheadlimite_phlnbsendedi |
| purheadlimite_phlsendwms |
| purheadlimite_phlmodif |
| purheadlimite_phlusermodif |
| purheadlimite_phlcreauser |

