# d_machine_advsched_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT machine.mcid,   
         machine.mcode,   
         machine.mcname,   
         machine.mcpriority,   
         machine.mcactiv,   
         machine.mccells,   
         machine.mccal,   
         machine.mchourly  
    FROM machine   
 WHERE machine.mcid = :al_mcid

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
| mccal |
| mchourly |

