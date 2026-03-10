# d_techdata

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT techdata.tdcode,   
         techdata.tdum,   
         techdata.tddesc,   
         techdata.tdactiv,   
         techdata.tdpriority  
    FROM techdata  
   WHERE techdata.tdtype = :as_typ     
  
ORDER BY techdata.tdpriority

```

## Colonnes
| Colonne |
|---------|
| tdcode |
| tdum |
| tddesc |
| tdactiv |
| tdpriority |

