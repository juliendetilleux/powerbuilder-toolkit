# d_charge_rh_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT if adresses.adcode = '##########' then '' else adresses.adcode endif as adcode,   
         adresses.adname,
		users.uscode,
		users.usname,
		adrsactions.aaactiondate,
		adrsactions.aadesc,
		adrsactions.aacomment,
		isnull(adrsactions.aaqty,0) as aaqty,
		activities.acum,
		activities.acdesc,
		adrsactions.aacode,
		isnull(activities.acval,0) as acval,
		activities.acrhtyp 
    FROM adresses,
		adrsactions,
		activities,
		users  
   WHERE adresses.adcode = adrsactions.aaadrid AND
		adrsactions.aaaction = activities.accode AND
		adrsactions.aarespons = users.uscode AND
		activities.acrh = -1 AND
		adrsactions.aastatus = '3' AND
		adrsactions.aarespons like :as_user AND
		adrsactions.aaactiondate between :adt_start and :adt_stop  
   
ORDER BY users.uscode,
		adrsactions.aaactiondate

```

## Colonnes
| Colonne |
|---------|
| adcode |
| adname |
| users_uscode |
| users_usname |
| adrsactions_aaactiondate |
| adrsactions_aadesc |
| adrsactions_aacomment |
| adrsactions_aaqty |
| activities_acum |
| activities_acdesc |
| adrsactions_aacode |
| acval |
| activities_acrhtyp |

