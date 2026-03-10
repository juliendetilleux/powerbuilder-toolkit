# d_tictrl_without_endday_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT date( workline.wldat ) as wk_date,
    workline.wlwkcode
  FROM workline 
 WHERE isnull( isnumeric(workline.wltyp), 0) = 1
GROUP BY wk_date,
    workline.wlwkcode
HAVING max(workline.wltyp) <> '9' 
ORDER by wk_date desc
```

## Colonnes
| Colonne |
|---------|
| wk_date |
| wlwkcode |

