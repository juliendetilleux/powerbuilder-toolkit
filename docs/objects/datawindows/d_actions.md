# d_actions

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aacode,   
         adrsactions.aaadrid,   
         adrsactions.aacontactid,   
         adrsactions.aaaction,   
         adrsactions.aaactiondate,   
         adrsactions.aastatus,   
         adrsactions.aarespons,   
         adrsactions.aacreator,   
         adrsactions.aadesc,   
         adrsactions.aacreadate,   
         adrsactions.aaprojet,   
         adrsactions.aaread,   
         adrsactions.aareaddate,   
         adrsactions.aafileline,   
         adrsactions.aafileref,
		(select fileline.fldesc
			from fileline
			where fileline.flcode = adrsactions.aafileref
				and fileline.flline = adrsactions.aafileline) as fldesc ,
		activities.acfacturability,
		activities.acdesc,
		adrsactions.aainvstatus,
		adrsactions.aatiming,
		isnull(adrsactions.aaqty,0) as aaqty,
		isnull(adrsactions.aainvoicehead,0) as aainvoicehead,
		isnull(adrsactions.aainvoiceline,0) as aainvoiceline 
    FROM adrsactions,
			adresses,
			activities  
   WHERE (adrsactions.aaactiondate BETWEEN :adt_from AND :adt_to)  AND 
		adresses.adcode = adrsactions.aaadrid AND 
		activities.accode = adrsactions.aaaction    
ORDER BY adrsactions.aacode ASC   

```

## Colonnes
| Colonne |
|---------|
| aacode |
| aaadrid |
| aacontactid |
| aaaction |
| aaactiondate |
| aastatus |
| aarespons |
| aacreator |
| aadesc |
| aacreadate |
| aaprojet |
| aaread |
| aareaddate |
| aafileline |
| aafileref |
| fldesc |
| activities_acfacturability |
| activities_acdesc |
| aainvstatus |
| aatiming |
| aaqty |
| aainvoicehead |
| aainvoiceline |

