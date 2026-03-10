# d_qry_presttimesheet_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
 SELECT users.uscode,
		users.usname,
		choiceline.clline as catrhcode,
		if timing = 0 then '' else choiceline.clname endif as catrh, 
		(SELECT round(isnull(sum(adrsactions.aatiming),0) / 60,4)
			FROM adrsactions, activities
			WHERE date(calline.cldate) = date(adrsactions.aaactiondate) AND
				adrsactions.aaaction = activities.accode AND
				activities.acrh = catrhcode AND
				adrsactions.aarespons = users.uscode) as timing,
		date(calline.cldate) as cdate 
    FROM calline, 
		users,
		choiceline
   WHERE calline.clcode = '#CRM#' AND
		choiceline.clcode = 'ACRH' AND  
		choiceline.clline >= 0 AND 
		(catrhcode = 0 OR timing > 0) AND
		calline.cldate between :adt_start and :adt_stop   
      
ORDER BY users.uscode,
		users.usname, 
		cdate,
		catrhcode,
		catrh    




/*

  SELECT adrsactions.aarespons,
		users.usname,
		choiceline.clname, 
		round(sum(adrsactions.aatiming) / 60,4) as timing,
		date(calline.cldate) as cdate 
    FROM calline LEFT OUTER JOIN adrsactions ON date(calline.cldate) = date(adrsactions.aaactiondate) 
		LEFT OUTER JOIN activities ON ( adrsactions.aaaction = activities.accode ) 
		LEFT OUTER JOIN users ON adrsactions.aarespons = users.uscode 
		LEFT OUTER JOIN choiceline ON choiceline.clline = activities.acrh AND choiceline.clcode = 'ACRH' 
   WHERE 
		calline.clcode = '#CRM#' AND
		calline.cldate between :adt_start and :adt_stop   
   
GROUP BY adrsactions.aarespons,
		users.usname,
		choiceline.clname, 
		cdate  
  
ORDER BY adrsactions.aarespons,
		users.usname, 
		cdate,
		choiceline.clname   */

```

## Colonnes
| Colonne |
|---------|
| users_uscode |
| users_usname |
| choiceline_catrhcode |
| catrh |
| timing |
| cdate |

