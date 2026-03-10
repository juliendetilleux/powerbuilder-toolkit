# d_cash_itstat2_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_cash
- **Table principale**: 0

## SQL
```sql
  SELECT itstat2.iscode2,   
         itstat2.isdesc   
    FROM itstat2  
   WHERE itstat2.isdesc <> '  '   AND
		itstat2.iscode = :as_iscode 
ORDER BY itstat2.isdesc ASC   

```

## Colonnes
| Colonne |
|---------|
| iscode2 |
| isdesc |

