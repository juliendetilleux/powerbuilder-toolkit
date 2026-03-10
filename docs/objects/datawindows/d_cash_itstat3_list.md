# d_cash_itstat3_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_cash
- **Table principale**: 0

## SQL
```sql
  SELECT itstat3.iscode3,   
         itstat3.isdesc   
    FROM itstat3  
   WHERE itstat3.isdesc <> '  '   AND
		itstat3.iscode = :as_iscode AND
		itstat3.iscode2 = :as_iscode2 
ORDER BY itstat3.isdesc ASC   

```

## Colonnes
| Colonne |
|---------|
| iscode3 |
| isdesc |

