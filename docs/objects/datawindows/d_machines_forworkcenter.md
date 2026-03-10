# d_machines_forworkcenter

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT mcid,  
		mcode,
         	mcname,   
         	mcpriority,
		mcactiv,
		mccells  
    FROM link_machine_pdc
			JOIN machine ON link_machine_pdc.mpmachine = machine.mcid
  WHERE link_machine_pdc.mpworkcenters = :as_wc
ORDER BY  mccells, 
		mcpriority, 
		mcode

```

## Colonnes
| Colonne |
|---------|
| mcid |
| mcode |
| mcname |
| mcpriority |
| mcactiv |
| mccells |

