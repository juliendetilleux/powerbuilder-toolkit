# d_timesheet

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aastsdat,
			adrsactions.aaaction,   
         adrsactions.aaactiondate,   
         adrsactions.aalimitdate,   
         adrsactions.aatiming,   
         adrsactions.aacomment,   
         adrsactions.aafileref,   
         adrsactions.aafileline,   
         adrsactions.aarealtiming,   
         adrsactions.aaextratiming
    FROM adrsactions  
   WHERE ( adrsactions.aastatus = '3' ) AND  
         ( days( adrsactions.aastsdat, :rad_date ) = 0  ) AND  
         ( adrsactions.aarespons = :ras_user OR  
         :ras_user = '*' )    
order by adrsactions.aastsdat

```

## Colonnes
| Colonne |
|---------|
| aastsdat |
| aaaction |
| aaactiondate |
| aalimitdate |
| aatiming |
| aacomment |
| aafileref |
| aafileline |
| aarealtiming |
| aaextratiming |

