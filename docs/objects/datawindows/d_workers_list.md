# d_workers_list

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _cust2
- **Table principale**: 0

## SQL
```sql
select wkcode, wkname
from workers
where wkactiv = 'Y'
AND wkcode = IsNull(:work, wkcode)
```

## Colonnes
| Colonne |
|---------|
| wkcode |
| wkname |

