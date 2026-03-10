# d_workcenter_machines

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT machine.mcid,
		machine.mcode,
		machine.mcname,
		isnull(routline_nomachine.rmallow, 'Y') as rmallow
    FROM link_machine_pdc LEFT OUTER JOIN routline_nomachine ON
					link_machine_pdc.mpmachine = routline_nomachine.rmmcid AND
					routline_nomachine.rmrlcode = :as_rlcode AND 
					routline_nomachine.rmrltype = :as_rltype AND
					routline_nomachine.rmrlline = :al_rlline ,   
         machine  
   WHERE link_machine_pdc.mpworkcenters = :as_routline AND
		link_machine_pdc.mpmachine = machine.mcid AND
		machine.mcactiv = 'Y' 



```

## Colonnes
| Colonne |
|---------|
| machine_mcid |
| machine_mcode |
| machine_mcname |
| rmallow |

