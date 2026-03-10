# d_purghead_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purghead.phcode,   
         purghead.phtype,   
         purghead.phsupp,   
         purghead.phcurr,   
         purghead.phstatus,   
         purghead.phdatcrea,   
         purghead.phlastline,   
         purghead.phcmnt,   
         purghead.phfileref,   
         purghead.phfileline,   
         purghead.phpurchaser,   
         purghead.phdlvt,   
         purghead.phdlvtplace,   
         purghead.phsupppay,   
         purghead.phaut,   
         purghead.phcreauser,
         purghead.phautuser,   
         purghead.phautdate,
			isnull((select ppvalue from progparam where ppcode = 'APPROBIVY'),'') as APPROBIVY,
			purghead.phrcpocmnt,
			isnull(purghead.phmccode, '##########') as phmccode,
		purghead.phrefint      
    FROM purghead  
   WHERE ( purghead.phcode = :Selected_order )    

```

## Colonnes
| Colonne |
|---------|
| phcode |
| phtype |
| phsupp |
| phcurr |
| phstatus |
| phdatcrea |
| phlastline |
| phcmnt |
| phfileref |
| phfileline |
| phpurchaser |
| phdlvt |
| phdlvtplace |
| phsupppay |
| phaut |
| phcreauser |
| phautuser |
| phautdate |
| approbivy |
| phrcpocmnt |
| phmccode |
| phrefint |

