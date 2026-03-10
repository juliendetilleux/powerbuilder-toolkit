# d_act_invoicable

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aaadrid, 
			adresses.adname,    
         adrsactions.aacode,   
         items.itname, 
			adrsactions.aaquoteval, 
			adrsactions.aatiming as aarealtiming,
			items.itcat,
			adresses.adloc,
			adresses.adinvm,
			adresses.adinvattention, 
			adrsactions.aaquoteval, 
			adrsactions.aaqty,
			items.itum,
			adrsactions.aasalorder,
			adrsactions.aasalline,
		  	adrsactions.aafileref,
		  	adrsactions.aafileline,
			items.itcode,
		  	adrsactions.aadesc,
		  	adrsactions.aacomment,
			adrsactions.aaactiondate,
			adrsactions.aarespons,
			(select fhdesc from filehead where fhcode = adrsactions.aafileref) as fileref,
			(select fldesc from fileline where flcode = adrsactions.aafileref and
														  flline = adrsactions.aafileline) as fileline
    FROM adrsactions, 
			adresses, 
			items  
	WHERE adrsactions.aaaction = -8 AND 
			adrsactions.aastatus = 3 AND 
			adrsactions.aaadrid = adresses.adcode AND 
			adrsactions.aaitem = items.itcode AND 
			((adrsactions.aainvoicehead = 0 or adrsactions.aainvoicehead is null) AND 
				(adrsactions.aainvoiceline = 0 or adrsactions.aainvoiceline is null)) AND
			isnull(adrsactions.aatoinv, 'Y') <> 'N'  
  
ORDER BY adrsactions.aaadrid, 
			adrsactions.aacode

```

## Colonnes
| Colonne |
|---------|
| aaadrid |
| adresses_adname |
| aacode |
| items_itname |
| adrsactions_aaquoteval |
| adrsactions_aarealtiming |
| items_itcat |
| adresses_adloc |
| adresses_adinvm |
| adresses_adinvattention |
| adrsactions_aaquoteval |
| adrsactions_aaqty |
| items_itum |
| adrsactions_aasalorder |
| adrsactions_aasalline |
| adrsactions_aafileref |
| adrsactions_aafileline |
| items_itcode |
| adrsactions_aadesc |
| adrsactions_aacomment |
| adrsactions_aaactiondate |
| adrsactions_aarespons |
| cfileref |
| cfileline |

