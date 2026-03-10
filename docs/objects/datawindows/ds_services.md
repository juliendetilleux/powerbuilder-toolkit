# ds_services

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT activities.accode,
			activities.acdesc,   
         adrsactions.aastatus, 
         if adrsactions.aaaction <> -8 then adrsactions.aarealcost else if isnull(aaqty,0) = 0 then 0 else isnull(aaquoteval,0) / aaqty endif endif as avgcost,   
         ifnull(adrsactions.aarealtiming,
					0,
					if adrsactions.aastatus = '3' then adrsactions.aarealtiming else 0 endif) as timing,   
         ifnull(adrsactions.aaextratiming,
					0, 
					if adrsactions.aastatus = '3' then adrsactions.aaextratiming else 0 endif ) as extratiming,   
         ifnull(adrsactions.aatiming,
					0,
					if adrsactions.aastatus < '3' then adrsactions.aatiming else 0 endif ) as exptiming,   
         adrsactions.aafileref,  
         ifnull( if adrsactions.aaaction <> -8 then adrsactions.aarealcost * adrsactions.aarealtiming else aaquoteval endif,
					0,
					if adrsactions.aastatus < '3' then  if adrsactions.aaaction <> -8 then adrsactions.aarealcost * adrsactions.aatiming / 60 else isnull(aaquoteval,0) endif  else 0 endif) as engval  ,   
         ifnull( if adrsactions.aaaction <> -8 then adrsactions.aarealcost * adrsactions.aarealtiming else aaquoteval endif,
					0,
					if adrsactions.aastatus = '3' then
						if adrsactions.aaaction <> -8 then adrsactions.aarealcost * adrsactions.aarealtiming / 60 else isnull(aaquoteval,0) endif else 0 endif ) as reaval  ,   
         adrsactions.aaactiondate,   
         adrsactions.aarespons,   
         adrsactions.aafileline,
		adrsactions.aainvstatus,
		isnull(activities.acrh,0) as acrh  
    FROM adrsactions,   
         activities  
   WHERE ( activities.accode = adrsactions.aaaction ) and  
         ( adrsactions.aastatus <= '3') AND  
         ( adrsactions.aafileref = :an_fileref )
	ORDER BY activities.accode,adrsactions.aastatus
```

## Colonnes
| Colonne |
|---------|
| activities_accode |
| activities_acdesc |
| adrsactions_aastatus |
| adrsactions_avgcost |
| adrsactions_timing |
| adrsactions_extratiming |
| adrsactions_exptiming |
| adrsactions_aafileref |
| cengval |
| creaval |
| adrsactions_aaactiondate |
| adrsactions_aarespons |
| adrsactions_aafileline |
| adrsactions_aainvstatus |
| acrh |

