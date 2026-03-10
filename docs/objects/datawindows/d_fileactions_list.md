# d_fileactions_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aacode,   
         adrsactions.aaadrid,   
         adrsactions.aacontactid,   
         adrsactions.aaaction,   
         adrsactions.aacreator,   
         adrsactions.aarespons,   
         adrsactions.aaactiondate,   
         adrsactions.aatiming,   
         adrsactions.aaparcode,   
         adrsactions.aastatus,   
         adrsactions.aacomment,   
         adrsactions.aadesc,   
         adrsactions.aacreadate,   
         adrsactions.aaprojet,   
         adrsactions.aaread,   
         adrsactions.aareaddate,   
         adrsactions.aastsdat,   
         adrsactions.aafileref,   
         adrsactions.aafileline,   
         fileline.fldesc,   
         adrsactions.aalimitdate,   
         fileline.flline  
    FROM adrsactions,   
         fileline,
		activities  
   WHERE ( adrsactions.aafileline = fileline.flline ) AND  
         ( adrsactions.aafileref = :ran_filecode ) AND  
         ( adrsactions.aastatus IN (1,2) ) AND  
         ( fileline.flcode = adrsactions.aafileref ) AND  
         ( isnull(adrsactions.aagrouptyp,'') <> 'M' OR isnull(adrsactions.aagroup,0) = 0 )  AND
		(activities.accode = adrsactions.aaaction) AND
		(isnull(activities.acrh,0) >= 0)     
 
UNION ALL  
 
  SELECT max(adrsactions.aacode),   
         max(adrsactions.aaadrid),   
         max(adrsactions.aacontactid),   
         max(adrsactions.aaaction),   
         max(adrsactions.aacreator),   
         max(adrsactions.aarespons),   
         max(adrsactions.aaactiondate),   
         max(adrsactions.aatiming),   
         max(adrsactions.aaparcode),   
         max(adrsactions.aastatus),   
         max(adrsactions.aacomment),   
         max(adrsactions.aadesc),   
         max(adrsactions.aacreadate),   
         max(adrsactions.aaprojet),   
         max(adrsactions.aaread),   
         max(adrsactions.aareaddate),   
         max(adrsactions.aastsdat),   
         max(adrsactions.aafileref),   
 
```

## Colonnes
| Colonne |
|---------|
| aacode |
| aaadrid |
| aacontactid |
| aaaction |
| aacreator |
| aarespons |
| aaactiondate |
| aatiming |
| aaparcode |
| aastatus |
| aacomment |
| aadesc |
| aacreadate |
| aaprojet |
| aaread |
| aareaddate |
| aastsdat |
| aafileref |
| aafileline |
| fileline_fldesc |
| aalimitdate |
| fileline_flline |

