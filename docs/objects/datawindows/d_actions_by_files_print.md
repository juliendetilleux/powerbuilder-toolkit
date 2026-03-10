# d_actions_by_files_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
SELECT Adrsactions.aaadrid,   
		Adresses.adname,
		Adrsactions.aacode,   
		Adrsactions.aadesc,   
		Adrsactions.aaaction,   
		Adrsactions.aarespons,   
		Adrsactions.aatiming,    
		Adrsactions.aastatus,
		if Adrsactions.aaactiondate is null
					or date(Adrsactions.aaactiondate) = date('1900/01/01')
					or date(Adrsactions.aaactiondate) = date('2000/01/01')
				then date('2999-12-31')
				else Adrsactions.aaactiondate
				endif as actiondate,
		Filehead.fhcode,
		Filehead.fhdesc
	FROM Adresses,
		Filehead,
		Adrsactions
	WHERE filehead.fhadid = Adresses.adcode
		AND Adrsactions.aastatus IN ('1','3')
		AND Adrsactions.aafileref = Filehead.fhcode
	ORDER BY Filehead.fhcode,Actiondate
```

## Colonnes
| Colonne |
|---------|
| aaadrid |
| adresses_adname |
| aacode |
| aadesc |
| aaaction |
| aarespons |
| aatiming |
| aastatus |
| actiondate |
| filehead_fhcode |
| fhdesc |

