# d_actions_services

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
         adrsactions.aamoddat,   
         adrsactions.aamoduser,   
         adrsactions.aafileref,   
         adrsactions.aawccost,   
         adrsactions.aauscost,   
         adrsactions.aarealcost,   
         adrsactions.aainvstatus,   
         adrsactions.aafileline,   
         adrsactions.aarealtiming,   
         adrsactions.aaextratiming,   
         adrsactions.aasalorder,   
         adrsactions.aasalline,   
         adrsactions.aainvoicehead,   
         adrsactions.aainvoiceline,   
         activities.acfacturability,   
         adrsactions.aafarunid,
         ( select fhdesc from filehead where filehead.fhcode = adrsactions.aafileref),   
         ( select fldesc from fileline where fileline.flcode = adrsactions.aafileref and fileline.flline = adrsactions.aafileline ),
			activities.acdesc,
			( select sum(fatimeinv) from fileactvar where fileactvar.farunid = adrsactions.aafarunid) as invoicable,
			adresses.adname
    FROM adrsactions,   
         activities,
			adresses  
   WHERE ( activities.accode = adrsactions.aaaction ) and  
			( adresses.adcode = adrsactions.aaadrid ) AND
         ( ( adrsactions.aasalorder = :ran_salorder ) AND  
         ( adrsactions.aasalline = :ran_salline ) AND  
         ( adrsactions.aastatus = '3' ) AND  
         ( adrsactions.aainvstatus < '8' ) )    
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
| aamoddat |
| aamoduser |
| aafileref |
| aawccost |
| aauscost |
| aarealcost |
| aainvstatus |
| aafileline |
| aarealtiming |
| aaextratiming |
| aasalorder |
| aasalline |
| aainvoicehead |
| aainvoiceline |
| activities_acfacturability |
| adrsactions_aafarunid |
| cfhdesc |
| cfldesc |
| activities_acdesc |
| invoicable |
| adresses_adname |

