# dd_crm_activities_all

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT activities.accode,   
         activities.acdesc,   
         activities.acsort  
    FROM activities      
  WHERE ( isnull(activities.acrh,0) >= 0 )    
ORDER BY activities.acdesc ASC   

```

## Colonnes
| Colonne |
|---------|
| accode |
| acdesc |
| acsort |

