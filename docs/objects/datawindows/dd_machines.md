# dd_machines

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
    FROM machine
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

