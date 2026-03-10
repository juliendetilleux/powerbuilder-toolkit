# dd_crm_activities_activ

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT activities.accode,   
         activities.acdesc as description,   
         activities.acsort  
    FROM activities  
   WHERE activities.acactiv = 'Y'  AND
		( isnull(activities.acrh,0) >= 0 )       
ORDER BY activities.acdesc ASC   

```

## Colonnes
| Colonne |
|---------|
| accode |
| description |
| acsort |

