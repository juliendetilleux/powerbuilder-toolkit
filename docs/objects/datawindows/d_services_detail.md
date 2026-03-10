# d_services_detail

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aacode,   
         adrsactions.aaadrid,   
         adrsactions.aaaction,   
         adrsactions.aarespons,   
         adrsactions.aaactiondate,   
         adrsactions.aalimitdate,   
         adrsactions.aatiming aatiming,   
         adrsactions.aastatus,   
         adrsactions.aacomment,   
         adrsactions.aafileref,   
         adrsactions.aarealcost,   
         adrsactions.aainvstatus,   
         adrsactions.aafileline,   
         if adrsactions.aastatus = '3' then adrsactions.aarealtiming else 0 endif aarealtiming,   
         if adrsactions.aastatus = '3' then adrsactions.aaextratiming else 0 endif aaextratiming ,
			(select fileline.fldesc from fileline where fileline.flline = adrsactions.aafileline and fileline.flcode = adrsactions.aafileref)  
    FROM activities,   
         adrsactions  
   WHERE ( adrsactions.aaaction = activities.accode ) and  
         ( ( adrsactions.aafileref = :ran_filecode ) )   AND
		(isnull(activities.acrh,0) >= 0)       

```

## Colonnes
| Colonne |
|---------|
| adrsactions_aacode |
| adrsactions_aaadrid |
| adrsactions_aaaction |
| adrsactions_aarespons |
| adrsactions_aaactiondate |
| adrsactions_aalimitdate |
| caatiming |
| adrsactions_aastatus |
| adrsactions_aacomment |
| adrsactions_aafileref |
| adrsactions_aarealcost |
| adrsactions_aainvstatus |
| adrsactions_aafileline |
| caarealtiming |
| caaextratiming |
| cfldesc |

