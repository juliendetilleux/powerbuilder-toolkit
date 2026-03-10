# d_purheadlimite_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purheadlimite.phlcode,   
         purheadlimite.phlsupp,   
         purheadlimite.phlcurr,   
         purheadlimite.phlstatus,   
         purheadlimite.phldatcrea,   
         purheadlimite.phllastline,   
         purheadlimite.phlcntref,   
         purheadlimite.phlcntid,   
         purheadlimite.phlwithtransp,   
         purheadlimite.phltranspid,   
         purheadlimite.phldlvt,   
         purheadlimite.phldlvtplace,   
         purheadlimite.phlcmnt,   
		purheadlimite.phlrefint,   
        isnull( purheadlimite.phldatsupply,now()) as phldatsupply ,   
         purheadlimite.phlpurchaser,   
         purheadlimite.phlrcpocmnt,    
         purheadlimite.phlaut,   
         purheadlimite.phlcreauser,
         purheadlimite.phlautuser,   
         purheadlimite.phlautdate,
			isnull((select ppvalue from progparam where ppcode = 'APPROBIVY'),'') as APPROBIVY,
			isnull(purheadlimite.phlmccode, '##########') as phmccode ,
		phlmodif
    FROM purheadlimite  
   WHERE purheadlimite.phlcode = :Selected_order    

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
| phlrefint |
| phldatsupply |
| phpurchaser |
| phrcpocmnt |
| phaut |
| phcreauser |
| phautuser |
| phautdate |
| approbivy |
| phmccode |
| phlmodif |

