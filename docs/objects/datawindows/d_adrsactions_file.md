# d_adrsactions_file

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aaaction,   
         activities.acdesc  
    FROM adrsactions,   
         activities  
   WHERE ( activities.accode = adrsactions.aaaction ) and  
         ( ( adrsactions.aafileref = :an_fileref ) )   
GROUP BY adrsactions.aaaction,   
         activities.acdesc  
ORDER BY activities.acdesc ASC   

```

## Colonnes
| Colonne |
|---------|
| aaaction |
| activities_acdesc |

