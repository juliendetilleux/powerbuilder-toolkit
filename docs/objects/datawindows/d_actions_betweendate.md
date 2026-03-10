# d_actions_betweendate

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
			(select fileline.fldesc
				from fileline
				where fileline.flcode = adrsactions.aafileref
					and fileline.flline = adrsactions.aafileline) as fldesc,
			adresses.adname,
			activities.acfacturability,
			activities.acdesc,
			adrsactions.aaqty,
		IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'),'') = '1' THEN
			  isnull((select list(linkmcad2.lkmccode)
						 from linkmcad2 
						where linkmcad2.lkadcode = adresses.adcode And
								linkmcad2.lkactiv = 'Y' ), '##########' )
		ELSE
			  isnull((select linkmcad.lkmccode 
						 from linkmcad 
						where linkmcad.lkadcode = adresses.adcode ), '##########' )
		ENDIF as mccode
    FROM adrsactions,
			adresses,
			activities
   WHERE adrsactions.aaactiondate BETWEEN :adt_from AND :adt_to   
		AND (adrsactions.aainvoicehead = 0
			OR 
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
| fldesc |
| adresses_adname |
| activities_acfacturability |
| activities_acdesc |
| aaqty |
| mccode |

