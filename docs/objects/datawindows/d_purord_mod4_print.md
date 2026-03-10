# d_purord_mod4_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT purhead.phcode,   
         purhead.phsupp,   
         purhead.phcurr,   
         purhead.phstatus,   
         purhead.phdatcrea,   
         purhead.phlastline,   
         purhead.phcntid,   
         purhead.phcntref,   
         purhead.phcmnt,   
         purhead.phwithtransp,   
         purhead.phtranspid,   
         purhead.phdlvt,   
         purhead.phdlvtplace,   
         purhead.phtransfered,   
         purhead.phfileref,   
         purhead.phfileline,   
         purhead.phdatsupply,   
         purhead.phpurchaser ,  
		IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2568*/
			isnull(phmccode, '##########')
		ELSE
			isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = purhead.phsupp),'##########')
		ENDIF as mcdo 
    FROM purhead  
   WHERE purhead.phcode = :an_puroder    

```

## Colonnes
| Colonne |
|---------|
| phcode |
| phsupp |
| phcurr |
| phstatus |
| phdatcrea |
| phlastline |
| phcntid |
| phcntref |
| phcmnt |
| phwithtransp |
| phtranspid |
| phdlvt |
| phdlvtplace |
| phtransfered |
| phfileref |
| phfileline |
| phdatsupply |
| phpurchaser |
| mcdo |

