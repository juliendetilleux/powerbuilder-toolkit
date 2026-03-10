# d_adrsaction_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
		adresses.adcode,
         activities.acdesc,   
         users.usname,   
         adrsactions.aatiming,   
         adrsactions.aaactiondate,   
         adrsactions.aacomment,
		adrsactions.aadesc   
    FROM activities,   
         adresses,   
         adrsactions,   
         users  
   WHERE ( adrsactions.aaadrid = adresses.adcode ) and  
         ( adrsactions.aaaction = activities.accode ) and  
         ( users.uscode = adrsactions.aarespons )  and
		adrsactions.aaadrid  like if trim(:as_adcode) = '' then '%' else :as_adcode endif and
		adrsactions.aaactiondate between :adt_start and :adt_stop
ORDER BY adresses.adcode,  
         adrsactions.aaactiondate, 
         adrsactions.aatiming   

```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| adresses_adcode |
| activities_acdesc |
| users_usname |
| adrsactions_aatiming |
| adrsactions_aaactiondate |
| adrsactions_aacomment |
| adrsactions_aadesc |

