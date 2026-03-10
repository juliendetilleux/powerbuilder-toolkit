# d_bcd_cmd_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT users.uscode,
			isnull((select ppvalue from progparam where ppcode = 'EXPITUNAN'),'') as EXPITUNAN  
    FROM users  
   WHERE users.uscode = 'PMIGEST'    

```

## Colonnes
| Colonne |
|---------|
| uscode |
| expitunan |

