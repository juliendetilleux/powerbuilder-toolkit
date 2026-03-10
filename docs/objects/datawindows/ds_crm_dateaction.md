# ds_crm_dateaction

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aaadrid,   
         adrsactions.aacode,   
         adrsactions.aaactiondate  
    FROM adrsactions
	WHERE adrsactions.aaadrid = :adcode   


```

## Colonnes
| Colonne |
|---------|
| aaadrid |
| aacode |
| aaactiondate |

