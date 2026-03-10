# d_services_main

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT activities.acdesc,   
         adrsactions.aastatus,   
         count(*) as count,   
         avg(adrsactions.aarealcost) as avgcost,   
         sum(if adrsactions.aastatus = '3' then adrsactions.aarealtiming else 0 endif) as timing,   
         sum(if adrsactions.aastatus = '3' then adrsactions.aaextratiming  else 0 endif ) as extratiming,   
         sum(if adrsactions.aastatus < '3' then adrsactions.aatiming else 0 endif) as exptiming,   
         adrsactions.aafileref,   
         activities.accode,   
         sum(adrsactions.aarealcost * adrsactions.aarealtiming / 60) as totval  ,   
         adrsactions.aaactiondate,   
         adrsactions.aarespons,   
         adrsactions.aafileline,
		isnull(activities.acrh,0) as acrh   
    FROM adrsactions,   
         activities  
   WHERE ( activities.accode = adrsactions.aaaction ) and  
         ( adrsactions.aastatus <= '3') AND  
         ( adrsactions.aafileref = :ran_filecode ) AND  
         (( adrsactions.aainvstatus = :ras_invstatus ) OR  
         :ras_invstatus = '*')    AND
		(isnull(activities.acrh,0) >= 0) AND
		( activities.accode <> -8)    
GROUP BY activities.acdesc,   
         adrsactions.aarespons,   
         adrsactions.aafileline,   
         adrsactions.aaactiondate,   
         adrsactions.aastatus,   
         adrsactions.aafileref,   
         activities.accode,
	    activities.acrh 
ORDER BY activities.acdesc ASC,   
         adrsactions.aastatus DESC   

```

## Colonnes
| Colonne |
|---------|
| activities_acdesc |
| adrsactions_aastatus |
| ccount |
| cavgcost |
| ctiming |
| cextratiming |
| cexptiming |
| adrsactions_aafileref |
| activities_accode |
| ctotval |
| adrsactions_aaactiondate |
| adrsactions_aarespons |
| adrsactions_aafileline |
| acrh |

