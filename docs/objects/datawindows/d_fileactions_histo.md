# d_fileactions_histo

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
         adrsactions.aalimitdate,   
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
			fileline.flline
    FROM adrsactions,
			fileline,
			activities
   WHERE ( fileline.flcode = adrsactions.aafileref ) AND 
			( fileline.flline = adrsactions.aafileline ) AND 
			( adrsactions.aafileref = :ran_filecode ) AND  
         ( adrsactions.aastatus IN (3,4) ) AND  
         ( isnull(adrsactions.aagrouptyp,'') <> 'M' OR isnull(adrsactions.aagroup,0) = 0 ) AND
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
         max(adrsactions.aalimitdate),   
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
			max
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
| aalimitdate |
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
| adrsactions_aafileline |
| fileline_fldesc |
| fileline_flline |

