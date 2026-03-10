# d_quick_timesheet3

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
         adrsactions.aastatus,   
         adrsactions.aacomment,   
         adrsactions.aadesc,   
         adrsactions.aacreadate,   
         adrsactions.aastsdat,   
         adrsactions.aamoddat,   
         adrsactions.aamoduser,   
         adrsactions.aafileref,   
         adrsactions.aafileline,   
         adrsactions.aawfhead,   
         adrsactions.aawfline,   
         adrsactions.aawfsuccess,   
         adrsactions.aawffinish,   
         adrsactions.aagroup,   
         adrsactions.aarealtiming,  
         adrsactions.aawccost,  
         adrsactions.aauscost,  
         adrsactions.aarealcost,  
         datetime(null) as date_string,   
         datetime(null) as timing_string,   
         adrsactions.aainvstatus  ,
	    cast( null as char(30)) as aacontactid_text  ,
	    cast( null as char(50)) as aafileline_text ,
         cast( null as char(50)) as aafileref_text ,
         cast( null as char(20)) as aainvstatus_text,
         (SELECT if fileline.flbudget is null then 0 else fileline.flbudget  endif
			FROM fileline 
			WHERE fileline.flcode = adrsactions.aafileref AND
				fileline.flline = adrsactions.aafileline) as tps_budget,
		(SELECT sum(adrsact2.aarealtiming)
			FROM adrsactions as adrsact2 
			WHERE adrsactions.aafileref = adrsact2.aafileref AND
				adrsactions.aafileline = adrsact2.aafileline) as tps_prest,
			adrsactions.aaquoteval,
			adrsactions.aaqty,
			adrsactions.aaitem,
			(select itcat from items where itcode = adrsactions.aaitem) as itcat,
			adrsactions.aainvoicehead,
			adrsactions.aainvoiceline,
			if (adrsactions.aatiming <> 0 OR (adrsactions.aaaction = -8 and  isnull(adrsactions.aaqty,0) > 0 )) AND  
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
| aastatus |
| aacomment |
| aadesc |
| aacreadate |
| aastsdat |
| aamoddat |
| aamoduser |
| aafileref |
| aafileline |
| aawfhead |
| aawfline |
| aawfsuccess |
| aawffinish |
| aagroup |
| aarealtiming |
| aawccost |
| aauscost |
| aarealcost |
| date_string |
| timing_string |
| aainvstatus |
| aacontactid_text |
| aafileline_text |
| aafileref_text |
| aainvstatus_text |
| tps_budget |
| tps_prest |
| aaquoteval |
| aaqty |
| aaitem |
| itcat |
| aainvoicehead |
| aainvoiceline |
| sort |
| aacoeff |
| aatoinv |

