# d_crm_local

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT DISTINCT adresses.adloc  
    FROM adresses   
    WHERE adresses.adcode not in ('#########C','#########R','#########S')  
	 ORDER BY adresses.adloc  ASC
```

## Colonnes
| Colonne |
|---------|
| adloc |

