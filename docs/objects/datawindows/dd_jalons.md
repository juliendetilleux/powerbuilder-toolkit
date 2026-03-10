# dd_jalons

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT jalons.jacode,   
         jalons.jatype,   
         (select choices.chname from choices where choices.chtype = 'JATY' and choices.chactiv = 'Y' and choices.chcode = jalons.jatype) as type_desc,   
         jalons.jaexpdate,   
         jalons.jadesc,   
         jalons.jaintext  ,
			jalons.jaref,
			jalons.jafileref,
			jalons.jafileline,
			(select fileline.fldesc from fileline where fileline.flcode = jalons.jafileref and fileline.flline = jalons.jafileline ) as fileline
    FROM jalons  
   WHERE jalons.jastatus < '9' AND
		(jalons.jafileref is null) and 
		jalons.jacode not in (select jalons.jaref 
										from jalons
										where jalons.jastatus < '9' AND
											jalons.jafileref = :al_fileref AND
											jalons.jatype = 'R')
  
 UNION  
  
  SELECT jalons.jacode,   
         jalons.jatype,   
         (select choices.chname from choices where choices.chtype = 'JATY' and choices.chactiv = 'Y' and choices.chcode = jalons.jatype),   
         jalons.jaexpdate,   
         jalons.jadesc,   
         jalons.jaintext,
			jalons.jaref  ,
			jalons.jafileref,
			jalons.jafileline,
			(select fileline.fldesc from fileline where fileline.flcode = jalons.jafileref and fileline.flline = jalons.jafileline ) as fileline
    FROM jalons  
   WHERE jalons.jastatus < '9' AND
		(jalons.jafileref = :al_fileref)  
 ORDER BY 6 DESC,
		2 ASC,   
         1 ASC   

```

## Colonnes
| Colonne |
|---------|
| jacode |
| jatype |
| type_desc |
| jaexpdate |
| jadesc |
| jaintext |
| jaref |
| jafileref |
| jafileline |
| fileline |

