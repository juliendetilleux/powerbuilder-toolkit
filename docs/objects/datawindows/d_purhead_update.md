# d_purhead_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purhead.phcode,   
         purhead.phsupp,   
         purhead.phcurr,   
         purhead.phstatus,   
         purhead.phdatcrea,   
         purhead.phlastline,   
         purhead.phcntref,   
         purhead.phcntid,   
         purhead.phwithtransp,   
         purhead.phtranspid,   
         purhead.phdlvt,   
         purhead.phdlvtplace,   
         purhead.phcmnt,   
         purhead.phfileref,   
         purhead.phfileline,   
         purhead.phdatsupply,   
         purhead.phpurchaser,   
         purhead.phrcpocmnt,   
         purhead.phsupppay,   
         purhead.phaut,   
         purhead.phcreauser,
         purhead.phautuser,   
         purhead.phautdate,
			isnull((select ppvalue from progparam where ppcode = 'APPROBIVY'),'') as APPROBIVY,
			isnull(purhead.phmccode, '##########') as phmccode ,
		purhead.phrefint   ,
		phusermodif,
		phmodif
    FROM purhead  
   WHERE purhead.phcode = :Selected_order    

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
| phcntref |
| phcntid |
| phwithtransp |
| phtranspid |
| phdlvt |
| phdlvtplace |
| phcmnt |
| phfileref |
| phfileline |
| phdatsupply |
| phpurchaser |
| phrcpocmnt |
| phsupppay |
| phaut |
| phcreauser |
| phautuser |
| phautdate |
| approbivy |
| phmccode |
| phrefint |
| phusermodif |
| phmodif |

