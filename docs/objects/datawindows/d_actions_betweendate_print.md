# d_actions_betweendate_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
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
         adrsactions.aasalorder,   
         adrsactions.aasalline,   
         adrsactions.aainvoicehead,   
         adrsactions.aainvoiceline,
			(select fileline.fldesc
				from fileline
				where fileline.flcode = adrsactions.aafileref
					and fileline.flline = adrsactions.aafileline) as fldesc,
			adresses.adname,
			activities.acfacturability,
			activities.acdesc,
			adrsactions.aaqty ,  
			(select users.usname 
            from users 
           where users.uscode = adrsactions.aarespons)     as users   ,
		   (SELECT choices.chname 
            FROM choices 
           WHERE choices.chtype = 'INST' 
             AND choices.chcode = adrsactions.aainvstatus) as invstatus ,
		   (SELECT filehead.fhdesc     
            FROM filehead    
           WHERE filehead.fhcode = adrsactions.aafileref)  as fileref ,   
         (SELECT choices.chname  
            FROM choices  
           WHERE choices.chtype = 'ACST'   
             AND choices.chcode = adrsactions.aastatus )   as status  

    FROM adrsactions,
			adresses
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
| aasalorder |
| aasalline |
| aainvoicehead |
| aainvoiceline |
| fldesc |
| adresses_adname |
| activities_acfacturability |
| activities_acdesc |
| aaqty |
| cusers |
| cinvstatus |
| cfileref |
| cstatus |

