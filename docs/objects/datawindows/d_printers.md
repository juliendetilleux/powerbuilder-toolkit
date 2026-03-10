# d_printers

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT printers.prcode,   
         printers.prname,   
         printers.prwin,   
         printers.practiv,   
         cast(null as varchar(1)) as winok     
    FROM printers  
ORDER BY printers.prcode ASC   

```

## Colonnes
| Colonne |
|---------|
| prcode |
| prname |
| prwin |
| practiv |
| winok |

