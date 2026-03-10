# d_qry_sal_prev_detail_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
SELECT '40' as sort,
		'Commande liée à un jalon' as typdesc,
		filehead.fhcode as fhcode,
		filehead.fhdesc as fhdesc, 
		adresses.adcode as adcode,
		adresses.adname as adname,
		slsalval as slsalval,
		condline.clratio,
		jalons.jaexpdate,
		string(salhead.shcode) + '/'+ string(salline.slline) as identifier  
			
 FROM filehead LEFT OUTER JOIN adresses ON 
					filehead.fhadid = adresses.adcode,
		salline,
		salhead,  
		condhead, 
		condline,
		jalons

 WHERE salhead.shcode = salline.slcode AND
		salline.slstdcondition = condhead.chcode AND
		condhead.chcode = condline.clcode AND
		condline.cljalon = jalons.jacode AND
		salline.slfileref = filehead.fhcode AND
		salline.slstatus < '6' AND
		jalons.jastatus < '9' AND
		isnull(jalons.jaref, 0) <> 1 AND
		condline.clactiv = 'Y' AND
		condline.clinvclot = 'N' AND
		salline.slsalval > 0  

UNION ALL 
  /*os1151*/
SELECT '40' as sort,
		'Commande liée à un jalon' as typdesc,
		'' as fhcode,
		'Hors Affaire' as fhdesc, 
		adresses.adcode as adcode,
		adresses.adname as adname,
		slsalval as slsalval,
		condline.clratio,
		jalons.jaexpdate,
		string(salhead.shcode) + '/'+ string(salline.slline) as identifier  
			
 FROM adresses,
		salline,
		salhead,  
		condhead, 
		condline,
		jalons

 WHERE salhead.shcode = salline.slcode AND
		salline.slstdcondition = condhead.chcode AND
		condhead.chcode = condline.clcode AND
		condline.cljalon = jalons.jacode AND
		(salline.slfileref is null or salline.slfileref = 0) AND
		salhead.shcust = adresses.adcode AND
		salline.slstatus < '6' AND
		jalons.jastatus < '9' AND
		isnull(jalons.jaref, 0) <> 1 AND
		condline.clactiv = 'Y' AND
		condline.clinvclot = 'N' AND
		salline.slsalval > 0  

UNION ALL 
  
SELECT '41' as sort,
		'Commande liée à un jalon à la commande' as typdesc,
		filehead.fhcode as fhcode,
		filehead.fhdesc as fhdesc, 
		adresses.adcode as adcode,
		adresses.adname as adname,
		salline.slsalval ,
	
```

## Colonnes
| Colonne |
|---------|
| sort |
| typdesc |
| fhcode |
| fhdesc |
| adcode |
| adname |
| slsalval |
| clratio |
| jaexpdate |
| identifier |

