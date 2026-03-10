# d_crm_stat_actions

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT activities.acdesc,   
         count(*),   
         adrsactions.aaaction  
    FROM adrsactions,   
         activities,   
         adresses  
   WHERE ( activities.accode = adrsactions.aaaction ) and  
         ( adrsactions.aaadrid = adresses.adcode ) 
GROUP BY adrsactions.aaaction,   
         activities.acdesc   

```

## Colonnes
| Colonne |
|---------|
| activities_acdesc |
| compute_0002 |
| adrsactions_aaaction |

