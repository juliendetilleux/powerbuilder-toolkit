# d_hourly_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT hyid,   
         hyname,   
		hyactif
    FROM hourly
  WHERE hyid = :ll_hourly 


```

## Colonnes
| Colonne |
|---------|
| hyid |
| hyname |
| hyactif |

